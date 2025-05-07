const Country = require('./country');
const Language = require('./language');
const Border = require('./border');
const Currency = require('./currency');

// Relación entre Country y Language (un país pertenece a un idioma)
Country.belongsTo(Language, { foreignKey: 'language_id', as: 'language' });
Language.hasMany(Country, { foreignKey: 'language_id', as: 'countries' });

// Relación entre Country y Currency (un país utiliza una moneda)
Country.belongsTo(Currency, { foreignKey: 'currency_id', as: 'currency' });
Currency.hasMany(Country, { foreignKey: 'currency_id', as: 'countries' });

// Relación de muchos a muchos auto-referencial para las fronteras
Country.belongsToMany(Country, {
  through: Border,
  as: 'neighbors',
  foreignKey: 'country_id',
  otherKey: 'neighbor_id',
});

Country.belongsToMany(Country, {
  through: Border,
  as: 'borderedBy',
  foreignKey: 'neighbor_id',
  otherKey: 'country_id',
});

module.exports = {
  Country,
  Language,
  Border,
  Currency,
};