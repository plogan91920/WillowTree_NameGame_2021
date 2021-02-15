import { useState } from 'react';

import badgeCorrect from '../assets/icons/correct.svg'
import badgeIncorrect from '../assets/icons/incorrect.svg'

import './EmployeePortrait.scss'

const Button = ({employee, result, onClick}) => {
  const [img, setImg] = useState("https://namegame.willowtreeapps.com/" + (employee.headshot.url ? employee.headshot.url : "WT_Logo-Hye-tTeI0Z.png"))

  var evaluation
  if (result == "Correct")
    evaluation = <div className="Evaluation Correct"><img src={badgeCorrect} /></div>
  else if (result == "Incorrect")
    evaluation = <div className="Evaluation Incorrect"><img src={badgeIncorrect} /></div>

  return (
    <div className={"EmployeePortrait" + (result == "Disabled" ? " Disabled" : "")} onClick={() => {if (!result) onClick(employee.id)}}>
      <div className="Portrait" style={{backgroundImage:"url('" + img + "')"}} />
      {evaluation}
    </div>
  )
}
export default Button
