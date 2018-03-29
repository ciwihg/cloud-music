import React, { Component } from 'react';
import './css/style.css'
import {Jsonp} from '../../lib/utils.js';
import Searchbar from '../../components/searchbar/searchbar.js'
import Hotpanel from '../../components/hotquerypanel/hotquerypanel.js'
import Btmatch from '../../components/bestmatch/bestmatch.js'
import getsearchlist from '../../components/searchlist/searchlist.js'
import Suggestsearch from '../../components/suggestsearch/suggestsearch.js'
class Searchpage extends Component{
  constructor(props){
    super(props);
    window.searchpage=this;
    this.getKeyword=this.getKeyword.bind(this);
    this.getSuggestdata=this.getSuggestdata.bind(this);
    this.setInputstatus=this.setInputstatus.bind(this);
    this.finish=false;
    this.state={
      hotpdatas:null,
      keyword:"",
      suggestdatas:null,
      mutimatch:null,
      inputfocus:true,
      searchresult:null,
      loading:false
    }
  }
  componentWillMount(){
    Jsonp("/hotsh");
  }
  componentDidUpdate(){
    var that=this;
    window.onscroll=function(){
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if(that.searchwrap.scrollHeight-window.innerHeight-scrollTop<55&&!that.state.loading&&!that.finish)
      {
        that.setState({
          loading:true
        });

          Jsonp("/searchget?key="+that.state.keyword+"&cb=handleSearchget&limit=20&offset="+that.state.searchresult.result.songs.length);
      }else{

      }
    }
  }
  componentDidMount(){

  }
  componentWillUnmount(){
    window.onscroll=null;
  }
  getKeyword(k){
    this.setState(k);

  }
  getSuggestdata(d){
    this.setState({
      suggestdatas:d
    });
  }
  getBtmatch(d){
    this.setState({
      mutimatch:d
    });
  }
 getSearch(d){
   this.setState({
     searchresult:d,
     loading:false
   });
 }
 setInputstatus(d){

   this.setState({
     inputfocus:d
   });
 }
 searchlist(){
   var Searchlist=getsearchlist();
   return <Searchlist datas={this.state.searchresult.result} highlight={this.state.searchresult.result.highlights[0]}></Searchlist>
 }
  render(){
    return (<div className="search-wrap" ref={(el)=>{this.searchwrap=el}}>
            <Searchbar returnf={this.getKeyword} keyword={this.state.keyword} parent={this}></Searchbar>
            {this.state.keyword==""?(<Hotpanel datas={this.state.hotpdatas} parent={this}></Hotpanel>):null}
            {this.state.inputfocus&&(<Suggestsearch keyword={this.state.keyword} suggestdata={this.state.suggestdatas} parent={this}></Suggestsearch>)}
            {(this.state.mutimatch&&this.state.mutimatch.result.orders&&this.state.mutimatch.result.orders.length)?(<Btmatch datas={this.state.mutimatch.result}></Btmatch>):null}
            {this.state.searchresult?this.searchlist():null}
            {this.state.loading?(<div className="search-spin">
             <img src="data:image/gif;base64,R0lGODlhKAAoAIABANM6Mf///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI2QURFODRFRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI2QURFODRGRkZBRTExRTU4NTg0QTdFMUQ4QkI2MTI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjZBREU4NENGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjZBREU4NERGRkFFMTFFNTg1ODRBN0UxRDhCQjYxMjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQJCgABACwAAAAAKAAoAAACeIyPqcvtD6OctNoD8rUZ7Np9VChKZAmdqKOuTOsqcIzMtGHfuaxxfbRrBGu/UfExXCRxxwRsGdg9m0IqpgmVYq1KbnTrMXmnYeAYzCtf1em2E11lf+VkFpxIP+f37td93dfF9zboVwhIaHfItJjoiBd4IzlJWalQAAAh+QQJCgABACwAAAAAKAAoAAACfIyPqcvtD6OctNqLs94WeB55AAiJ5GOeTaoubJu8nBzQGm0zuYF/0l7zIYAxocvIQzqAvVHROVRGoYemgqm0PpfZLjX53YqnV2nVWw5j1ejxkQ1Pc+Nu8FxeD4bJea2uzRf4hidotwJ4RvenmEg42IfoaFioB2N5iZmZUAAAIfkECQoAAQAsAAAAACgAKAAAAn+Mj6nL7Q+jnLRaCPK1GezafVTIaRIJmhE6qpg7sY98wg692g3+egnNm9mAup6C6EslD8hL8zcsGp4I6sI6jS6PWu42EAR3od8wVlyWor1s8m1chV/l2fQ3bm/j33m3n3F2tvfHREdYp1d4p5iIePgYqBbZB2goKIKZqbnJ+VAAACH5BAUKAAEALAAAAAAoACgAAAJ8jI+py+0PIwRUWkbB3Sjz731bKFpkGZ1mJaktm8KX29CT/Ng57ug9XwPeNC/iSLjwBY1DEFKhxDwTLl/0UH1eDVkmlNf9eqng8thqFquX606aTT6/pfJ6OznH5u/cfQBtF8cnSOgWSDcYBmeYqOWniFiod4hSaXmJmWlRAAA7" />
             <span>正在加载...</span>
            </div>):null}
            </div>);
  }
}

export default Searchpage;
