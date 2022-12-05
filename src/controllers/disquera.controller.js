const Disquera = require("../models/Disquera");

exports.obtener = async (req, res) => {
  try {
    const disqueras = await Disquera.find();
    res.status(200).json(disqueras);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const disqueras = await Disquera.findById(id);
    res.status(200).json(disqueras);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {
    //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
    const newDisquera = new Disquera(req.body,req.file)
    console.log(req.file);
    await newDisquera.save();
    console.log(newDisquera);
    res.json({ msj: "Disquera registrada exitosamente", id: newDisquera._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newDisquera = new Disquera(req.body,req.file)
    console.log(req.file);
  
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioDisquera = await Disquera.findByIdAndUpdate(id, newDisquera);
    res.json({ msj: "Disquera actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}


