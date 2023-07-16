import{s as f,R as p,r as l,j as e,a as u}from"./index-f1a30790.js";import{u as R}from"./use-dom-ref-b16a0995.js";const w=f("div",{position:"relative",width:"100%",padding:"$2 $4",display:"flex",gap:"$4",variants:{orientation:{horizontal:{flexDirection:"row"},vertical:{flexDirection:"column"}}},"&:focus":{outline:"none"}}),C=p.createContext({value:"",handleOnClickRadionButton:()=>{}}),k=p.forwardRef((n,r)=>{const{children:g,orientation:d="vertical",value:i=null,onChange:s,onBlur:t,css:h={},...$}=n,v=R(r),[a,o]=l.useState(i),b=l.useCallback(()=>{t&&t()},[t]),m=c=>{c!==a&&o(c)},x=()=>i??a;return l.useEffect(()=>{a&&s&&s(a)},[a]),e(w,{ref:v,orientation:d,css:h,onBlur:b,...$,tabIndex:0,children:e(C.Provider,{value:{value:x(),handleOnClickRadionButton:m},children:g})})}),I=k,S=f("div",{position:"relative",display:"flex",alignItems:"center",cursor:"pointer",width:"fit-content",".radio-wrapper":{width:"16px !important",display:"flex !important",justifyContent:"center",alignItems:"center"},".radio-content-wrapper":{flexGrow:1,marginLeft:"$4",display:"grid",gap:"$2",".radio-label":{padding:0,margin:0,fontWeight:"$semibold",fontSize:"$header5",display:"flex",alignItems:"center",color:"$primaryText"},".radio-description":{padding:0,margin:0,fontWeight:"$normal",fontSize:"$header5",color:"$secondaryText"}},".radio-right-label":{padding:0,margin:0,marginLeft:"$4",fontWeight:"$normal",fontSize:"$label1",color:"$severeWarning"},variants:{disabled:{true:{borderColor:"$gray50",cursor:"not-allowed"}},variant:{simple:{},outlined:{padding:"$4",border:"1px solid $cdgBlue100",borderRadius:"$md","& input":{width:"$4",height:"$4"}}}},defaultVariants:{variant:"outlined"}}),B=f("div",{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",border:"1px solid $gray90",borderRadius:"$full",variants:{active:{true:{borderColor:"$cdgBlue100",background:"transparent","&:after":{content:"",borderRadius:"$full",position:"absolute",zIndex:"2",width:"8px",height:"8px",background:"$cdgBlue100"}}},disabled:{true:{borderColor:"$gray50",background:"transparent"}}},compoundVariants:[{active:!0,disabled:!0,css:{"&:after":{content:"",borderRadius:"$full",position:"absolute",zIndex:"2",width:"$2",height:"$2",background:"$gray50"}}}],defaultVariants:{active:!1}}),z=f("div",{position:"relative",marginLeft:"$2",display:"flex",alignItems:"center","& div":{position:"absolute",left:"$6",border:"$gray90 thin solid",borderRadius:"$md",display:"none",padding:"$1 $2",fontSize:"$label1",fontWeight:"$medium",color:"$gray90",background:"$background",width:"max-content"},"&:hover":{"& div":{display:"block"}}}),N=({text:n})=>u(z,{children:[e(T,{}),e("div",{children:n})]}),T=()=>e("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e("path",{d:"M7 14C10.8664 14 14 10.8664 14 7C14 3.13359 10.8664 0 7 0C3.13359 0 0 3.13359 0 7C0 10.8664 3.13359 14 7 14ZM7.65625 9.84375C7.65625 10.2047 7.36094 10.5 7 10.5C6.63906 10.5 6.34375 10.2061 6.34375 9.84375V6.34375C6.34375 5.98145 6.6377 5.6875 7 5.6875C7.3623 5.6875 7.65625 5.98008 7.65625 6.34375V9.84375ZM7 3.0625C7.47469 3.0625 7.85969 3.4475 7.85969 3.92219C7.85969 4.39688 7.47496 4.78188 7 4.78188C6.52504 4.78188 6.14031 4.39688 6.14031 3.92219C6.14141 3.44805 6.52422 3.0625 7 3.0625Z",fill:"#333333"})}),V=N,j=n=>{const{value:r,label:g,description:d,tooltip:i,rightLabel:s,isDisabled:t=!1,variant:h="simple",css:$={},...v}=n,o=p.useContext(C),[b,m]=l.useState(o.value===r),x=p.useRef(null),c=()=>{t||o.handleOnClickRadionButton(r)};return l.useEffect(()=>{m(o.value===r)},[o.value]),u(S,{disabled:t,variant:h,onClick:c,css:$,...v,children:[e("input",{style:{display:"none"},ref:x}),e("div",{className:"radio-wrapper",children:e(B,{active:b,disabled:t})}),u("div",{className:"radio-content-wrapper",children:[u("div",{className:"radio-label",children:[g," ",!!i&&e(V,{text:i})]}),d&&e("p",{className:"radio-description",children:d})]}),e("p",{className:"radio-right-label",children:s})]})},y=j;y.Group=I;y.displayName="Radio";export{y as R};