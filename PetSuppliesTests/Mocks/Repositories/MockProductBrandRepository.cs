using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetSuppliesTests.Mocks.Repositories
{
    public class MockProductBrandRepository : IProductBrandRepository
    {
        public Task<ProductBrand> CreateAsync(ProductBrand entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ProductBrand>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ProductBrand> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ProductBrand> UpdateAsync(ProductBrand entity)
        {
            throw new NotImplementedException();
        }
    }
}
