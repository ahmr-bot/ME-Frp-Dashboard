import{_ as C}from"./list.eb503bc4.js";import{r as b,bz as g,c as F,w as n,a as l,o as r,b as e,d as p,e as s,f as v,F as c,h as t,t as _}from"./index.49e2322e.js";const M=t("div",null,"MirrorEdge \u5C5E\u4E8E \u7EAF\u516C\u76CA\u670D\u52A1, \u4E0D\u9650\u5E26\u5BBD/\u6D41\u91CF\uFF0C\u6839\u672C\u662F\u4E0D\u80FD\u76C8\u5229\u7684\uFF0C\u505A\u8FD9\u4E48\u4E45\u7684\u514D\u8D39\u670D\u52A1\u4E5F\u7EAF\u7EAF\u9760\u826F\u5FC3\uFF0C\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u89C9\u5F97 \u955C\u7F18\u6620\u5C04 \u662F\u4E2A\u597D\u670D\u52A1",-1),N=t("div",null,"\u90A3\u4E48\u5C31\u8BF7\u5C3D\u60A8\u7684\u7EF5\u8584\u4E4B\u529B\uFF0C\u52A9\u6211\u4EEC\u8D70\u7684\u66F4\u4E45\u5427\uFF01",-1),$=t("div",null,"\u670D\u52A1\u5668\u8D5E\u52A9\u8BF7\u8054\u7CFB 1878832944",-1),j=t("br",null,null,-1),D={class:"overflow-auto"},L={class:"table table-hover"},O=t("thead",null,[t("tr",null,[t("th",null,"\u540D\u79F0"),t("th",null,"\u63CF\u8FF0")])],-1),S=t("br",null,null,-1),T={class:"overflow-auto"},U={class:"table table-hover"},q=t("thead",null,[t("tr",null,[t("th",null,"\u6635\u79F0"),t("th",null,"\u8D5E\u52A9\u9879\u76EE"),t("th",null,"\u7559\u8A00")])],-1),A={data:()=>({drawer:null})},J=Object.assign(A,{__name:"zanzhu",setup(G){const m=b({});g({method:"get",url:"https://raw.cdn.mcserverx.com/ahmr-bot/sponsor-list/main/sponsor.json"}).then(o=>{console.log(o.data),m.value=o.data});const h=b({});return g({method:"get",url:"https://raw.cdn.mcserverx.com/ahmr-bot/sponsor-list/main/ads.json"}).then(o=>{console.log(o.data),h.value=o.data}),(o,d)=>{const w=l("v-app-bar-nav-icon"),x=l("v-toolbar-title"),y=l("v-app-bar"),V=l("v-navigation-drawer"),f=l("v-btn"),k=l("v-card-text"),i=l("v-card"),B=l("v-container"),E=l("v-main"),z=l("v-app");return r(),F(z,{id:"inspire"},{default:n(()=>[e(y,{color:"primary"},{default:n(()=>[e(w,{onClick:d[0]||(d[0]=u=>o.drawer=!o.drawer)}),e(x,null,{default:n(()=>[p("MirrorEdge Frp \u63A7\u5236\u9762\u677F")]),_:1})]),_:1}),e(V,{modelValue:o.drawer,"onUpdate:modelValue":d[1]||(d[1]=u=>o.drawer=u),"expand-on-hover":"",rail:"",permanent:""},{default:n(()=>[e(C)]),_:1},8,["modelValue"]),e(E,null,{default:n(()=>[e(B,null,{default:n(()=>[(r(),s(c,null,v(1,u=>(r(),s(c,{key:u},[e(i,{text:"MirrorEdge \u955C\u7F18\u6620\u5C04 \u8D5E\u52A9\u6211\u4EEC"},{default:n(()=>[e(k,null,{default:n(()=>[M,N,e(f,{color:"primary",href:"https://afdian.net/a/aehxy"},{default:n(()=>[p("\u8D5E\u52A9(\u73B0\u91D1)")]),_:1}),$]),_:1})]),_:1}),j,e(i,{text:"\u5E7F\u544A\u4F4D"},{default:n(()=>[t("div",D,[t("table",L,[O,t("tbody",null,[(r(!0),s(c,null,v(h.value,a=>(r(),s("tr",null,[t("td",null,_(a.name),1),t("td",null,_(a.des),1),e(f,{color:"primary",href:a.url},{default:n(()=>[p("\u6253\u5F00")]),_:2},1032,["href"])]))),256))])])])]),_:1}),S,e(i,{text:"\u8D5E\u52A9\u5217\u8868"},{default:n(()=>[t("div",T,[t("table",U,[q,t("tbody",null,[(r(!0),s(c,null,v(m.value,a=>(r(),s("tr",null,[t("td",null,_(a.name),1),t("td",null,_(a.thing),1),t("td",null,_(a.says),1)]))),256))])])])]),_:1})],64))),64))]),_:1})]),_:1})]),_:1})}}});export{J as default};
