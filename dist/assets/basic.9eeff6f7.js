import{d as A,G as P,a7 as q,ac as w,ad as j,ae as U,af as G,ag as N,a0 as R,al as S,am as z,an as I,ao as T,ap as $,aq as L,ab as O,ah as H,a4 as J,c as K,w as l,o as M,h as e,n as u,g,i}from"./vendor.25d6d6b7.js";/* empty css             *//* empty css                  *//* empty css                 *//* empty css            *//* empty css                    *//* empty css               */const Q=g("div",{class:"card-header"},[g("span",null,"\u57FA\u7840\u8868\u5355")],-1),W=i(" - "),X=i(" \u63D0\u4EA4 "),Y=i(" \u91CD\u7F6E "),se=A({setup(Z){const n=P(null),o=q({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),f={name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]},E=async()=>{try{return await n.value.validate(),console.log("submit"),!0}catch{return console.log("error submit!!"),!1}},b=()=>n.value.resetFields();return(F,a)=>{const m=w,r=j,p=U,y=G,V=N,d=R,v=S,k=z,s=I,B=T,c=$,h=L,_=O,x=H,D=J;return M(),K(D,{class:"basic-form"},{header:l(()=>[Q]),default:l(()=>[e(x,{ref:(t,C)=>{C.basicForm=t,n.value=t},model:u(o),rules:f,size:"medium","label-width":"340px",class:"demo-ruleForm"},{default:l(()=>[e(r,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[e(m,{modelValue:u(o).name,"onUpdate:modelValue":a[0]||(a[0]=t=>u(o).name=t),class:"form-item-340",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(r,{label:"\u533A\u57DF",prop:"region"},{default:l(()=>[e(y,{modelValue:u(o).region,"onUpdate:modelValue":a[1]||(a[1]=t=>u(o).region=t),class:"form-item-340",placeholder:"\u8BF7\u9009\u62E9\u533A\u57DF"},{default:l(()=>[e(p,{label:"\u4E0A\u6D77",value:"shanghai"}),e(p,{label:"\u5317\u4EAC",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u65E5\u671F",required:""},{default:l(()=>[e(d,{span:11},{default:l(()=>[e(r,{prop:"date1"},{default:l(()=>[e(V,{modelValue:u(o).date1,"onUpdate:modelValue":a[2]||(a[2]=t=>u(o).date1=t),type:"date",placeholder:"\u9009\u62E9\u65E5\u671F",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{class:"line",span:2},{default:l(()=>[W]),_:1}),e(d,{span:11},{default:l(()=>[e(r,{prop:"date2"},{default:l(()=>[e(v,{modelValue:u(o).date2,"onUpdate:modelValue":a[3]||(a[3]=t=>u(o).date2=t),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,{label:"\u72B6\u6001",prop:"delivery"},{default:l(()=>[e(k,{modelValue:u(o).delivery,"onUpdate:modelValue":a[4]||(a[4]=t=>u(o).delivery=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u7EBF\u8DEF",prop:"type"},{default:l(()=>[e(B,{modelValue:u(o).type,"onUpdate:modelValue":a[5]||(a[5]=t=>u(o).type=t)},{default:l(()=>[e(s,{label:"\u7EBF\u8DEF1",name:"1"}),e(s,{label:"\u7EBF\u8DEF2",name:"2"}),e(s,{label:"\u7EBF\u8DEF3",name:"3"}),e(s,{label:"\u7EBF\u8DEF4",name:"4"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u7C7B\u578B",prop:"resource"},{default:l(()=>[e(h,{modelValue:u(o).resource,"onUpdate:modelValue":a[6]||(a[6]=t=>u(o).resource=t)},{default:l(()=>[e(c,{label:"\u5355\u7EBF\u7A0B"}),e(c,{label:"\u591A\u7EBF\u7A0B"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5907\u6CE8",prop:"desc"},{default:l(()=>[e(m,{modelValue:u(o).desc,"onUpdate:modelValue":a[7]||(a[7]=t=>u(o).desc=t),class:"form-item-340",type:"textarea"},null,8,["modelValue"])]),_:1}),e(r,null,{default:l(()=>[e(_,{type:"primary",onClick:a[8]||(a[8]=t=>E())},{default:l(()=>[X]),_:1}),e(_,{onClick:a[9]||(a[9]=t=>b())},{default:l(()=>[Y]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}});export{se as default};