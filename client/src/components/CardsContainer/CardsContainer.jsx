import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

//Componente SMART: tiene carga de lógica
const CardsContainer = () => {
  //useSelector permite acceder al estado global almacenado en el store de
  //Redux sin necesidad de recibir props de un componente superior.
  //Se subscribe al estado y fuerza una actualización del componente
  //cuando detecta un cambio.
  const breeds = useSelector((state) => state.breeds);

  return (
    <div className={style.container}>
      {breeds.map((breed) => {
        return (
          // Aquí Card recibe props
          <Card
            id={breed.id}
            image={breed.image}
            breed={breed.breed}
            temperaments={breed.temperaments}
            max_weight={breed.max_weight}
            min_weight={breed.min_weight}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;

// 8 perros por pag.
