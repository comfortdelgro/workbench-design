import{j as e}from"./jsx-runtime-9ef10904.js";import{u as G,a as J,s as K,b as Q,c as V,d as X,e as Y,F as Z,f as ee,o as se,g as oe,h as te}from"./floating-ui.react.esm-06842318.js";import{R as n,r as y}from"./index-6c164b11.js";import{C as re,c as m}from"./objectToCSS-e90bd687.js";const ae="_popoverWrapper_t9n1d_3",ne="_anchorWrapper_t9n1d_16",u={popoverWrapper:ae,anchorWrapper:ne},pe=10,E=n.forwardRef((W,p)=>{const{anchor:_,css:O={},children:h,className:g,delay:N=0,trigger:I="click",shouldFlip:k=!0,isOpen:o,offset:v=void 0,defaultOpen:w=!1,direction:s="bottom",isFloatingPortal:C=!0,allowOutsidePress:S=!0,disableInteractive:D=!1,onClose:l,onOpenChange:P,onPositionedChange:c,onOutsidePress:f}=W,[r,x]=y.useState(w===!0),[M,t]=y.useState("bottom");n.useEffect(()=>{t(s==="bottom-right"?"bottom-end":s==="bottom-center"?"bottom":s==="bottom-left"?"bottom-start":s==="top-right"?"top-end":s==="top-left"?"top-start":s==="top-center"?"top":s)},[s]);const{x:T,y:U,refs:a,strategy:z,context:i,isPositioned:F}=G({open:r,onOpenChange:P||x,placement:M,whileElementsMounted:ee,middleware:[se(v!==void 0?v:pe),k?oe():null,te()]}),A=J(i,{move:!1,restMs:N,enabled:I!=="click",handleClose:D?null:K()}),H=Q(i),L=V(i,{outsidePress:()=>(f==null||f(),S)}),$=X(i,{role:"dialog"}),{getReferenceProps:q,getFloatingProps:B}=Y([A,H,L,$]),b={style:{position:z,top:U??0,left:T??0,zIndex:61},...B()},j=d=>{var R;(R=a.setFloating)==null||R.call(a,d),typeof p=="function"?p(d):p!=null&&(p.current=d)};return n.useEffect(()=>{c==null||c(F)},[c,F]),n.useEffect(()=>{o!=null&&x(o)},[o]),n.useEffect(()=>{r||l==null||l()},[r,l]),e.jsxs(e.Fragment,{children:[e.jsx(re,{css:O,childrenRef:a.setReference,children:e.jsx("div",{...q(),ref:a.setReference,className:m(u.popoverWrapper,"cdg-popover-anchor"),children:_})}),C?e.jsx(Z,{children:(o??r)&&e.jsxs("div",{...b,ref:j,className:m(u.popoverWrapper,g,"cdg-popover"),children:[h," "]})}):e.jsx(e.Fragment,{children:(o??r)&&e.jsxs("div",{...b,ref:j,className:m(u.popoverWrapper,g,"cdg-popover"),children:[h," "]})})]})});E.__docgenInfo={description:"",methods:[],displayName:"Popover"};E.displayName="Popover";export{E as P};
