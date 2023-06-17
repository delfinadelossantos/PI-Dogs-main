import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.Landing}>
      <h1 className={style.title}>Welcome to Henry Dogs!</h1>
      <Link to="/home">
        <button className={style.accessbtn}>Home</button>
      </Link>
    </div>
  );
};

export default Landing;
