//Functional
import { createBrowserHistory } from "history";
import PropTypes from 'prop-types'

//Resources
import './Button.scss';

const history = createBrowserHistory({forceRefresh: true});

// ================
// Button Component
// ================
const Button = ({text, secondary, disabled, action}) => {

  //Handle passed route or function
  var clickFunc
  if (typeof action == "string") {
    clickFunc = () => {
      history.push(action) 
    }
  }
  else {
    clickFunc = () => {
      if (!disabled) 
        action();
    }
  }

  //Dynamic Styling
  var classList = "Button"
  if (secondary)
    classList += " Secondary"
  if (disabled)
    classList += " Disabled"

  //Render
  return (
    <div className={classList} onClick={clickFunc}>
      {text}
    </div>
  )
}

//Prop Handling
Button.defaultProps = {
  action: () => {}
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
}

export default Button
