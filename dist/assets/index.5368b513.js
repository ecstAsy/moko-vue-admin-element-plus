import{h as y,i as o,y as n,d as h,z as g,v as c,j as $,A as f,B as N,o as _,c as C,w as j,l as x,n as v,u as r,p as O,C as w,q as E,s as k}from"./index.b18c6dcf.js";const S=Symbol("rowContextKey"),B=y({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:o([Number,Object]),default:()=>n({})},sm:{type:o([Number,Object]),default:()=>n({})},md:{type:o([Number,Object]),default:()=>n({})},lg:{type:o([Number,Object]),default:()=>n({})},xl:{type:o([Number,Object]),default:()=>n({})}}),K={name:"ElCol"},P=h({...K,props:B,setup(m){const t=m,{gutter:u}=g(S,{gutter:c(()=>0)}),a=$("col"),d=c(()=>{const e={};return u.value&&(e.paddingLeft=e.paddingRight=`${u.value/2}px`),e}),b=c(()=>{const e=[];return["span","offset","pull","push"].forEach(s=>{const l=t[s];f(l)&&(s==="span"?e.push(a.b(`${t[s]}`)):l>0&&e.push(a.b(`${s}-${t[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{f(t[s])?e.push(a.b(`${s}-${t[s]}`)):N(t[s])&&Object.entries(t[s]).forEach(([l,p])=>{e.push(l!=="span"?a.b(`${s}-${l}-${p}`):a.b(`${s}-${p}`))})}),u.value&&e.push(a.is("guttered")),e});return(e,i)=>(_(),C(w(e.tag),{class:v([r(a).b(),r(b)]),style:O(r(d))},{default:j(()=>[x(e.$slots,"default")]),_:3},8,["class","style"]))}});var q=E(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const I=k(q);export{I as E,S as r};
