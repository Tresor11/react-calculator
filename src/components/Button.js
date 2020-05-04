/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

import React from 'react';

export default function Button({ name, color, wide }) {
  const style = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };
  return <button type="button" style={style}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'rgb(255, 171, 74)',
};
