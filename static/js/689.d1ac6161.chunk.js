"use strict";(self.webpackChunkmovie_watcher=self.webpackChunkmovie_watcher||[]).push([[689],{866:function(t,e,r){var n=r(643),a=r(184);e.Z=function(){return(0,a.jsx)(n.$1,{height:"100",width:"100",radius:"6",color:"#4fa94d",secondaryColor:"",ariaLabel:"revolving-dot-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},155:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(689),a=r(87),u="MoviesList_h1__hJUKD",c="MoviesList_list__0Owr9",s="MoviesList_listItem__LULLo",i="MoviesList_link__8rTGX",o=r(184),f=function(t){var e=t.listTitle,r=t.moviesList,f=(0,n.TH)();return(0,o.jsxs)(o.Fragment,{children:[e&&(0,o.jsx)("h1",{className:u,children:e}),(0,o.jsx)("ul",{className:c,children:r.map((function(t){var e=t.id,r=t.title;return(0,o.jsx)("li",{className:s,children:(0,o.jsx)(a.rU,{className:i,to:"/movies/".concat(e),state:{from:f},children:r})},e)}))})]})}},123:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s="SearchBar_form__gW7Gj",i="SearchBar_input__bIy50",o="SearchBar_formBtn__Z+YNJ",f=r(184),l=function(t){var e=t.onSubmit;return(0,f.jsxs)("form",{className:s,onSubmit:e,children:[(0,f.jsx)("input",{className:i,name:"query"}),(0,f.jsx)("button",{className:o,type:"submit",children:"Search"})]})},p="Movies_movies__TE99a",v=r(155),d=r(791),h=r(87),m=r(349),_=r(866),x=function(){var t=(0,d.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1],s=(0,d.useState)(!1),i=(0,a.Z)(s,2),o=i[0],x=i[1],w=(0,h.lr)(),g=(0,a.Z)(w,2),y=g[0],Z=g[1],b=y.get("query");(0,d.useEffect)((function(){if(null!==b){x(!0);var t=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.Wf)(e);case 2:r=t.sent,u(r.results),x(!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();t(b)}}),[b]);return(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)(l,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget,r=e.elements.query.value.trim();""!==r?(Z({query:r}),e.reset()):alert("Please type anything")}}),o&&(0,f.jsx)(_.Z,{}),r&&(0,f.jsx)(v.Z,{listTitle:"",moviesList:r})]})}},349:function(t,e,r){r.d(e,{Df:function(){return o},Vh:function(){return v},Wf:function(){return f},gI:function(){return p},tR:function(){return l}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="ce40982cf9288342bd5c4fc77432b9de",i="api_key=".concat(s,"&language=en-US"),o=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="trending/movie/day?api_key=".concat(s),t.next=3,c.Z.get(e);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="search/movie?".concat(i,"&query=").concat(e,"&page=1&include_adult=false"),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"?").concat(i),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"/credits?").concat(i),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="movie/".concat(e,"/reviews?").concat(i,"&page=1"),t.next=3,c.Z.get(r);case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=689.d1ac6161.chunk.js.map