const { Sequelize } = require('sequelize');
const config = require('./config/database/config');

const sequelize = new Sequelize(config.development);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();

module.exports = sequelize;