(this.webpackJsonpevaluation=this.webpackJsonpevaluation||[]).push([[0],{14:function(e,t,a){e.exports={myButton:"styles_myButton__MAhcu",myForm:"styles_myForm__1NSp8"}},2:function(e,t,a){e.exports={video:"styles_video__3PadU",videoInfo:"styles_videoInfo__2TpW-",flipped:"styles_flipped__3HIld",videoTop:"styles_videoTop__13hCH",videoTopTitle:"styles_videoTopTitle__2RZOb",videoCenter:"styles_videoCenter__2-s3c",videoCenterTitle:"styles_videoCenterTitle__2A7bG",videoButton:"styles_videoButton__1RpWD",frontVideo:"styles_frontVideo__9pCxB",backVideo:"styles_backVideo__1HP4M",descriptionVideo:"styles_descriptionVideo__dJu3N",liButton:"styles_liButton__gHqdO",liText:"styles_liText__38RmH"}},21:function(e,t,a){e.exports={videoContainer:"styles_videoContainer__M72aT"}},23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),i=a.n(o),r=(a(28),a(9)),l=(a(29),a(30),a(14)),s=a.n(l);function u(e){var t=e.onSubmit,a=e.value,o=e.onChange,i=e.text,r=(e.data,e.setEmojiValue,Object(n.useRef)(null));return Object(n.useEffect)((function(){r.current.focus()})),c.a.createElement("form",{className:s.a.myForm,onSubmit:t},c.a.createElement("input",{ref:r,type:"text",value:a,onChange:function(e){o(e.target.value)},className:s.a.input}),c.a.createElement("button",{className:s.a.myButton,type:"button",onClick:t},i))}var f=a(21),p=a.n(f),m=a(3),d=a(5),E=a(2),y=a.n(E),_=a(4);function v(e,t){return e.length>t?e.substr(0,t-1)+"...":e}function g(e){var t=e.data,a=Object(n.useState)(0),o=Object(r.a)(a,2),i=o[0],l=o[1],s=c.a.createRef();return Object(n.useEffect)((function(){l(s.current)})),c.a.createElement("div",{className:y.a.video},c.a.createElement("div",{ref:s,className:y.a.videoInfo},c.a.createElement("div",{className:y.a.frontVideo},c.a.createElement("div",{className:y.a.videoTop,style:{backgroundImage:"url(".concat(t.snippet.thumbnails.high.url,")"),backgroundSize:"100% 100%"}},c.a.createElement("div",{className:y.a.videoTopTitle},c.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(t.id)}," ",t.snippet.channelTitle," "))),c.a.createElement("div",{className:y.a.videoCenter},c.a.createElement("div",{className:y.a.videoCenterTitle},c.a.createElement("ul",null,c.a.createElement("li",null," ",c.a.createElement("div",{className:y.a.liButton},c.a.createElement(m.a,{icon:_.g}))," ",c.a.createElement("div",{className:y.a.liText}," ",v(t.snippet.channelTitle,15)," "),"     "),c.a.createElement("li",null," ",c.a.createElement("div",{className:y.a.liButton},c.a.createElement(m.a,{icon:_.d}),"  ")," ",c.a.createElement("div",{className:y.a.liText}," ",t.statistics.viewCount," ")),c.a.createElement("li",null," ",c.a.createElement("div",{className:y.a.liButton},c.a.createElement(m.a,{icon:_.c})," ")," ",c.a.createElement("div",{className:y.a.liText},new Date(t.snippet.publishedAt).toDateString(),"  ")," "),c.a.createElement("li",null," ",c.a.createElement("div",{className:y.a.liButton},c.a.createElement(m.a,{icon:_.f}))," ",c.a.createElement("div",{className:y.a.liText}," ",t.statistics.likeCount," ")," "),c.a.createElement("li",null," ",c.a.createElement("div",{className:y.a.liButton},c.a.createElement(m.a,{icon:_.e}))," ",c.a.createElement("div",{className:y.a.liText}," ",t.statistics.dislikeCount," ")," ")))),c.a.createElement("button",{className:y.a.videoButton,onClick:function(e){i.classList.toggle("".concat(y.a.flipped))}},"Description ",c.a.createElement(m.a,{icon:_.b}))),c.a.createElement("div",{className:y.a.backVideo},c.a.createElement("div",{className:y.a.descriptionVideo},c.a.createElement("h3",null," Description"),c.a.createElement("p",null,v(t.snippet.description,250))),c.a.createElement("button",{className:y.a.videoButton,onClick:function(e){e.target.parentNode.parentNode.classList.toggle("".concat(y.a.flipped))}},c.a.createElement(m.a,{icon:_.a}),"  Back"))))}function h(e){var t=e.children,a=(e.inputValue,e.refer);return c.a.createElement("div",{ref:a,className:p.a.videoContainer},t)}var b,O,x,N,P=a(6),C=a.n(P);function T(e,t,a,n,c,o,i){var r=t.offsetLeft,l=i.offsetLeft;1==e?c>=o-2?(n({type:"FETCH_MORE",query:a}),t.style.left=r-t.clientWidth+"px",1!=c&&(i.style.left=l-50+"px")):(n({type:"MOVE_FORWARD"}),t.style.left=r-t.clientWidth+"px",1!=c&&(i.style.left=l-50+"px")):-1==e&&1!=c&&(n({type:"MOVE_BACK"}),t.style.left=r+t.clientWidth+"px",2!=c&&(i.style.left=l+50+"px"))}function w(e,t,a,n,c,o,i){e.preventDefault(),x=t.offsetLeft,b=e.clientX,t.onmousemove=function(e){!function(e,t){O=b-e.clientX,b=e.clientX,t.style.left=t.offsetLeft-O+"px"}(e,t)},t.onmouseup=function(e){!function(e,t,a,n,c,o,i){e.preventDefault(),(N=t.offsetLeft)-x<-10?c>=o-2?(n({type:"FETCH_MORE",query:a}),t.style.left=x-t.clientWidth+"px",1!=c&&(i.style.left=i.offsetLeft-50+"px")):(n({type:"MOVE_FORWARD"}),t.style.left=x-t.clientWidth+"px",1!=c&&(i.style.left=i.offsetLeft-50+"px")):N-x>10?1!=c?(n({type:"MOVE_BACK"}),t.style.left=x+t.clientWidth+"px",2!=c&&(i.style.left=i.offsetLeft+50+"px")):t.style.left="0px":(console.log("MOVE_ERROR"),t.style.left=t.offsetLeft+"px");t.onmouseup=null,t.onmousemove=null}(e,t,a,n,c,o,i)}}function M(e){var t=e.children,a=e.videoCont,o=e.inputValue,i=Object(d.b)(),l=Object(d.c)((function(e){return e.currentPage})),s=Object(d.c)((function(e){return e.maxPage})),u=Object(n.useState)(0),f=Object(r.a)(u,2),p=f[0],E=f[1],y=c.a.createRef();Object(n.useEffect)((function(){E(y.current)}));for(var v=[],g=1;g<=s;g++)v.push(g);return c.a.createElement("div",{className:C.a.carousel},c.a.createElement("div",{onMouseDown:function(e){w(e,a,o,i,l,s,p)},className:C.a.carouselContainer},t),c.a.createElement("div",{className:C.a.myButtons},c.a.createElement("button",{className:C.a.arrowButton,onClick:function(e){T(-1,a,o,i,l,s,p)}}," ",c.a.createElement(m.a,{icon:_.a})),c.a.createElement("div",{className:C.a.pagesContainer},c.a.createElement("div",{ref:y,className:C.a.pages}," ",v.map((function(e,t){return c.a.createElement("div",{onClick:function(){!function(e,t,a,n,c,o,i){var r=e.offsetLeft,l=i.offsetLeft,s=n-c;s>0?c>=o-2?(a({type:"FETCH_MORE",query:t}),a({type:"MOVE_FORWARD_PAGE",query:n}),e.style.left=r-e.clientWidth*Math.abs(s)+"px",1==c&&3==n?i.style.left=l-25*Math.abs(s)+"px":1==c&&2==n||(i.style.left=l-50*Math.abs(s)+"px")):(a({type:"MOVE_FORWARD_PAGE",query:n}),e.style.left=r-e.clientWidth*Math.abs(s)+"px",console.log(c,n,1==c&&2!=n),1==c&&3==n?i.style.left=l-25*Math.abs(s)+"px":1==c&&2==n||(i.style.left=l-50*Math.abs(s)+"px")):s<0&&1!=c&&(a({type:"MOVE_BACK_PAGE",query:n}),e.style.left=r+e.clientWidth*Math.abs(s)+"px",1!=n&&(i.style.left=l+50*Math.abs(s)+"px"))}(a,o,i,e,l,s,p)},className:t+1==l?C.a.arrowButtonActive:C.a.arrowButton}," ",e," ")})))),c.a.createElement("button",{className:C.a.arrowButton,onClick:function(e){T(1,a,o,i,l,s,p)}}," ",c.a.createElement(m.a,{icon:_.b}))))}var V=function(){var e=Object(d.c)((function(e){return e.data})),t=Object(d.c)((function(e){return e.currentPage})),a=Object(d.b)(),o=Object(n.useState)(""),i=Object(r.a)(o,2),l=i[0],s=i[1],f=Object(n.useState)(0),p=Object(r.a)(f,2),m=p[0],E=p[1],y=c.a.createRef();return Object(n.useEffect)((function(){E(y.current)})),c.a.createElement("div",{className:"App"},c.a.createElement(u,{value:l,onChange:s,onSubmit:function(e){void 0!=e&&e.preventDefault(),a({type:"FETCH",query:l})},text:"Search"}),t?c.a.createElement(M,{videoCont:m,inputValue:l},c.a.createElement(h,{refer:y}," ",e.map((function(e){return c.a.createElement(g,{data:e})})),"  ")):c.a.createElement("div",{className:StyleSheet.nullCarousel}," "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(19),R=a(7),A=a(8),j=(a(38),{data:[],nextPageToken:"",currentPage:0,maxPage:0});var F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.compose,k=Object(A.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUCCESS":return Object(R.a)(Object(R.a)({},e),{},{data:t.data,nextPageToken:t.nextPageToken,currentPage:t.currentPage,maxPage:t.maxPage});case"FAILURE":return alert("ERROR IN FETCHING"),Object(R.a)({},e);case"ADD_DATA":return Object(R.a)(Object(R.a)({},e),{},{data:[].concat(Object(B.a)(e.data),Object(B.a)(t.data)),nextPageToken:t.nextPageToken,currentPage:t.currentPage,maxPage:t.maxPage});case"MOVE_NEXT":case"MOVE_PREV":return Object(R.a)(Object(R.a)({},e),{},{currentPage:t.currentPage});default:return e}}),F(Object(A.applyMiddleware)((function(e){return function(t){return function(a){var n=[],c=e.getState().nextPageToken,o=e.getState().currentPage,i=e.getState().maxPage;try{"FETCH"==a.type?fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=".concat(16,"&q=").concat(a.query,"&key=AIzaSyDws_B7r06gFEFXZ5VroFWMFe4QtfgPNLc&type=video")).then((function(e){return e.json()})).then((function(e){return c=e.nextPageToken,e.items})).then((function(e){return Promise.all(e.map((function(e){return fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDws_B7r06gFEFXZ5VroFWMFe4QtfgPNLc&id=".concat(e.id.videoId,"&part=snippet,statistics")).then((function(e){return e.json()})).then((function(e){n.push(e.items[0])}))})))})).then((function(){e.dispatch({type:"SUCCESS",data:n,nextPageToken:c,currentPage:1,maxPage:4})})):"FETCH_MORE"==a.type?fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=".concat(16,"&q=").concat(a.query,"&key=AIzaSyDws_B7r06gFEFXZ5VroFWMFe4QtfgPNLc&type=video&pageToken=").concat(c)).then((function(e){return e.json()})).then((function(e){return c=e.nextPageToken,e.items})).then((function(e){return Promise.all(e.map((function(e){return fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDws_B7r06gFEFXZ5VroFWMFe4QtfgPNLc&id=".concat(e.id.videoId,"&part=snippet,statistics")).then((function(e){return e.json()})).then((function(e){n.push(e.items[0])}))})))})).then((function(){e.dispatch({type:"ADD_DATA",data:n,nextPageToken:c,currentPage:++o,maxPage:i+4})})):"MOVE_FORWARD"==a.type?e.dispatch({type:"MOVE_NEXT",currentPage:++o}):"MOVE_BACK"==a.type?e.dispatch({type:"MOVE_PREV",currentPage:--o}):"MOVE_FORWARD_PAGE"==a.type?e.dispatch({type:"MOVE_NEXT",currentPage:a.query}):"MOVE_BACK_PAGE"==a.type&&e.dispatch({type:"MOVE_PREV",currentPage:a.query})}catch(r){e.dispatch({type:"FAILURE IN MIDDLEWARE"})}t(a)}}}))));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:k},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={carouselContainer:"styles_carouselContainer__2V_4S",myButtons:"styles_myButtons__1Nl91",arrowButton:"styles_arrowButton__2lheu",arrowButtonActive:"styles_arrowButtonActive__SBiAa",pagesContainer:"styles_pagesContainer__5EI-C",pages:"styles_pages__2VCHi",shifting:"styles_shifting__22fMe"}}},[[23,1,2]]]);
//# sourceMappingURL=main.9f739d09.chunk.js.map