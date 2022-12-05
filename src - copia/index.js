const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); 
const artistaRoutes = require("./routes/artista");
const disqueraRoutes = require("./routes/disquera");
const albumRoutes = require("./routes/album");

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', artistaRoutes);
app.use('/api', disqueraRoutes);
app.use('/api', albumRoutes);
 
//Rutas
app.get("/", (req, res) => {
    res.send("Bienvenido a mi API");
});

//mongose conexion
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Se conecto a mongo"))
    .catch((error) => console.error(error));


app.listen(port,() => console.log('El servidor funciona en el puerto',port));