import React, { Component } from 'react';
import Header from '../../components/header/header.js';
import Navbar from '../../components/nav/nav.js';
import Recommandsongs from '../../components/recommandlist/recommandsongs.js';
import Lastestlist from '../../components/lastestlist/lastestlist.js';
import Footer from '../../components/footer/footer.js';
import './css/style.css';
class page extends Component{
  constructor(props){
    super(props);
}
render(){
  return (<div>
         <Recommandsongs datas={window.reactdatas.rmdlist}></Recommandsongs>
         <Lastestlist datas={window.reactdatas.sglist}></Lastestlist>
         <Footer></Footer>
       </div>)
}
}

export default page;
