import React, { Component } from 'react';
import Hotsglogo from '../../components/hotsglogo/hotsglogo.js';
import './css/style.css';
class page extends Component{
  constructor(props){
    super(props);
}
render(){
  return (<div className="hotsg-wrap">
        <Hotsglogo></Hotsglogo>
       </div>)
}
}

export default page;
