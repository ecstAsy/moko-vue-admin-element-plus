import{d as j,G as i,X as h,Y as k,Z as C,o as n,c as d,w as t,_ as E,h as l,b as x,e as y,F as S,$ as B,a0 as D,a1 as F,a2 as L,a3 as R,a4 as T}from"./vendor.9543d68f.js";/* empty css                *//* empty css            *//* empty css            *//* empty css                   *//* empty css              *//* empty css            *//* empty css               *//* empty css                 */const Z=j({props:{columns:null,load:null},setup(s){const p=s,o=i(!1),r=i([]),c=async()=>{o.value=!0;const a=await p.load();return r.value=a.data.list,o.value=!1,!0};h(()=>c());const u=a=>c();return(a,$)=>{const m=k,_=C,g=B,f=D,b=F,v=L;return n(),d(b,null,{default:t(()=>[E(l(_,{data:r.value,style:{width:"100%"}},{default:t(()=>[(n(!0),x(S,null,y(s.columns,e=>(n(),d(m,{key:e.key,prop:e.dataIndex,label:e.title},R({_:2},[e.scopedSlots?{name:"default",fn:t(w=>[T(a.$slots,e.scopedSlots.customRender,{row:w.row})])}:void 0]),1032,["prop","label"]))),128))]),_:3},8,["data"]),[[v,o.value]]),l(f,{align:"center",style:{margin:"24px 0"}},{default:t(()=>[l(g,{size:"medium",background:"",layout:"prev, pager, next",total:100,onCurrentChange:u})]),_:1})]),_:3})}}});export{Z as default};