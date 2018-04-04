var http = require('http');
var querystring=require('querystring');
module.exports=function sendHttpRequest(postdata,path,tores,cb,id,scb){
  var postData = querystring.stringify(postdata);
  var header;
  id?(header={
    'Content-Type': 'application/x-www-form-urlencoded',
    'Referer':'http://music.163.com/m/song?id='+id
  }):(header={
    'Content-Type': 'application/x-www-form-urlencoded'
  })
  var opt = {
   host:'music.163.com',
   method:'POST',//这里是发送的方法
   path:path,     //这里是访问的路径
   headers:header
 };

 var body = '';
 var req = http.request(opt, function(res) {
   res.on('data',function(d){
   body += d;
  }).on('end', function(){
   tores.send(cb(body,scb));
  });

 }).on('error', function(e) {
   console.log("Got error: " + e.message);
 })
 req.write(postData);
 req.end();

};
