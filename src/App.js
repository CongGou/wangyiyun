import React, { Component } from 'react';
import './App.css';
import Heard from './view/Heard'
import Main from './view/Main'
export default class App extends Component{
  render() {
    return (
      <div className="App">
        <Heard />
        <Main />
      </div>
    );
  }
}

