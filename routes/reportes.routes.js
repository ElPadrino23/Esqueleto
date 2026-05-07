// Rutas de reportes

const express = require('express');
const router = express.Router();
const controllerReportes = require('../controllers/reportes.controller');

//aqui jalamos la info de el controller
router.get('/lista', controllerReportes.LoginReportes);

module.exports = router;