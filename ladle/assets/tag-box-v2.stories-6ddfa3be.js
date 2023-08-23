import{s as u,r as l,a as h,j as c,t as te}from"./index-f44380ee.js";import{C as W}from"./components-46861628.js";import{F as K}from"./index.es-26e19131.js";import{i as x,b as ae}from"./isArray-1d712889.js";import{i as C}from"./isSymbol-db71ee60.js";import{c as ie}from"./isObjectLike-625b0238.js";import{f as oe}from"./faPlus-8ccf1391.js";var F={},O={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r="fas",t="xmark",i=384,o=512,a=[128473,10005,10006,10060,215,"close","multiply","remove","times"],d="f00d",f="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";e.definition={prefix:r,iconName:t,icon:[i,o,a,d,f]},e.faXmark=e.definition,e.prefix=r,e.iconName=t,e.width=i,e.height=o,e.ligatures=a,e.unicode=d,e.svgPathData=f,e.aliases=a})(O);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var r=O;e.definition={prefix:r.prefix,iconName:r.iconName,icon:[r.width,r.height,r.aliases,r.unicode,r.svgPathData]},e.faClose=e.definition,e.prefix=r.prefix,e.iconName=r.iconName,e.width=r.width,e.height=r.height,e.ligatures=r.aliases,e.unicode=r.unicode,e.svgPathData=r.svgPathData,e.aliases=r.aliases})(F);var se=x,de=C,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;function ue(e,r){if(se(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||de(e)?!0:ce.test(e)||!le.test(e)||r!=null&&e in Object(r)}var fe=ue,A=ae,pe="Expected a function";function k(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(pe);var t=function(){var i=arguments,o=r?r.apply(this,i):i[0],a=t.cache;if(a.has(o))return a.get(o);var d=e.apply(this,i);return t.cache=a.set(o,d)||a,d};return t.cache=new(k.Cache||A),t}k.Cache=A;var ge=k,he=ge,be=500;function me(e){var r=he(e,function(i){return t.size===be&&t.clear(),i}),t=r.cache;return r}var ye=me,ve=ye,we=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Se=/\\(\\)?/g,$e=ve(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(we,function(t,i,o,a){r.push(o?a.replace(Se,"$1"):i||t)}),r}),xe=$e;function Ce(e,r){for(var t=-1,i=e==null?0:e.length,o=Array(i);++t<i;)o[t]=r(e[t],t,e);return o}var ke=Ce,D=ie,Pe=ke,Ne=x,Te=C,ze=1/0,M=D?D.prototype:void 0,B=M?M.toString:void 0;function L(e){if(typeof e=="string")return e;if(Ne(e))return Pe(e,L)+"";if(Te(e))return B?B.call(e):"";var r=e+"";return r=="0"&&1/e==-ze?"-0":r}var Ie=L,_e=Ie;function Ee(e){return e==null?"":_e(e)}var De=Ee,Me=x,Be=fe,We=xe,Ke=De;function Fe(e,r){return Me(e)?e:Be(e,r)?[e]:We(Ke(e))}var Oe=Fe,Ae=C,Le=1/0;function Ve(e){if(typeof e=="string"||Ae(e))return e;var r=e+"";return r=="0"&&1/e==-Le?"-0":r}var Xe=Ve,Ge=Oe,He=Xe;function Ue(e,r){r=Ge(r,e);for(var t=0,i=r.length;e!=null&&t<i;)e=e[He(r[t++])];return t&&t==i?e:void 0}var je=Ue,Ye=je;function Ze(e,r,t){var i=e==null?void 0:Ye(e,r);return i===void 0?t:i}var qe=Ze;const Je=u(K,{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",overflow:"hidden",background:"transparent",color:"$black",cursor:"pointer",fontWeight:"bold",padding:"0.125rem 0",marginLeft:"1em"}),Qe=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",overflow:"hidden",background:"transparent",fontWeight:"$bold",color:"$primaryText"}),Re=u("input",{appearance:"none",outline:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",overflow:"hidden",background:"transparent",color:"$black",fontWeight:"$bold"}),er=u("div",{appearance:"none",border:"none",boxSizing:"border-box",overflow:"hidden",background:"transparent",display:"inline-flex",alignItems:"center",fontWeight:"bold",borderRadius:"$lg",padding:"0.5rem 1rem",margin:"0.5em",backgroundColor:"$divider",width:"fit-content",height:"2rem",variants:{isErrored:{true:{border:"1px solid $danger"}}}}),rr=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",overflow:"hidden",background:"transparent",width:"fit-content",height:"fit-content",display:"inline-flex",justifyContent:"center"}),nr=u("button",{appearance:"none",boxSizing:"border-box",overflow:"hidden",background:"transparent",backgroundColor:"$background",border:"1px dashed $divider",margin:"0.5em",padding:"0.5rem 1rem",borderRadius:"$lg",fontSize:"1em",fontWeight:"500",display:"inline-block",height:"2rem",color:"$primaryText"}),tr=u("input",{appearance:"none",outline:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px 5px",overflow:"hidden",background:"transparent",height:"2rem",maxWidth:"90%","&::placeholder":{color:"$primaryBg"},"&:focus":{border:"2px solid $cdgblue120",borderRadius:"$md",color:"$typeHeading"},fontSize:"0.875rem",resize:"none",variants:{isEmpty:{false:{},true:{}}}}),ar=u("label",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",overflow:"hidden",background:"transparent",cursor:"pointer",fontWeight:"$semibold",textAlign:"left",fontSize:"$label1",lineHeight:"$normal"}),v=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",overflow:"hidden",background:"transparent",fontSize:"0.75rem",borderRadius:"4px",width:"100%",padding:"0.5em 1em",borderWidth:"1px",borderStyle:"solid",borderColor:"$divider",minHeight:"7.75rem"}),ir=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",overflow:"hidden",background:"transparent",variants:{isErrored:{true:{[`${v}`]:{borderColor:"$danger"}},false:{}},isDisabled:{true:{[`${v}`]:{opacity:.5,pointerEvents:"none",backgroundColor:"$gray20"}},false:{}},focused:{true:{[`${v}`]:{borderWidth:"2px",borderStyle:"solid",borderColor:"$cdgBlue100"}}}}}),or=l.forwardRef(({isRequired:e,tagBoxLabel:r,tags:t,onAddTag:i,onEditTag:o,onRemoveTag:a,isDisabled:d=!1,isEditable:f,isErrored:p=!1,customValidationHandler:N,addTagPlaceholder:V,canRemoveOnDeleteAndBackspaceKey:X,...G},H)=>{const[T,w]=l.useState(!1),[U,z]=l.useState(!1),[j,S]=l.useState(""),[g,b]=l.useState(null),m=l.useRef(null),$=l.useRef(null);l.useImperativeHandle(H,()=>({focus(){var n;(n=m.current)==null||n.focus()},blur(){var n;(n=m.current)==null||n.blur()}}));const Y=n=>!!n&&n.trim()!=="",y=n=>{const s=Y(n);return N?s&&N(n):s},I=()=>{var n;(n=m.current)==null||n.focus()},Z=()=>{w(!0),setTimeout(()=>{var n;return(n=m.current)==null?void 0:n.focus()})},q=()=>{$.current&&!p&&z(!0)},J=n=>{S(n.target.value)},Q=n=>{switch(n.key){case"Enter":case"Escape":{y(n.currentTarget.value)&&(i==null||i(n.currentTarget.value.trim())),S(""),w(!1);break}case"Backspace":case"Delete":{n.currentTarget.value===""&&X&&t&&t.length&&(a==null||a(t.at(-1)));break}}},_=n=>{$.current&&!p&&z(!1),y(n.currentTarget.value)&&(i==null||i(n.currentTarget.value.trim())),S(""),w(!1)},R=(n,s)=>{b({id:s.id,value:n.target.value})},ee=(n,s)=>{n.preventDefault(),y(n.currentTarget.value)?(o==null||o({id:s.id,value:n.currentTarget.value.trim()}),b(null)):a==null||a(s)},re=(n,s)=>{switch(n.key){case"Enter":{n.preventDefault(),y(n.currentTarget.value)&&(o==null||o({id:s.id,value:n.currentTarget.value.trim()}),b(null));break}case"Escape":{n.preventDefault(),y(n.currentTarget.value)?(o==null||o({id:s.id,value:n.currentTarget.value.trim()}),b(null)):a==null||a(s);break}}},E=(n,s)=>{n.stopPropagation(),!d&&f&&b(s)},ne=(n,s)=>{n.stopPropagation(),a==null||a(s)};return h(ir,{...G,isErrored:p,isDisabled:d,focused:U,children:[h(ar,{"aria-label":r,onClick:I,children:[r,e&&c("span",{style:{color:te.colors.danger.value},children:"*"})]}),h(v,{ref:$,onClick:I,onFocus:q,onBlur:_,children:[(t??[]).map(n=>h(er,{onClick:s=>E(s,n),onDoubleClick:s=>E(s,n),isErrored:!!n.isErrored,children:[c(Qe,{title:f?"Click to edit":void 0,className:"tag-content",children:g&&g.id===n.id?c(Re,{type:"text",autoFocus:!0,size:qe(g,"value.length",0)+1,value:g.value,onChange:s=>R(s,n),onBlur:s=>ee(s,n),onKeyDown:s=>re(s,n)}):n.value}),!d&&c(Je,{icon:F.faClose,onClick:s=>ne(s,n),style:{display:g&&g.id===n.id?"none":"inline-block"}})]},n.id)),!d&&h(rr,{children:[!T&&h(nr,{onClick:Z,children:[c(K,{icon:oe.faPlus})," New Tag"]}),c(tr,{type:"text",isEmpty:(t??[]).length===0,style:{display:T?"inline-block":"none"},placeholder:V,ref:m,value:j,onClick:n=>n.stopPropagation(),onChange:J,onKeyDown:Q,onBlur:_})]})]})]})}),P=or;P.displayName="Tag-Box-V2";const sr=()=>new Promise(e=>{setTimeout(()=>{const r=[{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 1",isErrored:!1},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 2",isErrored:!1},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 3",isErrored:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 4",isErrored:!1},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 5",isErrored:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 6",isErrored:!1}];e(r)},1500)}),hr=e=>{const[r,t]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const o=await sr();t(o)}catch(o){console.error("Error fetching tags:",o)}})()},[]),c(W,{children:c(P,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:r,isErrored:!0})})},br=()=>{const[e,r]=l.useState([]),t=a=>{const d={id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:a.trim()};r([...e,d])},i=a=>{const d=e.filter(f=>f.id!==a);r(d)},o=(a,d)=>{const f=e.map(p=>p.id===a?{id:a,value:d}:p);r(f)};return c(W,{children:c(P,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:e,isErrored:!1,isEditable:!0,onAddTag:t,onRemoveTag:a=>i(a.id),onEditTag:a=>o(a.id,a.value),css:{width:"70%"}})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{br as Basic,hr as WithErroredItems};