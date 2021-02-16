//Functional Includes
import {Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Title from './pages/Title';
import Game from './Game';
import NotFound from './pages/NotFound';

//Resource Includes
import './App.scss';

const cookies = new Cookies();

// =============
// App Router
// =============
function App() {
  return (
      <div className={ cookies.get('darkMode') ? 'App Dark' : 'App'}>
        <Switch>
          <Route path="/" exact component={Title}/>
          <Route path="/" component={Game}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
  );
}

export default App;

