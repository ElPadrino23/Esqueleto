// Route de clientes

const express            = require('express');
const router             = express.Router();
const controllerClientes = require('../controllers/clientes.controller');

// mostrar todos los clientes
router.get('/lista', controllerClientes.ObtenerClientes);

// nuevo expediente de cliente (formulario de 3 pasos)
router.get('/expediente', controllerClientes.VistaExpedienteCliente);
router.post('/expediente', controllerClientes.GuardarExpediente);

// agregar cliente (apunta al expediente)
router.get('/agregar', controllerClientes.VistaAgregarCliente);
router.post('/agregar', controllerClientes.AgregarCliente);

// editar cliente
router.get('/editar', controllerClientes.VistaEditarCliente);
router.post('/editar', controllerClientes.EditarCliente);

// eliminar cliente
router.post('/eliminar', controllerClientes.EliminarCliente);

module.exports = router;