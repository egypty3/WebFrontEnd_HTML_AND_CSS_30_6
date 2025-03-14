
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ShoppingWebAPI.Data;
using ShoppingWebAPI.Models;

namespace ShoppingWebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<ShoppingDbContext>(options =>
            {
                options.UseSqlServer(builder.Configuration.GetConnectionString("ShoppingDb"));
            });

            builder.Services.AddCors(
                options =>
                    options.AddPolicy("AllowAll", p => p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader())
            );
            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            builder.Services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ShoppingWebAPI", Version = "v1" });
            });
            var app = builder.Build();
            
            app.UseCors("AllowAll"); ;

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ShoppingWebAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            using (var scope = app.Services.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ShoppingDbContext>();
                if (!context.Categories.Any())
                {
                    context.Categories.AddRange(new List<Category>
                        {
                            new Category {Name = "Electronics" },                           
                        }
                    );
                    context.SaveChanges();
                }

                if (!context.Products.Any())
                {
                    context.Products.AddRange(new List<Product>
                        {
                            new Product {Name = "Laptop", Price = 1000, ImageUrl = "laptop.jpg", CategoryID = 1 },
                            new Product {Name = "Smartphone", Price = 500, ImageUrl = "smartphone.jpg" , CategoryID = 1},
                            new Product {Name = "Headphones", Price = 200, ImageUrl = "headphones.jpg" , CategoryID = 1 },
                        }
                    );
                    context.SaveChanges();
                }
            }

            app.Run();
        }
    }


}
