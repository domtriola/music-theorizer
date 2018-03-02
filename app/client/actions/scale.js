import { generateNotesFromScaleOrMode } from '../logic/scales';

export const UPDATE_SCALE = 'UPDATE_SCALE';

export const updateScale = (key, scale) => {
  const notes = generateNotesFromScaleOrMode(key, scale);

  return {
    type: UPDATE_SCALE,
    key,
    scale,
    notes,
  };
};
