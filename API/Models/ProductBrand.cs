

using System.ComponentModel.DataAnnotations;

namespace API.Models{
    public class ProductBrand: BaseEntity
    {
        [Required]
        [MaxLength(100)]
        public string Name{get; set;}
        
    }
}