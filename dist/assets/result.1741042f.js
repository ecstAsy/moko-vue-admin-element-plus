import{cj as _,G as b,ck as y,cl as h,h as k,d as x,j as w,v as z,o,k as n,f as p,l as i,u as l,c as C,n as r,C as $,m as a,t as f,q as S,s as B}from"./index.b18c6dcf.js";const t={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},m={[t.success]:_,[t.warning]:b,[t.error]:y,[t.info]:h},E=k({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),I={name:"ElResult"},j=x({...I,props:E,setup(v){const d=v,s=w("result"),c=z(()=>{const e=d.icon,u=e&&t[e]?t[e]:"icon-info",g=m[u]||m["icon-info"];return{class:u,component:g}});return(e,u)=>(o(),n("div",{class:r(l(s).b())},[p("div",{class:r(l(s).e("icon"))},[i(e.$slots,"icon",{},()=>[l(c).component?(o(),C($(l(c).component),{key:0,class:r(l(c).class)},null,8,["class"])):a("v-if",!0)])],2),e.title||e.$slots.title?(o(),n("div",{key:0,class:r(l(s).e("title"))},[i(e.$slots,"title",{},()=>[p("p",null,f(e.title),1)])],2)):a("v-if",!0),e.subTitle||e.$slots["sub-title"]?(o(),n("div",{key:1,class:r(l(s).e("subtitle"))},[i(e.$slots,"sub-title",{},()=>[p("p",null,f(e.subTitle),1)])],2)):a("v-if",!0),e.$slots.extra?(o(),n("div",{key:2,class:r(l(s).e("extra"))},[i(e.$slots,"extra")],2)):a("v-if",!0)],2))}});var N=S(j,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const T=B(N);export{T as E};
