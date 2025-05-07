const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Country = sequelize.define('Country', {
  country_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  official_name: {
    type: DataTypes.STRING(255),
  },
  capital: {
    type: DataTypes.STRING(255),
  },
  region: {
    type: DataTypes.STRING(255),
  },
  subregion: {
    type: DataTypes.STRING(255),
  },
  language_id: {
    type: DataTypes.INTEGER,
  },
  currency_id: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'countries',
  timestamps: false,
});

module.exports = Country;