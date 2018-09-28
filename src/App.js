import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="App-header-nav">Getting Started</a>
            <a className="App-header-nav">Showcase</a>
            <a className="App-header-nav">Demos</a>
            <a className="App-header-nav">Documentation</a>
          </div>
        </header>
        <p className="App-intro">
          Native Media Engine: A proven backend for native iOS, Android, Windows, Mac and Linux
        </p>
      </div>
    );
  }
}

export default App;
