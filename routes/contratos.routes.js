// Rutas de contratos

const express = require('express');
const router = express.Router();
const controllerContratos = require('../controllers/contratos.controller');

// Mostrar el listado de contratos
router.get('/lista', controllerContratos.ObtenerContratos);

module.exports = router;