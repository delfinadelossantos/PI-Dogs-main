const { Dog } = require("../models/Dog");
const { Temperament } = require("../models/Temperament");

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
  const newDog = Dog.create(
    breed,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span
  );
};

module.exports = { createDogController };
