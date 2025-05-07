const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Currency = sequelize.define('Currency', {
  currency_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING(10),
  },
}, {
  tableName: 'currencies',
  timestamps: false,
});

module.exports = Currency;