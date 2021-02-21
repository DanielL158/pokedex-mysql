// TODO: Create an express server
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');

const server = express();
const port = 3000;

server.use(morgan('dev'));
server.use(express.json());

server.use(express.static(path.join(__dirname, '../client/dist')));

server.use('/pokedex', router);

server.listen(port, () => console.log(`LISTENING ON PORT ${port}`))