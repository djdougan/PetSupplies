using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IProductTypeRepository: IGenericRepository<ProductType>
    {
        Task<IEnumerable<ProductType>> GetAllAsync();
    }
}

