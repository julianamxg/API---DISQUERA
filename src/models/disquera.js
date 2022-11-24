const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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

module.exports = mongoose.model('Disquera', userSchema);