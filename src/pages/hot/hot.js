import React, { Component } from 'react';
import Hotsglogo from '../../components/hotsglogo/hotsglogo.js';
import  lastestsglist from '../../components/lastestsglist/lastestsglist.js';
import {Jsonp} from '../../lib/utils.js'
import './css/style.css';
class page extends Component{
  constructor(props){
    super(props);
    window.hotpage=this;
    this.state={
      datas:null
    }
}

componentWillMount(){
    Jsonp("/testapi");
}

render(){
  var Hotsglist=lastestsglist();
  if(!this.state.datas) {return null;}
  return (<div className="hotsg-wrap">
        <Hotsglogo time={this.state.datas.playlist.updateTime}></Hotsglogo>
        <Hotsglist datas={this.state.datas} num={true}></Hotsglist>
       </div>)
}
}

export default page;
