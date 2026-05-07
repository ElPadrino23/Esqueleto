// =ruta de operaciones
// GET GET POST

const express              = require('express');
const router               = express.Router();
const controllerOperaciones = require('../controllers/operaciones.controller');

// Mostrar las operaciones 
router.get('/lista', controllerOperaciones.ObtenerOperaciones);

// formulario para registrar operaciones 
router.get('/agregar', controllerOperaciones.VistaAgregarOperacion);

// Guardamos nueva operacion
router.post('/agregar', controllerOperaciones.AgregarOperacion);

module.exports = router;
