DROP DATABASE IF EXIST employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL
);

USE employee_db;
INSERT INTO department (name)
VALUES ('Production'),
       ('Marketing'),
       ('Accounting'),
       ('Research and Development');

INSERT INTO role (id, title, salary, department_id)
VALUES (001, 'Team Lead', 200,000, 1),
       (002, 'CEO', 10,000,000, 3),
       (003, 'Sales', 35,000, 2),
       (004, 'Manager', 233,444, 1),
       (005, 'Media', 50,000, 4),
       (006, 'Manager Assistant', 45,000);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Gary', 'Sanderson', 1, NULL),
       (002, 'Jason', 'Hudson', 2, NULL),
       (003, 'Rondald', 'Daniels', 3,),
       (004, 'Frank', 'Woods', 5, NULL),
       (005, 'Vladimir', 'Makarov', 6),
       (006, 'Victor', 'Reznov', 4, NULL),
       (007, 'John', 'Price', 8,),
       (008, 'Ghost', 'MWTWO');
