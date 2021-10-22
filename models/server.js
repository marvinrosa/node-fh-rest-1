const express = require('express');


class Server{

    constructor(){
        //Inicializando express
        this.app = express();

        //Configurando el puerto
        this.port = process.env.PORT;

        //Middlerwares
        this.middlewares();

        //Rutas 
        this.routes();
    }

    middlewares(){

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api/', (req, res) => {
            res.send('API');
        });

        // this.app.get('*', (req, res) => {
        //     res.send('404 | Page not found');
        // });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App disponible en: http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;