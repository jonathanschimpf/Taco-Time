DROP DATABASE IF EXISTS tacos_db;
CREATE DATABASE tacos_db;

USE tacos_db;

CREATE TABLE tacos (
    id INT AUTO_INCREMENT NOT NULL,
    taco_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);