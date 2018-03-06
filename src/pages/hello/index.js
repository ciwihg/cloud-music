import React, { Component } from 'react';
import Footer from '../../components/footer/footer.js';
import './css/main.css';
class page extends Component{
  constructor(props){
    super(props);
}
render(){
  return (<div>
           <h1>Hello,react!</h1>
           <Footer></Footer>
         </div>)
}
}

export default page;
