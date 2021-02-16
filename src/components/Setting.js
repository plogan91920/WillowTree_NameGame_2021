//Functional Includes
import { useState } from 'react';
import Cookies from 'universal-cookie';

//Resource Includes
import { FaCheck } from 'react-icons/fa';
import './Setting.scss';

const cookies = new Cookies();

// =================
// Setting Component
// =================
const Setting = ({name, children}) => {
  const [checked, setChecked] = useState(cookies.get(name) == "true");

  function toggle () {
    cookies.set(name, !checked);
    setChecked(!checked);
  }

  //Render
  return (
    <div className="Setting" onClick={toggle}>
      <span className={"Checkbox" + (checked ? " Checked" : "")}><div className="Check"><FaCheck /></div></span>{children}
    </div>
  )
}

export default Setting
