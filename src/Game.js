import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "./partials/Nav.js";
import Menu from './pages/Menu';
import Play from './pages/Play';
import Scores from './pages/Scores';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

import './Game.scss';

function Game() {
  return (
    <Router>
      <Nav />
      <div className="Page">
        <Switch>
          <Route path="/menu" component={Menu}/>
          <Route path="/play" exact component={Play}/>
          <Route path="/play/:mode" component={Play}/>
          <Route path="/settings" component={Settings}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default Game;

