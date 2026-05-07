// COntrolar unicamente las operaciones

const modelOperaciones = require('../models/operaciones.model');
const modelAlertas     = require('../models/alertas.model');
const modelClientes    = require('../models/clientes.model');

// Mostrar todas las operaciones
module.exports.ObtenerOperaciones = async (req, res) => {
    res.render('./operaciones/lista_operaciones');
};

// Desplegar formulario para registrar alguna operacion
module.exports.VistaAgregarOperacion = async (req, res) => {

};

// Recibir formulario y guardar operaciones nuevas
module.exports.AgregarOperacion = async (req, res) => {
    
};
