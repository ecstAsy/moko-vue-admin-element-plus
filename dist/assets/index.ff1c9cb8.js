import{L as V,T as j,ad as F,d as O,r as S,be as P,c as T,w as p,u as R,o as _,ai as I,k as v,F as z,az as A,a as d,f as b,t as m,b as y,p as M,e as U}from"./index.1b35f382.js";import{E as $,P as K}from"./card.fc23ab91.js";import{v as W,m as Y}from"./index.1d4e8e7a.js";import{c as q,a as G,b as J,d as Q,e as X,f as Z,t as tt}from"./txt-bg.cfc37550.js";import{E as et}from"./index.8b5bd223.js";import{a as it,E as nt}from"./index.ea935453.js";import{E as ot}from"./index.91de7236.js";import{t as B,g as lt}from"./position.2b4b0df3.js";const f="ElInfiniteScroll",st=50,at=200,rt=0,ct={delay:{type:Number,default:at},distance:{type:Number,default:rt},disabled:{type:Boolean,default:!1},immediate:{type:Boolean,default:!0}},N=(t,i)=>Object.entries(ct).reduce((n,[e,a])=>{var g,r;const{type:s,default:u}=a,o=t.getAttribute(`infinite-scroll-${e}`);let c=(r=(g=i[o])!=null?g:o)!=null?r:u;return c=c==="false"?!1:c,c=s(c),n[e]=Number.isNaN(c)?u:c,n},{}),H=t=>{const{observer:i}=t[f];i&&(i.disconnect(),delete t[f].observer)},dt=(t,i)=>{const{container:n,containerEl:e,instance:a,observer:g,lastScrollTop:r}=t[f],{disabled:s,distance:u}=N(t,a),{clientHeight:o,scrollHeight:c,scrollTop:x}=e,w=x-r;if(t[f].lastScrollTop=x,g||s||w<0)return;let h=!1;if(n===t)h=c-(o+x)<=u;else{const{clientTop:E,scrollHeight:l}=t,k=lt(t,e);h=x+o>=k+E+l-u}h&&i.call(a)};function L(t,i){const{containerEl:n,instance:e}=t[f],{disabled:a}=N(t,e);a||n.clientHeight===0||(n.scrollHeight<=n.clientHeight?i.call(e):H(t))}const ft={async mounted(t,i){const{instance:n,value:e}=i;V(e)||j(f,"'v-infinite-scroll' binding value must be a function"),await F();const{delay:a,immediate:g}=N(t,n),r=it(t,!0),s=r===window?document.documentElement:r,u=B(dt.bind(null,t,e),a);if(!!r){if(t[f]={instance:n,container:r,containerEl:s,delay:a,cb:e,onScroll:u,lastScrollTop:s.scrollTop},g){const o=new MutationObserver(B(L.bind(null,t,e),st));t[f].observer=o,o.observe(t,{childList:!0,subtree:!0}),L(t,e)}r.addEventListener("scroll",u)}},unmounted(t){const{container:i,onScroll:n}=t[f];i==null||i.removeEventListener("scroll",n),H(t)},async updated(t){t[f]||await F();const{containerEl:i,cb:n,observer:e}=t[f];i.clientHeight&&e&&L(t,n)}},C=ft;C.install=t=>{t.directive("InfiniteScroll",C)};const ut=C;const pt={class:"infinite-list",style:{overflow:"auto"}},mt=y(" \u53D1\u5E03\u5728 "),gt={href:"/"},kt=O({__name:"index",setup(t){const i=S([]),n=S([q,G,J,Q,X,Z,tt]),e=S(!1),a=async()=>{e.value=!0;const g=await Y(1);i.value=[...i.value,...g.data.data],e.value=!1};return(g,r)=>{const s=et,u=nt,o=U,c=P,x=ot,w=$,h=ut,E=W;return _(),T(R(K),null,{default:p(()=>[I((_(),T(w,null,{default:p(()=>[I((_(),v("ul",pt,[(_(!0),v(z,null,A(i.value,(l,k)=>(_(),v("li",{key:k,class:"infinite-list-item"},[d(x,null,{default:p(()=>[d(s,{class:"list-title"},{default:p(()=>[b("b",null,m(l.name),1),b("div",null,m(l.signature),1)]),_:2},1024),d(s,{class:"list-tags"},{default:p(()=>[(_(!0),v(z,null,A(l.tags,D=>(_(),T(u,{key:D},{default:p(()=>[y(m(D),1)]),_:2},1024))),128))]),_:2},1024),d(s,{class:"list-content",style:M({backgroundImage:`url(${n.value[l.bgimg]})`})},{default:p(()=>[y(m(l.article),1)]),_:2},1032,["style"]),d(s,{class:"list-info"},{default:p(()=>[d(o,{icon:"Avatar"}),d(c,{type:"primary",text:""},{default:p(()=>[y(m(l.cname),1)]),_:2},1024),b("span",null,[mt,b("a",gt,m(l.dynamicType),1)]),b("span",null,m(l.date),1)]),_:2},1024),d(s,{class:"list-action"},{default:p(()=>[d(o,{icon:"Star"}),b("span",null,m(l.star),1),d(o,{icon:"ChatDotRound"}),b("span",null,m(l.like),1),d(o,{icon:"View"}),b("span",null,m(l.view),1)]),_:2},1024)]),_:2},1024)]))),128))])),[[h,a]])]),_:1})),[[E,e.value]])]),_:1})}}});export{kt as default};
