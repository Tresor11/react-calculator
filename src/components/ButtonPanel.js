/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="btn-cont">
      <div className="btn-row">
        <Button name="Ac" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" color="rgb(255, 171, 74)" />
      </div>
      <div className="btn-row">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="x" color="rgb(255, 171, 74)" />
      </div>
      <div className="btn-row">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" color="rgb(255, 171, 74)" />
      </div>
      <div className="btn-row">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" color="rgb(255, 171, 74)" />
      </div>
      <div className="btn-row">
        <Button wide name="0" />
        <Button name="." />
        <Button name="=" color="rgb(255, 171, 74)" />
      </div>
    </div>
  );
}
