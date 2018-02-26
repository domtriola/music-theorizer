import KEYS from '../constants/keys';
import { SCALE_SEQUENCES } from '../constants/scales';

export const generateScale = (root, scale) => {
  const rootIndex = KEYS.indexOf(root);

  const result = [root];
  let stepTotal = 0;
  SCALE_SEQUENCES[scale].forEach((step) => {
    stepTotal += step;
    const nextNote = KEYS[(rootIndex + stepTotal) % KEYS.length];

    result.push(nextNote);
  });

  return result;
};

export const generateAllScales = () => {
  const result = {};

  KEYS.forEach((key) => {
    Object.keys(SCALE_SEQUENCES).forEach((scale) => {
      result[`${key} ${scale}`] = generateScale(key, scale);
    });
  });

  return result;
};
