const express = require("express");
const cors = require("cors");
const app = express();

//SETTINGS
app.set("port", process.env.PORT || 4000);

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/usuarios",require('./Routes/usuariosRoutes'));
app.use("/api/proyectos", require('./Routes/proyectosRoutes'));
app.use("/api/inscripciones", require('./Routes/inscripcionesRoutes'));
app.use("/api/avances", require('./Routes/avancesRoutes'));

module.exports = app;
