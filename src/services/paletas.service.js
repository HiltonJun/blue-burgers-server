/* const paletas = [
  {
    id: 1,
    titulo: "Voando Alto",
    descricao:
      "Pão brioche/caseirinho, burguer de fraldinha 150g (fraldinha), alface, cebola caramelizada, queijo prato e maionese temperada (alho e temperos frescos).",
    foto: "/assets/images/voando-alto.jpg",
    preco: 27.9,
  },
  {
    id: 2,
    titulo: "Espetacular Cheddar",
    descricao:
      "Pão australiano, hambúrguer artesanal de costela 150g, cheddar cremoso, cebola caramelizada e bacon.",
    foto: "/assets/images/blitz-cheddar.jpg",
    preco: 32.9,
  },
  {
    id: 3,
    titulo: "Marilú chicken",
    descricao:
      "Pão caseiro , um incrível e suculento hambúrguer de frango, alface, tomate, cebola caramelizada, queijo e maionese de limão siciliano.",
    foto: "/assets/images/marilu-chicken.jpg",
    preco: 27.9,
  },
]; */

const Paleta = require('../models/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

const findByIdPaletaService = async (id) => {
  const paleta = await Paleta.findById(id);
  return paleta;
};

const createPaletaService = async (newPaleta) => {
  const paletaCriada = await Paleta.create(newPaleta)
  return paletaCriada;
};

const updatePaletaService = async (id, paletaEdited) => {
  const paletaAtualizado = await Paleta.findByIdAndUpdate(id, paletaEdited);
  return paletaAtualizado;
};

const deletePaletaService = async (id) => {
  return await Paleta.findByIdAndDelete(id);
};

module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
