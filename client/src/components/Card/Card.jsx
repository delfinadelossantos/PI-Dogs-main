import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div key={props.id} className={style.card}>
      <p>{props.image}</p>
      <p>Breed: {props.breed}</p>
      <p>Temperaments: {props.temperament}</p>
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
