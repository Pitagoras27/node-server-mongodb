const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response')

var app = express();
app.use(bodyParser.json());
// urlencoded del bodyparser para indicar el tipo de contenido enviado
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers) // las cabeceras que se envían en el request
    // enviar una cabecera personalizada permite trabajar de forma más segura, 
    // accesos personalizados, cache control - etc
    res.header({
        "custom-header": "Valor personalizado"
    });
    response.success(req, res, "Lista de mensajes")
    res.send('lista de mensajes!!')
});

router.post('/message', function (req, res) {
    // res.send('Mensaje ' + req.body.text + ' añadido correctamente!!')
    if (req.query.error == 'ok')
        response.error(req, res, 'Error simulado', 401, 'Mensaje visible sólo para el back');
    else
        response.success(req, res, 'Creado correctamente', 201);
});

app.use('/app', express.static("public"))
app.listen(3000);
console.log('Listen to port: 3000');
