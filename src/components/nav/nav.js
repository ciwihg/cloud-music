import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createHistory from "history/createHashHistory"
import './css/style.css';
class Navbar extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.history=createHistory();
    console.log('c');
  }
  getSpanItem(target){
     if(target.tagName=="SPAN"){
       return target;
     }else{
       return target.firstElementChild;
     }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  shouldComponentUpdate(){
    return false
  }

  handleClick(event){
    this.activeItem.className="";
    this.activeItem=this.getSpanItem(event.target);
    this.activeItem.className="nav-item-on";
    this.history.push(this.activeItem.getAttribute('dataslink'));
  }
  render(){
    return (<div className="nav-wrap">
              <ul className="navbar" onClick={this.handleClick}>
              <li><span dataslink="/" className="nav-item-on" ref={(el)=>{this.activeItem=el;}}>推荐音乐</span></li>
              <li><span dataslink="/hotsg">热歌榜</span></li>
              <li><span dataslink="/search">搜索</span></li>
              </ul>
            </div>);
  }
}

export default Navbar;
