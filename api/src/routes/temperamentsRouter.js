const { Router } = require("express");

const temperamentsRouter = Router();

// GET | /temperaments
// Obtiene todos los temperamentos existentes.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

temperamentsRouter.get();

module.exports = temperamentsRouter;
