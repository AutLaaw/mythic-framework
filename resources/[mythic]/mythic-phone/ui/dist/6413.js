"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[6413,9817,142],{76413:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var n=r(55429),o=r(15647),a=r(142),i=r(79111),c=r(32764),l=r(26573),u=r(45942),s=r(59530),p=r(61541),f=r(36140),h=r(23470),d=r(29817);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){g=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new I(n||[]);return o(i,"_invoke",{value:W(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",y="completed",v={};function b(){}function w(){}function k(){}var x={};u(x,i,(function(){return this}));var E=Object.getPrototypeOf,A=E&&E(E(O([])));A&&A!==r&&n.call(A,i)&&(x=A);var C=k.prototype=b.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==m(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function W(e,r,n){var o=f;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=N(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?y:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function N(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(m(e)+" is not iterable")}return w.prototype=k,o(C,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:w,configurable:!0}),w.displayName=u(k,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u(t,l,"GeneratorFunction")),t.prototype=Object.create(C),t},e.awrap=function(t){return{__await:t}},L(S.prototype),u(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(C),u(C,l,"Generator"),u(C,i,(function(){return this})),u(C,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function y(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){y(a,n,o,i,c,"next",t)}function c(t){y(a,n,o,i,c,"throw",t)}i(void 0)}))}}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var k=(0,u.A)((function(t){return{wrapper:{height:"100%",background:t.palette.secondary.main,position:"relative"},header:{background:t.palette.primary.main,fontSize:20,padding:15,lineHeight:"45px",height:78},headerAction:{textAlign:"right","&:hover":{color:t.palette.text.main,transition:"color ease-in 0.15s"}},body:{padding:10,height:"88.75%",overflowY:"auto",overflowX:"hidden","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}},buttons:{width:"100%",display:"flex",marginTop:10},button:{width:"-webkit-fill-available",padding:20,color:t.palette.warning.main,"&:hover":{backgroundColor:"".concat(t.palette.warning.main,"14")}},buttonNegative:{width:"-webkit-fill-available",padding:20,color:t.palette.error.main,"&:hover":{backgroundColor:"".concat(t.palette.error.main,"14")}},buttonPositive:{width:"-webkit-fill-available",padding:20,color:t.palette.success.main,"&:hover":{backgroundColor:"".concat(t.palette.success.main,"14")}},buttonInfo:{width:"-webkit-fill-available",padding:20,color:t.palette.info.main,"&:hover":{backgroundColor:"".concat(t.palette.info.main,"14")}},emptyMsg:{width:"100%",textAlign:"center",fontSize:20,fontWeight:"bold",marginTop:"25%"}}}));const x=function(t){var e=t.groups,r=t.myGroup,u=t.loading,m=t.onRefresh,y=k(),w=(0,h.MW)(),x=(0,o.d4)((function(t){return t.data.data.player})),E=b((0,n.useState)(!1),2),A=E[0],C=E[1],L=b((0,n.useState)(!1),2),S=L[0],W=L[1],N=b((0,n.useState)(!1),2),T=N[0],j=N[1],I=function(){j(!1),C(!1),W(!1)},O=function(){var t=v(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.A.send("CreateWorkgroup");case 3:return t.next=5,t.sent.json();case 5:e=t.sent,w(e?"Workgroup Created":"Unable to Create Workgroup"),setTimeout((function(){m()}),200),I(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),w("Unable to Create Workgroup"),I();case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=v(g().mark((function t(e){var r;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.Working){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,p.A.send("JoinWorkgroup",e);case 5:return t.next=7,t.sent.json();case 7:r=t.sent,w(r?"Sent Request To Join":"Unable to Join Workgroup"),setTimeout((function(){m()}),200),I(),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0),w("Unable to Join Workgroup"),I();case 18:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),B=function(){var t=v(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.A.send("DisbandWorkgroup");case 3:return t.next=5,t.sent.json();case 5:e=t.sent,w(e?"Workgroup Disbanded":"Unable to Disband Workgroup"),setTimeout((function(){m()}),200),I(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),w("Unable to Disband Workgroup"),I();case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),_=function(){var t=v(g().mark((function t(){var e;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.A.send("LeaveWorkgroup",r);case 3:return t.next=5,t.sent.json();case 5:e=t.sent,w(e?"Left Workgroup":"Unable to Leave Workgroup"),setTimeout((function(){m()}),200),I(),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),w("Unable to Leave Workgroup"),I();case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return n.createElement(n.Fragment,null,n.createElement("div",{className:y.wrapper},n.createElement(a.A,{position:"static",className:y.header},n.createElement(i.Ay,{container:!0},n.createElement(i.Ay,{item:!0,xs:8},"Labor"),n.createElement(i.Ay,{item:!0,xs:4,className:y.headerAction},Boolean(r)?r.Creator.ID==x.Source?n.createElement(c.A,{title:"Disband Workgroup"},n.createElement(l.A,{disabled:u,onClick:function(){return j(!0)}},n.createElement(s.g,{disabled:Boolean(x.TempJob)||u||r.Working,icon:["fas","trash"]}))):n.createElement(c.A,{title:"Leave Workgroup"},n.createElement(l.A,{disabled:Boolean(x.TempJob)||u||r.Working,onClick:function(){return W(!0)}},n.createElement(s.g,{disabled:r.Working,icon:["fas","sign-out"]}))):n.createElement(c.A,{title:"Create Workgroup"},n.createElement(l.A,{disabled:Boolean(x.TempJob)||u||Boolean(r),onClick:function(){return C(!0)}},n.createElement(s.g,{icon:["fas","plus"]}))),n.createElement(c.A,{title:"Refresh Workgroups"},n.createElement(l.A,{onClick:m},n.createElement(s.g,{className:"fa ".concat(u?"fa-spin":""),icon:["fas","arrows-rotate"]})))))),n.createElement("div",{className:y.body},Boolean(e)?n.createElement(n.Fragment,null,Boolean(e)?e.length>0?e.map((function(t,e){return n.createElement(d.default,{key:"wg-".concat(e),group:t,onJoin:D,disabled:u,isInGroup:Boolean(r)})})):n.createElement("div",{className:y.emptyMsg},"No Workgroups"):null):n.createElement(f.aH,{static:!0,text:"Loading"}))),Boolean(r)?r.Creator.ID==x.Source?n.createElement(f.pT,{title:"Disband Workgroup?",open:T,confirm:"Disband",decline:"Cancel",onConfirm:B,onDecline:function(){return j(!1)}}):n.createElement(f.pT,{title:"Leave Workgroup?",open:S,confirm:"Leave",decline:"Cancel",onConfirm:_,onDecline:function(){return W(!1)}}):n.createElement(f.pT,{title:"Create Workgroup?",open:A,confirm:"Create",decline:"Cancel",onConfirm:O,onDecline:function(){return C(!1)}}))}},29817:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(55429),o=r(15647),a=r(28744),i=r(79111),c=r(49999),l=r(45942),u=r(59530),s=(0,l.A)((function(t){return{wrapper:{padding:10,background:t.palette.secondary.dark,"&:not(:last-of-type)":{marginBottom:10}},details:{position:"absolute",width:"fit-content",height:"fit-content",top:0,bottom:0,margin:"auto"},title:{fontSize:20,color:t.palette.primary.main,fontWeight:"bold"},pay:{fontSize:16,color:t.palette.success.main},duty:{fontSize:16,fontWeight:"bold",position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"},actions:{position:"absolute",height:"fit-content",width:"fit-content",top:0,bottom:0,left:0,right:0,margin:"auto"}}}));const p=function(t){var e=t.group,r=t.isInGroup,l=t.onJoin,p=t.disabled,f=s(),h=(0,o.d4)((function(t){return t.data.data.player}));return n.createElement(a.A,{className:f.wrapper},n.createElement(i.Ay,{container:!0},n.createElement(i.Ay,{item:!0,xs:7,style:{position:"relative",height:65}},n.createElement("div",{className:f.details},n.createElement("div",{className:f.title},e.Creator.ID==h.SID&&n.createElement(u.g,{style:{marginRight:5,color:"gold"},icon:["fas","crown"]}),e.Creator.First," ",e.Creator.Last))),n.createElement(i.Ay,{item:!0,xs:2,style:{position:"relative"}},n.createElement("div",{className:f.duty},e.Members.length+1," / 5")),n.createElement(i.Ay,{item:!0,xs:3,style:{position:"relative"}},n.createElement(c.A,{variant:"text",className:f.actions,disabled:r||e.Members.length>=4||p||e.Working||Boolean(h.TempJob),onClick:function(){return l(e)}},"Join"))))}},142:(t,e,r)=>{r.d(e,{A:()=>y});var n=r(86887),o=r(64180),a=r(55429),i=r(1551),c=r(50035),l=r(94526),u=r(88594),s=r(69921),p=r(28744),f=r(35457);function h(t){return(0,f.A)("MuiAppBar",t)}(0,r(40725).A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var d=r(64922);const m=["className","color","enableColorOnDark","position"],g=(0,l.Ay)(p.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`position${(0,s.A)(r.position)}`],e[`color${(0,s.A)(r.color)}`]]}})((({theme:t,ownerState:e})=>{const r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,o.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===e.position&&{position:"fixed",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===e.position&&{position:"absolute",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"sticky"===e.position&&{position:"sticky",zIndex:t.zIndex.appBar,top:0,left:"auto",right:0},"static"===e.position&&{position:"static"},"relative"===e.position&&{position:"relative"},"default"===e.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},e.color&&"default"!==e.color&&"inherit"!==e.color&&"transparent"!==e.color&&{backgroundColor:t.palette[e.color].main,color:t.palette[e.color].contrastText},"inherit"===e.color&&{color:"inherit"},"dark"===t.palette.mode&&!e.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===e.color&&(0,o.A)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"}))})),y=a.forwardRef((function(t,e){const r=(0,u.A)({props:t,name:"MuiAppBar"}),{className:a,color:l="primary",enableColorOnDark:p=!1,position:f="fixed"}=r,y=(0,n.A)(r,m),v=(0,o.A)({},r,{color:l,position:f,enableColorOnDark:p}),b=(t=>{const{color:e,position:r,classes:n}=t,o={root:["root",`color${(0,s.A)(e)}`,`position${(0,s.A)(r)}`]};return(0,c.A)(o,h,n)})(v);return(0,d.jsx)(g,(0,o.A)({square:!0,component:"header",ownerState:v,elevation:4,className:(0,i.A)(b.root,a,"fixed"===f&&"mui-fixed"),ref:e},y))}))}}]);