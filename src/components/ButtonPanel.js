/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ onClick }) {
  return (
    <div className="btn-cont">
      <div className="btn-row">
        <Button name="Ac" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="+/-" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="%" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="÷" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="7" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="8" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="9" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="x" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="4" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="5" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="6" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="-" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button name="1" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="2" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="3" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="+" onClick={name => onClick(name)} />
      </div>
      <div className="btn-row">
        <Button wide name="0" onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="." onClick={name => onClick(name)} color="rgb(226, 226, 226)" />
        <Button name="=" onClick={name => onClick(name)} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};
