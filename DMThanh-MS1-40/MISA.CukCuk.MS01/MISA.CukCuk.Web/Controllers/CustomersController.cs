using Dapper;
using Microsoft.AspNetCore.Mvc;
using MISA.CukCuk.Web.Models;
using MISA.DL;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.CukCuk.Web.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        DbConnector dbConnector;
        public CustomersController()
        {
            dbConnector = new DbConnector();
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(dbConnector.GetAllData<Customer>());
        }
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return Ok(dbConnector.GetById<Customer>(id));
        }


    }
}
