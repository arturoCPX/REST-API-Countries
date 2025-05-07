const express = require('express');
const currencyController = require('../controllers/currencyController');
const { body, param } = require('express-validator');

const router = express.Router();

// Rutas para las monedas
router.get('/currencies', currencyController.getAllCurrencies);
router.get('/currencies/:id', param('id').isInt(), currencyController.getCurrencyById);
router.post('/currencies', [
  body('currency').notEmpty().withMessage('La moneda es requerida'),
  body('symbol').optional(),
], currencyController.createCurrency);
router.put('/currencies/:id', [
  param('id').isInt(),
  body('currency').optional(),
  body('symbol').optional(),
], currencyController.updateCurrency);
router.delete('/currencies/:id', param('id').isInt(), currencyController.deleteCurrency);

module.exports = router;