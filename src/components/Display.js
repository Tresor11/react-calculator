/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';

import React from 'react';

export default function Display({ result }) {
  return (
    <div className="display">
      <h1>{result}</h1>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
