const express = require("express");
const userSchema = require("../models/disquera");

const router = express.Router();

// create user
router.post("/disquera", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/disquera", (req, res) => {
   userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

  router.get("/disquera/:id", (req, res) => {
    const {id} = req.params;
    userSchema
       .findById(id)
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

   router.put("/disquera/:id", (req, res) => {
    const {id} = req.params;
    const {nitDisquera, nombreDisquera, telefonoDisquera, direccionDisquera, estadoDisquera} = req.body;
    userSchema
       .updateOne({_id: id},{$set:{nitDisquera, nombreDisquera, telefonoDisquera, direccionDisquera, estadoDisquera}})
       .then((data) => res.json(data))
       .catch((error) => res.json({ message: error }));
   });

module.exports = router;