import React, { Component } from 'react';
import './css/style.css'
class Hotsglogo extends Component{
  constructor(props){
    super(props);
  }
  formatDate(){
    if(this.props.time=='0'){
      return '';
    }
    var udtime=new Date(this.props.time);
    var month=String(udtime.getMonth()+1),
        day=String(udtime.getDate());
      (month.search(/\d{2}/)==-1)&&(month="0"+month);
      (day.search(/\d{2}/)==-1)&&(day="0"+day)
      return month+'月'+day+'日';
  }
  render(){
    this.formatDate();
    return (<div className="hotlogo-wrap">
             <div className="hotlogo">
                 <div className="hl-bg"></div>
                 <span className="hl-utime">更新日期：{this.formatDate()}</span>
             </div>
            </div>);
  }
}

export default Hotsglogo;
