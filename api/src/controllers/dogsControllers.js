const { Dog, Temperament } = require("../db");

//Las funciones que interactúan con el modelo (los métodos de un modelo manejan promesas)
//son async await
const createDogController = async (
  breed,
  min_height,
  max_height,
  min_weight,
  max_weight,
  life_span
) => {
  console.log("mostrar: " + Dog);
  const newDog = await Dog.create({
    breed,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
  });
  return newDog;
};

module.exports = { createDogController };
