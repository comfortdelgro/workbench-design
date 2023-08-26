import{A as ke,a as Se}from"./arrow-right-3cf1f9e6.js";import{r as o,j as e,k as A,s as R,a as i,F as le}from"./index-ad2ef031.js";import{r as ie,s as $e}from"./index-0d2c4177.js";import{F as W}from"./index.es-3afe72f2.js";import"./index-9a40c972.js";import{L as N,a as P}from"./index-c6cd10aa.js";import{M as z}from"./index-c88e9927.js";import{T as Ee}from"./index-39e02df3.js";import{T as D}from"./index-93ef9c59.js";import{C as Ie,R as Fe}from"./components-0b499a6f.js";import{p as re}from"./pick-child-6a6b591c.js";import{u as J}from"./use-dom-ref-7a1e24d2.js";import{B as s}from"./button-ea3a0e9c.js";import"./badge.styles-7ae16b89.js";import"./avatar-group.styles-c8ae6d25.js";import"./index-d7d0c2f0.js";import"./useCurrentTheme-3f9fc19c.js";const Le=(c,t)=>e("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:t,...c,children:e("g",{fill:"currentColor",children:e("path",{d:"M30.1165 25.8816C31.2883 27.0534 31.2883 28.9517 30.1165 30.1235C29.5353 30.7094 28.7666 31 27.9979 31C27.2292 31 26.4624 30.7071 25.8774 30.1212L15.9988 20.2477L6.12116 30.1188C5.53527 30.7094 4.76752 31 3.99977 31C3.23201 31 2.4652 30.7094 1.87884 30.1188C0.707054 28.947 0.707054 27.0487 1.87884 25.877L11.7593 15.9965L1.87884 6.12069C0.707054 4.94891 0.707054 3.05062 1.87884 1.87884C3.05062 0.707054 4.94891 0.707054 6.12069 1.87884L15.9988 11.764L25.8793 1.88353C27.0511 0.711742 28.9494 0.711742 30.1212 1.88353C31.2929 3.05531 31.2929 4.9536 30.1212 6.12538L20.2407 16.0059L30.1165 25.8816Z"})})}),Be=o.forwardRef(Le),qe=Be,ae=(c,[t,r])=>Math.min(Math.max(c,t),r),G=(c,t)=>{const r=Math.floor(c/t)*t,p=Math.ceil(c/t)*t;return c-r>p-c?p:r},Ae={prevent:!0,touch:!0,mouse:!0,direction:"both",maxDistance:{x:{max:1/0,min:-1/0},y:{max:1/0,min:-1/0}},stepSize:0,setCSS:!0},Re=c=>{const t=o.useMemo(()=>({...Ae,...c}),[c]),r=o.useRef(null),p=o.useRef([0,0]),u=o.useRef([0,0]),g=o.useRef(!1),[x,k]=o.useState([0,0]),y=o.useCallback((n,d)=>{t.stepSize&&(n=[G(x[0],typeof t.stepSize=="object"?t.stepSize.x:t.stepSize),G(x[1],typeof t.stepSize=="object"?t.stepSize.y:t.stepSize)]),u.current=n,k(n),!(!r.current||!t.setCSS)&&(d?r.current.style.transition=d:r.current.style.transition="",r.current.style.transform=`translate3d(${n[0]}px, ${n[1]}px, 0)`)},[t.setCSS,t.stepSize]),l=o.useCallback(n=>{var F,$,E,q;const[d,h]=u.current;let[w,v]=u.current;if(t.touch&&(($=(F=n.touches)==null?void 0:F[0])!=null&&$.clientX)){const L=n.touches[0];L&&(g.current=!0,w=L.clientX-d,v=L.clientY-h,p.current=[w,v],(E=t.onStart)==null||E.call(t,r,[w,v],y));return}t.mouse&&n instanceof window.MouseEvent&&n.button===0&&(g.current=!0,w=n.clientX-d,v=n.clientY-h,p.current=[w,v],(q=t.onStart)==null||q.call(t,r,[w,v],y))},[t,y]),b=o.useCallback(n=>{var F,$,E,q,L,X,Y,T,U,H,a;if(!g.current||!t.mouse&&!t.touch)return;t.prevent&&n.cancelable&&n.preventDefault();const[d,h]=p.current;let[w,v]=u.current;if(t.touch&&(($=(F=n.touches)==null?void 0:F[0])!=null&&$.clientX)){const f=n.touches[0];f&&(w=f.clientX-d,v=f.clientY-h)}else t.mouse&&n instanceof window.MouseEvent&&n.button===0&&(w=n.clientX-d,v=n.clientY-h);t.stepSize&&(w=G(w,typeof t.stepSize=="object"?t.stepSize.x:t.stepSize),v=G(v,typeof t.stepSize=="object"?t.stepSize.y:t.stepSize)),w=t.direction==="vertical"?0:ae(w,[((q=(E=t.maxDistance)==null?void 0:E.x)==null?void 0:q.min)??-1/0,((X=(L=t.maxDistance)==null?void 0:L.x)==null?void 0:X.max)??1/0]),v=t.direction==="horizontal"?0:ae(v,[((T=(Y=t.maxDistance)==null?void 0:Y.y)==null?void 0:T.min)??-1/0,((H=(U=t.maxDistance)==null?void 0:U.y)==null?void 0:H.max)??1/0]),(a=t.onMove)==null||a.call(t,r,[w,v],y),y([w,v])},[g,t,y]),m=o.useCallback(n=>{var d;(t.touch&&typeof n.touches<"u"||t.mouse&&n instanceof window.MouseEvent&&n.button===0)&&(g.current=!1,(d=t.onEnd)==null||d.call(t,r,u.current,y))},[t,y]);return o.useEffect(()=>{const n=r.current;if(!(typeof window>"u"||typeof document>"u"||!n))return t.touch&&(n.addEventListener("touchstart",l),n.addEventListener("touchmove",b,{passive:!t.prevent}),document.addEventListener("touchcancel",m),document.addEventListener("touchend",m)),t.mouse&&(n.addEventListener("mousedown",l),document.addEventListener("mousemove",b),document.addEventListener("mouseup",m)),()=>{t.touch&&(n.removeEventListener("touchstart",l),n.removeEventListener("touchmove",b),document.removeEventListener("touchcancel",m),document.removeEventListener("touchend",m)),t.mouse&&(n.removeEventListener("mousedown",l),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",m))}},[r,t,l,b,m]),{target:r,position:{x:x[0],y:x[1]},setPosition:y}},Te=Re,He=A({from:{transform:"translateX(-100%)"}}),Oe=A({to:{transform:"translateX(-100%)"}}),Me=A({from:{transform:"translateX(100%)"}}),Ne=A({to:{transform:"translateX(100%)"}}),Pe=A({from:{transform:"translateY(100%)"}}),ze=A({to:{transform:"translateY(100%)"}}),je=R("dialog",{padding:0,insetBlock:0,maxHeight:"100%",maxWidth:"unset",flexDirection:"column",border:"none",boxSizing:"border-box",zIndex:"48",pointerEvents:"none","&:focus-visible":{outline:"none"},"&::backdrop":{background:"rgba(0, 0, 0, 0.4)"},"&[open]":{display:"flex",pointerEvents:"auto"},"@media (prefers-reduced-motion: no-preference)":{display:"flex",opacity:0,animation:".2s cubic-bezier(.25,0,.3,1) forwards",transition:"height .2s ease, opacity .2s ease","&[open]":{opacity:1,animation:".4s cubic-bezier(.25,0,.3,1) forwards"}},variants:{drawerMode:{"non-modal":{overflow:"hidden"},modal:{}},position:{left:{insetInline:"0 auto",animationName:`${Oe}`,"&[open]":{animationName:He}},right:{insetInline:"auto 0",animationName:`${Ne}`,"&[open]":{animationName:Me}},bottom:{height:"40dvh",width:"100%",insetBlock:"auto 0",animationName:`${ze}`,"&[open]":{animationName:Pe}}},variant:{default:{height:"100dvh",width:"100%","@sm":{width:"clamp( 30vw, $160, 50vw )"}},h5:{height:"40dvh",maxHeight:"calc(100dvh - 1rem)",borderRadius:"1rem 1rem 0 0","&.drawer-expanded":{height:"calc(100dvh - 1rem)"}}}}}),Xe=R("header",{padding:"$4",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"$4"}),Ye=R("article",{flex:1,padding:"$4",maxHeight:"100%",width:"100%",overflow:"hidden auto"}),Ue=R("footer",{padding:"$4"}),Ve=R("div",{paddingBlock:"$4","@sm":{paddingBlock:"$2"},display:"flex",alignItems:"center",justifyContent:"center",width:"100%",cursor:"grab","&:active":{cursor:"grabbing"},"& .expander-line":{display:"block",width:"$10",height:"$1",background:"$grayShades20",borderRadius:"$md"}}),_e=({drawerOpen:c,children:t,css:r={},onDragPositionYChange:p,onDragStart:u,onDrag:g,onDragEnd:x,...k})=>{const y=o.useMemo(()=>({direction:"vertical",setCSS:!1,onStart(...n){u==null||u(...n)},onMove(...n){g==null||g(...n)},onEnd(...n){x==null||x(...n)}}),[u,g,x]),{target:l,position:{y:b},setPosition:m}=Te(y);return o.useEffect(()=>{m([0,0])},[c]),o.useEffect(()=>{p==null||p(b)},[b]),e(Ve,{css:r,ref:l,...k,children:t||e("div",{className:"expander-line"})})},Ke=_e,Ge=o.forwardRef(({children:c,css:t={},...r},p)=>{const u=J(p);return e(Ue,{css:t,ref:u,...r,children:c})}),ce=Ge,Qe=o.forwardRef(({children:c,css:t={},...r},p)=>{const u=J(p);return e(Xe,{css:t,ref:u,...r,children:c})}),ue=Qe,se=100,de=67,We=o.forwardRef((c,t)=>{const r=typeof window<"u"?window.innerHeight:void 0,p=o.useMemo(()=>typeof document<"u"?document.body.style.overflow:"auto",[]),{drawerMode:u="modal",className:g="",css:x={},style:k,children:y,open:l=!1,onClose:b,onMouseDown:m,preventFocus:n=!0,preventClose:d=!1,variant:h="default",position:w="right",expanderCSS:v={},onExpandChange:F,expandedPoint:$=se,expandableLine:E=de,disableResize:q=!1,autoClose:L=!0,disableAddBodyAttr:X=!1,...Y}=c,T=u==="non-modal"?!0:X,U=h==="h5"?"bottom":w,H=J(t),a=H.current,[f,pe]=o.useState(0),[B,Q]=o.useState(),[ee,V]=o.useState(a==null?void 0:a.offsetHeight),[me,he]=o.useState(!1),{expandedPosition:_,expandablePosition:te}=o.useMemo(()=>{if(!r)return{expandedPosition:0,expandablePosition:0};const S=Math.floor(f/r*100);let I=$>100||$<0?se:$,M=E>100||E<0?de:E;return I<S&&(I=S),I<M&&(M=I),{expandedPosition:Math.floor(r*(I/100)),expandablePosition:Math.floor(r*(M/100))}},[$,E,r,f]),{child:fe,rest:ge}=re(y,ue),{child:ye,rest:be}=re(ge,ce),O=o.useCallback(S=>{typeof document>"u"||!a||(V(f),document.body.style.setProperty("overflow",p),document.body.removeAttribute("inert"),a.close(S))},[a,f]),we=o.useCallback(S=>{a&&(m==null||m(S),!(!(S.target instanceof HTMLDialogElement)||!d)&&S.target.nodeName==="DIALOG"&&O("dismiss"))},[a,m,O]),ve=o.useCallback(S=>{d&&S.preventDefault()},[d]),Ce=o.useCallback(()=>{a&&a.style.setProperty("transition-property","opacity")},[a]),xe=o.useCallback(S=>{if(!a)return;let I=f;B&&B>f&&(I=B),V(I-S)},[a,f,B]),De=o.useCallback((S,I,M)=>{if(!window.innerHeight||!l||!a)return;a.style.setProperty("transition-property","height, opacity");let ne=f;B&&B>f&&(ne=B);const oe=ne-I[1],K=oe>te;if(he(K),F==null||F(K),M([0,0]),K&&_&&B===f){Q(_),V(_);return}if(K||Q(f),L&&oe<f-100){O();return}},[a,l,L,f,B,_,te]);return o.useEffect(()=>{if(!(typeof document>"u"||!a)){if(l){T?(document.body.style.setProperty("overflow","auto"),document.body.removeAttribute("inert")):(document.body.style.setProperty("overflow","hidden"),document.body.setAttribute("inert","")),n||a.setAttribute("inert",""),u==="modal"?a.showModal():a.show(),a.removeAttribute("inert");return}O()}},[l,a,T,n,O]),o.useEffect(()=>{!l&&f&&V(f),Q(f)},[l,f]),o.useEffect(()=>{pe((a==null?void 0:a.offsetHeight)??0)},[a]),i(je,{ref:H,className:`${g} ${me?"drawer-expanded":""}`,css:x,drawerMode:u,variant:h,position:U,...Y,style:{...k,height:h==="h5"&&ee?`${ee}px`:k==null?void 0:k.height},onMouseDown:we,onClose:b,onCancel:ve,children:[h==="h5"&&!q&&e(Ke,{drawerOpen:l,className:"drawer-expander",css:v,onDragStart:Ce,onDragPositionYChange:xe,onDragEnd:De}),fe,e(Ye,{className:"drawer-content",children:be}),ye]})}),C=We;C.Header=ue;C.Footer=ce;C.Header.displayName="Drawer.Header";C.Footer.displayName="Drawer.Footer";C.displayName="Drawer";const j="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",Z={disableResize:!1,disableAddBodyAttr:!1,autoClose:!0,preventClose:!1};function gt(){const[c,t]=o.useState(!1),[r,p]=o.useState(!1),[u,g]=o.useState(!1),[x,k]=o.useState(!1),[y,l]=o.useState(!1),[b,m]=o.useState({open:!1,preventFocus:!1}),[n,d]=o.useState(Z);return i(Ze,{children:[e("h4",{children:"H5 Drawer"}),e(s,{type:"button",onClick:()=>t(!0),children:"Open Drawer"}),e("h4",{children:"Drawer Customize"}),e(s,{type:"button",onClick:()=>p(!0),children:"Open Customizable Drawer"}),e("h4",{children:"Demo Trip information"}),i(D.Body,{variant:"body3",css:{color:"$grayShades60",marginBlock:"$2 $4"},children:["Drawer's maximum expanded height will be half of current viewport with autoclose disabled.",e("br",{}),"Better view on mobile screen"]}),e(s,{type:"button",onClick:()=>k(!0),children:"Open Drawer"}),e("h4",{children:"Non-modal mode"}),i(D.Body,{variant:"body3",css:{color:"$grayShades60",marginBlock:"$2 $4"},children:["A Drawer that has no backdrop and also doesn't render on the top-layer. It can ",e("strong",{children:"NOT"})," be closed by pressing the ",e("kbd",{children:"ESC"})," ","key.",e("br",{}),"The content below the non-modal drawer can be interacted."]}),e(s,{type:"button",variant:"secondary",onClick:()=>g(!u),children:"Toggle Non-modal Drawer"}),e("h4",{children:"Disable autofocus on the first nested focusable element"}),i(D.Body,{variant:"body3",css:{color:"$grayShades60",marginBlock:"$2 $4"},children:["By default, the Drawer will autofocus on the first nested focusable element after opening.",e("br",{}),"To disable that, set preventFocus to false"]}),e(s,{css:{marginRight:"$4"},type:"button",onClick:()=>m({open:!0,preventFocus:!0}),children:"Open Normal Drawer"}),e(s,{type:"button",variant:"secondary",onClick:()=>m({open:!0,preventFocus:!1}),children:"Open autofocus disabled Drawer"}),i(C,{open:c,css:{height:"40dvh","& .drawer-content":{padding:0}},onClose:()=>t(!1),variant:"h5",children:[e(D.Body,{variant:"body2",css:{textAlign:"center",paddingBlock:"$4"},children:"Pull up for more rides"}),i(Ie,{children:[e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",descriptionIcon:e(W,{style:{width:14,height:14,color:"#0142AF"},icon:ie}),variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:j,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply",icon:e(W,{icon:$e})}}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:j,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:j,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"},descriptionIcon:e(W,{style:{width:14,height:14,color:"#0142AF"},icon:ie})}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:j,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:j,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}})]})]}),i(C,{...n,open:r,css:{height:"40dvh","& .drawer-content":{button:{marginBottom:"$4"}}},onClose:()=>{p(!1),d(Z)},variant:"h5",children:[e("p",{children:"Resizable Drawer?"}),e(s,{type:"button",onClick:()=>d(h=>({...h,disableResize:!h.disableResize})),children:"Toggle Draggable"}),e("hr",{}),i("p",{children:["Should block the below layer from scrolling and tell the browser to ignore its elements (inert)?"," ",e("strong",{children:`${!n.disableAddBodyAttr}`})]}),e(s,{type:"button",onClick:()=>d(h=>({...h,disableAddBodyAttr:!h.disableAddBodyAttr})),children:"Toggle Block"}),e("hr",{}),i("p",{children:["Should autoclose when drags and drops the drawer below its height?"," ",e("strong",{children:`${n.autoClose}`})]}),e(s,{type:"button",onClick:()=>d(h=>({...h,autoClose:!h.autoClose})),children:"Toggle autoclose"}),e("hr",{}),i("p",{children:["Should prevent drawer from closing when users tap/click on the backdrop or press Escape key?"," ",e("strong",{children:`${n.preventClose}`})]}),e(s,{css:{marginRight:"$4"},type:"button",onClick:()=>d(h=>({...h,preventClose:!h.preventClose})),children:"Toggle prevent close"}),n.preventClose&&e(s,{type:"button",variant:"secondary",onClick:()=>{p(!1),d(Z)},children:"Manually close drawer"})]}),i(C,{open:x,css:{height:"20dvh"},expanderCSS:{background:"$blueShades100",paddingBlock:"$2 $6"},onClose:()=>k(!1),variant:"h5",expandedPoint:50,expandableLine:33,autoClose:!1,children:[i(C.Header,{css:{display:"flex",paddingTop:0,gap:"$2",justifyContent:"space-between",backgroundColor:"$blueShades100"},children:[e(D.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Your ride is on the way"}),e(D.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Arriving in 8 - 10 min"})]}),i(D.Body,{weight:"semibold",css:{paddingBlock:"$5 $8",display:"flex",gap:"$2",justifyContent:"space-between",alignItems:"center"},children:["Shaw",e(s,{type:"button",variant:"secondary",children:"Call Driver"})]}),i("div",{style:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",gap:"1rem"},children:[i(D.Body,{variant:"body3",weight:"semibold",css:{display:"flex",gap:"$2",justifyContent:"space-between",alignItems:"center"},children:[e("span",{children:"ComfortRIDE"})," ",e(D.Link,{variant:"link2",children:"T&C apply"})]}),e("div",{children:"$8.60"}),e(D.Body,{variant:"body3",weight:"semibold",children:"Total"}),e("div",{children:"$8.60"})]}),i("div",{style:{display:"flex",gap:"1rem",paddingBlock:"1rem"},children:[e(s,{type:"button",variant:"secondary",css:{flex:1},children:"Share your trip"}),e(s,{type:"button",variant:"danger",css:{flex:1},children:"Cancel trip"})]})]}),i(C,{open:u,css:{height:"20dvh",position:"fixed"},expanderCSS:{background:"$blueShades100",paddingBlock:"$2 $6"},onClose:()=>g(!1),variant:"h5",expandedPoint:50,expandableLine:33,drawerMode:"non-modal",children:[i(C.Header,{css:{display:"flex",paddingTop:0,gap:"$2",justifyContent:"space-between",backgroundColor:"$blueShades100"},children:[e(D.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Your ride is on the way"}),e(D.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Arriving in 8 - 10 min"})]}),i("p",{children:[e("strong",{children:"Drag to bottom"})," ⏬ of the screen to close or",e("br",{})," just ",e("strong",{children:"tap"})," on the Toggle Non-modal button"]}),e("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod itaque fugiat ipsa eveniet illum quae eligendi, qui hic officia sequi perferendis laborum vel nostrum praesentium doloremque, dolorum debitis unde!"}),e(s,{type:"button",variant:"secondary",onClick:()=>l(!0),children:"Open confirm modal"}),e(z.Trigger,{isOpen:y,handleClose:()=>l(!1),children:i(z,{css:{display:"flex",flexDirection:"column"},children:[e(z.Title,{children:"Please confirm"}),e(z.Description,{css:{flex:1},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reprehenderit animi ducimus facere perspiciatis, quod deserunt, necessitatibus voluptatibus ipsam harum rerum cumque, vero tempore ipsum praesentium quas veniam expedita magnam."}),i(z.Actions,{children:[e(s,{variant:"ghost",onClick:()=>l(!1),css:{marginRight:"4px"},children:"Cancel"}),e(s,{variant:"danger",onClick:()=>{l(!1),g(!1)},children:"Proceed"})]})]})})]}),e(C,{open:b.open,css:{height:"30dvh"},onClose:()=>m({open:!1,preventFocus:!1}),variant:"h5",expandedPoint:90,expandableLine:50,preventFocus:b.preventFocus,children:b.open&&i(le,{children:[i(D.Body,{variant:"body3",children:[!b.preventFocus&&"Disable"," ",e("strong",{children:"Autofocus"})," on the first focusable element - a button at the bottom ⏬"]}),e(D.Body,{variant:"body3",css:{minHeight:"30vh",marginTop:"$10"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias voluptatem officia at repellat, voluptates corrupti quod sunt necessitatibus delectus quae enim, temporibus nisi, asperiores consectetur fugiat molestiae error itaque. Animi ad ut eum cupiditate tempora reiciendis, doloremque quis corporis ipsam aperiam explicabo voluptatum! Possimus tempore praesentium suscipit non quisquam ea assumenda, eius sit illo ratione rem consequatur est dignissimos? Similique animi dolor a fugiat modi nostrum maiores possimus aliquid, repudiandae commodi, suscipit aliquam eaque sint repellendus illum dolorem velit. Totam necessitatibus accusamus tenetur, saepe distinctio illo maiores facilis sapiente! Natus, ab. Omnis deleniti optio sunt debitis odio placeat exercitationem tenetur sapiente atque quod neque vitae, ipsum amet quas asperiores fugit corporis quo laboriosam quibusdam iure porro. Ullam, veritatis totam. Qui reprehenderit quidem reiciendis dolorum nisi molestias placeat sit enim culpa hic quasi, doloribus, omnis quod ea eligendi architecto? Sint alias voluptatem eveniet. Ipsa dolorem, maxime dolor excepturi expedita consequuntur. Earum iste voluptatum, expedita vitae temporibus optio dolor eius. Eveniet quae ipsum beatae! Pariatur explicabo est fuga, suscipit nulla ad a eius porro minus eveniet sed eligendi impedit adipisci quaerat."}),e(s,{type:"button",variant:"secondary",onClick:()=>console.log("clicked"),children:"A focusable element at the bottom"})]})})]})}function yt(){const[c,t]=o.useState(!1),[r,p]=o.useState(""),[u,g]=o.useState(!1),[x,k]=o.useState(void 0),y=n=>{n.preventDefault();const d=new FormData(n.currentTarget);p(d.get("keyword")||""),d.get("keep")||n.currentTarget.reset(),l()},l=()=>{t(!1)},b=()=>{t(!1)},m=n=>{k(n),g(!0)};return i(le,{children:[e("h3",{children:"1. Drawer"}),i("p",{children:["Drawer form value: ",r]}),e(s,{type:"button",onClick:()=>t(!0),children:"Open Drawer"}),i(C,{open:c,onClose:b,children:[i(C.Header,{children:[e("h2",{style:{marginBlock:0},children:"Drawer controlled by form"}),e(s,{css:{padding:"$1",svg:{width:"fit-content !important"}},type:"button",variant:"ghost",onClick:l,children:e(qe,{})})]}),i("form",{id:"form-in-drawer",method:"dialog",onSubmit:y,children:[e("h3",{children:"Drawer Form"}),e(Ee,{label:"Keyword",name:"keyword",id:"keyword",placeholder:"Enter anything"}),e("label",{htmlFor:"keepValue",children:"Keep form value: "}),e("input",{name:"keep",type:"checkbox",id:"keepValue",style:{marginTop:"1rem"}})]}),i("section",{style:{height:"50vh",marginTop:"5rem"},children:[e("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,backgroundColor:"white"},children:"Section 1: Very long content here, scroll down ⏬ for more content"}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi."})]}),i("section",{style:{height:"100vh"},children:[e("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,backgroundColor:"white"},children:"Section 2: No idea"}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem omnis architecto aliquam id dicta dolor magnam, sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi ratione! Neque doloribus vel esse."})]}),i(C.Footer,{css:{display:"flex",gap:"$2"},children:[e(s,{variant:"secondary",form:"form-in-drawer",type:"reset",onClick:l,children:"Cancel"}),e(s,{form:"form-in-drawer",type:"submit",children:"Submit"})]})]}),e("h3",{children:"2. Position"}),i(Fe,{children:[e(s,{type:"button",leftIcon:e(ke,{}),onClick:()=>m("left"),children:"Open on the left"}),e(s,{variant:"secondary",type:"button",onClick:()=>m("bottom"),children:"Open on the bottom"}),e(s,{type:"button",rightIcon:e(Se,{}),onClick:()=>m("right"),children:"Open on the right"})]}),i(C,{open:u,onClose:()=>g(!1),position:x,children:[e(C.Header,{children:i("h2",{children:["Drawer ",x||""]})}),e("p",{children:"Article contents"}),e(s,{type:"button",onClick:()=>g(!1),children:"Close Drawer"})]})]})}const Ze=R("div",{h4:{marginBlock:0},"h4:not(:first-child)":{marginTop:"$14"},"h4 + button":{marginTop:"$4"}});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{yt as Default,gt as H5};
