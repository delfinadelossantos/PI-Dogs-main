const { Temperament } = require("../db");

const getTemperamentsController = async () => {
  const allTemperaments = await Temperament.findAll();
  return allTemperaments;
};

module.exports = getTemperamentsController;
