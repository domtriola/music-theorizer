export const SCALES = ['major', 'minor', 'harmonic minor', 'melodic minor'];

/*
 * Integers represent half-steps
 * 2 == Whole step
 * 1 == Half step
 * */
export const SCALE_SEQUENCES = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2],
  'harmonic minor': [2, 1, 2, 2, 1, 3, 1],
  'melodic minor': [2, 1, 2, 2, 2, 2, 1],
};
