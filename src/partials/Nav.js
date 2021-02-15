import { useHistory } from "react-router-dom";

import { FaChevronLeft } from 'react-icons/fa';
import title_long from '../assets/images/title_long.svg';

import "./Nav.scss";

function Nav() {
  let history = useHistory();
  return (
    <div className="Nav">
      <nav>
        <button tabIndex="0" role="button" className="Back" onClick={() => history.goBack()}>
          <FaChevronLeft />
        </button>
        <img className="Logo" src={title_long} />
      </nav>
    </div>
  );
}

export default Nav;
