show databases ;
create database if not exists practicas_iniciales;
use practicas_iniciales;

create table persona (
    id integer auto_increment not null ,
    nombre varchar(50) not null ,
    apellido varchar(50) not null ,
    genero enum ('h','m'),
    primary key (id)
);

insert into persona(nombre,apellido,genero)
values('Juan','Roman','h');
insert into persona(nombre,apellido,genero)
values('Pedro','Alzacar','h');
insert into persona(nombre,apellido,genero)
values('Maria','Solares','m');
insert into persona(nombre,apellido,genero)
values('Miriam','Quiroz','m');
insert into persona(nombre,apellido,genero)
values('Andre','Ruglas','h');
insert into persona(nombre,apellido,genero)
values('Ami','Vivar','m');

select * from persona;