import{j as e}from"./jsx-runtime-9ef10904.js";import{R as M,r as f}from"./index-6c164b11.js";import{u as O}from"./useCurrentTheme-3076cf6b.js";import{c as s,C as u}from"./objectToCSS-e90bd687.js";import{u as z}from"./use-dom-ref-7c72e1a5.js";const K="_checkbox_jyo8i_6",L="_label_jyo8i_17",P="_input_jyo8i_37",q="_box_jyo8i_45",A="_checkmark_jyo8i_71",F="_checkmarkIcon_jyo8i_79",G="_rounded_jyo8i_87",c={checkbox:K,label:L,input:P,box:q,checkmark:A,checkmarkIcon:F,rounded:G},p=M.forwardRef((j,_)=>{const{css:y={},children:d,className:C,isSelected:a,validationState:I,isDisabled:h=!1,isReadOnly:r=!1,variant:g="default",isIndeterminate:v=!1,defaultSelected:t=!1,cssCheckBoxInput:N={},onChange:k,onChangeEvent:i,...R}=j,D=O(),[o,x]=f.useState(a||t),l=z(_),w={...R},m=n=>{i==null||i(n),!(h||r)&&(k&&k(!o),a===void 0&&x(!o))},S=n=>{const b=n.key;(b==="Enter"||b===" ")&&(n.preventDefault(),m())};f.useEffect(()=>{x((a||t)??!1)},[t,a]);const T=s(c.checkbox,"cdg-checkbox",C),B=s(c.label,"cdg-checkbox-label"),E=s(c.box,D&&c.boxDarkTheme,g==="rounded"&&c.rounded,"cdg-checkbox-box");return e.jsx(u,{css:y,childrenRef:l,children:e.jsx("div",{...w,className:T,children:e.jsxs("label",{className:B,children:[e.jsx(u,{css:N,childrenRef:l,children:e.jsx("input",{tabIndex:-1,type:"checkbox",ref:l,checked:o,disabled:h,readOnly:r,className:s(c.input,"cdg-checkbox-input"),"aria-readonly":r===!0?"true":void 0,"aria-invalid":I==="invalid"?"true":void 0,onChange:m})}),e.jsx("div",{tabIndex:0,role:"checkbox",className:E,"aria-checked":o,onKeyDown:S,children:o&&e.jsx("span",{className:s(c.checkmark,"cdg-checkbox-checkmark"),children:v?e.jsx(H,{}):e.jsx(J,{})})}),d&&e.jsx("span",{children:d})]})})})}),H=()=>e.jsx("svg",{className:s(c.checkmarkIcon,"cdg-checkbox-icon"),viewBox:"0 0 448 512",children:e.jsx("path",{fill:"currentColor",d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"})}),J=()=>e.jsx("svg",{className:s(c.checkmarkIcon,"cdg-checkbox-icon"),viewBox:"0 0 448 512",children:e.jsx("path",{fill:"currentColor",d:"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"})});p.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};p.displayName="Checkbox";export{p as C};
