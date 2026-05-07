// Rutas admin

const express = require('express');
const router = express.Router();
const controllerAdmin = require('../controllers/admin.controller');

// get al controller
router.get('/lista', controllerAdmin.ListaUsuarios);

module.exports = router;