
const {Router}=require("express");
const rutasArtista=Router();
const ctrArtista=require("../controllers/artista.controller");
//const autorizedHuesped=require("../auth/auth.huesped");


rutasArtista.get('/', ctrArtista.obtener);

rutasArtista.get('/:id', ctrArtista.obtenerid);

rutasArtista.post('/', ctrArtista.add);
  
rutasArtista.put('/:id',ctrArtista.edit);


module.exports=rutasArtista;