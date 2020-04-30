/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */

import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button">{this.props.name}</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
