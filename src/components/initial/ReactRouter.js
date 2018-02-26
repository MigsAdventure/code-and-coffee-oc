// browserHistory doesnt work with gh-pages, so using hashHistory instead
import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from './App';
import Home from '../containers/Home';
import NewPage from '../containers/NewPage';
import About from '../containers/About';


export default function ReactRouter() {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/new-page" component={NewPage} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
};
