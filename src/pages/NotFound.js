import {FaExclamationTriangle} from 'react-icons/fa';

import './NotFound.scss';

function NotFound() {
  return (
    <div className="Page-NotFound">
      <h1>Oh No!</h1>
      <FaExclamationTriangle />
      <h2>This page doesn't exist!</h2>
    </div>
  );
}

export default NotFound;
