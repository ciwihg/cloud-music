import React, { Component } from 'react';
import './css/style.css'
class Btmatch extends Component{
  constructor(props){
    super(props);
  }
  radioItem(d,k){
    return (
      <li key={k}>
         <div className="btmatch-it-ar">
         <div className="btmatch-ar-img-wrap">
           <img src={d[0].picUrl} />
         </div>
         <div className="btmatch-it-info">
           <span className="btmatch-it-tl">主播电台: {d[0].name}</span>
         </div>
         <i className="btmatch-arr"></i>
         </div>
      </li>
    )
  }
  artistItem(d,k){
    return (
      <li key={k}>
         <div className="btmatch-it-ar">
         <div className="btmatch-ar-img-wrap">
           <img src={d[0].picUrl} />
         </div>
         <div className="btmatch-it-info">
           <span className="btmatch-it-tl">歌手: {d[0].name}</span>
         </div>
         <i className="btmatch-arr"></i>
         </div>
      </li>
    )
  }
  albumItem(d,k){
    return (
      <li key={k}>
          <div className="btmatch-it-al">
          <div className="btmatch-al-img-wrap">
           <img src={d[0].picUrl} />
          </div>
          <div className="btmatch-it-info btmatch-it-dbinfo">
            <span className="btmatch-it-tl dline">专辑:{d[0].name}</span>
            <div className="btmatch-it-arn"><span>{d[0].artist.name}</span></div>
          </div>
          <i className="btmatch-arr"></i>
          </div>
      </li>
    )
  }
  mvItem(d,k){
    return (
      <li key={k}>
          <div className="btmatch-it-mv">
          <div className="btmatch-mv-img-wrap">
           <img src={d[0].cover} />
           </div>
          <div className="btmatch-it-info btmatch-it-dbinfo">
            <span className="btmatch-it-tl dline">MV:{d[0].name}</span>
            <div className="btmatch-it-arn"><span>{d[0].artistName}</span></div>
          </div>
          <i className="btmatch-arr"></i>
          </div>
      </li>
    )
  }
  render(){
    var that=this;
    var items=this.props.datas.orders.map((item,index)=>{
      var element;
      switch(item){
        case "artist":element=that.artistItem(that.props.datas[item],index);break;
        case "album":element=that.albumItem(that.props.datas[item],index);break;
        case "mv":element=that.mvItem(that.props.datas[item],index);break;
        case "radio":element=that.radioItem(that.props.datas[item],index);break;
        default:element=null;
      }
    return  element;
  });
    return (<div className="btmatch-wrap">
    <h3 className="btmatch-tl">最佳匹配</h3>
    <ul className="btmatch-ul">
    {items}
    </ul>
    </div>);
  }
}

export default Btmatch;
