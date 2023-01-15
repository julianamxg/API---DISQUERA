
const {Router}=require("express");
const rutasDisquera=Router();
const ctrDis=require("../controllers/disquera.controller")

rutasDisquera.get('/', ctrDis.obtener);

rutasDisquera.get('/:id', ctrDis.obtenerid);

rutasDisquera.post('/', ctrDis.add);
  
rutasDisquera.put('/:id', ctrDis.edit);


module.exports=rutasDisquera;