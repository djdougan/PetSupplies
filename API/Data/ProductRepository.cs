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
    public class ProductRepository: GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(StoreContext context) :base(context)
        {

        }

        public async Task<IEnumerable<Product>> GetAllAsync(ProductQueryParameters queryParameters)
        {
            try
            {
                var products = _context.Products.AsQueryable().Include("ProductType").Include("ProductBrand");

                if (!products.Any())
                {
                    return new List<Product>();
                }

                if (queryParameters.UPC != null)
                {
                    products = products.Where(p => p.UPC.Contains(queryParameters.UPC));
                    if (!products.Any())
                    {
                        return new List<Product>();
                    }
                }
                else
                {
                    if (queryParameters.Name != null)
                    {
                        products = products.Where(p => p.Name.ToLower().Contains(queryParameters.Name.ToLower()));
                    }

                    if (queryParameters.MinPrice != null && queryParameters.MaxPrice != null)
                    {
                        products = products.Where(x => x.Price >= queryParameters.MinPrice.Value && x.Price <= queryParameters.MaxPrice.Value);

                    }
                    if (queryParameters.ProductBrand != null)
                    {
                        products = products.Where(p => p.ProductBrand.Name.ToLower().Contains(queryParameters.ProductBrand.ToLower()));
                    }
                    if (queryParameters.ProductType != null)
                    {
                        products = products.Where(p => p.ProductType.Name.ToLower().Contains(queryParameters.ProductType.ToLower()));
                    }
                    if (queryParameters.Description != null)
                    {
                        products = products.Where(p => p.Description.ToLower().Contains(queryParameters.Description.ToLower()));
                    }


                    if (!string.IsNullOrEmpty(queryParameters.SortBy))
                    {
                        if (typeof(Product).GetProperty(queryParameters.SortBy) != null)
                        {
                            products = products.OrderByCustom(queryParameters.SortBy, queryParameters.SortOrder);
                        }
                    }

                    products = products.Skip(queryParameters.Size * (queryParameters.Page - 1))
                    .Take(queryParameters.Size);
                }
                return await products.ToListAsync();

            }
            catch (Exception ex)
            {
                throw new Exception($"Couldn't retrieve entities: {ex.Message}");
            }
        }

    }
}