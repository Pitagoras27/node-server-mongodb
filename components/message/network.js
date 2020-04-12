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
});

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 201);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })

});

module.exports = router;