"use strict";(self.webpackChunkmovie_watcher=self.webpackChunkmovie_watcher||[]).push([[168],{168:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i="Reviews_wrapper__93MpV",o="Reviews_list__okdpy",f="Reviews_listItem__dF9oT",p="Reviews_review__sHbuN",v="Reviews_h4__ASAyj",d=n(689),h=n(349),l=n(184),w=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],w=(0,d.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Vh)(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(w)}),[w]),(0,l.jsx)("div",{className:i,children:(0,l.jsx)("ul",{className:o,children:n.length>0?n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsx)("h4",{className:v,children:n}),(0,l.jsx)("p",{className:p,children:r})]},t)})):(0,l.jsx)("h4",{className:v,children:"No reviews yet"})})})}},349:function(e,t,n){n.d(t,{Df:function(){return o},Vh:function(){return d},Wf:function(){return f},gI:function(){return v},tR:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ce40982cf9288342bd5c4fc77432b9de",i="api_key=".concat(s,"&language=en-US"),o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="trending/movie/day?api_key=".concat(s),e.next=3,u.Z.get(t);case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="search/movie?".concat(i,"&query=").concat(t,"&page=1&include_adult=false"),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"?").concat(i),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/credits?").concat(i),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="movie/".concat(t,"/reviews?").concat(i,"&page=1"),e.next=3,u.Z.get(n);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.5cc1b8a9.chunk.js.map