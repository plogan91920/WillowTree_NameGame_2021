import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Title from './pages/Title';
import Game from './Game';
import NotFound from './pages/NotFound';

import './App.scss';

const cookies = new Cookies();

function App() {
  return (
    <Router>
      <div className={ cookies.get('darkMode') ? 'App Dark' : 'App'}>
        <Switch>
          <Route path="/" exact component={Title}/>
          <Route path="/" component={Game}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

