using System.ComponentModel.DataAnnotations;

namespace ReactJsBackend.Models
{
    public class CustomerModel
    {
        [Key]
        public int CustomerId { get; set; }

        [Required(ErrorMessage = "Customer Name is required")]
        public string CustomerName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Shopping Address is required")]
        public string ShippingAddress { get; set; }= string.Empty;
        [Required(ErrorMessage = "Contact Number is required")]
        public string ContactNumber { get; set; } = string.Empty;
        [Required(ErrorMessage = "Email Id is required")]
        public string EmailId { get; set; } = string.Empty;

    }
}