import{D as R}from"./index.939a5232.js";import{s as u,R as c,j as e,F as O,a as r}from"./index.1e35a2af.js";import"./index.113eedf2.js";import{D as f}from"./index.2c85a3fb.js";import{a as I}from"./index.c0f96f7a.js";import{T as y}from"./index.57b424e3.js";import{T as v,a as k}from"./index.e032b614.js";import{C as $}from"./components.e334c151.js";import{p as x}from"./pick-child.10febb28.js";import{u as b}from"./use-dom-ref.2525156b.js";import{B as s}from"./button.681c91ee.js";import"./module.8e091e30.js";import"./module.cb04759a.js";import"./module.188dab80.js";import"./module.a5783b99.js";import"./module.e8fd80ff.js";import"./module.e5b02a45.js";import"./module.c6eef62d.js";import"./module.39783e60.js";import"./module.bab3979e.js";import"./module.36da3ad8.js";import"./module.d783d9d6.js";import"./module.3a6a986a.js";import"./module.0a9d51dd.js";import"./module.09dce152.js";import"./real-module.422747d9.js";import"./module.362e52e2.js";import"./textfield.styles.097480a0.js";import"./module.bda587dd.js";import"./module.f76187bf.js";const E=u("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",paddingLeft:"$4",paddingRight:"$4",width:"100%",height:"32.143%",display:"flex",justifyContent:"space-between",alignItems:"center"}),A=u("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",paddingTop:"$4",paddingBottom:"$4",width:"80%",height:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$black"}),P=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",width:"100%",height:"10.124%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText",borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}),B=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",backgroundColor:"$primaryBg",width:"100%",height:"17.857%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2"}),L=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"#00000066",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"49"}),j=u("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"$3_5",height:"$3_5",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer","& *":{width:"100%",height:"100%"}}),F=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",minHeight:"$56",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",borderRadius:"$lg",overflow:"clip",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",variants:{size:{sm:{width:"$75"},md:{width:"$125"},lg:{width:"$200"}}},defaultVariants:{size:"md"}}),N=c.forwardRef((a,l)=>{const{children:n,css:t={},...d}=a,o=b(l);return e(B,{css:t,ref:o,...d,children:n})}),D=N,W=c.forwardRef((a,l)=>{const{children:n,css:t={},onClose:d,...o}=a,m=b(l);return e(j,{css:t,ref:m,...o,onClick:()=>d==null?void 0:d(),children:n})}),S=W,q=c.forwardRef((a,l)=>{const{children:n,css:t={},...d}=a,o=b(l);return e(P,{css:t,ref:o,...d,children:n})}),z=q,H=c.forwardRef((a,l)=>{const{children:n,css:t={},...d}=a,o=b(l);return e(A,{css:t,ref:o,...d,children:n})}),C=H,V=c.forwardRef((a,l)=>{const{css:n={},children:t,isOpen:d=!1,handleClose:o,size:m="md"}=a,p=b(l),{child:h}=x(t,i);return c.useEffect(()=>{function g(M){var w;p.current&&!((w=p==null?void 0:p.current)!=null&&w.contains(M.target))&&(M.preventDefault(),o==null||o())}return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[p]),e(O,{children:d&&e(L,{css:n,children:h&&c.cloneElement(h,{onClose:()=>o==null?void 0:o(),ref:p,size:m,handleClose:()=>o==null?void 0:o()})})})}),_=V,K=c.forwardRef((a,l)=>{const{css:n={},children:t,handleClose:d,size:o="md",...m}=a,p={size:o},h=b(l),{child:g}=x(t,C),{child:M}=x(t,z),{child:w}=x(t,D),{child:T}=x(t,S);return r(F,{css:n,ref:h,...m,...p,children:[r(E,{children:[g,T&&c.cloneElement(T,{onClose:()=>d==null?void 0:d()})]}),M,w]})}),i=K;i.Trigger=_;i.Title=C;i.Description=z;i.Actions=D;i.CloseIcon=S;i.Trigger.displayName="Modal.Trigger";i.Title.displayName="Modal.Title";i.Description.displayName="Modal.Description";i.Actions.displayName="Modal.Actions";i.displayName="Modal";const $e=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,n]=c.useState(!1),t=()=>{n(!1)},d=[{triggerElement:e("a",{href:"#",children:"Right tooltip"}),placement:"right"},{triggerElement:e("a",{href:"#",children:"Right-bottom tooltip"}),placement:"right bottom"},{triggerElement:e("a",{href:"#",children:"Right-top tooltip"}),placement:"right top"}];return r($,{children:[e("h3",{children:"Default Modal is Medium sized"}),e(s,{css:{width:"7.8rem"},onPress:()=>n(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:l,handleClose:()=>t==null?void 0:t(),children:r(i,{children:[e(i.Title,{children:"My small title"}),e(i.CloseIcon,{children:e(I,{icon:R})}),r(i.Description,{children:[a,e(y,{}),r(f,{label:"Favorite Animal",placeholder:"Choose an animal",children:[e(f.Item,{children:"Red Panda"},"red panda"),e(f.Item,{children:"Cat"},"cat"),e(f.Item,{children:"Dog"},"dog"),e(f.Item,{children:"Aardvark"},"aardvark"),e(f.Item,{children:"Kangaroo"},"kangaroo"),e(f.Item,{children:"Snake"},"snake")]}),d.map(o=>{const m=o.placement;return r(v,{placement:m,children:[o.triggerElement,r(k,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),r("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(s,{fullWidth:!0,variant:"primary",children:"Button"}),e(s,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})})]}),r(i.Actions,{children:[e(s,{onPress:()=>n(!1),children:"Cancel"}),e(s,{onPress:()=>n(!1),children:"Do it"})]})]})})]})},De=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,n]=c.useState(!1),t=()=>{n(!1)},[d,o]=c.useState(!1),m=()=>{o(!1)},[p,h]=c.useState(!1),g=()=>{h(!1)};return r($,{children:[e("h3",{children:"Small sized modal"}),e(s,{css:{width:"7.8rem"},onPress:()=>n(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:l,handleClose:()=>t==null?void 0:t(),size:"sm",children:r(i,{children:[e(i.Title,{children:"My small title"}),r(i.Description,{children:[a,e(y,{})]}),r(i.Actions,{children:[e(s,{onPress:()=>n(!1),children:"Cancel"}),e(s,{onPress:()=>n(!1),children:"Do it"})]})]})}),e("h3",{children:"Medium sized modal"}),e(s,{css:{width:"7.8rem"},onPress:()=>o(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:d,handleClose:()=>m==null?void 0:m(),size:"md",children:r(i,{children:[e(i.Title,{children:"My medium title"}),r(i.Description,{children:[a," ",e(y,{})]}),r(i.Actions,{children:[e(s,{onPress:()=>o(!1),children:"Cancel"}),e(s,{onPress:()=>o(!1),children:"Do it"})]})]})}),e("h3",{children:"Large sized modal"}),e(s,{css:{width:"7.8rem"},onPress:()=>h(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:p,handleClose:()=>g==null?void 0:g(),size:"lg",children:r(i,{children:[e(i.Title,{children:"My large title"}),r(i.Description,{children:[a," ",e(y,{})]}),r(i.Actions,{children:[e(s,{onPress:()=>h(!1),children:"Cancel"}),e(s,{onPress:()=>h(!1),children:"Do it"})]})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{$e as Default,De as Variants};
