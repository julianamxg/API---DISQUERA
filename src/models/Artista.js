const {Schema,model}=require("mongoose");

const artistaSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
   noDocumento: {
    type: Number,
    required: true,
  },

  tipoDocumento: {
    type: String,
    required: true
  },

  nombreArtista: {
    type: String,
    required: true
  },

  apellidoArtista: {
    type: String,
    required: true
  },

  nombreArtistico: {
    type: String,
    required: true
  },

  feNacimArtista: {
    type: Date,
    required: true
  },

  emailArtista: {
    type: String,
    required: true
  },

 disquera:[{
    type:Schema.Types.Number,
    ref:'Disquera'
  }],

  estadoArtista: {
    type: String,
    required: true

  }
  });

  /*userSchema.methods.setImg=function setImg(filename) {
    this.img=`/public/${filename}`;
    console.log("entró al método "+this.img);
}*/
  module.exports=model("Artista",artistaSchema);
