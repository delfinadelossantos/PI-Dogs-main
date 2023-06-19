//El reducer es una función que recibe el estado a modificar y la action
//que indica qué tiene que hacer.

import {
  GET_DOGS,
  SEARCH_DOG,
  GET_DOG_DETAIL,
  CLEAN_DETAIL,
  SORT_BREEDS,
  GET_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENT,
  SORT_WEIGHT,
} from "./actions";

//El estado global al principio de la aplicación es el initialState
const initialState = {
  breeds: [],
  breedDetail: {},
  allBreeds: [],
  temperaments: [],
};

//Cuando la aplicación recién inicia, el estado es initialState.
const rootReducer = (state = initialState, action) => {
  //El switch evalúa qué es lo que se debe hacer
  //Y en un principio tiene un caso default que es retornar una
  //copia del estado.
  switch (action.type) {
    case GET_DOGS:
      return { ...state, breeds: action.payload, allBreeds: action.payload };
    // case SEARCH_DOG:
    //   return { ...state, breeds: action.payload };
    case GET_DOG_DETAIL:
      return { ...state, breedDetail: action.payload };
    case CLEAN_DETAIL:
      return { ...state, breedDetail: {} };
    case GET_TEMPERAMENTS:
      return { ...state, temperaments: action.payload };
    case FILTER_BY_TEMPERAMENT:
      const allBreeds = state.allBreeds;
      const selectedTemperament = action.payload;
      const filtered =
        selectedTemperament === "All"
          ? allBreeds
          : allBreeds.filter((element) =>
              element.temperaments
                ? element.temperaments.split(", ").includes(selectedTemperament)
                : false
            );
      return { ...state, breeds: filtered };
    case SORT_WEIGHT:
      const breeds = state.breeds;
      const sort = action.payload; // Valor del select

      let sortedBreeds;
      if (sort === "All") {
        sortedBreeds = breeds;
      } else if (sort === "min_weight") {
        sortedBreeds = breeds
          .filter((dog) => dog.min_weight !== null)
          .sort((a, b) => a.min_weight - b.min_weight);
      } else if (sort === "max_weight") {
        sortedBreeds = breeds
          .filter((dog) => dog.max_weight !== null)
          .sort((a, b) => b.max_weight - a.max_weight);
      } else {
        sortedBreeds = breeds;
      }
      return {
        ...state,
        breeds: sortedBreeds,
      };
    // case SORT_BREEDS:
    //   const sortedBreeds = [...state.breeds];
    // //sortedBreeds.sort((a,b)=> a.breed.localeCompare(b.breed));
    default:
      return { ...state };
  }
};

export default rootReducer;
