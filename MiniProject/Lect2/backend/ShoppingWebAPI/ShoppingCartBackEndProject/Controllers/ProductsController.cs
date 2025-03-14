using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingCartApi.Data;
using ShoppingCartApi.Models;
using ShoppingCartBackEndProject.Models;


namespace ShoppingCartApi.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IWebHostEnvironment _env;

        public ProductsController(ApplicationDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(int? mainCategoryId, int? subCategoryId)
        {
            var query = _context.Products.AsQueryable();

            if (subCategoryId.HasValue)
            {
                query = query.Where(p => p.CategoryId == subCategoryId.Value);
            }
            else if (mainCategoryId.HasValue)
            {
                query = query.Where(p => p.Category.ParentCategoryId == mainCategoryId.Value);
            }
           

            return await query.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Product>> AddProduct([FromForm] Product product, IFormFile image)
        {
            if (image != null && image.Length > 0)
            {
                var filePath = Path.Combine(_env.WebRootPath, "Images", image.FileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await image.CopyToAsync(stream);
                }

                product.ImageUrl = $"{Request.Scheme}://{Request.Host}/Images/{image.FileName}";
            }

            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProducts), new { id = product.Id }, product);
        }

        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");

            var filePath = Path.Combine(_env.WebRootPath, "Images", file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var imageUrl = $"{Request.Scheme}://{Request.Host}/Images/{file.FileName}";
            return Ok(new { ImageUrl = imageUrl });
        }
    }
}