import style from "./Card.module.css";

//Componente DUMB: no tiene carga de lógica, sólo es presentacional, muestra props que recibe.
const Card = (props) => {
  return (
    <div key={props.id} className={style.card}>
      <p>{props.image}</p>
      <p>Breed: {props.breed}</p>
      <p>Temperaments: {props.temperaments}</p>
      <p>Min Weight: {props.min_weight} kg</p>
      <p>Max Weight: {props.max_weight} kg</p>
    </div>
  );
};

export default Card;

// Imagen.
// Nombre.
// Temperamentos.
// Peso.
