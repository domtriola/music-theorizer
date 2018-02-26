import { Map, List } from 'immutable';
import { UPDATE_SCALE } from '../actions/scale';

const defaultState = Map({
  key: 'C',
  scale: 'major',
  notes: List(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']),
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SCALE:
      return state.merge({
        key: action.key,
        scale: action.scale,
        notes: action.notes,
      });
    default:
      return state;
  }
};
