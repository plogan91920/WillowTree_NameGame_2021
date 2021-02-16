//Functional includes
import { useState } from 'react';
import PropTypes from 'prop-types'

//Resource includes
import badgeCorrect from '../assets/icons/correct.svg'
import badgeIncorrect from '../assets/icons/incorrect.svg'
import './EmployeePortrait.scss'

// ===========================
// Employee Portrait Component
// ===========================
const EmployeePortrait = ({image, result, onClick}) => {
  const [img, setImg] = useState("https://namegame.willowtreeapps.com/" + (image ? image : "WT_Logo-Hye-tTeI0Z.png"))
  const [loaded, setLoaded] = useState(false)

  //Display a result
  var evaluation
  if (result == "Correct")
    evaluation = <div className="Evaluation Correct"><img src={badgeCorrect} /></div>
  else if (result == "Incorrect")
    evaluation = <div className="Evaluation Incorrect"><img src={badgeIncorrect} /></div>

  //Dynamic Styles
  var classList="EmployeePortrait"
  if (result == "Disabled")
    classList += " Disabled"

  //Render
  return (
    <div className={classList} onClick={() => {if (!result) onClick();}}>
      <div className={"Portrait" + (loaded ? " Loaded" : "")} style={{backgroundImage:"url('" + img + "')"}} />
      <img src={img} onLoad={() => {setLoaded(true)}}/>
      {evaluation}
    </div>
  )
}

//Prop Handling
EmployeePortrait.propTypes = {
  image: PropTypes.string
}

export default EmployeePortrait
