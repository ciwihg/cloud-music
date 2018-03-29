import React, { Component } from 'react';
import './css/style.css'
import {Jsonp,getUserType} from '../../lib/utils.js';
class Comment extends Component{
  constructor(props){
    super(props);
   //this.formatPublishTime();
  }
  componentWillMount(){

  }
  format0(d){
    var s="0"+d;
    return s.substr(-2);
  }
  formatPublishTime(time){
    var now=new Date();
    var ptime=new Date(time);
    var timegap=now-ptime;
    var nday=now.getFullYear()+"年"+(now.getMonth()+1)+"月"+now.getDate()+"日";
    var pday=ptime.getFullYear()+"年"+(ptime.getMonth()+1)+"月"+ptime.getDate()+"日";
    var pday1d_after=now.getFullYear()+"年"+(now.getMonth()+1)+"月"+(now.getDate()+1)+"日";
    var formatedtime;
    switch(true){
      case (timegap/1000)<60:formatedtime="刚刚";break;
      case (timegap/1000/60)<60:formatedtime=parseInt(timegap/1000/60)+"分钟前";break;
      case (pday==nday):formatedtime=this.format0(ptime.getHours())+":"+this.format0(ptime.getMinutes());break;
      case (pday1d_after==nday):formatedtime="昨天"+ptime.getHours()+":"+ptime.getMinutes();break;
      default:formatedtime=pday;
    }
    return formatedtime;
  }
  updateComments(d){
    this.setState({
      hotcomments:d.hotComments
    })
  }
  render(){
    if(this.props.datas){
      var that=this;
    var comments=this.props.datas.map((item,index)=>{
       var content=item.content;

      if(item.beReplied.length==1)
      {   var repliycontent;
        item.beReplied[0].content?repliycontent="@"+item.beReplied[0].user.nickname+"："+item.beReplied[0].content:repliycontent="该评论已删除";
        var replied=(
          <div className="plc-repli-wrap">
            {repliycontent}
          </div>
        );
        (that.props.theme!="black")&&(content=(<span>回复<span className="plc-ubeat">@{item.beReplied[0].user.nickname}</span>{"："+item.content}</span>))
      }else{
        var replied=null
      }
      var templi=(
        <li className="plc-item" key={index}>
        <div style={{display:"flex"}}>
        <div className="plc-uimg-wrap"><img src={item.user.avatarUrl}/><i className={"plh-u-icon plh-u-"+getUserType(item.user)}></i></div>
        <div className="plc-utl">
           <span className="plc-unickname">{item.user.nickname}</span>
           <div className="plc-uptime">{that.formatPublishTime(item.time)}</div>
           <div className="plc-ulike-wrap">
           {item.likedCount}
           <i className="plc-ulike">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28"><path fill="#999" d="m25.857 14.752c-.015.059-1.506 5.867-2.932 8.813-1.162 2.402-3 2.436-3.099 2.436h-12.826v-13c3 0 5.728-4 5.728-7.275 0-3.725 1.433-3.725 2.142-3.725 1.327 0 1.978 1.345 1.978 4 0 2.872-.832 4.525-.839 4.537-.161.31-.155.682.027.981.181.299.5.482.849.482h6.942c.922 0 1.551.215 1.866.64.467.626.286 1.705.164 2.112m-23.857 10.248v-10c0-1.795.659-1.981.855-2h2.145v13h-2.173c-.829 0-.827-.648-.827-1m25.309-13.54c-.713-.969-1.886-1.46-3.482-1.46h-5.519c.26-.932.519-2.285.519-4 0-5.221-2.507-6-4-6-1.909 0-4.185.993-4.185 5.725 0 2.206-1.923 5.275-3.815 5.275h-4-.011c-1.034.011-2.816.862-2.816 4v10.02c0 1.198.675 2.979 2.827 2.979h16.971.035c.364 0 3.224-.113 4.894-3.564 1.514-3.127 3.01-8.942 3.056-9.14.071-.23.664-2.289-.474-3.836"></path></svg>
           </i>
           </div>
        </div>
        </div>
        <p className="plc-cc">
        {content}
        </p>
        {replied}
        </li>
      );
      return templi;

    });

    return (<ul className={this.props.theme=="black"?"plc-ul cblack":"plc-ul"}>
    {comments}
    </ul>);
  }else{
    return null;
  }
  }
}

export default Comment;
