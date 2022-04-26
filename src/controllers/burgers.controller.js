const burgersService = require("../services/burgers.service");
const mongoose = require('mongoose');

const findAllBurgersController = async (req, res) => {
  const allBurgers = await burgersService.findAllBurgersService();
  if (allBurgers.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum burger cadastrado!' });
  }
  res.send(allBurgers);
};


const findByIdBurgerController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  }

  const chosenBurger = await burgersService.findByIdBurgerService(idParam);

  if (!chosenBurger) {
    return res.status(404).send({ message: 'Burger não encontrado!' });
  }

  res.send(chosenBurger);
};


const createBurgerController = async (req, res) => {
  const burger = req.body;
  const newBurger = await burgersService.createBurgerService(burger);
  res.status(201).send(newBurger);
};

const updateBurgerController = async (req, res) => {
  const idParam = req.params.id;
  const editBurger = req.body;
  const updatedBurger = await burgersService.updateBurgerService(
    idParam,
    editBurger,
  );
  res.send(updatedBurger);
};

const deleteBurgerController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenBurger = await burgersService.findByIdBurgerService(idParam);

  if (!chosenBurger) {
    return res.status(404).send({ message: 'Burger não encontrado!' });
  }

  await burgersService.deleteBurgerService(idParam);

  res.send({ message: 'Burger deletado com sucesso!' });
};

module.exports = {
  findAllBurgersController,
  findByIdBurgerController,
  createBurgerController,
  updateBurgerController,
  deleteBurgerController,
};
