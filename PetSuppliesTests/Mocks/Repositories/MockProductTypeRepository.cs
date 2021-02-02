using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetSuppliesTests.Mocks.Repositories
{
    class MockProductTypeRepository : IProductTypeRepository
    {
        public Task<ProductType> CreateAsync(ProductType entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ProductType>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ProductType> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ProductType> UpdateAsync(ProductType entity)
        {
            throw new NotImplementedException();
        }
    }
}
