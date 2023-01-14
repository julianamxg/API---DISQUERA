const Artista = require("../models/Artista");

exports.obtener = async (req, res) => {
  try {
    const artistas = await Artista.find().populate('disquera', {
      "nitDisquera":1,
      "nombreDisquera":1,
      "telefonoDisquera":1,
      "direccionDisquera":1,
      "estadoDisquera":1
    })
    res.status(200).json(artistas);
  } catch (error) {
    res.status(500).json(error)
  }
}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const artistas = await Artista.findById(id).populate('disquera', {
      "nitDisquera":1,
      "nombreDisquera":1,
      "telefonoDisquera":1,
      "direccionDisquera":1,
      "estadoDisquera":1
    });
    res.status(200).json(artistas);
  } catch (error) {
    res.status(500).json(error)
  }
}
exports.add = async (req, res) => {
  try {
    //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
    const newArtista = new Artista(req.body)
    await newArtista.save();
    console.log(newArtista);
    res.json({ msj: "Artista registrado exitosamente", newArtista })
  } catch (error) {
    res.status(500).json({ msj: "Error al registrar" + error })
  }

}

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const newArtista = new Artista(req.body, req.file)
    const cambioArtista = await Artista.findByIdAndUpdate(id, newArtista);
    res.json({ msj: "Artista actualizado exitosamente" })
  } catch (error) {
    res.status(500).json(error);
  }
}