//*Importaciones propias de node , 1ro
//*Importaciones de terceros 2do

require('dotenv').config();

const Server = require('./models/server');

const server = new Server();
server.listen();







