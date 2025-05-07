const express = require('express');
const bodyParser = require('body-parser');
const countryRoutes = require('./routes/countryRoutes');
const languageRoutes = require('./routes/languageRoutes');
// const currencyRoutes = require('./routes/currencyRoutes'); // Si creaste las rutas de moneda
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para analizar el cuerpo de las peticiones
app.use(bodyParser.json());

// Rutas
app.use('/api', countryRoutes);
app.use('/api', languageRoutes);
// app.use('/api', currencyRoutes); // Si creaste las rutas de moneda

// Middleware de manejo de errores (debe ir después de las rutas)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});