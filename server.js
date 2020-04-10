const express = require('express');
// import express from './express'; sistema de modulos de ES6
var app = express();

app.use('/', (req, res) => {
    res.send('server con Express');
});

app.listen(3000);
console.log('Listen to port: 3000');