import React, { Component, Fragment } from 'react';
import Main from '../Main/Main.jsx';
import Nav from '../Nav/Nav.jsx';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div>
          <Nav />
        </div>
        <div>
          <Main />
        </div>
      </div>
    );
  }
}
