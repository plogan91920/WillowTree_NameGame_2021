import { useHistory } from "react-router-dom";

import chevron_left from '../assets/icons/chevron_left.svg';
import title_long from '../assets/images/title_long.svg';

import "./Nav.scss";

function Nav() {
  let history = useHistory();
  return (
    <div className="Nav">
      <nav>
        <div className="Back" onClick={() => history.goBack()}>
          <img src={chevron_left} />
        </div>
        <img className="Logo" src={title_long} />
      </nav>
    </div>
  );
}

export default Nav;
