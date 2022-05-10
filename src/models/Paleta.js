const mongooose = require('mongoose');

const PaletaSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
});

const Paleta = mongooose.model('paletas', PaletaSchema);

module.exports = Paleta;
