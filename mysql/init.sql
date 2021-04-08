CREATE DATABASE IF NOT EXISTS nodedb;
USE nodedb;
CREATE TABLE IF NOT EXISTS user (id int not null auto_increment, PRIMARY KEY(id), nome varchar(250));