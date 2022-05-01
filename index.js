const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();

app.use(express.json());

app.use(cors())

app.use('/api/pokemon', require('./routes/pokemon'));

app.listen(3000, () => {
    console.log('El servidor esta corriendo perfectamente')
})