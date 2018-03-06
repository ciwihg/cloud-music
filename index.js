import React from 'react';
import ReactDom from 'react-dom';
import App from './app.js';
import { HashRouter, Route, Link} from 'react-router-dom';
import Recommand from './src/pages/recommand/recommand.js';
import createHistory from "history/createBrowserHistory"
import Hot from './src/pages/hot/hot.js';

window.reredener=function (data,newsongs){
  console.log(data);
  window.reactdatas={};
  window.reactdatas.rmdlist=data.HomeRecommend.data._list;
  window.reactdatas.sglist=newsongs.result;
  render();
}
 function render(){
   var history=createHistory();
   ReactDom.render(<HashRouter>
     <App>
     <Route exact path="/" component={Recommand}/>
      <Route exact path="/hotsg" component={Hot}/>
     </App>
     </HashRouter>
     , document.querySelector("#app"));
 }

window.onload = function() {
      var script = document.createElement("script");
      script.src = "http://localhost:5050/getrmd";
      document.body.insertBefore(script, document.body.firstChild);

};
