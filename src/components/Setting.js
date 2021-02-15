import { useState } from 'react';
import Cookies from 'universal-cookie';

import { FaCheck } from 'react-icons/fa';

import './Setting.scss';

//cookies.set('darkMode', true);
const cookies = new Cookies();

const Setting = ({name, children}) => {
  const [checked, setChecked] = useState(cookies.get(name) == "true");

  function toggle () {
    cookies.set(name, !checked);
    setChecked(!checked);
  }

  return (
    <div className="Setting" onClick={toggle}>
      <span className={"Checkbox" + (checked ? " Checked" : "")}><div className="Check"><FaCheck /></div></span>{children}
    </div>
  )
}

export default Setting
