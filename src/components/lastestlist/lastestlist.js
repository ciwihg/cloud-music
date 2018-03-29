import React, { Component } from 'react';
import './css/style.css';
import {findhighlight} from '../../lib/utils.js';
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
    artistrow=artistrow+' - '+song.album.name;
    this.props.highlight&&(artistrow=findhighlight(artistrow,this.props.highlight));
    return artistrow;
  }
  getSongstatus(p){
    function getlevel(e) {
            if (!e)
                return 0;
            var t = e.privilege;
            if (t)
                return t.st < 0 ? 100 : t.fee > 0 && 8 != t.fee && 0 == t.payed ? 10 : 16 == t.fee ? 11 : (0 == t.fee || t.payed > 0) && t.pl > 0 && 0 == t.dl ? 1e3 : 0 == t.pl && 0 == t.dl ? 100 : 0;
            var r = e.status;
            return r ? r < 0 ? e.fee > 0 ? 10 : 100 : 0 : e.st && e.st < 0 ? e.fee > 0 ? 10 : 100 : 0
        }
        function getmodal(e) {
                e = e || {};
                var t = ""
                  , r = 0;
                return e.st == -300 ? (t = "版权方要求，该歌曲仅能通过网易云音乐APP播放",
                r = -2) : 4 == e.fee && 0 == e.pl ? (t = "购买",
                r = 2) : e.fee > 0 && 0 == e.pl ? (t = "会员",
                r = 3) : e.fee > 0 && 8 != e.fee && 32 != e.fee && e.pl <= 0 ? (t = "唱片公司要求该歌曲须付费，打开网易云音乐购买后即可自由畅享",
                r = 1) : e.pl <= 0 && (t = "由于版权保护，您所在的地区暂时无法使用",
                r = -1),
                {
                    msg: t,
                    modal: r
                }
              }
        return  getlevel(p)==100&&getmodal(p).modal!==-2;


  }
  render(){
    if(!this.props.datas){
      return null;
    }
    var listitems=this.props.datas.map((item,index)=>{
      var aliasComponent;
      if(item.song.alias.length>0){
        var alias=this.props.highlight?findhighlight(item.song.alias[0],this.props.highlight):item.song.alias[0];
        aliasComponent=(<span className="sg-alias">{'('+alias+')'}</span>);
      }else{
        aliasComponent=null;
      }
      var sqComponent;
      if(item.song.privilege.maxbr=="999000"){
        sqComponent=(<span className="sq-icon"></span>);
      }else{
        sqComponent=null;
      }
     var numPart;
     if(this.props.num){
       var cn;
       (index<=2)?(cn="sl-num hot3"):(cn="sl-num");
       var num=index+1;
       (String(num).search(/\d{2}/)==-1)&&(num="0"+num);
       numPart=(<div className={cn}>{num}</div>);
     }else{
       numPart=null;
     }
     var coverPart;
     if(this.props.cover){
       coverPart=(
          <img className="sgl-cover-wrap" src={item.song.album.picUrl}/>
       );
     }else{
       coverPart=null;
     }
      return (
        <li key={index} className={this.getSongstatus(item.song.privilege)?"item-disable":''}>
           <a href={"./#/song"+item.id}>
            <div className="songitem">
            {numPart}
            {coverPart}
            <div className="sgitem-subwrap">
             <div className="song-title"><span>{this.props.highlight?findhighlight(item.name,this.props.highlight):item.name}</span>{aliasComponent}</div>
             <div className="song-info">{this.props.sq?null:sqComponent}{this.formatArtistRow(item.song)}</div>
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
    return (
             <ul className={"ltt-music-list theme-"+this.props.theme}>
             {listitems}

             </ul>
           );
  }
}

export default Lastestlist;
