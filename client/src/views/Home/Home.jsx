import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//Importo la action que debe despacharse:
import {
  getDogs,
  getTemperaments,
  filterByTemperament,
} from "../../redux/actions";

const Home = () => {
  //Hook para obtener la función dispatch que permite enviar las actions
  //desde el componente al reducer
  const dispatch = useDispatch();

  //useEffect recibe una función que se ejecuta cuando el componente se
  //monta o cuando cambia el array de dependencias.
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const temperaments = useSelector((state) => state.temperaments);

  const filterByTemperamentHandler = (event) => {
    dispatch(filterByTemperament(event.target.value));
  };

  return (
    <>
      <h1>Home</h1>
      <div>
        <select>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select>
          <option value="All">All</option>
          <option value="min_weight">Smallest to Biggest</option>
          <option value="max_weight">Biggest to Smallest</option>
        </select>
        <select onChange={(event) => filterByTemperamentHandler(event)}>
          <option value="All">All Temperaments</option>
          {temperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.temperament}>
              {temperament.temperament}
            </option>
          ))}
        </select>
        <select>
          <option value="All">All</option>
          <option value="api">API</option>
          <option value="database">Created</option>
        </select>
      </div>
      <CardsContainer />
    </>
  );
};

export default Home;
