const mysql = require('mysql');
const inquirer = require('inquirer');
const { connect } = require('http2');
require('console.table');

const promtMessages = {
    viewAllDepartments: "View All Departments",
    viewALLEmployees: "View All Employees",
    viewALLRoles: "View All Roles",
    addEmployee: "Add an employee",
    addDepartment: "Add a department",
    addRole: "Add a role",
    updateEmployeeRole: "Update an employee Role",
    exit: "Exit"
};

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3001,

    user: 'root',

    password: 'Uchiaclan1!',
});

connection.connect(err => {
    if (err) throw err;
    prompt();
});

function prompt () {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                promtMessages.viewALLEmployees,
                promtMessages.viewAllDepartments,
                promtMessages.viewALLRoles,
                promtMessages.addDepartment,
                promtMessages.addEmployee,
                promtMessages.addRole,
                promtMessages.updateEmployeeRole,
                promtMessages.exit
            ]
        })
}