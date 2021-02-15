import { withRouter } from 'react-router'

import './Button.scss';

const Button = withRouter(({text, secondary, disabled, onClick, history}) => {
  if (typeof onClick == "string") {
    console.log("Caught One")
    console.log(history)
    onClick = () => { console.log("go forth"); history.push(onClick) }
  }
  return (
    <div className={"Button" + (secondary ? " Secondary" : "") + (disabled ? " Disabled" : "")} onClick={() => {if (!disabled) onClick()}}>
      {text}
    </div>
  )
})

Button.defaultProps = {
  onClick: () => {}
}

export default Button
