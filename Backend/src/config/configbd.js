const mysql = require('mysql');
const { promisify } = require('util');
//const { connect } = require('../routes/person-rotes');


database = {
    host: 'localhost',
    user: 'root',
    password: 'MAYQ',
    database: 'practicas_iniciales'
}

const pool = mysql.createPool(database)

pool.getConnection((err,connection)=>{
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('La coneccion con la base de datos fue cerrada')
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.log('La base de datos tiene muchas conecciones')
        }
        if (err.code === 'ECONNREFUSED'){
            console.log('La coneccion con la base de datos fue rechazada')
        }
    }
    if(connection) connection.release();
    console.log('Base de datos conectada!')
    return;
});

// async function Open(sql, binds, autoCommit) {
//     let cnn = await oracledb.getConnection(cns);
//     let result = await cnn.execute(sql, binds, { autoCommit });
//     cnn.release();
//     return result;
// }


pool.query = promisify(pool.query);
module.exports = pool;