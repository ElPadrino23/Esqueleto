// Controlador de historial de acciones

const modelHistorial = require('../models/historial.model');

// Obtener historial de acciones
module.exports.ObtenerHistorial = async (req, res) => {
	res.render('./historial/lista_historial');
};

// Filtrar historial
module.exports.FiltrarHistorial = async (req, res) => {

};
