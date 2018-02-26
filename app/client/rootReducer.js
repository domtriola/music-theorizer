import { combineReducers } from 'redux';

import scaleReducer from './reducers/scale';

export default combineReducers({
  scale: scaleReducer,
});
