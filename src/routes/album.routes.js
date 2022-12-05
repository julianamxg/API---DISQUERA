const {Router}=require("express");
const rutasAlbumes=Router();
//const autorizedHuesped=require("../auth/auth.huesped");
const ctrAlb=require("../controllers/album.controllers");

rutasAlbumes.get('/', ctrAlb.obtener);

rutasAlbumes.get('/:id', ctrAlb.obtenerid);

rutasAlbumes.post('/', ctrAlb.add);
  
rutasAlbumes.put('/:id', ctrAlb.edit);


module.exports=rutasAlbumes;