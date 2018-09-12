import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import logo from '../logo.svg';
import '../App.css';
import {Button} from 'antd';

class App extends Component {
  render () {
    const {todo, test} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{todo}</p>
        <Button type="primary" onClick={test}>Button</Button>
      </div>
    )
  }
}

export default hot(module)(App);
