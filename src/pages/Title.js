import {Link} from "react-router-dom";

import Button from '../components/Button.js';
import Logo from '../components/Logo.js';

import './Title.scss';

function Title() {
  return (
    <div className="Page-Title">
      <Logo />
      <p>Try matching the WillowTree employee to their photo.</p>
      <Link to="/menu"><Button text="Play!" /></Link>
    </div>
  );
}

export default Title;
