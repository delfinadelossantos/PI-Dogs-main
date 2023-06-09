const { Dog, Temperament } = require("../db");
const axios = require("axios");

//Las funciones que interactúan con el modelo (los métodos de un modelo manejan promesas)
//son async await

const getDogByIdController = async (id) => {
  let dog;
  if (isNaN(id)) {
    dog = await Dog.findByPk(id);
  } else {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds/${id}`
    );
    dog = response.data;
  }
  return dog;
};

const createDogController = async (
  breed,
  min_height,
  max_height,
  min_weight,
  max_weight,
  life_span
) => {
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

module.exports = { getDogByIdController, createDogController };
