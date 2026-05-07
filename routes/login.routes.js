// Rutas de login

const express = require('express');
const router = express.Router();
const controllerLogin = require('../controllers/login.controller');

// Mostrar formulario de login
router.get('/', controllerLogin.VistaLogin);

// Procesar login
router.post('/', controllerLogin.ProcesarLogin);

// Logout
router.get('/logout', controllerLogin.Logout);

module.exports = router;
