using API.Dtos;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Server.IIS.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class ProductTypeRepository : GenericRepository<ProductType>, IProductTypeRepository
    {
        public ProductTypeRepository(StoreContext context) : base(context)
        {

        }

        public async Task<IEnumerable<ProductType>> GetAllAsync()
        {
            try
            {
                var types = await _context.ProductTypes.ToListAsync();

                if (!types.Any())
                {
                    return new List<ProductType>();
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