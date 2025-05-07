const { Language, Country } = require('../models/associations');
const { validationResult } = require('express-validator');

// Obtener todos los idiomas
exports.getAllLanguages = async (req, res, next) => {
  try {
    const languages = await Language.findAll({ include: [{ model: Country, as: 'countries' }] });
    res.status(200).json(languages);
  } catch (error) {
    next(error);
  }
};

// Obtener un idioma por ID
exports.getLanguageById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const language = await Language.findByPk(id, { include: [{ model: Country, as: 'countries' }] });
    if (!language) {
      return res.status(404).json({ message: 'Idioma no encontrado' });
    }
    res.status(200).json(language);
  } catch (error) {
    next(error);
  }
};

// Crear un nuevo idioma
exports.createLanguage = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newLanguage = await Language.create(req.body);
    res.status(201).json(newLanguage);
  } catch (error) {
    next(error);
  }
};

// Actualizar un idioma
exports.updateLanguage = async (req, res, next) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const [updatedRows] = await Language.update(req.body, {
      where: { language_id: id },
    });
    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Idioma no encontrado' });
    }
    const updatedLanguage = await Language.findByPk(id, { include: [{ model: Country, as: 'countries' }] });
    res.status(200).json(updatedLanguage);
  } catch (error) {
    next(error);
  }
};

// Eliminar un idioma
exports.deleteLanguage = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedRows = await Language.destroy({
      where: { language_id: id },
    });
    if (deletedRows === 0) {
      return res.status(404).json({ message: 'Idioma no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};