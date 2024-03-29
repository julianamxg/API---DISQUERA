const {Schema,model}=require("mongoose");

const albumSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  nombreAlbum: {
    type: String,
    required: true,
  },

  anioPublicacion: {
    type: Number,
    required: true
  },

  artista:[{
    type:Schema.Types.Number,
    ref:'Artista'
  }],

  estadoAlbum: {
    type: String,
    required: true

  }
   
  });
  module.exports=model("Album",albumSchema);
