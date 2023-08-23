import{f as R}from"./index-0d2c4177.js";import{F as E}from"./index.es-26e19131.js";import{s as x,R as d,j as e,a as c,F as G}from"./index-f44380ee.js";import"./index-848668cb.js";import"./index-e5144de8.js";import{D as K}from"./index-c2aa0383.js";import{T as Q}from"./index-5d399709.js";import{T as J}from"./index-9ee51211.js";import{T as F}from"./index-ead8f185.js";import{U as X}from"./index-652a3e29.js";import{C as $}from"./components-46861628.js";import{p as y}from"./pick-child-e105db02.js";import{u as h}from"./use-dom-ref-586729b0.js";import{P as Y}from"./index-85fbc0f8.js";import{B as u}from"./button-75352c4c.js";import{C as Z}from"./checkbox-f05f0bdc.js";import"./calendar-195ea282.js";import"./useCalendarState-bb1f7966.js";import"./import-8d5aa74e.js";import"./clsx.m-1229b3e0.js";import"./arrow-right-2b08ba50.js";import"./useOverlayTriggerState-0f0973f8.js";import"./useEvent-3a93768a.js";import"./import-103c32e0.js";import"./real-module-dbbb62ef.js";import"./useCurrentTheme-ac0af65c.js";import"./dropdown.styles-a265a99c.js";import"./checkbox.styles-d555d200.js";const _=x("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"$57",display:"flex",justifyContent:"center",alignItems:"center","& *":{height:"100%"}}),k=x("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$primaryText"}),z=x("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",flexGrow:1,width:"100%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText"}),N=x("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2",variants:{responsive:{true:{"@media (max-width: 900px)":{flexDirection:"column",button:{div:{display:"block"}}}},false:{}}},defaultVariants:{responsive:"false"}}),ee=x("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"$overlayDark",padding:"$4",position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",zIndex:"49",display:"flex",justifyContent:"center",alignItems:"center"}),ie=x("div",{all:"unset",maxHeight:"100%",maxWidth:"100%",overflow:"auto",padding:"$4",display:"flex",flexDirection:"column",gap:"$4"}),te=x("div",{all:"unset",appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",maxHeight:"100%",overflow:"auto",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",borderRadius:"$lg",variants:{variant:{confirmation:{},alert:{[`& ${N}`]:{display:"flex",justifyContent:"center",alignItems:"center"},[`& ${k}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},[`& ${z}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}}},defaultVariants:{variant:"confirmation"}}),ne=d.forwardRef((o,l)=>{const{children:t,css:s={},isMobile:n=!1,...r}=o,m=h(l);return e(N,{css:s,ref:m,responsive:n,...r,children:t})}),j=ne,oe=d.forwardRef((o,l)=>{const{children:t,css:s={},...n}=o,r=h(l);return e(z,{css:s,ref:r,...n,children:t})}),L=oe,re=d.forwardRef((o,l)=>{const{children:t,css:s={},...n}=o,r=h(l);return e(_,{css:s,ref:r,...n,children:t})}),M=re,ae=d.forwardRef((o,l)=>{const{children:t,css:s={},...n}=o,r=h(l);return e(k,{css:s,ref:r,...n,children:t})}),H=ae,le=d.forwardRef((o,l)=>{const{css:t={},children:s,isOpen:n=!1,handleClose:r,id:m,variant:C="confirmation",...v}=o,{child:q}=y(s,i),O=h(l),D=h(null),p=g=>{g.stopPropagation(),g.preventDefault(),r==null||r()};return e(Y,{open:n,children:e(ee,{css:t,ref:D,onClick:g=>p==null?void 0:p(g),...v,children:q&&d.cloneElement(q,{ref:O,variant:C,triggerId:m,handleClose:()=>r==null?void 0:r()})})})}),se=le,ce=d.forwardRef((o,l)=>{const{css:t={},children:s,handleClose:n,onClick:r,onKeyDown:m,triggerId:C,variant:v="confirmation",...q}=o,O={variant:v},D=h(l),p=d.useRef(null),g=d.useRef(null),T=d.useRef(null),{child:W}=y(s,H),{child:U}=y(s,L),{child:V}=y(s,j),{child:B}=y(s,M),S=a=>{a.stopPropagation(),r==null||r()},A=a=>{var f,b;a.stopPropagation(),m==null||m(a),a.key==="Escape"&&(n==null||n()),document.activeElement===T.current&&a.key==="Tab"&&!a.shiftKey&&(a.preventDefault(),(f=g.current)==null||f.focus()),document.activeElement===p.current&&a.key==="Tab"&&a.shiftKey&&(a.preventDefault(),(b=T.current)==null||b.focus())};return d.useEffect(()=>{var I;const a=Array.from(((I=D.current)==null?void 0:I.querySelectorAll(`
          button,
          a[href],
          input,
          textarea,
          select,
          [tabindex]:not([tabindex="-1"])
        `))??[]),f=Array.from((document==null?void 0:document.querySelectorAll('[role="dialog"]'))??[]);p.current=a[0]??null,g.current=a[1]??null,T.current=a[a.length-1]??null,p.current&&p.current.focus();const b=f.findIndex(w=>w===D.current);return()=>{var w;if(f.length>1&&b>0&&f[b-1])(w=f[b-1])==null||w.focus();else{const P=document==null?void 0:document.querySelector(`[data-target= ${C}]`);P&&P.focus()}}},[D,p,T]),e(te,{css:t,ref:D,tabIndex:0,role:"dialog","aria-modal":!0,onClick:a=>S==null?void 0:S(a),onKeyDown:a=>A==null?void 0:A(a),...O,...q,children:c(ie,{tabIndex:0,children:[v=="alert"?B:null,W,U,V]})})}),i=ce;i.Trigger=se;i.Title=H;i.Description=L;i.Actions=j;i.Icon=M;i.Trigger.displayName="Dialog.Trigger";i.Title.displayName="Dialog.Title";i.Description.displayName="Dialog.Description";i.Actions.displayName="Dialog.Actions";i.Icon.displayName="Dialog.Icon";i.displayName="Dialog";const Le=()=>{const o="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=d.useState(!1),s=n=>{n.length<1||console.log(n)};return c($,{children:[e("h3",{children:"Default dialog is confirmation variant"}),e(u,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:l,handleClose:()=>t(!1),children:c(i,{children:[e(i.Title,{children:"My title"}),c(i.Description,{children:[o,e("input",{type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg"}),e(X,{css:{marginTop:"1rem"},getFile:s,accept:"image/*, .docs, .docx",fileSizeLimit:3e4})]}),c(i.Actions,{children:[e(u,{onPress:()=>t(!1),children:"Cancel"}),e(u,{onPress:()=>t(!1),children:"Do it"})]})]})})]})},de=()=>{const o="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=d.useState(!1);return c(G,{children:[e(u,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Child"}),e(i.Trigger,{isOpen:l,handleClose:()=>t(!1),children:c(i,{css:{width:"20rem"},children:[e(i.Title,{children:"My Child dialog"}),e(i.Description,{children:o}),e(i.Actions,{children:e(u,{variant:"secondary",onPress:()=>t(!1),children:"Cancel"})})]})})]})},Me=()=>{const o="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=d.useState(!1);return c($,{children:[e("h3",{children:"Nested Dialog"}),e(u,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>t(!0),"data-target":"parent-dialog",children:"Open Parent"}),e(i.Trigger,{isOpen:l,handleClose:()=>t(!1),id:"parent-dialog",children:c(i,{children:[e(i.Title,{children:"My Parent dialog"}),e(i.Description,{children:o}),c(i.Actions,{children:[e(u,{variant:"secondary",onPress:()=>t(!1),children:"Cancel"}),e(de,{})]})]})})]})},He=()=>{const o="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=d.useState(!1),[s,n]=d.useState(!1),[r,m]=d.useState(!1);return c($,{children:[e("h3",{children:"Confirmation dialog"}),e(u,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:l,handleClose:()=>t(!1),variant:"confirmation",children:c(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:o}),c(i.Actions,{children:[e(u,{onPress:()=>t(!1),children:"Cancel"}),e(u,{onPress:()=>t(!1),children:"Do it"})]})]})}),e("h3",{children:"Alert dialog"}),e(u,{css:{width:"7.8rem"},onPress:()=>n(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:s,handleClose:()=>n(!1),variant:"alert",children:c(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:o}),e(i.Actions,{children:e(u,{onPress:()=>n(!1),children:"Ok"})}),e(i.Icon,{children:e(E,{icon:R})})]})}),e("h3",{children:"Custom dialog"}),e(u,{css:{width:"7.8rem"},onPress:()=>m(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:r,handleClose:()=>m(!1),children:c(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:c($,{css:{gap:"$4"},children:[e(K,{css:{width:"100%"},label:"Date picker"}),e(J,{label:"Text field"}),e(Q,{css:{width:"100%",textarea:{width:"100%",minHeight:"120px"}},label:"Text area"}),e(Z,{children:"I agree to this term and condition"}),e(F.Label,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"}),e(F.Label,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})]})}),c(i.Actions,{isMobile:!0,children:[e(u,{onPress:()=>n(!1),variant:"ghost",children:"Cancel"}),e(u,{onPress:()=>n(!1),children:"Ok"})]}),e(i.Icon,{children:e(E,{icon:R})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Le as Default,Me as NestedDialog,He as Variants};