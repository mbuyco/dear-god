(this["webpackJsonpdear-god"]=this["webpackJsonpdear-god"]||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var a=t(2),s=t.n(a),o=t(14),r=t.n(o),c=(t(21),t(3)),i=(t(22),t(5)),l=t.n(i),u=t(15),d=t(16),p=t.n(d);function b(e){if(e)return p.a.post("https://malayalabs.api.stdlib.com/dear-god@dev",{message:e})}var g=t(0);var j=function(e){var n=s.a.useState(""),t=Object(c.a)(n,2),a=t[0],o=t[1];function r(){return(r=Object(u.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(13===t.keyCode){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,e.onProgress(!0),n.next=6,b(t.target.value);case 6:e.onDone(!0),o(""),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0);case 13:e.onProgress(!1);case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))).apply(this,arguments)}return Object(g.jsx)("div",{className:"PrayerInput",style:{display:e.isDone?"none":"block"},children:Object(g.jsx)("input",{type:"text",disabled:e.inProgress,onKeyUp:function(e){return r.apply(this,arguments)},className:"App-input",onChange:function(e){o(e.target.value)},placeholder:"What do you want to pray for?",value:a})})};t(43);var h=function(e){return Object(g.jsxs)("div",{className:"PrayerSuccess",style:{display:e.isDone?"block":"none"},children:[Object(g.jsx)("p",{children:"Your Prayer has been submitted! God bless you! "}),Object(g.jsx)("button",{type:"button",onClick:function(){return e.onDone(!1)},children:"Another one"})]})};var f=function(){var e=s.a.useState(!1),n=Object(c.a)(e,2),t=n[0],a=n[1],o=s.a.useState(!1),r=Object(c.a)(o,2),i=r[0],l=r[1],u=t?"none":"block",d=i?"block":"none";return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("img",{style:{display:u},src:"/dear-god/images/logo.png",className:"App-logo",alt:"logo"}),Object(g.jsx)("img",{style:{display:d},src:"/dear-god/images/loader.gif",alt:"loader"}),Object(g.jsx)(j,{isDone:t,onDone:a,onProgress:l,inProgress:i}),Object(g.jsx)(h,{isDone:t,onDone:a})]})})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,a=n.getFID,s=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),a(e),s(e),o(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(f,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.b3e49869.chunk.js.map