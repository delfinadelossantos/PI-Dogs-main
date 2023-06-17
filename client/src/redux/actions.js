import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getDogs = () => {
  return async function (dispatch) {
    const backendDogs = await axios.get("http://localhost:3001/dogs/");
    const dogs = backendDogs.data;
    dispatch({ type: "GET_DOGS", payload: dogs });
  };
};

export const searchDog = (name) => {
  return async function (dispatch) {
    const search = await axios.get(
      "http://localhost:3001/dogs/search?name=" + name
    );
    dispatch({ type: SEARCH_DOG, payload: search.data });
  };
};

export const getDogDetail = (id) => {
  return async function (dispatch) {
    const dogDetail = await axios.get(`http://localhost:3001/dogs/${id}`);
    const detail = dogDetail.data;
    dispatch({ type: GET_DOG_DETAIL, payload: detail });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterBySource = () => {
  return function (dispatch) {
    dispatch({ type: FILTER_BY_SOURCE });
  };
};

//FILTER_TEMPERAMENT
//SORT_BREEDS
//SORT_WEIGHT
//RESET_FILTERS
//CREATE_BREED
