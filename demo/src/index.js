import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './dashboard';
import TAMS from './tams';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Link className="nav-bar" to="/">Home</Link> <Link className="nav-bar" to="/dashboard">Dashboard</Link> 
        <Link to="/tams" className="nav-bar">TAMS</Link>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tams" component={TAMS} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
