//Functional includes
import { useState } from 'react';
import PropTypes from 'prop-types'

//Resource includes
import badgeCorrect from '../assets/icons/correct.svg'
import badgeIncorrect from '../assets/icons/incorrect.svg'
import './ImageButton.scss'

// ===========================
// Image Button Component
// ===========================
const ImageButton = ({image, result, onClick}) => {
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
      <div className={"Portrait" + (loaded ? " Loaded" : "")} style={{backgroundImage:"url('" + image + "')"}} />
      <img src={image} onLoad={() => {setLoaded(true)}}/>
      {evaluation}
    </div>
  )
}

//Prop Handling
ImageButton.propTypes = {
  image: PropTypes.string
}

ImageButton.defaultProps = {
  image: "WT_Logo-Hye-tTeI0Z.png"
}

export default ImageButton
