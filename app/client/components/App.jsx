import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './sections/Header/Header';
import Footer from './sections/Footer/Footer';

import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
    <Footer />
  </div>
);
