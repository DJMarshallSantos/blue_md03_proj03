const charactersService = require('../services/rickmorty.service');
const mongoose = require('mongoose');

const allCharactersController = async (req, res) => {
    const allCharacters = await charactersService.allCharactersService();
    res.send(allCharacters);
};

const characterByIdController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByIdService(req.params.id);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    res.send(chosenCharacter);
};

const characterByNameController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByNameService(req.body.name);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
    const newCharacter = await charactersService.createCharacterService(req.body);
    res.send(newCharacter);
};

const updateCharacterController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByIdService(req.params.id);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    const updatedCharacter = await charactersService.updateCharacterService(req.params.id, req.body);
    res.send(updatedCharacter);
};

const deleteSingleController = async (req, res) => {
    const chosenCharacter = await charactersService.characterByIdService(req.params.id);
    if (!chosenCharacter) {
      return res.status(404).send({ message: 'Character not found!' });
    }
    await charactersService.deleteSingleService(req.params.id);
    res.send({ message: 'The character has been successfully deleted!' });
};

const deleteAllController = async (req, res) => {
    const allCharacters = await charactersService.allCharactersService();
    await charactersService.deleteAllService(allCharacters);
    res.send({ message: 'All characters have been successfully deleted!' });
};

module.exports = {
    allCharactersController,
    characterByIdController,
    characterByNameController,
    createCharacterController,
    updateCharacterController,
    deleteSingleController,
    deleteAllController
};
