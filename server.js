const express = require('express');
const bodyParser = require('body-parser');
const socket = require('./socket')

const connect = require('./db')
const router = require('./network/routes');

connect('mongodb+srv://<user_name>:<password>@cluster0-gnypt.mongodb.net/<db_name')

const app = express();
const server = require('http').Server(app)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server)

router(app)

app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log('Listen to port: 3000');
});
