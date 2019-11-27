import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies/:id" component={About} />
      <Route exact path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
