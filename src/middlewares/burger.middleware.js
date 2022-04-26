const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const burger = req.body;
  if (
    !burger ||
    !burger.nome ||
    !burger.descricao ||
    !burger.foto ||
    !burger.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos do burger!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
