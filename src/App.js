import React, { Component } from 'react';
//Components
import Nav from './Components/Nav/Nav'
import './reset.css'
import './App.css';
import Schedule from './Components/Schedule/Schedule'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        It's MEDTEL!!!
          <Schedule />
      </div>
    );
  }
}

export default App;
