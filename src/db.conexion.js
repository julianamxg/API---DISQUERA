const mongoose = require('mongoose');

const conexionBD=async()=>{
  
    const uri=`mongodb+srv://julianamxg4:Cande146@cluster0.qffpsd0.mongodb.net/?retryWrites=true&w=majority`;
    try{
        const DB=await mongoose.connect(uri);
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;
