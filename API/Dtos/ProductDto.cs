using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Dtos
{
    public class ProductDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string UPC { get; set; }
        [Required]
        public string NetWeight { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public string PictureUrl { get; set; }

        public IFormFile Image { get; set; }
        [Required]
        public ProductTypeDto ProductTypeDto { get; set; }
        [Required]
        public int ProductTypeId { get; set; }
        [Required]
        public ProductBrandDto ProductBrandDto { get; set; }
        [Required]
        public int ProductBrandId { get; set; }
    }
}
