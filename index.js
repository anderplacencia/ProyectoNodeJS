const express = require ("express");
const { connect } = require("../ProyectoNodeJS/src/api/utils/database.js");
const routerBike = require("../routes/routes.js");

const Server = express ();
Server.use(express.json());
connectDB();

Server.use("./Bike", routerBike);


const PORT = 3000;
Server.listen (PORT, () => {
    console.log(`Estamos en el puerto http://localhost:${PORT}`)
});