import React, { Component } from 'react';
import Header from './src/components/header/header.js';
import Navbar from './src/components/nav/nav.js';
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Header></Header>
      <Navbar></Navbar>
      {this.props.children}
      </div>
    );
  }
}

export default App;
