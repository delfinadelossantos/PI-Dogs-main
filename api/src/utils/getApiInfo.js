//Módulo para buscar la data de la api
const axios = require("axios");

const getApiInfo = async () => {
  try {
    const getApiTemperaments = await axios.get(
      "https://api.thedogapi.com/v1/breeds"
    ).data;
    if (!getApiTemperaments) throw new Error("Api Request Error");
  } catch (error) {}
};
