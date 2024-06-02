// create database connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'admin'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
connection.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
    console.log("Database connected");
});
});