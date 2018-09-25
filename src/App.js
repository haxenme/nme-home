import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NME</h1>
        </header>
        <p className="App-intro">
          Native Media Engine: A proven backend for native iOS, Android, Windows, Mac and Linux
        </p>
      </div>
    );
  }
}

export default App;
