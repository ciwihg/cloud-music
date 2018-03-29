import React, { Component } from 'react';
import './css/style.css'
class Plinfo extends Component{
  constructor(props){
    super(props);
    this.state={
      show:false
    };
    this.handleClick=this.handleClick.bind(this);
  }
  formatDescription(d){
   console.log(d.match(/.*\n/g));
  }
  handleClick(e){
    console.log(e.target);
    this.setState({
      show:!this.state.show
    });
  }
  render(){
    var tags=this.props.datas.tags.map((item,index)=>{
      return (<span key={index}>{item}</span>);
    });
    var descriptions=this.props.datas.description.match(/.*(\n|$)/g).map((item)=>{
      return (<span>{item}<br></br></span>)
    });
    return (<div className="pli-wrap">
    <div className="pli-tags">标签：{tags}</div>
    <div className={this.state.show?"pli-descrition pli-show":"pli-descrition"}>
    简介：{descriptions}

    </div>
    <div className="pli-arr-wrap" onClick={this.handleClick}><i className={this.state.show?"pli-downarr":"pli-uparr"}></i></div>
    </div>);
  }
}

export default Plinfo;
