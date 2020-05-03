/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import PropTypes from 'prop-types';

export default function Display({ result }) {
  return <h4>{result}</h4>;
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
