import{d as p,k as v,r as c,s as n,l as g,v as m,b as y,h as a,C as f,m as w}from"./app-9046fa85.js";const R=e=>JSON.parse(decodeURIComponent(e));var _=p({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const r=v(),o=c(!0),t=n(),l=n(),s=g(()=>m({},r,R(e.settings))),u=async()=>{const{ReplStore:i,Repl:d}=await w(()=>import("./vue-repl-029df539.js"),["assets/vue-repl-029df539.js","assets/app-9046fa85.js"]);t.value=d,l.value=new i({serializedState:decodeURIComponent(e.files)}),s.value.vueVersion&&await l.value.setVueVersion(s.value.vueVersion)};return y(async()=>{await u(),o.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[o.value?a(f,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...s.value,layout:"horizontal"}):null])])]}});export{_ as default};
