import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
//Importo la action que debe despacharse:
import {
  getDogs,
  getTemperaments,
  filterByTemperament,
  sortByWeight,
  filterBySource,
  sortBreeds,
  resetFilters,
} from "../../redux/actions";

const Home = () => {
  //Hook para obtener la función dispatch que permite enviar las actions
  //desde el componente al reducer
  const dispatch = useDispatch();

  //useEffect recibe una función que se ejecuta cuando el componente se
  //monta o cuando cambia el array de dependencias.
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  //useSelector permite acceder al estado global sin necesidad de recibir props.
  //Se suscribe al estado.
  const temperaments = useSelector((state) => state.temperaments);

  const filterByTemperamentHandler = (event) => {
    dispatch(filterByTemperament(event.target.value));
  };

  const sortByWeightHandler = (event) => {
    dispatch(sortByWeight(event.target.value));
  };

  const filterBySourceHandler = (event) => {
    dispatch(filterBySource(event.target.value));
  };

  const sortBreedsHandler = (event) => {
    dispatch(sortBreeds(event.target.value));
  };

  const resetFiltersHandler = (event) => {
    dispatch(resetFilters(event.target.value));
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <SearchBar />
      </div>
      <div>
        <select onChange={sortBreedsHandler}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select onChange={sortByWeightHandler}>
          <option value="All">Sort by Weight</option>
          <option value="min_weight">Smallest to Biggest</option>
          <option value="max_weight">Biggest to Smallest</option>
        </select>
        <select onChange={filterByTemperamentHandler}>
          <option value="All">All Temperaments</option>
          {temperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.temperament}>
              {temperament.temperament}
            </option>
          ))}
        </select>
        <select onChange={filterBySourceHandler}>
          <option value="All">All</option>
          <option value="api">API</option>
          <option value="database">Created</option>
        </select>
        <button onClick={resetFiltersHandler}>Reset Filters</button>
      </div>
      <CardsContainer />
    </>
  );
};

export default Home;
