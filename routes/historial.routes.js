// Rutas de historial de acciones

const express = require('express');
const router = express.Router();
const controllerHistorial = require('../controllers/historial.controller');

// Mostrar historial de acciones
router.get('/lista', controllerHistorial.ObtenerHistorial);

// Filtrar historial por usuario o acción
router.get('/filtrar', controllerHistorial.FiltrarHistorial);

module.exports = router;
