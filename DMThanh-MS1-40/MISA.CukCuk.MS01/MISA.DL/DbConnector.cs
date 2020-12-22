using Dapper;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace MISA.DL
{
   public class DbConnector
    {
       
        string connectionString = "User Id=nvmanh;port=3306;password=12345678;Database=MS1_40_DMTHANH_CukCuk;Host=103.124.92.43;Character Set=utf8";
        IDbConnection dbConnection;
        public DbConnector()
        {
            dbConnection = new MySqlConnection(connectionString);
        }
        public IEnumerable<T> GetAllData<T>()
        {
            var tableName = typeof(T).Name;
            var entity = dbConnection.Query<T>($"SELECT * FROM {tableName}");
            return entity;
        }







    }
}
