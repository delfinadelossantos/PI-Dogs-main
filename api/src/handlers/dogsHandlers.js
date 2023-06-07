const { createDogController } = require("../controllers/dogsControllers");

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

const getDogHandler = (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(`Send detail about dog with id ${id}`);
  } catch (error) {}
};

const createDogHandler = async (req, res) => {
  try {
    const { breed, min_height, max_height, min_weight, max_weight, life_span } =
      req.body;

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
  getDogHandler,
  getDogsHandler,
  createDogHandler,
};
