import variables from './scss/_base.scss';

const getStyleValue = (styles, variable) => {
  const searchKey = `$${styles[variable]}`;
  const valueIsAnotherVariable = variable !== searchKey &&
    Object.prototype.hasOwnProperty.call(styles, `$${styles[variable]}`);

  return valueIsAnotherVariable ?
    getStyleValue(styles, searchKey) :
    styles[variable];
};

const formattedStyles = {};

Object.keys(variables.global).forEach((variable) => {
  formattedStyles[variable] = getStyleValue(variables.global, variable);
});

export default formattedStyles;
