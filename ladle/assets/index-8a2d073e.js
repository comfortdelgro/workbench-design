import{s,R as r,j as m,a as D}from"./index-f44380ee.js";import{p as h}from"./pick-child-e105db02.js";import{u as b}from"./use-dom-ref-586729b0.js";import{P as W}from"./index-85fbc0f8.js";const q=s("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",paddingLeft:"$4",paddingRight:"$4",width:"100%",height:"32.143%",display:"flex",justifyContent:"space-between",alignItems:"center"}),B=s("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",paddingTop:"$4",paddingBottom:"$4",width:"80%",height:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$primaryText"}),L=s("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",width:"100%",height:"10.124%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText",borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}),O=s("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",backgroundColor:"$primaryBg",width:"100%",height:"17.857%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2"}),_=s("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"#00000066",position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",zIndex:"49",display:"flex",justifyContent:"center",alignItems:"center"}),K=s("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"$3_5",height:"$3_5",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",color:"$primaryText","& *":{width:"100%",height:"100%"},"&:focus-visible":{outline:"2px solid $cdgBlue60"}}),V=s("div",{all:"unset",width:"fit-content",height:"fit-content"}),G=s("div",{all:"unset",appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",minHeight:"$56",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",borderRadius:"$lg",overflow:"clip",variants:{size:{sm:{width:"$75"},md:{width:"$125"},lg:{width:"$200"}}},defaultVariants:{size:"md"}}),J=r.forwardRef((i,a)=>{const{children:d,css:n={},...t}=i,o=b(a);return m(O,{css:n,ref:o,...t,children:d})}),k=J,Q=r.forwardRef((i,a)=>{const{children:d,css:n={},onClose:t,...o}=i,p=b(a);return m(K,{css:n,ref:p,onClick:()=>t==null?void 0:t(),tabIndex:0,...o,children:d})}),C=Q,U=r.forwardRef((i,a)=>{const{children:d,css:n={},...t}=i,o=b(a);return m(L,{css:n,ref:o,...t,children:d})}),j=U,X=r.forwardRef((i,a)=>{const{children:d,css:n={},...t}=i,o=b(a);return m(B,{css:n,ref:o,...t,children:d})}),F=X,Y=r.forwardRef((i,a)=>{const{css:d={},children:n,isOpen:t=!1,handleClose:o,id:p,size:M="md",...R}=i,w=b(a),S=b(null),{child:f}=h(n,l),c=g=>{g.stopPropagation(),g.preventDefault(),o==null||o()};return m(W,{open:t,children:m(_,{css:d,ref:S,onClick:g=>c==null?void 0:c(g),...R,children:f&&r.cloneElement(f,{onClose:()=>o==null?void 0:o(),ref:w,size:M,handleClose:()=>o==null?void 0:o(),triggerId:p})})})}),Z=Y,ee=r.forwardRef((i,a)=>{const{css:d={},children:n,handleClose:t,onClick:o,onKeyDown:p,size:M="md",triggerId:R,...w}=i,S={size:M},f=b(a),c=r.useRef(null),g=r.useRef(null),y=r.useRef(null),I=r.useRef(null),{child:P}=h(n,F),{child:N}=h(n,j),{child:H}=h(n,k),{child:z}=h(n,C),v=e=>{e.stopPropagation(),o==null||o()},T=e=>{var u,x;e.stopPropagation(),p==null||p(e),e.key==="Escape"&&(t==null||t()),document.activeElement===y.current&&e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),(u=g.current)==null||u.focus()),document.activeElement===c.current&&e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),(x=y.current)==null||x.focus()),document.activeElement===I.current&&e.key==="Enter"&&(e.preventDefault(),t==null||t())};return r.useEffect(()=>{var E;const e=Array.from(((E=f.current)==null?void 0:E.querySelectorAll(`
        button,
        a[href],
        input[type="button"],
        input[type="submit"],
        input[type="text"],
        textarea,
        select,
        input[type="checkbox"],
        input[type="radio"],
        [tabindex]:not([tabindex="-1"])
      `))??[]),u=Array.from((document==null?void 0:document.querySelectorAll('[role="dialog"]'))??[]);c.current=e[0]??null,g.current=e[1]??null,y.current=e[e.length-1]??null,c.current&&c.current.focus();const x=u.findIndex($=>$===f.current);return()=>{var $;if(u.length>1&&x>0&&u[x-1])($=u[x-1])==null||$.focus();else{const A=document==null?void 0:document.querySelector(`[data-target= ${R}]`);A&&A.focus()}}},[f,c,y]),m(G,{css:d,ref:f,tabIndex:0,role:"dialog","aria-modal":!0,onClick:e=>v==null?void 0:v(e),onKeyDown:e=>T==null?void 0:T(e),...w,...S,children:D(V,{tabIndex:0,children:[D(q,{children:[P,z&&r.cloneElement(z,{onClose:()=>t==null?void 0:t(),ref:I})]}),N,H]})})}),l=ee;l.Trigger=Z;l.Title=F;l.Description=j;l.Actions=k;l.CloseIcon=C;l.Trigger.displayName="Modal.Trigger";l.Title.displayName="Modal.Title";l.Description.displayName="Modal.Description";l.Actions.displayName="Modal.Actions";l.displayName="Modal";export{l as M};
