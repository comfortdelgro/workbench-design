import{s as b,R as o,r as y,j as a,a as g}from"./index-f44380ee.js";import{u as h}from"./use-dom-ref-586729b0.js";const w=b("span",{textDecoration:"none",transition:"$default",variants:{active:{true:{color:"$typeHeading"},false:{color:"$info"}},disabled:{true:{color:"$disabledText",cursor:"not-allowed"}}}}),x=o.forwardRef((e,l)=>{const{css:d={},href:c,target:s,isCurrent:r=!1,isDisabled:n=!1,children:m,...i}=e,u=y.useMemo(()=>r||n?"span":"a",[r,n]),t=h(l);return a("li",{children:a(w,{as:u,css:d,ref:t,href:c,target:s,className:r?"active":"",active:!!r,disabled:!!n,"aria-disabled":e["aria-disabled"],onBlur:e.onBlur,onClick:e.onClick,onDragStart:e.onDragStart,onFocus:e.onFocus,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,onMouseDown:e.onMouseDown,onPointerDown:e.onPointerDown,onPointerUp:e.onPointerUp,tabIndex:e.tabIndex,...i,children:m})})}),B=x,D=b("nav",{fontFamily:"$sans",ol:{padding:0,display:"flex",flexWrap:"wrap",gap:"$2",flexDirection:"row",alignItems:"center",listStyle:"none"},".divider":{color:"$primaryText",svg:{width:"$3_5",height:"$3_5"}}}),v=o.forwardRef((e,l)=>{const{css:d={},dividerIcon:c=a("svg",{viewBox:"0 0 320 512",children:a("path",{fill:"currentColor",d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})}),isCurrent:s,children:r,...n}=e,m=h(l),i=o.Children.toArray(r);return a(D,{css:d,ref:m,"aria-label":"Breadcrumbs",...n,children:a("ol",{children:i.map((u,t)=>g(o.Fragment,{children:[o.cloneElement(u,{isCurrent:s?s(t):!1}),t<i.length-1&&a("li",{"aria-hidden":!0,className:"divider",children:c})]},t))})})}),f=v;f.Item=B;f.Item.displayName="Breadcrumbs.Item";f.displayName="Breadcrumbs";export{f as B,w as S};