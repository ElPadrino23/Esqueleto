// ccontroller login y autenticacion

const modelLogin = require('../models/login.model');

// Vista
module.exports.VistaLogin = async (req, res) => {
    res.render('./login/login');
};

// Procesamiento
module.exports.ProcesarLogin = async (req, res) => {
    // por ahora redirige directo al dashboard
    res.redirect('/');
};

// Logout
module.exports.Logout = async (req, res) => {
    res.redirect('/login');
};

// Vista de registro
module.exports.VistaRegistro = async (req, res) => {
    res.render('./login/login');
};

// Procesar registro
module.exports.ProcesarRegistro = async (req, res) => {
    res.redirect('/');
};