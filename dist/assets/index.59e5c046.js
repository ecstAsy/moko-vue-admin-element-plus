var ie=Object.defineProperty,ce=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var F=(e,t,o)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,D=(e,t)=>{for(var o in t||(t={}))ue.call(t,o)&&F(e,o,t[o]);if(V)for(var o of V(t))_e.call(t,o)&&F(e,o,t[o]);return e},G=(e,t)=>ce(e,le(t));import{d as E,o as l,c as d,w as r,r as N,E as de,a as g,b as h,e as U,F as S,f as j,g as _,t as M,h as i,i as k,j as me,k as pe,u as q,l as R,m as fe,n as A,p as he,q as ve,s as Ee,v as ge,x as Ae,y as ye,z as be,A as ke,B as Re,C as z,D as H,G as Oe,H as xe,I as Pe,J as Y,K as Z,L as Te,T as Ce,M as we,N as Le,O as Ie,P as De,Q as Se,R as K,S as je,U as J}from"./vendor.b2fd24f8.js";const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerpolicy&&(c.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?c.credentials="include":n.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}};Me();const Be="modulepreload",W={},Ve="/moko-vue-elementplus-admin/",u=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${Ve}${s}`,s in W)return;W[s]=!0;const n=s.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${c}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":Be,n||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),n)return new Promise((x,v)=>{a.addEventListener("load",x),a.addEventListener("error",v)})})).then(()=>t())};var m=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o};const Fe=E({props:{icon:null},setup(e){return(t,o)=>{const s=de;return l(),d(s,{class:"moko-icon"},{default:r(()=>[(l(),d(N(e.icon)))]),_:1})}}});var y=m(Fe,[["__scopeId","data-v-2c2e07a5"]]),Ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const Ne=E({props:{menus:{type:Object,default:()=>null}},setup(e){return(t,o)=>{const s=g("menu-bar-item",!0),n=me,c=pe;return l(!0),h(S,null,U(e.menus,a=>(l(),h(S,{key:a.path},[a.children&&a.children.length?(l(),d(n,{key:0,index:a.path},{title:r(()=>[a.meta.icon?(l(),d(y,{key:0,icon:a.meta.icon},null,8,["icon"])):j("",!0),_("span",null,M(a.meta.title),1)]),default:r(()=>[i(s,{menus:a.children},null,8,["menus"])]),_:2},1032,["index"])):(l(),d(c,{key:1,index:a.path},{title:r(()=>[k(M(a.meta.title),1)]),default:r(()=>[a.meta.icon?(l(),d(y,{key:0,icon:a.meta.icon},null,8,["icon"])):j("",!0)]),_:2},1032,["index"]))],64))),128)}}});const Ue=E({props:{menus:{type:Array,default:()=>[]},collapse:{type:Boolean,default:!1}},setup(e){console.log(e);const o=q().currentRoute,s=R(()=>o.value.meta.active?o.value.meta.active:o.value.path);return(n,c)=>{const a=fe;return l(),d(a,{class:"el-menu-vertical-demo",router:"","default-active":A(s),collapse:e.collapse},{default:r(()=>[i(Ne,{menus:e.menus},null,8,["menus"])]),_:1},8,["default-active","collapse"])}}});var Q=m(Ue,[["__scopeId","data-v-5ba48006"]]),qe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q}),ze="data:image/png;base64,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";const He=(e,t)=>{let o=t;typeof t=="object"&&(o=JSON.stringify(t)),window.localStorage.setItem(e,o)},Ye=e=>{const t=window.localStorage.getItem(e);try{return JSON.parse(t||"0")}catch{return t}},Ze=e=>{window.localStorage.removeItem(e)},Ke=()=>!!Ye("token"),Je=e=>{const t=e||32,o="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";let s="";for(let n=0;n<t;n+=1)s+=o.charAt(Math.floor(Math.random()*62));return s},We={state:{token:"",roles:[]},mutations:{SET_TOKEN:(e,t)=>{e.token=t},SET_ROLES:(e,t)=>{e.roles=t}},actions:{async login({commit:e},t){const{account:o,password:s}=t;if(o==="moko.admin"&&s==="admin"){const n={code:0,data:{name:"Moko",token:Je(64),roles:["admin"]},message:"\u767B\u5F55\u6210\u529F\uFF01"};return n.code||await Promise.all([He("token",n.data.token),e("SET_TOKEN",n.data.token),e("SET_ROLES",n.data.roles)]),n}return{code:1,data:null,message:"\u8D26\u53F7\u6216\u5BC6\u7801\u9519\u8BEF\uFF01"}},logout({commit:e}){return new Promise(t=>{Ze("token"),e("SET_TOKEN",null),t(!0)})},getUserInfo({commit:e}){return new Promise(t=>{const o=["admin"];e("SET_ROLES",o),t({roles:o})})}}},Qe=(e,t)=>{if(t.meta&&t.meta.permission){let o=!1;for(let s=0,n=e.length;s<n;s+=1)if(o=t.meta.permission.includes(e[s]),o)return!0;return!1}return!0},X=(e,t)=>e.filter(s=>Qe(t,s)?(s.children&&s.children.length&&(s.children=X(s.children,t)),!0):!1),Xe={state:{routers:[]},mutations:{SET_ROUTERS:(e,t)=>{e.routers=t}},actions:{generateRoutes({commit:e},t){return new Promise(o=>{const{roles:s}=t,n=X(se,s);e("SET_ROUTERS",n),o(!0)})}}},$e={state:{isCollapse:!1,allStatus:[]},mutations:{SET_COLLAPSE:e=>{e.isCollapse=!e.isCollapse}},actions:{setCollpase({commit:e}){return e("SET_COLLAPSE")}}},$=Symbol(""),p=he({modules:{user:We,permission:Xe,app:$e}});function ee(){return ve($)}const te=e=>(z("data-v-4c61a698"),e=e(),H(),e),et={class:"moko-global-header"},tt={class:"moko-global-header-logo"},ot=te(()=>_("img",{src:ze,class:"moko-logo-img",alt:"logo"},null,-1)),nt={key:0,class:"moko-logo-title"},st={class:"moko-global-header-breadcrumb"},at={class:"menu"},rt={class:"moko-global-header-content"},it={class:"content-item user"},ct={class:"user-info"},lt=te(()=>_("span",{class:"user-info-name"},"admin",-1)),ut=k("\u4E2A\u4EBA\u4FE1\u606F"),_t=k(" \u9000\u51FA\u767B\u5F55 "),dt=E({setup(e){const t=ee(),o=q(),s=R(()=>o.currentRoute.value.matched),n=R(()=>t.state.app.isCollapse),c=()=>o.push({path:"/user/login"});return(a,x)=>{const v=y,P=Ee,T=ge,C=Ae,b=ye,w=be,L=ke,I=Re;return l(),h("div",et,[_("div",tt,[ot,A(n)?j("",!0):(l(),h("span",nt," Moko Pro "))]),_("div",st,[_("div",at,[i(v,{icon:"Menu"})]),i(T,{separator:"/"},{default:r(()=>[(l(!0),h(S,null,U(A(s),f=>(l(),d(P,{key:f.path,to:{path:f.path}},{default:r(()=>[k(M(f.meta.title),1)]),_:2},1032,["to"]))),128))]),_:1})]),_("div",rt,[i(I,{wrap:"",size:"medium"},{default:r(()=>[_("div",it,[i(L,{class:"dropdown",placement:"top"},{dropdown:r(()=>[i(w,null,{default:r(()=>[i(b,null,{default:r(()=>[ut]),_:1}),i(b,{onClick:c},{default:r(()=>[_t]),_:1})]),_:1})]),default:r(()=>[_("div",ct,[i(C,{size:"small",style:{cursor:"pointer"},src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}),lt])]),_:1})])]),_:1})])])}}});var oe=m(dt,[["__scopeId","data-v-4c61a698"]]),mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});const pt={class:"aside-link"},ft=E({setup(e){const t=ee(),o=Oe([]),s=t.state.permission.routers.find(a=>a.path==="/");s&&(o.value=s.children);const n=R(()=>t.state.app.isCollapse),c=()=>t.dispatch("setCollpase");return(a,x)=>{const v=oe,P=xe,T=Q,C=Te,b=y,w=Pe,L=g("router-view"),I=Y,f=Z;return l(),d(f,{class:"basic-layout"},{default:r(()=>[i(P,{class:"basic-layout-header"},{default:r(()=>[i(v)]),_:1}),i(f,null,{default:r(()=>[i(w,{class:"basic-layout-aside",width:"auto"},{default:r(()=>[i(C,null,{default:r(()=>[i(T,{menus:o.value,collapse:A(n)},null,8,["menus","collapse"])]),_:1}),_("div",pt,[i(b,{icon:A(n)?"Expand":"Fold",onClick:c},null,8,["icon"])])]),_:1}),i(I,{class:"basic-layout-main"},{default:r(()=>[i(L)]),_:1})]),_:1})]),_:1})}}});var ht=m(ft,[["__scopeId","data-v-3bc836cb"]]);const vt={},Et={class:"blank-layout"};function gt(e,t){const o=g("router-view");return l(),h("div",Et,[i(o,null,{default:r(({Component:s})=>[i(Ce,{mode:"out-in",name:"fade-transform"},{default:r(()=>[(l(),d(we,null,[(l(),d(N(s)))],1024))]),_:2},1024)]),_:1})])}var O=m(vt,[["render",gt],["__scopeId","data-v-132e255d"]]);const At={},ne=e=>(z("data-v-12befa9c"),e=e(),H(),e),yt=ne(()=>_("div",{class:"footer-links"},[_("a",{href:"_self"},"\u5E2E\u52A9"),_("a",{href:"_self"},"\u9690\u79C1"),_("a",{href:"_self"},"\u6761\u6B3E")],-1)),bt=ne(()=>_("div",{class:"footer-copyright"}," Copyright \xA9 2021 MokoPro ",-1));function kt(e,t){const o=g("router-view"),s=Y,n=Le,c=Z;return l(),d(c,{class:"user-layout"},{default:r(()=>[i(s,{class:"user-layout-content"},{default:r(()=>[i(o)]),_:1}),i(n,{class:"user-layout-footer"},{default:r(()=>[yt,bt]),_:1})]),_:1})}var Rt=m(At,[["render",kt],["__scopeId","data-v-12befa9c"]]);const se=[{path:"/",component:ht,redirect:"/dashboard",meta:{title:"\u9996\u9875",permission:["admin"]},children:[{path:"/dashboard",name:"Dashboard",meta:{title:"\u5DE5\u4F5C\u53F0",icon:"Platform",keepAlive:!0,permission:["admin"]},component:()=>u(()=>import("./index.74fbc3ff.js"),["assets/index.74fbc3ff.js","assets/index.77b52d2a.css","assets/row.176c1f68.css","assets/col.833f0a9d.css","assets/card.4e685351.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/list",name:"List",redirect:"/list/search",meta:{title:"\u5217\u8868",icon:"Histogram",keepAlive:!0,permission:["admin"]},component:O,children:[{path:"/list/basic-list",name:"ListBasic",meta:{title:"\u6807\u51C6\u5217\u8868",keepAlive:!0,permission:["admin"]},component:()=>u(()=>import("./index.2dcd792f.js"),["assets/index.2dcd792f.js","assets/index.4a99f4a9.css","assets/card.4e685351.css","assets/form-item.621c9a5a.css","assets/date-picker.bc8294cb.css","assets/checkbox.c198de8b.css","assets/select.dc290845.css","assets/row.176c1f68.css","assets/col.833f0a9d.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css","assets/index.57776dcf.js","assets/index.1ef9c3d3.css"])},{path:"/list/query-list",name:"ListQuery",meta:{title:"\u67E5\u8BE2\u5217\u8868",keepAlive:!0,permission:["admin"]},component:()=>u(()=>import("./index.a81f6614.js"),["assets/index.a81f6614.js","assets/card.4e685351.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/list/card-list",name:"ListCard",meta:{title:"\u5361\u7247\u5217\u8868",keepAlive:!0,permission:["admin"]},component:()=>u(()=>import("./index.e46df83a.js"),["assets/index.e46df83a.js","assets/card.4e685351.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])}]},{path:"/form",name:"Form",redirect:"/form/basic-form",meta:{title:"\u8868\u5355",icon:"Promotion",keepAlive:!1,permission:["admin"]},component:O,children:[{path:"/form/basic-form",name:"FormBasic",meta:{title:"\u57FA\u7840\u8868\u5355",permission:["admin"]},component:()=>u(()=>import("./basic.1d9fd983.js"),["assets/basic.1d9fd983.js","assets/basic.c66c5bfd.css","assets/card.4e685351.css","assets/form-item.621c9a5a.css","assets/checkbox.c198de8b.css","assets/col.833f0a9d.css","assets/date-picker.bc8294cb.css","assets/select.dc290845.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/form/step-form",name:"FormStep",meta:{title:"\u5206\u6B65\u8868\u5355",permission:["admin"]},component:()=>u(()=>import("./step.c0e2e514.js"),["assets/step.c0e2e514.js","assets/card.4e685351.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/form/advanced-form",name:"FormAdvanced",meta:{title:"\u5BCC\u6587\u672C",permission:["admin"]},component:()=>u(()=>import("./advanced.430296f1.js"),["assets/advanced.430296f1.js","assets/card.4e685351.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])}]},{path:"/result",name:"Result",meta:{title:"\u7ED3\u679C",icon:"Comment",keepAlive:!1,permission:["admin"]},component:O,children:[{path:"/result/success",meta:{title:"\u6210\u529F",keepAlive:!1,permission:["admin"]},component:()=>u(()=>import("./success.2595365a.js"),["assets/success.2595365a.js","assets/success.91e63867.css","assets/card.4e685351.css","assets/result.3d33722a.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/result/fail",meta:{title:"\u5931\u8D25",keepAlive:!1,permission:["admin"]},component:()=>u(()=>import("./fail.f77e0bba.js"),["assets/fail.f77e0bba.js","assets/fail.4db77057.css","assets/card.4e685351.css","assets/result.3d33722a.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])}]},{path:"/exception",name:"Exception",redirect:"/exception/404",meta:{title:"\u5F02\u5E38",icon:"WarningFilled",keepAlive:!1,permission:["admin"]},component:O,children:[{path:"/exception/403",meta:{title:"403",keepAlive:!1,permission:["admin"]},component:()=>u(()=>import("./403.0ad9aa69.js"),["assets/403.0ad9aa69.js","assets/card.4e685351.css","assets/result.3d33722a.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/exception/404",meta:{title:"404",keepAlive:!1,permission:["admin"]},component:()=>u(()=>import("./404.1007c2b5.js"),["assets/404.1007c2b5.js","assets/card.4e685351.css","assets/result.3d33722a.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},{path:"/exception/500",meta:{title:"500",keepAlive:!1,permission:["admin"]},component:()=>u(()=>import("./500.a3b2e897.js"),["assets/500.a3b2e897.js","assets/card.4e685351.css","assets/result.3d33722a.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])}]}]},{path:"/user",redirect:"/user/login",component:Rt,children:[{path:"login",name:"UserLogin",component:()=>u(()=>import("./login.3d0235cd.js"),["assets/login.3d0235cd.js","assets/login.7312bb78.css","assets/form-item.621c9a5a.css","assets/checkbox.c198de8b.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])}]}],B=Ie({history:De(),routes:se}),Ot={};function xt(e,t){const o=g("router-view");return l(),d(o)}var Pt=m(Ot,[["render",xt]]);const Tt={"/src/components/GlobalHeader/index.vue":()=>u(()=>Promise.resolve().then(function(){return mt}),void 0),"/src/components/MenuSideBar/index.vue":()=>u(()=>Promise.resolve().then(function(){return qe}),void 0),"/src/components/MokoIcon/index.vue":()=>u(()=>Promise.resolve().then(function(){return Ge}),void 0),"/src/components/MokoSvg/index.vue":()=>u(()=>import("./index.ab05b42c.js"),["assets/index.ab05b42c.js","assets/index.d66ac888.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"]),"/src/components/MokoTable/index.vue":()=>u(()=>import("./index.57776dcf.js"),["assets/index.57776dcf.js","assets/index.1ef9c3d3.css","assets/row.176c1f68.css","assets/col.833f0a9d.css","assets/checkbox.c198de8b.css","assets/select.dc290845.css","assets/vendor.b2fd24f8.js","assets/vendor.ae8322fa.css"])},ae=D({},Tt),Ct=Object.keys(ae);var wt={install(e){Ct.map(t=>{const o=t.split("/")[3];return e.component(o,Se(ae[t]))})}};const Lt=["/user/login"];B.beforeEach(async(e,t,o)=>{if(K.start(),Ke())if(e.path==="/user/login")o();else if(p.state.user.roles&&p.state.user.roles.length>0)p.dispatch("generateRoutes",{roles:p.state.user.roles}),o();else{const{roles:n}=await p.dispatch("getUserInfo");await p.dispatch("generateRoutes",{roles:n}),o(G(D({},e),{replace:!0}))}else Lt.indexOf(e.path)!==-1?o():o(`/user/login?redirect=${e.path}`)});B.afterEach(()=>{K.done()});const re=je(Pt);Object.keys(J).forEach(e=>{re.component(e,J[e])});re.use(B).use(p,$).use(wt).mount("#app");export{m as _,y as a,ze as b,ee as u};
