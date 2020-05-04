/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (

    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
