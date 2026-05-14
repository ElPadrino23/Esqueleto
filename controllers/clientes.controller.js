// Controlar todo el apartado de los clientes

const modelClientes = require('../models/clientes.model');


// NO TOCAR: esto jala los datos de la DB para mostrarlos
module.exports.ObtenerClientes = async (req, res) => {
    const resultado = await modelClientes.ObtenerClientesLista();
    res.render('./clientes/lista_clientes', { clientes: resultado.clientes });
};


// Mostrar formulario de nuevo expediente
module.exports.VistaExpedienteCliente = async (req, res) => {
    res.render('./clientes/expediente_cliente');
};


// Recibir formulario y guardar cliente + documentos
module.exports.GuardarExpediente = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ exito: false, error: 'No se recibieron datos' });
        }

        const resultado = await modelClientes.GuardarCliente(req.body, req.files || {});

        if (resultado.exito) {
            res.status(200).json({ exito: true, mensaje: resultado.mensaje, idCliente: resultado.idCliente });
        } else {
            res.status(400).json({ exito: false, error: resultado.error });
        }

    } catch (error) {
        res.status(500).json({ exito: false, error: error.message });
    }
};


// Agregar a un cliente (redirige al expediente)
module.exports.VistaAgregarCliente = async (req, res) => {
    res.render('./clientes/expediente_cliente');
};

module.exports.AgregarCliente = async (req, res) => {
    res.redirect('/clientes/lista');
};


// Editar cliente
module.exports.VistaEditarCliente = async (req, res) => {
    const idCliente = req.query.id;
    if (!idCliente) return res.redirect('/clientes/lista');

    const resultado = await modelClientes.ObtenerClientePorId(idCliente);
    if (!resultado.exito) return res.redirect('/clientes/lista');

    res.render('./clientes/editar_cliente', { cliente: resultado.cliente });
};

module.exports.EditarCliente = async (req, res) => {
    res.redirect('/clientes/lista');
};


// Borrar cliente
module.exports.EliminarCliente = async (req, res) => {
    res.redirect('/clientes/lista');
};