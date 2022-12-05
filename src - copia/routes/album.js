const express = require("express");
const userSchema = require("../models/album");

const router = express.Router();

// create user
router.post("/album", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/album", (req, res) => {
   userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.get("/album/:id", (req, res) => {
    const {id} = req.params;
    userSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

   router.put("/album/:id", (req, res) => {
    const {id} = req.params;
    const {nombreAlbum, anioPublicacion, idArtista, estadoAlbum} = req.body;
    userSchema
       .updateOne({_id: id},{$set:{nombreAlbum, anioPublicacion, idArtista, estadoAlbum}})
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

module.exports = router;