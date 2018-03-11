import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Note from '../Note/Note';

const { string, arrayOf } = PropTypes;
const propTypes = {
  className: string.isRequired,
  notes: arrayOf(string).isRequired,
};

const Scale = ({ className, notes }) => (
  <div className={className}>
    {notes.map((note, i) => (
      <Note key={note + String(i)} note={note} />
    ))}
  </div>
);

Scale.propTypes = propTypes;

const StyledScale = styled(Scale)`
  display: flex;
`;

export default StyledScale;
