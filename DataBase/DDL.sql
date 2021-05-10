#Creando base de datos
create database if not exists practicas_iniciales;
use practicas_iniciales;

#Creando tablas
create table usuario (
    id integer auto_increment not null,
    nombre varchar(45) not null,
    apellido varchar(45) not null,
    username varchar(45) not null,
    correo varchar(45) not null,
    password varchar(45) not null,
    biografia text not null,
    fecha date not null,
    primary key (id)
);
create table consola (
    id integer auto_increment not null,
    nombre varchar(45) not null,
    primary key (id)
);
create table juego (
    id integer auto_increment not null,
    id_consola integer not null,
    nombre varchar(45) not null,
    descripcion text not null,
    cartucho varchar(45) not null,
    fecha date not null,
    primary key (id),
    foreign key (id_consola) references consola(id)
);
create table biblioteca (
    id integer auto_increment not null,
    id_usuario integer not null,
    id_juego integer not null,
    puntuacion integer not null,
    opinion text not null,
    primary key (id),
    foreign key (id_usuario) references usuario(id),
    foreign key (id_juego) references juego(id)
);
create table publicacion (
    id integer auto_increment not null,
    id_usuario integer not null,
    id_juego integer not null,
    fecha date not null,
    comentario text not null,
    primary key (id),
    foreign key (id_usuario) references usuario(id),
    foreign key (id_juego) references juego(id)
);
create table comentario (
    id integer auto_increment not null,
    id_usuario integer not null,
    id_publicacion integer not null,
    comentario text not null,
    primary key (id),
    foreign key (id_usuario) references usuario(id),
    foreign key (id_publicacion) references publicacion(id)
);

#Cargando usuarios de prueba
insert into usuario (nombre,apellido,username,correo,password,biografia,fecha)
values('admin','admin','admin','admin','admin',
       'Administrador de la plataforma de juegos','2021-04-20'),
       ('Jose Andres','Rodas Arrecis','Alu','control.chi10@gmail.com','1234',
       'Estudiante de insgenieria en sistemas','2021-04-20'),
       ('Pedro Juan','Perez Batres','Piter','piter666@gmail.com','abcd',
       'Apasionado por los videojuegos retro','2021-04-20'),
       ('Jhon Stern','Smith Wick','Jhon','jhonwick@yahoo.com','pass',
       'Jugador profesional y streamer de videojuegos','2021-04-20');

#Cargando consolas de prueba
insert into consola (nombre)
values('Atari 2600'),('NES'),('SNES'),('Sega Genesis'),('Game Boy');

