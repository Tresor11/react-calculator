/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="btn-cont">
      <div className="btn-row">
        <Button name="Ac" color="rgb(226, 226, 226)" />
        <Button name="+/-" color="rgb(226, 226, 226)" />
        <Button name="%" color="rgb(226, 226, 226)" />
        <Button name="÷" />
      </div>
      <div className="btn-row">
        <Button name="7" color="rgb(226, 226, 226)" />
        <Button name="8" color="rgb(226, 226, 226)" />
        <Button name="9" color="rgb(226, 226, 226)" />
        <Button name="x" />
      </div>
      <div className="btn-row">
        <Button name="4" color="rgb(226, 226, 226)" />
        <Button name="5" color="rgb(226, 226, 226)" />
        <Button name="6" color="rgb(226, 226, 226)" />
        <Button name="-" />
      </div>
      <div className="btn-row">
        <Button name="1" color="rgb(226, 226, 226)" />
        <Button name="2" color="rgb(226, 226, 226)" />
        <Button name="3" color="rgb(226, 226, 226)" />
        <Button name="+" />
      </div>
      <div className="btn-row">
        <Button wide name="0" color="rgb(226, 226, 226)" />
        <Button name="." color="rgb(226, 226, 226)" />
        <Button name="=" />
      </div>
    </div>
  );
}
