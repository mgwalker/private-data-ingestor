"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[282],{6246:function(e,t,l){var n=l(7294),r=l(5444);t.Z=function(e){var t=e.q,l=e.full,a=void 0!==l&&l,u=(0,r.K2)("1529280592").allQuestions.nodes.filter((function(e){return e.id===t})).pop();return n.createElement("div",null,n.createElement("h4",null,u.text),n.createElement("h5",null,"Possible follow-ups:"),n.createElement("ul",null,u.follow_ups.map((function(e){return n.createElement("li",null,e)}))),a?n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("strong",null,"✅ Great signs:")),n.createElement("td",null,n.createElement("strong",null,"⚠️ Warning signs: ")))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",null,n.createElement("ul",null,u.great.map((function(e){return n.createElement("li",null,e)})))),n.createElement("td",null,n.createElement("ul",null,u.warning.map((function(e){return n.createElement("li",null,e)}))))))):null)}},5673:function(e,t,l){l.r(t);var n=l(7294),r=l(6246),a={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},u={marginTop:0,marginBottom:64,maxWidth:320};t.default=function(e){var t=e.data.interviews;return n.createElement("main",{style:a},n.createElement("title",null,t.title),n.createElement("h1",{style:u},t.title),t.sections.map((function(e){var t=e.description,l=e.name,a=e.questions;return n.createElement(n.Fragment,null,n.createElement("h2",null,l),t,a.map((function(e){return n.createElement(r.Z,{key:e,q:e})})))})))}}}]);
//# sourceMappingURL=component---src-pages-interviews-interviews-title-js-f9e94ec44076cf31854c.js.map