// archivo engargado de recibir las peticiones HTTP, procesar la información y enviarla al controlador

const express = require('express')
const response = require('../../network/response')
const router = express.Router()

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
        response.error(req, res, 'Error simulado', 500, 'Mensaje visible sólo para el back');
    else
        response.success(req, res, 'Creado correctamente', 201);
});

module.exports = router;