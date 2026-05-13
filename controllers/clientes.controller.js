const modelClientes = require('../models/clientes.model');

// NO TOCAR< ME TARDE MUCHO PARA QUE JALARA, esto jala los datos de la DB para mostrarlos 
// De aqui va directo a views, solo hay que llamarlo


module.exports.ObtenerClientes = async (req, res) => {
    const resultado = await modelClientes.ObtenerClientesLista();
    console.log('Resultado:', resultado);
    console.log('Clientes:', resultado.clientes);
    res.render('./clientes/lista_clientes', { clientes: resultado.clientes });
};


// Agregar a un cliente
module.exports.VistaAgregarCliente = async (req, res) => {
    res.render('./clientes/agregar_cliente');
};

// ver formulario y agregar a un nuevo cliente
module.exports.AgregarCliente = async (req, res) => {
    res.status(200).json({ mensaje: 'Cliente agregado' });
};

// Mostrar formulario de expediente del cliente
module.exports.VistaExpedienteCliente = async (req, res) => {
    res.render('./clientes/expediente_cliente');
};

// Guardar expediente del cliente
module.exports.GuardarExpediente = async (req, res) => {
    try {
        console.log('req.body:', req.body);
        console.log('req.files:', req.files);

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ 
                exito: false,
                error: 'No se recibieron datos del formulario'
            });
        }

        const datosCliente = req.body;
        const archivos = req.files || {};

        const resultado = await modelClientes.GuardarCliente(datosCliente, archivos);

        if (resultado.exito) {
            res.status(200).json({ 
                exito: true,
                mensaje: resultado.mensaje,
                idCliente: resultado.idCliente
            });
        } else {
            res.status(400).json({ 
                exito: false,
                error: resultado.error 
            });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            exito: false,
            error: error.message 
        });
    }
};

// Aqui desplegaremos un menu para editar clientes
module.exports.VistaEditarCliente = async (req, res) => {
    res.render('./clientes/editar_cliente');
};

// Obtener el formulario del cliente y poder modificarlo
module.exports.EditarCliente = async (req, res) => {
    res.status(200).json({ mensaje: 'Cliente editado' });
};

// Borrar clientes
module.exports.EliminarCliente = async (req, res) => {
    res.status(200).json({ mensaje: 'Cliente eliminado' });
};