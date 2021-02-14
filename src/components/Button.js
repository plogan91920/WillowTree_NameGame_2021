import './Button.scss';

const Button = ({text, secondary}) => {
  return (
    <div className={ secondary ? "Button Secondary" : "Button"}>
      {text}
    </div>
  )
}

export default Button
