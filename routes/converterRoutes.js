const express = require('express');
const { currencyConverterCtrl } = require('../controllers/converterCtrl');
const route = express.Router();

route.post('/currency-converter',currencyConverterCtrl);


module.exports = route;