
const {Router}=require("express");
const rutasArtista=Router();
const ctrArtista=require("../controllers/artista.controller");

rutasArtista.get('/', ctrArtista.obtener);

rutasArtista.get('/:id', ctrArtista.obtenerid);

rutasArtista.post('/', ctrArtista.add);
  
rutasArtista.put('/:id',ctrArtista.edit);


module.exports=rutasArtista;