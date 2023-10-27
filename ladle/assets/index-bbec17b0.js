import{k as x,s as y,r as t,j as w,a as de}from"./index-e5a3d34a.js";import{p as _}from"./pick-child-267c7895.js";import{u as L}from"./use-dom-ref-ab092602.js";import{u as le}from"./useDrag-fd5c98e3.js";const ce=x({from:{transform:"translateX(-100%)"}}),fe=x({to:{transform:"translateX(-100%)"}}),pe=x({from:{transform:"translateX(100%)"}}),he=x({to:{transform:"translateX(100%)"}}),ue=x({from:{transform:"translateY(100%)"}}),me=x({to:{transform:"translateY(100%)"}}),we=y("dialog",{position:"fixed",insetBlock:0,padding:0,maxHeight:"100%",maxWidth:"unset",flexDirection:"column",border:"none",boxShadow:"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",zIndex:"48",pointerEvents:"none","&:focus-visible":{outline:"none"},"&::backdrop":{background:"rgba(0, 0, 0, 0.4)"},"&[open]":{display:"flex",pointerEvents:"auto"},"@media (prefers-reduced-motion: no-preference)":{display:"flex",opacity:0,animation:".2s cubic-bezier(.25,0,.3,1) forwards",transition:"height .2s ease, opacity .2s ease","&[open]":{opacity:1,animation:".4s cubic-bezier(.25,0,.3,1) forwards"}},variants:{drawerMode:{"non-modal":{overflow:"hidden"},modal:{}},position:{left:{insetInline:"0 auto",animationName:`${fe}`,"&[open]":{animationName:ce}},right:{insetInline:"auto 0",animationName:`${he}`,"&[open]":{animationName:pe}},bottom:{height:"40dvh",width:"100%",insetBlock:"auto 0",boxShadow:"0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",animationName:`${me}`,"&[open]":{animationName:ue}}},variant:{default:{height:"100dvh",width:"100%","@sm":{width:"clamp( 30vw, $160, 50vw )"}},h5:{height:"40dvh",maxHeight:"calc(100dvh - 1rem)",borderRadius:"1rem 1rem 0 0","&.drawer-expanded":{height:"calc(100dvh - 1rem)"}}}}}),xe=y("header",{padding:"$4",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"$4"}),ge=y("article",{flex:1,padding:"$4",maxHeight:"100%",width:"100%",overflow:"hidden auto"}),be=y("footer",{padding:"$4"}),ye=y("div",{paddingBlock:"$4","@sm":{paddingBlock:"$2"},display:"flex",alignItems:"center",justifyContent:"center",width:"100%",cursor:"grab","&:active":{cursor:"grabbing"},"& .expander-line":{display:"block",width:"$10",height:"$1",background:"$grayShades20",borderRadius:"$md"}}),He=({drawerOpen:p,children:h,css:n={},onDragPositionYChange:o,onDragStart:i,onDrag:m,onDragEnd:l,...C})=>{const c=t.useMemo(()=>({direction:"vertical",setCSS:!1,onStart(...s){i==null||i(...s)},onMove(...s){m==null||m(...s)},onEnd(...s){l==null||l(...s)}}),[i,m,l]),{target:I,position:{y:u},setPosition:v}=le(c);return t.useEffect(()=>{v({x:0,y:0})},[p]),t.useEffect(()=>{o==null||o(u)},[u]),w(ye,{css:n,ref:I,...C,children:h||w("div",{className:"expander-line"})})},ve=He,Ee=t.forwardRef(({children:p,css:h={},...n},o)=>{const i=L(o);return w(be,{css:h,ref:i,...n,children:p})}),T=Ee,De=t.forwardRef(({children:p,css:h={},...n},o)=>{const i=L(o);return w(xe,{css:h,ref:i,...n,children:p})}),U=De,j=100,z=67,$e=t.forwardRef((p,h)=>{const n=typeof window<"u"?window.innerHeight:void 0,{drawerMode:o="modal",className:i="",css:m={},style:l,children:C,open:c=!1,onClose:I,onMouseDown:u,preventFocus:v=!0,preventClose:s=!1,variant:E="default",position:G="right",expanderCSS:W={},onExpandChange:P,expandedPoint:D=j,expandableLine:$=z,disableResize:q=!1,disableDragClose:M=!1,disableAddBodyAttr:Ne,...J}=p,K=E==="h5"?"bottom":G,F=L(h),e=F.current,[r,Q]=t.useState(0),[f,R]=t.useState(),[A,N]=t.useState(e==null?void 0:e.offsetHeight),[V,Z]=t.useState(!1),{expandedPosition:k,expandablePosition:O}=t.useMemo(()=>{if(!n)return{expandedPosition:0,expandablePosition:0};const a=Math.floor(r/n*100);let d=D>100||D<0?j:D,b=$>100||$<0?z:$;return d<a&&(d=a),d<b&&(b=d),{expandedPosition:Math.floor(n*(d/100)),expandablePosition:Math.floor(n*(b/100))}},[D,$,n,r]),{child:Y,rest:ee}=_(C,U),{child:te,rest:re}=_(ee,T),g=t.useCallback(a=>{typeof document>"u"||!e||(N(r),e.close(a))},[e,r]),ae=t.useCallback(a=>{e&&(u==null||u(a),!(!(a.target instanceof HTMLDialogElement)||s)&&a.target.nodeName==="DIALOG"&&g("dismiss"))},[e,s,u,g]),ne=t.useCallback(a=>{s&&a.preventDefault()},[s]),oe=t.useCallback(()=>{e&&e.style.setProperty("transition-property","opacity")},[e]),ie=t.useCallback(a=>{if(!e)return;let d=r;f&&f>r&&(d=f),N(d-a)},[e,r,f]),se=t.useCallback((a,d,b)=>{if(!window.innerHeight||!c||!e)return;e.style.setProperty("transition-property","height, opacity");let B=r;f&&f>r&&(B=f);const X=B-d.y,S=X>O;if(Z(S),P==null||P(S),b({x:0,y:0}),S&&k&&f===r){R(k),N(k);return}S||R(r),!M&&X<r-100&&g()},[e,c,M,r,f,k,O]);return t.useEffect(()=>{if(!(typeof document>"u"||!e)){if(c){v||e.setAttribute("inert",""),o==="modal"?e.showModal():e.show(),e.removeAttribute("inert");return}g()}},[c,e,v,g]),t.useEffect(()=>{!c&&r&&N(r),R(r)},[c,r]),t.useEffect(()=>{Q((e==null?void 0:e.offsetHeight)??0)},[e]),de(we,{ref:F,className:`${i} ${V?"drawer-expanded":""}`,css:m,drawerMode:o,variant:E,position:K,...J,style:{...l,height:E==="h5"&&A?`${A}px`:l==null?void 0:l.height},onMouseDown:ae,onClose:I,onCancel:ne,children:[E==="h5"&&!q&&w(ve,{drawerOpen:c,className:"drawer-expander",css:W,onDragStart:oe,onDragPositionYChange:ie,onDragEnd:se}),Y,w(ge,{className:"drawer-content",children:re}),te]})}),H=$e;H.Header=U;H.Footer=T;H.Header.displayName="Drawer.Header";H.Footer.displayName="Drawer.Footer";H.displayName="Drawer";export{H as D};
