const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

class Server{

    constructor(){
        //Inicializando express
        this.app = express();
       
        //Configurando el puerto
        this.port = process.env.PORT;

        //Directorio de rutas definidas
        this.usuariosPath = '/usuarios';
        
        // this.paths = {
        //     auth: "/api/v1/auth",
        //     usuarios : "/api/v1/usuarios",
        //     home: "/api/v1/home",
        //   };
        //this.usuariosPath = '/api/usuarios';

          
        //Middlerwares
        this.middlewares();

        //Rutas 
        this.routes();
        
        //Seguridad

    }

    middlewares(){

        //Cors 
        //this.app.use( cors() );

        //Personalizados
        //this.app.use(require('../middlewares/error.middleware'));

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


   
}

module.exports = Server;