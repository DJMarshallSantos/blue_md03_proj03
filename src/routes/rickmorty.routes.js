const router = require('express').Router();

const charactersController = require('../controllers/rickmorty.controller');
const { validId, validObjectBody } = require('../middlewares/character.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/characters', charactersController.allCharactersController);
router.get('/characters/find/:id', validId, charactersController.characterByIdController);
router.get('/characters/search/:name', charactersController.characterByNameController);
router.post('/characters/create', validObjectBody, charactersController.createCharacterController);
router.put('/characters/update/:id', validId, validObjectBody, charactersController.updateCharacterController);
router.delete('/characters/delete/:id', validId, charactersController.deleteSingleController);
router.delete('/characters/delete-all', charactersController.deleteAllController);

module.exports = router;
