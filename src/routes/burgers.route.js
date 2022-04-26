const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../middlewares/burger.middleware');
const burgersController = require('../controllers/burgers.controller');

router.get('/all-burgers', burgersController.findAllBurgersController);
router.get('/one-burger/:id', burgersController.findByIdBurgerController);
router.post('/create-burger', burgersController.createBurgerController);
router.put('/update-burger/:id', burgersController.updateBurgerController);
router.delete('/delete-burger/:id', burgersController.deleteBurgerController);

module.exports = router;
