import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from './components/navbar/Navbar.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <div className="main">
        <Navbar/>
      </div>
      
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))