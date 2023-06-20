import { useDispatch } from "react-redux";
import { searchDog } from "../../redux/actions";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const inputChangeHandler = (event) => {
    //Guarda en el estado local el valor ingresado en el input
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(searchDog(name));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search breed..."
        onChange={inputChangeHandler}
      />
      <button type="submit" onClick={submitHandler}>
        SEARCH
      </button>
    </>
  );
};

export default SearchBar;