#Cargando juegos de prueba
insert into juego (id_consola,nombre,descripcion,cartucho,fecha)
values (1,'Pac-Man','Pac Man es un videojuego arcade creado por
el diseñador de videojuegos Toru Iwatani de la empresa Namco, y
distribuido por Midway Games al mercado estadounidense a principios
de los años 1980.','img/pacman.jpg','1980-04-21'),
       (1,'Space Invaders','Space Invaders es un videojuego
de arcade diseñado por Toshihiro Nishikado y lanzado
al mercado en 1978.','img/space.jpg','1978-04-21'),
        (1,'Asteroids','Asteroids es un popular videojuego arcade
basado en vectores lanzado en 1979 por Atari.  El objetivo del juego
es disparar y destruir asteroides evitando chocar contra los
fragmentos de estos.','img/asteroids.jpg','1979-04-21'),
       (1,'Pitfall!','Pitfall! es un videojuego de scroll horizontal,
en el cual el protagonista debe salir de un bosque peligroso,
esquivando serpientes, saltando cocodrilos y troncos que amenazan con
aplastarlo.','img/pitfall.jpg','1982-04-21'),
       (1,'Breakout','Breakout es un videojuego arcade desarrollado
por Atari, Inc. y lanzado al mercado el 13 de mayo de 1976. Fue
creado por Nolan Bushnell y Steve Bristow, influenciados por el
videojuego de 1972 Pong, también de Atari.','img/breakout.jpg','1972-04-21'),
       (2,'Super Mario Bros 3','Super Mario Bros 3 un videojuego de
plataformas para la consola NES, Salió a la venta el 23 de octubre
de 1988 en Japón y el 12 de febrero de 1990 en Estados Unidos.'
,'img/supermario3.jpg','1988-10-23'),
       (2,'The Legend of Zelda','The Legend of Zelda es un videojuego
japonés desarrollado y publicado por Nintendo en 1986, y diseñado por Shigeru
Miyamoto y Takashi Tezuka para la consola NES.','img/zelda.jpg','1986-04-21'),
       (2,'Super Mario Bros','Super Mario Bros es un videojuego de
plataformas, diseñado por Shigeru Miyamoto, lanzado el 13 de septiembre
de 1985 y producido por la compañía Nintendo','img/supermario.jpg','1985-09-13'),
       (2,'Final Fantasy','Final Fantasy es un videojuego de rol creado por
Hironobu Sakaguchi, desarrollado y publicado en Japón por Square Co. en 1987;
y publicado en Estados Unidos por Nintendo of America, Inc. en 1990.',
        'img/finalfantasy.jpg','1987-04-21'),
       (2,'Tetris','Tetris es un videojuego de lógica originalmente diseñado y
programado por Alekséi Pázhitnov en la Unión Soviética.',
        'img/tetris.jpg','1984-06-06'),
       (2,'Mega Man','Mega Man, conocido como Rockman en Japón, es un videojuego
de acción-plataformas de 1987 desarrollado y publicado por Capcom para Nintendo
Entertainment System.','img/megaman.jpg','1987-04-21');

#Cargando bibliotecas de prueba
insert into biblioteca (id_usuario, id_juego, puntuacion, opinion)
values (2,6,9,'Excelente juego, uno de mis favoritos de toda la infancia.'),
       (2,7,7,'Juego clasico y muy entretenido, hermosa historia.'),
       (2,4,7,'Muy buen juego de aventura, buenas animaciones retro.'),
       (3,1,10,'El mejor juego retro de toda la historia!'),
       (3,10,8,'Clasico juego, simple y entretenido'),
       (4,11,10,'El mejor juego que pude jugar en mi infancia, amo la saga.'),
       (4,7,9,'Es el inicio de una de las mejores sagas de videojuegos, lo amo.');

#Carga de publicaciones de prueba
insert into publicacion (id_usuario, id_juego, fecha, comentario)
values (2,6,'2021-04-21','Este juego es muy especial ya que representa gran parte de mi infancia, si no lo han jugao los insto a que lo hagan! :D saludos..'),
       (4,5,'2021-04-19','Breakout tiene versiones nuevas muy comunes en celulares! :O quien lo diria, despues de mas de 40 años.'),
       (4,11,'2021-04-18','Juegaso señores... mi faborito! <3 <3 <3'),
       (3,1,'2021-04-18','Recuerdo cuando jugaba pacman en los 80s, como que si hubiera sido ayer :3'),
       (2,4,'2021-04-17','Alguien sabe si este esta es la version original del juego Pitfall: the mayan adventure?'),
       (4,7,'2021-04-15','Quien podria olvidarse de The legend of zelda, el mejor de su epoca...');

#Carga de comentarios de prueba
insert into comentario (id_usuario, id_publicacion, comentario)
values (4,1,'Yo pasaba horas jugandolo tambien jaja'),
       (3,1,'x2 jajaja'),
       (2,2,'Porque es bueno xd'),
       (3,3,'muy bueno'),
       (4,5,'En efecto amigo, es la version 1 del juego :D'),
       (2,6,'Me gusta mas Final Fantasy :v'),
       (3,6,'no lo jugué aun, el primero que jugué fue the ocarina of zelda :(');


#Consultas
#consulta 1
select u.nombre usuario, count(bi.id_juego) juegos from biblioteca bi
    inner join usuario u on bi.id_usuario = u.id
    group by usuario
    order by juegos desc limit 5;
#consulta 2
select u.nombre usuario, count(co.id_usuario) comentarios from comentario co
    inner join usuario u on co.id_usuario = u.id
    group by usuario order by comentarios desc limit 5;
#consulta 3
select j.nombre juego, c.nombre consola, avg(bi.puntuacion) promedio from biblioteca bi
    inner join juego j on bi.id_juego = j.id
    inner join consola c on j.id_consola = c.id
    group by juego, consola order by promedio desc limit 5;
#consulta 4
select nombre juego, fecha from juego
    order by fecha;

