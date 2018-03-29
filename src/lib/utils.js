import React, { Component } from 'react';
import {config} from '../config/config.js'
function Jsonp(url){
  var script = document.createElement("script");
  script.src = config.Apihost+url;
  document.body.insertBefore(script, document.body.firstChild);
  window.scripts.push(script);
}
 function handleSae(d){
    return d.match(/(.+)</)[1];
 }
function formatNumber(n){
  var num=n/10000;
  if(n>1){
    num=String(num);
    return Number(num.match(/\d+\.\d/)[0])+'万';
  }else{
    return n;
  }

}

function getUserType(u){
  var musican=u.userType==4,
      vip=u.authStatus==1,
      expert=!!(u.expertTags&&(u.expertTags.length>0)),
      nexpert=!!(u.experts&&(Object.getOwnPropertyNames(u.experts).length>0));
      return musican?"musican":vip?"vip":(expert||nexpert)?"daren":"noicon";
}

function findhighlight(str,key){
  var reg=new RegExp(key);
  var hlele=(<span className="llt-highlight">{key}</span>);
  var results=[];
  function find(s){
    var pos=s.search(reg);
    if(pos!=-1){
      if(pos==0){
        results.push(hlele);
        find(s.slice(key.length));
      }else{
       results.push(s.slice(0,pos));
       results.push(hlele);
      find(s.slice(pos+key.length));
      }
    }else{
      results.push(s);
      return;
    }
  }
  find(str);
  return results;
}

export {Jsonp,formatNumber,getUserType,findhighlight}
