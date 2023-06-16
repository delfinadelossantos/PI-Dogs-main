import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//Importo la action que debe despacharse:
import { getDogs } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  //useEffect recibe una función que se ejecuta cuando el componente se
  //monta o cuando cambia el array de dependencias.
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <>
      <h1>Home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
