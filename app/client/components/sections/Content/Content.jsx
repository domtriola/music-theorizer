import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home/Home';

export default () => (
  <div className="Content">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);
