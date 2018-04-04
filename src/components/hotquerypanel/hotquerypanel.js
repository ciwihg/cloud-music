import React, { Component } from 'react';
import './css/style.css'
import {Jsonp,writeCookie} from '../../lib/utils.js';
class Hotquerypanel extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
      Jsonp("/mutimatch?key="+e.target.innerHTML+"&cb=handleMutimatch");
      Jsonp("/searchget?key="+e.target.innerHTML+"&cb=handleSearchget&limit=20&offset=0");
      this.props.parent.setState({keyword:e.target.innerHTML,inputfocus:false});
      writeCookie(e.target.innerHTML);
  }
  render(){
    if(this.props.datas){
      var items=this.props.datas.map((item,index)=>{
        return ( <li key={index} onClick={this.handleClick}>{item.first}</li>);
      });
      return (<div className="hotquery-wrap">
                 <h3>热门搜索</h3>
                 <ul className="hotquery-ul">
                   {items}
                 </ul>
             </div>);
    }else{
      return null;
    }

  }
}

export default Hotquerypanel;
