import { useState } from 'react';
import Cookies from 'universal-cookie';

import check from '../assets/icons/check.svg';

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
      <span className={"Checkbox" + (checked ? " Checked" : "")}><div className="Check"><img src={check}/></div></span>{children}
    </div>
  )
}

export default Setting
