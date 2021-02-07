/* INSERT */
INSERT INTO department (name) 

/* VALUES */
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal"), ("Owner");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales Lead", 100000 , 1),  
("Software Engineer", 120000, 2),
("Lawyer", 190000, 4),
("Accountant", 65000, 3),
("Salesperson", 80000 , 1),
("Lead Engineer", 150000, 2),
("CEO", 1000000, 5);



INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
("Nick", "Ovalles", 6, 7),
("Golda", "Dopp", 5, 6),
("Sara", "Ovalles", 3, 7),
("Mateo", "Francisco", 4, 7),
("Florence", "Ruby", 2, 1),
("Joe", "Biden", 1, 7),
("Lil", "Wayne", 7, 7);
