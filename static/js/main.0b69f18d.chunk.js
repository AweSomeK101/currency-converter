(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{147:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(1),a=c.n(r),s=c(41),u=c.n(s);c(48);var o=function(){return Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"Currency Converter"})})},i=c(6),j=c(2);var b=function(t){var e=t.currency,c=t.upVal,a=t.list,s=Object(r.useState)(e),u=Object(j.a)(s,2),o=u[0],i=u[1];return Object(n.jsxs)("div",{className:"select",children:[Object(n.jsx)("select",{name:e,id:e,value:o,onChange:function(t){return function(t){i(t),c(t)}(t.target.value)},children:a.map((function(t,e){return Object(n.jsx)("option",{value:t,children:t},e)}))}),Object(n.jsx)("span",{class:"focus"})]})},O={currencyFrom:"USD",currencyTo:"INR",amount:0,rate:0,flag:!1,chart:!0},l=Object(r.createContext)(O);function h(t){var e=t.children,c=Object(r.useState)(O),a=Object(j.a)(c,2),s=a[0],u=a[1];return Object(n.jsx)(l.Provider,{value:{setState:u,state:s},children:e})}var d=!0;var f=function(){var t=Object(r.useContext)(l),e=t.state,c=t.setState,a=Object(r.useState)(e.amount),s=Object(j.a)(a,2),u=s[0],o=s[1],O=Object(r.useState)(e.rate),h=Object(j.a)(O,2),f=(h[0],h[1]),m=Object(r.useState)(e.currencyFrom),x=Object(j.a)(m,2),v=x[0],y=x[1],p=Object(r.useState)(e.currencyTo),Y=Object(j.a)(p,2),g=Y[0],S=Y[1],C=Object(r.useState)([]),D=Object(j.a)(C,2),M=D[0],w=D[1];return Object(r.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(t){return t.json()})).then((function(t){w(Object.keys(t.rates))}))}),[]),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d?(fetch("https://api.exchangeratesapi.io/latest?symbols=".concat(g,"&base=").concat(v)).then((function(t){return t.json()})).then((function(t){f(Object.values(t.rates)[0]),c(Object(i.a)(Object(i.a)({},e),{},{amount:u,rate:Object.values(t.rates)[0],currencyFrom:v,currencyTo:g,flag:!0,chart:!0}))})),d=!1):c(Object(i.a)(Object(i.a)({},e),{},{amount:u,flag:!0}))},id:"form",children:[Object(n.jsxs)("div",{className:"currency-selector",children:[Object(n.jsx)(b,{currency:v,list:M,upVal:function(t){y(t),d=!0}}),Object(n.jsx)(b,{currency:g,list:M,upVal:function(t){S(t),d=!0}})]}),Object(n.jsx)("input",{type:"number",name:"amount",id:"amount",value:u,onChange:function(t){return o(t.target.value)}}),Object(n.jsx)("button",{type:"submit",children:"Convert"})]})};function m(t){var e=t.currency,c=t.amount;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:e}),Object(n.jsx)("h2",{children:c})]})}var x=function(){var t=Object(r.useContext)(l).state,e=Object(r.useState)(t.amount*t.rate),c=Object(j.a)(e,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){t.flag&&s((t.amount*t.rate).toFixed(2))})),Object(n.jsxs)("section",{id:"output-container",children:[Object(n.jsx)(m,{currency:t.currencyFrom,amount:t.amount}),Object(n.jsx)(m,{currency:t.currencyTo,amount:a})]})},v=c(42),y=c(5),p=c.n(y);var Y=function(){var t=Object(r.useContext)(l),e=t.state,c=t.setState,a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],o=s[1],b=Object(r.useState)([]),O=Object(j.a)(b,2),h=O[0],d=O[1];return Object(r.useEffect)((function(){e.chart&&(fetch("https://api.exchangeratesapi.io/history?end_at=".concat(p()().format("YYYY-MM-DD"),"&start_at=").concat(p()().subtract(15,"days").format("YYYY-MM-DD"),"&symbols=").concat(e.currencyTo,"&base=").concat(e.currencyFrom)).then((function(t){return t.json()})).then((function(t){o(Object.keys(t.rates).sort((function(t,e){return new p.a(t).format("YYYYMMDD")-new p.a(e).format("YYYYMMDD")})));for(var e=[],c=Object.values(t.rates).map((function(t){return Object.values(t)[0].toFixed(2)})),n=0;n<Object.keys(t.rates).length;n++)e.push({date:Object.keys(t.rates)[n],rate:c[n]});e.sort((function(t,e){return new p.a(t.date).format("YYYYMMDD")-new p.a(e.date).format("YYYYMMDD")})),d(e.map((function(t){return t.rate})))})),c(Object(i.a)(Object(i.a)({},e),{},{chart:!1})))})),Object(n.jsx)("section",{id:"chart",children:Object(n.jsx)(v.Line,{data:{labels:u,datasets:[{label:"".concat(e.currencyFrom," vs ").concat(e.currencyTo),data:h,backgroundColor:["rgba(0,0,0,0.0)"],borderColor:["rgba(155,155,155,1"],pointBackgroundColor:"#f58a07",pointRadius:5,lineTension:0}]},width:450,height:300,options:{maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{show:!1,gridLineWidth:0,drawOnChartArea:!1}}],yAxes:[{gridLines:{show:!1,gridLineWidth:0,drawOnChartArea:!1}}]}}})})};var g=function(){return Object(n.jsx)(h,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(o,{}),Object(n.jsx)(f,{}),Object(n.jsx)(x,{}),Object(n.jsx)(Y,{})]})})};u.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))},48:function(t,e,c){}},[[147,1,2]]]);
//# sourceMappingURL=main.0b69f18d.chunk.js.map