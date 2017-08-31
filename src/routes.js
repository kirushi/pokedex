import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Pokedex from './containers/pokedex';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Pokedex} />
  </Route>
);
