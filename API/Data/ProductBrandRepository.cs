using API.Interfaces;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ProductBrandRepository : GenericRepository<ProductBrand>, IProductBrandRepository
    {
        public ProductBrandRepository(StoreContext context) : base(context)
        {

        }

        public async Task<IEnumerable<ProductBrand>> GetAllAsync()
        {
            try
            {
                var types = await _context.ProductBrands.ToListAsync();

                if (!types.Any())
                {
                    return new List<ProductBrand>();
                }


                return types;

            }
            catch (Exception ex)
            {
                throw new Exception($"Couldn't retrieve entities: {ex.Message}");
            }
        }
    }
}
