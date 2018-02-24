import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';

const propTypes = {
  store: PropTypes.shape({}).isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route component={App} />
    </HashRouter>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
