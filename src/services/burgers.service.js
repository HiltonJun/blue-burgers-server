/* const burgers = [
  {
    id: 1,
    nome: "Voando Alto",
    descricao:
      "Pão brioche/caseirinho, burguer de fraldinha 150g (fraldinha), alface, cebola caramelizada, queijo prato e maionese temperada (alho e temperos frescos).",
    foto: "/assets/images/voando-alto.jpg",
    preco: 27.9,
  },
  {
    id: 2,
    nome: "Espetacular Cheddar",
    descricao:
      "Pão australiano, hambúrguer artesanal de costela 150g, cheddar cremoso, cebola caramelizada e bacon.",
    foto: "/assets/images/blitz-cheddar.jpg",
    preco: 32.9,
  },
  {
    id: 3,
    nome: "Marilú chicken",
    descricao:
      "Pão caseiro , um incrível e suculento hambúrguer de frango, alface, tomate, cebola caramelizada, queijo e maionese de limão siciliano.",
    foto: "/assets/images/marilu-chicken.jpg",
    preco: 27.9,
  },
]; */

const Burger = require('../models/Burger');

const findAllBurgersService = async () => {
  const burgers = await Burger.find();
  return burgers;
};

const findByIdBurgerService = async (id) => {
  const burger = await Burger.findById(id);
  return burger;
};

const createBurgerService = async (newBurger) => {
  const burgerCriada = await Burger.create(newBurger)
  return burgerCriada;
};

const updateBurgerService = async (id, burgerEdited) => {
  const burgerAtualizado = await Burger.findByIdAndUpdate(id, burgerEdited);
  return burgerAtualizado;
};

const deleteBurgerService = async (id) => {
  return await Burger.findByIdAndDelete(id);
};

module.exports = {
  findAllBurgersService,
  findByIdBurgerService,
  createBurgerService,
  updateBurgerService,
  deleteBurgerService,
};
