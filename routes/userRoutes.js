const express = require('express');
const { profileCtrl, registerUserCtrl, loginUserCtrl } = require('../controllers/userCtrl');
const route = express.Router();

route.get('/profile',profileCtrl);
route.post('/register',registerUserCtrl);
route.post('/login',loginUserCtrl);


module.exports = route;