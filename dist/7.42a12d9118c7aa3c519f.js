webpackJsonp([7],{117:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),u=o(s),c=n(118),p=o(c),f=n(121),h=o(f),d=n(35);n(122);var g=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.hotpage=n,n.state={datas:null},n}return a(t,e),l(t,[{key:"componentWillMount",value:function(){(0,d.Jsonp)("/testapi")}},{key:"render",value:function(){var e=(0,h.default)();return this.state.datas?u.default.createElement("div",{className:"hotsg-wrap"},u.default.createElement(p.default,{time:this.state.datas.playlist.updateTime}),u.default.createElement(e,{datas:this.state.datas,num:!0})):null}}]),t}(s.Component);t.default=g},118:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(l);n(119);var u=function(e){function t(e){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return r(t,e),a(t,[{key:"formatDate",value:function(){if("0"==this.props.time)return"";var e=new Date(this.props.time),t=String(e.getMonth()+1),n=String(e.getDate());return-1==t.search(/\d{2}/)&&(t="0"+t),-1==n.search(/\d{2}/)&&(n="0"+n),t+"月"+n+"日"}},{key:"render",value:function(){return this.formatDate(),s.default.createElement("div",{className:"hotlogo-wrap"},s.default.createElement("div",{className:"hotlogo"},s.default.createElement("div",{className:"hl-bg"}),s.default.createElement("span",{className:"hl-utime"},"更新日期：",this.formatDate())))}}]),t}(l.Component);t.default=u},119:function(e,t,n){var o=n(120);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(83)(o,i);o.locals&&(e.exports=o.locals)},120:function(e,t,n){t=e.exports=n(82)(!1),t.push([e.i,'.hotlogo-wrap{width:100%;padding-top:38.9%;background-image:url(./static/hotsg_bg.jpg);background-size:contain;position:relative}.hotlogo{height:100%;z-index:2;padding-left:20px;display:flex;flex-direction:column;justify-content:center}.hotlogo,.hotlogo-wrap:after{position:absolute;left:0;top:0}.hotlogo-wrap:after{content:"";right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.2)}.hl-utime{font-size:12px;color:hsla(0,0%,100%,.8);margin-top:10px;font-family:Helvetica,sans-serif;font-weight:400;transform:scale(.91);transform-origin:left top}.hl-bg{width:142px;height:67px;background-image:url(./static/icon.png);background-position:-24px -30px;background-size:166px 97px}',""])},121:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=function(){function e(e){function t(e,t,n,o,i,r){return this.name=t,this.id=e,this.song={},this.song.alias=n,this.song.artists=o,this.song.album=i,this.song.privilege=r,this}for(var n=e.playlist.tracks,o=e.privileges,i=[],r=0;r<n.length;r++){var a=new t(n[r].id,n[r].name,n[r].alia,n[r].ar,n[r].al,o[r]);i.push(a)}return i}return function(t){function n(t){i(this,n);var o=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return t.datas&&(o.state={datas:e(t.datas)}),o}return a(n,t),l(n,[{key:"render",value:function(){return this.props.datas?u.default.createElement(p.default,{datas:this.state.datas,num:this.props.num}):null}}]),n}(s.Component)};var s=n(0),u=o(s),c=n(89),p=o(c)},122:function(e,t,n){var o=n(123);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(83)(o,i);o.locals&&(e.exports=o.locals)},123:function(e,t,n){t=e.exports=n(82)(!1),t.push([e.i,".hotsg-wrap{padding-top:104px}",""])},89:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),u=o(s);n(90);var c=n(35),p=n(21),f=o(p),h=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.hanleClick=n.hanleClick.bind(n),n.history=(0,f.default)(),n}return a(t,e),l(t,[{key:"hanleClick",value:function(e){var t=e.target.getAttribute("linkid");t&&this.history.push("/song"+t)}},{key:"formatArtistRow",value:function(e){var t=e.artists[0].name;if(e.artists.length>1)for(var n=1;n<e.artists.length;n++)t=t+" / "+e.artists[n].name;return t=t+" - "+e.album.name,this.props.highlight&&(t=(0,c.findhighlight)(t,this.props.highlight)),t}},{key:"getSongstatus",value:function(e){return 100==function(e){if(!e)return 0;var t=e.privilege;if(t)return t.st<0?100:t.fee>0&&8!=t.fee&&0==t.payed?10:16==t.fee?11:(0==t.fee||t.payed>0)&&t.pl>0&&0==t.dl?1e3:0==t.pl&&0==t.dl?100:0;var n=e.status;return n?n<0?e.fee>0?10:100:0:e.st&&e.st<0?e.fee>0?10:100:0}(e)&&-2!==function(e){e=e||{};var t="",n=0;return-300==e.st?(t="版权方要求，该歌曲仅能通过网易云音乐APP播放",n=-2):4==e.fee&&0==e.pl?(t="购买",n=2):e.fee>0&&0==e.pl?(t="会员",n=3):e.fee>0&&8!=e.fee&&32!=e.fee&&e.pl<=0?(t="唱片公司要求该歌曲须付费，打开网易云音乐购买后即可自由畅享",n=1):e.pl<=0&&(t="由于版权保护，您所在的地区暂时无法使用",n=-1),{msg:t,modal:n}}(e).modal}},{key:"render",value:function(){var e=this;if(!this.props.datas)return null;var t=this.props.datas.map(function(t,n){var o;if(t.song.alias.length>0){var i=e.props.highlight?(0,c.findhighlight)(t.song.alias[0],e.props.highlight):t.song.alias[0];o=u.default.createElement("span",{className:"sg-alias"},"("+i+")")}else o=null;var r;r="999000"==t.song.privilege.maxbr?u.default.createElement("span",{className:"sq-icon"}):null;var a;if(e.props.num){var l;l=n<=2?"sl-num hot3":"sl-num";var s=n+1;-1==String(s).search(/\d{2}/)&&(s="0"+s),a=u.default.createElement("div",{className:l},s)}else a=null;var p;return p=e.props.cover?u.default.createElement("img",{className:"sgl-cover-wrap",src:t.song.album.picUrl}):null,u.default.createElement("li",{key:n,className:e.getSongstatus(t.song.privilege)?"item-disable":""},u.default.createElement("a",{href:"javascript:;"},u.default.createElement("div",{className:"songitem",linkid:t.id},a,p,u.default.createElement("div",{className:"sgitem-subwrap"},u.default.createElement("div",{className:"song-title"},u.default.createElement("span",null,e.props.highlight?(0,c.findhighlight)(t.name,e.props.highlight):t.name),o),u.default.createElement("div",{className:"song-info"},e.props.sq?null:r,e.formatArtistRow(t.song))),u.default.createElement("div",{className:"sg-play-btn"},u.default.createElement("span",null)))))});return u.default.createElement("ul",{className:"ltt-music-list theme-"+this.props.theme,onClick:this.hanleClick},t)}}]),t}(s.Component);t.default=h},90:function(e,t,n){var o=n(91);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0};i.transform=void 0;n(83)(o,i);o.locals&&(e.exports=o.locals)},91:function(e,t,n){t=e.exports=n(82)(!1),t.push([e.i,'.ltt-music-list{list-style:none;padding:0}.ltt-music-list li{height:55px;position:relative}.ltt-music-list li a{display:block;width:100%;height:100%;text-decoration:none}.song-title{font-size:17px;color:#333;line-height:1.5}.song-info,.song-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.song-info{color:#888;font-size:12px}.sq-icon{width:12px;height:8px;display:inline-block;background-image:url(./static/icon.png);background-position:0 0;background-size:166px 97px;margin-right:5px}.songitem{width:100%;height:100%;position:relative;padding:6px 0 6px 10px;box-sizing:border-box;display:flex}.songitem:after{content:"";display:block;position:absolute;z-index:0;left:0;top:0;width:300%;height:300%;transform:scale(.3333);transform-origin:top left;border-bottom:1px solid rgba(0,0,0,.1);box-sizing:border-box}.sg-alias{color:#888;white-space:nowrap}.sgitem-subwrap{overflow:hidden;display:inline-block;width:1%;flex-grow:1}.sg-play-btn{padding-left:10px;display:inline-block;width:22px;height:100%;text-align:right;vertical-align:top;padding-right:10px}.sg-play-btn:before{content:"";height:100%}.sg-play-btn:before,.sg-play-btn span{display:inline-block;vertical-align:middle}.sg-play-btn span{height:22px;width:22px;background-image:url(./static/icon.png);background-size:166px 97px;background-position:-24px 0}.sl-num{color:#999;font-size:17px;font-family:Helvetica,sans-serif;display:flex;align-items:center;width:28px}.hot3{color:#df3436}.sgl-cover-wrap{height:43px;width:43px;margin-right:10px}.theme-black .song-title{color:#fff}.theme-black .song-info{color:hsla(0,0%,100%,.6)}.theme-black .songitem:after{border-bottom:1px solid hsla(0,0%,100%,.1)}.theme-playlist .sl-num{width:40px;justify-content:center}.theme-playlist .songitem{padding:6px 0}.theme-playlist .hot3{color:#999}.item-disable .sg-alias,.item-disable .sl-num,.item-disable .song-info,.item-disable .song-title{color:#ccc}.item-disable .sg-play-btn span{opacity:.3}.llt-highlight{color:#507daf}.item-disable .llt-highlight{color:#ccc}',""])}});