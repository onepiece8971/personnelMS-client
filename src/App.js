import React from 'react';
import { hot } from 'react-hot-loader';
import logo from './logo.svg';
import './App.css';
import {Button, Icon, Row, Col} from 'antd';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <p className="App-intro">fuck,test</p>
    <Button type="primary">Button</Button>
    <p className="App-intro">
      <Icon type="step-backward" />
      <Icon type="lock" />
    </p>
    <div>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </div>
  </div>
);

export default hot(module)(App);
