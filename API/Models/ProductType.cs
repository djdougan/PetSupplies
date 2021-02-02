

using System.ComponentModel.DataAnnotations;

namespace API.Models{
    public class ProductType: BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Name{get; set;}        
    }
}