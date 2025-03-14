using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using ShoppingCartApi.Data;
using ShoppingCartBackEndProject.Models;
using System.Text;
using Microsoft.Extensions.FileProviders;


var builder = WebApplication.CreateBuilder(args);
// Set the web root path manually
builder.Environment.WebRootPath = Path.Combine(Directory.GetCurrentDirectory(), "Images");

// Add database context
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add database context
//builder.Services.AddDbContext<ApplicationDbContext>(options =>
//    options.UseInMemoryDatabase("ShoppingCartDb")); // Use InMemoryDatabase

// Configure JWT Authentication
var key = Encoding.UTF8.GetBytes("estore-secret-key");
builder.Services.AddAuthentication("Bearer").AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateIssuer = false,
        ValidateAudience = false,
    };
});


// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
//builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ShoppingCart API", Version = "v1" });
});

var app = builder.Build();
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ShoppingCart API v1"));
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        builder.Environment.WebRootPath),
    RequestPath = "/Images"
});

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    if (!context.Products.Any())
    {
        context.Categories.AddRange(new List<Category>
        {
            new Category { Name = "Men" },
            new Category { Name = "Women" },
            new Category { Name = "Kids" },
            new Category { Name = "Casual Wear" },
            new Category { Name = "Party Wear" },
            new Category { Name = "Foot Wear" },
            new Category { Name = "Accessories" }
        });
        context.SaveChanges();

        var menCategory = context.Categories.FirstOrDefault(c => c.Name == "Men");
        var womenCategory = context.Categories.FirstOrDefault(c => c.Name == "Women");
        var kidsCategory = context.Categories.FirstOrDefault(c => c.Name == "Kids");
        var casualWearCategory = context.Categories.FirstOrDefault(c => c.Name == "Casual Wear");
        var partyWearCategory = context.Categories.FirstOrDefault(c => c.Name == "Party Wear");
        var footWearCategory = context.Categories.FirstOrDefault(c => c.Name == "Foot Wear");
        var accessoriesCategory = context.Categories.FirstOrDefault(c => c.Name == "Accessories");
        casualWearCategory.ParentCategoryId = menCategory.Id;
        partyWearCategory.ParentCategoryId = womenCategory.Id;
        footWearCategory.ParentCategoryId = womenCategory.Id;
        accessoriesCategory.ParentCategoryId = kidsCategory.Id;



        context.Products.AddRange(new List<Product>
        {


            new Product { Name = "Jacket", Price = 100, 
                ImageUrl = "https://localhost:7071/images/shop-1.jpg", CategoryId = partyWearCategory.Id ,Ratings=4.5},
            new Product { Name = "Purse", Price = 25, 
                ImageUrl = "https://localhost:7071/images/shop-2.jpg", CategoryId = kidsCategory.Id ,Ratings=3},
            new Product { Name = "Dress", Price = 45, 
                ImageUrl = "https://localhost:7071/images/shop-3.jpg", CategoryId = partyWearCategory.Id ,Ratings=4 },
            new Product { Name = "Denim Jeans", Price = 50, 
                ImageUrl = "https://localhost:7071/images/shop-4.jpg", CategoryId = casualWearCategory.Id ,Ratings=3.5},
            new Product { Name = "Laced Boots", Price = 65, 
                ImageUrl = "https://localhost:7071/images/shop-5.jpg", CategoryId = footWearCategory.Id ,Ratings=2},
            new Product { Name = "Back pack", Price = 20, 
                ImageUrl = "https://localhost:7071/images/shop-6.jpg", CategoryId = accessoriesCategory.Id ,Ratings=5},
        });
        context.SaveChanges();
        
    }
}


app.Run();