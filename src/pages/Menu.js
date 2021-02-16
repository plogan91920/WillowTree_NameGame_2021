//Functional Includes
import Button from "../components/Button.js";

//Resource Includes
import "./Menu.scss";

// =========
// Menu Page
// =========
function Menu() {
  return (
    <div className="Page-Menu">
      <div className="Menu">
      <Button action="/play/practice" text="Practice" />
      <Button action="/play" text="Start Game" />
      <Button action="/scores" text="Scores" />
      <Button action="/settings" secondary text="Settings" />
      </div>
    </div>
  );
}

export default Menu;
