require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const app = express();


const bodyParser = require('body-parser');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//habilitar el public
app.use(express.static(path.resolve(__dirname, './public')));

//Configuracion global de las rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;

    console.log('DataBase Online!!');
});


app.listen(process.env.PORT, () => {
    console.log('escuchando puerto', process.env.PORT);
});