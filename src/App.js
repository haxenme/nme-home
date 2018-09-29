import React, {Component} from 'react';

import './App.css';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <p className="App-Content">
          Native Media Engine: A proven backend for native iOS, Android, Windows, Mac and Linux
        </p>
      </div>
    );
  }
}

export default App;
