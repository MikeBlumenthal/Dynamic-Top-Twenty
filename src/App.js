import React, { Component } from 'react';
import './App.css';
import MusicBox from './containers/MusicBox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <MusicBox />
      </div>
    );
  }
}

export default App;
