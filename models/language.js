const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Language = sequelize.define('Language', {
  language_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'languages',
  timestamps: false,
});

module.exports = Language;