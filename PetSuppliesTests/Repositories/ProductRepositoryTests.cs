using API.Helpers;
using API.Controllers;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using PetSuppliesTests.Mocks.Repositories;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Moq;
using Microsoft.Data.Sqlite;

namespace PetSuppliesTests.Controllers
{
    public class ProductRepositoryTests
    {
        protected DbContextOptions<StoreContext> ContextOptions { get; }
        public ProductRepositoryTests(DbContextOptions<StoreContext> contextOptions){
            ContextOptions = contextOptions;

            Seed();
        }

        private void Seed()
        {   
            using (var context = new StoreContext(ContextOptions))
            {

                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                context.ProductTypes.AddRange(MockData.GetProductTypes());
                context.ProductBrands.AddRange(MockData.GetProductBrands());
                context.Products.AddRange(MockData.GetProducts());

                context.SaveChanges();
            }
        }
       
    }
}
