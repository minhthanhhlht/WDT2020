using Microsoft.AspNetCore.Mvc;
using MISA.Common;
using MISA.CukCuk.Web.Models;
using MISA.DL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.CukCuk.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CustomerGroupsController : ControllerBase
    {
        DbConnector dbConnector;
        public CustomerGroupsController()
        {
            dbConnector = new DbConnector();
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dbConnector.GetAllData<CustomerGroup>());
        }



    }
}
