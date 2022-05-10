const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.nome ||
    !paleta.descricao ||
    !paleta.foto
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do paleta!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
