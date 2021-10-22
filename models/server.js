const express = require('express');
const cors = require('cors');

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

        //Cors 
        this.app.use( cors() );

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api/', (req, res) => {
            res.json({
                msg:'GET API METHOD'
            });
        });

        this.app.put('/api/', (req, res) => {
            res.status(400).json({
                msg:'PUT API METHOD'
            });
        });

        this.app.post('/api/', (req, res) => {
            res.status(201).json({
                msg:'POST API METHOD'
            });
        });

        this.app.delete('/api/', (req, res) => {
            res.status(500).json({
                msg:'DELETE API METHOD'
            });
        });

        this.app.patch('/api/', (req, res) => {
            res.json({
                msg:'PATCH API METHOD'
            });
        });
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App disponible en: http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;