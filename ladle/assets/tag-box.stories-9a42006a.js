import{a as y}from"./index-5bcd9fe0.js";import{s as $,R as h,j as e,a as x,r as te}from"./index-12a99532.js";import"./index-ab5e21ba.js";import{I as v}from"./index-47dcf69c.js";import{C as Z}from"./components-79765e20.js";import{p as ne}from"./pick-child-338c91cc.js";import{u as k}from"./use-dom-ref-2bd5dd1a.js";import{B as w}from"./button-6255561c.js";import"./index.es-a3c5d794.js";import"./ripple-01c7c154.js";const ie=$("div",{width:"100%"}),oe=$("div",{width:"100%",display:"flex",label:{fontSize:"$body3",fontWeight:"$semibold",display:"inline-block",span:{marginLeft:"$1",color:"$danger"}},variants:{labelPosition:{top:{flexDirection:"column",gap:"$2"},left:{flexDirection:"row",gap:"$8",label:{maxWidth:"33%",flexShrink:0,width:"max-content"}}}}}),V=$("div",{marginTop:"$1",width:"$6",height:"$6",display:"flex",flexShrink:0,justifyContent:"center",alignItems:"center",userSelect:"none",svg:{width:"$4",height:"$4"}}),re=$("div",{flexGrow:1,backgroundColor:"$background",borderWidth:"1px",borderStyle:"solid",borderColor:"$divider",padding:"$2 $4",borderRadius:"$md",display:"flex",gap:"$4","&:focus-within":{borderColor:"$cdgBlue",outline:"1px $cdgBlue solid",".left-icon":{color:"$cdgBlue"}},variants:{collaspable:{true:{},false:{minHeight:"$32"}},isErrored:{true:{borderColor:"$danger",outline:"1px $danger solid","&:focus-within":{borderColor:"$danger",outline:"1px $danger solid"}}}}}),le=$("div",{flexGrow:1,display:"flex",alignItems:"center",height:"fit-content",flexWrap:"wrap",gap:"$4",input:{fontSize:"$body3",border:"none",background:"transparent",outline:"none",width:4,padding:0}}),K=$("div",{fontSize:"$label2",fontWeight:"$semibold",backgroundColor:"$primaryBg",padding:"$2",gap:"$3",height:"min-content",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"$md",svg:{width:"$3",height:"$3"},"&:hover":{backgroundColor:"$darkerBg",color:"$black"},input:{fontSize:"$label2",fontWeight:"$semibold",height:"fit-content",padding:0,margin:0},button:{width:"16px",height:"16px",padding:0,margin:0,border:0,display:"flex",alignItems:"center",justifyContent:"center"},variants:{isDisabled:{true:{background:"$secondaryBg",cursor:"not-allowed",opacity:.4},false:{"tag-box-x-icon":{cursor:"pointer"}}},isError:{true:{border:"1px solid $danger"}}}}),ae=$("div",{width:"100%",marginTop:"$2",fontSize:"$label3",color:"$gray60",fontWeight:"$semibold",display:"flex",alignItems:"center",span:{flexGrow:1}}),de=$("div",{width:"max-content",height:"min-content"}),se=$("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"},false:{color:"$gray70"}}}}),ce=h.forwardRef((t,u)=>{const{css:i={},children:r,...l}=t,n=k(u);return e(de,{css:i,ref:n,...l,children:r})}),U=ce,ue=h.forwardRef((t,u)=>{const{wrapperRef:i,onEnter:r=()=>{},...l}=t,n=k(u);return e("input",{ref:n,type:"text",onChange:g=>{if(i.current){const m=g.target.value;if(m!==""){const c=document.createElement("div");c.style.position="absolute",c.style.top="0",c.style.left="-9999px",c.style.overflow="hidden",c.style.visibility="hidden",c.style.whiteSpace="nowrap",c.style.fontSize="0.875rem",c.style.fontWeight="400",c.style.lineHeight="1.15",c.style.height="0",c.style.width="fit-content",c.style.maxWidth=`${i.current.clientWidth-62}px`,c.innerHTML=m.replace(/\s/g,"&nbsp;"),document.body.appendChild(c),g.target.focus(),g.target.style.width=`${c.clientWidth+4}px`,c.remove()}else g.target.style.width="4px"}},onKeyDown:g=>{const m=g.target.value;m!==""&&g.key==="Enter"&&(r(m),n.current&&(n.current.value="",n.current.style.width="4px"))},...l})}),he=ue,ge=h.forwardRef((t,u)=>{const{isDisabled:i=!1,isError:r,icon:l,value:n,id:f,wrapperRef:g,onRemove:m,onEdit:c,calculateRemainingItems:R,...j}=t,[S,M]=h.useState(!1),[I,A]=h.useState(n),p=h.useRef(null),W=k(u),H=()=>{i||(M(!0),setTimeout(()=>{var a;(a=p==null?void 0:p.current)==null||a.focus()}))},E=(a,b)=>{const d=document.createElement("div");d.style.position="absolute",d.style.top="0",d.style.left="-9999px",d.style.overflow="hidden",d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.style.height="0",d.style.width="fit-content",d.style.fontSize="12px",d.style.fontWeight="600",d.style.maxWidth=`${g.current.clientWidth-62}px`,d.innerHTML=a.replace(/\s/g,"&nbsp;"),document.body.appendChild(d),b(d.clientWidth),d.remove()},N=a=>{const b=a.target.value;A(b),R(),b!==""?E(b,d=>{a.target.focus(),a.target.style.width=`${d+4}px`}):a.target.style.width="4px"},D=()=>{i||m==null||m(f)},z=a=>{var d;const b=a.target.value;b!==""&&a.key==="Enter"&&(c==null||c(f,b),(d=p==null?void 0:p.current)==null||d.blur()),(a.key=="Escape"||a.keyCode==27)&&L()};h.useEffect(()=>{const a=n;a!==""&&E(a,b=>{p.current&&(p.current.focus(),p.current.style.width=`${b+4}px`,p.current.style.maxWidth=`${g.current.clientWidth-62}px`)}),A(n)},[n]);const L=()=>{A(n),M(!1),E(n,a=>{p.current&&(p.current.style.width=`${a+4}px`)})};return x(K,{isDisabled:i,isError:r,ref:W,...j,children:[l,e("input",{ref:p,value:I,onKeyDown:z,onClick:H,onChange:N,onBlur:L,style:{display:S?"block":"none"}}),e("span",{onClick:H,style:{display:S?"none":"block",cursor:i?"not-allowed":"text"},children:n}),e("button",{onClick:D,tabIndex:i?-1:0,style:{cursor:i?"not-allowed":"pointer"},children:e(pe,{})})]})}),pe=({...t})=>e("svg",{...t,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e("path",{d:"M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z",fill:"#201F1E"})}),fe=ge,me=h.forwardRef((t,u)=>{const{css:i={},id:r,labelPosition:l="top",collaspable:n=!1,typeable:f=!1,items:g,helperText:m,children:c,isErrored:R,isRequired:j,errorMessage:S,onRemove:M,onAdd:I,onEdit:A,label:p,icon:W,...H}=t,E=k(null),N=k(u),{child:D}=ne(c,U),[z,L]=h.useState(0),a=h.useRef(null),b=h.useRef(null),[d,Y]=h.useState([]),[T,ee]=h.useState(!1);h.useEffect(()=>{Y(o=>Array(g.length).fill(0).map((C,F)=>o[F]||te.createRef()))},[g]);const P=()=>{var F,O;let o=((F=a.current)==null?void 0:F.clientWidth)??0,C=0;for(const B of d)B.current&&B.current.removeAttribute("style");for(const B of d){const q=(O=B.current)==null?void 0:O.clientWidth;if(q){const G=o-q-16;G>37?o=G:(B.current.style.display="none",C++)}}L(Math.min(C,99))};return h.useEffect(()=>{if(n&&!T)P();else{for(const o of d)o.current&&o.current.removeAttribute("style");L(0)}},[d,T,n]),h.useEffect(()=>{const o=a.current;if(!o)return;const C=new ResizeObserver(()=>{T||P()});return C.observe(o),()=>{C.disconnect()}},[a.current,T]),x(ie,{css:i,ref:N,...H,children:[x(oe,{labelPosition:l,onClick:()=>{var o;return(o=E.current)==null?void 0:o.focus()},children:[p&&x("label",{htmlFor:r,children:[p,j&&e("span",{children:"*"})]}),x("div",{children:[x(re,{id:r,ref:b,tabIndex:0,collaspable:n,isErrored:!!R,onFocus:()=>{var o;(o=E.current)==null||o.focus()},"aria-label":t["aria-label"],"aria-details":t["aria-details"],"aria-labelledby":t["aria-labelledby"],"aria-describedby":t["aria-describedby"],children:[W&&e(V,{children:W}),x(le,{ref:a,children:[g.map((o,C)=>e(fe,{isDisabled:!!o.isDisabled,isError:!!o.isError,ref:d[C],wrapperRef:a,icon:o.icon,value:o.value,id:o.id,onEdit:A,onRemove:M,calculateRemainingItems:P},o.id)),z>0&&e(K,{children:x("span",{children:["+",z]})},"remainingCount"),(!n&&f||n&&f&&T)&&e(he,{ref:E,wrapperRef:a,onEnter:o=>I==null?void 0:I(o)})]}),n&&e(V,{css:{cursor:"pointer"},onClick:()=>ee(o=>!o),children:T?e(xe,{}):e(be,{})})]}),R&&S&&e(se,{error:!!R,children:S})]})]}),(m||D)&&x(ae,{children:[e("span",{children:m})," ",D]})]})}),be=({...t})=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...t,children:e("path",{d:"M11.9991 18C11.5301 18 11.0608 17.8186 10.7033 17.4559L1.53708 8.1702C0.820973 7.44475 0.820973 6.26953 1.53708 5.54408C2.25319 4.81864 3.41329 4.81864 4.12939 5.54408L11.9991 13.5196L19.8706 5.54554C20.5867 4.82009 21.7468 4.82009 22.4629 5.54554C23.179 6.27098 23.179 7.44621 22.4629 8.17165L13.2967 17.4574C12.9387 17.8201 12.4689 18 11.9991 18Z",fill:"#201F1E"})}),xe=({...t})=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...t,children:e("path",{d:"M12.0009 5C12.4699 5 12.9392 5.18136 13.2967 5.54409L22.4629 14.8298C23.179 15.5552 23.179 16.7305 22.4629 17.4559C21.7468 18.1814 20.5867 18.1814 19.8706 17.4559L12.0009 9.48036L4.12939 17.4545C3.41329 18.1799 2.25319 18.1799 1.53708 17.4545C0.820973 16.729 0.820973 15.5538 1.53708 14.8284L10.7033 5.54264C11.0613 5.17991 11.5311 5 12.0009 5Z",fill:"#201F1E"})}),s=me;s.Action=U;s.displayName="TagBox";s.Action.displayName="TagBox.Action";const X=[{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 1",icon:e(v,{icon:y})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 2",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 3",icon:e(v,{icon:y})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 4",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 5",icon:e(v,{icon:y}),isError:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 6",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 7",icon:e(v,{icon:y})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 8",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 9",icon:e(v,{icon:y})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 10",isDisabled:!0}],_=(t,u)=>u(i=>i.filter(r=>r.id!==t)),J=(t,u)=>u(i=>[...i,{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:t}]),Q=(t,u,i)=>i(r=>{const l=[...r];return l.forEach((n,f)=>{if(n.id===t){const g={...l[f]};g.value=u,l[f]=g}}),l}),Ae=()=>{const[t,u]=h.useState(X),i=n=>_(n,u),r=n=>J(n,u),l=(n,f)=>Q(n,f,u);return x(Z,{children:[e("h3",{children:"Fully Functional"}),e(s,{label:"Text Label",items:t,icon:e(v,{icon:y}),isRequired:!0,onAdd:r,onEdit:l,onRemove:i,helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"Typeable"}),e(s,{label:"Text Label",items:t,typeable:!0,icon:e(v,{icon:y}),onAdd:r,onEdit:l,onRemove:i,helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"Error"}),e(s,{label:"Text Label",items:t,icon:e(v,{icon:y}),onAdd:r,onEdit:l,onRemove:i,isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"Positioned Label"}),e(s,{items:t,onAdd:r,onEdit:l,onRemove:i,labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"No Action"}),e(s,{label:"Text Label",items:t,onAdd:r,onEdit:l,onRemove:i,helperText:"Helper text"}),e("h3",{children:"No Helper text and Action"}),e(s,{label:"Text Label",items:t,onAdd:r,onEdit:l,onRemove:i})]})},Le=()=>{const[t,u]=h.useState(X),i=n=>_(n,u),r=n=>J(n,u),l=(n,f)=>Q(n,f,u);return x(Z,{children:[e("h3",{children:"Fully Functional"}),e(s,{label:"Text Label",collaspable:!0,isRequired:!0,items:t,icon:e(v,{icon:y}),onAdd:r,onEdit:l,onRemove:i,helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"Typeable"}),e(s,{label:"Text Label",collaspable:!0,typeable:!0,items:t,icon:e(v,{icon:y}),onAdd:r,onEdit:l,onRemove:i,helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"Error"}),e(s,{label:"Text Label",collaspable:!0,items:t,icon:e(v,{icon:y}),onAdd:r,onEdit:l,onRemove:i,isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"Positioned Label"}),e(s,{collaspable:!0,items:t,onAdd:r,onEdit:l,onRemove:i,labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e(s.Action,{children:e(w,{children:"Call to action"})})}),e("h3",{children:"No Action"}),e(s,{label:"Text Label",collaspable:!0,items:t,onAdd:r,onEdit:l,onRemove:i,helperText:"Helper text"}),e("h3",{children:"No Helper text and Action"}),e(s,{collaspable:!0,label:"Text Label",items:t,onAdd:r,onEdit:l,onRemove:i})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Le as Collaspable,Ae as TagBoxs};
