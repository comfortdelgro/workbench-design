import{R as p,r as g}from"./index-6c164b11.js";import{j as n}from"./jsx-runtime-ea7736fc.js";import{P as B}from"./index-8ce02b55.js";import{C as b}from"./objectToCSS-aff350d4.js";import{$ as E}from"./index-4593f2b5.js";import{p as T}from"./pick-child-c116e6b4.js";import{u as C}from"./use-dom-ref-7c72e1a5.js";const $="_snackbarIcon_18azs_7",O="_snackbarSuffixIcon_18azs_26",z="_snackbarText_18azs_50",D="_snackbarRightSection_18azs_69",M="_snackbar_18azs_7",L="_defaultType_18azs_109",F="_errorType_18azs_115",H="_successType_18azs_121",X="_warningType_18azs_127",G="_reminderType_18azs_133",J="_ongoingType_18azs_144",f={snackbarIcon:$,snackbarSuffixIcon:O,snackbarText:z,snackbarRightSection:D,snackbar:M,defaultType:L,errorType:F,successType:H,warningType:X,reminderType:G,ongoingType:J},h=p.forwardRef((e,s)=>{const{children:a,css:r={},className:i="",...t}=e,c=C(s);return n.jsx(b,{css:r,childrenRef:c,children:n.jsx("div",{className:`cdg-snackbar-prefix-icon ${i} ${f.snackbarIcon}`,ref:c,...t,children:a})})});h.__docgenInfo={description:"",methods:[],displayName:"SnackbarPrefixIcon"};const N=p.forwardRef((e,s)=>{const{children:a,css:r={},className:i="",onClose:t,...c}=e,l=C(s);return n.jsx(b,{css:r,childrenRef:l,children:n.jsx("div",{className:`cdg-snackbar-suffix-icon ${i} ${f.snackbarSuffixIcon}`,ref:l,...c,onClick:d=>{d.stopPropagation(),t==null||t()},children:a})})});N.__docgenInfo={description:"",methods:[],displayName:"SnackbarSuffixIcon"};const w=p.forwardRef((e,s)=>{const{children:a,css:r={},className:i="",...t}=e,c=C(s);return n.jsx(b,{css:r,childrenRef:c,children:n.jsx("div",{className:`cdg-snackbar-text ${i} ${f.snackbarText}`,ref:c,...t,children:a})})});w.__docgenInfo={description:"",methods:[],displayName:"SnackbarText"};const u=p.forwardRef((e,s)=>{const{children:a,id:r,css:i={},type:t="default",className:c,portalTo:l,isOpen:d=!1,handleClose:o,autoClose:m=!1,onClick:y,...I}=e,S=C(s),{child:_}=T(a,N),{child:P}=T(a,h),{child:V}=T(a,w),K=p.useCallback(x=>l?E.createPortal(x,l):x,[l]);p.useEffect(()=>{m&&typeof m=="number"&&d==!0&&setTimeout(()=>o==null?void 0:o(),m)},[d]);const A=x=>{y&&y(x,r)},q=["cdg-snackbar",f.snackbar,t&&f[`${t}Type`],c].filter(Boolean).join(" ");return n.jsx(n.Fragment,{children:d&&K(n.jsx(b,{css:i,childrenRef:S,children:n.jsxs("div",{className:q,ref:S,onClick:A,...I,children:[P,V,n.jsx("div",{className:`cdg-snackbar-right-section ${f.snackbarRightSection}`,children:_&&p.cloneElement(_,{onClose:()=>o==null?void 0:o()})})]})}))})});u.__docgenInfo={description:"",methods:[],displayName:"Snackbar"};u.PrefixIcon=h;u.SuffixIcon=N;u.Text=w;u.PrefixIcon.displayName="Snackbar.PrefixIcon";u.SuffixIcon.displayName="Snackbar.SuffixIcon";u.Text.displayName="Snackbar.Text";const Q="_snackbarContainer_xruj2_27",U="_snackbarContainerHidden_xruj2_44",W="_snackbarItem_xruj2_56",Y="_fadeInTop_xruj2_1",Z="_snackbarItemFadeOut_xruj2_61",ee="_fadeOutBottom_xruj2_1",ne="_cdgSnackbarItem_xruj2_65",k={snackbarContainer:Q,snackbarContainerHidden:U,snackbarItem:W,fadeInTop:Y,snackbarItemFadeOut:Z,fadeOutBottom:ee,cdgSnackbarItem:ne},ae=300,se=1e3,j=({id:e,snackbarItemClassName:s,autoClose:a=se,prefixIcon:r,suffixIcon:i,text:t,type:c="default",onClick:l,css:d={}})=>{const o=oe(),m=g.useRef(null),y=()=>{m.current&&e&&(m.current.classList.add(`${k.snackbarItemFadeOut}`),setTimeout(()=>{o.remove(e)},ae))},I=_=>{l&&l(_,e)},S=["cdg-snackbar-item",k.snackbarItem].filter(Boolean).join(" ");return n.jsx(b,{children:n.jsx("div",{className:S,ref:m,children:n.jsxs(u,{isOpen:!0,handleClose:y,className:s,autoClose:a,type:c,css:d,onClick:I,children:[r&&n.jsx(u.PrefixIcon,{children:r}),i&&n.jsx(u.SuffixIcon,{children:i}),t&&n.jsx(u.Text,{children:t})]})})})};j.__docgenInfo={description:"",methods:[],displayName:"SnackbarItem",props:{id:{required:!1,tsType:{name:"number"},description:""},text:{required:!1,tsType:{name:"ReactNode"},description:""},prefixIcon:{required:!1,tsType:{name:"ReactNode"},description:""},suffixIcon:{required:!1,tsType:{name:"ReactNode"},description:""},autoClose:{required:!1,tsType:{name:"union",raw:"false | number",elements:[{name:"literal",value:"false"},{name:"number"}]},description:"",defaultValue:{value:"1000",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'reminder'"},{name:"literal",value:"'ongoing'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, id: number | undefined) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},name:"id"}],return:{name:"void"}}},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}},snackbarItemClassName:{required:!1,tsType:{name:"string"},description:""}}};const R=e=>{const{css:s={},snackbars:a,snackbarItemClassName:r,className:i="",...t}=e,c=["cdg-snackbar-container",k.snackbarContainer,a.length>0?"":k.snackbarContainerHidden].filter(Boolean).join(" ");return n.jsx(B,{open:a.length>0,children:n.jsx("div",{...t,className:c,children:a.map(l=>n.jsx(j,{...l,snackbarItemClassName:`${k.cdgSnackbarItem} ${r||""}`},l.id))})})};R.__docgenInfo={description:"",methods:[],displayName:"SnackbarsContainer",props:{snackbars:{required:!0,tsType:{name:"Array",elements:[{name:"SnackbarItemType"}],raw:"SnackbarItemType[]"},description:""},snackbarItemClassName:{required:!1,tsType:{name:"string"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const re=(e,s)=>{switch(s.type){case"ADD_SNACKBAR":return{...e,snackbars:[s.payload,...e.snackbars]};case"DELETE_SNACKBAR":return{...e,snackbars:e.snackbars.filter(a=>a.id!==s.payload)};case"CLEAR_SNACKBAR":return{...e,snackbars:[]};default:return e}},v=g.createContext({show:()=>{},remove:()=>{},clearAll:()=>{}}),te={snackbars:[]},ce=({children:e,containerCSS:s={}})=>{const[a,r]=g.useReducer(re,te),i=o=>{const m=Date.now();r({type:"ADD_SNACKBAR",payload:{...o,id:m}})},d={show:o=>{i(o)},remove:o=>{r({type:"DELETE_SNACKBAR",payload:o})},clearAll:()=>{r({type:"CLEAR_SNACKBAR"})}};return n.jsxs(v.Provider,{value:d,children:[n.jsx(R,{snackbars:a.snackbars,css:s,className:"cdg-snackbar-container"}),e]})};ce.__docgenInfo={description:"",methods:[],displayName:"SnackbarContextProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},containerCSS:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:"",defaultValue:{value:"{}",computed:!1}}}};const oe=()=>g.useContext(v);export{u as S,ce as a,oe as u};
