import assert from 'assert';
import { generateNotesFromScale } from './scales';

describe('generateNotesFromScale()', () => {
  it('should return the correct scales', () => {
    assert.deepEqual(
      generateNotesFromScale('C', 'major'),
      ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    );

    assert.deepEqual(
      generateNotesFromScale('G#', 'minor'),
      ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
    );

    assert.deepEqual(
      generateNotesFromScale('A', 'harmonic minor'),
      ['A', 'B', 'C', 'D', 'E', 'F', 'G#', 'A'],
    );

    assert.deepEqual(
      generateNotesFromScale('A', 'melodic minor'),
      ['A', 'B', 'C', 'D', 'E', 'F#', 'G#', 'A'],
    );
  });
});
