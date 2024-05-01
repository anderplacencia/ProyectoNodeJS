const mongoose = require('mongoose');
const uri =
  'mongodb+srv://andersonplacencia:andersonplacencia@cluster0.kdehqza.mongodb.net/';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD  ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };