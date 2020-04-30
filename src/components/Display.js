/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h6>{this.props.result}</h6>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
