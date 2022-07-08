import{c9 as D,bn as _,br as K,O as T,W as U,h as X,bu as G,d as J,aW as Q,j as Y,v as Z,o as k,k as ee,f as S,l as z,n as p,u as c,c as E,w as I,a as M,K as $,a5 as O,N as P,m as R,p as A,am as te,q as ne,s as se}from"./index.876b0848.js";var oe=/\s/;function re(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var ae=/^\s+/;function ie(e){return e&&e.slice(0,re(e)+1).replace(ae,"")}var H=0/0,le=/^[-+]0x[0-9a-f]+$/i,ce=/^0b[01]+$/i,ue=/^0o[0-7]+$/i,fe=parseInt;function L(e){if(typeof e=="number")return e;if(D(e))return H;if(_(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ie(e);var n=ce.test(e);return n||ue.test(e)?fe(e.slice(2),n?2:8):le.test(e)?H:+e}var de=function(){return K.Date.now()},B=de,me="Expected a function",pe=Math.max,ge=Math.min;function Ce(e,t,n){var r,s,u,l,i,o,f=0,v=!1,m=!1,g=!0;if(typeof e!="function")throw new TypeError(me);t=L(t)||0,_(n)&&(v=!!n.leading,m="maxWait"in n,u=m?pe(L(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g);function w(a){var d=r,h=s;return r=s=void 0,f=a,l=e.apply(h,d),l}function V(a){return f=a,i=setTimeout(y,t),v?w(a):l}function j(a){var d=a-o,h=a-f,x=t-d;return m?ge(x,u-h):x}function N(a){var d=a-o,h=a-f;return o===void 0||d>=t||d<0||m&&h>=u}function y(){var a=B();if(N(a))return W(a);i=setTimeout(y,j(a))}function W(a){return i=void 0,g&&r?w(a):(r=s=void 0,l)}function F(){i!==void 0&&clearTimeout(i),f=0,r=o=s=i=void 0}function q(){return i===void 0?l:W(B())}function C(){var a=B(),d=N(a);if(r=arguments,s=this,o=a,d){if(i===void 0)return V(o);if(m)return clearTimeout(i),i=setTimeout(y,t),w(o)}return i===void 0&&(i=setTimeout(y,t)),l}return C.cancel=F,C.flush=q,C}const he=(e,t)=>{if(!T)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],r=U(e,n);return["scroll","auto","overlay"].some(s=>r.includes(s))},Se=(e,t)=>{if(!T)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(he(n,t))return n;n=n.parentNode}return n};let b;const Ee=()=>{var e;if(!T)return 0;if(b!==void 0)return b;const t=document.createElement("div");t.className="el-scrollbar__wrap",t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const n=t.offsetWidth;t.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",t.appendChild(r);const s=r.offsetWidth;return(e=t.parentNode)==null||e.removeChild(t),b=n-s,b};function Ie(e,t){if(!T)return;if(!t){e.scrollTop=0;return}const n=[];let r=t.offsetParent;for(;r!==null&&e!==r&&e.contains(r);)n.push(r),r=r.offsetParent;const s=t.offsetTop+n.reduce((o,f)=>o+f.offsetTop,0),u=s+t.offsetHeight,l=e.scrollTop,i=l+e.clientHeight;s<l?e.scrollTop=s:u>i&&(e.scrollTop=u-e.clientHeight)}const ve=X({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:G,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),ye={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},ke={name:"ElTag"},be=J({...ke,props:ve,emits:ye,setup(e,{emit:t}){const n=e,r=Q(),s=Y("tag"),u=Z(()=>{const{type:o,hit:f,effect:v,closable:m,round:g}=n;return[s.b(),s.is("closable",m),s.m(o),s.m(r.value),s.m(v),s.is("hit",f),s.is("round",g)]}),l=o=>{t("close",o)},i=o=>{t("click",o)};return(o,f)=>o.disableTransitions?(k(),ee("span",{key:0,class:p(c(u)),style:A({backgroundColor:o.color}),onClick:i},[S("span",{class:p(c(s).e("content"))},[z(o.$slots,"default")],2),o.closable?(k(),E(c(P),{key:0,class:p(c(s).e("close")),onClick:O(l,["stop"])},{default:I(()=>[M(c($))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)):(k(),E(te,{key:1,name:`${c(s).namespace.value}-zoom-in-center`,appear:""},{default:I(()=>[S("span",{class:p(c(u)),style:A({backgroundColor:o.color}),onClick:i},[S("span",{class:p(c(s).e("content"))},[z(o.$slots,"default")],2),o.closable?(k(),E(c(P),{key:0,class:p(c(s).e("close")),onClick:O(l,["stop"])},{default:I(()=>[M(c($))]),_:1},8,["class","onClick"])):R("v-if",!0)],6)]),_:3},8,["name"]))}});var Te=ne(be,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Be=se(Te);export{Be as E,Se as a,Ce as d,Ee as g,Ie as s,ve as t};
