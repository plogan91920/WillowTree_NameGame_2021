import './LoadingBar.scss';

import './LoadingBar.scss'

const LoadingBar = ({loading}) => {
  return (
    <div className={loading ? "LoadingBar Loading" : "LoadingBar"} />
  )
}

export default LoadingBar
