import{r as x,R as D,j as f,s as b,a as P}from"./index-f1a30790.js";import{f as $}from"./faPlus-8ccf1391.js";import{F as z}from"./index.es-fda4b43b.js";import{u as O}from"./use-dom-ref-b16a0995.js";import{i as k}from"./floating-ui.react.esm-d0a599d7.js";(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",n="plus",s=448,r=512,o=[10133,61543,"add"],d="2b",c="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z";e.definition={prefix:t,iconName:n,icon:[s,r,o,d,c]},e.faPlus=e.definition,e.prefix=t,e.iconName=n,e.width=s,e.height=r,e.ligatures=o,e.unicode=d,e.svgPathData=c,e.aliases=o})($);var H=Object.defineProperty,G=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(G(e,typeof t!="symbol"?t+"":t,n),n);function M(e){return e.sort((t,n)=>{const s=t.compareDocumentPosition(n);if(s&Node.DOCUMENT_POSITION_FOLLOWING||s&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(s&Node.DOCUMENT_POSITION_PRECEDING||s&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(s&Node.DOCUMENT_POSITION_DISCONNECTED||s&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var W=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function R(e,t,n){let s=e+1;return n&&s>=t&&(s=0),s}function A(e,t,n){let s=e-1;return n&&s<0&&(s=t),s}var S=typeof window<"u"?x.useLayoutEffect:x.useEffect,N=e=>e,Y=class{constructor(){i(this,"descendants",new Map),i(this,"register",e=>{if(e!=null)return W(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),i(this,"unregister",e=>{this.descendants.delete(e);const t=M(Array.from(this.descendants.keys()));this.assignIndex(t)}),i(this,"destroy",()=>{this.descendants.clear()}),i(this,"assignIndex",e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),i(this,"count",()=>this.descendants.size),i(this,"enabledCount",()=>this.enabledValues().length),i(this,"values",()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index)),i(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),i(this,"item",e=>{if(this.count()!==0)return this.values()[e]}),i(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]}),i(this,"first",()=>this.item(0)),i(this,"firstEnabled",()=>this.enabledItem(0)),i(this,"last",()=>this.item(this.descendants.size-1)),i(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)}),i(this,"indexOf",e=>{var t,n;return e&&(n=(t=this.descendants.get(e))==null?void 0:t.index)!=null?n:-1}),i(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),i(this,"next",(e,t=!0)=>{const n=R(e,this.count(),t);return this.item(n)}),i(this,"nextEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const s=this.enabledIndexOf(n.node),r=R(s,this.enabledCount(),t);return this.enabledItem(r)}),i(this,"prev",(e,t=!0)=>{const n=A(e,this.count()-1,t);return this.item(n)}),i(this,"prevEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const s=this.enabledIndexOf(n.node),r=A(s,this.enabledCount()-1,t);return this.enabledItem(r)}),i(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),s=M(n);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(s)})}};function q(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function J(e={}){const{name:t,strict:n=!0,hookName:s="useContext",providerName:r="Provider",errorMessage:o,defaultValue:d}=e,c=x.createContext(d);c.displayName=t;function l(){var u;const g=x.useContext(c);if(!g&&n){const h=new Error(o??q(s,r));throw h.name="ContextError",(u=Error.captureStackTrace)==null||u.call(Error,h,l),h}return g}return[c.Provider,l,c]}function Q(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function X(...e){return t=>{e.forEach(n=>{Q(n,t)})}}function Z(){const e=x.useRef(new Y);return S(()=>()=>e.current.destroy()),e.current}var[ee,V]=J({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function te(e){const t=V(),[n,s]=x.useState(-1),r=x.useRef(null);S(()=>()=>{r.current&&t.unregister(r.current)},[]),S(()=>{if(!r.current)return;const d=Number(r.current.dataset.index);n!=d&&!Number.isNaN(d)&&s(d)});const o=N(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(r.current),register:X(o,r)}}function ne(){return[N(ee),()=>N(V()),()=>Z(),r=>te(r)]}const C=()=>{const[e,t]=D.useState(0),[n,s,r,o]=x.useMemo(()=>ne(),[]);return{provider:{descendants:r(),selected:e,setSelected:t},selected:e,setSelected:t,DescendantsProvider:n,useDescendantsContext:s,useDescendants:r,useDescendant:o}},L=D.createContext({}),se=e=>{const{children:t,descendants:n,selected:s,setSelected:r}=e,{DescendantsProvider:o}=C(),d=()=>{const a=n.nextEnabled(s);a&&(a.node.focus(),r(a.index))},c=()=>{const a=n.prevEnabled(s);a&&(a.node.focus(),r(a.index))},l=a=>{var p;return(p=n.item(a))==null?void 0:p.node},u=()=>{r(0)},g=a=>p=>{const v=p.key;if(a){const _=a[v];_==null||_(p)}},h=a=>()=>{var p;r==null||r(a),(p=l(a))==null||p.focus()};return f(o,{value:n,children:f(L.Provider,{value:{selected:s,descendants:n,setSelected:r,nextFocus:d,prevFocus:c,getNode:l,resetFocus:u,onKeyDown:g,onMouseMove:h},children:t})})},T=()=>x.useContext(L),re=b("div",{width:"fit-content",display:"flex","&.speed-dial--up":{flexDirection:"column-reverse"},"&.speed-dial--down":{flexDirection:"column"},"&.speed-dial--left ":{flexDirection:"row-reverse"},"&.speed-dial--right":{flexDirection:"row"}}),oe=b("button",{display:"flex",alignItems:"center",justifyContent:"center",width:"60px",height:"60px",backgroundColor:"$cdgBlue100",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",color:"$background",border:"none",borderRadius:"50%",fontSize:"$header3",cursor:"pointer",transition:"all 0.3s ease","& > span":{transform:"rotate(0deg)",transition:"all 0.3s ease"},"&.open":{backgroundColor:"$cdgBlue120","& > span":{transform:"rotate(45deg)"}}}),ie=b("span",{display:"inline-block",width:"24px",height:"27px"}),ae=b("ul",{alignItems:"center",justifyContent:"center",padding:"0",margin:"0",listStyle:"none",opacity:"0",transition:"opacity 0.3s ease, transform 0.3s ease","&.open":{opacity:"1",transform:"translateY(0)"},"&.speed-dial__actions--up":{flexDirection:"column-reverse"},"&.speed-dial__actions--down":{flexDirection:"column"},"&.speed-dial__actions--left":{flexDirection:"row-reverse"},"&.speed-dial__actions--right":{flexDirection:"row"},variants:{isOpenAction:{true:{display:"flex"},false:{display:"none"}}}}),de=b("button",{display:"flex",alignItems:"center",justifyContent:"center",width:"50px",height:"50px",backgroundColor:"$cdgBlue100",color:"$background",border:"none",borderRadius:"50%",fontSize:"24px",cursor:"pointer",transition:"background-color 0.3s ease",boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)","&:hover":{backgroundColor:"$cdgBlue120"},"&.speed-dial__action--up":{marginBottom:"10px"},"&.speed-dial__action--down":{marginTop:"10px"},"&.speed-dial__action--right":{marginLeft:"10px"},"&.speed-dial__action--left":{marginRight:"10px"}}),ce=b("span",{marginRight:"0px"}),le=b("span",{display:"none"}),ue=D.forwardRef((e,t)=>{const{...n}=e,{useDescendant:s}=C(),{selected:r,onMouseMove:o}=T(),{icon:d,name:c,position:l}=e,{index:u,register:g}=s(),h=O(),a=u===r,p=k([t,h,g]);return P(de,{className:`speed-dial__action speed-dial__action--${l}`,ref:p,"aria-selected":a,onMouseMove:o==null?void 0:o(u),tabIndex:-1,type:"button",role:"menuitem",...n,children:[f(ce,{className:"speed-dial__action-icon",children:d}),f(le,{className:"speed-dial__action-name",children:c})]})}),fe=D.forwardRef((e,t)=>{const{children:n,...s}=e,{useDescendant:r}=C(),{onMouseMove:o}=T(),{register:d,index:c}=r(),l=O(),u=k([t,d,l]);return f(oe,{ref:u,type:"button",onMouseMove:o==null?void 0:o(c),...s,children:n})}),pe=D.forwardRef((e,t)=>{const{css:n={},className:s,actions:r,position:o,...d}=e,c=O(t),[l,u]=x.useState(!1),g=()=>{u(m=>!m)},h=()=>{u(!0)},a=()=>{u(!1),v()},p=m=>{m(),v()},v=()=>{u(!1),w==null||w()},_=()=>({className:s,css:n,...d}),{onKeyDown:I,nextFocus:y,prevFocus:E,resetFocus:w}=T(),j=I==null?void 0:I({ArrowUp:m=>{m.preventDefault(),y==null||y()},ArrowDown:m=>{m.preventDefault(),E==null||E()},Tab:()=>{v()},Escape:()=>{v()}}),U=_();return P(re,{...U,ref:c,className:`speed-dial speed-dial--${o||"up"} ${o}`,role:"presentation",onMouseLeave:a,onKeyDown:j,children:[f(fe,{className:`speed-dial__trigger ${l?"open":""}`,onMouseEnter:h,onFocus:h,onClick:g,"aria-expanded":l,"aria-haspopup":!0,children:f(ie,{children:f(z,{icon:$.faPlus})})}),f(ae,{className:`speed-dial__actions speed-dial__actions--${o||"up"} ${l?"open":""}`,isOpenAction:l,role:"menu",children:r.map(({name:m,icon:B,onClick:F},K)=>f(ue,{onClick:()=>p(F),icon:B,name:m,position:o},K))})]})}),he=D.forwardRef((e,t)=>{const{provider:n}=C();return f(se,{...n,children:f(pe,{...e,ref:t})})}),xe=he,_e=()=>P("div",{children:[f("h1",{children:"Default:"}),f(xe,{actions:[{name:"Action 1",icon:"+",onClick:()=>console.log("Action 1 clicked")},{name:"Action 2",icon:"-",onClick:()=>console.log("Action 2 clicked")}],position:"up"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_e as Default};