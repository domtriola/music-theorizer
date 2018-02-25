import React from 'react';

const KEYS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'G', 'G#', 'A', 'A#', 'B'];
const SCALES = ['major', 'minor'];

export default () => (
  <div className="Home">
    <h2>
      Generate a Scale
    </h2>
    <select name="key">
      {KEYS.map(key => (
        <option key={key} value={key}>{key}</option>
      ))}
    </select>
    <select name="scale">
      {SCALES.map(scale => (
        <option key={scale} value={scale}>{scale}</option>
      ))}
    </select>
  </div>
);
