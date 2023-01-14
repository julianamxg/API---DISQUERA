const express = require('express');
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
const rutasDisquera = require('./routes/disquera.routes');
const rutasAlbum=require('./routes/album.routes');
const rutasArtista=require('./routes/artistas.routes')
const app = express()
require('dotenv').config()
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-disquera");
app.set("port",process.env.PORT || 3000);
app.set("host",process.env.HOST || 'localhost');


//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas

app.use(express.static('public'));

app.use("/disqueras",rutasDisquera);
app.use("/albumes",rutasAlbum);
app.use("/artistas",rutasArtista);

module.exports=app;