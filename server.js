const express = require('express');
require('dotenv').config();
const socket = require('./socket')

const connect = require('./db')
const router = require('./network/routes');

connect(process.env.CONECTION)

const app = express();
app.use( express.json() );

const server = require('http').Server(app)

socket.connect(server)

router(app)

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Listen to port: 3000');
