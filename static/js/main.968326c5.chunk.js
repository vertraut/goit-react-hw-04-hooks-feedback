(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={buttons:"Feedback_buttons__hvIOw",good:"Feedback_good__Hq0Ue",bad:"Feedback_bad__sIb7t",neutral:"Feedback_neutral__1hPpL"}},,function(e){e.exports=JSON.parse('[{"id":"1","text":"good","raiting":"0"},{"id":"2","text":"neutral","raiting":"0"},{"id":"3","text":"bad","raiting":"0"}]')},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),a=n(6),o=n.n(a),s=(n(14),n(15),n(2)),b=n(3),j=n(8),u=n(7),d=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})},l=function(e){var t=e.options,n=e.total,i=e.positivePercentage;return Object(c.jsxs)("div",{children:[Object.keys(t).map((function(e){return Object(c.jsxs)("p",{children:[e,": ",t[e]]},e)})),Object(c.jsxs)("p",{children:["Total: ",n]}),Object(c.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]})},O=n(5),h=n.n(O),x=function(e){var t=e.event,n=e.options;return Object(c.jsx)("div",{className:h.a.buttons,children:n.map((function(e){return Object(c.jsx)("button",{className:h.a[e],onClick:t,children:e},e)}))})},f=function(e){var t=e.msg;return Object(c.jsx)("p",{children:t})};var p=function(){var e=Object(i.useState)((function(){return u.reduce((function(e,t){return Object(b.a)(Object(b.a)({},e),{},Object(s.a)({},t.text,parseInt(t.raiting)))}),{})})),t=Object(j.a)(e,2),n=t[0],r=t[1],a=function(){return Object.values(n).reduce((function(e,t){return e+t}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{title:"Please leave feedback",children:Object(c.jsx)(x,{event:function(e){r(Object(b.a)(Object(b.a)({},n),{},Object(s.a)({},e.target.innerText,n[e.target.innerText]+1)))},options:Object.keys(n)})}),Object(c.jsx)(d,{title:"Statistics",children:a()?Object(c.jsx)(l,{options:n,total:a(),positivePercentage:Math.round(n.good/(a()/100))||0}):Object(c.jsx)(f,{msg:"No feedback given"})})]})};var g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),v()}],[[16,1,2]]]);
//# sourceMappingURL=main.968326c5.chunk.js.map