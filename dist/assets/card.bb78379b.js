import{h as v,i as b,d as p,j as g,o as t,k as i,n as l,u as s,l as o,b as f,t as h,m as u,f as r,p as c,q as _,s as y,_ as m,v as w,x,F as $}from"./index.876b0848.js";const k=v({header:{type:String,default:""},bodyStyle:{type:b([String,Object,Array]),default:""},shadow:{type:String,values:["always","hover","never"],default:"always"}}),C={name:"ElCard"},S=p({...C,props:k,setup(n){const e=g("card");return(a,d)=>(t(),i("div",{class:l([s(e).b(),s(e).is(`${a.shadow}-shadow`)])},[a.$slots.header||a.header?(t(),i("div",{key:0,class:l(s(e).e("header"))},[o(a.$slots,"header",{},()=>[f(h(a.header),1)])],2)):u("v-if",!0),r("div",{class:l(s(e).e("body")),style:c(a.bodyStyle)},[o(a.$slots,"default")],6)],2))}});var B=_(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const F=y(B),P={class:"page-wraper"},z={style:{"font-size":"18px"}},E={class:"page-wraper-header-extra"},N={class:"page-wraper-content"},I=p({__name:"index",props:{title:{default:""},height:{default:48},header:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0}},setup(n){const e=n,a=w(()=>()=>x.state.app.isCollapse);return(d,V)=>(t(),i("div",P,[e.header?(t(),i($,{key:0},[r("div",{class:"page-wraper-header",style:c({height:`${e.height}px`})},[r("div",{class:l(`page-wraper-header-title ${s(a)()?"isCollapse":""}`)},[o(d.$slots,"title",{},()=>[r("b",z,h(e.title),1)],!0)],2),r("div",E,[o(d.$slots,"extra",{},void 0,!0)])],4),r("div",{style:c({height:`${e.height}px`})},null,4)],64)):u("",!0),r("div",N,[o(d.$slots,"default",{},void 0,!0)])]))}});var T=m(I,[["__scopeId","data-v-d586d5b6"]]);export{F as E,T as P};