// Controlar todo el apartado de los clientes

const modelClientes = require('../models/clientes.model');

// Aqui exportaremos todos los datos de los clientes desde la BD
module.exports.ObtenerClientes = async (req, res) => {
    res.render('./clientes/lista_clientes');
};

// Agregar a un cliente
module.exports.VistaAgregarCliente = async (req, res) => {

};

// ver formulario y agregar a un nuevo cliente
module.exports.AgregarCliente = async (req, res) => {

};

// Aqui desplegaremos un menu para editar clientes
module.exports.VistaEditarCliente = async (req, res) => {

};

// Obtener el formulario del cliente y poder modificarlo
module.exports.EditarCliente = async (req, res) => {

};

// Borrar clientes
module.exports.EliminarCliente = async (req, res) => {

};
