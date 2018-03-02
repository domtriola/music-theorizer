import assert from 'assert';
import { generateNotesFromScaleOrMode } from './scales';

describe('generateNotesFromScaleOrMode()', () => {
  it('should return the correct scales', () => {
    assert.deepEqual(
      generateNotesFromScaleOrMode('C', 'major'),
      ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    );

    assert.deepEqual(
      generateNotesFromScaleOrMode('G#', 'minor'),
      ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
    );

    assert.deepEqual(
      generateNotesFromScaleOrMode('A', 'harmonic minor'),
      ['A', 'B', 'C', 'D', 'E', 'F', 'G#', 'A'],
    );

    assert.deepEqual(
      generateNotesFromScaleOrMode('A', 'melodic minor'),
      ['A', 'B', 'C', 'D', 'E', 'F#', 'G#', 'A'],
    );
  });

  it('should return the correct modes', () => {
    assert.deepEqual(
      generateNotesFromScaleOrMode('C', 'ionian'),
      ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'],
    );

    assert.deepEqual(
      generateNotesFromScaleOrMode('G#', 'aeolian'),
      ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
    );
  });
});
