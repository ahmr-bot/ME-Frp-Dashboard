import{r as d,i as m,c as E,w as o,a as t,o as l,b as n,d as F,e as c,f,F as u,g as N,bs as S,h as s,t as g}from"./index.49e2322e.js";import{_ as x}from"./list.eb503bc4.js";const D=s("h3",{class:"mt-3"},"\u6574\u5408\u914D\u7F6E\u6587\u4EF6",-1),M=s("div",{class:"mt-3"},null,-1),T=s("option",{value:"0",selected:""},"\u5148\u9009\u62E9\u4E00\u4E2A\u670D\u52A1\u5668",-1),U=["value"],j=s("h3",{class:"mt-3"},"\u914D\u7F6E\u6587\u4EF6",-1),L={class:"w-100",rows:"50",readonly:""},O={data:()=>({drawer:null})},G=Object.assign(O,{__name:"Compact",setup(q){const p=d([]),v=d("0"),w=d([]),i=d("\u8BF7\u5148\u5728\u4E0A\u9762\u9009\u62E9\u670D\u52A1\u5668\u3002");m.get("/modules/frp/servers").then(a=>{p.value=a.data});function h(){m.get("/modules/frp/hosts?with_config=1&&server_id="+v.value).then(a=>{a.data.length>0?(w.value=a.data,i.value=a.data[0].config.server+`

`,a.data.forEach(e=>{i.value+=`
# ${e.name} \u5728 ${e.server.name} \u4E0A
${e.config.client}
`})):i.value="\u8FD9\u4E2A\u670D\u52A1\u5668\u4E0B\u6CA1\u6709\u96A7\u9053\u3002"})}return(a,e)=>{const b=t("v-app-bar-nav-icon"),V=t("v-toolbar-title"),$=t("v-app-bar"),k=t("v-navigation-drawer"),C=t("v-container"),y=t("v-main"),B=t("v-app");return l(),E(B,{id:"inspire"},{default:o(()=>[n($,{color:"primary"},{default:o(()=>[n(b,{onClick:e[0]||(e[0]=_=>a.drawer=!a.drawer)}),n(V,null,{default:o(()=>[F("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),n(k,{modelValue:a.drawer,"onUpdate:modelValue":e[1]||(e[1]=_=>a.drawer=_),"expand-on-hover":"",rail:"",permanent:""},{default:o(()=>[n(x)]),_:1},8,["modelValue"]),n(y,null,{default:o(()=>[n(C,null,{default:o(()=>[(l(),c(u,null,f(1,_=>(l(),c(u,{key:_},[D,M,N(s("select",{class:"form-control","onUpdate:modelValue":e[2]||(e[2]=r=>v.value=r),onChange:e[3]||(e[3]=r=>h())},[T,(l(!0),c(u,null,f(p.value,r=>(l(),c("option",{value:r.id},g(r.name),9,U))),256))],544),[[S,v.value]]),j,s("textarea",L,g(i.value),1)],64))),64))]),_:1})]),_:1})]),_:1})}}});export{G as default};
