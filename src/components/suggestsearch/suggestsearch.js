import React, { Component } from 'react';
import './css/style.css'
import {Jsonp,writeCookie} from '../../lib/utils.js';
class Suggestsearch extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(event){
    var itemid=event.target.getAttribute("data-id")
    Jsonp("/mutimatch?key="+this.props.suggestdata[itemid].keyword+"&cb=handleMutimatch");
    Jsonp("/searchget?key="+this.props.suggestdata[itemid].keyword+"&cb=handleSearchget&limit=20&offset=0");
    this.props.parent.setState({keyword:this.props.suggestdata[itemid].keyword,inputfocus:false,searchresult:null});
    writeCookie(this.props.suggestdata[itemid].keyword);
  }
  render(){
    if(this.props.keyword==''){
      return null
    }else{
      var suggestitems;
      if(this.props.suggestdata){
       suggestitems=this.props.suggestdata.map((item,index)=>{
        return (
          <li key={index} data-id={index} onClick={this.handleClick}>
          <i className="sgs-sicon" data-id={index}></i>
          {item.keyword}
          </li>
        )
      });
    }else{
       suggestitems=null;
    }
    return (<div className="sgs-wrap">
    <h1 className="sgs-tl">{'搜索“'+this.props.keyword+'”'}</h1>
    <ul className="sgs-ul">
      {suggestitems}
    </ul>
            </div>);
          }
  }
}

export default Suggestsearch;
