const {
  getDogByIdController,
  createDogController,
} = require("../controllers/dogsControllers");

const getDogsHandler = (req, res) => {
  //llama a la función que obtiene los datos de la BDD
  //llama a la función que obtiene los datos de la API externa
  //une los datos unificando el formato de ambas
  //responde con todos los datos.
  const { breed } = req.query;
  if (breed) {
    res.status(200).send(`Send all dogs with breed ${breed}`);
  } else {
    res.status(200).send("Send all dogs");
  }
};

const getDogByIdHandler = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    //El id que viene por params es de la base de datos (UUID)
  } else {
    //El id es de la API
  }
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
  getDogsHandler,
  createDogHandler,
};
