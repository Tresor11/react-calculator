/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(s) {
    const finalState = calculate(s, this.state);
    this.setState(finalState);
  }

  render() {
    return (
      <div className="App">
        <Display result={this.state.total} />
        <ButtonPanel onClick={name => this.handleClick(name)} />
      </div>
    );
  }
}

export default App;
