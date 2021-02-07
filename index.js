// insert packages here
var inquirer = require('inquirer');
var consoleTable = require('console.table');
var mysql = require('mysql');

// create connection here 
// test why the connection isnt working 
// go over the documentation
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'UofUboot2020#',
    database: 'employee_db',
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

            case "View All Employees";
                viewEmployees();
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
function viewDepartments() {
    connection.query('SELECT * FROM department', function (err, results) {
        console.log("");
        console.table(results);
        if (err) throw err;
    });   
    runSearch();
}

// Create function to VIEW all roles in CMS
function viewRoles() {
    connection.query('SELECT * FROM roles', function(err, results) {
        console.log("");
        console.table(results);
        if (err) throw err;
    });
    runSearch();
}

// Create function to VIEW all employees in CMS
function viewEmployees() {
    var query = 'SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title, department.name AS department, roles.salary FROM employee LEFT JOIN roles on employee.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id';
    connection.query(query, function(err, results) {
        console.log("");
        console.table(results);
        if (err) throw err;
    });
    runSearch();
}

// Create function to ADD new department in CMS
function addDepartment() {
    inquirer
    .prompt({
        type: 'input',
        message: 'Enter Department Name',
        name: 'department'
    })
    .then(function(answer) {
        connection.query(
            'INSERT INTO department SET ?',
            {name: answer.department},
            function(err, answer) {
                if (err) {
                    throw err;
                }
            }
        ),
        console.log("");
        console.table(answer);
        runSearch();
    })
}

// Create function to ADD new roles in CMS
function addRole() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter employee role',
        name: 'addroles'
    },
    {
        type: 'input',
        message: 'Enter employee salary',
        name: 'addsalary'
    },
    {
        type: 'input',
        message: 'Enter employee department id',
        name: 'addDeptId'
    }
    ])
    .then(function(answer) {
        connection.query(
            'INSERT INTO roles SET ?',
            {
                title: answer.addroles,
                salary: answer.addsalary,
                department_id: answer.addDeptId
            }
        ),
        console.log("");
        console.log(answer);
        runSearch();
    })
}


// Create function to ADD new employees in CMS
function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter employee first name',
            name: 'firstname'
        },
        {
            type: 'input',
            message: 'Enter employee last name',
            name: 'lastname'
        },
        {
            type: 'input',
            message: 'What is the employees role id',
            name: 'rolesID'
        },
        {
            type: 'input',
            message: 'What is the employees manager id',
            name: 'managerID'
        }
    ])
    .then(function(answer) {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: answer.firstname,
                last_name: answer.lastname,
                roles_id: answer.rolesID,
                manager_id: answer.managerID
            },
            function(err, answer) {
                if (err) {
                    throw err;
                }
                console.log("");
                console.table(answer);
            }
        );
        runSearch();
    });
}

// UPDATE

function updateEmployee() {
    inquirer
      .prompt({
        name: "id",
        type: "input",
        message: "Enter employee id",
      })
      .then(function (answer) {
        var id = answer.id;
  
        inquirer
          .prompt({
            name: "roleId",
            type: "input",
            message: "Enter role id",
          })
          .then(function (answer) {
            var roleId = answer.roleId;
  
            var query = "UPDATE employee SET roles_id=? WHERE id=?";
            connection.query(query, [roleId, id], function (err, res) {
              if (err) {
                console.log(err);
              }
              runSearch();
            });
          });
      });
  }
