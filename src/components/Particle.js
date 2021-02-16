//Functional Includes
import PropTypes from 'prop-types'

//Resource Includes
import star from '../assets/images/star.svg';
import square from '../assets/images/square.svg';
import triangle from '../assets/images/triangle.svg';
import './Particle.scss';

// ==================
// Particle Component
// ==================
const Particle = ({ shape, x, y, clockwise }) => {
  var icon;
  var position = {left: x + "%", bottom: y + "%"};
  switch (shape) {
    case "star":
      icon = star;
      break;
    case "square":
      icon = square;
      break;
    case "triangle":
      icon = triangle;
      break;
  }

  //Render
  return (
    <img className={clockwise ? "particle" : "particle reverse"} style={position} src={icon} />
  )
}

//Prop Handling
Particle.defaultProps = {
  x: 50,
  y: 50,
  clockwise: true,
}

Particle.propTypes = {
  shape: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  rotate: PropTypes.bool,
}

export default Particle
