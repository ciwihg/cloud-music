import React, { Component } from 'react';
import './css/style.css'
class Lastestlist extends Component{
  constructor(props){
    super(props);
  }
  formatArtistRow(song){
    var artistrow=song.artists[0].name;
    if(song.artists.length>1){
      for (var i = 1; i < song.artists.length; i++) {
        artistrow=artistrow+" / "+song.artists[i].name;
      }
    }
    artistrow=artistrow+'-'+song.album.name;
    return artistrow;
  }
  render(){
    var listitems=this.props.datas.map((item,index)=>{
      var aliasComponent;
      if(item.song.alias.length>0){
        aliasComponent=(<span className="sg-alias">{'('+item.song.alias[0]+')'}</span>);
      }else{
        aliasComponent=null;
      }
      var sqComponent;
      if(item.song.privilege.maxbr=="999000"){
        sqComponent=(<span className="sq-icon"></span>);
      }else{
        sqComponent=null;
      }

      return (
        <li key={index}>
           <a href={"http://music.163.com/m/song?id="+item.id}>
            <div className="songitem">
            <div className="sgitem-subwrap">
             <div className="song-title"><span>{item.name}</span>{aliasComponent}</div>
             <div className="song-info">{sqComponent}{this.formatArtistRow(item.song)}</div>
             </div>
             <div className="sg-play-btn">
             <span>
             </span>
             </div>
            </div>
           </a>
        </li>
      );
    });
    return (<div className="lastest-music">
             <h2 className="rmd-songs-title">最新音乐</h2>
             <ul className="ltt-music-list">
             {listitems}

             </ul>
           </div>);
  }
}

export default Lastestlist;
