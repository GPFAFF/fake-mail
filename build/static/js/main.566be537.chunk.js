(this["webpackJsonpfake-mail"]=this["webpackJsonpfake-mail"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),u=n.n(l),c=(n(11),n(12),n(3)),o=n(1),i=n(2),s=function(e){var t=e.handleChange,n=e.name,a=e.id,l=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:a},n.toUpperCase()),r.a.createElement("input",{onChange:t,type:"text",name:n,id:a,value:l}))},m={firstName:"Greg",lastName:"Pfaff",username:"gpfaff",avatar:"https://avatars1.githubusercontent.com/u/1102168?s=60&v=4"},E=[{id:0,subject:"Hey Greg",body:"Yo, just wanted to say hey.",preview:""},{id:1,subject:"React is great",body:"I thought I should let you know.",preview:""},{id:2,subject:"REQUEST FOR ASSISTANCE",body:"If you send me your bank account number I will reward you with $10 million whole US dollars.",preview:""}],f=Array(1e3).fill(0).map((function(e){var t=E[Math.floor(Math.random()*E.length)];return Object(o.a)({},t,{id:Math.random(),preview:"".concat(t.body.substr(0,46),"...")})}));E.forEach((function(e){return function(e){return e.preview=e.body.substr(0,46)}(e)}));var d={user:{avatar:"",firstName:"",lastName:"",username:""},logout:function(){return null},login:function(e){return e}},v=Object(a.createContext)(d),b=function(e){var t=e.children,n=Object(a.useState)(d.user),l=Object(i.a)(n,2),u=l[0],c=l[1],o={user:u,login:function(e){return c(e)},logout:function(){return c(d.user)}};return r.a.createElement(v.Provider,{value:o},t)},g=function(){return Object(a.useContext)(v).user},p=function(){var e=Object(a.useContext)(v);return{login:e.login,logout:e.logout}},h=(n(13),function(){var e=p().login,t={message:""},n=Object(a.useState)({username:"",password:""}),l=Object(i.a)(n,2),u=l[0],E=l[1],f=Object(a.useState)(t),d=Object(i.a)(f,2),v=d[0],b=d[1],g=Object(a.useState)(!1),h=Object(i.a)(g,2),j=h[0],O=h[1],w=u.username,C=u.password,y=function(e){var t=e.target,n=t.name,a=t.value;E(Object(o.a)({},u,Object(c.a)({},n,a))),b({message:""})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{noValidate:!0,onSubmit:function(n){n.preventDefault(),b(t),O(!0),function(e,t){return new Promise((function(n,a){setTimeout((function(){"gpfaff"===e&&"secret"===t?n(m):a({message:"Invalid username or password"})}),300)}))}(w,C).then((function(t){O(!1),e(t)})).catch((function(e){b(e),O(!1)}))}},j&&r.a.createElement("p",null,"Loading ..."),v&&r.a.createElement("p",null,v.message),r.a.createElement(s,{value:w,handleChange:y,name:"username",id:"username"}),r.a.createElement(s,{value:C,handleChange:y,name:"password",id:"password"}),r.a.createElement("button",{type:"submit"},"Login")))}),j=(n(14),function(){var e=g(),t=e.avatar,n=e.firstName,a=e.lastName,l=e.username,u=p().logout;return r.a.createElement("div",{className:"user"},r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:"".concat(n," ").concat(a)}),r.a.createElement("h2",null,l)),r.a.createElement("div",null,r.a.createElement("p",null,n," ",a),r.a.createElement("button",{className:"logout",onClick:u},"Logout")))}),O=function(e,t){switch(t.type){case"LOADING":return Object(o.a)({},e,{loading:!0,errors:null});case"SUCCESS":return Object(o.a)({},e,{loading:!1,emails:t.emails});case"ERROR":return Object(o.a)({},e,{loading:!1,errors:t.errors});case"SELECT":return Object(o.a)({},e,{currentEmail:t.currentEmail});default:return e}},w=Object(a.createContext)({emails:[],errors:null,loading:!1,currentEmail:{id:0,subject:"",body:"",preview:""},preview:"",setCurrentEmail:function(e){return e}}),C=function(e){var t=e.children,n=Object(a.useReducer)(O,{emails:[],loading:!1,error:null,currentEmail:null}),l=Object(i.a)(n,2),u=l[0],c=l[1];Object(a.useEffect)((function(){c({type:"LOADING"}),new Promise((function(e,t){setTimeout((function(){e(f)}),300)})).then((function(e){return c({type:"SUCCESS",emails:e})})).catch((function(e){return c({type:"ERROR",error:e})}))}),[]);var s=Object(o.a)({},u,{setCurrentEmail:function(e){c({type:"SELECT",currentEmail:e})}});return r.a.createElement(w.Provider,{value:s},t)},y=function(){return Object(a.useContext)(w)},N=(n(15),Object(a.memo)((function(e){var t=e.email,n=e.onClick;return r.a.createElement("li",{onClick:function(){return n(t)}},r.a.createElement("div",{className:"subject"},t.subject),r.a.createElement("div",{className:"preview"},t.preview))}))),S=function(){var e=g().firstName,t=y(),n=t.emails,a=t.errors,l=t.loading,u=t.setCurrentEmail;return r.a.createElement("div",{className:"message-list"},a&&r.a.createElement("p",null,"There was an error!"),l&&r.a.createElement("p",null,"Loading ... "),!n&&r.a.createElement("div",{className:"no-messages"},"Your mailbox is empty, ",e," \ud83c\udf89\ud83c\udf89\ud83c\udf89"),n&&r.a.createElement("ul",{className:"message"},n.map((function(e){return r.a.createElement(N,{key:e.id,email:e,onClick:u})}))))},k=function(){var e=y(),t=e.currentEmail,n=e.setCurrentEmail;return console.log("MV",t),r.a.createElement("div",{className:"MessageViewer"},r.a.createElement("h2",null,t.subject),r.a.createElement("div",null,t.body),r.a.createElement("button",{onClick:function(){return n(null)}},"Back"))},R=function(){var e=y().currentEmail;return console.log("Wrapper",e),r.a.createElement("div",null,r.a.createElement(j,null),e?r.a.createElement(k,null):r.a.createElement(S,null))};var I=function(){var e=g().username;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"FakeMail"),e?r.a.createElement(R,null):r.a.createElement(h,null))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null,r.a.createElement(C,null,r.a.createElement(I,null)))),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.566be537.chunk.js.map