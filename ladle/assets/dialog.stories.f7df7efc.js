import{y as O}from"./index.949660c6.js";import{s as p,R as s,j as e,F as R,a as g}from"./index.0c91a60d.js";import"./index.365af97d.js";import{I as E}from"./index.9416aba7.js";import{C as $}from"./components.681f8bd5.js";import{p as f}from"./pick-child.c0c2963f.js";import{u as m}from"./use-dom-ref.527595f5.js";import{B as d}from"./button.66c81d72.js";import"./module.dc87ec74.js";import"./module.adcf4fbc.js";import"./module.ef16c1e3.js";import"./module.e8761b62.js";const z=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"$57",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"$4","& *":{height:"100%"}}),w=p("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"32.143%",marginBottom:"$4",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$black"}),T=p("p",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"10.124%",marginBottom:"$6",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText"}),C=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"17.857%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2"}),P=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"#00000066",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"49"}),j=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",minHeight:"$56",padding:"$4",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",borderRadius:"$lg",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",variants:{variant:{confirmation:{},alert:{[`& ${C}`]:{display:"flex",justifyContent:"center",alignItems:"center"},[`& ${w}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},[`& ${T}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}}},defaultVariants:{variant:"confirmation"}}),k=s.forwardRef((t,a)=>{const{children:i,css:r={},...l}=t,o=m(a);return e(C,{css:r,ref:o,...l,children:i})}),S=k,B=s.forwardRef((t,a)=>{const{children:i,css:r={},...l}=t,o=m(a);return e(T,{css:r,ref:o,...l,children:i})}),I=B,N=s.forwardRef((t,a)=>{const{children:i,css:r={},...l}=t,o=m(a);return e(z,{css:r,ref:o,...l,children:i})}),v=N,F=s.forwardRef((t,a)=>{const{children:i,css:r={},...l}=t,o=m(a);return e(w,{css:r,ref:o,...l,children:i})}),A=F,L=s.forwardRef((t,a)=>{const{css:i={},children:r,isOpen:l=!1,handleClose:o,variant:b="confirmation",...y}=t,{child:h}=f(r,n),c=m(a);return s.useEffect(()=>{function u(D){var x;c.current&&!((x=c==null?void 0:c.current)!=null&&x.contains(D.target))&&(D.preventDefault(),o==null||o())}return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[c]),e(R,{children:l&&e(P,{css:i,...y,children:h&&s.cloneElement(h,{onClose:()=>o==null?void 0:o(),ref:c,variant:b})})})}),M=L,H=s.forwardRef((t,a)=>{const{css:i={},children:r,onClose:l,variant:o="confirmation",...b}=t,y={variant:o},h=m(a),{child:c}=f(r,A),{child:u}=f(r,I),{child:D}=f(r,S),{child:x}=f(r,v);return g(j,{css:i,ref:h,...y,...b,children:[o=="alert"?x:null,c,u,D]})}),n=H;n.Trigger=M;n.Title=A;n.Description=I;n.Actions=S;n.Icon=v;n.Trigger.displayName="Dialog.Trigger";n.Title.displayName="Dialog.Title";n.Description.displayName="Dialog.Description";n.Actions.displayName="Dialog.Actions";n.Icon.displayName="Dialog.Icon";n.displayName="Dialog";const ee=()=>{const t="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[a,i]=s.useState(!1);return g($,{children:[e("h3",{children:"Default dialog is confirmation variant"}),e(d,{css:{width:"7.8rem"},onPress:()=>i(!0),children:"Open Dialog"}),e(n.Trigger,{isOpen:a,handleClose:()=>i(!1),children:g(n,{children:[e(n.Title,{children:"My title"}),e(n.Description,{children:t}),g(n.Actions,{children:[e(d,{onPress:()=>i(!1),children:"Cancel"}),e(d,{onPress:()=>i(!1),children:"Do it"})]})]})})]})},ne=()=>{const t="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[a,i]=s.useState(!1),[r,l]=s.useState(!1);return g($,{children:[e("h3",{children:"Confirmation dialog"}),e(d,{css:{width:"7.8rem"},onPress:()=>i(!0),children:"Open Dialog"}),e(n.Trigger,{isOpen:a,handleClose:()=>i(!1),variant:"confirmation",children:g(n,{children:[e(n.Title,{children:"My title"}),e(n.Description,{children:t}),g(n.Actions,{children:[e(d,{onPress:()=>i(!1),children:"Cancel"}),e(d,{onPress:()=>i(!1),children:"Do it"})]})]})}),e("h3",{children:"Alert dialog"}),e(d,{css:{width:"7.8rem"},onPress:()=>l(!0),children:"Open Dialog"}),e(n.Trigger,{isOpen:r,handleClose:()=>l(!1),variant:"alert",children:g(n,{children:[e(n.Title,{children:"My title"}),e(n.Description,{children:t}),e(n.Actions,{children:e(d,{onPress:()=>l(!1),children:"Ok"})}),e(n.Icon,{children:e(E,{icon:O})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ee as Default,ne as Variants};
