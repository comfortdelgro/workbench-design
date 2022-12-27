import{r as g,R as k,s as A,a as t,j as e,F as M}from"./index.5c529a62.js";import"./index.241930ef.js";import{C as N,R as D}from"./components.04e93519.js";import{a as K}from"./index.1cfdb18d.js";import{a as z,$ as _,s as Y}from"./module.b1d36023.js";import{g as Q,$ as G,f as J,a as X}from"./module.a8b58f88.js";import{$ as Z}from"./module.dd78b376.js";import{I as ee}from"./index.4d985a28.js";import{$ as te,e as ie}from"./module.02d419c0.js";import{u as oe}from"./use-dom-ref.937a0154.js";import{B as p}from"./button.9c9f88e7.js";import"./module.45dedc58.js";import"./module.150bfc2a.js";import"./real-module.88775251.js";import"./module.8ce56c77.js";function re(a,o){let d=z(a,{labelable:!0}),{hoverProps:r}=Q({onHoverStart:()=>o==null?void 0:o.open(!0),onHoverEnd:()=>o==null?void 0:o.close()});return{tooltipProps:_(d,r,{role:"tooltip"})}}function le(a,o,d){let{isDisabled:r,trigger:i}=a,l=Y(),n=g.exports.useRef(!1),s=g.exports.useRef(!1),u=()=>{(n.current||s.current)&&o.open(s.current)},f=h=>{!n.current&&!s.current&&o.close(h)};g.exports.useEffect(()=>{let h=B=>{d&&d.current&&B.key==="Escape"&&o.close(!0)};if(o.isOpen)return document.addEventListener("keydown",h,!0),()=>{document.removeEventListener("keydown",h,!0)}},[d,o]);let b=()=>{i!=="focus"&&(J()==="pointer"?n.current=!0:n.current=!1,u())},$=()=>{i!=="focus"&&(s.current=!1,n.current=!1,f())},c=()=>{s.current=!1,n.current=!1,f(!0)},y=()=>{X()&&(s.current=!0,u())},S=()=>{s.current=!1,n.current=!1,f(!0)},{hoverProps:C}=Q({isDisabled:r,onHoverStart:b,onHoverEnd:$}),{pressProps:L}=G({onPressStart:c}),{focusableProps:E}=Z({isDisabled:r,onFocus:y,onBlur:S},d);return{triggerProps:{"aria-describedby":o.isOpen?l:void 0,..._(E,C,L)},tooltipProps:{id:l}}}const ne=1500,q=500;let R={},se=0,w=!1,T=null,O=null;function ae(a={}){let{delay:o=ne}=a,{isOpen:d,open:r,close:i}=te(a),l=g.exports.useMemo(()=>`${++se}`,[]),n=g.exports.useRef(),s=()=>{R[l]=b},u=()=>{for(let c in R)c!==l&&(R[c](!0),delete R[c])},f=()=>{clearTimeout(n.current),n.current=null,u(),s(),w=!0,r(),T&&(clearTimeout(T),T=null),O&&(clearTimeout(O),O=null)},b=c=>{c?(clearTimeout(n.current),n.current=null,i()):n.current||(n.current=setTimeout(()=>{n.current=null,i()},q)),T&&(clearTimeout(T),T=null),w&&(O&&clearTimeout(O),O=setTimeout(()=>{delete R[l],O=null,w=!1},q))},$=()=>{u(),s(),!d&&!T&&!w?T=setTimeout(()=>{T=null,w=!0,f()},o):d||f()};return g.exports.useEffect(()=>()=>{clearTimeout(n.current),R[l]&&delete R[l]},[l]),{isOpen:d,open:c=>{!c&&o>0&&!n.current?$():f()},close:b}}const j=k.createContext({}),m="8px",de={borderLeft:`${m} solid transparent`,borderRight:`${m} solid transparent`,borderTop:`${m} solid currentColor`},ce={borderTop:`${m} solid transparent`,borderBottom:`${m} solid transparent`,borderRight:`${m} solid currentColor`},pe={borderLeft:`${m} solid transparent`,borderRight:`${m} solid transparent`,borderBottom:`${m} solid currentColor`},ue={borderTop:`${m} solid transparent`,borderBottom:`${m} solid transparent`,borderLeft:`${m} solid currentColor`},me=A("span",{$$padding:"$space$4","&:before":{content:"''",display:"block",width:"0",height:"0",position:"absolute",color:"$cdgBlue"},variants:{arrowPosition:{top:{"&:before":{top:"calc(($$padding * -1/2))",...pe}},right:{"&:before":{right:"calc(($$padding * -1/2))",...ue}},left:{"&:before":{left:"calc(($$padding * -1/2))",...ce}},bottom:{"&:before":{bottom:"calc(($$padding * -1/2))",...de}}}}}),fe=A("div",{$$themeColor:"$cdgBlue",position:"absolute",padding:"$4",maxWidth:"$96",background:"$cdgBlue",lineHeight:"$normal",borderRadius:"$md",boxShadow:"0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)",color:"$whiteText","& .tooltip-header":{display:"flex",alignItems:"flex-start",marginBottom:"$4"},"& .tooltip-title":{fontSize:"$5",lineHeight:"$loose",margin:0,marginRight:"$4"},"& .tootip-close-button":{marginLeft:"auto",background:"none",color:"inherit",border:"none",padding:"0",cursor:"pointer",outline:"inherit"},"& .tooltip-close-icon":{width:"$4",height:"$4"}}),he={top:"bottom",right:"left",bottom:"top",left:"right",center:"top"},H=8,ge=k.forwardRef((a,o)=>{let{ref:d,arrowProps:r,state:i,style:l,placement:n}=g.exports.useContext(j);const{css:s={},title:u,children:f,dismissible:b=!1,...$}=a,{tooltipProps:c}=re($,i);g.exports.useImperativeHandle(o,()=>d.current);const S={arrowPosition:he[n||"top"]},C=()=>{var h,B,P,W;const E={"&:before":{color:s.backgroundColor,left:((h=r==null?void 0:r.style)==null?void 0:h.left)!==void 0?+((B=r==null?void 0:r.style)==null?void 0:B.left)-H:void 0,top:((P=r==null?void 0:r.style)==null?void 0:P.top)!==void 0?+((W=r==null?void 0:r.style)==null?void 0:W.top)-H:void 0}};return E["&:before"].color||delete E["&:before"].color,E};return t(fe,{ref:d,css:s,style:l,...c,children:[(u||b)&&t("div",{className:"tooltip-header",children:[u&&(()=>typeof u=="string"?e("h2",{className:"tooltip-title",children:u}):e("div",{className:"tooltip-title",children:u}))(),b&&e("button",{className:"tootip-close-button",onClick:()=>i==null?void 0:i.close(!0),children:e(ee,{icon:K,className:"tooltip-close-icon"})})]}),f,e(me,{...S,css:C()})]})}),v=ge,be=A("button",{display:"inline-block",background:"none",color:"inherit",border:"none",padding:"0",cursor:"pointer",outline:"inherit"}),$e=16,F=0,I=16,Te=k.forwardRef((a,o)=>{const{css:d={},children:r,open:i,onOpenChange:l,offset:n=$e,placement:s="bottom",defaultOpen:u=!1,shouldFlip:f=!0,...b}=a;let{crossOffset:$=F}=a;const c={delay:0,...a};s==="right bottom"||s==="left bottom"?$=F+I:(s==="right top"||s==="left top")&&($=F-I);const y=ae(c);g.exports.useEffect(()=>{!l||l(y.isOpen)},[y.isOpen]);const S=i!=null?i:y.isOpen,C=oe(o),{triggerProps:L,tooltipProps:E}=le(a,y,C),h=g.exports.useRef(null),[B,P]=k.Children.toArray(r),{overlayProps:W,arrowProps:U,placement:V}=ie({placement:s,targetRef:C,overlayRef:h,offset:n,crossOffset:$,isOpen:S,shouldFlip:f});return t(M,{children:[e(be,{css:d,ref:C,...L,...b,children:B}),e(j.Provider,{value:{state:y,arrowProps:U,ref:h,style:W.style,placement:V,...E},children:(S||u)&&P})]})}),x=Te;v.displayName="Tooltip";x.displayName="TooltipTrigger";const Fe=()=>{const a=[{triggerElement:e("a",{href:"#",children:"Right tooltip"}),placement:"right"},{triggerElement:e("a",{href:"#",children:"Right-bottom tooltip"}),placement:"right bottom"},{triggerElement:e("a",{href:"#",children:"Right-top tooltip"}),placement:"right top"}],o=[{triggerElement:e("a",{href:"#",children:"Left tooltip"}),placement:"left"},{triggerElement:e("a",{href:"#",children:"Left-bottom tooltip"}),placement:"left bottom"},{triggerElement:e("a",{href:"#",children:"Left-top tooltip"}),placement:"left top"}],d=[{triggerElement:e("a",{href:"#",children:"Top tooltip"}),placement:"top"},{triggerElement:e("a",{href:"#",children:"Top-left tooltip"}),placement:"top left"},{triggerElement:e("a",{href:"#",children:"Top-right tooltip"}),placement:"top right"}],r=[{triggerElement:e("a",{href:"#",children:"Bottom tooltip"}),placement:"bottom"},{triggerElement:e("a",{href:"#",children:"Bottom-left tooltip"}),placement:"bottom left"},{triggerElement:e("a",{href:"#",children:"Bottom-right tooltip"}),placement:"bottom right"}];return t(N,{css:{gap:"40px"},children:[e("h1",{children:"Positions"}),e("h2",{children:"Right side"}),e(D,{css:{gap:"40px"},children:a.map(i=>{const l=i.placement;return t(x,{placement:l,children:[i.triggerElement,t(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})})}),e("h2",{children:"Left side"}),e(D,{css:{gap:"40px",justifyContent:"flex-end"},children:o.map(i=>{const l=i.placement;return t(x,{placement:l,children:[i.triggerElement,t(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})})}),e("h2",{children:"Bottom side"}),e(D,{css:{gap:"40px",justifyContent:"center"},children:r.map(i=>{const l=i.placement;return t(x,{placement:l,children:[i.triggerElement,t(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})})}),e("h2",{children:"Top side"}),e(D,{css:{gap:"40px",justifyContent:"center"},children:d.map(i=>{const l=i.placement;return t(x,{placement:l,children:[i.triggerElement,t(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})})})]})},Ae=()=>t(N,{css:{gap:"40px"},children:[t("div",{children:[e("h1",{children:"Dissmisible"}),t(x,{placement:"right",children:[e("a",{href:"#",children:"Dissmisible tooltip"}),t(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})]}),t("div",{children:[e("h1",{children:"Non-dismissible"}),t(x,{placement:"right",children:[e("a",{href:"#",children:"Non-Dissmisible tooltip"}),t(v,{title:"Tooltip",children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})]})]}),qe=()=>{const[a,o]=g.exports.useState(!1);return t("div",{children:[t("h1",{children:["Tooltip is ",a?"Open":"Close"]}),t(x,{placement:"bottom",open:a,onOpenChange:o,id:"text",children:[e("a",{href:"#",children:"Controlled tooltip"}),t(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),t("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(p,{fullWidth:!0,variant:"primary",children:"Button"}),e(p,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{qe as Controlled,Ae as Dismissible,Fe as Positions};
