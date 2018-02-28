import React from 'react';
import PropTypes from 'prop-types';

import Note from '../Note/Note';

const { string, arrayOf } = PropTypes;
const propTypes = {
  notes: arrayOf(string).isRequired,
};

const Scale = ({ notes }) => (
  <div className="Scale">
    {notes.map((note, i) => (
      <Note key={note + String(i)} note={note} />
    ))}
  </div>
);

Scale.propTypes = propTypes;

export default Scale;
