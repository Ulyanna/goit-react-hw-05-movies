"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(A,n,t){t.r(n),t.d(n,{default:function(){return k}});var r,e,a,c,u=t(861),o=t(885),i=t(687),s=t.n(i),p=t(791),f=t(689),E=t(555),l=t(168),g=t(934),x=g.Z.ul(r||(r=(0,l.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\ngap: 20px;\n"]))),d=g.Z.li(e||(e=(0,l.Z)(["\n  border: 1px solid rgba(136, 136, 136, 0.453);\n  box-shadow: \n    0px 1px 0px 0px rgba(0, 0, 0, 0.1);\n    padding: 5px;\n"]))),h=g.Z.p(a||(a=(0,l.Z)(["\nfont-weight: 500;\n"]))),B=g.Z.span(c||(c=(0,l.Z)(["\nfont-style: italic;\n"]))),v=t(618),w=t(184),k=function(){var A=(0,f.UO)().movieId,n=(0,p.useState)(null),t=(0,o.Z)(n,2),r=t[0],e=t[1];return(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,E.M1)(A);case 3:t=n.sent,e(t.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[A]),(0,w.jsx)(w.Fragment,{children:r&&(0,w.jsx)(x,{children:r.map((function(A){var n=A.cast_id,t=A.character,r=A.original_name,e=A.profile_path;return(0,w.jsxs)(d,{children:[" ",(0,w.jsx)("img",{src:e?"".concat(E.L2).concat(e):v,alt:r,width:"200",height:"300"})," ",(0,w.jsx)(h,{children:r}),(0,w.jsx)(B,{children:t})]},n)}))})})}},555:function(A,n,t){t.d(n,{Hg:function(){return i},L2:function(){return o},M1:function(){return f},TP:function(){return s},q:function(){return p},tx:function(){return E}});var r=t(861),e=t(687),a=t.n(e),c=t(44),u="cadd79f1a1e49af0faca0dd1324eca3c";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var o="https://image.tmdb.org/t/p/w300",i=function(){var A=(0,r.Z)(a().mark((function A(){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(u));case 2:return n=A.sent,A.abrupt("return",n);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.ZP.get("/movie/".concat(n,"?api_key=").concat(u));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.ZP.get("/search/movie?api_key=".concat(u,"&query=").concat(n));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),f=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.ZP.get("/movie/".concat(n,"/credits?api_key=").concat(u));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),E=function(){var A=(0,r.Z)(a().mark((function A(n){var t;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c.ZP.get("/movie/".concat(n,"/reviews?api_key=").concat(u));case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},618:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=387.ae28b3a6.chunk.js.map