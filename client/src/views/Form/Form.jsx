import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    breed: "",
    min_height: 0,
    max_height: 0,
    min_weight: 0,
    max_weight: 0,
    life_span: "",
    temperaments: [],
    image: "",
  });

  const [errors, setErrors] = useState({
    breed: "",
    min_height: 0,
    max_height: 0,
    min_weight: 0,
    max_weight: 0,
    life_span: "",
    temperaments: [],
    image: "",
  });

  //El input debe ser el reflejo del estado. Al cambiar cualquier
  //dato en el input, es necesario que se ejecute una función que cambie
  //el estado, para que los cambios se vean reflejados.
  const changeHandler = (event) => {
    //Esta función lee los inputs y pasa su data al Estado.
    //event.target indica qué input disparó el evento.
    const property = event.target.name;
    const value = event.target.value;

    //Valida lo mismo que el estado para que valide en el momento y no haya un delay
    validate({ ...form, [property]: value });

    //Una vez que tenga los valores, necesito modificar el estado en aquella
    //propiedad que se haya cambiado con el valor indicado
    setForm({ ...form, [property]: value });
  };

  //Función que valida si al hacer un cambio, lo que se ingresa al input es correcto
  const validate = (form) => {
    //Acá hago validaciones con if.
    //el error se guarda en setErrors y se muestra
    //ejemplo:
    //   if(regex.test(form.algo)){
    //     setErrors({...errors, algo:""}){
    //       else{
    //         setErrors({...errors, algo:"hay un error en el nombre"})
    //       }
    //     }
    //   }
    //   if(form.algo==="") setErrors({errors, algo: "campo vacío"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const response = axios
      .post("http://localhost:3001/dogs", form)
      .then((res) => alert(res))
      .catch((error) => alert(error));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Breed: </label>
        <input
          type="text"
          value={form.breed}
          onChange={changeHandler}
          name="breed"
        />
      </div>
      {/* Acá iría un span (chequear si corresponde ese tag) informando el {errors.algo} del validate */}
      <div>
        <label>Minimum Height: </label>
        <input
          type="text"
          value={form.min_height}
          onChange={changeHandler}
          name="min_height"
        />
      </div>

      <div>
        <label>Maximum Height: </label>
        <input
          type="text"
          value={form.max_height}
          onChange={changeHandler}
          name="max_height"
        />
      </div>

      <div>
        <label>Minimum Weight: </label>
        <input
          type="text"
          value={form.min_weight}
          onChange={changeHandler}
          name="min_weight"
        />
      </div>

      <div>
        <label>Maximum Weight: </label>
        <input
          type="text"
          value={form.max_weight}
          onChange={changeHandler}
          name="max_weight"
        />
      </div>

      <div>
        <label>Lifespan: </label>
        <input
          type="text"
          value={form.life_span}
          onChange={changeHandler}
          name="life_span"
        />
      </div>
      {/* Temperamentos */}
      <div>
        <label>Temperaments: </label>
        <input
          type="text"
          value={form.temperaments}
          onChange={changeHandler}
          name="temperaments"
        />
      </div>
      {/* Imagen */}
      <div>
        <label>Image: </label>
        <input
          type="text"
          value={form.image}
          onChange={changeHandler}
          name="image"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;

// Posibilidad de seleccionar/agregar varios temperamentos en simultáneo.
// Botón para crear la nueva raza.
// [IMPORANTE]: es requisito que el formulario de creación esté validado
// sólo con JavaScript. Puedes agregar las validaciones que consideres.
// Por ejemplo: que el nombre de la raza no pueda contener números, o
// que el peso/altura mínimo no pueda ser mayor al máximo.
