/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';
import './style.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
