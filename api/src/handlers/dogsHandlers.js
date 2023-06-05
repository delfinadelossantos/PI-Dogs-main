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

const createDogHandler = (req, res) => {
  const {
    breed,
    min_height,
    max_height,
    min_weight,
    max_weight,
    life_span,
    temperament,
  } = req.body;
};

module.exports = {
  getDogHandler,
  getDogsHandler,
  createDogHandler,
};
