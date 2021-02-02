

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Extensions;
using API.Helpers;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using API.Interfaces;
using API.Dtos;
using AutoMapper;

namespace API.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productRepo;

        public ProductsController(IProductRepository productRepo)
        {
            this._productRepo = productRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts([FromQuery] ProductQueryParameters queryParameters)
        {
            var products = await _productRepo.GetAllAsync(queryParameters);
           // var data = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductDto>>(products);
            if (!products.Any())
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct(int id)
        {
            var product = await _productRepo.GetByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<IEnumerable<Product>>> UpdateProduct(int id, [FromBody] Product product)
        {
            if(id != product.Id)
            {
                return BadRequest();
            }
            var updated = await _productRepo.UpdateAsync(product);
            if (updated == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> Delete(int id)
        {
            await _productRepo.DeleteAsync(id);
            return Ok();
        }



    }
}