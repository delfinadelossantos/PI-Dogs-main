import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Detail, Form, Home, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  //useLocation es un hook que permite acceder a la ubicación actual (path)

  const location = useLocation();

  return (
    <div className="App">
      {/* Lo utilizo para que el navbar sólo se muestre en los paths requeridos. */}
      {location.pathname !== "/" && <NavBar />}

      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/detail">
        <Detail />
      </Route>

      <Route path="/form">
        <Form />
      </Route>
    </div>
  );
}

export default App;
