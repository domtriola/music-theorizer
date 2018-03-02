import merge from 'lodash/merge';

import KEYS from '../constants/keys';
import SCALES from '../constants/scales';
import MODES from '../constants/modes';

export const generateNotesFromScaleOrMode = (root, scale) => {
  const rootIndex = KEYS.indexOf(root);

  const result = [root];
  let stepTotal = 0;
  merge(SCALES, MODES)[scale].forEach((step) => {
    stepTotal += step;
    const nextNote = KEYS[(rootIndex + stepTotal) % KEYS.length];

    result.push(nextNote);
  });

  return result;
};

export const generateAllScales = () => {
  const result = {};

  KEYS.forEach((key) => {
    Object.keys(SCALES).forEach((scale) => {
      result[`${key} ${scale}`] = generateNotesFromScaleOrMode(key, scale);
    });
  });

  return result;
};
