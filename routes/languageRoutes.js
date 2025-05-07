const express = require('express');
const languageController = require('../controllers/languageController');
const { body, param } = require('express-validator');

const router = express.Router();

// Rutas para los idiomas
router.get('/languages', languageController.getAllLanguages);
router.get('/languages/:id', param('id').isInt(), languageController.getLanguageById);
router.post('/languages', [
  body('language').notEmpty().withMessage('El idioma es requerido'),
], languageController.createLanguage);
router.put('/languages/:id', [
  param('id').isInt(),
  body('language').optional(),
], languageController.updateLanguage);
router.delete('/languages/:id', param('id').isInt(), languageController.deleteLanguage);

module.exports = router;