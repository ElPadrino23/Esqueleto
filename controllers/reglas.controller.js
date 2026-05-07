// Controlador de reglas de alerta

const modelReglas = require('../models/reglas.model');

// Obtener lista de reglas
module.exports.ObtenerReglas = async (req, res) => {
	res.render('./reglas/lista_reglas');
};

// Mostrar formulario para agregar regla
module.exports.VistaAgregarRegla = async (req, res) => {

};

// Agregar nueva regla
module.exports.AgregarRegla = async (req, res) => {

};

// Mostrar formulario para editar regla
module.exports.VistaEditarRegla = async (req, res) => {

};

// Editar regla
module.exports.EditarRegla = async (req, res) => {

};

// Eliminar regla
module.exports.EliminarRegla = async (req, res) => {

};
