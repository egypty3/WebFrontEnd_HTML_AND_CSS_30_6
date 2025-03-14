namespace ShoppingCartBackEndProject.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Now;
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Address { get; set; }
        public List<OrderDetail> OrderDetails { get; set; }
    }
}
