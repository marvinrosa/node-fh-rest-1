const dotenv = require('dotenv');
dotenv.config();
const mysql2 = require('mysql2');

class DbConnection{

    constructor(){
        this.db = mysql2.createPool({
            host: process.env.HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE
        });
        
        this.checkConnection();
    }

    //Verificando si no ha habido problema para conectarse a la base de datos
    checkConnection(){
        this.db.getConnection((err, connection) => {

            if(err){
                if(err.code === 'PROTOCOL_CONNECTION_LOST'){
                    console.error('La base de datos ha perdido la conexión');
                }
                if(err.code === 'ER_CON_COUNT_ERROR'){
                    console.error('La base de datos tiene demasiadas conexiones');
                }
                if(err.code === 'ECONNREFUSED'){
                    console.error('La base de datos ha denegado la conexión');
                }
            }
            if (connection) {
                connection.release();
            }
            return
        });
    }

    // esta funcion devolvera una promesa
    query = async (sql, values) =>{
        return new promise((resolve, reject)=>{

             const callback = (err, result)=>{
                    if(err){
                        reject(error);
                        return
                    }
                    resolve(result);
             }

             this.db.execute(sql, values, callback);

        }).catch((err)=>{

            const mysqlErrorList = Object.keys(HttpStatusCodes);

            //Convierte los errores de myql detro de la lista a codigos de estado de HTTP
            err.status = mysqlErrorList.includes(err.code) ? HTTPStatusCode[err.code] : err.status;

            throw err;
        });
    }

}

//ENUM
const HttpStatusCodes = Object.freeze({
    ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
    ER_DUP_ENTRY: 409
});

module.exports = DbConnection.query;