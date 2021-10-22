const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();

class Server{

    constructor(){
        //Inicializando express
        this.app = express();
        this.cr = crypto();
        //Configurando el puerto
        this.port = process.env.PORT;

        //Directorio de rutas definidas
        this.usuariosPath = '/api/v1/usuarios';
        

        //Middlerwares
        this.middlewares();

        //Rutas 
        this.routes();
        
        //Seguridad
        this.crytoGenerate();
    }

    middlewares(){

        //Cors 
        this.app.use( cors() );

        //Personalizados
        this.app.use(require('../middlewares/error.middleware'));

        //Lectura y parseo del Body
        /*Se le especifica a express que para las 
        peticiones post, put, delete vienen en fortmato json*/
        this.app.use( express.json() ); 

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios.route'));
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App disponible en: http://localhost:${this.port}`);
        });
    }


    crytoGenerate(){

        
        // Calling randomBytes method with callback
        this.cryptos.randomBytes(127, (err, buf) => {
        if (err) {
            // Prints error
            console.log(err);
            return;
        }
        
        // Prints random bytes of generated data
        console.log("La llave es: "
                    + buf.toString('hex'));
        });
    }
}

module.exports = Server;