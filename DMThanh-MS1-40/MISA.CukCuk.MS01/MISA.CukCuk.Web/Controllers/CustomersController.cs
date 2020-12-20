using Dapper;
using Microsoft.AspNetCore.Mvc;
using MISA.CukCuk.Web.Models;
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
        // GET: api/<CustomersController>
        [HttpGet]
        public List<Customer> Get()
        {
            List<Customer> customers = new List<Customer>();
            string connectionString = "User Id=nvmanh;Host=103.124.92.43;Database=MS1_40_DMTHANH_CukCuk ; port=3306;password=12345678;Character Set=utf8";
            using (IDbConnection dbConnection = new MySqlConnection(connectionString))
                //Using giai phong bo nho
            {

                customers = dbConnection.Query<Customer>("Select * From Customer").ToList();
            }
            return customers;
        }

        // GET api/<CustomersController>/5
        [HttpGet("{id}")]
        public Customer Get(Guid id)
        {
            var customer = new Customer();
            string connectionString = "User Id=nvmanh;Host=103.124.92.43;Database=MS1_40_DMTHANH_CukCuk ; port=3306;password=12345678;Character Set=utf8";
            using (IDbConnection dbConnection = new MySqlConnection(connectionString))
            //Using giai phong bo nho
            {
                var sqlQuery = $"SELECT * FROM Customer WHERE CustomerID='{id.ToString()}'";
                customer = dbConnection.Query<Customer>(sqlQuery).FirstOrDefault();
            }
            return customer;
        }

        // POST api/<CustomersController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CustomersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
