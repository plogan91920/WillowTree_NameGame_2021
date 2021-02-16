//Functional Includes
import { useState } from 'react'
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
  var dark = cookies.get('dark_mode') == "true"
  return (
    <div className={ dark ? 'App Dark' : 'App'}>
      <Switch>
        <Route path="/" exact component={Title}/>
        <Route path="/" component={Game}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;

