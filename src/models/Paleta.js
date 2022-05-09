const mongooose = require('mongoose');

const PaletaSchema = new mongooose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  foto: { type: String, required: true },
  preco: { type: Number, required: true },
  sabor: { type: String, required: true },
  recheio: { type: String, required: false },
  possui_recheio: { type: boolean, required: true },
});

const Paleta = mongooose.model('paletas', PaletaSchema);

module.exports = Paleta;
