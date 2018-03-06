var express = require('express');
var app = express();
var querystring=require('querystring');
var http = require('http');

var newsongs;

function formatScript(data) {

  var script="var data="+data+';'+'var newsongs='+newsongs+';reredener(data,newsongs);';
  return script;
}




app.get('/getrmd',function(req,res){

  var opt = {
   host:'music.163.com',
   method:'GET',//这里是发送的方法
   path:'/m/',     //这里是访问的路径
   headers:{
     'User-Agent': 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E)'
   }
  }
  var response=res;
  var body = '';
  var oreq=http.request(opt,function(res){
    res.on('data',function(d){
      body += d;
    }).on('end',function(){
      var reg=/window.REDUX_STATE = ([^;]+);/;
      sendHttpRequest();
      response.send(formatScript(body.match(reg)[1]));
    })
  }).on('error',function(e){
    console.log("Got error: " + e.message);
  });
  oreq.end();
});

function sendHttpRequest(){
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
   newsongs=body;
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
