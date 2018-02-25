import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const propTypes = {
  store: PropTypes.shape({}).isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
