//Crear un middleware para chequear los datos del form antes de
//meterlos en la db

const validateDog = (req, res, next) => {
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
  if (!breed) res.status(400).json({ error: "missing breed" });
  if (!min_height) res.status(400).json({ error: "missing min_height" });
  if (!max_height) res.status(400).json({ error: "missing max_height" });
  if (!min_weight) res.status(400).json({ error: "missing min_weight" });
  if (!max_weight) res.status(400).json({ error: "missing max_weight" });
  if (!life_span) res.status(400).json({ error: "missing life_span" });
  if (!temperamentIds)
    res.status(400).json({ error: "missing temperamentIds" });
  //Si no entra en el if (están todos los datos) que continúe
  next();
};

module.exports = {
  validateDog,
};
