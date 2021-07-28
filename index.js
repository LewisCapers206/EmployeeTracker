const mysql = require('mysql');
const inquirer = require('inquirer');
const { connect } = require('http2');
const { exit } = require('process');
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
        .then(anwser => {
            console.log('anwser', anwser);
            switch (anwser.action) {
                case promtMessages.viewALLEmployees:
                    viewALLEmployees();
                    break;
                    

                case promtMessages.viewAllDepartments:
                    viewAllDepartments();
                    break;

                case promtMessages.viewALLRoles:
                    viewALLRoles();
                    break;

                case promtMessages.addDepartment:
                    addDepartment();
                    break;

                case promtMessages.addEmployee:
                    addEmployee();
                    break;

                case promtMessages.addRole:
                    addRole();
                    break;

                case promtMessages.updateEmployeeRole:
                    updateEmployeeRole();
                    break;

                case promtMessages.exit:
                    exit();
            }
        });
}