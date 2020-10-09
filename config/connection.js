require("dotenv").config();
var mysql = require("mysql");


var connection;

if(process.env.JAWSDB_URL) {
  
connection = mysql.CreateConnection(process.env.JAWSDB_URL)

} else {

connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "tacos_db"
  
  });
}
  
  connection.connect(function (err) {
  
    if (err) {

      console.error("error with connecting to: " +err.stackj);
      return;

    }
  
    console.log("Connected as ID# " + connection.threadId + "\n");

  });

  module.exports = connection;