import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import MediatorPattern from '../pages/Mediator';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mediator" exact component={MediatorPattern} />
      </Switch>
    </BrowserRouter>
  );
}
