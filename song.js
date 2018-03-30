import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link,Redirect} from 'react-router-dom';
import {handleSae} from './src/lib/utils';
import createHistory from "history/createHashHistory";
import './src/common/css/app.css';
import Songpage from './src/pages/song/song.js';
window.scripts=[];
window.handleSimiplaylist=function(data){
  window.songpage.updateSimiplaylist(data.playlists);
  document.body.removeChild(  window.scripts.pop());
}
window.handleSimisong=function(data){
  window.songpage.updateSimisongs(data);
  document.body.removeChild(  window.scripts.pop());
}

window.handleComment=function(data){
  window.songpage.updateComments(data);
  document.body.removeChild(  window.scripts.pop());
}
window.handleLyric=function(data){
  //console.log(data);
  var result=data.lrc.lyric.match(/\[([^\[]+)/g);
  result.forEach(function(cvalue,cindex,array){
    var temp=cvalue.match(/\[(.+)\]((.|\n)+)/);
    temp?(array[cindex]={
      time:temp[1],
      lyric:temp[2]
   }):(array[cindex]={
      editor:cvalue
    });
  });
   var filtered=result.filter((item)=>{
    return item.lyric!='\n';
  })
   window.lyric.updateLyrics(filtered);
   document.body.removeChild(  window.scripts.pop());
}
window.handleUrl=function(data){
  window.songpage.updateUrl(data.data[0].url);
  document.body.removeChild(  window.scripts.pop());
}
window.handleSongdata=function(data){
  window.songpage.updateDatas(data);
  document.body.removeChild(  window.scripts.pop());
}

ReactDom.render(<HashRouter>
  <div>
  <Route exact path="/song:id" component={Songpage}/>
  </div>
  </HashRouter>
  , document.querySelector("#app"));
