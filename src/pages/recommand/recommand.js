import React, { Component } from 'react';
import Header from '../../components/header/header.js';
import Navbar from '../../components/nav/nav.js';
import Recommandsongs from '../../components/recommandlist/recommandsongs.js';
import Lastestlist from '../../components/lastestlist/lastestlist.js';
import Footer from '../../components/footer/footer.js';
import {Jsonp} from '../../lib/utils.js'
import './css/style.css';
class page extends Component{
  constructor(props){
    super(props);
    window.recommendpage=this;
    this.state={
      datas:null
    }
}
componentWillMount(){
  Jsonp("/getrmd");
  console.log(this.props.parent);
}
render(){
  if(!this.state.datas){ return null;}
  return (<div>
         <Recommandsongs datas={this.state.datas.rmdlist}></Recommandsongs>
         <div className="lastest-music">
         <h2 className="rmd-songs-title">最新音乐</h2>
         <Lastestlist datas={this.state.datas.sglist} num={false}></Lastestlist>
         </div>
         <Footer></Footer>
       </div>)
}
}

export default page;
