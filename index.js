// index 

//Librerias no tocar
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const fileUpload = require('express-fileupload');
const app = express();

// Notificar el uso de ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware para archivos
app.use(fileUpload());

// Middleware para parsear datos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// jala los archivos que esten publicos
app.use(express.static(path.join(__dirname, 'public')));

//Conocer el estado del servidor
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// rutas a clientes
const rutasClientes = require('./routes/clientes.routes');
app.use('/clientes', rutasClientes);

// rutas a operaciones
const rutasOperaciones = require('./routes/operaciones.routes');
app.use('/operaciones', rutasOperaciones);

// rutas a alertas
const rutasAlertas = require('./routes/alertas.routes');
app.use('/alertas', rutasAlertas);

// Rutas de contratos
const rutasContratos = require('./routes/contratos.routes');
app.use('/contratos', rutasContratos);

// Rutas de reportes
const rutasReportes = require('./routes/reportes.routes');
app.use('/reportes', rutasReportes);

// Rutas de admin
const rutasAdmin = require('./routes/admin.routes');
app.use('/admin', rutasAdmin);

//cuando se entre al localhost lo primero que saldra es el dashboard
app.get("/", (req, res) => {
    res.render("dashboard");
});

// Rutas de login
const rutasLogin = require('./routes/login.routes');
app.use('/login', rutasLogin);

// Rutas de reglas
const rutasReglas = require('./routes/reglas.routes');
app.use('/reglas', rutasReglas);

// Rutas de historial
const rutasHistorial = require('./routes/historial.routes');
app.use('/historial', rutasHistorial);

// inicia el servidor en el host 3000
app.listen(3000, () => {
    console.log('-> http://localhost:3000');
});