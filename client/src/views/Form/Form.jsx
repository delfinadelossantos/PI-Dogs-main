import { useState } from "react";

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

  //El input debe ser el reflejo del estado. Al cambiar cualquier
  //dato en el input, es necesario que se ejecute una función que cambie
  //el estado, para que los cambios se vean reflejados.
  const changeHandler = (event) => {
    //Esta función lee los inputs y pasa su data al Estado.
    //event.target indica qué input disparó el evento.
    const property = event.target.name;
    const value = event.target.value;

    //Una vez que tenga los valores, necesito modificar el estado en aquella
    //propiedad que se haya cambiado con el valor indicado
    setForm({ ...form, [property]: value });
  };

  return (
    <form>
      <div>
        <label>Breed: </label>
        <input
          type="text"
          value={form.breed}
          onChange={changeHandler}
          name="breed"
        />
      </div>

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
