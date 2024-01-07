Drop DATABASE if EXISTS springdb;
CREATE DATABASE springdb;
Use springdb;

drop table if exists DebitCard;
create table DebitCard(
    debitCardNumber VARCHAR(25) not null unique,
    amount bigint default 0
);

drop table if exists CreditCard;
create table CreditCard(
    creditCardNumber VARCHAR(25) not null unique,
    amount bigint default 0
);


drop table if exists BackAccount;
create table BackAccount (
    customerName VARCHAR(25) not null,
    bankAccountNumber VARCHAR(25) primary key,
    debitCardNumber VARCHAR(25) not null unique,
    creditCardNumber VARCHAR(25) not null unique,   
    FOREIGN KEY (debitCardNumber) REFERENCES DebitCard(debitCardNumber),
    FOREIGN KEY (creditCardNumber) REFERENCES CreditCard(creditCardNumber)
);


drop table if exists CustomerTable;
CREATE TABLE CustomerTable
(
CustomerId INT PRIMARY KEY AUTO_INCREMENT,
CustomerName VARCHAR(50) UNIQUE NOT NULL,
ShippingAddress VARCHAR(50) NOT NULL,
ContactNumber VARCHAR(50) UNIQUE NOT NULL,
EmailId VARCHAR(50) unique NOT NULL 
);

DROP TABLE IF EXISTS LoginTable;
CREATE TABLE LoginTable
(
EmailId VARCHAR(50) UNIQUE Key,
Password VARCHAR(50) NOT NULL ,
FOREIGN KEY (EmailId) REFERENCES CustomerTable(EmailId)
);


insert into customertable (customer_name,shipping_address,contact_number,email_id)values ('Shivraj','some address',2809572957,'snaorem@random.com');
insert into LoginTable values ('snaorem@random','1234');

SELECT * from CustomerTable;
SELECT * from LoginTable; 

show create table logintable;
show create table customertable;
snaorem@random.com	1234

CREATE TABLE `logintable` (   `id` varchar(255) NOT NULL,   `password` varchar(255) DEFAULT NULL,   `email_id` varchar(255) DEFAULT NULL,   PRIMARY KEY (`id`),   UNIQUE KEY `UK_9fdl9sn2l3jfe6t3neh21rqjl` (`email_id`),   CONSTRAINT `FKr7uyk4gqbxf09kmctc6fswvv` FOREIGN KEY (`email_id`) REFERENCES `customertable` (`email_id`) ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci