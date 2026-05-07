// Route de clientes
// GET GET POST GET POST POST 

const express            = require('express');
const router             = express.Router();
const controllerClientes = require('../controllers/clientes.controller');

// mostrar todos los clientes
router.get('/lista', controllerClientes.ObtenerClientes);

// ver a los clientes agregados
router.get('/agregar', controllerClientes.VistaAgregarCliente);

// dar de alta a nuevos clientes 
router.post('/agregar', controllerClientes.AgregarCliente);

// trar el formulariuo editable 
router.get('/editar', controllerClientes.VistaEditarCliente);

// guardar datos de cliente
router.post('/editar', controllerClientes.EditarCliente);

// Eliminar cliente
router.post('/eliminar', controllerClientes.EliminarCliente);

module.exports = router;
