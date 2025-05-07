const { Country, Language, Currency } = require('../models/associations');
const { validationResult } = require('express-validator');

// Obtener todos los países
exports.getAllCountries = async (req, res, next) => {
  try {
    const countries = await Country.findAll({
      include: [
        { model: Language, as: 'language' },
        { model: Currency, as: 'currency' },
        { model: Country, as: 'neighbors' },
      ],
    });
    res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
};

// Obtener un país por ID
exports.getCountryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const country = await Country.findByPk(id, {
      include: [
        { model: Language, as: 'language' },
        { model: Currency, as: 'currency' },
        { model: Country, as: 'neighbors' },
      ],
    });
    if (!country) {
      return res.status(404).json({ message: 'País no encontrado' });
    }
    res.status(200).json(country);
  } catch (error) {
    next(error);
  }
};

// Crear un nuevo país
exports.createCountry = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newCountry = await Country.create(req.body);
    res.status(201).json(newCountry);
  } catch (error) {
    next(error);
  }
};

// Actualizar un país
exports.updateCountry = async (req, res, next) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const [updatedRows] = await Country.update(req.body, {
      where: { country_id: id },
    });
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'País no encontrado' });
    }
    const updatedCountry = await Country.findByPk(id, {
      include: [
        { model: Language, as: 'language' },
        { model: Currency, as: 'currency' },
        { model: Country, as: 'neighbors' },
      ],
    });
    res.status(200).json(updatedCountry);
  } catch (error) {
    next(error);
  }
};

// Eliminar un país
exports.deleteCountry = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedRows = await Country.destroy({
      where: { country_id: id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'País no encontrado' });
    }
    res.status(204).send(); // 204 No Content para una eliminación exitosa
  } catch (error) {
    next(error);
  }
};