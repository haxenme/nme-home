import React, {Component} from 'react';

import './App.css';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navigation />
        <div className="App-Content">
          <Route exact={true} path="/" render={() => (
            <p>Native Media Engine: A proven backend for native iOS, Android, Windows, Mac and Linux</p>
          )} />
          <Route path="/getting_started" render={() => (
            <p>Getting started</p>
          )} />
          <Route path="/showcase" render={() => (
            <p>Showcase!</p>
          )} />
          <Route path="/demos" render={() => (
            <p>Demos!</p>
          )} />
          <Route path="/documentation" render={() => (
            <p>Documentation!</p>
          )} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
