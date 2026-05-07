// Controlador de login

const modelLogin = require('../models/login.model');

// Mostrar vista de login
module.exports.VistaLogin = async (req, res) => {
	res.render('./login/login');
};

// Procesar login
module.exports.ProcesarLogin = async (req, res) => {

};

// Logout
module.exports.Logout = async (req, res) => {

};
