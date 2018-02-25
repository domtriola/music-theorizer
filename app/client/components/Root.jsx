import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';

const propTypes = {
  store: PropTypes.shape({}).isRequired,
};

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
