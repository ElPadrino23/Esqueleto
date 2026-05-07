// index 

//Librerias no tocar
const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const app = express();



// Notificar el uso de ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Ayuda a que el servidor entienda los datos que llegan
app.use(bodyParser.urlencoded({ extended: false }));

// jala los archivos que esten publicos
app.use(express.static(path.join(__dirname, 'public')));

//Conocer el estado del servidor
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// rutas a login
const rutasLogin = require('./routes/login.routes');
app.use('/login', rutasLogin);

// rutas a clientes
const rutasClientes = require('./routes/clientes.routes');
app.use('/clientes', rutasClientes);

// rutas a operaciones
const rutasOperaciones = require('./routes/operaciones.routes');
app.use('/operaciones', rutasOperaciones);

// rutas a alertas (Esto sirva para que cada ruta maneje cada parte
// Tipo todo lo que empiece con "/cliente"   va a pasar por "clientes.routes.js" y asi)
//Esto para no juntar todo y despues pelearnos para encontrar un problema

const rutasAlertas = require('./routes/alertas.routes');
app.use('/alertas', rutasAlertas);

// Rutas de contratos
const rutasContratos = require('./routes/contratos.routes');
app.use('/contratos', rutasContratos);

// Rutas de reportes
const rutasReportes = require('./routes/reportes.routes');
app.use('/reportes', rutasReportes);

// Rutas de reglas
const rutasReglas = require('./routes/reglas.routes');
app.use('/reglas', rutasReglas);

// Rutas de historial
const rutasHistorial = require('./routes/historial.routes');
app.use('/historial', rutasHistorial);

// Rutas de admin
const rutasAdmin = require('./routes/admin.routes');
app.use('/admin', rutasAdmin);

//cuando se entre al localhost lo primero que saldra es el dashboard
app.get("/", (req, res) => {
    res.render("dashboard");
});

// inicia el servidor en el host 3000
app.listen(3000, () => {
    console.log('-> http://localhost:3000');
});