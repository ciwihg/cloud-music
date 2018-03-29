import React, { Component } from 'react';
import Sglist from '../lastestlist/lastestlist.js';

export default function(){

  function handleHotlistData(data){
    function itemFactory(id,name,alias,artists,album,privilege){
      this.name=name;
      this.id=id;
      this.song={};
      this.song.alias=alias;
      this.song.artists=artists;
      this.song.album=album;
      this.song.privilege=privilege;
      return this;
    }

    var items=data.songs,
        newdatas=[];
    for (var i = 0; i < items.length; i++) {
      var temp=new itemFactory(items[i].id,items[i].name,items[i].alias,items[i].artists,items[i].album,items[i].privilege);
      newdatas.push(temp)
    }
    return newdatas;

  }

  return class extends Component{
    constructor(props){
      super(props);
      this.state={
        datas:null
      };
      (props.datas)&&(this.state={
        datas:handleHotlistData(props.datas)
      });
    }
    render(){
       return (<Sglist datas={this.state.datas} theme="black" sq={true} cover={this.props.cover}></Sglist>);
    }

  }
};
