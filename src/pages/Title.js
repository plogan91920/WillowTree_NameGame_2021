//Functional Includes
import Button from '../components/Button.js';
import Logo from '../components/Logo.js';

//Resource Includes
import './Title.scss';

// ==========
// Title Page
// ==========
function Title() {
  return (
    <div className="Page-Title">
      <Logo />
      <p>Try matching the WillowTree employee to their photo.</p>
      <Button action="/menu" text="Play!" />
    </div>
  );
}

export default Title;
