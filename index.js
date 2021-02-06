// insert packages here
var inquirer = require('inquirer');
var consoleTable = require('console.table');
var mysql = require('mysql');

// create connection here 
// test why the connection isnt working 
// go over the documentation
var connection = mysql.createConnection({
    host: '',
    port: '',
    user: '',
    password: '',
    database: '',
});