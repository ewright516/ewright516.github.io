import{o as h,c as d,a as e,t as M,p as V,b as k,d as t,e as a,w as r,u as p,R as z,f as H,F as y,r as f,g as C,h as x,i as L,j}from"./vendor.2fcdc48a.js";const I=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const _ of i.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}};I();var E="/assets/logo.da9b9095.svg";var u=(o,s)=>{const c=o.__vccOpts||o;for(const[l,n]of s)c[l]=n;return c};const A=o=>(V("data-v-34329e28"),o=o(),k(),o),S={class:"greetings"},T={class:"green"},R=A(()=>e("h3",null,[t(" You\u2019ve successfully created a project with "),e("a",{target:"_blank",href:"https://vitejs.dev/"},"Vite"),t(" + "),e("a",{target:"_blank",href:"https://vuejs.org/"},"Vue 3"),t(". ")],-1)),D={props:{msg:{type:String,required:!0}},setup(o){return(s,c)=>(h(),d("div",S,[e("h1",T,M(o.msg),1),R]))}};var O=u(D,[["__scopeId","data-v-34329e28"]]);const P=e("img",{alt:"Vue logo",class:"logo",src:E,width:"125",height:"125"},null,-1),N={class:"wrapper"},W=t("Home"),q=t("About"),Y={setup(o){return(s,c)=>(h(),d(y,null,[e("header",null,[P,e("div",N,[a(O,{msg:"You did it!"}),e("nav",null,[a(p(z),{to:"/"},{default:r(()=>[W]),_:1}),a(p(z),{to:"/about"},{default:r(()=>[q]),_:1})])])]),a(p(H))],64))}},B="modulepreload",w={},F="/",G=function(s,c){return!c||c.length===0?s():Promise.all(c.map(l=>{if(l=`${F}${l}`,l in w)return;w[l]=!0;const n=l.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const _=document.createElement("link");if(_.rel=n?"stylesheet":B,n||(_.as="script",_.crossOrigin=""),_.href=l,document.head.appendChild(_),n)return new Promise(($,b)=>{_.addEventListener("load",$),_.addEventListener("error",b)})})).then(()=>s())};const K={},U={class:"item"},J={class:"details"};function Q(o,s){return h(),d("div",U,[e("i",null,[f(o.$slots,"icon",{},void 0,!0)]),e("div",J,[e("h3",null,[f(o.$slots,"heading",{},void 0,!0)]),f(o.$slots,"default",{},void 0,!0)])])}var m=u(K,[["render",Q],["__scopeId","data-v-7e75d24f"]]);const X={},Z={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},e1=e("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),t1=[e1];function o1(o,s){return h(),d("svg",Z,t1)}var s1=u(X,[["render",o1]]);const n1={},r1={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},a1=e("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),c1=[a1];function i1(o,s){return h(),d("svg",r1,c1)}var l1=u(n1,[["render",i1]]);const _1={},h1={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},d1=e("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),u1=[d1];function m1(o,s){return h(),d("svg",h1,u1)}var v1=u(_1,[["render",m1]]);const p1={},f1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},g1=e("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),z1=[g1];function w1(o,s){return h(),d("svg",f1,z1)}var y1=u(p1,[["render",w1]]);const $1={},b1={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},M1=e("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),V1=[M1];function k1(o,s){return h(),d("svg",b1,V1)}var H1=u($1,[["render",k1]]);const C1=t("Documentation"),x1=t(" Vue\u2019s "),L1=e("a",{target:"_blank",href:"https://vuejs.org/"},"official documentation",-1),j1=t(" provides you with all information you need to get started. "),I1=t("Tooling"),E1=t(" This project is served and bundled with "),A1=e("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite",-1),S1=t(". The recommended IDE setup is "),T1=e("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode",-1),R1=t(" + "),D1=e("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar",-1),O1=t(". If you need to test your components and web pages, check out "),P1=e("a",{href:"https://www.cypress.io/",target:"_blank"},"Cypress",-1),N1=t(" and "),W1=e("a",{href:"https://docs.cypress.io/guides/component-testing/introduction",target:"_blank"},"Cypress Component Testing",-1),q1=t(". "),Y1=e("br",null,null,-1),B1=t(" More instructions are available in "),F1=e("code",null,"README.md",-1),G1=t(". "),K1=t("Ecosystem"),U1=t(" Get official tools and libraries for your project: "),J1=e("a",{target:"_blank",href:"https://pinia.vuejs.org/"},"Pinia",-1),Q1=t(", "),X1=e("a",{target:"_blank",href:"https://router.vuejs.org/"},"Vue Router",-1),Z1=t(", "),ee=e("a",{target:"_blank",href:"https://test-utils.vuejs.org/"},"Vue Test Utils",-1),te=t(", and "),oe=e("a",{target:"_blank",href:"https://github.com/vuejs/devtools"},"Vue Dev Tools",-1),se=t(". If you need more resources, we suggest paying "),ne=e("a",{target:"_blank",href:"https://github.com/vuejs/awesome-vue"},"Awesome Vue",-1),re=t(" a visit. "),ae=t("Community"),ce=t(" Got stuck? Ask your question on "),ie=e("a",{target:"_blank",href:"https://chat.vuejs.org"},"Vue Land",-1),le=t(", our official Discord server, or "),_e=e("a",{target:"_blank",href:"https://stackoverflow.com/questions/tagged/vue.js"},"StackOverflow",-1),he=t(". You should also subscribe to "),de=e("a",{target:"_blank",href:"https://news.vuejs.org"},"our mailing list",-1),ue=t(" and follow the official "),me=e("a",{target:"_blank",href:"https://twitter.com/vuejs"},"@vuejs",-1),ve=t(" twitter account for latest news in the Vue world. "),pe=t("Support Vue"),fe=t(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),ge=e("a",{target:"_blank",href:"https://vuejs.org/sponsor/"},"becoming a sponsor",-1),ze=t(". "),we={setup(o){return(s,c)=>(h(),d(y,null,[a(m,null,{icon:r(()=>[a(s1)]),heading:r(()=>[C1]),default:r(()=>[x1,L1,j1]),_:1}),a(m,null,{icon:r(()=>[a(l1)]),heading:r(()=>[I1]),default:r(()=>[E1,A1,S1,T1,R1,D1,O1,P1,N1,W1,q1,Y1,B1,F1,G1]),_:1}),a(m,null,{icon:r(()=>[a(v1)]),heading:r(()=>[K1]),default:r(()=>[U1,J1,Q1,X1,Z1,ee,te,oe,se,ne,re]),_:1}),a(m,null,{icon:r(()=>[a(y1)]),heading:r(()=>[ae]),default:r(()=>[ce,ie,le,_e,he,de,ue,me,ve]),_:1}),a(m,null,{icon:r(()=>[a(H1)]),heading:r(()=>[pe]),default:r(()=>[fe,ge,ze]),_:1})],64))}},ye={setup(o){return(s,c)=>(h(),d("main",null,[a(we)]))}},$e=C({history:x("/"),routes:[{path:"/",name:"home",component:ye},{path:"/about",name:"about",component:()=>G(()=>import("./AboutView.7c273eee.js"),["assets/AboutView.7c273eee.js","assets/AboutView.ab071ea6.css","assets/vendor.2fcdc48a.js"])}]}),v=L({state:{elements:[],elementToday:null},mutations:{addElements(o,s){o.elements=s,console.log("elements:",s)},addElementToday(o,s){o.elementToday=s,console.log("element today:",s)}}}),be=async()=>{try{const s=await(await fetch("https://periodic-table-elements-info.herokuapp.com/elements")).json();v.commit("addElements",s);const c=Math.floor(Math.random()*118);v.commit("addElementToday",v.state.elements[c])}catch(o){console.log(o)}};be();const g=j(Y);g.use($e);g.use(v);g.mount("#app");export{u as _};
