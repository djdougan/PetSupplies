using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class TypesController : ControllerBase
    {
        private readonly IProductTypeRepository _typeRepository;

        public TypesController(IProductTypeRepository typeRepository)
        {
            _typeRepository = typeRepository;
        }
        // GET: TypesController
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductType>>> GetAllTypes()
        {
            try
            {
                var types = await _typeRepository.GetAllAsync();
                if (!types.Any())
                {
                    return NotFound();
                }

                return Ok(types);
            }catch( Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: TypesController/Get/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductType>> GetById(int id)
        {
            try
            {
                var type = await _typeRepository.GetByIdAsync(id);
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


        // POST: Types/Create
        [HttpPost]
        public async  Task<ActionResult<ProductType>> Create([FromBody] ProductType productType)
        {
            if(productType == null)
            {
                return BadRequest("Product Type cannot be null");
            }
            var newType = await _typeRepository.CreateAsync(productType);
            return Ok(newType);
        }

        // POST: Types/Edit/5
        [HttpPut("{id}")]
        public async Task<ActionResult<ProductType>> UpdateType(int id, ProductType productType)
        {
            if(id != productType.Id)
            {
                return BadRequest("Ids do not match.");
            }
            var updated = await _typeRepository.UpdateAsync(productType);
            return Ok(updated);
        }

        // GET: Types/Delete/
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _typeRepository.DeleteAsync(id);
            return Ok();
        }

    }
}
