import React from 'react';
import PropTypes from 'prop-types';

const { string } = PropTypes;
const propTypes = {
  musicalKey: string.isRequired,
  scale: string.isRequired,
};

const Scale = ({ musicalKey, scale }) => (
  <div>
    {musicalKey}, {scale}
  </div>
);

Scale.propTypes = propTypes;

export default Scale;
