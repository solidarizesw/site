create database if not exists solidarizesw;
use solidarizesw; 

CREATE TABLE if not exists administrador(
	id_admin int primary key not null auto_increment,
    email varchar(60) not null,
    senha varchar(60) not null
);

CREATE TABLE if not exists participantes(
	id int primary key not null auto_increment,
    nome varchar(60) not null,
    email varchar(60) not null,
    curso varchar(45) not null, 
    motivacao varchar(200) not null,
    status varchar(20) not null
);

CREATE TABLE if not exists projeto(
	id_proj int primary key not null auto_increment,
    nome varchar(60) not null,
    descricao varchar(200) not null,
    status varchar(20) not null,
    participantes_id int not null,
    CONSTRAINT fk_projeto_participantes foreign key (participantes_id) 
    REFERENCES participantes (id)
    on delete no action
    on update no action
);