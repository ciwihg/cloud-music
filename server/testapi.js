var http = require('http');
var https = require('https');
var querystring=require('querystring');
module.exports=function sendHttpRequest(postdata,path,tores,cb,id,scb){
  var postData = querystring.stringify(postdata);
  var header;
  id?(header={

'Accept': 'application/json, text/javascript',
'Origin': 'https://music.163.com',
'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36',
'Content-Type':'application/x-www-form-urlencoded',
'Referer': 'https://music.163.com/m/song?id='+id
  }):(header={


    'Origin': 'https://music.163.com',
    'User-Agent': 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36',
    'Content-Type':'application/x-www-form-urlencoded',
    'Referer': 'https://music.163.com/m/song?id=553755659',

    'Cookie': '_ntes_nnid=0e5f11fd7d272445107244be79ade075,1527147771470; _ntes_nuid=0e5f11fd7d272445107244be79ade075; _iuqxldmzr_=32;'
  })
  var opt = {
   host:'music.163.com',
   method:'POST',//这里是发送的方法
   path:path,     //这里是访问的路径
   headers:header
 };

 var body = '';
 var req = https.request(opt, function(res) {
   res.on('data',function(d){
   body += d;
  }).on('end', function(){
    console.log(body);
   tores.send(cb(body,scb));
  });

 }).on('error', function(e) {
   console.log("Got error: " + e.message);
 })
 req.write(postData);
 req.end();

};
