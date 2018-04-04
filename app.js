import React, { Component } from 'react';
import Header from './src/components/header/header.js';
import Navbar from './src/components/nav/nav.js';
import {Route, Link} from 'react-router-dom';
import Loadable from 'react-loadable';
const Recommand=Loadable({
  loader: () => import('./src/pages/recommand/recommand.js'),
  loading() {
    return <div>Loading...</div>
  }
});
const Hot=Loadable({
  loader: () => import('./src/pages/hot/hot.js'),
  loading() {
    return <div>Loading...</div>
  }
});
const Search=Loadable({
  loader: () => import('./src/pages/search/search.js'),
  loading() {
    return <div>Loading...</div>
  }
});
/*import Recommand from './src/pages/recommand/recommand.js';
import Hot from './src/pages/hot/hot.js';
import Search from './src/pages/search/search.js';*/
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <Header></Header>
      <Navbar page={this.props.location.pathname}></Navbar>
      <Route exact path='/home/rmd'   component={Recommand}/>
      <Route exact path='/home/hotsg' component={Hot}/>
      <Route exact path='/home/search' component={Search}/>
      </div>
    );
  }
}

export default App;
