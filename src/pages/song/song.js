import React, { Component } from 'react';
import {Jsonp} from '../../lib/utils.js';
import './css/style.css'
import Songdisc from '../../components/songdisc/songdisc.js'
import Lyric from '../../components/lyric/lyric.js'
import Comment from '../../components/comment/comment.js'
import Popmask from '../../components/popmask/popmask.js'
import Simiplaylist from '../../components/simiplaylist/simiplaylist.js'
import _simisong from '../../components/simisonglist/simisonglist.js'
import ReactPlayer from 'react-player'
class Songpage extends Component{
  constructor(props){
    super(props);
    this.state={
      datas:null,
      url:null,
      playing:false,
      comments:null,
      simiplaylist:null,
      simisong:null,
      loading:true
    };
    this.loglyric=this.loglyric.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.playEnd=this.playEnd.bind(this);
    window.songpage=this;
  }
  componentWillReceiveProps(nextProps){
    Jsonp("/song?id="+nextProps.match.params.id);
    Jsonp("/lyric?id="+nextProps.match.params.id);
    Jsonp("/songurl?id="+nextProps.match.params.id);
    Jsonp("/comment?id="+nextProps.match.params.id+"&type=4&cb=handleComment");
    Jsonp("/simiplaylist?id="+nextProps.match.params.id);
    Jsonp("/simisong?id="+nextProps.match.params.id);
    this.setState({
      loading:true,
      playing:false
    });
    window.scrollTo( 0, 0 );

  }
  componentWillMount(){
     Jsonp("/song?id="+this.props.match.params.id);
     Jsonp("/songurl?id="+this.props.match.params.id);
     Jsonp("/comment?id="+this.props.match.params.id+"&type=4&cb=handleComment");
     Jsonp("/simiplaylist?id="+this.props.match.params.id);
     Jsonp("/simisong?id="+this.props.match.params.id);
  }
  setTitle(){
    document.querySelector("title").innerHTML="Cmusic-"+this.state.datas.Song.name;
  }
  updateDatas(data){
    this.setState({
      datas:data
    });
   this.setTitle();
  }
  updateUrl(data){
    this.setState({
      url:data
    });

  }
  updateComments(data){
    this.setState({
      comments:data
    });
  }
  updateSimiplaylist(data){
    this.setState({
      simiplaylist:data
    });
  }
  updateSimisongs(data){
    this.setState({
      simisong:data
    });
  }
  playEnd(){
    window.lyric.reset();
    this.pause();
  }
  playing(){
    this.setState({
      playing:true
    });
  }
  pause(){
    this.setState({
      playing:false
    });
  }
  loglyric(){
  //  this.playing();
  this.setState({
    loading:false
  });
    function runlyric(){
      if(!this.player||!this.lyric.getNextTime())
      {
           clearInterval(this.intervalno);
           return;
      }
      (this.player.getCurrentTime()-this.lyric.getNextTime()>0)&&this.lyric.scrollNext()
    }
    runlyric=runlyric.bind(this);
    this.intervalno=setInterval(runlyric,200);
  }
  componentDidUpdate(){

  }
  handleClick(event){
    this.state.playing?this.pause():this.playing();
  }
  simiplaylist(){
    if(this.state.simiplaylist){
      var title;
      this.state.simiplaylist.length>0?(title=(<h2 style={{marginTop:"90px",marginBottom:"12px"}} className="rmd-songs-title cwhite">包含这首歌的歌单</h2>)):(title=null);
      return (<div>{title}<Simiplaylist datas={this.state.simiplaylist}></Simiplaylist></div>)
    }else{
      return null;
    }
  }
  simisong(){
    if(this.state.simisong&&this.state.simisong.songs.length>0)
    {
      var Simis=_simisong();
      return (<div style={{paddingTop:"10px"}}><h2 className="rmd-songs-title cwhite" style={{marginBottom:"10px"}}>喜欢这首歌的人也听</h2>
                 <Simis datas={this.state.simisong} cover={true}></Simis></div>);
    }else{
      return null;
    }


  }
  comments(){
    var comments=[];
    if(this.state.comments.hotComments.length>=10){
      var temp=(<div><h2 className="rmd-songs-title cwhite">精彩评论</h2><Comment theme="black" datas={this.state.comments.hotComments.slice(0,10)}></Comment></div>);
      return temp;
    }else{
      if(this.state.comments.hotComments.length==0){
      var temp=(<div><h2 className="rmd-songs-title cwhite">最新评论({this.state.comments.total})</h2>
      <Comment theme="black" datas={this.state.comments.comments.length>10?this.state.comments.comments.slice(0,10):this.state.comments.comments}></Comment></div>);
      return temp;
    }else{
      var hot=(<div key="c1"><h2 className="rmd-songs-title cwhite">精彩评论</h2>
      <Comment theme="black" datas={this.state.comments.hotComments}></Comment></div>);
      comments.push(hot);
      var latest=(<div key="c2"><h2 className="rmd-songs-title cwhite">最新评论({this.state.comments.total})</h2>
      <Comment theme="black" datas={this.state.comments.comments.slice(0,10-this.state.comments.hotComments.length)}></Comment></div>);
      comments.push(latest);
      return comments;
     }
    }
  }
  render(){
    if(this.state.datas&&this.state.comments){
    return (<div className="sg-wrap">
               <div className="sg-bg" style={{backgroundImage:"url("+this.state.datas.Song.bgpic+")"}}></div>
                 <div className="sg-content-wrap" onClick={this.handleClick}>
                 <Songdisc pic={this.state.datas.Song.al.picUrl} playing={this.state.playing}></Songdisc>
                 <Lyric   ref={(el)=>{this.lyric=el;}} title={this.state.datas.Song.name+" - "+this.state.datas.Song.ar[0].name} lyricid={this.state.datas.Song.id}></Lyric>
                 </div>
                 {this.simiplaylist()}
                 {this.simisong()}
               {this.comments()}
               <ReactPlayer url={this.state.url} width='0px'
          height="0px" playing={this.state.playing} ref={(p)=>{this.player=p;}} onReady={this.loglyric} onEnded={this.playEnd}></ReactPlayer>
          {this.state.loading?(<Popmask msg={"歌曲努力加载中，请稍后"}></Popmask>):null}
            </div>);
          }else{
            return null;
          }
  }
}

export default Songpage;
