var express = require('express');
var app = express();
var querystring=require('querystring');
var http = require('http');
var https = require('https');
var testapi=require('./testapi.js');
var encrypt=require('./crypto.js');
var newsongs;
function formatScript(data,newsongs) {


  return 'reredener('+data+','+newsongs+');//';
}

function getComment(d,fname) {
  return fname+"("+d+");//";
}
function listscript(d){
  var script="var listdata="+d+';'+'getListData(listdata);//';
  return script;
}
function hotsearchscript(d){
  return "getHotsearchdata("+d+");//";
}
function getSong(d){
  return "handleSongdata("+d+");//";
}
function getLyric(d){
  return "handleLyric("+d+");//";
}
function getUrl(d){
  return "handleUrl("+d+");//";
}
function getSimiplaylist(d) {
  return "handleSimiplaylist("+d+");//";
}
function getSimisong(d) {
  return "handleSimisong("+d+");//";
}
function getDetail(d){
  return "handlePlaylist("+d+");//";
}
app.get('/searchget',function(req,res){
  var processed=encrypt({
    limit:req.query.limit,
    offset:req.query.offset,
    queryCorrect:true,
    s:req.query.key,
    strategy:5,
    type:1
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/search/get";
  testapi(pdata,path,res,getComment,null,req.query.cb);
})
app.get('/mutimatch',function(req,res){
  var processed=encrypt({
    limit:10,
    s:req.query.key,
    version:4
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/search/suggest/multimatch";
  testapi(pdata,path,res,getComment,null,req.query.cb);
})
app.get('/keyword',function(req,res){
  var processed=encrypt({
    s:req.query.key,
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/search/suggest/keyword";
  testapi(pdata,path,res,getComment,null,req.query.cb);
})
app.get('/playlist',function(req,res){
  var processed=encrypt({
    id:req.query.id,
    n:1000
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/v3/playlist/detail";
  testapi(pdata,path,res,getDetail);
})
app.get('/comment',function(req,res){
  var processed=encrypt({
    limit:15,
    resourceId:req.query.id,
    resourceType:req.query.type
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/v1/resource/comments/get";
  testapi(pdata,path,res,getComment,req.query.id,req.query.cb);
})

app.get('/songurl',function(req,res){
  var processed=encrypt({
    ids:'[\"'+req.query.id+'\"]',
    br:128000
  });

  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/song/enhance/player/url";

  testapi(pdata,path,res,getUrl);
})
app.get('/simisong',function(req,res){
  var processed=encrypt({
    songid:req.query.id
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/v1/discovery/simiSong";
  testapi(pdata,path,res,getSimisong,req.query.id);
})
app.get('/simiplaylist',function(req,res){
  var processed=encrypt({
    songid:req.query.id
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/discovery/simiPlaylist";
  testapi(pdata,path,res,getSimiplaylist,req.query.id);
})
app.get('/lyric',function(req,res){
  var processed=encrypt({
    id:req.query.id,
    lv:0,
    tv:0
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/song/lyric";
  testapi(pdata,path,res,getLyric);
})
app.get('/hotsh',function(req,res){
  var processed=encrypt({
    type:1111,
  });
  var pdata={
    'params':processed.encText,
    'encSecKey':processed.encSecKey}
  var path="/weapi/search/hot";
  testapi(pdata,path,res,hotsearchscript);
})

app.get('/testapi',function(req,res){
  var pdata={
    'params':'5Pi5xRIsokmWpapWl4x1m1KWj8wFdHokIbxYcItbw/6uweNdWdrv1hfEx/zqqU/P',
    'encSecKey':"d3406cba57a1759950bf5eb933c6ceede835b0647cb20ca9302f9a50debf5277680aae113b87c9c4e42a1ecd14c0bc45073859abf1999f4697db4b7a1573e709f1882505e2f98e76438a0f6c016354e05d53b41c6795e4be543a69be5759e705148cc74a4c0e213f8f2c6674660eb75e759192a1b85e1deb476a5bc998c4f9bd"}
  var path="/weapi/v3/playlist/detail";
  testapi(pdata,path,res,listscript);
})

app.get('/song',function(req,res){

  var opt = {
   host:'music.163.com',
   method:'GET',//这里是发送的方法
   path:'/m/song?id='+req.query.id,     //这里是访问的路径
   headers:{
     'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E)'
   }
  }
  var response=res;
  var body = '';
  var oreq=https.request(opt,function(res){
    res.on('data',function(d){
      body += d;
    }).on('end',function(){
      var reg=/window.REDUX_STATE = ([^;]+);/;
      //sendHttpRequest();
    response.send(getSong(body.match(reg)[1]));
    })
  }).on('error',function(e){
    console.log("Got error: " + e.message);
  });
  oreq.end();
});

app.get('/getrmd',function(req,res){
  var opt = {
   host:'music.163.com',
   method:'GET',//这里是发送的方法
   path:'/m/',     //这里是访问的路径
   headers:{
     'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36',
   }
  }
  var response=res;
  var body = '';
  var oreq=https.request(opt,function(res){
    res.on('data',function(d){
      body += d;
    }).on('end',function(){
      var reg=/window.REDUX_STATE = ([^;]+);/;
      sendHttpRequest(response,body.match(reg)[1]);
    })
  }).on('error',function(e){
    console.log("Got error: " + e.message);
  });
  oreq.end();
});

function sendHttpRequest(res2client,data){
  var postData = querystring.stringify({
    'params':'12fZlKi9ohm4nADm39+os1ZOlBdHopMiEbQkiDsniSE=',
    'encSecKey':'2b876eaaf2f8c5d1aa77b44befa57fd5072395a2e53e247ee91ef70234e3fb745c4a8e9b29add4de2e24277b3580cc493de7b7ccb444deced34d6d70c0eaeb73d869711216c9c8980c33a6fc284afba8b323b8ade947569820ead130ff202800f78e68bd4a2bab8bed6466fd75d037e669ad7c65ced1b428e3bcea9076428604'
  });

  var opt = {
   host:'music.163.com',
   method:'POST',//这里是发送的方法
   path:'/weapi/personalized/newsong',     //这里是访问的路径
   headers:{
     'Content-Type': 'application/x-www-form-urlencoded'

   }
 };

 var body = '';
 var req = http.request(opt, function(res) {
   res.on('data',function(d){
   body += d;
  }).on('end', function(){
     res2client.send(formatScript(data,body));
  });

 }).on('error', function(e) {
   console.log("Got error: " + e.message);
 })
 req.write(postData);
 req.end();

}
app.get('/', function (req, res) {
  var postData = querystring.stringify({
    'params':'12fZlKi9ohm4nADm39+os1ZOlBdHopMiEbQkiDsniSE=',
    'encSecKey':'2b876eaaf2f8c5d1aa77b44befa57fd5072395a2e53e247ee91ef70234e3fb745c4a8e9b29add4de2e24277b3580cc493de7b7ccb444deced34d6d70c0eaeb73d869711216c9c8980c33a6fc284afba8b323b8ade947569820ead130ff202800f78e68bd4a2bab8bed6466fd75d037e669ad7c65ced1b428e3bcea9076428604'
  });
var opt = {
 host:'music.163.com',
 method:'POST',//这里是发送的方法
 path:'/weapi/personalized/newsong',     //这里是访问的路径
 headers:{
   'Content-Type': 'application/x-www-form-urlencoded'

 }
}
//以下是接受数据的代码
var response=res;
var body = '';
var req = http.request(opt, function(res) {
  res.on('data',function(d){
  body += d;
 }).on('end', function(){
  response.send(body);
 });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
req.write(postData);
req.end();
});
app.listen(process.env.PORT || 5050);
