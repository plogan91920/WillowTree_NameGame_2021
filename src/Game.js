import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from "./partials/Nav.js";
import Menu from './pages/Menu';
import Play from './pages/Play';
import Scores from './pages/Scores';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function Game() {
  return (
    <Router>
      <Nav />
        <Switch>
          <Route path="/menu" component={Menu}/>
          <Route path="/play" component={Play}/>
          <Route path="/settings" component={Settings}/>
          <Route component={NotFound}/>
        </Switch>
    </Router>
  );
}

export default Game;

