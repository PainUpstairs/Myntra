using System.ComponentModel.DataAnnotations.Schema;

namespace ReactJsBackend.Models
{
    public class LoginModel
    {
        [ForeignKey("EmailId")]
        public string EmailId { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        public override string ToString()
        { 
            return $"EmailId:${EmailId}, Password:${Password}" ;
        }
    }
}
