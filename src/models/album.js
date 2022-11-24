const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nombreAlbum: {
    type: String,
    required: true,
  },

  anioPublicacion: {
    type: Number,
    required: true
  },

  idArtista: {
    type: String,
    required: true
  },

  estadoAlbum: {
    type: String,
    required: true

  },
});

module.exports = mongoose.model('Album', userSchema);