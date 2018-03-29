import React, { Component } from 'react';
import {Jsonp} from '../../lib/utils.js';
import './css/style.css'
class Searchbar extends Component{
  constructor(props){
    super(props);
    this.handleKeydown=this.handleKeydown.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.getData=this.getData.bind(this);
    this.handleFocus=this.handleFocus.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.settimeno=null;
    this.state={
      closeclassname:"sh-closeicon"
    }
  }
  handleKeydown(event){
    var cn="sh-closeicon sh-show";
    this.settimeno&&clearTimeout(this.settimeno);
    (event.target.value=="")&&(cn="sh-closeicon");
    this.setState({
      closeclassname:cn
    });
    this.props.parent.setState({keyword:event.target.value,mutimatch:null});
    this.settimeno=setTimeout(this.getData,800);
  }
  handleClose(){
    this.props.parent.setState({keyword:"",mutimatch:null,searchresult:null});
    this.setState({
      closeclassname:"sh-closeicon"
    });
  }
  handleFocus(){
    this.props.parent.setState({inputfocus:true,mutimatch:null,searchresult:null});
    (this.props.keyword!="")&&Jsonp("/keyword?key="+this.props.keyword+"&cb=handleKeyword");
  }
  getData(){
    (this.props.keyword!="")&&(Jsonp("/keyword?key="+this.props.keyword+"&cb=handleKeyword"))
  }
  handleSubmit(e){
      this.input.blur();
      e.preventDefault();
      Jsonp("/mutimatch?key="+this.props.keyword+"&cb=handleMutimatch");
      Jsonp("/searchget?key="+this.props.keyword+"&cb=handleSearchget&limit=20&offset=0");
      this.props.parent.setState({inputfocus:false,searchresult:null});

  }
  render(){
    return (<form className="sh-form"  method="get" onSubmit={this.handleSubmit}>

              <div className="sh-input-wrap">
                <i className="sh-icon"></i>
                <input name="key" type="search" className="search-input" ref={(el)=>{this.input=el}} value={this.props.keyword} onChange={this.handleKeydown} onFocus={this.handleFocus} placeholder="搜索歌曲、歌手、专辑" autoComplete="off" />
                <i className={this.props.keyword!=""?"sh-closeicon sh-show":"sh-closeicon"} onClick={this.handleClose}></i>
                </div>
            </form>);
  }
}

export default Searchbar;
