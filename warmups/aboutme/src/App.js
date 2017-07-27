import React, { Component } from 'react';
import './App.css';
import {NavBar, Header, Content, Contact} from './components';
import './components/styles.css';

const about = "Hello, my name is Travis Jette";
const info = {
  name: "Travis Jette",
  phone: "406-111-2222",
  email: "travisjette@gmail.com"
}

class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <NavBar />
        <Header title={"Hello!"} headerMsg={"Welcome to my About Me page!"} className="header" />
        <Content about={about} />
        <Contact info={info}/>
      </div>
    );
  }
}

export default App;
