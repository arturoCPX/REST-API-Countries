const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Border = sequelize.define('Border', {
  border_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  country_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  neighbor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'borders',
  timestamps: false,
});

module.exports = Border;