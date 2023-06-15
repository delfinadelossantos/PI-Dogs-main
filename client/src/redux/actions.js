import axios from "axios";
export const GET_DOGS = "GET_DOGS";

export const getDogs = () => {
  return async function (dispatch) {
    const backendDogs = await axios.get("http://localhost:3001/dogs/");
    const dogs = backendDogs.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

//SEARCH_DOG
//FILTER_TEMPERAMENT
//FILTER_ORIGIN
//SORT_BREEDS
//SORT_WEIGHT
//RESET_FILTERS
//GET_DOG_DETAIL
//CREATE_BREED
