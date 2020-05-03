
/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

import React from 'react';

export default function Button({ name }) {
  return <button type="button">{name}</button>;
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
