require("dotenv").config();
var mysql = require("mysql");


var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "tacos_db"
  
  });
  
  connection.connect(function (err) {
  
    if (err) {

      console.error("error with connecting to: " +err.stackj);
      return;

    }
  
    console.log("Connected as ID# " + connection.threadId + "\n");

  });

  module.exports = connection;