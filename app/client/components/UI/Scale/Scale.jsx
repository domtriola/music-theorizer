import React from 'react';
import PropTypes from 'prop-types';

import { generateScale } from '../../../logic/scales';

import Note from '../Note/Note';

const { string } = PropTypes;
const propTypes = {
  musicalKey: string.isRequired,
  scale: string.isRequired,
};

const Scale = ({ musicalKey, scale }) => (
  <div className="Scale">
    {generateScale(musicalKey, scale).map((note, i) => (
      <Note key={note + String(i)} note={note} />
    ))}
  </div>
);

Scale.propTypes = propTypes;

export default Scale;
