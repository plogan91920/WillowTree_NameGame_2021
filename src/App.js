import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Menu from './pages/Menu';
import Title from './pages/Title';
import Settings from './pages/Settings';
import Game from './pages/Game';

import './App.scss';

const cookies = new Cookies();

function App() {
  return (
    <Router>
      <div className={ cookies.get('darkMode') ? 'App Dark' : 'App'}>
        <Switch>
          <Route path="/" exact component={Title}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/play" component={Game}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

