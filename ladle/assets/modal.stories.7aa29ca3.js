import{D as O}from"./index.949660c6.js";import{s as f,R as a,j as e,F as C,a as s}from"./index.5181e2f2.js";import"./index.6d5d3def.js";import{a as R}from"./index.9427df45.js";import{T as w}from"./index.a81cc0da.js";import{C as y}from"./components.9c4cf978.js";import{p as b}from"./pick-child.e63035a2.js";import{u}from"./use-dom-ref.7ee095ce.js";import{B as c}from"./button.f727647e.js";import"./module.8837cb43.js";import"./module.30462d86.js";import"./module.a9791687.js";import"./module.aad0ebc4.js";import"./module.929ab166.js";import"./textfield.styles.55c0a6d2.js";import"./module.ea96ac1c.js";const A=f("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",paddingLeft:"$4",paddingRight:"$4",width:"100%",height:"32.143%",display:"flex",justifyContent:"space-between",alignItems:"center"}),P=f("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",paddingTop:"$4",paddingBottom:"$4",width:"80%",height:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$black"}),E=f("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",width:"100%",height:"10.124%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText",borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}),I=f("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",backgroundColor:"$primaryBg",width:"100%",height:"17.857%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2"}),v=f("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"#00000066",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"999"}),k=f("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"$3_5",height:"$3_5",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer","& *":{width:"100%",height:"100%"}}),j=f("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"1000",width:"$120",minHeight:"$56",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",borderRadius:"$lg",overflow:"clip",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",variants:{size:{sm:{width:"$75"},md:{width:"$125"},lg:{width:"$200"}}},defaultVariants:{size:"md"}}),L=a.forwardRef((r,l)=>{const{children:t,css:i={},...d}=r,o=u(l);return e(I,{css:i,ref:o,...d,children:t})}),T=L,B=a.forwardRef((r,l)=>{const{children:t,css:i={},onClose:d,...o}=r,m=u(l);return e(k,{css:i,ref:m,...o,onClick:()=>d==null?void 0:d(),children:t})}),D=B,F=a.forwardRef((r,l)=>{const{children:t,css:i={},...d}=r,o=u(l);return e(E,{css:i,ref:o,...d,children:t})}),z=F,N=a.forwardRef((r,l)=>{const{children:t,css:i={},...d}=r,o=u(l);return e(P,{css:i,ref:o,...d,children:t})}),S=N,H=a.forwardRef((r,l)=>{const{css:t={},children:i,isOpen:d=!1,handleClose:o,size:m="md"}=r,p=u(l),{child:h}=b(i,n);return a.useEffect(()=>{function g(x){var M;p.current&&!((M=p==null?void 0:p.current)!=null&&M.contains(x.target))&&(x.preventDefault(),o==null||o())}return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[p]),e(C,{children:d&&e(v,{css:t,children:h&&a.cloneElement(h,{onClose:()=>o==null?void 0:o(),ref:p,size:m,handleClose:()=>o==null?void 0:o()})})})}),W=H,q=a.forwardRef((r,l)=>{const{css:t={},children:i,handleClose:d,size:o="md",...m}=r,p={size:o},h=u(l),{child:g}=b(i,S),{child:x}=b(i,z),{child:M}=b(i,T),{child:$}=b(i,D);return s(j,{css:t,ref:h,...m,...p,children:[s(A,{children:[g,$&&a.cloneElement($,{onClose:()=>d==null?void 0:d()})]}),x,M]})}),n=q;n.Trigger=W;n.Title=S;n.Description=z;n.Actions=T;n.CloseIcon=D;n.Trigger.displayName="Modal.Trigger";n.Title.displayName="Modal.Title";n.Description.displayName="Modal.Description";n.Actions.displayName="Modal.Actions";n.displayName="Modal";const de=()=>{const r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=a.useState(!1),i=()=>{t(!1)};return s(y,{children:[e("h3",{children:"Default Modal is Medium sized"}),e(c,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Modal"}),e(n.Trigger,{isOpen:l,handleClose:()=>i==null?void 0:i(),children:s(n,{children:[e(n.Title,{children:"My small title"}),e(n.CloseIcon,{children:e(R,{icon:O})}),s(n.Description,{children:[r,e(w,{})]}),s(n.Actions,{children:[e(c,{onPress:()=>t(!1),children:"Cancel"}),e(c,{onPress:()=>t(!1),children:"Do it"})]})]})})]})},se=()=>{const r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=a.useState(!1),i=()=>{t(!1)},[d,o]=a.useState(!1),m=()=>{o(!1)},[p,h]=a.useState(!1),g=()=>{h(!1)};return s(y,{children:[e("h3",{children:"Small sized modal"}),e(c,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Modal"}),e(n.Trigger,{isOpen:l,handleClose:()=>i==null?void 0:i(),size:"sm",children:s(n,{children:[e(n.Title,{children:"My small title"}),s(n.Description,{children:[r,e(w,{})]}),s(n.Actions,{children:[e(c,{onPress:()=>t(!1),children:"Cancel"}),e(c,{onPress:()=>t(!1),children:"Do it"})]})]})}),e("h3",{children:"Medium sized modal"}),e(c,{css:{width:"7.8rem"},onPress:()=>o(!0),children:"Open Modal"}),e(n.Trigger,{isOpen:d,handleClose:()=>m==null?void 0:m(),size:"md",children:s(n,{children:[e(n.Title,{children:"My medium title"}),s(n.Description,{children:[r," ",e(w,{})]}),s(n.Actions,{children:[e(c,{onPress:()=>o(!1),children:"Cancel"}),e(c,{onPress:()=>o(!1),children:"Do it"})]})]})}),e("h3",{children:"Large sized modal"}),e(c,{css:{width:"7.8rem"},onPress:()=>h(!0),children:"Open Modal"}),e(n.Trigger,{isOpen:p,handleClose:()=>g==null?void 0:g(),size:"lg",children:s(n,{children:[e(n.Title,{children:"My large title"}),s(n.Description,{children:[r," ",e(w,{})]}),s(n.Actions,{children:[e(c,{onPress:()=>h(!1),children:"Cancel"}),e(c,{onPress:()=>h(!1),children:"Do it"})]})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{de as Default,se as Variants};
