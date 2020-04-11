const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router); // utiliza el app.use para gestionar las rutas con el middelware de express
router(app)



app.use('/app', express.static('public'));

app.listen(3000);
console.log('Listen to port: 3000');
