const { Dog, Temperament } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

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
      temperaments: element.temperament,
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
  let result = [];
  //Buscar en la base de datos
  const databaseBreedSearch = await Dog.findAll({
    where: { breed: { [Op.iLike]: `${breed}` } },
  });

  if (
    databaseBreedSearch !== undefined &&
    databaseBreedSearch !== null &&
    databaseBreedSearch.length !== 0
  ) {
    result.concat(databaseBreedSearch);
  }

  //Buscar en la API
  const apiBreedSearch = (
    await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
  ).data;

  const apiBreed = cleanApiInfo(apiBreedSearch);
  result.push(apiBreed);

  return result;
};

const getDogByIdController = async (id) => {
  let dog;
  if (isNaN(id)) {
    dog = await Dog.findByPk(id, {
      include: {
        model: Temperament,
        attributes: ["temperament"],
        through: { attributes: [] },
      },
    });
  } else {
    const allDogs = await getAllBreedsController();
    const idInt = parseInt(id);
    for (let i = 0; i < allDogs.length; i++) {
      if (allDogs[i].id === idInt) {
        dog = allDogs[i];
        break;
      }
    }
  }
  return dog;
};

const createDogController = async (
  breed,
  image,
  min_height,
  max_height,
  min_weight,
  max_weight,
  life_span,
  temperamentIds
) => {
  let newDog = await Dog.create({
    breed,
    image,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
  });
  const temperamentDatabase = await Temperament.findByPk(temperamentIds);
  await newDog.addTemperament(temperamentDatabase);

  //newDog es una instancia del modelo de sequelize
  newDog = await Dog.findByPk(newDog.id, {
    include: [
      {
        model: Temperament,
        attributes: ["temperament"],
      },
    ],
  });

  //Acá hago una copia del objeto newDog y edito el json para que
  //tenga el formato deseado en la respuesta del servidor
  let formattedResponse = {
    //El .get() es un método de Sequelize que permite obtener un objeto
    //sólo con los datos de la instancia del modelo.
    //El operador spread toma todo lo existente en newDog y las
    //agrega a formattedResponse.
    ...newDog.get(),
    temperaments: newDog.Temperaments.map(({ temperament }) => ({
      temperament,
    })),
  };

  //el objeto formattedResponse se creó inicialmente copiando todas las propiedades de
  //newDog.get(). Entonces incluye la propiedad "Temperaments" original.
  //elimina la propiedad "Temperaments" original del objeto formattedResponse,
  //dejando solo la propiedad "temperaments" modificada que contiene los nombres de los temperamentos.

  delete formattedResponse["Temperaments"];

  return formattedResponse;
};

module.exports = {
  getAllBreedsController,
  getDogByBreedController,
  getDogByIdController,
  createDogController,
};
