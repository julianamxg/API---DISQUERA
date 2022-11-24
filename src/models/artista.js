const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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

 idDisquera: {
  type: String,
  required: true
},

  estadoArtista: {
    type: String,
    required: true

  },
});

module.exports = mongoose.model('Artista', userSchema);