import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  note: string.isRequired,
};

const Note = ({ note }) => (
  <div className="Note">
    {note}
  </div>
);

Note.propTypes = propTypes;

export default Note;
