import{j as e,F as B,R as c,s as K,a as l}from"./index-b2761b56.js";import{C as k,R as u}from"./components-37256a88.js";import{k as L,i as N}from"./floating-ui.react.esm-5da1cc0e.js";import{u as j}from"./use-dom-ref-b82bff2a.js";import{u as z,a as H,K as W}from"./useKeyboardNavigation-8e0a93b9.js";const O=n=>e(B,{children:n.children}),F=O,Z=(n,i)=>{const o=[];return c.Children.forEach(n,a=>(c.isValidElement(a)&&a.type===i&&o.push(a),a)),o.length>=0?o:[]};function _(n,i,o,r){let a;if(i!==void 0&&(r.includes(i)||(a=i)),o!==void 0&&!r.includes(o))return o;for(const s of n)if(s.key&&!r.includes(s.key))return s.key;return a}function U(n,i,o,r){const a=c.useMemo(()=>Z(n,F),[n]),[s,x]=c.useState(_(a,i,o,r));return{collection:a,currentKey:s,setCurrentKey:x}}const G=K("div",{position:"relative",flexShrink:0,fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",fontSize:"$label1",cursor:"pointer",userSelect:"none",display:"flex",alignItems:"center",width:"max-content",transition:"$button","& .icon":{width:"$4",height:"$4",display:"flex",justifyContent:"center",alignItems:"center",border:"$gray110 thin solid",borderRadius:"$full","& svg":{display:"none"}},"&:hover, &:focus-visible":{outline:"none","& .icon":{backgroundColor:"$background","& path":{fill:"$cdgBlue140"}}},variants:{variant:{rounded:{display:"flex",justifyContent:"center",padding:"$2 $4",background:"transparent",borderRadius:"$full",color:"$$textColor","&:hover, &:focus-visible":{background:"$cdgBlue140",color:"$whiteText"}},simple:{background:"transparent",padding:"$2 0","&:focus-visible":{boxShadow:"0px -2px $$indicatorColor"},"&:hover, &:focus-visible":{color:"$$textColor","& .icon":{backgroundColor:"$$textColor",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}},h5:{background:"transparent",padding:"0",color:"$grayShades60",fontSize:"$label1",lineHeight:"20px","&:focus-visible":{boxShadow:"0px -2px $$indicatorColor"},"&:hover, &:focus-visible":{color:"$blueShades100","& .icon":{backgroundColor:"$blueShades100",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},disabled:{true:{background:"transparent",color:"$gray50",cursor:"not-allowed"}},active:{true:{color:"$whiteText",background:"$$textColor"}},icon:{none:{"& .icon":{display:"none"}},left:{display:"flex",flexDirection:"row","& .icon":{width:"$4",marginLeft:"$2"}},right:{display:"flex",flexDirection:"row-reverse","& .icon":{width:"$4",marginRight:"$2"}},top:{display:"flex",flexDirection:"column-reverse","& .icon":{width:"$4",marginBottom:"$2"}}}},compoundVariants:[{variant:"simple",disabled:!0,css:{background:"transparent","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover, &:focus-visible":{background:"transparent",color:"$gray50","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},{variant:"h5",disabled:!0,css:{background:"transparent","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover, &:focus-visible":{background:"transparent",color:"$gray50","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},{variant:"simple",active:!0,css:{color:"$$textColor",marginBottom:"-2px",borderBottom:"$$indicatorColor 2px solid"}},{variant:"rounded",disabled:!0,css:{color:"$gray50",backgroundColor:"transparent","&:hover, &:focus-visible":{color:"$gray50",backgroundColor:"transparent"}}},{variant:"rounded",active:!0,css:{color:"$whiteText",backgroundColor:"$$textColor","& .icon":{backgroundColor:"$background",border:"none","& svg":{display:"block","& path":{fill:"$$textColor"}}}}},{variant:"simple",active:!0,css:{backgroundColor:"transparent","& .icon":{backgroundColor:"$$textColor",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}},{variant:"h5",active:!0,css:{backgroundColor:"transparent",color:"$blueShades100","&:after":{position:"absolute",borderRadius:1,bottom:-4,left:-1,content:"",width:"calc(100% + 2px)",height:2,background:"$blueShades100"},"& .icon":{backgroundColor:"$$textColor",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}},{variant:"rounded",disabled:!0,css:{"& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover, &:focus-visible":{"& .icon":{backgroundColor:"$gray50","& path":{fill:"$whiteText"}}}}}],defaultVariants:{variant:"rounded",disabled:!1,icon:"none"}}),J=c.forwardRef(({item:n,isDisabled:i,textColor:o,currentKey:r,indicatorColor:a,disabledKeys:s,variant:x="rounded",icon:R="none",id:I,onSelect:S},D)=>{const{title:q}=n.props,A=j(D),m=c.useMemo(()=>r===n.key,[r]),P=c.useMemo(()=>n.key?[...s].includes(n.key):!1,[s]),g=i||P,w=()=>{n.key&&!g&&S(n.key)},y=T=>{const C=T.key;(C==="Enter"||C===" ")&&(T.preventDefault(),w())},{useDescendant:E}=z(),{index:h,register:M}=E({disabled:g}),{onFocus:$}=H(),p=()=>{$==null||$(h)()},f=L([A,M]);return l(G,{id:I,icon:R,ref:f,tabIndex:m&&!g?0:-1,variant:x,active:m,disabled:!!g,className:"tab-item-wrapper",css:{$$textColor:o,$$indicatorColor:a},onClick:w,onKeyDown:y,onFocus:p,role:"tab","aria-selected":m,children:[q,R!=="none"&&e("div",{className:"icon",children:g?e(Q,{}):e(X,{})})]})}),Q=()=>e("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:e("path",{d:"M8.87822 1.83335H1.12182C0.732011 1.83335 0.416687 1.46044 0.416687 0.99976C0.416687 0.539083 0.732011 0.166687 1.12182 0.166687H8.87822C9.26803 0.166687 9.58335 0.539083 9.58335 0.99976C9.58335 1.46044 9.26825 1.83335 8.87822 1.83335Z",fill:"white"})}),X=()=>e("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:e("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}),Y=J,ee=c.forwardRef(({selectedItem:n,"aria-labelledby":i},o)=>{const r=j(o);return e("div",{ref:r,"aria-labelledby":i,className:"tab-panel-wrapper",role:"tabpanel",children:n==null?void 0:n.props.children})}),ne=ee,te=c.forwardRef((n,i)=>e(t,{ref:i,...n,hidePanel:!0,children:[...n.items].map(o=>e(F,{title:o.title,children:o.key},o.key))})),oe=te,ie=K("div",{width:"100%",display:"flex",flexDirection:"column"}),re=K("div",{fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",display:"flex",width:"fit-content",margin:"0",gap:"$4",variants:{variant:{rounded:{background:"$background",borderRadius:"$full"},simple:{background:"transparent",borderRadius:"none"},h5:{background:"transparent",borderRadius:"none",padding:"0 0 4px 0!important",gap:"$5"}},orientation:{horizontal:{padding:"$2",flexDirection:"row"},vertical:{padding:"$4 $2",flexDirection:"column"}}},compoundVariants:[{variant:"rounded",orientation:"vertical",css:{borderRadius:"$xl"}}],defaultVariants:{orientation:"horizontal",variant:"rounded"}}),ae=c.forwardRef((n,i)=>{const{textColor:o="#0142AF",indicatorColor:r="#0142AF",orientation:a="horizontal",variant:s="rounded",children:x,isDisabled:R=!1,hidePanel:I=!1,disabledKeys:S=[],selectedKey:D,defaultSelectedKey:q,css:A={},onKeyDown:m,...P}=n,g=j(i),{collection:w,currentKey:y,setCurrentKey:E}=U(x,q,D,S),h=w.find(d=>d.key===y),M=d=>{E(d)};c.useEffect(()=>{var d;y&&((d=n.onSelectionChange)==null||d.call(n,y))},[y]);const{onKeyDown:$,nextFocus:p,prevFocus:f}=H(),T=d=>{$==null||$({ArrowLeft:v=>{v.preventDefault(),a==="horizontal"&&(f==null||f())},ArrowRight:v=>{v.preventDefault(),console.log("go right"),a==="horizontal"&&(p==null||p())},ArrowUp:v=>{v.preventDefault(),a==="vertical"&&(f==null||f())},ArrowDown:v=>{v.preventDefault(),a==="vertical"&&(p==null||p())}})(d),m==null||m(d)},C=N(),V=`${C}_${h==null?void 0:h.key}`;return l(ie,{children:[e(re,{ref:g,css:A,orientation:a,variant:s,onKeyDown:T,role:"tablist","aria-orientation":a,...P,children:[...w].map(d=>e(Y,{icon:n.icon,variant:n.variant,disabledKeys:S,currentKey:y,textColor:o,indicatorColor:r,item:d,isDisabled:R,onSelect:M,id:`${C}_${d.key}`},d.key))}),!I&&e(ne,{"aria-labelledby":V,selectedItem:h},h==null?void 0:h.key)]})}),le=c.forwardRef((n,i)=>{const{provider:o}=z();return e(W,{...o,children:e(ae,{...n,ref:i})})}),t=le;t.Item=F;t.Paneless=oe;t.displayName="Tabs";const b=({id:n})=>{const[i,o]=c.useState();return c.useEffect(()=>{fetch(`https://jsonplaceholder.typicode.com/todos/${n}`).then(r=>r.json()).then(r=>o(r)).catch(r=>console.log(r))},[n]),l("h1",{children:["data: ",(i==null?void 0:i.title)??""]})},be=()=>l(k,{children:[e("h3",{children:"Server Interaction"}),e(u,{children:l(t,{icon:"left",children:[e(t.Item,{title:"Founding of Rome",children:e(b,{id:"1"})},"1"),e(t.Item,{title:"Monarchy and Republic",children:e(b,{id:"2"})},"2"),e(t.Item,{title:"Empire",children:e(b,{id:"3"})},"3")]})})]}),pe=()=>{const[n,i]=c.useState("1"),o=[{key:"1",title:"Founding of Rome"},{key:"2",title:"Monarchy and Republic"},{key:"3",title:"Empire"}];return l(k,{children:[e("h3",{children:"Paneless"}),e(u,{children:l("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[e(t.Paneless,{variant:"simple",items:o,selectedKey:n,onSelectionChange:r=>i(r)}),n==="1"&&e(b,{id:"1"}),n==="2"&&e(b,{id:"2"}),n==="3"&&e(b,{id:"3"})]})})]})},fe=()=>{const[n,i]=c.useState("1"),o=[{key:"1",title:"Founding of Rome"},{key:"2",title:"Monarchy and Republic"},{key:"3",title:"Empire"}];return l(k,{children:[e("h3",{children:"H5"}),e(u,{children:l("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[e(t.Paneless,{variant:"h5",items:o,selectedKey:n,onSelectionChange:r=>i(r)}),n==="1"&&e(b,{id:"1"}),n==="2"&&e(b,{id:"2"}),n==="3"&&e(b,{id:"3"})]})})]})},me=()=>l(k,{children:[e("h3",{children:"With left icon"}),e(u,{children:l(t,{icon:"left",children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e("h3",{children:"With right icon"}),e(u,{children:l(t,{icon:"right",disabledKeys:["1"],children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e("h3",{children:"With top icon"}),e(u,{children:l(t,{variant:"simple",icon:"top",disabledKeys:["1"],children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),ge=()=>l(k,{children:[e("h3",{children:"Horizontal Rounded"}),e(u,{children:l(t,{orientation:"horizontal",children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e("h3",{children:"Vertical Rounded"}),e(u,{children:l(t,{orientation:"vertical",children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),ye=()=>l(k,{children:[e("h3",{children:"Simple Style"}),e(u,{children:l(t,{variant:"simple",disabledKeys:["1"],children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e("h3",{children:"Rounded Style"}),e(u,{children:l(t,{variant:"rounded",disabledKeys:["1"],children:[e(t.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e(t.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e(t.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{fe as H5,me as Icon,ge as Orientation,pe as Paneless,be as ServerInteraction,ye as Variants};
