const mongooose = require('mongoose');

const BurgerSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
});

const Burger = mongooose.model('burgers', BurgerSchema);

module.exports = Burger;
