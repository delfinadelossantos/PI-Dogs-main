const { Temperament } = require("../db");
const getApiInfo = require("../utils/getApiInfo");

//Función para guardar los temperamentos de la api en la base de datos

const saveToDb = async () => {
  try {
    const temperaments = await getApiInfo();
    if (temperaments.error) {
      return temperaments.error;
    }
    await Temperament.bulkCreate(temperaments);
    return temperaments;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = saveToDb;
