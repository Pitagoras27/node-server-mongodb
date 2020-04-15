const express = require('express');
const bodyParser = require('body-parser');

const connect = require('./db')
const router = require('./network/routes');

connect('mongodb+srv://<user_name>:<password>@cluster0-gnypt.mongodb.net/<db_name')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app)

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Listen to port: 3000');
