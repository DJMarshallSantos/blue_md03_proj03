const rNmCharacter = require('../models/rNmCharacters');

const allCharactersService = async (req, res) => {
    return await rNmCharacter.find();
}

const characterByIdService = async (idParam) => {
    return await rNmCharacter.findById(idParam);
};

const characterByNameService = async (name) => {
    return await rNmCharacter.filter((character) => character.name === name);

};

const createCharacterService = async (newCharacter) => {
    return await rNmCharacter.create(newCharacter);
};

const updateCharacterService = async (idParam, editCharacter) => {
    const characterUpdated = await rNmCharacter.findByIdAndUpdate(idParam, editCharacter);
    return editCharacter;
};

const deleteSingleService = async (idParam) => {
    return await rNmCharacter.findByIdAndDelete(idParam);
};

const deleteAllService = async () => {
    return await rNmCharacter.deleteMany({});
};

module.exports = {
    allCharactersService,
    characterByIdService,
    characterByNameService,
    createCharacterService,
    updateCharacterService,
    deleteSingleService,
    deleteAllService
};
