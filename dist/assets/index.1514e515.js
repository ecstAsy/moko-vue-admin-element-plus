import{_ as o}from"./index.af02c9f7.js";import{d as a,l as n,o as l,b as i,g as s,n as f,V as c}from"./vendor.b2fd24f8.js";const d=["xlink:href","fill"],u=a({props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"},left:{type:Number,default:0},right:{type:Number,default:0},top:{type:Number,default:0}},setup(e){const t=e,r=n(()=>`#${t.prefix}-${t.name}`);return console.log(r.value),(m,p)=>(l(),i("svg",{class:"moko-svg","aria-hidden":"true",style:c({marginLeft:`${e.left}px`,marginRight:`${e.right}px`,marginTop:`${e.top}px`,color:e.color})},[s("use",{"xlink:href":f(r),fill:e.color},null,8,d)],4))}});var y=o(u,[["__scopeId","data-v-9c5fb054"]]);export{y as default};
