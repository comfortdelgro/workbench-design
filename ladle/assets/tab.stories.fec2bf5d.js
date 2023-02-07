import{C as v,R as f}from"./components.e334c151.js";import{a as k,h as P,c as T,f as C}from"./module.8e091e30.js";import{c as S}from"./module.d783d9d6.js";import{u as A,o as K,$ as w,d as q}from"./module.a5783b99.js";import{r as y,s as I,R as g,a as u,j as t}from"./index.1e35a2af.js";import{e as F}from"./real-module.422747d9.js";import{u as x}from"./use-dom-ref.2525156b.js";import"./module.cb04759a.js";import"./module.188dab80.js";import"./module.3a6a986a.js";const R=new WeakMap;function $(n,e,a){return typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${R.get(n)}-${a}-${e}`}function M(n,e,a){let{key:i,isDisabled:l}=n,{selectionManager:s,selectedKey:o}=e,c=i===o,d=l||e.isDisabled||e.disabledKeys.has(i),{itemProps:b}=P({selectionManager:s,key:i,ref:a,isDisabled:d}),m=$(e,i,"tab"),h=$(e,i,"tabpanel"),{tabIndex:p}=b;return{tabProps:{...b,id:m,"aria-selected":c,"aria-disabled":d||void 0,"aria-controls":c?h:void 0,tabIndex:d?void 0:p,role:"tab"},isSelected:c,isDisabled:d}}function B(n,e,a){let[i,l]=y.exports.useState(0);q(()=>{if(a!=null&&a.current){let c=()=>{let b=S(a.current,{tabbable:!0});l(b.nextNode()?void 0:0)};c();let d=new MutationObserver(c);return d.observe(a.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{d.disconnect()}}},[a]);const s=$(e,e==null?void 0:e.selectedKey,"tabpanel"),o=K({...n,id:s,"aria-labelledby":$(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:w(o,{tabIndex:i,role:"tabpanel","aria-describedby":n["aria-describedby"],"aria-details":n["aria-details"]})}}class D{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.orientation==="horizontal"?this.getPreviousKey(e):null}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.orientation==="horizontal"?this.getNextKey(e):null}getKeyAbove(e){return this.orientation==="vertical"?this.getPreviousKey(e):null}getKeyBelow(e){return this.orientation==="vertical"?this.getNextKey(e):null}getFirstKey(){let e=this.collection.getFirstKey();return this.disabledKeys.has(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return this.disabledKeys.has(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.disabledKeys.has(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.disabledKeys.has(e));return e}constructor(e,a,i,l=new Set){this.collection=e,this.flipDirection=a==="rtl"&&i==="horizontal",this.orientation=i,this.disabledKeys=l}}function L(n,e,a){let{orientation:i="horizontal",keyboardActivation:l="automatic"}=n,{collection:s,selectionManager:o,disabledKeys:c}=e,{direction:d}=F(),b=y.exports.useMemo(()=>new D(s,d,i,c),[s,c,i,d]),{collectionProps:m}=k({ref:a,selectionManager:o,keyboardDelegate:b,selectOnFocus:l==="automatic",disallowEmptySelection:!0,scrollRef:a}),h=A();R.set(e,h);let p=K({...n,id:h});return{tabListProps:{...w(m,p),role:"tablist","aria-orientation":i,tabIndex:void 0}}}function j(n){let e=T({...n,suppressTextValueWarning:!0}),{selectionManager:a,collection:i,selectedKey:l}=e,s=y.exports.useRef(l),o=l;if(a.isEmpty||!i.getItem(o)){for(o=i.getFirstKey();e.disabledKeys.has(o)&&o!==i.getLastKey();)o=i.getKeyAfter(o);e.disabledKeys.has(o)&&o===i.getLastKey()&&(o=i.getFirstKey()),a.setSelectedKeys([o])}return(a.focusedKey==null||!a.isFocused&&o!==s.current)&&a.setFocusedKey(o),s.current=o,{...e,isDisabled:n.isDisabled||!1}}const E=I("div",{position:"relative",flexShrink:0,fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",fontSize:"$label1",cursor:"pointer",userSelect:"none",transition:"$Tabs",display:"flex",alignItems:"center",width:"max-content","& .icon":{width:"$4",height:"$4",display:"flex",justifyContent:"center",alignItems:"center",border:"black thin solid",borderRadius:"$full",backgroundColor:"$background","& svg":{display:"none"}},"&:hover":{"& .icon":{backgroundColor:"$background","& path":{fill:"$cdgBlue140"}}},variants:{variant:{rounded:{display:"flex",justifyContent:"center",padding:"$2 $4",background:"transparent",borderRadius:"$full",color:"$cdgBlue120","&:hover":{background:"$cdgBlue140",color:"$whiteText"}},simple:{background:"transparent",padding:"$2 0","&:hover":{color:"$cdgBlue100","& .icon":{backgroundColor:"$cdgBlue100",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},disabled:{true:{background:"transparent",color:"$gray50",cursor:"not-allowed"}},active:{true:{color:"$whiteText",background:"$cdgBlue"}},icon:{none:{"& .icon":{display:"none"}},left:{display:"flex",flexDirection:"row","& .icon":{width:"$4",marginLeft:"$2"}},right:{display:"flex",flexDirection:"row-reverse","& .icon":{width:"$4",marginRight:"$2"}},top:{display:"flex",flexDirection:"column-reverse","& .icon":{width:"$4",marginBottom:"$2"}}}},compoundVariants:[{variant:"simple",disabled:!0,css:{background:"transparent","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover":{background:"transparent",color:"$gray50","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},{variant:"simple",active:!0,css:{color:"$cdgBlue100",marginBottom:"-2px",borderBottom:"$cdgBlue 2px solid"}},{variant:"rounded",disabled:!0,css:{color:"$gray50",backgroundColor:"transparent","&:hover":{color:"$gray50",backgroundColor:"transparent"}}},{variant:"rounded",active:!0,css:{color:"$whiteText",backgroundColor:"$cdgBlue100","& .icon":{backgroundColor:"$background",border:"none","& svg":{display:"block","& path":{fill:"$cdgBlue100"}}}}},{variant:"simple",active:!0,css:{backgroundColor:"transparent","& .icon":{backgroundColor:"$cdgBlue100",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}},{variant:"rounded",disabled:!0,css:{"& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover":{"& .icon":{backgroundColor:"$gray50","& path":{fill:"$whiteText"}}}}}],defaultVariants:{variant:"rounded",disabled:!1,icon:"none"}}),z=g.forwardRef(({item:n,state:e,isDisabled:a,variant:i="rounded",icon:l="none"},s)=>{var h,p;const{key:o,rendered:c}=n,d=x(s),{tabProps:b}=M({key:o},e,d),m=a||((h=e==null?void 0:e.disabledKeys)==null?void 0:h.has(o));return u(E,{...b,ref:d,icon:l,disabled:!!m,active:((p=e.selectedItem)==null?void 0:p.key)===o,variant:i,className:"tab-item-wrapper",children:[c,l!=="none"&&t("div",{className:"icon",children:m?t(N,{}):t(V,{})})]})}),N=()=>t("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:t("path",{d:"M8.87822 1.83335H1.12182C0.732011 1.83335 0.416687 1.46044 0.416687 0.99976C0.416687 0.539083 0.732011 0.166687 1.12182 0.166687H8.87822C9.26803 0.166687 9.58335 0.539083 9.58335 0.99976C9.58335 1.46044 9.26825 1.83335 8.87822 1.83335Z",fill:"white"})}),V=()=>t("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:t("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}),W=z,O=g.forwardRef(({state:n,...e},a)=>{const i=x(a),{tabPanelProps:l}=B(e,n,i),s=y.exports.useMemo(()=>g.cloneElement(n.selectedItem,{}),[]);return t("div",{...l,ref:i,className:"tab-panel-wrapper",children:s.props.children})}),H=O,Z=I("div",{fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",display:"grid",gridTemplateColumns:"min-content",width:"fit-content",margin:"0",gap:"$4",variants:{variant:{rounded:{background:"$background",borderRadius:"$full"},simple:{background:"transparent",borderRadius:"none"}},orientation:{horizontal:{padding:"$2",gridAutoFlow:"column"},vertical:{padding:"$4 $2",gridAutoFlow:"row"}}},compoundVariants:[{variant:"rounded",orientation:"vertical",css:{borderRadius:"$xl"}}],defaultVariants:{orientation:"horizontal",variant:"rounded"}}),G=g.forwardRef((n,e)=>{var o,c,d;const{css:a={}}=n,i=x(e),l=j(n),{tabListProps:s}=L(n,l,i);return u("div",{children:[t(Z,{ref:i,...s,css:a,orientation:(o=n.orientation)!=null?o:"horizontal",variant:(c=n.variant)!=null?c:"rounded",children:[...l.collection].map(b=>t(W,{item:b,state:l,icon:n.icon,variant:n.variant},b.key))}),t(H,{state:l},(d=l.selectedItem)==null?void 0:d.key)]})}),r=G;r.Item=C;r.displayName="Tabs";const ne=()=>u(v,{children:[t("h3",{children:"With left icon"}),t(f,{children:u(r,{icon:"left",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),t("h3",{children:"With right icon"}),t(f,{children:u(r,{icon:"right",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),t("h3",{children:"With top icon"}),t(f,{children:u(r,{variant:"simple",icon:"top",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),ae=()=>u(v,{children:[t("h3",{children:"Horizontal Rounded"}),t(f,{children:u(r,{orientation:"horizontal",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),t("h3",{children:"Vertical Rounded"}),t(f,{children:u(r,{orientation:"vertical",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),oe=()=>u(v,{children:[t("h3",{children:"Simple Style"}),t(f,{children:u(r,{variant:"simple",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),t("h3",{children:"Rounded Style"}),t(f,{children:u(r,{variant:"rounded",disabledKeys:["1"],children:[t(r.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),t(r.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),t(r.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ne as Icon,ae as Orientation,oe as Variants};
