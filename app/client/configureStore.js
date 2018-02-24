import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import composeWithReduxDevtools from './util/composeWithReduxDevtools';

export default (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithReduxDevtools(applyMiddleware(thunk)),
  )
);
