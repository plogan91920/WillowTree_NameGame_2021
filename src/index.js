//Functional
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import App from './App';
import { BrowserRouter } from 'react-router-dom'

//Resources
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
