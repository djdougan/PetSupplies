using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class BrandsController : ControllerBase
    {
        private readonly IProductBrandRepository _brandRepository;

        public BrandsController(IProductBrandRepository brandRepository)
        {
            _brandRepository = brandRepository;
        }

        // GET: brandsController
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductBrand>>> GetAllBrands()
        {
            try
            {
                var brands = await _brandRepository.GetAllAsync();
                if (!brands.Any())
                {
                    return NotFound();
                }

                return Ok(brands);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: brandsController/Get/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductBrand>> GetById(int id)
        {
            try
            {
                var type = await _brandRepository.GetByIdAsync(id);
                if (type == null)
                {
                    return NotFound();
                }

                return Ok(type);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


        // POST: brands/Create
        [HttpPost]
        public async Task<ActionResult<ProductBrand>> Create([FromBody] ProductBrand ProductBrand)
        {
            if (ProductBrand == null)
            {
                return BadRequest("Product brand cannot be null");
            }
            var newType = await _brandRepository.CreateAsync(ProductBrand);
            return Ok(newType);
        }

        // POST: brands/Edit/5
        [HttpPut("{id}")]
        public async Task<ActionResult<ProductBrand>> UpdateType(int id, ProductBrand ProductBrand)
        {
            if (id != ProductBrand.Id)
            {
                return BadRequest("Ids do not match.");
            }
            var updated = await _brandRepository.UpdateAsync(ProductBrand);
            return Ok(updated);
        }

        // GET: brands/Delete/
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _brandRepository.DeleteAsync(id);
            return Ok();
        }

    }
}
