(this["webpackJsonpmath-magician"]=this["webpackJsonpmath-magician"]||[]).push([[0],{19:function(e,t,a){},24:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),i=a(8),o=a(10),s=a(11),m=a(14),u=a(13),b=a(1),x=(a(19),a(23)),p=a(3),E=a(16),d=a.n(E);function O(e,t,a){var n=d()(e),l=d()(t);if("+"===a)return n.plus(l).toString();if("-"===a)return n.minus(l).toString();if("x"===a)return n.times(l).toString();if("\xf7"===a)try{return n.div(l).toString()}catch(c){return"Can't divide by 0."}if("%"===a)return n.mod(l).toString();throw Error("Unknown operation '".concat(a,"'"))}var j=a(12),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n.handleClick=n.handleClick.bind(Object(j.a)(n)),n}return Object(s.a)(a,[{key:"handleClick",value:function(){var e=this.props,t=e.text;(0,e.onClick)(e.Obj,t)}},{key:"render",value:function(){var e=this.props.text;return l.a.createElement("button",{type:"button",className:"Calc-btn",onClick:this.handleClick},e)}}]),a}(l.a.Component),h=function(){var e=Object(n.useState)({total:0,next:null,operation:null}),t=Object(x.a)(e,2),a=t[0],c=t[1],r=function(e,t){var a,n;c((a=e,"AC"===(n=t)?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===a.next?{}:a.operation?a.next?Object(p.a)(Object(p.a)({},a),{},{next:a.next+n}):Object(p.a)(Object(p.a)({},a),{},{next:n}):a.next?{next:a.next+n,total:null}:{next:n,total:null}:"."===n?a.next?a.next.includes(".")?Object(p.a)({},a):Object(p.a)(Object(p.a)({},a),{},{next:"".concat(a.next,".")}):a.operation?{next:"0."}:a.total?a.total.includes(".")?{}:{total:"".concat(a.total,".")}:{total:"0."}:"="===n?a.next&&a.operation?{total:O(a.total,a.next,a.operation),next:null,operation:null}:{}:"+/-"===n?a.next?Object(p.a)(Object(p.a)({},a),{},{next:(-1*parseFloat(a.next)).toString()}):a.total?Object(p.a)(Object(p.a)({},a),{},{total:(-1*parseFloat(a.total)).toString()}):{}:a.next||!a.total||a.operation?a.operation?a.total&&!a.next?Object(p.a)(Object(p.a)({},a),{},{operation:n}):{total:O(a.total,a.next,a.operation),next:null,operation:n}:a.next?{total:a.next,next:null,operation:n}:{operation:n}:Object(p.a)(Object(p.a)({},a),{},{operation:n})))},i="0";return i=0===Object.keys(a).length||null===a.total&&null===a.next&&null===a.operation?"0":null!=a.next?a.next:null!=a.total?a.total:a.operation,l.a.createElement("div",{className:"calc-page"},l.a.createElement("div",null,l.a.createElement("h2",{className:"title2"},"Let's do some math!")),l.a.createElement("div",{className:"Calc-body"},l.a.createElement("div",{className:"Calc-display"},i),l.a.createElement("div",{className:"Calc-btns"},l.a.createElement("div",{className:"Grey-btns"},l.a.createElement("div",{className:"Grey-btns1"},l.a.createElement(v,{text:"AC",onClick:r,Obj:a}),l.a.createElement(v,{text:"+/-",onClick:r,Obj:a}),l.a.createElement(v,{text:"%",onClick:r,Obj:a}),l.a.createElement(v,{text:"7",onClick:r,Obj:a}),l.a.createElement(v,{text:"8",onClick:r,Obj:a}),l.a.createElement(v,{text:"9",onClick:r,Obj:a}),l.a.createElement(v,{text:"4",onClick:r,Obj:a}),l.a.createElement(v,{text:"5",onClick:r,Obj:a}),l.a.createElement(v,{text:"6",onClick:r,Obj:a}),l.a.createElement(v,{text:"1",onClick:r,Obj:a}),l.a.createElement(v,{text:"2",onClick:r,Obj:a}),l.a.createElement(v,{text:"3",onClick:r,Obj:a})),l.a.createElement("div",{className:"Grey-btns2"},l.a.createElement(v,{text:"0",onClick:r,Obj:a}),l.a.createElement(v,{text:".",onClick:r,Obj:a}))),l.a.createElement("div",{className:"Orange-btns"},l.a.createElement(v,{text:"\xf7",onClick:r,Obj:a}),l.a.createElement(v,{text:"x",onClick:r,Obj:a}),l.a.createElement(v,{text:"-",onClick:r,Obj:a}),l.a.createElement(v,{text:"+",onClick:r,Obj:a}),l.a.createElement(v,{text:"=",onClick:r,Obj:a})))))},C=function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("nav",{className:"navBar"},l.a.createElement("h1",{className:"title"},"MathMagicians"),l.a.createElement("ul",{className:"otherPages"},[{id:1,path:"/",text:"Home",classname:"homePage"},{id:2,path:"/calculator",text:"Calculator",classname:"calcPage"},{id:2,path:"/quotes",text:"Quotes",classname:"quotePage"}].map((function(e){return l.a.createElement("li",{className:e.classname,key:e.id},l.a.createElement(i.b,{to:e.path,activeClassName:"active-link",exact:!0},e.text))})))),l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"Created by Chawanzi Ng'uni")))},k=function(){var e="Welcome to our page!",t="Lorem ipsum dolor sit amet,consectetur adipiscing elit. Pellentesque tempor ac nisi et facilisis. Vestibulum imperdiet, felis vitae lobortis porta,erat libero tempus arcu, id cursus lectus velit arcu. Phasellus venenatis venenatis elementum.Quisque tristique ipsum ac dui lobortis semper.",a="Duis placerat orci ultrices, elementum sem ut, tempus enim. Aenean in nulla mauris. Proin varius efficitur risus, eget gravida est viverra eget. Aenean eleifend laoreet tempor. Donec varius venenatis quam vel rutrum. Aliquam orci nulla, feugiat in dignissim at, ullamcorper ac metus.";return l.a.createElement("div",{className:"home-details"},l.a.createElement("h2",{className:"home-title"},e),l.a.createElement("div",{className:"home-para"},t,l.a.createElement("br",null),l.a.createElement("br",null),a))},f=function(){return l.a.createElement("div",{className:"quote-page"},l.a.createElement("h1",null,"today's quote...."),l.a.createElement("p",null,"When the seas of life get rough, remember your Lifeguard walks on water. - Unknown"))},g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(C,null),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/"},l.a.createElement(k,null)),l.a.createElement(b.a,{path:"/calculator"},l.a.createElement(h,null)),l.a.createElement(b.a,{path:"/quotes"},l.a.createElement(f,null))))}}]),a}(l.a.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(g,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.77516c31.chunk.js.map