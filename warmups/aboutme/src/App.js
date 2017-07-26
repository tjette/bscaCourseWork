import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content} from './components';
import './components/styles.css';

const about = "Hello, my name is Travis Jette";


class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <Header title={"Hello!"} headerMsg={"Welcome to my About Me page!"} className="header" />
        <Content about={about} />
      </div>
    );
  }
}

export default App;
