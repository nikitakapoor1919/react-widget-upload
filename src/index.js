import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import Next from './Pages/Next.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const routing =(
  <Router>
      <Route exact path='/' component={App}></Route>
      <Route path='/next' component={Next}></Route>
  </Router>

)
ReactDOM.render(routing, document.getElementById('root'));

reportWebVitals();
