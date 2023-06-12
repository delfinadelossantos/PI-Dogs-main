//Módulo para buscar la data de la api
const axios = require("axios");

const getApiInfo = async () => {
  try {
    //Petición a la api para obtener toda la información
    const getApi = await axios.get("https://api.thedogapi.com/v1/breeds");
    //Crea un conjunto para almacenar temperamentos y asegurarme de que no haya repetidos
    const set = new Set();

    //getApi.data contiene toda la información de las razas de perros de la api.
    //El forEach itera sobre cada elemento (raza de perro) del array
    //El if verifica que el elemento sobre el que se itera tenga la propiedad temperament,
    //que es lo que hay que almacenar en la bd.
    getApi.data.forEach((element) => {
      if (element.temperament) {
        //Con el método split separo los strings que están en cada element.temperament separados por comas
        element.temperament.split(",").forEach((temperament) => {
          //Agrega el temperamento al conjunto sin espacios por el método trim()
          set.add(temperament.trim());
        });
      }
    });

    //Convierte el set en un array, lo ordena alfabéticamente y matchea
    //el nombre del temperamento con el nombre del modelo
    const apiTemperaments = Array.from(set)
      .sort()
      .map((temperament) => ({ temperament }));

    return apiTemperaments;
  } catch (error) {
    return { error: "Api Request Error" };
  }
};

module.exports = getApiInfo;

//Acá no me falta aclarar que temperament: element.temperament?
