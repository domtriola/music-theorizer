import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { string } = PropTypes;
const propTypes = {
  className: string.isRequired,
  note: string.isRequired,
};

const Note = ({ className, note }) => (
  <div className={className}>
    {note}
  </div>
);

Note.propTypes = propTypes;

const StyledNote = styled(Note)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 4rem;
  width: 4rem;
`;

export default StyledNote;
