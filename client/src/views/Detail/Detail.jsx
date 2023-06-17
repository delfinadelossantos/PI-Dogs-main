import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getDogDetail, cleanDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  //Hook que permite acceder al parámetro dinámico de la URL.
  const { id } = useParams();

  //Hook que permite acceder al store de redux,porque la información se está
  //guardando en un estado global
  const breed = useSelector((state) => state.breedDetail);
  const dispatch = useDispatch();

  //Este useEffect tiene representadas las 3 fases del ciclo de vida
  //Cuando el componente se monta, hace dispatch de la action. (componentDidMount)
  //La action obtiene el id de useParams.
  useEffect(() => {
    dispatch(getDogDetail(id));

    //Función callback que se ejecuta cuando el componente se desmonta para
    //que el estado global quede con un objeto vacío en el detalle. (componentWillUnmount)
    return () => {
      dispatch(cleanDetail());
    };
    //Si el componente se actualiza por cambio en la variable del array de
    //dependencias. (componentDidUpdate)
  }, [id]);

  console.log(breed);
  return (
    <div>
      {breed.breed ? (
        <>
          <h2>{breed.breed}</h2>
          <img src={breed.image} alt="img" />
          <p>Id: {breed.id}</p>
          <p>Min Height: {breed.min_height} cm</p>
          <p>Max Height: {breed.max_height} cm</p>
          <p>Min Weight: {breed.min_weight} kg</p>
          <p>Max Weight: {breed.max_weight} kg</p>
          <p>Temperaments: {breed.temperaments}</p>
          <p>Lifespan: {breed.life_span}</p>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
