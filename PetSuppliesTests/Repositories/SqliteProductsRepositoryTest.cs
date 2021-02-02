using API.Controllers;
using API.Data;
using API.Helpers;
using Microsoft.EntityFrameworkCore;
using PetSuppliesTests.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace PetSuppliesTests.Controllers
{
    public class SqliteProductsRepositoryTest : ProductRepositoryTests
    {
        public SqliteProductsRepositoryTest():base(
            new DbContextOptionsBuilder<StoreContext>()
                .UseSqlite("Filename=Test.db")
                .Options
            )
        {

        }

        [Fact]
        public async Task Can_get_items()
        {
            using (var context = new StoreContext(ContextOptions))
            {
                var queryParameters = new ProductQueryParameters();
                var repo = new ProductRepository(context);

                var items = await repo.GetAllAsync(queryParameters);

                Assert.Equal(4, items.Count());
                Assert.Equal("Name1", items.ElementAt(0).Name);
                Assert.Equal("Name2", items.ElementAt(1).Name);
                Assert.Equal("Name3", items.ElementAt(2).Name);
                Assert.Equal("Name4", items.ElementAt(3).Name);
            }
        }

        [Fact]
        public async Task Can_get_items_by_name_query()
        {
            using (var context = new StoreContext(ContextOptions))
            {
                var queryParameters = new ProductQueryParameters();
                queryParameters.Name = "Name2";
                var repo = new ProductRepository(context);

                var items = await repo.GetAllAsync(queryParameters);

                Assert.Equal(1, items.Count());

                Assert.Equal("Name2", items.ElementAt(0).Name);
            }
        }

        [Fact]
        public async Task Can_get_items_by_mon_max_price_query()
        {
            using (var context = new StoreContext(ContextOptions))
            {
                var queryParameters = new ProductQueryParameters();
                queryParameters.MinPrice = 2.00M;
                queryParameters.MaxPrice = 3.00M;
                var repo = new ProductRepository(context);

                var items = await repo.GetAllAsync(queryParameters);

                Assert.Equal(2, items.Count());
                Assert.Equal("Name2", items.ElementAt(0).Name);
                Assert.Equal(2.00M, items.ElementAt(0).Price);
                Assert.Equal("Name3", items.ElementAt(1).Name);
                Assert.Equal(3.00M, items.ElementAt(1).Price);
            }
        }

        [Fact]
        public async Task Can_get_items_descending_order()
        {
            using (var context = new StoreContext(ContextOptions))
            {
                var queryParameters = new ProductQueryParameters();
                queryParameters.SortBy = "Price";
                queryParameters.SortOrder = "desc";

                var repo = new ProductRepository(context);

                var items = await repo.GetAllAsync(queryParameters);

                Assert.Equal(4, items.Count());
                Assert.Equal("Name4", items.ElementAt(0).Name);
                Assert.Equal("Name3", items.ElementAt(1).Name);
                Assert.Equal("Name2", items.ElementAt(2).Name);
                Assert.Equal("Name1", items.ElementAt(3).Name);
            }
        }

        [Fact]
        public async Task Can_get_items_by_upc()
        {
            using (var context = new StoreContext(ContextOptions))
            {
                var queryParameters = new ProductQueryParameters();
                queryParameters.UPC = "345678";

                var repo = new ProductRepository(context);

                var items = await repo.GetAllAsync(queryParameters);

                Assert.Equal(1, items.Count());
                Assert.Equal("Name3", items.ElementAt(0).Name);
            }
        }
        [Fact]
        public async Task Can_change_name_description_price()
        {
            using (var context = new StoreContext(ContextOptions))
            {
                var queryParameters = new ProductQueryParameters();
                queryParameters.UPC = "345678";

                var repo = new ProductRepository(context);

                var item = await repo.GetByIdAsync(1);
                item.Name = "Name 11";
                item.Description = "Description 11";
                item.Price = 11.00M;
                item.ProductBrandId = 2;
                item.ProductTypeId = 3;

                var result = await repo.UpdateAsync(item);


                Assert.Equal( "Name 11", result.Name);
                Assert.Equal("Description 11", result.Description );
                Assert.Equal(11.00M, result.Price);
                Assert.Equal(2, result.ProductBrandId);
                Assert.Equal(3, result.ProductTypeId);
            }
        }


    }
}
