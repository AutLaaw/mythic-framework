"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[3704,152,6432,7081,9395],{70152:(e,t,a)=>{a.r(t),a.d(t,{TestSound:()=>l,UpdateSetting:()=>r});var n=a(61541),r=function(e,t){return function(a){n.A.send("UpdateSetting",{type:e,val:t}).then((function(n){a({type:"UPDATE_DATA",payload:{type:"player",id:"PhoneSettings",key:e,data:t}})})).catch((function(e){console.log(e)}))}},l=function(e,t){return function(a){n.A.send("TestSound",{type:e,val:t})}}},86432:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(55429),r=a(15647),l=a(28744),o=a(27043),i=a(79771),c=a(33268),u=a(45942),s=a(59530),p=(a(63159),a(70152)),d=a(23470),m=a(36140),g=a(48602);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,o,i=[],c=!0,u=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=l.call(a)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}var b=(0,u.A)((function(e){return{wrapper:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",padding:10,userSelect:"none",border:"2px solid ".concat(e.palette.secondary.dark),textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",padding:10,userSelect:"none",border:"2px solid ".concat(e.palette.primary.main),textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"},addContainer:{height:200,lineHeight:"200px",position:"relative",width:"100%",display:"block",backgroundColor:e.palette.primary.main},addIcon:{position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",fontSize:35},editField:{width:"100%",marginBottom:20,fontSize:20},buttons:{width:"100%",display:"flex",margin:"auto"},buttonNeg:{width:"-webkit-fill-available",padding:20,color:e.palette.error.main,"&:hover":{backgroundColor:"".concat(e.palette.error.main,"14")}},buttonPos:{width:"-webkit-fill-available",padding:20,color:e.palette.success.main,"&:hover":{backgroundColor:"".concat(e.palette.success.main,"14")}},customPH:{position:"relative",height:425,width:250,margin:"auto",background:e.palette.secondary.dark,marginBottom:25},customImg:{display:"block",height:425,width:250,margin:"auto",marginBottom:25}}}));const w=(0,r.Ng)(null,{UpdateSetting:p.UpdateSetting})((function(e){var t=(0,d.MW)(),a=b(),u=(0,r.d4)((function(e){return e.data.data.player.PhoneSettings})),p=null==g._[u.wallpaper],h=f((0,n.useState)(!1),2),w=h[0],y=h[1],v=f((0,n.useState)(""),2),k=v[0],A=(v[1],f((0,n.useState)(!1),2)),S=A[0],E=A[1],C=f((0,n.useState)(p?u.wallpaper:""),2),x=C[0],N=C[1],U=function(e){S&&w||y(e)};return n.createElement(n.Fragment,null,n.createElement(l.A,{className:p?a.wrapperActive:a.wrapper,onClick:function(){return U(!0)}},p?n.createElement("img",{className:a.img,src:u.wallpaper,alt:"Custom Wallpaper"}):n.createElement("div",{className:a.addContainer},n.createElement(s.g,{icon:["fas","plus"],className:a.addIcon})),"Custom"),w?n.createElement(m.aF,{open:w,title:"Custom Wallpaper",onClose:function(){return U(!1)},onDelete:p?function(a){a.preventDefault(),U(!1),N(""),e.UpdateSetting("wallpaper","wallpaper"),t("Wallpaper Deleted")}:null,onAccept:function(){E(!1),U(!1),""!==x&&(e.UpdateSetting("wallpaper",x),t("Custom Wallpaper Saved"))},acceptLang:"Save"},S?n.createElement("div",null,n.createElement("div",{className:a.customPH},n.createElement(o.A,{size:70,className:a.addIcon})),n.createElement("div",null,"Checking Link")):n.createElement("div",null,""!=x?n.createElement("img",{className:a.customImg,src:x,alt:"Custom Wallpaper"}):n.createElement("div",{className:a.customPH},n.createElement(s.g,{icon:["fas","plus"],className:a.addIcon})),""!==k?n.createElement(i.A,{variant:"filled",severity:"error",elevation:6,className:a.error},k):null,n.createElement(c.A,{className:a.editField,label:"Wallpaper Link",name:"wallpaper",type:"text",onChange:function(e){e.preventDefault(),N(e.target.value)},value:x,InputLabelProps:{style:{fontSize:20}}}))):null)}))},97081:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(55429),r=a(64965),l=(0,a(45942).A)((function(e){return{phoneVers:{height:40,lineHeight:"40px",textAlign:"center",fontFamily:"Aclonica",width:"100%",userSelect:"none","-webkit-user-select":"none"}}}));const o=function(e){var t=l(),a=(0,r.W6)();(0,n.useEffect)((function(){return function(){clearTimeout(o)}}),[]);var o=null,i=function(){clearTimeout(o)};return n.createElement("div",{className:t.phoneVers,onMouseDown:function(){o=setTimeout((function(){a.push("/apps/settings/software")}),2e3)},onMouseUp:i,onMouseLeave:i},"Angry Boi OS ",n.createElement("small",null,"v","1.0.0"))}},19395:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(55429),r=a(15647),l=a(28744),o=a(45942),i=a(70152),c=a(23470),u=(0,o.A)((function(e){return{wrapper:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",border:"2px solid ".concat(e.palette.secondary.dark),padding:10,textAlign:"left","-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,borderColor:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},wrapperActive:{background:e.palette.secondary.dark,width:"100%",height:"fit-content",userSelect:"none",padding:10,textAlign:"left",border:"2px solid ".concat(e.palette.primary.main),"-webkit-user-select":"none","&:hover":{background:e.palette.secondary.light,transition:"background, border-color ease-in 0.15s",cursor:"pointer"}},img:{height:200,width:"100%",display:"block"}}}));const s=(0,r.Ng)(null,{UpdateSetting:i.UpdateSetting})((function(e){var t=(0,c.MW)(),a=u(),o=(0,r.d4)((function(e){return e.data.data.player.PhoneSettings}));return(0,n.useEffect)((function(){if(o.wallpaper===e.item){var t=document.querySelector("#".concat(o.wallpaper));t&&t.scrollIntoView({block:"end",behavior:"smooth"})}}),[o.wallpaper]),n.createElement(l.A,{className:o.wallpaper===e.item?a.wrapperActive:a.wrapper,onClick:function(a){a.preventDefault(),e.UpdateSetting("wallpaper",e.item),t("Wallpaper Updated")},id:e.item},n.createElement("img",{className:a.img,src:e.wallpaper.file,alt:e.wallpaper.label}),e.wallpaper.label)}))},31323:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(55429),r=a(79111),l=a(45942),o=a(19395),i=a(86432),c=a(97081),u=a(48602),s=(0,l.A)((function(e){return{wrapper:{height:"100%",background:e.palette.secondary.main,textAlign:"center",padding:"0 2px"},wallpaperList:{maxHeight:"95%",overflowY:"auto",overflowX:"hidden",margin:"0 !important","&::-webkit-scrollbar":{width:6},"&::-webkit-scrollbar-thumb":{background:"#ffffff52"},"&::-webkit-scrollbar-thumb:hover":{background:e.palette.primary.main},"&::-webkit-scrollbar-track":{background:"transparent"}}}}));const p=function(e){var t=s();return n.createElement("div",{className:t.wrapper},n.createElement(r.Ay,{container:!0,spacing:1,className:t.wallpaperList},n.createElement(r.Ay,{item:!0,xs:4},n.createElement(i.default,null)),Object.keys(u._).map((function(e,t){return n.createElement(r.Ay,{key:"wallpaper-".concat(t),item:!0,xs:4},n.createElement(o.default,{item:e,wallpaper:u._[e]}))}))),n.createElement(c.default,null))}}}]);