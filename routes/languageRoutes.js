const express = require('express');
const languageController = require('../controllers/languageController');
const { body, param } = require('express-validator');
const validate = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/languages', languageController.getAllLanguages);

router.get('/languages/:id', 
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  validate,
  languageController.getLanguageById
);

router.post('/languages', [
  body('language').notEmpty().withMessage('El idioma es requerido'),
  validate,
], languageController.createLanguage);

router.put('/languages/:id', [
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  body('language').optional(),
  validate, 
], languageController.updateLanguage);

router.delete('/languages/:id', 
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  validate,
  languageController.deleteLanguage
);

module.exports = router;
