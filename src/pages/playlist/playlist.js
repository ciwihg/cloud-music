import React, { Component } from 'react';
import './css/style.css'
import Plhead from '../../components/playlisthead/playlisthead.js'
import Plinfo from '../../components/playlistinfo/playlistinfo.js'
import Comment from '../../components/comment/comment.js'
import pltracks from '../../components/playlisttracks/playlisttracks.js';
import {Jsonp} from '../../lib/utils.js';
class Playlist extends Component{
  constructor(props){
    super(props);
    window.playlistpage=this;
    this.state={
      datas:null,
      comments:null
    }
  }
  componentWillMount(){
    Jsonp("/playlist?id="+this.props.match.params.id);
    Jsonp("/comment?id="+this.props.match.params.id+"&type=0&cb=handlePlaylistComment");
  }
  updateComments(d){
    this.setState({
      comments:d
    });
  }
  updateDatas(d){
    this.setState({
      datas:d
    });
  }
  comment(h,d){
    var capacity,
        datas,
        comment;
    capacity=15-h.length;
    d.comments.length>15?datas=d.comments.slice(0,15):datas=d.comments;
    capacity==0?datas=[]:capacity<datas.length?datas=datas.slice(0,capacity):datas=datas;
    datas.length==0?comment=null:comment=(<Comment datas={datas}></Comment>);
    function hottitle(){
      if(h.c){
      return (<h3 className="pll-tl">精彩评论</h3>);
    }else{
      return null;
    }
    }
    function newtitle(){
      if(comment){
      return (<h3 className="pll-tl">最新评论({d.total})</h3>);
    }else{
      return null;
    }
    }
    return (
      <div>
        {hottitle()}
        {h.c}
        {newtitle()}
        {comment}
      </div>
    )

  }
    hComment(d){
      var datas,comment;
      d.hotComments.length>15?datas=d.hotComments.slice(0,15):datas=d.hotComments;
      if(datas.length!=0){
        comment=(<Comment datas={datas}></Comment>);
      }else{
        comment=null;
      }
      return{
        c:comment,
        length:datas.length
      }
    }
  getAllComments(d){
    return this.comment(this.hComment(d),d);
  }
  render(){
    if(!(this.state.datas&&this.state.comments)){
      return null;
    }
    var Pltracks=pltracks();
    return (<div>
      <Plhead datas={this.state.datas.playlist}></Plhead>
      <Plinfo datas={this.state.datas.playlist}></Plinfo>
      <h3 className="pll-tl">歌曲列表</h3>
      <Pltracks datas={this.state.datas}></Pltracks>
      { this.getAllComments(this.state.comments)}
      </div>);
  }
}

export default Playlist;
