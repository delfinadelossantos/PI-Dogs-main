//Módulo para buscar la data de la api
const axios = require("axios");

const getApiInfo = async () => {
  try {
    const getApi = await axios.get("https://api.thedogapi.com/v1/breeds");
    const apiTemperaments = getApi.data
      .map((element) => element.temperament)
      .split(",");
  } catch (error) {
    //res.status(400).json({ error: "Api Request Error" });
  }
};
