using API.Helpers;
using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Moq;

namespace PetSuppliesTests.Mocks.Repositories
{
    public class MockProductRepository : Mock<IProductRepository>
    {

        public MockProductRepository MockCreateAsync(Task<Product> result, Product product)
        {
            Setup(x => x.CreateAsync(product)).Returns(result);
            return this;
        }

        public MockProductRepository DeleteAsync(Task task)
        {
            Setup(x => x.DeleteAsync(It.IsAny<int>())).Returns(task);
            return this;
        }

        public MockProductRepository MockGetAllAsync(Task<IEnumerable<Product>> results, ProductQueryParameters queryParameters)
        {

            Setup(x => x.GetAllAsync(queryParameters)).Returns(results);

            return this;
        }

        public MockProductRepository MockGetByIdAsync(Task<Product> result)
        {
            Setup(x => x.GetByIdAsync(It.IsAny<int>())).Returns(result);
            return this;
        }

        public MockProductRepository MockUpdateAsync(Task<Product> result, Product product)
        {
            Setup(x => x.UpdateAsync(product)).Returns(result);
            return this;
        }

      


    }
}
