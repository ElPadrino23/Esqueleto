// Rutas de reglas de alerta

const express = require('express');
const router = express.Router();
const controllerReglas = require('../controllers/reglas.controller');

// Mostrar lista de reglas
router.get('/lista', controllerReglas.ObtenerReglas);

// Mostrar formulario para agregar regla
router.get('/agregar', controllerReglas.VistaAgregarRegla);

// Guardar nueva regla
router.post('/agregar', controllerReglas.AgregarRegla);

// Mostrar formulario para editar regla
router.get('/editar', controllerReglas.VistaEditarRegla);

// Guardar cambios de regla
router.post('/editar', controllerReglas.EditarRegla);

// Eliminar regla
router.post('/eliminar', controllerReglas.EliminarRegla);

module.exports = router;
