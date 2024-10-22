// Importamos el modulo express:
const express = require('express');
const cors= require('cors');
const bodyParser= require('body-parser');
// Inicializamos la aplicacion: 
const app= require('express');
app.use(cors());
app.use(bodyParser.json());

const PORT= 3000;

app.listen(PORT, ()=>{
    console.log(`Se ha inicializado el servidor en el puerto ${PORT}`);
})