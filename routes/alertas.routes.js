// rutas para las alertas 
// GET GET POST

const express           = require('express');
const router            = express.Router();
const controllerAlertas = require('../controllers/alertas.controller');

// MOstrar las alertas
router.get('/lista', controllerAlertas.ObtenerAlertas);

// mostrar el formulario para resolver las alertas
router.get('/resolver', controllerAlertas.VistaResolverAlerta);

// Guardar el resultado de la resolucion de una alerta
router.post('/resolver', controllerAlertas.ResolverAlerta);

module.exports = router;