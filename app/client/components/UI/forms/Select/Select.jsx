import React from 'react';
import PropTypes from 'prop-types';

const { string, arrayOf, func } = PropTypes;
const propTypes = {
  name: string.isRequired,
  options: arrayOf(string).isRequired,
  value: string,
  onChange: func.isRequired,
};

const defaultProps = {
  value: '',
};

const Select = ({
  name,
  options,
  value,
  onChange,
}) => (
  <select
    name={name}
    value={value || options[0]}
    onChange={event => onChange(event.target.value)}
  >
    {options.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
