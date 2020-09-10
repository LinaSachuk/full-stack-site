import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }

}

export default App;
