/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

import React from 'react';

export default function Button({ name, className }) {
  return <button type="button" className={className}>{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
