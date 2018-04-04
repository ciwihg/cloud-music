import React, { Component } from 'react';
import './css/style.css'
import {Jsonp,readCookie,writeCookie} from '../../lib/utils.js';
class Searchhistorypanel extends Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
    this.state={
      historys:readCookie()
    };
  }
  handleClick(e){
    e.stopPropagation();
    var newhistorys=this.state.historys.filter((element)=>{return element!=e.target.previousElementSibling.innerHTML});

    document.cookie="keys="+JSON.stringify(newhistorys);
    this.setState({
      historys:newhistorys
    });

  }
  handleItemClick(e){
    var keyword=e.target.tagName=="SPAN"?e.target.innerHTML:e.target.getAttribute("skey");
    Jsonp("/mutimatch?key="+keyword+"&cb=handleMutimatch");
    Jsonp("/searchget?key="+keyword+"&cb=handleSearchget&limit=20&offset=0");
    this.props.parent.setState({keyword:keyword,inputfocus:false});
  }
  render(){
    var historys=this.state.historys.map((item,index)=>{
      return <li key={index}><i className="shp-timeic"></i><div skey={item} className="shp-iteminfo" onClick={this.handleItemClick}><span>{item}</span><i className="shp-closeic" onClick={this.handleClick}></i></div></li>
    });
    return (<ul className="shp-wrap">
      {historys}
    </ul>);
  }
}

export default Searchhistorypanel;
