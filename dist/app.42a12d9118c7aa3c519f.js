webpackJsonp([4],{35:function(e,t,n){"use strict";function o(e){var t=document.createElement("script");t.src=s.config.Apihost+e,document.body.insertBefore(t,document.body.firstChild),window.scripts.push(t)}function r(e){var t=e/1e4;return e>1?(t=String(t),Number(t.match(/\d+\.\d/)[0])+"万"):e}function a(e){var t=4==e.userType,n=1==e.authStatus,o=!!(e.expertTags&&e.expertTags.length>0),r=!!(e.experts&&Object.getOwnPropertyNames(e.experts).length>0);return t?"musican":n?"vip":o||r?"daren":"noicon"}function i(e,t){function n(e){var d=e.search(r);if(-1==d)return void i.push(e);0==d?(++a,o=l.default.createElement("span",{key:a,className:"llt-highlight"},t),i.push(o),n(e.slice(t.length))):(i.push(e.slice(0,d)),++a,o=l.default.createElement("span",{key:a,className:"llt-highlight"},t),i.push(o),n(e.slice(d+t.length)))}var o,r=new RegExp(t),a=0,i=[];return n(e),i}function d(e){var t=e.match(/(\d\d):(\d\d)(\.\d+)/);if(t)return parseFloat(60*t[1])+parseFloat(t[2])+parseFloat(t[3])}function u(e,t){var n=document.createElement("script");n.src=s.config.Apihost+"/getrmd",document.body.insertBefore(n,document.body.firstChild),n.onerror=t,n.onload=e}Object.defineProperty(t,"__esModule",{value:!0}),t.serverAvailable=t.formatDuration=t.findhighlight=t.getUserType=t.formatNumber=t.Jsonp=void 0;var c=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(c),s=n(78);t.Jsonp=o,t.formatNumber=r,t.getUserType=a,t.findhighlight=i,t.formatDuration=d,t.serverAvailable=u},37:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(d);n(79);var c=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"pmk-wrap"},u.default.createElement("div",{className:"pmk-msg-wrap"},u.default.createElement("p",null,this.props.msg)))}}]),t}(d.Component);t.default=c},39:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){c.default.render(d.default.createElement(l.HashRouter,null,d.default.createElement("div",null,d.default.createElement(l.Route,{exact:!0,path:"/",render:function(){return d.default.createElement(l.Redirect,{to:"/home/rmd"})}}),d.default.createElement(l.Route,{path:"/home",component:g}),d.default.createElement(l.Route,{exact:!0,path:"/playlist:id",component:y}),d.default.createElement(l.Route,{exact:!0,path:"/song:id",component:v}))),document.querySelector("#app"))}function r(){c.default.render(d.default.createElement(l.HashRouter,null,d.default.createElement("div",null,d.default.createElement(l.Route,{exact:!0,path:"/",render:function(){return d.default.createElement(l.Redirect,{to:"/home/rmd"})}}),d.default.createElement(l.Route,{path:"/home",component:g}),d.default.createElement(l.Route,{exact:!0,path:"/playlist:id",component:y}),d.default.createElement(l.Route,{exact:!0,path:"/song:id",component:v}))),document.querySelector("#app"))}function a(){c.default.render(d.default.createElement(f.default,{msg:"服务器没开启，请联系作者Ciwi开启后再尝试访问"}),document.querySelector("#app"))}var i=n(0),d=o(i),u=n(42),c=o(u),l=n(36),s=n(35),p=n(21),m=(o(p),n(37)),f=o(m);n(81);var w=n(38),h=o(w),g=(0,h.default)({loader:function(){return n.e(2).then(n.bind(null,84))},loading:function(){return d.default.createElement("div",null,"Loading...")}}),y=(0,h.default)({loader:function(){return n.e(1).then(n.bind(null,85))},loading:function(){return d.default.createElement("div",null,"Loading...")}}),v=(0,h.default)({loader:function(){return n.e(0).then(n.bind(null,86))},loading:function(){return d.default.createElement("div",null,"Loading...")}});window.reactpages={},window.scripts=[],window.handleSearchget=function(e){if(!e.result.songs)return window.searchpage.finish=!0,void window.searchpage.setState({loading:!1});if(window.searchpage.state.searchresult){var t=window.searchpage.state.searchresult.result.songs.concat(e.result.songs);window.searchpage.state.searchresult.result.songs=t,window.searchpage.getSearch(window.searchpage.state.searchresult)}else window.searchpage.getSearch(e);document.body.removeChild(window.scripts.pop())},window.handleMutimatch=function(e){window.searchpage.getBtmatch(e),document.body.removeChild(window.scripts.pop())},window.handleKeyword=function(e){window.searchpage.getSuggestdata(e.result.allMatch),document.body.removeChild(window.scripts.pop())},window.handlePlaylist=function(e){window.playlistpage.updateDatas(e),document.body.removeChild(window.scripts.pop())},window.handleSimiplaylist=function(e){window.songpage.updateSimiplaylist(e.playlists),document.body.removeChild(window.scripts.pop())},window.handleSimisong=function(e){window.songpage.updateSimisongs(e),document.body.removeChild(window.scripts.pop())},window.handlePlaylistComment=function(e){window.playlistpage.updateComments(e),document.body.removeChild(window.scripts.pop())},window.handleComment=function(e){window.songpage.updateComments(e),document.body.removeChild(window.scripts.pop())},window.handleLyric=function(e){var t=[];e.lrc.lyric.match(/\[([^\n]+)\n/g).forEach(function(e,n,o){for(var r=e.match(/\[[^\[\]]+\]/g),a=e.match(/\[.+\]((.|\n)+)/)[1],i=0;i<r.length;i++){var d={time:(0,s.formatDuration)(r[i]),lyric:a};t.push(d)}}),t.sort(function(e,t){return e.time-t.time});var n=t.filter(function(e){return"\n"!=e.lyric});window.lyric.updateLyrics(n),document.body.removeChild(window.scripts.pop())},window.handleUrl=function(e){window.songpage.updateUrl(e.data[0].url),document.body.removeChild(window.scripts.pop())},window.handleSongdata=function(e){window.songpage.updateDatas(e),document.body.removeChild(window.scripts.pop())},window.getListData=function(e){window.hotpage.setState({datas:e}),document.body.removeChild(window.scripts.pop())},window.getHotsearchdata=function(e){window.searchpage.setState({hotpdatas:e.result.hots}),document.body.removeChild(window.scripts.pop())},window.reredener=function(e,t){window.reactdatas={},window.recommendpage&&window.recommendpage.setState({datas:{rmdlist:e.HomeRecommend.data._list,sglist:t.result}}),window.recommendpage&&document.body.removeChild(window.scripts.pop())},(0,s.serverAvailable)(r,a)},78:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={Apihost:"http://musicapi.applinzi.com"};t.config=o},79:function(e,t){},81:function(e,t){}},[39]);