import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Letter from './components/Letter'
import Word from './components/Word'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to play Hangman!</h2>
        </div>
        <p className="App-intro">
          To get started, select a letter and try to guess the word.
        </p>
        <Word content/>
        <Letter content/>
      </div>
    );
  }
}

export default App;
