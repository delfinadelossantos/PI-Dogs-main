import "./App.css";
import { Route } from "react-router-dom";
import { Detail, Form, Home, Landing } from "./views";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

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
