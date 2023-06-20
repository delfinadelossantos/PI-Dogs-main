const {
  getAllBreedsController,
  getDogByBreedController,
  getDogByIdController,
  createDogController,
} = require("../controllers/dogsControllers");

const getAllDogsHandler = async (req, res) => {
  //llama a la función que obtiene los datos de la BDD
  //llama a la función que obtiene los datos de la API externa
  //une los datos unificando el formato de ambas
  //responde con todos los datos.
  try {
    const dogs = await getAllBreedsController();
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const isValidResult = (result) => {
  if (result === null) {
    return false;
  }
  if (result === undefined) {
    return false;
  }
  if (result.length === 1) {
    let temp = result[0];
    if (temp !== null) {
      if (temp.length === 0) {
        return false;
      } else {
        return true;
      }
    }
  }
  return false;
};

const getDogByBreedHandler = async (req, res) => {
  const { name } = req.query;
  const breed = name.toLowerCase();
  try {
    if (breed) {
      const results = await getDogByBreedController(breed);
      if (isValidResult(results)) {
        res.status(200).json(results);
      } else {
        res.status(400).json({ error: "The requested breed does not exist" });
      }
    } else {
      res.status(400).json({ error: "No breed specified" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDogByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await getDogByIdController(id);
    res.status(200).send(dog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDogHandler = async (req, res) => {
  const {
    breed,
    image,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
    temperamentIds,
  } = req.body;
  try {
    const newDog = await createDogController(
      breed,
      image,
      min_height,
      max_height,
      min_weight,
      max_weight,
      life_span,
      temperamentIds
    );

    res.status(201).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDogByIdHandler,
  getDogByBreedHandler,
  getAllDogsHandler,
  createDogHandler,
};
