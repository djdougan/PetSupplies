using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.Extensions.Logging;

namespace API.SeedData{

     public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context, ILoggerFactory loggerFactory){

            try{
                if(!context.ProductTypes.Any()){
                    var typeData = File.ReadAllText("./SeedData/product-type.json");
                    var types = JsonSerializer.Deserialize<List<ProductType>>(typeData);
                    foreach( var type in types){
                        context.ProductTypes.Add(type);
                    }

                    await context.SaveChangesAsync();
                }

                if(!context.ProductBrands.Any()){
                    var brandData = File.ReadAllText("./SeedData/product-brand.json");
                    var brands = JsonSerializer.Deserialize<List<ProductBrand>>(brandData);
                    foreach( var brand in brands){
                        context.ProductBrands.Add(brand);
                    }
                    await context.SaveChangesAsync();
                }
                if(!context.Products.Any()){
                    var productData = File.ReadAllText("./SeedData/product.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productData);
                    foreach( var product in products){
                        context.Products.Add(product);
                    }
                    await context.SaveChangesAsync();
                }

            }catch(Exception ex){
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}