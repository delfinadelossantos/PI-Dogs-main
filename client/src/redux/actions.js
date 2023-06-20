import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const SEARCH_DOG = "SEARCH_DOG";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SORT_BREEDS = "SORT_BREEDS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_BY_TEMPERAMENT = "FILTER_BY_TEMPERAMENT";
export const SORT_WEIGHT = "SORT_WEIGHT";
export const RESET_FILTERS = "RESET_FILTERS";

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

export const getTemperaments = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/temperaments");
    dispatch({ type: GET_TEMPERAMENTS, payload: response.data });
  };
};

export const filterByTemperament = (payload) => {
  return { type: FILTER_BY_TEMPERAMENT, payload: payload };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const filterBySource = (payload) => {
  return { type: FILTER_BY_SOURCE, payload: payload };
};

export const sortByWeight = (sort) => {
  return { type: SORT_WEIGHT, payload: sort };
};

export const sortBreeds = (sort) => {
  return { type: SORT_BREEDS, payload: sort };
};

export const resetFilters = () => {
  return { type: RESET_FILTERS };
};
