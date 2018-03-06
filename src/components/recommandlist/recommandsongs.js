import React, { Component } from 'react';
import './css/style.css'
class Recommandsongs extends Component{
  constructor(props){
    super(props);
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
  render(){
      var listitem1=this.props.datas[0].map((item,index)=>{
        var hq;
        if(item.highQuality){
          hq=<div className="hq-icon"></div>;
        }else{
          hq=null;
        }
        return (<li key={index}>
        <div className="si-wrap">
          <img src={item.picUrl}/>
          <p>{item.name}</p>
          {hq}
          <span className="playcount">{this.formatNumber(item.playCount)}</span>
        </div>
      </li>);})
      var listitem2=this.props.datas[1].map((item,index)=>{
        var hq;
        if(item.highQuality){
          hq=<div className="hq-icon"></div>;
        }else{
          hq=null;
        }
        return (<li key={index}>
        <div className="si-wrap">
          <img src={item.picUrl}/>
          <p>{item.name}</p>
          {hq}
          <span className="playcount">{this.formatNumber(item.playCount)}</span>
        </div>
      </li>);})
    return (<div className="rmd-songs">
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
