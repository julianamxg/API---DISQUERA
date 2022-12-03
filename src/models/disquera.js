const {Schema,model}=require("mongoose");

const disqueraSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },

  nitDisquera: {
  type: Number,
  required: true,
},

nombreDisquera: {
  type: String,
  required: true
},

telefonoDisquera: {
  type: Number,
  required: true
},

direccionDisquera: {
  type: String,
  required: true
},

estadoDisquera: {
  type: String,
  required: true
}
});

  
  module.exports=model("Disquera",disqueraSchema);
