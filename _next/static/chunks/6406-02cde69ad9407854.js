"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6406],{76406:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=o(l(13735)),r=o(l(51939)),d=o(l(54068)),u=o(l(74045));function o(e){return e&&e.__esModule?e:{default:e}}u.default.Item=r.default,u.default.Header=n.default,u.default.Section=d.default,u.default.displayName="MultipleDropdown";let a=u.default},41986:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=o(l(52983)),r=o(l(17183)),d=l(18e3),u=o(l(14707));function o(e){return e&&e.__esModule?e:{default:e}}let a=function(e){let t=n.default.useRef(null),{focusKey:l,isLoading:o,collection:a,currentKeys:i,disabledKeys:f,rootChildren:c,listBoxRef:s=t,sectionCollection:p,onHover:y,onSelect:h,onLoadMore:g}=e;return n.default.createElement(r.default,{isLoading:o,listBoxRef:s,collection:a,sectionCollection:p,rootChildren:c,onLoadMore:g,renderOptions:e=>e.map(e=>n.default.createElement("div",{key:e.id},e.title&&n.default.createElement(d.StyledSection,null,e.title),e.children.map(e=>e?n.default.createElement(u.default,{item:e,key:e.key,focusKey:l,currentKeys:i,disabledKeys:f,onHover:y,onSelect:h}):null)))})}},74045:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=s(l(52983)),r=l(18098),d=s(l(51939)),u=s(l(25822)),o=l(49086),a=l(78810),i=s(l(41986)),f=l(50347),c=l(36048);function s(e){return e&&e.__esModule?e:{default:e}}let p=n.default.forwardRef((e,t)=>{let{css:l={},isOpen:s,children:p,isErrored:y,isDisabled:h,isRequired:g,isReadOnly:m,helperText:b,defaultOpen:w,errorMessage:E,selectedKeys:v,icon:C=n.default.createElement(o.Icon,null),disabledKeys:S=[],isLoading:k=!1,defaultSelectedKeys:$=[],onLoadMore:x=()=>{}}=e,[_,M]=n.default.useState(!1),[O,L]=n.default.useState(""),[D,j]=n.default.useState(!1),[I,R]=n.default.useState((0,c.getDefaulValues)($,v)),[B,F]=n.default.useState(),P=(0,a.useDOMRef)(t),W=(0,a.useDOMRef)(null),K=(0,a.useDOMRef)(null),A=(0,a.useDOMRef)(null),H=n.default.useRef(null),z=n.default.useMemo(()=>(0,o.pickChilds)(p,d.default),[p]),N=n.default.useMemo(()=>(0,o.pickSections)(p),[p]),T=n.default.useMemo(()=>D?""===O?z:z.filter(e=>{let t=(0,o.textContent)(e);return t?.toLowerCase().includes(O.toLowerCase())}):z,[z,O,D]),G=n.default.useMemo(()=>new o.ListKeyboardDelegate(z,S),[z,S]),V=n.default.useMemo(()=>{let e=[];return z.length>0&&I&&I.length>0&&I.forEach(t=>{let l=z.find(e=>e.key===t);e.push({key:t,rendered:l?.props.children})}),e},[I,z,I.length]);n.default.useEffect(()=>{v&&R(v)},[v]),n.default.useEffect(()=>{I.length>0&&e.onSelectionChange?.(I)},[I]),n.default.useEffect(()=>{!s&&w&&M(w),s&&M(s)},[s]),n.default.useEffect(()=>{F([...I].pop()),e.onOpenChange?.(_)},[_]),n.default.useEffect(()=>{_?(A.current?.focus(),W.current&&(W.current.style.outlineColor=y?"#A4262C":"-webkit-focus-ring-color",W.current.style.outlineStyle="auto")):(A.current?.blur(),W.current&&(W.current.style.outlineColor=y?"#A4262C":"inherit",W.current.style.outlineColor="inherit",W.current.style.outlineStyle="inherit"))},[_]);let X=e=>{let t=new Set(I);I.includes(e)&&(t.delete(e),R([...t]))},Z=e=>{if(W.current){let t=e.target.value;if(j(!0),L(t),""!==t){let l=document.createElement("div");l.style.position="absolute",l.style.top="0",l.style.left="-9999px",l.style.overflow="hidden",l.style.visibility="hidden",l.style.whiteSpace="nowrap",l.style.height="0",l.style.width="fit-content",l.style.maxWidth=`${W.current.clientWidth-62}px`,l.innerHTML=t.replace(/\s/g,"&nbsp;"),document.body.appendChild(l),e.target.focus(),e.target.style.width=`${l.clientWidth+4}px`,l.remove()}else e.target.style.width="4px"}},U=e=>{switch(e.key){case"ArrowUp":case"ArrowLeft":{e.preventDefault();let t=void 0!=B&&-1!=B?G.getKeyAbove(B):G.getFirstKey();t&&F(t);break}case"ArrowDown":case"ArrowRight":{e.preventDefault();let l=void 0!=B&&-1!=B?G.getKeyBelow(B):G.getFirstKey();l&&F(l);break}case"Enter":e.preventDefault(),B&&(J(B),M(!1));break;case"Escape":e.preventDefault(),M(!1)}},q=()=>{j(!1),M(!1)},J=e=>{if(!m){let t=new Set(I);I.includes(e)?t.delete(e):t.add(e),R([...t]),F(e)}},Q=e=>{e&&F(e)};return n.default.createElement(f.StyledDropdownWrapper,{css:l,ref:P},e.label&&n.default.createElement("label",{onClick:()=>M(!0)},e.label,g&&n.default.createElement("span",null,"*")),n.default.createElement(f.StyledDropdown,{onClick:()=>M(!0),ref:W,isErrored:!!y,isDisabled:!!h},n.default.createElement(f.StyledSelectedItemWrapper,null,0===V.length&&!_&&n.default.createElement("p",null,e.placeholder),V.length>0&&V.map(e=>{let t=h||S.includes(e.key);return n.default.createElement(f.StyledSelectedItem,{key:e.key,style:{cursor:h?"not-allowed":"pointer"}},n.default.createElement("div",null,e.rendered),t?n.default.createElement(n.default.Fragment,null):n.default.createElement("div",{onClick(){h||[...S].includes(e.key)||X(e.key)}},n.default.createElement(c.XIcon,null)))}),!h&&n.default.createElement("input",{type:"text",ref:A,value:O,onChange:Z})),n.default.createElement("div",{className:"dropdown-icon"},C)),n.default.createElement(r.StyledListBoxWrapper,null,T&&T.length>0&&_&&n.default.createElement(u.default,{popoverRef:K,close:q,triggerRef:W,handleKeyDown:U},n.default.createElement(i.default,{focusKey:B,isLoading:k,collection:T,rootChildren:p,listBoxRef:H,currentKeys:I,disabledKeys:S,sectionCollection:N,onHover:Q,onSelect:J,onLoadMore:x}))),E&&n.default.createElement(r.StyledHelperText,{error:!!y},E),b&&n.default.createElement(r.StyledHelperText,null,b))}),y=p},50347:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{StyledDropdownWrapper:function(){return r},StyledDropdown:function(){return d},StyledSelectedItemWrapper:function(){return u},StyledSelectedItem:function(){return o}});let n=l(37250),r=(0,n.styled)("div",{width:"100%",label:{fontSize:"$label1",fontWeight:"$semibold",marginBottom:"$2",display:"inline-block",width:"100%",span:{marginLeft:"$1",color:"$danger"}}}),d=(0,n.styled)("div",{width:"100%",border:"1px solid #E6E6E6",borderRadius:"$md",cursor:"text",display:"flex",alignItems:"center",padding:"$3 $4",gap:"$1",backgroundColor:"#FFFFFF",".dropdown-icon":{cursor:"pointer",flexShrink:0,width:"$6",height:"$6",display:"flex",justifyContent:"center",alignItems:"center",padding:0,border:"none",background:"transparent",svg:{width:"$4",height:"$4"}},input:{height:"$6_5",width:4,padding:0,margin:0,border:"none","&:focus":{outline:"none"},"&:focus-visible":{outline:"none"}},variants:{isEmpty:{true:{button:{p:{color:"#B4B4B4"}}}},isDisabled:{true:{cursor:"not-allowed !important","& > *":{cursor:"not-allowed !important"}}},isErrored:{true:{borderWidth:1,borderColor:"$danger","&:focus":{borderColor:"$danger",outlineColor:"$danger"},"&:focus-within":{borderColor:"$danger",outlineColor:"$danger"}}}}}),u=(0,n.styled)("div",{flexGrow:1,alignItems:"center",minHeight:"$7",display:"flex",gap:"$2_5",flexWrap:"wrap",p:{color:"#B4B4B4",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:"$label1",fontWeight:"$semibold",height:"$6",display:"flex",alignItems:"center",flexGrow:1,border:"none",textAlign:"start",padding:0,margin:0}}),o=(0,n.styled)("div",{border:"1px solid #EDEBE9",borderRadius:"$full",padding:"$1 $3",fontSize:"$label1",cursor:"default",fontWeight:"$semibold",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2147483640,gap:"$2",div:{width:"fit-content",height:"fit-content"}})},14707:function(e,t,l){var n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=(n=l(52983),n&&n.__esModule?n:{default:n}),d=l(52779),u=l(23231),o=function({item:e,currentKeys:t,focusKey:l,disabledKeys:n,onHover:o,onSelect:i}){let f=r.default.useRef(null),c=r.default.useMemo(()=>!!e.key&&t.includes(e.key),[t]),s=r.default.useMemo(()=>l===e.key,[l]),p=r.default.useMemo(()=>!!e.key&&n.includes(e.key),[n]),y=()=>{e.key&&!p&&i(e.key)};return r.default.createElement(d.StyledOption,{ref:f,isFocused:s,isSelected:c,onClick:y,onMouseOver:()=>o(e.key),onMouseOut:()=>o(-1),isDisabled:p},r.default.createElement(d.StyledContent,null,e.props.children),r.default.createElement(u.StyledRightIcon,{isSelected:c},r.default.createElement("div",null,r.default.createElement(a,null))))},a=()=>r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"},r.default.createElement("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"white"}))},23231:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"StyledRightIcon",{enumerable:!0,get:function(){return r}});let n=l(37250),r=(0,n.styled)("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$6",height:"$6",div:{border:"1px solid #323130",borderRadius:"3px",width:"$4",height:"$4",display:"flex",alignItems:"center",justifyContent:"center",background:"#FFFFFF"},variants:{isSelected:{true:{div:{border:0,background:"$cdgBlue100",svg:{display:"block"}}},false:{div:{svg:{display:"none"}}}}}})},36048:function(e,t,l){var n;Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{XIcon:function(){return d},getDefaulValues:function(){return u}});let r=(n=l(52983),n&&n.__esModule?n:{default:n}),d=()=>r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none"},r.default.createElement("g",{clipPath:"url(#clip0_5299_13653)"},r.default.createElement("path",{d:"M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z",fill:"#3B3A39"})),r.default.createElement("defs",null,r.default.createElement("clipPath",{id:"clip0_5299_13653"},r.default.createElement("rect",{width:"10",height:"10",fill:"white"}))));function u(e,t){if(null!=t&&t.length>0){let l=[];for(let n of t)l.push(n);return l}if(null!=e&&e.length>0){let r=[];for(let d of e)r.push(d);return r}return[]}}}]);