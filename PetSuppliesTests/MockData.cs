using API.Helpers;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace PetSuppliesTests
{
    public static class MockData
    {


        public static List<Product> GetProducts()
        {
            return new List<Product>()
            {
                new Product(){
                    Id=1, Name="Name1", Description="Description 1",
                    UPC="123456", NetWeight="1kg", Price=1.00M, PictureUrl="image1.png",
                    ProductBrandId=1, ProductTypeId=1
                },
                new Product() {
                    Id = 2, Name = "Name2", Description = "Description 2",
                    UPC = "234567", NetWeight = "2kg", Price = 2.00M, PictureUrl = "image2.png",
                    ProductBrandId = 1, ProductTypeId = 1
                },
                new Product() {
                    Id = 3, Name = "Name3", Description = "Description 3",
                    UPC = "345678", NetWeight = "3kg", Price = 3.00M, PictureUrl = "image3.png",
                    ProductBrandId = 2, ProductTypeId = 1
                },
                new Product() {
                    Id = 4, Name = "Name4", Description = "Description 4",
                    UPC = "456789", NetWeight = "4kg", Price = 4.00M, PictureUrl = "image4.png",
                    ProductBrandId = 2, ProductTypeId = 3
                }

        };
        }

        public static List<ProductType> GetProductTypes()
        {
            return new List<ProductType>()
            {
                    new ProductType(){Id = 1, Name = "Type 1" },
                    new ProductType(){Id = 2, Name = "Type 2" },
                    new ProductType(){Id = 3, Name = "Type 3" },
            };

        }

        public static List<ProductBrand> GetProductBrands()
        {
            return new List<ProductBrand>()
            {
                    new ProductBrand() { Id = 1, Name = "Brand 1" },
                    new ProductBrand() { Id = 2, Name = "Brand 2" },
                    new ProductBrand() { Id = 3, Name = "Brand 3" }
            };
        }

    }
}