import React, { Component } from 'react';
import './css/style.css'
import {formatNumber,getUserType} from '../../lib/utils'
class Plhead extends Component{
  constructor(props){
    super(props);
  }
  render(){
    var coverimg=this.props.datas.coverImgId_str||this.props.datas.coverImgId;
    return (<div className="plh-wrap">
         <div className="plh-bg" style={{backgroundImage:"url(http://music.163.com/api/img/blur/"+coverimg+")"}}></div>
        <div className="plh-img-wrap">
          <img src={this.props.datas.coverImgUrl}/>
          <span className="plh-plicon">{this.props.datas.highQuality?"精品歌单":"歌单"}</span>
          <i className="plh-listen">{formatNumber(this.props.datas.playCount)}</i>
        </div>
        <div className="plh-info">
        <h1 className="plh-tl">{this.props.datas.name}</h1>
        <div className="plh-uinfo">
          <div className="plh-uimg-wrap">
           <img src={this.props.datas.creator.avatarUrl}/>
           <i className={"plh-u-icon plh-u-"+getUserType(this.props.datas.creator)}></i>
          </div>
          <span>{this.props.datas.creator.nickname}</span>
        </div>
        </div>
      </div>);
  }
}

export default Plhead;
