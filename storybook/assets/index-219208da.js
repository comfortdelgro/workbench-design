import{j as e}from"./jsx-runtime-9ef10904.js";import{R as x}from"./index-6c164b11.js";import{B as v}from"./button-a57955c5.js";import{u as se}from"./useCurrentTheme-3076cf6b.js";import{c as o,C as re}from"./objectToCSS-e90bd687.js";import{u as N}from"./use-dom-ref-7c72e1a5.js";import{u as ae}from"./useId-133e3351.js";const te="_searchFieldInput_15h12_4",ie="_searchFieldBox_15h12_29",le="_disabledTrue_15h12_66",oe="_isErroredTrue_15h12_71",ce="_isDarkThemeTrue_15h12_80",de="_isDarkThemeFalse_15h12_94",ne="_textFieldHelperText_15h12_104",he="_errorTrue_15h12_112",ue="_searchFieldBoxWrapper_15h12_116",pe="_textFieldLabel_15h12_122",me="_asterisk_15h12_131",s={searchFieldInput:te,searchFieldBox:ie,disabledTrue:le,isErroredTrue:oe,isDarkThemeTrue:ce,isDarkThemeFalse:de,textFieldHelperText:ne,errorTrue:he,searchFieldBoxWrapper:ue,textFieldLabel:pe,asterisk:me},E=x.forwardRef((L,y)=>{const{label:f,css:I={},id:R,value:d="",defaultValue:n="",isErrored:h=!1,isReadOnly:T=!1,isRequired:_=!1,isDisabled:l=!1,autoFocus:S=!1,placeholder:C="",errorMessage:F="",onClear:t,onSubmit:u,onChange:i,onChangeEvent:p,onCut:w,onCopy:z,onBlur:M,onPaste:O,onInput:H,onKeyUp:W,onSelect:P,onKeyDown:m,onBeforeInput:V,onCompositionEnd:q,onCompositionStart:K,onCompositionUpdate:U,onFocus:A,maxLength:G,minLength:J,className:Q="",...X}=L,k=ae(R),b=se(),[g,c]=x.useState(n||d),j=N(null),B=N(y);x.useEffect(()=>{c(n||d)},[n,d]);const Y=r=>{const a=r.target.value;c(a),i==null||i(a),p==null||p(r)},Z=r=>{const a=r.key,D=r.target;(a==="Enter"||a==="Escape")&&r.preventDefault(),!(l||T)&&(a==="Enter"&&D.value!=""&&(u==null||u(D.value)),a==="Escape"&&(c(""),t==null||t()),m==null||m(r))},$=()=>{c(""),i==null||i(""),t==null||t()},ee=()=>{var r;(r=j.current)==null||r.focus()};return e.jsxs("div",{className:o(s.searchFieldBoxWrapper,Q,"cdg-search-field-box-wrapper"),children:[f&&e.jsxs("label",{htmlFor:k,className:o(s.textFieldLabel,"cdg-text-field-label"),children:[f,_&&e.jsx("span",{className:"cdg-text-field-asterisk",children:"*"})]}),e.jsx(re,{css:I,childrenRef:B,children:e.jsxs("div",{...X,className:o(s.searchFieldBox,l&&s.disabledTrue,h&&s.isErroredTrue,b?s.isDarkThemeTrue:s.isDarkThemeFalse,"cdg-search-field-box"),ref:B,children:[e.jsx("input",{className:o(s.searchFieldInput,l&&s.disabledTrue,h&&s.isErroredTrue,b&&s.isDarkThemeTrue,"cdg-search-field-input"),ref:j,id:k,autoFocus:S,readOnly:T,required:_,disabled:l,type:"text",placeholder:C,value:g,onCut:w,onCopy:z,onBlur:M,onFocus:A,onPaste:O,onInput:H,onKeyUp:W,onSelect:P,onChange:Y,onKeyDown:Z,onBeforeInput:V,onCompositionEnd:q,onCompositionStart:K,onCompositionUpdate:U,maxLength:G,minLength:J}),g!==""?e.jsx(v,{size:"sm",variant:"ghost",onPress:$,className:"cdg-searchfield-button",children:e.jsx("svg",{className:"icon",viewBox:"0 0 384 512",children:e.jsx("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})}):e.jsx(v,{isDisabled:!!l,onPress:ee,className:"cdg-searchfield-button",size:"sm",variant:"ghost",children:e.jsx("svg",{className:"icon",viewBox:"0 0 512 512",children:e.jsx("path",{fill:"currentColor",d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})})})]})}),h&&F&&e.jsx("div",{className:o(s.textFieldHelperText,s.errorTrue,"cdg-text-field-helper-text"),children:F})]})});E.__docgenInfo={description:"",methods:[],displayName:"SearchField"};E.displayName="SearchField";export{E as S};
