import React, { Component } from 'react';
import './css/style.css'
class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div className="header">网易云音乐</div>);
  }
}

export default Header;
