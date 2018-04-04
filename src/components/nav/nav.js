import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createHistory from "history/createHashHistory"
import './css/style.scss';
class Navbar extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.history=createHistory();
  }
  getSpanItem(target){
     if(target.tagName=="SPAN"){
       return target;
     }else{
       return target.firstElementChild;
     }
  }
  componentWillReceiveProps(nextProps){

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
  getHotsgData(){
    var script = document.createElement("script");
    script.src = "http://localhost:5050/testapi";
    document.body.insertBefore(script, document.body.firstChild);
  }
  render(){

    return (<div className="nav-wrap">
              <ul className="navbar" onClick={this.handleClick}>
              <li><span dataslink="/home/rmd" className={this.props.page=="/home/rmd"?"nav-item-on":''} ref={(el)=>{(this.props.page=="/home/rmd")&&(this.activeItem=el);}}>推荐音乐</span></li>
              <li><span dataslink="/home/hotsg" className={this.props.page=="/home/hotsg"?"nav-item-on":''} ref={(el)=>{(this.props.page=="/home/hotsg")&&(this.activeItem=el);}}>热歌榜</span></li>
              <li><span dataslink="/home/search" className={this.props.page=="/home/search"?"nav-item-on":''} ref={(el)=>{(this.props.page=="/home/search")&&(this.activeItem=el);}}>搜索</span></li>
              </ul>
            </div>);
  }
}

export default Navbar;
