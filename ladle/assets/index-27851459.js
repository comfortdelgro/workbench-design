import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as f}from"./index-6c164b11.js";import{B as D}from"./button-be34d763.js";import{u as ee}from"./useCurrentTheme-474309da.js";import{C as se}from"./objectToCSS-aff350d4.js";import{u as $}from"./use-dom-ref-7c72e1a5.js";const re="_searchFieldInput_1e4ve_4",ae="_searchFieldBox_1e4ve_29",te="_disabledTrue_1e4ve_66",le="_isErroredTrue_1e4ve_71",ie="_isDarkThemeTrue_1e4ve_80",oe="_isDarkThemeFalse_1e4ve_94",ce="_h5True_1e4ve_104",ne="_h5False_1e4ve_128",de="_textFieldHelperText_1e4ve_132",he="_errorTrue_1e4ve_140",ue="_searchFieldBoxWrapper_1e4ve_144",xe="_textFieldLabel_1e4ve_150",me="_asterisk_1e4ve_159",s={searchFieldInput:re,searchFieldBox:ae,disabledTrue:te,isErroredTrue:le,isDarkThemeTrue:ie,isDarkThemeFalse:oe,h5True:ce,h5False:ne,textFieldHelperText:de,errorTrue:he,searchFieldBoxWrapper:ue,textFieldLabel:xe,asterisk:me},L=f.forwardRef((a,N)=>{const{label:_,css:w={},id:T=`cdg-element-${Math.random().toString(36).substring(2)}`,value:c="",defaultValue:n="",isErrored:d=!1,isReadOnly:F=!1,isRequired:p=!1,isDisabled:i=!1,autoFocus:E=!1,placeholder:y="",errorMessage:v="",onSubmit:h,onChange:l,onChangeEvent:u,onCut:S,onCopy:I,onBlur:R,onPaste:M,onInput:z,onKeyUp:H,onSelect:O,onKeyDown:x,onBeforeInput:W,onCompositionEnd:P,onCompositionStart:V,onCompositionUpdate:Z,onFocus:q,maxLength:K,minLength:U,h5:m=!1,className:A="",...G}=a,C=ee(),[g,o]=f.useState(n||c),j=$(null),b=$(N);f.useEffect(()=>{o(n||c)},[n,c]);const J=r=>{const t=r.target.value;o(t),l==null||l(t),u==null||u(r)},Q=r=>{var B;const t=r.key,k=r.target;(t==="Enter"||t==="Escape")&&r.preventDefault(),!(i||F)&&(t==="Enter"&&k.value!=""&&(h==null||h(k.value)),t==="Escape"&&(o(""),(B=a.onClear)==null||B.call(a)),x==null||x(r))},X=()=>{var r;o(""),l==null||l(""),(r=a.onClear)==null||r.call(a)},Y=()=>{var r;(r=j.current)==null||r.focus()};return e.jsxs("div",{className:`cdg-search-field-box-wrapper ${s.searchFieldBoxWrapper} ${A}`,children:[_&&e.jsxs("label",{htmlFor:T,className:`cdg-text-field-label ${s.textFieldLabel}`,children:[_,p&&e.jsx("span",{className:"asterisk",children:"*"})]}),e.jsx(se,{css:w,childrenRef:b,children:e.jsxs("div",{className:`cdg-search-field-box ${s.searchFieldBox} ${i?s.disabledTrue:""} ${d?s.isErroredTrue:""} ${C?s.isDarkThemeTrue:s.isDarkThemeFalse}  ${m?s.h5True:s.h5False}`,ref:b,...G,children:[e.jsx("input",{className:`cdg-search-field-input ${s.searchFieldInput} ${i?s.disabledTrue:""} ${d?s.isErroredTrue:""} ${C?s.isDarkThemeTrue:""}  ${m?s.h5True:""}`,ref:j,id:T,autoFocus:E,readOnly:F,required:p,disabled:i,type:"text",placeholder:y,value:g,onCut:S,onCopy:I,onBlur:R,onFocus:q,onPaste:M,onInput:z,onKeyUp:H,onSelect:O,onChange:J,onKeyDown:Q,onBeforeInput:W,onCompositionEnd:P,onCompositionStart:V,onCompositionUpdate:Z,maxLength:K,minLength:U}),g!==""?e.jsx(D,{size:"sm",variant:"ghost",onPress:X,className:"cdg-searchfield-button",children:e.jsx("svg",{className:"icon",viewBox:"0 0 384 512",children:e.jsx("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})}):e.jsx(D,{isDisabled:!!i,onPress:Y,className:"cdg-searchfield-button",size:"sm",variant:"ghost",children:m?e.jsx(fe,{}):e.jsx("svg",{className:"icon",viewBox:"0 0 512 512",children:e.jsx("path",{fill:"currentColor",d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})})})]})}),d&&v&&e.jsx("div",{className:`cdg-text-field-helper-text ${s.textFieldHelperText} ${s.errorTrue}`,children:v})]})}),fe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:[e.jsx("path",{d:"M15 14.5971C15 14.8279 14.9093 15.0587 14.7324 15.2352C14.3787 15.5883 13.8027 15.5883 13.449 15.2352L10.9916 12.9019C10.6378 12.5489 10.6378 11.9741 10.9916 11.621C11.3453 11.268 11.9213 11.268 12.275 11.621L14.7324 13.9544C14.9093 14.1354 15 14.3663 15 14.5971Z",fill:"#757575"}),e.jsx("path",{d:"M2.87044 7.1C2.87044 5.042 4.54915 3.36667 6.61131 3.36667C8.67347 3.36667 10.3522 5.042 10.3522 7.1C10.3522 9.158 8.67347 10.8333 6.61131 10.8333C4.54915 10.8333 2.87044 9.158 2.87044 7.1ZM1 7.1C1 10.194 3.51106 12.7 6.61131 12.7C9.71156 12.7 12.2226 10.194 12.2226 7.1C12.2226 4.006 9.71156 1.5 6.61131 1.5C3.51106 1.5 0.999999 4.006 1 7.1Z",fill:"#757575"})]});L.__docgenInfo={description:"",methods:[],displayName:"SearchField"};L.displayName="SearchField";export{L as S};
