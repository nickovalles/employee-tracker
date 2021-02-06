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


// Search Features
// Package?
// .prompt
function runSearch() {
    inquirer
    .prompt({
        type: 'list',
        name: 'action',
        message: 'What Would You Like To Do?',
        choices: ['View All Departments',
            'View All Roles',
            'View All Employees',
            'Add A Department',
            'Add a Role',
            'Add an Employee',
            'Update Employee Role',
        new inquirer.Separator()
    ]
    })
    // Inset Switch statements based on user response
    .then(function (answer){
        console.log(answer.action);
        switch (answer.action) {
            case "View All Departments":
                viewDepartments();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "Add a Department":
                addDepartment();
                break;

            case "Add a Role":
                addRole();
                break;

            case "Add an Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updatedEmployee();
                break;
                
        }
    });
}


// Create function to VIEW all departments in CMS

// Create function to VIEW all roles in CMS

// Create function to VIEW all employees in CMS

// Create function to ADD new department in CMS

// Create function to ADD new roles in CMS

// Create function to ADD new employees in CMS

