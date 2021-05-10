const { Router } = require('express'); //se jala ruta de express
const router = Router();
const BD = require('../config/configbd');
var nodemailer = require('nodemailer')

//get usuarios
router.get('/getUsers', async (req, res) => {
    BD.query('select * from usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get publicaciones
router.get('/getPosts', async (req, res) => {
    BD.query(`
    select pu.id, us.username user, ju.nombre game, pu.fecha date, pu.comentario comment from publicacion pu
    inner join usuario us on pu.id_usuario = us.id
    inner join juego ju on pu.id_juego = ju.id
    order by pu.fecha desc
    `, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get publicaciones filtradas por usuario
router.get('/getPubliUsers:username', async (req, res) => {
    const { username } = req.params;
    const sql = `
    select pu.id, us.username user, ju.nombre game, pu.fecha date, pu.comentario comment from publicacion pu
    inner join usuario us on pu.id_usuario = us.id
    inner join juego ju on pu.id_juego = ju.id
    where us.username = ?
    order by pu.fecha desc
    `
    BD.query(sql, [username], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get publicaciones filtradas por juego
router.get('/getPubliGames:nombre', async (req, res) => {
    const { nombre } = req.params;
    const sql = `
    select pu.id, us.username user, ju.nombre game, pu.fecha date, pu.comentario comment from publicacion pu
    inner join usuario us on pu.id_usuario = us.id
    inner join juego ju on pu.id_juego = ju.id
    where ju.nombre = ?
    order by pu.fecha desc
    `
    BD.query(sql, [nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get comentarios
router.get('/getComments', async (req, res) => {
    BD.query(`
    select us.username user, co.comentario comment, co.id_publicacion post  from comentario co
    inner join usuario us on co.id_usuario = us.id
    `, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get juegos
router.get('/getGames', async (req, res) => {
    BD.query(`
    select * from juego
    `, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get consolas
router.get('/getConsola', async (req, res) => {
    BD.query(`
    select * from consola
    `, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get juego
router.get('/getJuego:id', async (req, res) => {
    const { id } = req.params;
    const sql = `
    select * from juego where id = ?
    `
    BD.query(sql, [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get consola especifica
router.get('/getCon:nombre', async (req, res) => {
    const { nombre } = req.params;
    const sql = `
    select * from consola where nombre = ?
    `
    BD.query(sql, [nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});
//get juego especifico
router.get('/getGam:nombre', async (req, res) => {
    const { nombre } = req.params;
    const sql = `
    select * from juego where nombre = ?
    `
    BD.query(sql, [nombre], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
});

//get biblioteca
router.get('/getLibrary', async (req, res) => {
    const sql = `
    select * from biblioteca
    `
    BD.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });

//get query1
router.get('/query1', async (req, res) => {
    const sql = `
    select u.nombre usuario, count(bi.id_juego) juegos from biblioteca bi
    inner join usuario u on bi.id_usuario = u.id
    group by usuario
    order by juegos desc limit 5
    `
    BD.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})
//get query2
router.get('/query2', async (req, res) => {
    const sql = `
    select u.nombre usuario, count(co.id_usuario) comentarios from comentario co
    inner join usuario u on co.id_usuario = u.id
    group by usuario order by comentarios desc limit 5
    `
    BD.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})
//get query3
router.get('/query3', async (req, res) => {
    const sql = `
    select j.nombre juego, c.nombre consola, avg(bi.puntuacion) promedio from biblioteca bi
    inner join juego j on bi.id_juego = j.id
    inner join consola c on j.id_consola = c.id
    group by juego, consola order by promedio desc limit 5
    `
    BD.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})
//get query4
router.get('/query4', async (req, res) => {
    const sql = `
    select nombre juego, fecha from juego
    order by fecha
    `
    BD.query(sql, (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})




//post usuarios
router.post('/setUsers', async (req, res) => {
    const { name, last_name, user, email, pass, bio, fecha } = req.body;
    console.log(name, last_name, user, email, pass, bio, fecha)
    const query = `
    insert into usuario (nombre,apellido,username,correo,password,biografia,fecha)
    values(?,?,?,?,?,?,?)
    `;
    BD.query(query, [name, last_name, user, email, pass, bio, fecha], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Persona ' + name + ' agregada!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });

})

//post comentarios
router.post('/setComments', async (req, res) => {
    const { id_usuario, id_publicacion, comentario } = req.body;
    const query = `
    insert into comentario (id_usuario,id_publicacion,comentario)
    values(?,?,?)
    `;
    BD.query(query, [id_usuario, id_publicacion, comentario], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Comentario ' + comentario + ' agregado!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})

//post publicacion
router.post('/setPosts', async (req, res) => {
    const { id_usuario, juego, fecha, comentario } = req.body;
    const query = `
    insert into publicacion (id_usuario, id_juego, fecha, comentario)
    values(?,(select id from juego where nombre = ?),?,?)
    `;
    BD.query(query, [id_usuario, juego, fecha, comentario], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Publicacion ' + comentario + ' agregada!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})
//post biblioteca
router.post('/setLibrary', async (req, res) => {
    const { id_usuario, id_juego, puntuacion, opinion } = req.body;
    const query = `
    insert into biblioteca (id_usuario, id_juego, puntuacion, opinion)
    values(?,?,?,?)
    `;
    BD.query(query, [id_usuario, id_juego, puntuacion, opinion], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'biblioteca agregada!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})

//post juegos
router.post('/setGame', async (req, res) => {
    const { id_consola, nombre, descripcion, cartucho, fecha } = req.body;
    const query = `
    insert into juego (id_consola, nombre, descripcion, cartucho, fecha)
    values(?,?,?,?,?)
    `;
    BD.query(query, [id_consola, nombre, descripcion, cartucho, fecha], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Juego agregado!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})




//UPDATE MYSQL
router.put("/:id", async (req, res) => {
    const { nombre, apellido, genero } = req.body;
    const { id } = req.params;
    const query = `
        UPDATE persona
        SET nombre = ?, apellido = ?, genero = ? WHERE id = ?
    `;
    BD.query(query, [nombre, apellido, genero, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Persona ' + nombre + ' editada!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    })
})

//update usuario
router.put('/upUser/:id', async (req, res) => {
    const { nombre, apellido, username, correo, password, biografia, fecha } = req.body;
    const { id } = req.params;
    const query = `
        UPDATE usuario
        SET nombre = ?, apellido = ?, username = ?, correo = ?, password = ?, biografia = ?, fecha = ? 
        where id = ?
    `;
    BD.query(query, [nombre, apellido, username, correo, password, biografia, fecha, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario ' + nombre + ' editado!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    })
})

//update juego
router.put('/upGame/:id', async (req, res) => {
    const { id_consola, nombre, descripcion, cartucho, fecha } = req.body;
    const { id } = req.params;
    const query = `
        UPDATE juego
        SET id_consola = ?, nombre = ?, descripcion = ?, cartucho = ?, fecha = ? 
        where id = ?
    `;
    BD.query(query, [id_consola, nombre, descripcion, cartucho, fecha, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Juego ' + nombre + ' editado!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    })
})
//update pass
router.put('/respass/:id', async (req, res) => {
    const { password } = req.body;
    const { id } = req.params;
    const query = `
    UPDATE usuario
    SET password = ? 
    where id = ?
    `;
    BD.query(query, [password, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario ' + id + ' editado!' });
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    })
})




//DELETE user
router.delete("/DeleteUser/:id", async (req, res) => {
    const { id } = req.params;
    const query = 'delete from usuario where id = ?'
    BD.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json({ "msg": "Usuario eliminado" })
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})

//DELETE MYSQL

//delete game
router.delete("/DeleteGame/:id", async (req, res) => {
    const { id } = req.params;
    const query = 'delete from juego where id = ?'
    BD.query(query, [id], (err, rows, fields) => {
        if (!err) {
            res.json({ "msg": "Juego eliminado" })
        } else {
            console.log('Error al hacer consulta: ' + err)
        }
    });
})

})

module.exports = router;