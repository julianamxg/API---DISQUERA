const express = require("express");
const userSchema = require("../models/artista");

const router = express.Router();

// create user
router.post("/artista", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/artista", (req, res) => {
   userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.get("/artista/:id", (req, res) => {
    const {id} = req.params;
    userSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

   router.put("/artista/:id", (req, res) => {
    const {id} = req.params;
    const {noDocumento, tipoDocumento, nombreArtista, apellidoArtista, nombreArtistico, feNacimArtista,
      emailArtista,idDisquera, estadoArtista} = req.body;
    userSchema
       .updateOne({_id: id},{$set:{noDocumento, tipoDocumento, nombreArtista, apellidoArtista, nombreArtistico,
         feNacimArtista, emailArtista,idDisquera, estadoArtista}})
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

module.exports = router;