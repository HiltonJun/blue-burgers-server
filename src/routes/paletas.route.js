const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../middlewares/paleta.middleware');
const paletasController = require('../controllers/paletas.controller');

router.get('/all-paletas', paletasController.findAllPaletasController);
router.get('/one-paleta/:id', paletasController.findByIdPaletaController);
router.post('/create-paleta', paletasController.createPaletaController);
router.put('/update-paleta/:id', paletasController.updatePaletaController);
router.delete('/delete-paleta/:id', paletasController.deletePaletaController);

module.exports = router;
