import{A as ve,a as xe}from"./arrow-right-2b08ba50.js";import{r as o,j as e,k as A,s as j,a as i,F as Ce}from"./index-f44380ee.js";import{r as ne,s as De}from"./index-0d2c4177.js";import{F as W}from"./index.es-26e19131.js";import"./index-848668cb.js";import{L as N,a as P}from"./index-25d3e237.js";import{M as z}from"./index-8a2d073e.js";import{T as ke}from"./index-9ee51211.js";import{T as S}from"./index-ead8f185.js";import{C as Se,R as $e}from"./components-46861628.js";import{p as oe}from"./pick-child-e105db02.js";import{u as Z}from"./use-dom-ref-586729b0.js";import{B as p}from"./button-75352c4c.js";import"./badge.styles-399e433c.js";import"./avatar-group.styles-5fd76033.js";import"./index-85fbc0f8.js";import"./useCurrentTheme-ac0af65c.js";const Ee=(d,t)=>e("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:t,...d,children:e("g",{fill:"currentColor",children:e("path",{d:"M30.1165 25.8816C31.2883 27.0534 31.2883 28.9517 30.1165 30.1235C29.5353 30.7094 28.7666 31 27.9979 31C27.2292 31 26.4624 30.7071 25.8774 30.1212L15.9988 20.2477L6.12116 30.1188C5.53527 30.7094 4.76752 31 3.99977 31C3.23201 31 2.4652 30.7094 1.87884 30.1188C0.707054 28.947 0.707054 27.0487 1.87884 25.877L11.7593 15.9965L1.87884 6.12069C0.707054 4.94891 0.707054 3.05062 1.87884 1.87884C3.05062 0.707054 4.94891 0.707054 6.12069 1.87884L15.9988 11.764L25.8793 1.88353C27.0511 0.711742 28.9494 0.711742 30.1212 1.88353C31.2929 3.05531 31.2929 4.9536 30.1212 6.12538L20.2407 16.0059L30.1165 25.8816Z"})})}),Ie=o.forwardRef(Ee),Le=Ie,re=(d,[t,r])=>Math.min(Math.max(d,t),r),K=(d,t)=>{const r=Math.floor(d/t)*t,u=Math.ceil(d/t)*t;return d-r>u-d?u:r},Be={prevent:!0,touch:!0,mouse:!0,direction:"both",maxDistance:{x:{max:1/0,min:-1/0},y:{max:1/0,min:-1/0}},stepSize:0,setCSS:!0},Fe=d=>{const t=o.useMemo(()=>({...Be,...d}),[d]),r=o.useRef(null),u=o.useRef([0,0]),c=o.useRef([0,0]),h=o.useRef(!1),[w,C]=o.useState([0,0]),g=o.useCallback((n,v)=>{t.stepSize&&(n=[K(w[0],typeof t.stepSize=="object"?t.stepSize.x:t.stepSize),K(w[1],typeof t.stepSize=="object"?t.stepSize.y:t.stepSize)]),c.current=n,C(n),!(!r.current||!t.setCSS)&&(v?r.current.style.transition=v:r.current.style.transition="",r.current.style.transform=`translate3d(${n[0]}px, ${n[1]}px, 0)`)},[t.setCSS,t.stepSize]),s=o.useCallback(n=>{var $,F,I,R;const[v,B]=c.current;let[y,m]=c.current;if(t.touch&&((F=($=n.touches)==null?void 0:$[0])!=null&&F.clientX)){const L=n.touches[0];L&&(h.current=!0,y=L.clientX-v,m=L.clientY-B,u.current=[y,m],(I=t.onStart)==null||I.call(t,r,[y,m],g));return}t.mouse&&n instanceof window.MouseEvent&&n.button===0&&(h.current=!0,y=n.clientX-v,m=n.clientY-B,u.current=[y,m],(R=t.onStart)==null||R.call(t,r,[y,m],g))},[t,g]),b=o.useCallback(n=>{var $,F,I,R,L,H,X,T,a,f,Y;if(!h.current||!t.mouse&&!t.touch)return;t.prevent&&n.cancelable&&n.preventDefault();const[v,B]=u.current;let[y,m]=c.current;if(t.touch&&((F=($=n.touches)==null?void 0:$[0])!=null&&F.clientX)){const D=n.touches[0];D&&(y=D.clientX-v,m=D.clientY-B)}else t.mouse&&n instanceof window.MouseEvent&&n.button===0&&(y=n.clientX-v,m=n.clientY-B);t.stepSize&&(y=K(y,typeof t.stepSize=="object"?t.stepSize.x:t.stepSize),m=K(m,typeof t.stepSize=="object"?t.stepSize.y:t.stepSize)),y=t.direction==="vertical"?0:re(y,[((R=(I=t.maxDistance)==null?void 0:I.x)==null?void 0:R.min)??-1/0,((H=(L=t.maxDistance)==null?void 0:L.x)==null?void 0:H.max)??1/0]),m=t.direction==="horizontal"?0:re(m,[((T=(X=t.maxDistance)==null?void 0:X.y)==null?void 0:T.min)??-1/0,((f=(a=t.maxDistance)==null?void 0:a.y)==null?void 0:f.max)??1/0]),(Y=t.onMove)==null||Y.call(t,r,[y,m],g),g([y,m])},[h,t,g]),l=o.useCallback(n=>{var v;(t.touch&&typeof n.touches<"u"||t.mouse&&n instanceof window.MouseEvent&&n.button===0)&&(h.current=!1,(v=t.onEnd)==null||v.call(t,r,c.current,g))},[t,g]);return o.useEffect(()=>{const n=r.current;if(!(typeof window>"u"||typeof document>"u"||!n))return t.touch&&(n.addEventListener("touchstart",s),n.addEventListener("touchmove",b,{passive:!t.prevent}),document.addEventListener("touchcancel",l),document.addEventListener("touchend",l)),t.mouse&&(n.addEventListener("mousedown",s),document.addEventListener("mousemove",b),document.addEventListener("mouseup",l)),()=>{t.touch&&(n.removeEventListener("touchstart",s),n.removeEventListener("touchmove",b),document.removeEventListener("touchcancel",l),document.removeEventListener("touchend",l)),t.mouse&&(n.removeEventListener("mousedown",s),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",l))}},[r,t,s,b,l]),{target:r,position:{x:w[0],y:w[1]},setPosition:g}},Re=Fe,Ae=A({from:{transform:"translateX(-100%)"}}),He=A({to:{transform:"translateX(-100%)"}}),Te=A({from:{transform:"translateX(100%)"}}),Me=A({to:{transform:"translateX(100%)"}}),Oe=A({from:{transform:"translateY(100%)"}}),Ne=A({to:{transform:"translateY(100%)"}}),Pe=j("dialog",{padding:0,insetBlock:0,maxHeight:"100%",maxWidth:"unset",flexDirection:"column",border:"none",boxSizing:"border-box",zIndex:"48",pointerEvents:"none","&:focus-visible":{outline:"none"},"&::backdrop":{background:"rgba(0, 0, 0, 0.4)"},"&[open]":{display:"flex",pointerEvents:"auto"},"@media (prefers-reduced-motion: no-preference)":{display:"flex",opacity:0,animation:".2s cubic-bezier(.25,0,.3,1) forwards",transition:"height .2s ease, opacity .2s ease","&[open]":{opacity:1,animation:".4s cubic-bezier(.25,0,.3,1) forwards"}},variants:{position:{left:{insetInline:"0 auto",animationName:`${He}`,"&[open]":{animationName:Ae}},right:{insetInline:"auto 0",animationName:`${Me}`,"&[open]":{animationName:Te}},bottom:{height:"40dvh",width:"100%",insetBlock:"auto 0",animationName:`${Ne}`,"&[open]":{animationName:Oe}}},variant:{default:{height:"100dvh",width:"100%","@sm":{width:"clamp( 30vw, $160, 50vw )"}},h5:{height:"40dvh",maxHeight:"calc(100dvh - 1rem)",borderRadius:"1rem 1rem 0 0","&.drawer-expanded":{height:"calc(100dvh - 1rem)"}}}}}),ze=j("header",{padding:"$4",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"$4"}),qe=j("article",{flex:1,padding:"$4",maxHeight:"100%",width:"100%",overflow:"hidden auto"}),je=j("footer",{padding:"$4"}),Xe=j("div",{paddingBlock:"$4","@sm":{paddingBlock:"$2"},display:"flex",alignItems:"center",justifyContent:"center",width:"100%",cursor:"grab","&:active":{cursor:"grabbing"},"& .expander-line":{display:"block",width:"$10",height:"$1",background:"$grayShades20",borderRadius:"$md"}}),Ye=({drawerOpen:d,children:t,css:r={},onDragPositionYChange:u,onDragStart:c,onDrag:h,onDragEnd:w,...C})=>{const g=o.useMemo(()=>({direction:"vertical",setCSS:!1,onStart(...n){c==null||c(...n)},onMove(...n){h==null||h(...n)},onEnd(...n){w==null||w(...n)}}),[c,h,w]),{target:s,position:{y:b},setPosition:l}=Re(g);return o.useEffect(()=>{l([0,0])},[d]),o.useEffect(()=>{u==null||u(b)},[b]),e(Xe,{css:r,ref:s,...C,children:t||e("div",{className:"expander-line"})})},Ve=Ye,_e=o.forwardRef(({children:d,css:t={},...r},u)=>{const c=Z(u);return e(je,{css:t,ref:c,...r,children:d})}),de=_e,Ue=o.forwardRef(({children:d,css:t={},...r},u)=>{const c=Z(u);return e(ze,{css:t,ref:c,...r,children:d})}),le=Ue,ie=100,ae=67,Ke=o.forwardRef((d,t)=>{const r=typeof window<"u"?window.innerHeight:void 0,u=o.useMemo(()=>typeof document<"u"?document.body.style.overflow:"auto",[]),{drawerMode:c="modal",className:h="",css:w={},style:C,children:g,open:s=!1,onClose:b,onMouseDown:l,variant:n="default",position:v="right",expanderCSS:B={},onExpandChange:y,expandedPoint:m=ie,expandableLine:$=ae,disableResize:F=!1,autoClose:I=!0,disableAddBodyAttr:R=!1,...L}=d,H=c==="non-modal"?!0:R,X=n==="h5"?"bottom":v,T=Z(t),a=T.current,[f,Y]=o.useState(0),[D,G]=o.useState(),[J,V]=o.useState(a==null?void 0:a.offsetHeight),[ce,ue]=o.useState(!1),{expandedPosition:_,expandablePosition:Q}=o.useMemo(()=>{if(!r)return{expandedPosition:0,expandablePosition:0};const k=Math.floor(f/r*100);let E=m>100||m<0?ie:m,O=$>100||$<0?ae:$;return E<k&&(E=k),E<O&&(O=E),{expandedPosition:Math.floor(r*(E/100)),expandablePosition:Math.floor(r*(O/100))}},[m,$,r,f]),{child:pe,rest:he}=oe(g,le),{child:me,rest:fe}=oe(he,de),M=o.useCallback(k=>{typeof document>"u"||!a||(V(f),document.body.style.setProperty("overflow",u),document.body.removeAttribute("inert"),a.close(k))},[a,f]),ye=o.useCallback(k=>{a&&(l==null||l(k),k.target instanceof HTMLDialogElement&&k.target.nodeName==="DIALOG"&&M("dismiss"))},[a,l,M]),ge=o.useCallback(()=>{a&&a.style.setProperty("transition-property","opacity")},[a]),we=o.useCallback(k=>{if(!a)return;let E=f;D&&D>f&&(E=D),V(E-k)},[a,f,D]),be=o.useCallback((k,E,O)=>{if(!window.innerHeight||!s||!a)return;a.style.setProperty("transition-property","height, opacity");let ee=f;D&&D>f&&(ee=D);const te=ee-E[1],U=te>Q;if(ue(U),y==null||y(U),O([0,0]),U&&_&&D===f){G(_),V(_);return}if(U||G(f),I&&te<f-100){M();return}},[a,s,I,f,D,_,Q]);return o.useEffect(()=>{if(!(typeof document>"u"||!a)){if(s){if(H?(document.body.style.setProperty("overflow","auto"),document.body.removeAttribute("inert")):(document.body.style.setProperty("overflow","hidden"),document.body.setAttribute("inert","")),c==="modal"){a.showModal();return}a.show();return}M()}},[s,a,H,M]),o.useEffect(()=>{!s&&f&&V(f),G(f)},[s,f]),o.useEffect(()=>{Y((a==null?void 0:a.offsetHeight)??0)},[a]),i(Pe,{ref:T,className:`${h} ${ce?"drawer-expanded":""}`,css:w,variant:n,position:X,...L,style:{...C,height:n==="h5"&&J?`${J}px`:C==null?void 0:C.height},onMouseDown:ye,onClose:b,children:[n==="h5"&&!F&&e(Ve,{drawerOpen:s,className:"drawer-expander",css:B,onDragStart:ge,onDragPositionYChange:we,onDragEnd:be}),pe,e(qe,{className:"drawer-content",children:fe}),me]})}),x=Ke;x.Header=le;x.Footer=de;x.Header.displayName="Drawer.Header";x.Footer.displayName="Drawer.Footer";x.displayName="Drawer";const q="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",se={disableResize:!1,disableAddBodyAttr:!1,autoClose:!0};function pt(){const[d,t]=o.useState(!1),[r,u]=o.useState(!1),[c,h]=o.useState(!1),[w,C]=o.useState(!1),[g,s]=o.useState(!1),[b,l]=o.useState(se);return i("div",{style:{position:"relative",minHeight:"100vh"},children:[e("h4",{children:"H5 Drawer"}),e(p,{type:"button",onClick:()=>t(!0),children:"Open Drawer"}),e("h4",{children:"Drawer Customize"}),e(p,{type:"button",onClick:()=>u(!0),children:"Open Customizable Drawer"}),e("h4",{style:{marginBottom:0},children:"Demo Trip information"}),i(S.Body,{variant:"body3",css:{color:"$grayShades60",marginBlock:"$2 $4"},children:["Drawer's maximum expanded height will be half of current viewport with autoclose disabled.",e("br",{}),"Better view on mobile screen"]}),e(p,{type:"button",onClick:()=>C(!0),children:"Open Drawer"}),e("h4",{children:"Non-modal mode"}),i(S.Body,{variant:"body3",css:{color:"$grayShades60",marginBlock:"$2 $4"},children:["A Drawer that has no backdrop and also doesn't render on the top-layer. It can ",e("strong",{children:"NOT"})," be closed by pressing the ",e("kbd",{children:"ESC"})," ","key.",e("br",{}),"The content below the non-modal drawer can be interacted."]}),e(p,{type:"button",variant:"secondary",onClick:()=>h(!c),children:"Toggle Non-modal Drawer"}),i(x,{open:d,css:{height:"40dvh","& .drawer-content":{padding:0}},onClose:()=>t(!1),variant:"h5",children:[e(S.Body,{variant:"body2",css:{textAlign:"center",paddingBlock:"$4"},children:"Pull up for more rides"}),i(Se,{children:[e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",descriptionIcon:e(W,{style:{width:14,height:14,color:"#0142AF"},icon:ne}),variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:q,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply",icon:e(W,{icon:De})}}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:q,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:q,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"},descriptionIcon:e(W,{style:{width:14,height:14,color:"#0142AF"},icon:ne})}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:q,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}}),e(N,{title:"ComfortRIDE",description:"Car or Taxi, Flat Fare",variant:"h5",leftInfo:e(P,{variant:"h5",isRounded:!0,src:q,alt:"singapore"}),rightInfo:{text:"$9.90",description:"Fees may apply"}})]})]}),i(x,{open:r,css:{height:"40dvh","& .drawer-content":{button:{marginBottom:"$4"}}},onClose:()=>{u(!1),l(se)},variant:"h5",...b,children:[e("p",{children:"Resizable Drawer?"}),e(p,{type:"button",onClick:()=>l(n=>({...n,disableResize:!n.disableResize})),children:"Toggle Draggable"}),e("hr",{}),i("p",{children:["Should block the below layer from scrolling and tell the browser to ignore its elements (inert)?"," ",e("strong",{children:`${!b.disableAddBodyAttr}`})]}),e(p,{type:"button",onClick:()=>l(n=>({...n,disableAddBodyAttr:!n.disableAddBodyAttr})),children:"Toggle Block"}),e("hr",{}),i("p",{children:["Should autoclose when drags and drops the drawer below its height?"," ",e("strong",{children:`${b.autoClose}`})]}),e(p,{type:"button",onClick:()=>l(n=>({...n,autoClose:!n.autoClose})),children:"Toggle autoclose"})]}),i(x,{open:w,css:{height:"20dvh"},expanderCSS:{background:"$blueShades100",paddingBlock:"$2 $6"},onClose:()=>C(!1),variant:"h5",expandedPoint:50,expandableLine:33,autoClose:!1,children:[i(x.Header,{css:{display:"flex",paddingTop:0,gap:"$2",justifyContent:"space-between",backgroundColor:"$blueShades100"},children:[e(S.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Your ride is on the way"}),e(S.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Arriving in 8 - 10 min"})]}),i(S.Body,{weight:"semibold",css:{paddingBlock:"$5 $8",display:"flex",gap:"$2",justifyContent:"space-between",alignItems:"center"},children:["Shaw",e(p,{type:"button",variant:"secondary",children:"Call Driver"})]}),i("div",{style:{display:"grid",gridTemplateColumns:"auto auto",justifyContent:"space-between",gap:"1rem"},children:[i(S.Body,{variant:"body3",weight:"semibold",css:{display:"flex",gap:"$2",justifyContent:"space-between",alignItems:"center"},children:[e("span",{children:"ComfortRIDE"})," ",e(S.Link,{variant:"link2",children:"T&C apply"})]}),e("div",{children:"$8.60"}),e(S.Body,{variant:"body3",weight:"semibold",children:"Total"}),e("div",{children:"$8.60"})]}),i("div",{style:{display:"flex",gap:"1rem",paddingBlock:"1rem"},children:[e(p,{type:"button",variant:"secondary",css:{flex:1},children:"Share your trip"}),e(p,{type:"button",variant:"danger",css:{flex:1},children:"Cancel trip"})]})]}),i(x,{open:c,css:{height:"20dvh",position:"fixed",overflow:"hidden"},expanderCSS:{background:"$blueShades100",paddingBlock:"$2 $6"},onClose:()=>h(!1),variant:"h5",expandedPoint:50,expandableLine:33,drawerMode:"non-modal",children:[i(x.Header,{css:{display:"flex",paddingTop:0,gap:"$2",justifyContent:"space-between",backgroundColor:"$blueShades100"},children:[e(S.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Your ride is on the way"}),e(S.Body,{variant:"body3",weight:"semibold",css:{color:"$grayShades10",width:"fit-content"},children:"Arriving in 8 - 10 min"})]}),i("p",{children:[e("strong",{children:"Drag to bottom"})," ⏬ of the screen to close or",e("br",{})," just ",e("strong",{children:"tap"})," on the Toggle Non-modal button"]}),e("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod itaque fugiat ipsa eveniet illum quae eligendi, qui hic officia sequi perferendis laborum vel nostrum praesentium doloremque, dolorum debitis unde!"}),e(p,{type:"button",variant:"secondary",onClick:()=>s(!0),children:"Open confirm modal"}),e(z.Trigger,{isOpen:g,handleClose:()=>s(!1),children:i(z,{css:{display:"flex",flexDirection:"column"},children:[e(z.Title,{children:"Please confirm"}),e(z.Description,{css:{flex:1},children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reprehenderit animi ducimus facere perspiciatis, quod deserunt, necessitatibus voluptatibus ipsam harum rerum cumque, vero tempore ipsum praesentium quas veniam expedita magnam."}),i(z.Actions,{children:[e(p,{variant:"ghost",onClick:()=>s(!1),css:{marginRight:"4px"},children:"Cancel"}),e(p,{variant:"danger",onClick:()=>{s(!1),h(!1)},children:"Proceed"})]})]})})]})]})}function ht(){const[d,t]=o.useState(!1),[r,u]=o.useState(""),[c,h]=o.useState(!1),[w,C]=o.useState(void 0),g=n=>{n.preventDefault();const v=new FormData(n.currentTarget);u(v.get("keyword")||""),v.get("keep")||n.currentTarget.reset(),s()},s=()=>{t(!1)},b=()=>{t(!1)},l=n=>{C(n),h(!0)};return i(Ce,{children:[e("h3",{children:"1. Drawer"}),i("p",{children:["Drawer form value: ",r]}),e(p,{type:"button",onClick:()=>t(!0),children:"Open Drawer"}),i(x,{open:d,onClose:b,children:[i(x.Header,{children:[e("h2",{style:{marginBlock:0},children:"Drawer controlled by form"}),e(p,{css:{padding:"$1",svg:{width:"fit-content !important"}},type:"button",variant:"ghost",onClick:s,children:e(Le,{})})]}),i("form",{id:"form-in-drawer",method:"dialog",onSubmit:g,children:[e("h3",{children:"Drawer Form"}),e(ke,{label:"Keyword",name:"keyword",id:"keyword",placeholder:"Enter anything"}),e("label",{htmlFor:"keepValue",children:"Keep form value: "}),e("input",{name:"keep",type:"checkbox",id:"keepValue",style:{marginTop:"1rem"}})]}),i("section",{style:{height:"50vh",marginTop:"5rem"},children:[e("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,backgroundColor:"white"},children:"Section 1: Very long content here, scroll down ⏬ for more content"}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi."})]}),i("section",{style:{height:"100vh"},children:[e("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,backgroundColor:"white"},children:"Section 2: No idea"}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem omnis architecto aliquam id dicta dolor magnam, sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi ratione! Neque doloribus vel esse."})]}),i(x.Footer,{css:{display:"flex",gap:"$2"},children:[e(p,{variant:"secondary",form:"form-in-drawer",type:"reset",onClick:s,children:"Cancel"}),e(p,{form:"form-in-drawer",type:"submit",children:"Submit"})]})]}),e("h3",{children:"2. Position"}),i($e,{children:[e(p,{type:"button",leftIcon:e(ve,{}),onClick:()=>l("left"),children:"Open on the left"}),e(p,{variant:"secondary",type:"button",onClick:()=>l("bottom"),children:"Open on the bottom"}),e(p,{type:"button",rightIcon:e(xe,{}),onClick:()=>l("right"),children:"Open on the right"})]}),i(x,{open:c,onClose:()=>h(!1),position:w,children:[e(x.Header,{children:i("h2",{children:["Drawer ",w||""]})}),e("p",{children:"Article contents"}),e(p,{type:"button",onClick:()=>h(!1),children:"Close Drawer"})]})]})}typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ht as Default,pt as H5};
