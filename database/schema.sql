/* DROP */

DROP DATABASE IF EXISTS employeedata;

/* CREATE DB */
CREATE DATABASE employeedata;
USE employeedata;

/* CREATE table dept */
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

/* CREATE table roles */
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL (10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

/* CREATE table employees */
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id) REFERENCES roles(id)
);