import{s as l,r as A,f as p}from"./index-0d2c4177.js";import{F as a}from"./index.es-26e19131.js";import{s as S,R,a as o,j as i,F as u}from"./index-f44380ee.js";import{A as t,a as f}from"./index-c321ebbf.js";import"./index-fc832232.js";import{C as c}from"./components-46861628.js";import{L as r,a as s,b as h,c as g,D as $}from"./index-25d3e237.js";import{S as C,a as k}from"./avatar-group.styles-5fd76033.js";import{u as B}from"./useCurrentTheme-ac0af65c.js";import{B as n}from"./badge-27879f27.js";import"./use-dom-ref-586729b0.js";import"./index-848668cb.js";import"./button-75352c4c.js";import"./badge.styles-399e433c.js";import"./lodash-ec382a18.js";import"./get-icon-from-color-604734d4.js";const F=S("div",{padding:"$4",backgroundColor:"$background",borderRadius:"$md","& .interactive-list-header":{display:"flex",justifyContent:"space-between",alignItems:"center"},[`& ${C}`]:{height:"$8",width:"$8"},[`.interactive-list-header ${k}`]:{marginRight:"$1"},[`.interactive-list-header ${k} ${C}`]:{marginRight:"-$1",fontSize:"1px"},"& .interactive-list-body":{marginTop:"$6",display:"flex",flexDirection:"column",gap:"$2"},"& .interactive-list-title":{margin:0,fontSize:"$header5",color:"$gray90",lineHeight:"24px",fontWeight:"bold"},"& .interactive-list-description":{margin:0,fontSize:"$body3",color:"$gray70",lineHeight:"21px"},"& .interactive-list-icon-wrapper":{display:"flex",alignItems:"center"},"& .interactive-list-chevron-icon":{width:"$4",height:"$6_5",color:"$primaryText"},variants:{variant:{dropdown:{display:"flex",flexDirection:"row",gap:"$2","& .interactive-list-dropdown-body":{display:"flex",flexDirection:"column",gap:"$2"}},default:{}}}}),E=R.forwardRef((m,I)=>{const{groupLabel:v,avatar:b,title:x,description:T,variant:w="default",showIcon:N=!1,css:D={},...y}=m;return w==="dropdown"?o(F,{variant:w,ref:I,css:D,...y,children:[i("div",{className:"interactive-list-avatar",children:b||i(u,{})}),o("div",{className:"interactive-list-dropdown-body",children:[i("h2",{className:"interactive-list-title",children:x}),i("span",{className:"interactive-list-description",children:T})]}),N?i("div",{className:"interactive-list-icon-wrapper",children:i("svg",{className:"interactive-list-chevron-icon",viewBox:"0 0 320 512",children:i("path",{fill:"currentColor",d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})}):i(u,{})]}):i(F,{ref:I,css:D,variant:w,...y,children:o("div",{children:[o("div",{className:"interactive-list-header",children:[i(u,{children:v||i(u,{})}),i(u,{children:b||i(u,{})})]}),o("div",{className:"interactive-list-body",children:[x?i("h2",{className:"interactive-list-title",children:x}):i(u,{})," ",T?i("span",{className:"interactive-list-description",children:T}):i(u,{})]})]})})}),d=E,e="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",L={display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"24px 12px",marginBottom:"12px"},Y=()=>o(c,{children:[o("div",{style:L,children:[o(c,{children:[i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"})})]}),o(c,{children:[i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"})})]}),o(c,{children:[i(r,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",descriptionIcon:i(a,{style:{width:14,height:14,color:"#0142AF"},icon:A}),variant:"h5",leftInfo:i(s,{variant:"h5",isRounded:!0,src:e,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply",icon:i(a,{icon:l})}}),i(r,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:i(s,{variant:"h5",isRounded:!0,src:e,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}}),i(r,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:i(s,{variant:"h5",isRounded:!0,src:e,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"},descriptionIcon:i(a,{style:{width:14,height:14,color:"#0142AF"},icon:A})}),i(r,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:i(s,{variant:"h5",isRounded:!0,src:e,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}}),i(r,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:i(s,{variant:"h5",isRounded:!0,src:e,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}})]}),o(c,{children:[i(r,{title:"Title",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(a,{icon:p})})]}),o(c,{children:[i(r,{title:"Title",description:"Line 1",rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",description:"Line 1",rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1"})]}),o(c,{children:[i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{icon:i(a,{icon:l})}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1"})]}),o(c,{children:[i(r,{size:"sm",leftInfo:i(a,{icon:p}),title:"Title",description:"Lorem Ipsum",css:{maxWidth:"198px"}}),i(r,{size:"sm",isDisabled:!0,leftInfo:i(a,{icon:p}),title:"Title",description:"Lorem Ipsum",css:{maxWidth:"198px"}})]})]}),o("div",{style:L,children:[o(c,{children:[i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details"}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"})})]}),o(c,{children:[i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{icon:i(a,{icon:l})}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"}),rightInfo:{text:"Details"}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(s,{src:e,alt:"singapore"})})]}),o(c,{children:[i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(a,{icon:p}),rightInfo:{text:"Details"}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(a,{icon:p})})]}),o(c,{children:[i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{icon:i(a,{icon:l})}}),i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{title:"Title",variant:"item",description:"Line 1"})]}),o(c,{children:[i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{text:"Details",icon:i(a,{icon:l})}}),i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{icon:i(a,{icon:l})}}),i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{icon:i(n,{color:"danger",label:"+99"})}}),i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{variant:"item",isDisabled:!0,title:"Title",description:"Line 1"})]})]})]}),Z=()=>o(c,{children:[i("h3",{children:"Without details"}),i(h,{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"}}),i(h,{title:"Lorem Ipsum",showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"}}),i(h,{title:"Lorem Ipsum",isDisabled:!0,showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"}}),i("h3",{children:"With details (Avatar)"}),i(h,{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:i(g,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})}),i(h,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:i(g,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})}),o(h,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:[i(g,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"}),i(g,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})]}),i(h,{isDisabled:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:i(g,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})}),i("h3",{children:"With details (Avatar Group)"}),i(h,{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:i(g,{title:"Detail 1",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})})}),o(h,{title:"Lorem Ipsum",showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:[i(g,{title:"Detail 1",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})}),i(g,{title:"Detail 1",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})})]}),o(h,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:[i(g,{title:"Detail 1",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})}),i(g,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})]}),o(h,{isDisabled:!0,showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:"347px",backgroundColor:"$background"},children:[i(g,{title:"Detail 1",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})}),i(g,{title:"Detail 1",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})})]})]}),ii=()=>{const m=i("div",{style:{width:"84px",height:"58px",backgroundColor:"#009EDA",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"white",fontSize:"28px",fontWeight:"bold"},children:"XXX"});return o(c,{children:[o("div",{style:L,children:[i(d,{groupLabel:m,avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(d,{groupLabel:m,title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(d,{avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(d,{groupLabel:m,avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),title:"Title",css:{width:"315px",height:"fit-content"}}),i(d,{groupLabel:m,title:"Title",css:{width:"315px",height:"fit-content"}}),i(d,{title:"Title",avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),css:{width:"315px",height:"fit-content"}}),i(d,{groupLabel:m,avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(d,{groupLabel:m,description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(d,{avatar:o(f,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}})]}),o("div",{style:L,children:[i(d,{variant:"dropdown",avatar:i(t,{image:e}),title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}}),i(d,{variant:"dropdown",title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}}),i(d,{showIcon:!0,variant:"dropdown",avatar:i(t,{image:e}),title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}}),i(d,{showIcon:!0,variant:"dropdown",title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}})]})]})},ti=()=>{const[m,I]=R.useState(["red","green","blue"]);return i($,{onReorderByKeys:v=>I(v),css:{width:400},children:m.map(v=>i($.Item,{children:i(h,{title:String(v),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(n,{label:"Active",color:"success",variant:"primary"}),css:{width:400,backgroundColor:"$background"}})},v))})},ei={decorators:[m=>{const I=B();return o("div",{children:[i("style",{dangerouslySetInnerHTML:{__html:`${I?"":".ladle-main { background: #eee; }"}`}}),i(m,{})]})}]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ti as DragAndDrop,ii as InteractiveLists,Z as ListCards,Y as Variants,ei as default};