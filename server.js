const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

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
    })
    res.send('lista de mensajes!!')
});

router.post('/message', function (req, res) {
    console.log(req.query)
    console.log(req.body, "AA")
    // res.send('Mensaje ' + req.body.text + ' añadido correctamente!!')
    res.status(200).send([{
        'error': null,
        'body': 'Ejecutado correctamente!'
    }]);
});


app.listen(3000);
console.log('Listen to port: 3000');
