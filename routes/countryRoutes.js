const express = require('express');
const countryController = require('../controllers/countryController');
const { body, param } = require('express-validator');

const router = express.Router();

// Rutas para los países
router.get('/countries', countryController.getAllCountries);
router.get('/countries/:id', param('id').isInt(), countryController.getCountryById);
router.post('/countries', [
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('official_name').optional(),
  body('capital').optional(),
  body('region').optional(),
  body('subregion').optional(),
  body('language_id').isInt().optional(),
  body('currency_id').isInt().optional(),
], countryController.createCountry);
router.put('/countries/:id', [
  param('id').isInt(),
  body('name').optional(),
  body('official_name').optional(),
  body('capital').optional(),
  body('region').optional(),
  body('subregion').optional(),
  body('language_id').isInt().optional(),
  body('currency_id').isInt().optional(),
], countryController.updateCountry);
router.delete('/countries/:id', param('id').isInt(), countryController.deleteCountry);

module.exports = router;