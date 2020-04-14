// archivo engargado de recibir las peticiones HTTP, procesar la información y enviarla al controlador

const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function (req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});

router.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.success(req, res, 'Creado correctamente', 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.patch('/:id', function (req, res) {
    console.log(req.params.id)
    res.send('Ok')
})

module.exports = router;