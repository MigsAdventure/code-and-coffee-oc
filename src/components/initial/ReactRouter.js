// browserHistory doesnt work with gh-pages, so using hashHistory instead
import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from './App';
import Home from '../containers/Home';
import About from '../containers/About';
import Slack from '../containers/Slack';


export default function ReactRouter() {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/slack" component={Slack} />
      </Route>
    </Router>
  );
};
