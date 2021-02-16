// Functional
import Settings from './pages/Settings';

// Components
import {Switch, Route} from 'react-router-dom';
import Nav from "./partials/Nav.js";
import Menu from './pages/Menu';
import Play from './pages/Play';
import Scores from './pages/Scores';
import NotFound from './pages/NotFound';

//Resources
import './Game.scss';

// ===========
// Game Router
// ===========
function Game() {
  return (
    <div>
      <Nav />
      <div className="Page">
        <Switch>
          <Route path="/menu" component={Menu}/>
          <Route path="/play" exact component={Play}/>
          <Route path="/play/:mode" component={Play}/>
          <Route path="/scores" component={Scores}/>
          <Route path="/settings" component={Settings}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
}

export default Game;

