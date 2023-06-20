import { useState, useEffect } from "react";
import axios from "axios";
import { getTemperaments } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();

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

  //Control del estado del formulario para que no pueda
  //submitearse sin estar validado.
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);

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
    let formValid = true;
    const regexBreed = /^[A-Za-z]+$/; // Expresión regular para validar palabra sin números ni caracteres especiales
    const regexHeight = /^\d+$/; // Expresión regular para validar números enteros
    const regexWeight = /^\d+$/; // Expresión regular para validar números enteros

    if (!form.breed) {
      setErrors({ ...errors, breed: "Breed field cannot be empty" });
    } else if (!regexBreed.test(form.breed)) {
      setErrors({
        ...errors,
        breed: "Only letters are allowed in the Breed field",
      });
    } else {
      setErrors({ ...errors, breed: "" });
    }

    if (!form.min_height) {
      setErrors({
        ...errors,
        min_height: "Minimum Height field cannot be empty",
      });
    } else if (!regexHeight.test(form.min_height)) {
      setErrors({ ...errors, min_height: "Minimum Height must be a number" });
    } else if (parseInt(form.min_height) <= 0) {
      setErrors({
        ...errors,
        min_height: "Minimum Height must be greater than zero",
      });
    } else {
      setErrors({ ...errors, min_height: "" });
    }

    if (!form.max_height) {
      setErrors({
        ...errors,
        max_height: "Maximum Height field cannot be empty",
      });
    } else if (!regexHeight.test(form.max_height)) {
      setErrors({ ...errors, max_height: "Maximum Height must be a number" });
    } else if (parseInt(form.max_height) <= 0) {
      setErrors({
        ...errors,
        max_height: "Maximum Height must be greater than zero",
      });
    } else if (parseInt(form.max_height) <= parseInt(form.min_height)) {
      setErrors({
        ...errors,
        max_height: "Maximum Height must be greater than Minimum Height",
      });
    } else {
      setErrors({ ...errors, max_height: "" });
    }

    if (!form.min_weight) {
      setErrors({
        ...errors,
        min_weight: "Minimum Weight field cannot be empty",
      });
    } else if (!regexWeight.test(form.min_weight)) {
      setErrors({ ...errors, min_weight: "Minimum Weight must be a number" });
    } else if (parseInt(form.min_weight) <= 0) {
      setErrors({
        ...errors,
        min_weight: "Minimum Weight must be greater than zero",
      });
    } else {
      setErrors({ ...errors, min_weight: "" });
    }

    if (!form.max_weight) {
      setErrors({
        ...errors,
        max_weight: "Maximum Weight field cannot be empty",
      });
    } else if (!regexWeight.test(form.max_weight)) {
      setErrors({ ...errors, max_weight: "Maximum Weight must be a number" });
    } else if (parseInt(form.max_weight) <= 0) {
      setErrors({
        ...errors,
        max_weight: "Maximum Weight must be greater than zero",
      });
    } else if (parseInt(form.max_weight) <= parseInt(form.min_weight)) {
      setErrors({
        ...errors,
        max_weight: "Maximum Weight must be greater than Minimum Weight",
      });
    } else {
      setErrors({ ...errors, max_weight: "" });
    }

    if (!form.life_span) {
      setErrors({ ...errors, life_span: "Life Span field cannot be empty" });
    } else if (!regexHeight.test(form.life_span)) {
      setErrors({ ...errors, life_span: "Life Span must be a number" });
    } else {
      setErrors({ ...errors, life_span: "" });
    }

    if (!form.temperaments || form.temperaments.length === 0) {
      setErrors({
        ...errors,
        temperaments: "At least one temperament must be chosen",
      });
    } else {
      setErrors({ ...errors, temperaments: "" });
    }

    if (
      errors.breed ||
      errors.min_height ||
      errors.max_height ||
      errors.min_weight ||
      errors.max_weight ||
      errors.life_span ||
      errors.temperaments
    ) {
      formValid = false;
    }
    setIsFormValid(formValid);
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
      <span>{errors.breed}</span>
      <div>
        <label>Minimum Height in cm: </label>
        <input
          type="text"
          value={form.min_height}
          onChange={changeHandler}
          name="min_height"
        />
      </div>
      <span>{errors.min_height}</span>
      <div>
        <label>Maximum Height in cm: </label>
        <input
          type="text"
          value={form.max_height}
          onChange={changeHandler}
          name="max_height"
        />
      </div>
      <span>{errors.max_height}</span>
      <div>
        <label>Minimum Weight in kg: </label>
        <input
          type="text"
          value={form.min_weight}
          onChange={changeHandler}
          name="min_weight"
        />
      </div>
      <span>{errors.min_weight}</span>
      <div>
        <label>Maximum Weight in kg: </label>
        <input
          type="text"
          value={form.max_weight}
          onChange={changeHandler}
          name="max_weight"
        />
      </div>
      <span>{errors.max_weight}</span>
      <div>
        <label>Lifespan: </label>
        <input
          type="text"
          value={form.life_span}
          onChange={changeHandler}
          name="life_span"
        />
      </div>
      <span>{errors.life_span}</span>
      {/* Temperamentos */}
      <div>
        <label>Temperaments: </label>
        <select
          name="temperaments"
          value={form.temperaments}
          onChange={changeHandler}
          multiple>
          Select Temperaments
          <option value="All">All Temperaments</option>
          {temperaments.map((temperament) => (
            <option key={temperament.id} value={temperament.temperament}>
              {temperament.temperament}
            </option>
          ))}
        </select>
        <span>{errors.temperaments}</span>
        <br />
        {/* <span>Temperaments selected: {form.temperaments.join(", ")}</span> */}
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
      <button type="submit" disabled={!isFormValid}>
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
