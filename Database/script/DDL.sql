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
de los años 1980.','assets/img/pacman.jpg','1980-04-21'),
       (1,'Space Invaders','Space Invaders es un videojuego
de arcade diseñado por Toshihiro Nishikado y lanzado
al mercado en 1978.','assets/img/space.jpg','1978-04-21'),
        (1,'Asteroids','Asteroids es un popular videojuego arcade
basado en vectores lanzado en 1979 por Atari.  El objetivo del juego
es disparar y destruir asteroides evitando chocar contra los
fragmentos de estos.','assets/img/asteroids.jpg','1979-04-21'),
       (1,'Pitfall!','Pitfall! es un videojuego de scroll horizontal,
en el cual el protagonista debe salir de un bosque peligroso,
esquivando serpientes, saltando cocodrilos y troncos que amenazan con
aplastarlo.','assets/img/pitfall.jpg','1982-04-21'),
       (1,'Breakout','Breakout es un videojuego arcade desarrollado
por Atari, Inc. y lanzado al mercado el 13 de mayo de 1976. Fue
creado por Nolan Bushnell y Steve Bristow, influenciados por el
videojuego de 1972 Pong, también de Atari.','assets/img/breakout.jpg','1972-04-21'),
       (2,'Super Mario Bros 3','Super Mario Bros 3 un videojuego de
plataformas para la consola NES, Salió a la venta el 23 de octubre
de 1988 en Japón y el 12 de febrero de 1990 en Estados Unidos.'
,'assets/img/supermario3.jpg','1988-10-23'),
       (2,'The Legend of Zelda','The Legend of Zelda es un videojuego
japonés desarrollado y publicado por Nintendo en 1986, y diseñado por Shigeru
Miyamoto y Takashi Tezuka para la consola NES.','assets/img/zelda.jpg','1986-04-21'),
       (2,'Super Mario Bros','Super Mario Bros es un videojuego de
plataformas, diseñado por Shigeru Miyamoto, lanzado el 13 de septiembre
de 1985 y producido por la compañía Nintendo','assets/img/supermario.jpg','1985-09-13'),
       (2,'Final Fantasy','Final Fantasy es un videojuego de rol creado por
Hironobu Sakaguchi, desarrollado y publicado en Japón por Square Co. en 1987;
y publicado en Estados Unidos por Nintendo of America, Inc. en 1990.',
        'assets/img/finalfantasy.jpg','1987-04-21'),
       (2,'Tetris','Tetris es un videojuego de lógica originalmente diseñado y
programado por Alekséi Pázhitnov en la Unión Soviética.',
        'assets/img/tetris.jpg','1984-06-06'),
       (2,'Mega Man','Mega Man, conocido como Rockman en Japón, es un videojuego
de acción-plataformas de 1987 desarrollado y publicado por Capcom para Nintendo
Entertainment System.','assets/img/megaman.jpg','1987-04-21'),
(1,'Frogger','rana debe cruzar una carretera -esquivando coches- y un río -esquivando cocodrilos- hasta alcanzar su hogar','assets/img/Frogger.png','1990-01-01'),
(1,'KEYSTON KAPERS','El clásico juego de policías y ladrones en versión 8 bits era de lo más divertido que se podía encontrar en Atari 2600: como representantes de las fuerzas del orden, nuestro cometido era perseguir a un rufián por los cuatro pisos de una tienda y atraparlo en menos de 50 segundos. El juego no tiene final pero.','assets/img/KYES.png','1983-06-15'),
(1,'Boxing','os proponía vibrantes combates de boxeo en los que había que repartir nada menos que 100 puñetazos para tumbar al rival: nada de esquivas, golpes especiales o mordiscos en la oreja, solo poderosos y contundentes ganchos de derecha.','assets/img/boxing.png','1980-07-16'),
(1,'Circus Atari','Atari Circus no deja de ser una versión del famoso Breakout, con la diferencia de que los elementos típicos del clásico son sustituidos aquí por un payaso y su trampolín, que utiliza para explotar todos los globos que pululan por la parte superior de la pantalla.','assets/img/circus.png','1980-07-25'),
(1,'Donkey Kong','El clásico entre los clásicos, el juego de Nintendo que marcó la primera aparición de Jumpman (Mario) y Donkey Kong (Cranky Kong) llegó también a Atari 2600 de la mano de Coleco. El objetivo del juego es *bip bip bip bip bip bump turururururú bip bip bip bip bip bip bump turururururú bip bip bip bip','assets/img/donkey.png','1980-07-29'),
(1,'H.E.R.O','es el nombre de este juego que nos ponía en la piel de un auténtico héroe que, equipado con una suerte de gorrocóptero y un láser, tiene la misión de rescatar a unos mineros que han quedado atrapados en lo más profundo de una mina.','assets/img/hero.png','1984-07-29'),
(1,'Parachute','Y mientras que nuestro anterior héroe volaba a través de las profundidades de la tierra, el protagonista de Parachute lo hace de una forma más clásica: cayendo en picado. Aviones, helicópteros y pájaros se ponían en nuestro camino para evitar que llegásemos a tierra sanos y salvos, pero con paciencia y práctica fuimos capaces de aterrizar justo en el centro de la pantalla y obtener una puntuación perfecta.','assets/img/pa.png','1984-04-10'),
(1,'Adventure','l juego que inventó el género acción-aventura. Fue el primero en poner ante nosotros un mundo abierto, con enemigos como dragones come-hombres y un murciélago con mucha malicia que nos complicaban la misión de recuperar un cáliz mágico','assets/img/adventure.png','1979-05-15'),
(1,'River Raid','aparte de ser uno de los primeros ejemplos de shoot em up de scroll vertical, fue también el primer título en ser censurado en Alemania: las autoridades del país consideraron que era inaceptable que los menores se metiesen en el rol de un agente de la aniquilación, y que como tal, recibían educación paramilitar... La censura: siendo una estupidez desde 1982.','assets/img/riverRaid.png','1982-10-10'),
(1,'Enduro','debemos completar una carrera que tiene lugar durante varios días, en los cuales debemos adelantar a un determinado número de coches para poder pasar al siguiente. Una de las características más impresionantes es la presencia de un ciclo día/noche y cambios en el tiempo atmosférico que afectan al desarrollo de la carrera, dificultando la visibilidad o complicando el manejo del vehículo.','assets/img/riverRaid.png','1983-11-12'),
(1,'Atlantis','Como encargados de las defensas de la ciudad, debemos utilizar unos poderosos cañones láser para destruir a los atacantes, que harán todo lo posible por dejar caer bombas sobre nosotros. Por desgracia, el juego solo tiene un final, y es el mismo que el que tuvo la ciudad: la partida acaba cuando es destruida.','assets/img/atlantis.png','1982-07-16'),
(1,'Missile Command','Tan simple como adictivo, nunca olvidaremos la primera vez que nos pusimos a los mandos de una batería antiaérea con el fin de proteger la ciudad de los misiles que se acercaban, lenta pero inexorablemente. Clasicazo.','assets/img/missile.png','1981-12-03'),
(1,'Yar´s Revenge','era el juego más vendido de Atari 2600, y mientras que el tiempo le ha otorgado ese puesto a su majestad Pac-Man, no cabe duda de que el título que nos ocupa vendió millones, y no sin motivo. A fin de cuentas, ¿quién iba a imaginar que meterse en el papel de una mosca era tan divertido? Aunque claro, Yar no es una mosca cualquiera: va armada hasta los dientes para destruir al malvado Qotile (un montón de píxeles que no sabemos a ciencia cierta qué clase de engendro es). Después de echar una partida, nunca volvimos a mirar a las moscas con los mismos ojos.','assets/img/yars.png','1982-10-10'),
(1,'Pole Position','Estableció las bases que podemos encontrar en los juegos de carreras actuales, no en vano se lo considera el arcade de conducción más importante de todos los tiempos. Así que la próxima vez que juguéis a Gran Turismo o al prometedor DriveClub, ¡acordaos de Pole Position!','assets/img/pole.png','1982-02-24'),
(1,'Ms. Pac Man','Mientras que el port de Pac-Man para Atari 2600 fue criticado por ser muy inferior y diferente al original (aunque eso no evitó que se convirtiese en el juego más vendido del sistema), Ms. Pac-Man llegó para redimir los pecados del pasado con un título que hacía honor a su nombre y al legado de tan legendario videojuego. Y la señora Pac-Man ganó semejante popularidad, que la propia Namco la adoptó como producto oficial, en otras palabras, perpetuaron el matrimonio entre estos dos come-cocos.','assets/img/mapac.png','1982-02-25'),
(1,'E.T. EL EXTRATERRESTRE','E.T. El Extraterrestre poseía un apartado gráfico que cortaba el aliento, una banda sonora que ponía los pelos como escarpias y unas mecánicas originales e innovadoras que han pasado a la historia. Jamás se ha realizado una adaptación cinematográfica a formato videojuego con este nivel de calidad, y mucho nos tememos que jamás nadie lo conseguirá superar. Es por eso que, si nos viésemos obligados a hacer una lista con los MEJORES JUEGOS DE LA HISTORIA, E.T. ocuparía los primeros puestos','assets/img/et.png','1982-04-15'),
(1,'Pong','Podéis aplicar todo lo que hemos dicho sobre E.T. a Pong: una idea nueva de la que nació prácticamente toda la industria, una mecánica que incluso hoy en día divierte y un título que es ya parte de nuestra historia. Dios bendiga al rey de lo videojuegos.','assets/img/pong.png','1977-10-17'),
(1,'Video PInball','tenía características interesantes, como un movimiento de la bola muy realista, además del logotipo de Atari en el medio del campo de juego. Si este logotipo era golpeado cuatro veces, el jugador recibía una bola extra','assets/img/videoPinball.png','1977-10-18'),
(1,'BALLBLAZER','Ballblazer es un sencillo juego de estilo deportivo uno a uno que tiene similitudes con el baloncesto y el fútbol .Cada lado está representado por una nave llamada "rotofoil", que puede ser controlada por un jugador humano o un "droide" controlado por computadora con diez niveles de dificultad.','assets/img/blaz.png','1984-09-12'),
(1,'Galaxian','El juego es bastante simple. Enjambre tras enjambre de aliens ataca a la nave controlada por el jugador (llamada Galaxip), la cual solo puede moverse de izquierda a derecha en la parte inferior de la pantalla. La nave solo puede lanzar un disparo por vez , recargándose cuando un alien es destruido o cuando el disparo desaparece de la pantalla, pero los disparos muchas veces son rápidos y la nave se recarga rápidamente.','assets/img/galac.png','1982-04-05'),
(1,'STAR WARS: THE ARCADE GAME','el jugador debe sobrevivir durante un período de tiempo determinado, evitando o destruyendo enemigos y los disparos. El jugador comienza con seis escudos, uno de los cuales se pierde por cada colisión con un enemigo o proyectil. Si el jugador pierde todos los escudos y es golpeado de nuevo, el juego termina.','assets/img/starW.png','1983-02-15'),
(1,'GAUNTLET','ada personaje tiene sus propias fortalezas o debilidades. Por ejemplo, el Guerrero es más fuerte en combate mano a mano, mientras que el Mago tiene las magias más poderosas, la Valquiria tiene la mejor armadura y el Elfo es el más rápido.','assets/img/gaut.png','1982-07-16'),
(1,'CONGO BONGO','Ambos juegos involucran a un protagonista de nariz grande cuya única habilidad es la habilidad de saltar. Y ambos juegos tienen cuatro niveles diferentes compuestos por una pantalla que se reinicia con una dificultad mayor una vez completada. Incluso los gráficos del temporizador de bonificación se parecen extraordinariamente a los de Donkey Kong.','assets/img/congo.png','1982-07-13'),
(1,'CENTIPEDE','El jugador es representado por un pequeño carácter con forma de insecto que aparece en la parte inferior de la pantalla. El jugador puede mover el carácter a través del área inferior de la pantalla con una trackball y disparar láseres a un gusano que avanza desde la parte superior de la pantalla hasta abajo a través del campo de hongos. El disparar a la cabeza del gusano hará que aparezca un hongo, mientras que disparar al cuerpo de este creará otro gusano.','assets/img/centipede.png','1980-05-05'),
(1,'DEFENDER','desarrollado y publicado por Williams Electronics en 1980. Es un videojuego de disparos en un mundo bidimensional. Está situado en un planeta ficticio donde el jugador debe vencer oleadas de extraterrestres mientras protege a los astronautas situados en la superficie.','assets/img/defender.png','1983-06-18'),
(2,'Excitebike','Excitebike es un videojuego de carreras de motocross creado por Nintendo. Debutó como juego para la Famicom en Japón en 1984 a un precio de 5000 yenes.','assets/img/Excitebike.jpg','1984-11-30'),
(2,'Super Mario Bros. 2','Super Mario Bros. 2, conocido en Japón como Super Mario USA, es un videojuego de plataformas desarrollado por Nintendo para la consola Nintendo Entertainment System. Fue lanzado originalmente en Estados Unidos en octubre de 1988, un año más tarde en Europa y en 1992 en Japón.','assets/img/super_mario_bros_2.jpg','1988-10-15'),
(2,'Donkey Kong','Donkey Kong es un videojuego arcade creado por Nintendo en el año 1981. Es un primitivo juego del género plataformas que se centra en controlar al personaje sobre una serie de plataformas mientras evita obstáculos. La historia no es muy compleja, pero funcionó en aquella época.','assets/img/Donkey_Kong_(1981).jpg','1981-07-09'),
(2,'Dr. Mario','Dr. Mario es un videojuego de lógica desarrollado por Nintendo publicado en el año 1990. Se lanzó para los sistemas NES, Game Boy y sistemas recreativos renombrada como Vs. Dr. Mario','assets/img/Dr_Mario.jpg','1990-07-27'),
(2,'Mega Man 2','Mega Man 2 lit. "Megaman 2: Mistery Of Dr. Wily" es un videojuego de acción desarrollado y publicado por Capcom para Nintendo Entertainment System. Fue lanzado en Japón en 1988 y en América del Norte y las regiones PAL los años siguientes.','assets/img/Mega_Man2.png','1988-12-24'),
(2,'Ice Climber','Ice Climber, es un videojuego de plataformas para NES, desarrollado por Nintendo en 1985. El juego fue lanzado más adelante para Arcade, con el nombre de VS. Ice Climbers, en 1985. En algunos países de Europa el juego se distribuía con la consola. Esto incrementó fuertemente el conocimiento del juego fuera de Japón.','assets/img/Ice_Climber.jpg','1984-01-30'),
(2,'Double Dragon II: The Revenge','Double Dragon II: The Revenge es un videojuego de acción donde el jugador representa a Billy Lee, un joven experto en artes marciales, que debe vengar a su novia Marian aniquilando a los Black Warriors, que la asesinaron.','assets/img/Double_Dragon_2_The_Revenge.jpg','1988-11-15'),
(2,'Kirbys Adventure','Kirbys Adventure, conocido como Hoshi no Kirby: Yume no Izumi no Monogatari en Japón, desarrollado por HAL Laboratory, y publicado el 26 de marzo 1993 para Famicom, y el 1 de mayo y 1 de diciembre en Norte América y Europa respectivamente, para su versión NES.','assets/img/Kirbys_Adventure.png','1993-03-23'),
(2,'Ninja Gaiden','Ninja Gaiden, conocido en Japón como Ninja Ryūkenden y como Shadow Warriors en Europa, es un videojuego de desplazamiento horizontal en plataformas.','assets/img/Ninja_Gaiden_(NES).jpg','1988-12-09'),
(2,'Double Dragon','Double Dragon es un videojuego lanzado para máquinas recreativas en 1987, desarrollado por Technos Japan, ​ que pertenece al género Beat em up. Su distribución en Europa y Norteamérica la llevó a cabo Taito. El título se considera un sucesor no oficial del videojuego Renegade de Technos, de similar temática.','assets/img/Double_Dragon.jpg','1987-06-15'),
(2,'Galaga','Galaga es un videojuego matamarcianos creado en 1981 por la empresa Namco. Fue diseñado como el sucesor del Galaxian (1979).','assets/img/galaga.jpg','1981-09-27'),
(2,'StarTropics','StarTropics es un videojuego de acción y aventura lanzado por Nintendo en 1990 para la Nintendo Entertainment System. A diferencia de la mayoría de juegos de Nintendo, nunca fue lanzado o destinado a serlo en Japón. Fue lanzado sólo en Norteamérica y Europa.','assets/img/StarTropics.jpg','1990-12-01'),
(2,'Balloon Fight','Balloon Fight es un videojuego de acción/arcade desarrollado por Nintendo. La versión original de máquinas recreativas fue lanzada para la Nintendo VS. System como Vs. Balloon Fight, y su contraparte de Nintendo Entertainment System fue lanzada internacionalmente en 1986.','assets/img/BalloonFight.jpg','1986-06-03'),
(2,'Castlevania','Castlevania, es un videojuego de Konami publicado, originalmente para Famicom Disk System en Japón, el 26 de septiembre de 1986. En octubre de ese año, una adaptación del juego, conocida como "Vampire-Killer" fue lanzada al mercado en Japón y Europa para el sistema MSX2, de computadoras caseras.','assets/img/CASTLEVANIA.jpg','1986-09-26'),
(2,'Donkey Kong Jr.','Donkey Kong Jr. es una secuela del videojuego arcade, Donkey Kong, lanzado en el año 1982, programada para Nintendo por Shigeru Miyamoto. Conocido por las siglas de DK Jr. Esta vez Mario tiene prisionero a Donkey Kong, y su hijo, un pequeño gorila llamado Donkey Kong Jr., tiene que rescatarlo.','assets/img/Donkey_Kong_Jr(1981).png','1982-10-26'),
(2,'Contra','Contra es un videojuego de run and gun desarrollado y publicado por Konami, lanzado originalmente como un juego de arcade el 20 de febrero de 1987.​ En 1988 se lanzó una versión doméstica para Nintendo Entertainment System, junto con puertos para varios formatos de computadora, incluido el MSX2.','assets/img/Contra_(1987).jpg','1987-02-20'),
(2,'Ghostsn Goblins','Ghostsn Goblins es un videojuego de plataformas de arcade creado por Capcom. Lanzado en 1985, fue portado a numerosas plataformas de computadoras personales.','assets/img/Ghostsn_Goblins.jpg','1985-07-07'),
(2,'Super Contra','Super Contra es un videojuego desarrollado y distribuido por la compañía Konami en 1988 para el sistema arcade. Es la secuela del Contra original y parte de la serie Contra. Más tarde fue lanzado para la consola de sobremesa Nintendo Entertainment System bajo el nombre de Super C.','assets/img/Super_Contra.jpg','1988-01-08'),
(2,'Bubble Bobble','Bubble Bobble es un videojuego de plataformas creado por Taito que ha sido lanzado en múltiples soportes. La primera versión fue creada para máquinas recreativas en el año 1986','assets/img/Bubble_Bobble.jpg','1986-06-18'),
(2,'Tecmo Bowl','Tecmo Bowl es un videojuego de fútbol americano desarrollado y lanzado por Tecmo. Lanzado originalmente como un juego de arcade en 1987, ​​ el juego contaba con un gran gabinete de doble pantalla y permitía que hasta cuatro jugadores compitieran en un partido entre dos equipos ficticios.','assets/img/tecmo_bowl.jpg','1990-11-30'),
(2,'Castlevania III: Draculas Curse','Castlevania III: Draculas Curse, es el nombre del tercer episodio en la serie de videojuegos de Castlevania. Fue publicado por Konami en Japón en 1989 y en Norteamérica en 1990. En Europa, fue publicado por Palcom Software en 1992','assets/img/Castlevania_III_Draculas_Curse.jpg','1989-12-22'),
(2,'Duck Hunt','Duck Hunt es un videojuego creado y desarrollado por Nintendo para la Nintendo Entertainment System. También fue publicado en los arcades en el año 1984 bajo el nombre Vs. Duck Hunt. El título fue uno de los dos juegos incluidos con el primer lanzamiento de la consola.​','assets/img/Duck_Hunt.jpg','1984-04-21'),
(2,'Punch-Out!!','Punch-Out!! publicado originalmente en América del Norte como Mike Tysons Punch-Out!!, ​​ es un videojuego perteneciente al género de boxeo creado para la consola Nintendo Entertainment System (NES). Fue desarrollado y publicado por la empresa Nintendo en el año 1987.​','assets/img/Punch_Out!!.png','1987-09-18'),
(2,'Kid Icarus','Kid Icarus es un videojuego de plataformas desarrollado por Nintendo R&D1 para la Famicom Disk System en 1986, y para la NES en 1987. Es el juego que inicia la saga Kid Icarus, con una continuación para Game Boy, Kid Icarus: Of Myths and Monsters','assets/img/kid_icarus.jpg','1986-12-19'),
(3,'ActRaiser','ActRaiser is a SNES video game developed by Quintet and published by Enix. While not as popular as other Enix titles such as Dragon Warrior, the game did have a pretty big cult following. ActRaiser was the first Square-Enix video game to be released on the Wii s Virtual Console. It is an RPG, and later spawned a sequel.','assets/img/actraiser.jpg','1988-10-23'),
(3,'F-Zero','F-Zero (stylized as F-ZERO) is a game for the SNES made by Shigeru Miyamoto first released in Japan in 1990 and in North America in 1991. It is the first installment of the F-ZERO series.','assets/img/FZero.jpg','1988-10-23'),
(3,'Final Fantasy IV','Final Fantasy IV (JP) (initially known as Final Fantasy II in North America) is a RPG video game that was released both in Japan and America in 1991. In America, it was first titled Final Fantasy II, but the remakes have gone back to IV. The game is known for introducing the active time battle system, which has been implemented in various other RPGs following it, including six other Final Fantasy titles.','assets/img/FFIV.gif','1988-10-23'),
(3,'Final Fight','Final Fight is a beat em up game released by Capcom. You play as one of 3 characters; Mike Haggar, the newly elected mayor, Cody, his daughters boyfriend, and Guy, Codys best friend. In the SNES port, Guy is removed. The group hunts down the Mad Gear gang to rescue Mike Haggars daughter Jessica.','assets/img/Finalfightboxart.jpg','1988-10-23'),
(3,'Gradius III','Gradius III is a scrolling shooter arcade game, developed and published by Konami in 1989 in arcades. An SNES/Super Famicom port was released the following year.','assets/img/Gradius_III_SNES_cover.jpg','1988-10-23'),
(3,'SimCity','SimCity is a city building simulator, originally developed by Will Wright of Maxis. Originally developed as a PC game, a new version was developed by Nintendo and released on the SNES in August 1991. It was later released on the Wii Virtual Console. It was a US Virtual Console launch title as well, on November 19, 2006. Interestingly, it was the first Virtual Console release, despite Super Mario World being the SNES launch title. (Super Mario World would, strangely, be left unreleased until several months later.) Due to Electronic Arts buying out the franchise, Sim City was de-listed from the Virtual Console.','assets/img/SimCityBox.jpg','1988-10-23'),
(3,'Super Ghouls n Ghosts','Super Ghouls n Ghosts is an SNES hack and slash video game that was released during the consoles launch window in all regions. After being released on the SNES, it was re-released on multiple other game consoles, most notably (for Nintendo) the Game Boy Advance and Virtual Console. Challenging gameplay make the game dreadfully (in a positive way) popular among hardcore gamers.','assets/img/Ghouls.jpg','1988-10-23'),
(3,'Super Castlevania IV','Super Castlevania IV (JP) is a platform game developed and published by Konami and the first Castlevania game for the Super Nintendo Entertainment System, as well as the fourth in the series overall. It was also released on the Wiis Virtual Console on December 25, 2006. It is a retelling of Simon Belmonts foray into Draculas castle, first told in the original Castlevania.','assets/img/CastleIV.jpg','1988-10-23'),
(3,'Super Mario World','Super Mario World (JP) (also called SMW and taglined Super Mario Bros. 4(JP) in Japan) is a 2D Mario platform game and a launch title released for the Super Nintendo Entertainment System in 1990, developed by Nintendo EAD.','assets/img/MarioWorld.png','1988-10-23'),
(3,'Super Mario Kart','Super Mario Kart is arguably one of the most influential video games of all time. It was notable at the time of its release for its use of the SNESs Mode 7 technology which gave the illusion of racing in a three-dimensional space.','assets/img/Kart.jpg','1988-10-23'),
(3,'Contra III: The Alien Wars','Contra III: The Alien Wars (JP) (Super Probotector: Alien Rebels in the PAL regions) is a 1992 Super Nintendo Entertainment System video game by Konami and a prominent title in the run and gun genre. In the PAL version of the game, the player controls robots, while in The Alien Wars version humans.','assets/img/Contra3-front.jpg','1988-10-23'),
(3,'Mario Paint','Mario Paint is a video game that was released on the Super Nintendo Entertainment System in mid-1992. The game came packaged with the little known SNES Mouse, which was used as the main method of input. This game also recieved a Players Choice award.','assets/img/Paint.png','1988-10-23'),
(3,'Street Fighter II','Street Fighter II (JP) is the second title of Capcoms Street Fighter series, and is widely known for its legacy as one of the biggest hits in the Arcade market and the most influential title for the fighting genre in videogames.','assets/img/SFII.png','1988-10-23'),
(3,'Pocky & Rocky','Pocky & Rocky is a multi-directional scrolling video game, developed by Natsume. It was released for the SNES in Japan on 22 December 1992, and in the USA in 1993.[1]','assets/img/PockyRocky.jpg','1988-10-23'),
(3,'Secret of Mana','Secret of Mana (JP) is a SNES video game initially released by Square in 1993. It is often times considered one of the best games the system has to offer, and has been re-released for the Wii Virtual Console in Japan, North America and in PAL regions and the Wii U Virtual Console so far only in Japan.','assets/img/Mana.jpg','1988-10-23'),
(3,'Star Fox','Star Fox is the first game in the Star Fox series, released by Nintendo. The game is released for the Super Nintendo Entertainment System.','assets/img/Star_Fox_(NA).jpg','1988-10-23'),
(3,'Ogre Battle','Ogre Battle: The March of the Black Queen is a SNES game that was released in 1993 and 1995 in Japan and North America, respectively. It was developed by Quest and published by Enix.','assets/img/ogre.jpg','1988-10-23'),
(3,'Donkey Kong Country 2','Donkey Kong Country 2: Diddys Kong Quest (JP) (also known as Donkey Kong Country 2, DKC2, or Super Donkey Kong 2 in Japan) is a platform game made for the Super Nintendo Entertainment System. It is the second game in the Donkey Kong Country series and the second game in the original Donkey Kong Country trilogy, overall. This game was released in 1995 as a sequel and direct follow-up to Donkey Kong Country and later followed by Donkey Kong Country 3: Dixie Kongs Double Trouble! in 1996.','assets/img/DKC2.png','1988-10-23'),
(3,'EarthBound','EarthBound (JP) is an RPG game for the SNES, which was developed by Ape Inc. and HAL Laboratory and published by Nintendo and a sequel to EarthBound Beginnings(JP), a game that was released on the Famicom.','assets/img/Mother2.jpg','1988-10-23'),
(3,'Mega Man X2','Mega Man X2 (Rockman X2 in Japanese) is a Super Nintendo Entertainment System video game released by Capcom in 1994. It takes place after Mega Man X.','assets/img/Mega_Man_X2.jpg','1988-10-23'),
(3,'Zombies Ate My Neighbors','Zombies Ate My Neighbors (Zombies in PAL regions) is a video game released for the Super Nintendo Entertainment System in 1993. It was released to the North American Wii Virtual Console service the day before Halloween, 2009. A sequel was later released called Ghoul Patrol.','assets/img/Zombies.jpg','1988-10-23'),
(3,'Mega Man X','Mega Man X (Rockman X in Japan) is a Super Nintendo Entertainment System video game released by Capcom in 1993.','assets/img/MMX.jpg','1988-10-23'),
(3,'Mega Man Soccer','Mega Man Soccer is an Super Nintendo Entertainment System soccer video game released in 1994. It features tons of Mega Man characters as playable team members, including a multitude of bosses from the series.','assets/img/MegaManSoccer.jpg','1988-10-23'),
(3,'Megaman & Bass','Mega Man & Bass, conocido en Japón como Rockman & Forte (ロックマン&フォルテ Rokkuman ando Forute?), es un juego de la serie original de Mega Man. Según dice Keiji Inafune,[cita requerida] esta es una secuela alterna a Mega Man 8, y es antes de Mega Man 9, ya que se hace referencia a Mega Man & Bass durante el final de Mega Man 9.1​','assets/img/rockmanforte.png','1988-10-23'),
(3,'Chrono Trigger','Chrono Trigger (JP) is role playing video game for the Super Nintendo Entertainment System that was originally developed and published by Square in 1995. The game is critically one of the most notable video games for the SNES, and is one of the highest acclaimed RPGs of all time, gracing the top spot or near the top spot on multiple occasions.','assets/img/Chrono_Trigger.jpg','1988-10-23'),
(3,'TMNT IV: Turtles in Time','In this game, Shredder and Krang steal the Statue of Liberty, prompting the Ninja Turtles to come after it. But in their attempt to save the statue, however, Shredder sends the Turtles back in time to the age of the dinosaurs, and now the Turtles must fight their way back to the present.','assets/img/TMNT_IV.jpg','1988-10-23'),
(3,'Super Bomberman 5','Super Bomberman 5 is the fifth game in the Super Bomberman sub-series of Bomberman.','assets/img/Bomb5.jpg','1988-10-23'),
(3,'Kirby Super Star','Kirby Super Star (JP) (Kirbys Fun Pak in PAL regions) is a title on the SNES that was released in 1996. It is considered by many Kirby fans to be the best game in the series.','assets/img/KirbySS.jpg','1988-10-23'),
(3,'Super Bomberman 3','Super Bomberman 3 is a game released for the SNES in 1995. It is the third game in the Bomberman series for the system. Just like FIFA International Soccer, up to five players can play at the same time.The game was released in Japan and the PAL region, but not in North America.','assets/img/Bomb3.jpg','1988-10-23'),
(3,'Yoshis Island','The game is the prequel to Super Mario World and chronologically the first in Mario series, and it stars Yoshi and the Yoshi clan who, while carrying Baby Mario, travel across Yoshis Island to rescue Baby Luigi from Baby Bowser and his Magikoopa minion/caretaker, Kamek.','assets/img/Yoshi.png','1988-10-23'),
(4,'Sonic the Hedgehog 2','Sonic the Hedgehog 2 es un videojuego de plataformas desarrollado por Sega Technical Institute y publicado en el año 1992 para Mega Drive protagonizado por Sonic y un nuevo aliado que se presenta por primera vez, Miles «Tails» Prower.','assets/img/sonic2.jpg','1992-10-21'),
(4,'Streets of Rage','nos introduce en la historia de tres jóvenes policías (Axel, Blaze y Adam) que intentan librar su ciudad de la influencia del líder del crimen organizado Mr. X. Al ser el primero de la saga, su nivel técnico es inferior al de los siguientes títulos de la saga. Axel y Blaze serán los únicos personajes presentes a lo largo de toda la saga.','assets/img/streets.png','1985-11-02'),
(4,'Altered Beast','Tras su lanzamiento como arcade fue adaptado a diferentes consolas y ordenadores personales.Makoto Uchida, el creador de Golden Axe, fue el creador principal del juego.','assets/img/alterBeast.png','1985-03-05'),
(4,'Spider-Man and Venom: Maximum Carnage','Beat ‘em up en el que podíamos controlar tanto a Spiderman como a Venom, con el objetivo de detener a Carnage.','assets/img/spiderM.png','1986-06-12'),
(4,'Road Rash 2','La segunda entrega de este juego -no variaba mucho de la primera- convertía las carreras del modo multijugador en una violenta diversión.','assets/img/road2.png','1985-04-15'),
(4,'Tiny Toon Adventures: Busters Hidden Treasure','Buster tiene que derrotar a Max Montana, recuperar un tesoro escondido y rescatar a Babs Bunny. ¿Cómo? Tomando lo mejor del Super Mario y de Sonic, sumado a unos gráficos increíbles.','assets/img/tiniT.png','1986-06-15'),
(4,'Sonic the Hedgehog 3','Sonic the Hedgehog 3 es un videojuego de plataformas desarrollado por Sonic Team y Sega Technical Institute en Estados Unidos y distribuido por Sega en 1994 para Mega Drive protagonizado por Sonic the Hedgehog y Miles "Tails" Prower.','assets/img/sonic3.png','1995-02-02'),
(4,'Shadow Dancer: The Secret of Shinobi','Remake libre del juego de arcade Shadow Dancer. Al igual que en el juego original, el jugador controla a un ninja acompañado de su fiel perro.','assets/img/shadowD.png','1984-10-10'),
(4,'Michael Jacksons Moonwalker','Basado en la película Moonwalker, seguíamos a Michael, utilizando su música y sus pasos de baile característicos para salvar a los niños secuestrados de las manos del maligno "Mr. Big".','assets/img/michaelJ.png','1993-11-12'),
(4,'Cool Spot','El juego de la “mascota” de 7-Up fue una excepción a los juegos impulsados por alguna marca famosa para aprovechar el furor de los videojuegos y así imponer sus productos. Este tipo de iniciativas dieron resultados bastantes aburridos. No fue el caso de Cool Spot que presentaba altos niveles de gráficos, de sonido y de jugabilidad.','assets/img/coolSpoot.png','1994-12-05'),
(4,'Shining Force II','Excelente RPG que fluía mucho mejor que la primera entrega, con mejores gráficos y mejores estrategias. Para pasarse horas y horas luchando con monstruos y espectros.','assets/img/shining.png','1995-06-06'),
(4,'Contra: Hard Corps','El más querido de la saga Contra. ¿Por qué? Porque permitía elegir personajes, caminos alternativos (que podían no tener finales felices) y presentaba villanos realmente espantosos.','assets/img/contraHard.png','1994-07-16'),
(4,'Disneys Aladdin','Disneys Aladdin es un videojuego de plataformas basado en la película de 1992 del mismo nombre desarrollada por Virgin Games USA.','assets/img/aladdin.png','1993-11-11'),
(4,'Sonic the Hedgehog Spinball','Sonic the Hedgehog Spinball es un videojuego de pinball, de la serie de Sonic the Hedgehog protagonizado por Sonic el Erizo. Inicialmente fue lanzado al mercado para Mega Drive en 1993, y luego llevado en 1994 al sistema Sega Game Gear.','assets/img/sonicspin.png','1993-11-14'),
(4,'Toejam & Earl','Una aventura para dos jugadores en la que debíamos escapar de la Tierra, encontrando las partes de una nave, antes de que sus habitantes acabaran con los protagonistas.','assets/img/toejam.png','1987-02-12'),
(4,'Ultimate Mortal Kombat 3','El UMK 3, tenía nuevos movimientos especiales, tales como proyectiles o combos para cada personaje. A las fatalities y babalities se le sumaban las brutalities y animalities. ¿Quién no memorizó el A, C, arriba, B, arriba, B, A, abajo?','assets/img/umk3.png','1987-12-12'),
(4,'Vectorman','Un clásico que a su jugabilidad sencilla, le sumó uno de los mejores diseños (se usaron modelos 3D renderizados previamente, dando una sensación de juego en 3D en un plano 2D, algo poco común en estas consolas) tanto gráfico como sonoro para generar una atmósfera fuera de lo común para la época.','assets/img/vector.png','1986-04-04'),
(4,'The Story of Thor','The Story of Thor es un videojuego para Mega Drive publicado por Sega que fue lanzado en 1994. Su desarrolladora fue Ancient, con música compuesta por Yuzo Koshiro.','assets/img/thor.jpg','1994-12-08'),
(4,'Castle of Illusion Starring Mickey Mouse','Castle of Illusion Starring Mickey Mouse es un videojuego lanzado para Mega Drive, Master System y Game Gear producido por Sega of America.','assets/img/mickey.jpg','1990-01-01'),
(4,'Castlevania: Bloodlines','El único juego de la saga Castlevania diseñado para una plataforma Sega. Todas las aventuras de las entregas anteriores tenían lugar en el castillo de Drácula o en sus inmediaciones. Lo particular de Bloodlines era que encarábamos un viaje alrededor del mundo en del sitio donde renacería el Rey de los Vampiros.','assets/img/castlevania.png','1989-01-12'),
(4,'Golden Axe','Un guerrero bárbaro, un enano y una amazona luchaban -cada uno con sus características particulares- contra las tropas del malvado Death Adder. Uno de las puntos altos de este clásico de 1989 era que podíamos “robarle” los animales/criaturas a nuestros enemigos y manejarlos.','assets/img/goldenaxe.png','1989-10-13'),
(4,'Earthworm Jim','Earthworm Jim es un videojuego de plataformas cuyo protagonista es una Lombriz llamado Jim que, enfundado en un traje cibernético y armado con una pistola, se dedica a recorrer el universo en busca de la princesa "Cuál es su nombre".','assets/img/jim.jpg','1994-02-02'),
(4,'Castle of Illusion Starring Mickey Mouse','El primer juego de la larga serie de videojuegos Illusion de Sega protagonizada por Mickey nos llevaba a un mundo de fantasías con objetos encantados y una Minnie secuestrada por la malvada bruja Mizrabel.','assets/img/micky.png','1994-03-04'),
(4,'Batman: The Video Game','Uno de los mejores juegos que se hicieron sobre el superhéroe de Ciudad Gótica. Fiel a la película de Tim Burton tanto en su atmósfera como en su linea argumental, llegaba al punto máximo de entretenimiento cuando manejábamos el Batimovil.','assets/img/batmanV.png','1994-03-16'),
(4,'Ghostbusters','Los Cazafantasmas como franquicia de videojuegos nunca tuvo la repercusión que si tuvo su rama cinematográfica. Esto se dio así, porque los juegos son de regulares a malos. No fue hasta los Cazafantasmas de la Sega Genesis que los fans no tuvieron un videojuego digno de este clásico pop.','assets/img/ghost.png','1994-05-12'),
(4,'Toy Story','Toy Story es un videojuego estadounidense para las consolas Mega Drive, Super Nintendo, Game Boy y Windows 95 desarrollado por Travellers Tales y anunciado por Disney Interactive.','assets/img/toy.jpg','1995-05-01'),
(4,'Out Run','Out Run es un videojuego de carreras creado en 1986 por Yū Suzuki y Sega-AM2, y publicado inicialmente para máquinas recreativas.','assets/img/run.jpg','1986-09-25'),
(4,'FIFA 97','La cuarta entrega de FIFA cambió varias cosas. Y lo hizo con el “showbol”,antes que Maradona y otros ex jugadores lo popularizaran. El estadio cubierto fue una novedad que dio un golpe de aire fresco a los videojuegos de fúbtol. Menos jugadores, reglas distintas y partido a pura velocidad.','assets/img/fifa97.png','1996-06-23'),
(4,'The Lost World: Jurassic Park','Increíble en casi todos los aspectos técnicos: diseño gráfico, banda sonora, dificultad. Uno de los mejores modos multijugador que se pueden encontrar en Sega Génesis. La base del juego es la exploración. Los dinosaurios se comportan todos de manera distinta. Podemos manejar aerodezlizadores o 4x4. Salvaje por donde se lo mire.','assets/img/jurassicPark.png','1985-06-28'),
(4,'Comix Zone','Comix Zone es un videojuego de acción estilo arcade, fue desarrollado por Sega Technical Institute y distribuido por Sega. Fue lanzado en 1995 para PC y Mega Drive, también está disponible para Consola Virtual, Game Boy Advance, Xbox 360 Live Arcade, PlayStation 2 y PlayStation 3.','assets/img/Comix_Zone.png','1995-01-01'),
(5,'Super Mario Land','Super Mario no quiso perderse el debut de la portátil de Nintendo con una aventura completamente original, y pese a ser realmente modesta a nivel gráfico y en lo relativo a las físicas, no tardó en convertirse en uno de los primeros imprescindibles de la consola.','assets/img/SuperMarioLand.jpeg','1995-04-20'),
(5,'Super Mario Land 2: 6 Golden Coins','A un ritmo estupendo, Nintendo aprendió a jugar con las posibilidades jugables y visuales de la Game Boy, de modo que la secuela de Super Mario Land supuso un tremendo empujón en todos y cada uno de sus aspectos, ofreciendo niveles definidos, un mapa colmado de secretos y un nuevo personaje capaz de medirse de tú a tú con nuestro héroe bigotudo: Wario.','assets/img/SuperMarioLand2.jpeg','1995-07-21'),
(5,'Pokemon Rojo, Azul y Amarillo','Justo cuando parecía que las Game Boy estaban llegando a su ciclo final como consola despertó la fiebre amarilla, y arrasó a nivel mundial: las dos ediciones del RPG de Game Freak protagonizadas por monstruos de bolsillo se convirtieron por derecho propio en grandes estandartes de la Nintendo entonces y su legado todavía resuena.','assets/img/PokemonRojoAzulYAmarillo.jpeg','1995-08-25'),
(5,'Pokémon Oro, Plata y Cristal','Si bien las ediciones Oro y Plata fueron editadas para Game Boy Color, la sucesora de la Game Boy, se diseñaron -como otros juegos de la época- para poder jugarse en las portátiles originales. Todo un acierto ya que, incluso a día de hoy, se consideran las mejores ediciones de la saga.','assets/img/PokemonOroPlata.jpeg','1995-06-26'),
(5,'Kirbys Pinball Land','Si bien los usuarios de SNES pudieron convertir a Kirby en su particular pelota de Golf, los poseedores de Game Boy contaron con un trato todavía más especial: alocadas mesas de pinball por las que el héroe redondito hacía de las suyas.','assets/img/KirbyPinball.jpeg','1995-06-26'),
(5,'Zelda: Links Awakening','Una de las entregas más excepcionales y singulares de la saga The Legend of Zelda: Nintendo se mantuvo fiel a la experiencia de SNES, pero, a su vez, rediseñó por completo el universo de Zelda llevando a Link a una isla de ensueño en la que, una vez más, debería demostrar su fuerza, su sabiduría y, sobre todo, su coraje.','assets/img/ZeldaAwakenin.jpeg','1995-06-26'),
(5,'Metroid II','La secuela de Metroid fue un paso de valiente de cara a un clásico irrepetible, consagrando la consola a través de una ambientación logradísima. Un logro extra si partimos de cómo las limitaciones visuales acabaron convirtiéndose en fortalezas.','assets/img/MetroidII.jpeg','1995-06-26'),
(5,'Tetris','Nintendo decidió incluir en cada pack inicial de Game Boy un juego de puzzles clásico incluso para el año en el que fue lanzada la consola, y fue todo un acierto. A día de hoy es difícil no asociar los Tetrominós de colores a las portátiles de La Gran N.','assets/img/TetrisGB.jpeg','1995-06-26'),
(5,'Gargoyles Quest','Gargoyles Quest: Ghostsn Goblins, conocido en Japón como Reddo Makaimura Gaiden es un videojuego de acción/plataformas con scroll lateral, y también algunos elementos de rol, de la compañía Capcom.','assets/img/Gargoyles_Quest.jpg','1990-05-02'),
(5,'Wario Land II','Wario Land II es un videojuego de plataformas de Wario desarrollado por Nintendo R&D1 originalmente para la Game Boy y meses después adaptada para la Game Boy Color','assets/img/Wario_Land_II.jpg','1998-03-01'),
(5,'Kirbys Dream Land 2','Kirbys Dream Land 2, conocido en Japón como Hoshi no Kirby 2, es un videojuego de plataformas desarrollado por HAL Laboratory y distribuido por Nintendo para Game Boy.','assets/img/Kirby_DreamLand2.jpg','1995-03-21'),
(5,'Donkey Kong Land','Donkey Kong Land es un videojuego de plataformas desarrollado por Rareware para Game Boy y lanzado en 1995. Es una continuación completamente nueva al original Donkey Kong Country. Parte de la música del juego fue usada en la versión de Donkey Kong Country de Game Boy Color.','assets/img/donkey-kong-land.jpg','1995-06-26'),
(5,'Killer Instinct','Tras comenzar a adaptar la saga Donkey Kong a las posibilidades visuales de la Game Boy, Rare quiso dar un paso de valiente y se atrevió con su portentísimo juego de lucha. No era una conversión magistral, pero daba mucho más de lo que se esperaba.','assets/img/KillerInstic.jpeg','1994/10/01'),
(5,'Serie Game & Watch Gallery','Una de las sagas más vendidas y no tan recordadas de Game Boy fue su serie de adaptaciones de las maquinitas de Game & Watch. En esencia, versiones en cartucho de las clásicas LCD con extras añadidos, pero también un canto a los orígenes de Nintendo en el campo del entretenimiento electrónico.','assets/img/SerieGameAndWatch.jpeg','1995/04/27'),
(5,'Worms','Pese a que Game Boy ofrecía un sistema de multijugador entre varias consolas a través del cable Link, lo cierto es que las peculiares batallas de Worms a base de cambiar de manos la consola fueron uno de los alicientes extra de esta versión portátil. Diversión, risas y mala leche en dosis desmedidas.','assets/img/Worms.jpeg','1998-03-01'),
(5,'Street Fighter II','El exitazo de Capcom llegó a Game Boy con serios recortes: sin todos los luchadores, escenarios y con algún que otro movimiento menos frente a lo visto en sobremesas. Y lo cierto es que su jugabilidad no brillaba con la misma intensidad que los recreativos. Pero sus enormes sprites y el modo en el que se trasladó -dentro de lo posible- el rey de los juegos de lucha fue el sueño de cualquier chaval de los 90.','assets/img/StreetFighterII.jpeg','1998-05-21'),
(5,'Donkey Kong','Si bien la saga clásica de Donkey Kong llegó a Game Boy de la mano de recopilatorios y la serie Game & Watch, Nintendo supo reimaginar desde cero la experiencia original en uno de los juegos plataformeros imprescindibles de su portátil. Niveles que combinaban la habilidad con los puzles y una jugabilidad magistral para dar nueva vida y un soplo de aire fresco al título que, incluso entonces, era considerado de culto.','assets/img/DonkeyKong.jpeg','1998-05-15'),
(5,'Castlevania Adventure','La saga de Castlevania siempre estuvo muy asociada a las consolas de Nintendo y Konami no perdió la oportunidad de adaptarla a la Game Boy dentro de las primeras hornadas de juegos, manteniendo intactos todos y cada uno de los elementos (incluida su exquisita B.S.O.) por los que la purga vampírica se considera una de las licencias clave de la compañía de Minato.','assets/img/Castlevania.jpeg','1998-03-01'),
(5,'Ghostsn Goblins','Ghostsn Goblins es un videojuego de plataformas de arcade creado por Capcom. Lanzado en 1985, fue portado a numerosas plataformas de computadoras personales y seguido por tres secuelas oficiales.','assets/img/Ghostsn_Goblins_GB.jpg','1985-06-07'),
(5,'Spider-Man','Spider-Man es un videojuego de Yo contra el barrio basado en el personaje de Marvel Comics, Spider-Man. Fue desarrollado por Neversoft, usando el mismo motor de Tony Hawks Pro Skater. Está libremente basado en las series de caricaturas de los 90s Spider-Man y Spider-Man Unlimited.','assets/img/Spider_Man.jpg','2000-08-30'),
(5,'Kid Dracula','Kid Dracula es un videojuego de plataformas creado por Konami y concebido como un spin-off de la serie Castlevania. El juego, que tiene una ambientación gótica y estilo cómico con personajes super deformed, fue publicado en primera instancia para Famicom en 1990, sin editarse fuera de Japón.','assets/img/kid_dracula.jpeg','1993-01-03'),
(5,'Harvest Moon GB','Harvest Moon GB es el segundo juego de la serie de videojuegos Story of Seasons, y fue desarrollado y publicado por Victor Interactive Software. Harvest Moon GB es el primer juego portátil de Harvest Moon, desarrollado para Game Boy. Más tarde se lanzó una versión de Game Boy Color bajo el nombre de Harvest Moon GBC.','assets/img/Harvestmoongb.png','1997-12-19'),
(5,'The Final Fantasy Legend','The Final Fantasy Legend, conocido en Japón como Makai Toushi Sa·Ga, ​ es un videojuego para Game Boy que sacó la compañía Square en diciembre de 1989. Es el primer juego de la serie SaGa y el primer videojuego de rol que salió para dicha consola.','assets/img/The_FF_Legend.jpg','1989-12-15'),
(5,'South Park','South Park es un videojuego de disparos en primera persona basado en las primeras temporadas de la popular serie de televisión del mismo nombre. El videojuego es accionado por el motor de videojuego de Turok 2 y fue publicado en 1998 por Acclaim para PC, Nintendo 64 y PlayStation.','assets/img/south_park.jpg','1998-12-21'),
(5,'Double Dragon','Double Dragon es un videojuego lanzado para máquinas recreativas en 1987, desarrollado por Technos Japan, ​ que pertenece al género Beatem up. Su distribución en Europa y Norteamérica la llevó a cabo Taito. El título se considera un sucesor no oficial del videojuego Renegade de Technos, de similar temática.','assets/img/Double_Dragon_GB.jpg','1987-06-16'),
(5,'Adventure Island','Adventure Island, conocido en Japón como Takahashi Meijin no Bōken Jima es un videojuego desarrollado y distribuido por Hudson Soft para las consolas NES, Game Boy, ordenador MSX, Consola Virtual de Wii, Game Boy Advance, y en los Teléfonos móviles. También es conocido como Hudsons Adventure Island.','assets/img/Adventure_Island.jpg','1986-05-23'),
(5,'Disneys Aladdin','Disneys Aladdin es un videojuego de plataformas basado en la película de 1992 del mismo nombre desarrollada por Virgin Games USA.','assets/img/Disneys_Aladin.jpg','1993-11-11'),
(5,'Mortal Kombat II','Mortal Kombat II es un competitivo juego de lucha inicialmente producido por Midway Games en máquinas arcades durante 1993 y luego portado a múltiples sistemas caseros, incluyendo computadoras o videoconsolas como Mega Drive.','assets/img/Mortal_Kombat_II.jpg','1993-04-15'),
(5,'Tetris 2','Tetris 2 es un videojuego publicado en 1993 y 1994 por Nintendo para Game Boy, Nintendo Entertainment System y Super Nintendo Entertainment System.','assets/img/TetrisII.jpg','1993-05-04'),
(5,'Battletoads','Battletoads es un videojuego del género beat em up donde con el personaje uno debe luchar contra muchos enemigos. Fue publicado por primera vez para la videoconsola Nintendo Entertainment System, en el año 1991.','assets/img/Battletoads.jpg','1991-06-09');


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

