/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */

import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <Button name="Ac" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" />
        </div>
        <div className="btn-group">
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="X" />
        </div>
        <div className="btn-group">
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" />
        </div>
        <div className="btn-group">
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" />
        </div>
        <div className="btn-group">
          <Button name="0" />
          <Button name="." />
          <Button name="=" />
        </div>
      </div>
    );
  }
}
