const { Dog, Temperament } = require("../db");
const axios = require("axios");

//Las funciones que interactúan con el modelo (los métodos de un modelo manejan promesas)
//son async await

const cleanApiInfo = (array) => {
  const apiClean = array.map((element) => {
    const heightRange = element.height.metric.split(" - ");
    const weightRange = element.weight.metric.split(" - ");

    return {
      id: element.id,
      breed: element.name,
      image: element.image.url,
      min_height: parseInt(heightRange[0]),
      max_height: parseInt(heightRange[1]),
      min_weight: parseInt(weightRange[0]),
      max_weight: parseInt(weightRange[1]),
      life_span: element.life_span,
      createdInDb: false,
    };
  });
  return apiClean;
};

const getAllBreedsController = async () => {
  //Buscar en la base de datos
  const databaseDogs = await Dog.findAll();
  //Buscar en la api
  const apiDogsRaw = (await axios.get("https://api.thedogapi.com/v1/breeds"))
    .data;
  //Sanitizo los datos de la api para que coincidan con mi modelo
  const apiDogs = cleanApiInfo(apiDogsRaw);
  return [...databaseDogs, ...apiDogs];
};

const getDogByBreedController = async (breed) => {
  //Buscar en la base de datos
  const databaseBreedSearch = await Dog.findOne({ where: { breed: "breed" } });
  //Si no lo encuentra en la base de datos, lo busca en la api
  if (databaseBreedSearch === null) {
    const apiBreedSearch = (
      await axios.get(`https://api.thedogapi.com/v1/breeds/search?q={${breed}}`)
    ).data;
    //Verificar si la api no encuentra la raza:
    if (apiBreedSearch.length === 0) {
      return null;
    }
    const apiBreed = cleanApiInfo(apiBreedSearch);
    return apiBreed;
  }
  return databaseBreedSearch;
};

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

module.exports = {
  getAllBreedsController,
  getDogByBreedController,
  getDogByIdController,
  createDogController,
};
