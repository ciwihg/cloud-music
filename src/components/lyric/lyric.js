import React, { Component } from 'react';
import './css/style.css'
import {Jsonp} from '../../lib/utils.js';
class Lyric extends Component{
  constructor(props){
    super(props);
    this.d=0;
    this.lyricnum=0;
    this.scrollNext=this.scrollNext.bind(this);
    this.state={
      lyrics:null,
      defaultheight:"88px"
    };
    window.lyric=this;
  }
  componentWillMount(){
    Jsonp("/lyric?id="+this.props.lyricid);
  }
  reset(){
    (this.lycontent.childNodes[this.lyricnum])&&(this.lycontent.childNodes[this.lyricnum].className="");
    this.lyricnum=0;
    this.d=0;
    this.lycontent.style.transform="translateY("+0+"px)";
    this.lycontent.childNodes[this.lyricnum].className="ly-itemon";
  }
  scrollLyric(d){
    this.lycontent.style.transform="translateY("+d+"px)";
  }
  scrollNext(){
    this.lyricnum==0||(this.d=this.d-this.lycontent.childNodes[this.lyricnum-1].offsetHeight,this.scrollLyric(this.d));
    this.lyricnum++;
    this.changeLyricon();
  }
  changeLyricon(){
    this.lycontent.childNodes[this.lyricnum-1].className="";
    this.lycontent.childNodes[this.lyricnum].className="ly-itemon";
  }
  componentDidMount(){
    //this.lycontent.childNodes[this.lyricnum].className="ly-itemon";
  }
  getNextTime(){
    if(!this.state.lyrics[this.lyricnum+1]){
      return null
    }
    return this.state.lyrics[this.lyricnum+1].time;

  }
  shouldComponentUpdate(nextProps, nextState){
    if(this.state.lyrics==nextState.lyrics&&this.props.title==nextProps.title){
      return false;
    }else{
      return true;
    }
  }
  componentDidUpdate(){
    if(this.lycontent){
      this.reset();
      var height=this.getMaxHeight();
      height>88&&this.setHeight(height+'px');
    }

  }
  updateLyrics(d){
    this.setState({
      lyrics:d
    });
  }
  setHeight(d){
    this.setState({
      defaultheight:d
    });
  }
  getMaxHeight(){
    var heightArray=Array.from(this.lycontent.childNodes).map((item)=>{return item.offsetHeight});
    return Math.max(...heightArray);
  }
  render(){
    if(this.state.lyrics){
      var lyrics=this.state.lyrics.map(function(item,index){
        return (<p key={index} >{item.lyric}</p>)
      })
    return (<div className="ly-wrap">
                <div className="ly-tl">{this.props.title}</div>
                <div className="ly-cwindow" style={{height:this.state.defaultheight}}>
                   <div className="ly-content" ref={(el)=>{this.lycontent=el;}} >
                    {lyrics}
                   </div>
                </div>
           </div>);
         }else{
           return null;
         }
  }
}

export default Lyric;
