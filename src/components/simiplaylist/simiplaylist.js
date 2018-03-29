import React, { Component } from 'react';
import {formatNumber} from '../../lib/utils.js';
import './css/style.css'
class Simiplaylist extends Component{
  constructor(props){
    super(props);
  }
  getUserType(u){
    var musican=u.userType==4,
        vip=u.authStatus==1,
        expert=!!(u.expertTags&&(u.expertTags.length>0)),
        nexpert=!!(u.experts&&(Object.getOwnPropertyNames(u.experts).length>0));
        return musican?"smpl-u-musican":vip?"smpl-u-vip":(expert||nexpert)?"smpl-u-daren":"smpl-noicon";
  }
  render(){
      var items=this.props.datas.map((item,index)=>{
        return (
          <div className="simi-item" key={index}>
             <div className="simi-img-wrap">
                <img src={item.coverImgUrl}/>
                <span className="smpl-playcount">{formatNumber(item.playCount)}</span>
             </div>
             <p className="simi-name">{item.name}</p>
             <p className="simi-author-wrap"><span className="simi-author">by {item.creator.nickname}<span className={"smpl-u-icon "+this.getUserType(item.creator)}></span></span></p>
          </div>
        )
      });
      var fix=(<div className="simi-item"></div>);
      items.push(fix);
      items.push(fix);
    return (<div className="simi-wrap">
              {items.slice(0,3)}
    </div>);
  }
}

export default Simiplaylist;
