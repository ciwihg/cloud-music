import React, { Component } from 'react';
import './css/style.css'
class Songlist extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div className="test-style">
      <ul className="ltt-music-list">
    <li >
       <a href="http://music.163.com/m/song?id=">
        <div className="songitem">
        <div className="sl-num">01</div>
        <div className="sgitem-subwrap">
         <div className="song-title"><span>空空如也</span></div>
         <div className="song-info">任然-空空如也</div>
         </div>
         <div className="sg-play-btn">
         <span>
         </span>
         </div>
        </div>
       </a>
    </li>
    </ul>
  </div>);
  }
}

export default Songlist;
