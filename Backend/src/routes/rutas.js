const { Router } = require('express'); //se jala ruta de express
const router = Router();
const BD = require('../config/configbd');
var nodemailer = require('nodemailer')

//get usuarios
router.get('/getUsers', async (req, res) => {
    BD.query('select * from usuario',(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
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
    `,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
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
    BD.query(sql,[username],(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
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
    BD.query(sql,[nombre],(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
//get comentarios
router.get('/getComments', async (req, res) => {
    BD.query(`
    select us.username user, co.comentario comment, co.id_publicacion post  from comentario co
    inner join usuario us on co.id_usuario = us.id
    `,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
//get juegos
router.get('/getGames', async (req, res) => {
    BD.query(`
    select * from juego
    `,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
//get consolas
router.get('/getConsola', async (req, res) => {
    BD.query(`
    select * from consola
    `,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
//get juego
router.get('/getJuego:id', async (req, res) => {
    const { id } = req.params;
    const sql = `
    select * from juego where id = ?
    `
    BD.query(sql,[id],(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
//get consola especifica
router.get('/getCon:nombre', async (req, res) => {
    const { nombre } = req.params;
    const sql = `
    select * from consola where nombre = ?
    ` 
    BD.query(sql,[nombre],(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});
//get juego especifico
router.get('/getGam:nombre', async (req, res) => {
    const { nombre } = req.params;
    const sql = `
    select * from juego where nombre = ?
    ` 
    BD.query(sql,[nombre],(err,rows,fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log('Error al hacer consulta: '+err)
        }
    });
});






//post usuarios
router.post('/setUsers', async (req, res) => {
    const { name, last_name, user, email, pass, bio, fecha  } = req.body;
    console.log(name,last_name,user,email,pass,bio,fecha)
    const query = `
    insert into usuario (nombre,apellido,username,correo,password,biografia,fecha)
    values(?,?,?,?,?,?,?)
    `;
    BD.query(query,[name, last_name, user, email, pass, bio, fecha],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Persona '+name+' agregada!'});
        } else{
            console.log('Error al hacer consulta: '+err)
        }  
    });

})

//post comentarios
router.post('/setComments', async (req, res) => {
    const { id_usuario, id_publicacion, comentario  } = req.body;
    const query = `
    insert into comentario (id_usuario,id_publicacion,comentario)
    values(?,?,?)
    `;
    BD.query(query,[id_usuario, id_publicacion, comentario],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Comentario '+comentario+' agregado!'});
        } else{
            console.log('Error al hacer consulta: '+err)
        }  
    });
})

//post publicacion
router.post('/setPosts', async (req, res) => {
    const { id_usuario, juego, fecha, comentario  } = req.body;
    const query = `
    insert into publicacion (id_usuario, id_juego, fecha, comentario)
    values(?,(select id from juego where nombre = ?),?,?)
    `;
    BD.query(query,[id_usuario, juego, fecha, comentario ],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'Publicacion '+comentario+' agregada!'});
        } else{
            console.log('Error al hacer consulta: '+err)
        }  
    });
})
//post biblioteca
router.post('/setLibrary', async (req, res) => {
    const { id_usuario, id_juego, puntuacion, opinion  } = req.body;
    const query = `
    insert into biblioteca (id_usuario, id_juego, puntuacion, opinion)
    values(?,?,?,?)
    `;
    BD.query(query,[id_usuario, id_juego, puntuacion, opinion ],(err,rows,fields) => {
        if(!err){
            res.json({Status: 'biblioteca agregada!'});
        } else{
            console.log('Error al hacer consulta: '+err)
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
    const query = 'delete from persona where id = ?'
    BD.query(query, [id], (err, rows, fields) => {
        if(!err){
            res.json({ "msg": "Persona eliminada" })
        } else{
            console.log('Error al hacer consulta: '+err)
        } 
    }); 

    
})

module.exports = router;