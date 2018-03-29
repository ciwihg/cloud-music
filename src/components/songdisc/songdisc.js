import React, { Component } from 'react';
import './css/style.css'
class Songdisc extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div className="sgd-wrap">
             <div className={this.props.playing?"sgd-highlight":"sgd-highlight sgd-pause"}></div>
             <div className={this.props.playing?"sgd-cover-wrap sgd-cover-pause":"sgd-cover-wrap"}>
             <img  className={this.props.playing?"":"sgd-pause"} src={this.props.pic}/>
             </div>
           </div>);
  }
}

export default Songdisc;
