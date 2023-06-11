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

const getDogByBreedHandler = async (req, res) => {
  const { breed } = req.query;
  try {
    if (breed) {
      const results = await getDogByBreedController(breed);
      if (results !== null || results !== undefined) {
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
  const { breed, min_height, max_height, min_weight, max_weight, life_span } =
    req.body;
  try {
    const newDog = await createDogController(
      breed,
      min_height,
      max_height,
      min_weight,
      max_weight,
      life_span
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
