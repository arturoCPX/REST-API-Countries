const express = require('express');
const countryController = require('../controllers/countryController');
const { body, param } = require('express-validator');
const validate = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/countries', countryController.getAllCountries);

router.get('/countries/:id', 
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  validate, 
  countryController.getCountryById
);

router.post('/countries', [
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('official_name').optional(),
  body('capital').optional(),
  body('region').optional(),
  body('subregion').optional(),
  body('language_id').isInt().optional(),
  body('currency_id').isInt().optional(),
  validate, 
], countryController.createCountry);

router.put('/countries/:id', [
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  body('name').optional(),
  body('official_name').optional(),
  body('capital').optional(),
  body('region').optional(),
  body('subregion').optional(),
  body('language_id').isInt().optional(),
  body('currency_id').isInt().optional(),
  validate,
], countryController.updateCountry);

router.delete('/countries/:id', 
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  validate,
  countryController.deleteCountry
);

module.exports = router;
