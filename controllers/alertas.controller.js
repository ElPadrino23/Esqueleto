//Aqui se maneja todo lo relacionado con las alertas, en cada bloquecito 
// despues de los comentarios viene que es lo que hacen

const modelAlertas  = require('../models/alertas.model');
const modelClientes = require('../models/clientes.model');

//  Esta sera para obtener las alertas 
module.exports.ObtenerAlertas = async (req, res) => {
    res.render('./alertas/lista_alertas');

};

// Esta sera para desplegar un formulatio y poder resolver las alertas 
module.exports.VistaResolverAlerta = async (req, res) => {

};

//Aqui es donde se recibira la alerta y se podra modificar el status
module.exports.ResolverAlerta = async (req, res) => {

};
