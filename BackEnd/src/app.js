const express = require("express");
const cors = require("cors");

//NUEVO PARA EL FUNCIONAMIENTO DEL GRAPHQL

const { makeExecutableSchema } = require('graphql-tools')
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./graphql/resolvers');


const app = express();

//SETTINGS
app.set("port", process.env.PORT || 4000);



//MIDDLEWARES
app.use(cors());
app.use(express.json());

app.use('/api', graphqlHTTP({
    schema: makeExecutableSchema,
    rootValue: resolvers,
    graphiql: true,
}))




//ROUTES
/*app.use("/api/usuarios",require('./Routes/usuariosRoutes'));
app.use("/api/proyectos", require('./Routes/proyectosRoutes'));
app.use("/api/inscripciones", require('./Routes/inscripcionesRoutes'));
app.use("/api/avances", require('./Routes/avancesRoutes'));*/


//CARGAR EL GRAPHQL
/*app.use(
    '/graphql',
    graphqlHTTP({
      schema: makeExecutableSchema,
      rootValue: resolvers,
      graphiql: true,
    })
  );*/


module.exports = app;
