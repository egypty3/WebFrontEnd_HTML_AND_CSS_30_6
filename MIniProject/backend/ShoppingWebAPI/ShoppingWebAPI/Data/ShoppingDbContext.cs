using Microsoft.EntityFrameworkCore;
using ShoppingWebAPI.Models;

namespace ShoppingWebAPI.Data
{
    public class ShoppingDbContext :DbContext
    {
        public ShoppingDbContext(DbContextOptions<ShoppingDbContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

    }
}
