import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link,Redirect} from 'react-router-dom';
import {formatDuration,serverAvailable} from './src/lib/utils';
import createHistory from "history/createHashHistory";
import Popmask from './src/components/popmask/popmask.js';
import './src/common/css/app.scss'
import Loadable from 'react-loadable';
const App=Loadable({
  loader: () => import('./app.js'),
  loading() {
    return <div>Loading...</div>
  }
});
const Playlist=Loadable({
  loader: () => import('./src/pages/playlist/playlist.js'),
  loading() {
    return <div>Loading...</div>
  }
});
const Songpage=Loadable({
  loader: () => import('./src/pages/song/song.js'),
  loading() {
    return <div>Loading...</div>
  }
});
/*import App from './app.js';
import Playlist from './src/pages/playlist/playlist.js';
import Songpage from './src/pages/song/song.js';*/
window.reactpages={};
window.scripts=[];
window.handleSearchget=function(data){
   if(!data.result.songs) {window.searchpage.finish=true;window.searchpage.setState({loading:false}); return;}
  if(window.searchpage.state.searchresult){
    var songs=window.searchpage.state.searchresult.result.songs.concat(data.result.songs);
    window.searchpage.state.searchresult.result.songs=songs;
    window.searchpage.getSearch(window.searchpage.state.searchresult);
  }else{
    window.searchpage.getSearch(data);
  }
document.body.removeChild(  window.scripts.pop());
}
window.handleMutimatch=function(data){

  window.searchpage.getBtmatch(data)
  document.body.removeChild(  window.scripts.pop());
}
window.handleKeyword=function (data) {
  window.searchpage.getSuggestdata(data.result.allMatch);
  document.body.removeChild(  window.scripts.pop());
}
window.handlePlaylist=function(data){
  window.playlistpage.updateDatas(data);
  document.body.removeChild(  window.scripts.pop());
}
window.handleSimiplaylist=function(data){
  window.songpage.updateSimiplaylist(data.playlists);
  document.body.removeChild(  window.scripts.pop());
}
window.handleSimisong=function(data){
  window.songpage.updateSimisongs(data);
  document.body.removeChild(  window.scripts.pop());
}
window.handlePlaylistComment=function(data){

  window.playlistpage.updateComments(data);
  document.body.removeChild(  window.scripts.pop());
}
window.handleComment=function(data){
  window.songpage.updateComments(data);
  document.body.removeChild(  window.scripts.pop());
}
window.handleLyric=function(data){
  var lyrics=[]
  var result=data.lrc.lyric.match(/\[([^\n]+)\n/g);
  result.forEach(function(cvalue,cindex,array){
    var temp=cvalue.match(/\[[^\[\]]+\]/g);
    var content=cvalue.match(/\[.+\]((.|\n)+)/)[1];
       for(var i=0;i<temp.length;i++){
         var obj={
           time:formatDuration(temp[i]),
           lyric:content
         };
         lyrics.push(obj);
       }
  });
  lyrics.sort((a,b)=>{return a.time-b.time});
   var filtered=lyrics.filter((item)=>{
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
window.getListData=function(data){
  window.hotpage.setState({
    datas:data
  });
  document.body.removeChild(  window.scripts.pop());
}
window.getHotsearchdata=function(data){
  window.searchpage.setState(
    {
      hotpdatas:data.result.hots
    }
  );
  document.body.removeChild(  window.scripts.pop());
}
window.reredener=function (data,newsongs){
  window.reactdatas={};
  window.recommendpage&&window.recommendpage.setState({
    datas:{
      rmdlist:data.HomeRecommend.data._list,
      sglist:newsongs.result
    }
  });
  window.recommendpage&&document.body.removeChild(  window.scripts.pop());
}
serverAvailable(renderApp,renderError);
function renderApp(){
  ReactDom.render(<HashRouter>
    <div>
    <Route exact path="/" render={()=>{ return (<Redirect to="/home/rmd"/>)}}/>
    <Route path="/home" component={App}/>
    <Route exact path="/playlist:id" component={Playlist}/>
    <Route exact path="/song:id" component={Songpage}/>
    </div>
    </HashRouter>
    , document.querySelector("#app"));
}
function renderApp(){
  ReactDom.render(<HashRouter>
    <div>
    <Route exact path="/" render={()=>{ return (<Redirect to="/home/rmd"/>)}}/>
    <Route path="/home" component={App}/>
    <Route exact path="/playlist:id" component={Playlist}/>
    <Route exact path="/song:id" component={Songpage}/>
    </div>
    </HashRouter>
    , document.querySelector("#app"));
}
function renderError(){
  ReactDom.render(<Popmask msg="服务器没开启，请联系作者Ciwi开启后再尝试访问"></Popmask>
    , document.querySelector("#app"));
}
