const { Router } = require('express'); //se jala ruta de express
const router = Router();
const BD = require('../config/configbd');
var nodemailer = require('nodemailer')

router.get('/', async (req,res) => {
    console.log('Todo excelente jijiji')
    let retu = []
    let val1 = {
        "id_user":"Hola",
        "name_user":"Team"
    }
    retu.push(val1)
    let val2 = {
        "id_user":"Mundo",
        "name_user":"Pankey"
    }
    retu.push(val2)
    res.json(retu)
})

//READ
router.get('/getUsers', async (req, res) => { //ruta
    sql = "select * from Usuario"; //consulta
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Usuario": user[0], 
            "Nombre": user[1],
            "Apellido": user[2],
            "Correo": user[3],
            "Contrasenia": user[4],
            "Fecha_nac": user[5],
            "Pais": user[6],
            "Administrador": user[7],
            "Creditos": user[8]       
        }
        Users.push(userSchema);
    })

    res.json(Users);    
})


router.get('/getPublicaciones', async (req, res) => { //ruta
    sql = `select pub.Id_Publicacion, pub.Id_Producto, pub.Id_Usuario, pub.Nombre_producto, pub.Descripcion, pub.Palabra_clave, prod.Precio, prod.Tipo_producto
    from Publicacion pub, Producto prod where pub.Id_Producto = prod.Id_Producto`; //consulta
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = { 
            "Id_Publicacion": user[0], 
            "Id_Producto": user[1],
            "Id_Usuario": user[2],
            "Nombre_producto": user[3],
            "Descripcion": user[4],
            "Palabra_clave": user[5],
            "Precio": user[6],
            "Tipo_producto": user[7]  
        }
        Users.push(userSchema);
    })

    res.json(Users);    
})




router.get('/getProductos', async (req, res) => { //ruta
    sql = "select * from Producto"; //consulta
    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Producto": user[0], 
            "Nombre_producto": user[1],
            "Tipo_producto": user[2],
            "Precio": user[3]       
        }
        Users.push(userSchema);
    })

    res.json(Users);    
})

//CREATE
router.post('/addUsers', async (req, res) => {
    const { name, lname, email, pais, fecha, pass } = req.body;

    sql = `insert into Usuario (Nombre, Apellido, Correo, Pais, Fecha_nac, Contrasenia, Administrador, Creditos) 
            values (:name,:lname,:email,:pais,:fecha,:pass, 0, 10000)`

    await BD.Open(sql, [name, lname, email, pais, fecha, pass], true);

    res.status(200).json({
        "name": name,
        "lastname": lname,
        'email': email,
        'pais': pais,
        'fecha': fecha,
        'pass': pass
    })
})

router.post('/addPost', async (req, res) => {
    const { id_user, nombre_prod, descripcion, palabra_clave, precio, tipo } = req.body;

    console.log(id_user)
    console.log(nombre_prod)
    console.log(descripcion)
    console.log(palabra_clave)
    console.log(precio)
    console.log(tipo)

    sql = `insert into Producto (Nombre_producto, Tipo_producto, Precio) values (:nombre_prod, :tipo, :precio)`
    await BD.Open(sql, [nombre_prod, tipo, precio], true);
    sql2 = `select Id_Producto from Producto where Nombre_producto = :nombre_prod`
    let id_temp = await BD.Open(sql2, [nombre_prod], true);
    var tempint = parseInt(id_temp.rows[0])
    console.log(tempint)

    sql3 = `insert into Publicacion (Id_Producto, Id_Usuario, Nombre_producto, Descripcion, Palabra_clave)
    values (:id_temp, :id_user, :nombre_prod, :descripcion, :palabra_clave)`

    await BD.Open(sql3, [ tempint, id_user, nombre_prod, descripcion, palabra_clave], true);

    res.status(200).json({
        "id_temp": tempint,
        "id_user": id_user,
        'nombre_prod': nombre_prod,
        'descripcion': descripcion,
        'palabra_clave': palabra_clave,
        'precio': precio
    })
})

router.post('/buscarPublicacion', async (req, res) => {
    const { key } = req.body;

    sql = `select * from ( select pub.Id_Publicacion, pub.Id_Producto, pub.Id_Usuario, pub.Nombre_producto, pub.Descripcion, pub.Palabra_clave, prod.Precio, prod.Tipo_producto
        from Publicacion pub, Producto prod where pub.Id_Producto = prod.Id_Producto ) where Nombre_producto = :key`

    let result = await BD.Open(sql, [key], true);

    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "Id_Publicacion": user[0], 
            "Id_Producto": user[1],
            "Id_Usuario": user[2],
            "Nombre_producto": user[3],
            "Descripcion": user[4],
            "Palabra_clave": user[5],
            "Precio": user[6],
            "Tipo_producto": user[7]      
        }
        Users.push(userSchema);
    })

    res.json(Users);  
})


//UPDATE
router.put("/updateUser", async (req, res) => {
    const { id, name, lname, email, pais, fecha, pass } = req.body;
    console.log(id)
    console.log(name)
    console.log(lname)
    console.log(email)
    console.log(pais)
    console.log(fecha)
    console.log(pass)
    sql = "update Usuario set Nombre=:name, Apellido=:lname, Correo=:email, Pais=:pais, Fecha_nac=:fecha, Contrasenia=:pass where Id_Usuario =:ids";

    await BD.Open(sql, [name, lname, email, pais, fecha, pass , id], true);

    res.status(200).json({
        "Id_Usuario": id,
        "Nombre": name,
        "Apellido": lname,
        'Correo': email,
        'Pais': pais,
        'Fecha_nac': fecha,
        'Contrasenia': pass
    })

})

//DELETE
router.delete("/deleteUser/:codu", async (req, res) => {
    const { codu } = req.params;

    sql = "update person set state=0 where codu=:codu";

    await BD.Open(sql, [codu], true);

    res.json({ "msg": "Usuario Eliminado" })
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

 



module.exports = router;