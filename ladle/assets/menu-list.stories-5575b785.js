import{C as l}from"./index-48eeab0c.js";import{s as g,R as m,j as e,r as L,a}from"./index-a9394308.js";import{C as H}from"./components-40200149.js";import{$ as O}from"./module-af3c5f9f.js";import{a as b}from"./index-ae5d3c63.js";import{u as k}from"./use-dom-ref-9247c37d.js";import"./module-e7f31da0.js";import"./module-927f59d1.js";import"./_define_property-1764bf98.js";import"./module-0c186aed.js";const P=g("div",{width:"$48",background:"$secondaryBg",borderRight:"1px solid $gray50",padding:"$4 $2",overflow:"auto"}),S=m.forwardRef((i,c)=>{const{children:d,className:o="",css:t={},...s}=i;return e(P,{className:`${o} menu-list`,ref:c,css:t,...s,children:d})}),y=S,x=m.createContext({}),N=g("button",{border:0,margin:0,display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer",minHeight:"$10",backgroundColor:"inherit",padding:"$1_5",textAlign:"left","&:focus-visible":{outline:"#678ECF solid 2px"},"& .menu-list-dropdown-title":{color:"$gray100",fontSize:"$3_5",fontWeight:"$semibold",margin:0},"& .menu-list-dropdown-chevron-down-left-icon":{marginRight:"$2_5"},"& .menu-list-dropdown-chevron-down-right-icon":{marginLeft:"auto"},[`& .menu-list-dropdown-chevron-down-left-icon.rotated-icon,
   & .menu-list-dropdown-chevron-down-right-icon.rotated-icon`]:{transform:"rotate(180deg)"}}),E=m.forwardRef((i,c)=>{const{children:d,leftIcon:o,rightIcon:t,onPress:s,className:u="",css:h={},...p}=i,{isOpen:r,toggleOpen:w}=L.useContext(x),$=k(c),v=R=>{s&&s(R),w&&w()},{buttonProps:f}=O({onPress:v,...p},$),M=()=>o===void 0?e("div",{className:`menu-list-dropdown-chevron-down-left-icon ${r?"rotated-icon":""}`,children:e(C,{})}):o===!1?null:e("div",{className:`menu-list-dropdown-chevron-down-left-icon ${r?"rotated-icon":""}`,children:e(b,{icon:o})}),I=()=>t===!0?e("div",{className:`menu-list-dropdown-chevron-down-right-icon ${r?"rotated-icon":""}`,children:e(C,{})}):t===void 0?null:e("div",{className:`menu-list-dropdown-chevron-down-right-icon ${r?"rotated-icon":""}`,children:e(b,{icon:t})}),D=()=>typeof d=="string"?e("h2",{className:"menu-list-dropdown-title",children:d}):d;return a(N,{className:`${u} menu-list-dropdown-header`,ref:c,css:h,...f,children:[M(),D(),I()]})}),A=E,C=i=>e("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:e("path",{d:"M5.15244 6.82759C5.62099 7.28332 6.38193 7.28332 6.85048 6.82759L11.6485 2.16093C11.9933 1.82551 12.0945 1.32603 11.9071 0.888532C11.7197 0.451032 11.2849 0.166656 10.7976 0.166656L1.20159 0.170303C0.718038 0.170303 0.279471 0.454678 0.0920492 0.892178C-0.0953726 1.32968 0.00958361 1.82916 0.350691 2.16457L5.14869 6.83124L5.15244 6.82759Z",fill:"#605E5C"})}),j=g("div",{minHeight:"$10",display:"flex",flexDirection:"row",color:"$gray80",padding:"$2 $3",borderRadius:"$md",cursor:"pointer",alignItems:"center","&:hover":{backgroundColor:"$background"},"&:focus-visible":{outline:"#678ECF solid 2px"},"& .menu-list-dropdown-item-icon":{marginRight:"$2",width:"$4",height:"$4"},variants:{active:{active:{backgroundColor:"$background"},default:{}},disabled:{true:{color:"$gray50","& .menu-list-dropdown-item-icon":{color:"$gray50"},"&:hover":{backgroundColor:"inherit",cursor:"not-allowed"}}},nested:{nested:{paddingTop:0,"&:hover":{backgroundColor:"inherit"},[`& ${N}`]:{padding:0}},default:{}}}}),_=m.forwardRef((i,c)=>{const{children:d,isActive:o,isNested:t,isDisabled:s,icon:u,className:h="",css:p={},...r}=i;return a(j,{className:`${h} menu-list-dropdown-item`,active:o?"active":"default",nested:t?"nested":"default",disabled:!!s,ref:c,css:p,tabIndex:s?1:0,...r,children:[u&&e(b,{icon:u,className:"menu-list-dropdown-item-icon"}),d]})}),B=_,F=g("div",{display:"flex",flexDirection:"column",color:"$gray100",width:"100%"}),T=m.forwardRef((i,c)=>{const{children:d,isOpen:o,onMenuListChange:t,defaultOpen:s=!0,className:u="",css:h={},...p}=i,[r,w]=L.useState(o??s),[$,...v]=m.Children.toArray(d),f=o!==void 0,M=()=>{f&&t&&t(!r),w(I=>!I)};return e(F,{className:`${u} menu-list-dropdown`,ref:c,css:h,...p,children:a(x.Provider,{value:{isOpen:f?o:r,toggleOpen:M},children:[$,(f?o:r)&&v]})})}),n=T;n.Header=A;n.Item=B;n.Header.displayName="MenuListDropdown.Header";n.Item.displayName="MenuListDropdown.Item";y.displayName="MenuList";const X=()=>e(H,{children:a(y,{css:{height:"800px"},children:[a(n,{children:[e(n.Header,{children:"Dashboard"}),e(n.Item,{children:"Menu"}),e(n.Item,{isActive:!0,children:"Menu"}),e(n.Item,{children:"Menu"}),e(n.Item,{children:"Menu"}),e(n.Item,{children:"Menu"}),e(n.Item,{children:"Menu"}),e(n.Item,{children:"Menu"})]}),a(n,{children:[e(n.Header,{leftIcon:!1,rightIcon:!0,children:"More menu"}),e(n.Item,{icon:l,children:"Menu"}),e(n.Item,{icon:l,children:"Menu"}),e(n.Item,{icon:l,children:"Menu"}),e(n.Item,{isNested:!0,children:a(n,{children:[e(n.Header,{children:"Nested menu"}),e(n.Item,{icon:l,children:"Menu"}),e(n.Item,{icon:l,children:"Menu"}),e(n.Item,{icon:l,children:"Menu"}),e(n.Item,{icon:l,children:"Menu"})]})})]})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{X as MenuLists};
