import React, { Component } from 'react';
import './css/style.css'
class Popmask extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (<div className="pmk-wrap">
      <div className="pmk-msg-wrap">
        <p>{this.props.msg}</p>
      </div>
    </div>);
  }
}

export default Popmask;
