const router = require('express').Router();

const charactersController = require('../controllers/rickmorty.controller');
//const { validId, validObjectBody } = require('../middlewares/character.middleware');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-characters', charactersController.allCharactersController);
router.get('/find/:id',charactersController.characterByIdController);
router.get('/find/:name', charactersController.characterByNameController);
router.post('/create', charactersController.createCharacterController);
router.put('/update/:id', charactersController.updateCharacterController);
router.delete('/delete/:id', charactersController.deleteSingleController);
router.delete('/characters/', charactersController.deleteAllController);

module.exports = router;
