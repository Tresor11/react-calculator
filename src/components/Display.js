/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

import React from 'react';

export default function Display({ result }) {
  return <h4>{result}</h4>;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
