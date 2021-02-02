

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace API.Models{
    public class Product: BaseEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [MaxLength(12)]
        public string UPC {get; set; }
        [Required]
        [MaxLength(20)]
        public string NetWeight{get; set; }
        [Required]
        [DataType(DataType.Currency)]
        public decimal Price{ get; set; }
        [Required]
        [MaxLength(200)]
        public string PictureUrl{get; set;}
        
        [NotMapped]
        public IFormFile Image{get; set; }
        [Required]
        public ProductType ProductType{get; set; }
        [Required]
        public int ProductTypeId{get; set; }
        [Required]
        public ProductBrand ProductBrand{get; set; }
        [Required]
        public int ProductBrandId{get; set;}
    }
}