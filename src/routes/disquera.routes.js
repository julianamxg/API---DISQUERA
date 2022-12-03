
const {Router}=require("express");
const rutasDisquera=Router();
const ctrDis=require("../controllers/disquera.controller")
//const multer=require("multer");
const fecha=Date.now();
/*
const rutaStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/upload/');
    },
    filename:function(req,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
});

const carga=multer({storage:rutaStorage});
*/

rutasDisquera.get('/', ctrDis.obtener);

rutasDisquera.get('/:id', ctrDis.obtenerid);

rutasDisquera.post('/', ctrDis.add,);
  
rutasDisquera.put('/:id', ctrDis.edit);


module.exports=rutasDisquera;