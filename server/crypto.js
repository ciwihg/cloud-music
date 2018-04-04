var CryptoJS = require('crypto-js');
var rsa = require('./rsa.js');
function getEncrypted(text,emj1,bcode,emj2){
  function n(e) {
      var t, r, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", i = "";
      for (t = 0; e > t; t += 1)
          r = Math.random() * n.length,
          r = Math.floor(r),
          i += n.charAt(r);
      return i
  }
  function i(e, t) {
      var r = CryptoJS.enc.Utf8.parse(t)
        , n = CryptoJS.enc.Utf8.parse("0102030405060708")
        , i = CryptoJS.enc.Utf8.parse(e)
        , o = CryptoJS.AES.encrypt(i, r, {
          iv: n,
          mode: CryptoJS.mode.CBC
      });
      return o.toString()
  }
  function o(e, t, r) {
      var n, i;
      return rsa.setMaxDigits(131),
      n = new rsa.RSAKeyPair(t,"",r),
      i = rsa.encryptedString(n, e)
  }
  function a(e, t, r, a) {
      var s = {}
        , u = n(16);
      return s.encText = i(e, a),
      s.encText = i(s.encText, u),
      s.encSecKey = o(u, t, r),
      s
  }

  return a(text,emj1,bcode,emj2);
}
var Muntils={
    emj2code:function (e) {
      var that =this;
        return e.map(function(e) {
            return that.codes[e]
        }).join("")
    },
    codes:{
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    },
    subcode:["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]

};
Muntils.BASE_CODE=Muntils.emj2code(Muntils.subcode);

function encrypt(data){
  var sinpher=getEncrypted(JSON.stringify(data),Muntils.emj2code(["流泪", "强"]),Muntils.BASE_CODE,Muntils.emj2code(["爱心", "女孩", "惊恐", "大笑"]));
  return sinpher;
}

module.exports=encrypt;
