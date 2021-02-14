import {Link} from "react-router-dom";

import Button from "../components/Button.js";

import "./Menu.scss";

function Menu() {
  return (
    <div className="Page-Menu">
      <div className="Menu">
      <Link to="/play/practice"><Button text="Practice" /></Link>
      <Link to="/play"><Button text="Exam" /></Link>
      <Link to="/scores"><Button text="Scores" /></Link>
      <Link to="/settings"><Button secondary text="Settings" /></Link>
      </div>
    </div>
  );
}

export default Menu;
