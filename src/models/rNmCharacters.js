const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    url: { type: String, required: true },
  });
  
  const rNmCharacters = mongoose.model('rmCharacter', characterSchema);
  
  module.exports = rNmCharacters;
