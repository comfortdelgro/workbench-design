import{c as y,E as P,n as i,z as w,J as S,K as C,L as I}from"./index-5bcd9fe0.js";import{a as n,j as e,s as l,r as b,F as c}from"./index-bbce26b5.js";import{A as D}from"./index-6a83a151.js";import{I as s}from"./index-371fc560.js";import{R as z}from"./components-0a4e624a.js";import{S as o,a as k}from"./index-9f0537a6.js";import"./use-dom-ref-b98156a9.js";import"./avatar-group.styles-ffd873b4.js";import"./index.es-ba0ab138.js";import"./floating-ui.react.esm-69870459.js";const F=l("div",{display:"flex",alignItems:"center",gap:"12px",width:"100%"}),M=l("div",{padding:"10px 5px",background:"$gray40",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"}),B=l("p",{margin:0,color:"#333333",borderRight:"0.5px solid #333333",fontSize:12,fontFamily:"Poppins",paddingRight:3}),E=l("div",{display:"flex",flexDirection:"column",fontFamily:"Poppins",justifyContent:"center",marginLeft:8}),T=l("b",{fontSize:14,lineHeight:"21px",color:"$gray100",margin:0}),W=l("span",{fontSize:12,lineHeight:"18px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"$gray70"}),K=()=>{const[a,g]=b.useState(1),u=[{id:1,icon:i,title:"Placeholder",children:[{id:11,title:"Placeholder item with a really long name that makes this menu item width over screen to test the layout",icon:i},{id:12,title:"Placeholder",icon:i},{id:13,title:"Placeholder",icon:i,children:[{id:11,title:"Placeholder",icon:i},{id:12,title:"Placeholder",icon:i,children:[{id:11,title:"Placeholder",icon:i},{id:12,title:"Placeholder",icon:i},{id:13,title:"Placeholder",icon:i,children:[{id:11,title:"Placeholder",icon:i},{id:12,title:"Placeholder",icon:i},{id:13,title:"Placeholder",icon:i}]}]},{id:13,title:"Placeholder",icon:i}]}]},{id:2,icon:w,title:"Placeholder"},{id:3,icon:S,title:"Placeholder"},{id:4,icon:C,title:"Placeholder"},{id:5,icon:I,title:"Placeholder"}],x=(t,r)=>{t.preventDefault(),g(r)},p=t=>{const{id:r,icon:h,title:m,children:d,isMenu:v}=t;return n(o.Item,{isActive:v?!1:a===r,children:[h?e(s,{icon:h}):e(c,{}),m?n("span",{children:[m," ",d?"→":""]}):e(c,{}),d?e(k,{shouldFlip:!0,children:d.map(f=>e(p,{isMenu:!0,...f},f.id))}):e(c,{})]})};return e(z,{css:{position:"relative"},children:n(o,{css:{height:"800px",position:"absolute",top:"0px",zIndex:2,padding:"16px 0"},expand:!1,onExpandChange:t=>{console.log(`Sidenav expanded: ${t}`)},delay:200,children:[n(o.Item,{css:{"&.cdg-sidenav-item":{marginBottom:"36px"}},children:[e("div",{style:{width:"40px"},children:e(D,{label:"M"})}),e("h2",{style:{fontSize:"24px",marginLeft:"22px",color:"#323130"},children:"Workbench"})]}),e(o.Item,{css:{"&.cdg-sidenav-item":{marginBottom:"36px"}},children:n(F,{children:[n(M,{children:[e(B,{children:"ZB"}),e(s,{icon:y,style:{width:11,height:7,color:"#333333",marginLeft:0}})]}),n(E,{children:[e(T,{children:"Zig Biz"}),e(W,{children:"Fri 18 Nov 2:25 PM"})]})]})}),e(o.Divider,{style:{marginBottom:"8px"}}),u.map(t=>e("a",{onClick:r=>{x(r,t.id)},href:"#",style:{color:"inherit",textDecoration:"none",outlineColor:"#678ECF"},children:e(p,{...t},t.id)},t.id)),e(o.Divider,{style:{margin:"8px 0"}}),n(o.Item,{css:{marginTop:"auto"},children:[e(s,{icon:P}),e("span",{children:"Placeholder"})]})]})})},N={decorators:[a=>n("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(a,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Default,N as default};
