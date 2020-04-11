// archivo engargado de recibir las peticiones HTTP, procesar la información y enviarla al controlador

const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
    console.log(req.headers) // las cabeceras que se envían en el request
    // enviar una cabecera personalizada permite trabajar de forma más segura, 
    // accesos personalizados, cache control - etc
    res.header({
        "custom-header": "Valor personalizado"
    });
    response.success(req, res, "Lista de mensajes")
    res.send('lista de mensajes!!')
});

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 201);
        })
        .catch(() => {
            response.error(req, res, 'Información inválida', 500, 'Error en el controlador');
        })

});

module.exports = router;