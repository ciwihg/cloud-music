import React, { Component } from 'react';
import createHistory from "history/createHashHistory"
import './css/style.css'
class Recommandsongs extends Component{
  constructor(props){
    super(props);
    this.history=createHistory();
    this.hanleClick=this.hanleClick.bind(this);
  }
  formatNumber(n){
    var num=n/10000;
    if(n>1){
      num=String(num);
      return Number(num.match(/\d+\.\d/)[0])+'万';
    }else{
      return n;
    }

  }
  hanleClick(e){
    var id=e.target.parentNode.getAttribute("linkid")||e.target.getAttribute("linkid");
    if(id){
      this.history.push("/playlist"+id);
    }
  }
  render(){
      var listitem1=this.props.datas[0].map((item,index)=>{
        var hq;
        if(item.highQuality){
          hq=<div className="hq-icon"></div>;
        }else{
          hq=null;
        }
        return (<li key={index} >
          <a href="javascript:;">
        <div className="si-wrap" linkid={item.id}>
          <img src={item.picUrl}/>
          <p>{item.name}</p>
          {hq}
          <span className="playcount">{this.formatNumber(item.playCount)}</span>
        </div>
        </a>
      </li>);})
      var listitem2=this.props.datas[1].map((item,index)=>{
        var hq;
        if(item.highQuality){
          hq=<div className="hq-icon"></div>;
        }else{
          hq=null;
        }
        return (<li key={index}>
          <a href="javascript:;">
        <div className="si-wrap" linkid={item.id}>
          <img src={item.picUrl}/>
          <p>{item.name}</p>
          {hq}
          <span className="playcount">{this.formatNumber(item.playCount)}</span>
        </div>
        </a>
      </li>);})
    return (<div className="rmd-songs" onClick={this.hanleClick}>
    <h2 className="rmd-songs-title">推荐歌单</h2>
    <ul className="rmd-songs-ul">
      {listitem1}
    </ul>
    <ul className="rmd-songs-ul">
     {listitem2}
    </ul>
    </div>);
  }
}

export default Recommandsongs;
