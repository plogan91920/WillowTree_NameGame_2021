//Components
import Button from '../components/Button.js'
import Logo from '../components/Logo.js'

//Resources
import './Title.scss';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

// ==========
// Title Page
// ==========
function Title() {

  cookies.set("high_scores", "")

  return (
    <div className="Page-Title">
      <Logo />
      <p>Try matching the WillowTree employee to their photo.</p>
      <Button action="/menu" text="Play!" />
    </div>
  );
}

export default Title;
