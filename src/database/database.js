const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb+srv://admin:admin123@cluster0.muf47.mongodb.net/paletas-db?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
