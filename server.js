const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req, res) {
    res.send('lista de mensajeS')
})

router.post('/message', function (req, res) {
    res.send('Mensaje añadido')
})

/* app.use('/', (req, res) => {
    res.send('server con Express');
}); */

app.listen(3000);
console.log('Listen to port: 3000');