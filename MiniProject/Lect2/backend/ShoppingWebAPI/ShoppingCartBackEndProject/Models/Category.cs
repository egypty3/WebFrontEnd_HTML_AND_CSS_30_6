namespace ShoppingCartBackEndProject.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? ParentCategoryId { get; set; }

        // Navigation property for related products
        public ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
