const { Router } = require("express");

const temperamentsRouter = Router();

const getTemperamentsHandler = require("../handlers/temperamentsHandlers");

// GET | /temperaments
// Obtiene todos los temperamentos existentes.
// Estos deben ser obtenidos de la API. Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

temperamentsRouter.get("/", getTemperamentsHandler);

module.exports = temperamentsRouter;
