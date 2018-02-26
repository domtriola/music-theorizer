import assert from 'assert';
import { generateScale } from './scales';

describe('generateScale()', () => {
  it('should return the correct scales', () => {
    assert.deepEqual(
      generateScale('C', 'major'),
      ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    );

    assert.deepEqual(
      generateScale('G#', 'minor'),
      ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
    );

    assert.deepEqual(
      generateScale('A', 'harmonic minor'),
      ['A', 'B', 'C', 'D', 'E', 'F', 'G#', 'A'],
    );

    assert.deepEqual(
      generateScale('A', 'melodic minor'),
      ['A', 'B', 'C', 'D', 'E', 'F#', 'G#', 'A'],
    );
  });
});
