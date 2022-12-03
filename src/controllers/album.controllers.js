const Artista = require("../models/Artista");
const Album = require("../models/Album");
const Disquera = require("../models/Disquera");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const albumes = await Album.find().populate('artista',{
    "_id": 1,
    "noDocumento":1,
    "tipoDocumento": 1,
    "nombreArtista": 1,
    "apellidoArtista":1,
    "nombreArtistico":1,
    "feNacimArtista":1,
    "emailArtista":1
    });
    res.status(200).json(albumes);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const albumes = await Album.findById(id).populate('artista',{
        "_id": 1,
        "noDocumento":1,
        "tipoDocumento": 1,
        "nombreArtista": 1,
        "apellidoArtista":1,
        "nombreArtistico":1,
        "feNacimArtista":1,
        "emailArtista":1

        });
      res.status(200).json(albumes);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }
  exports.add = async (req, res) => {
    try {
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const newAlbum = new Album(req.body,req.file)
      console.log(req.file);
      await newAlbum.save();
      console.log(newAlbum);
      res.json({ msj: "Album registrado exitosamente", id: newAlbum._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newAlbum = new Album(req.body,req.file)
      console.log(req.file);

      
      const cambioUsuario = await User.findByIdAndUpdate(id, newAlbum);
      res.json({ msj: "Album actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }

