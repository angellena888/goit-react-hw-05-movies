"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[131],{131:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(439),a=r(861),u=r(757),c=r.n(u),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="8c36e317d9a7f81a4ff072fff53940cf";function f(){return(f=(0,a.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t,"&api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var o=function(e){return f.apply(this,arguments)},l=r(791),p=r(87),h=r(689),d=r(184),v=function(){var e,t=(0,l.useState)([]),r=(0,n.Z)(t,2),a=r[0],u=r[1],c=(0,p.lr)(),i=(0,n.Z)(c,2),s=i[0],f=i[1],v=null!==(e=s.get("query"))&&void 0!==e?e:"",m=(0,h.TH)();(0,l.useEffect)((function(){o(v).then((function(e){u(e.results)}))}),[v]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("input",{type:"text",onChange:function(e){if(""===e.target.value)return f({});f({query:e.target.value})},value:v}),(0,d.jsx)("div",{children:a.map((function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(p.rU,{to:"".concat(e.id),state:{from:m},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=131.d794f533.chunk.js.map