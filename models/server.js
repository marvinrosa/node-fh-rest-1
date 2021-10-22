const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        //Inicializando express
        this.app = express();

        //Configurando el puerto
        this.port = process.env.PORT;

        //Directorio de rutas definidas
        this.usuariosPath = '/api/usuarios';
        

        //Middlerwares
        this.middlewares();

        //Rutas 
        this.routes();
    }

    middlewares(){

        //Cors 
        this.app.use( cors() );

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/user.route'));
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App disponible en: http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;