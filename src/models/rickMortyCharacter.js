const mongoose = require('mongoose');

const mortyCharacterSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    img: { type: String, required: true },
  });
  
  const rickNmortyCharacter = mongoose.model('rmCharacter', mortyCharacterSchema);
  
  module.exports = rickNmortyCharacter;