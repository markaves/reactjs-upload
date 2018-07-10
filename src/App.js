import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Upload from './components/Upload';
import Heading from './components/Heading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Upload />
        
      </div>
    );
  }
}

export default App;
