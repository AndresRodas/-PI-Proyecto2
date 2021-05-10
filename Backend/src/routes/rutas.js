const { Router } = require('express'); //se jala ruta de express
const router = Router();
const BD = require('../config/configbd');
var nodemailer = require('nodemailer')

//test coneccion mysql
//GET MYSQL
router.get('/', async (req, res) => {
    BD.query('select * from persona',(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
router.get('/getUsers', async (req, res) => {
    BD.query('select * from usuario',(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    BD.query('select * from persona where id = ?', [id],(err,rows,fields) => {
        if(!err){
            res.json(rows[0]);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
<<<<<<< Updated upstream
=======
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
})
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

>>>>>>> Stashed changes

//POST MYSQL
router.post('/add', async (req, res) => {
    const { nombre, apellido, genero} = req.body;
    const query = `
    insert into persona(nombre,apellido,genero)
    values(?,?,?);
    `;
    BD.query(query,[nombre, apellido, genero],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Persona '+nombre+' agregada!'});
        } else{
            console.log('Error al hacer consulta: '+err)
        }  
    });

})

<<<<<<< Updated upstream
=======
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


>>>>>>> Stashed changes

//UPDATE MYSQL
router.put("/:id", async (req, res) => {
    const { nombre, apellido, genero } = req.body;
    const { id } = req.params;
    const query = `
        UPDATE persona
        SET nombre = ?, apellido = ?, genero = ? WHERE id = ?
    `; 
    BD.query(query, [nombre, apellido, genero, id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Persona '+nombre+' editada!'});
        } else{
            console.log('Error al hacer consulta: '+err)
        } 
    })
})

//DELETE MYSQL
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
<<<<<<< Updated upstream
    const query = 'delete from persona where id = ?';
    BD.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json({ "msg": "Persona eliminada" })
        } else{
            console.log('Error al hacer consulta: '+err)
        } 
    }); 
=======
    const query = `
        UPDATE usuario
        SET nombre = ?, apellido = ?, username = ?, correo = ?, password = ?, biografia = ?, fecha = ? 
        where id = ?
    `;
    BD.query(query, [nombre, apellido, username, correo, password, biografia, fecha, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario ' + nombre + ' editado!' });
        } else {
            console.log(id, nombre, apellido, username, correo, password, biografia, fecha)
>>>>>>> Stashed changes

    
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





//enviar correo
router.post('/enviarcorreo', function(req, res){
    const { name, lname, email } = req.body;
    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'bastianperis12@gmail.com',
            pass: 'hesoyam666'
        }
<<<<<<< Updated upstream
    })
    var output = '<strong><h1>CORREO DE CONFIRMACION</h1> \n\nHola <h3>'+name+' '+lname+'</h3>\nTu correo electronico ha sido confirmado en <h3>GTSales!!</h3>\nIngresa al siguiente link: http://localhost:4200/login para ingresar con tu correo electronico y contraseña.</strong>'
    var mailOptions = {
        from: 'GTSales',
        to: email,
        subject: 'Confirmacion',
        text: 'Correo de confirmacion.',
        html: output
    }
    smtpTransport.sendMail(mailOptions, function(error, respuesta){
        if(error){
            console.log(error)
        }else{
            res.send('Mensaje enviado!!')
        }
    })
})

 
=======
    });
})
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes


module.exports = router;