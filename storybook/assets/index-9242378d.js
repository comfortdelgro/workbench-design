import{j as s}from"./jsx-runtime-9ef10904.js";import{g as Y}from"./get-80d15efb.js";import{r as l}from"./index-6c164b11.js";import{c as r,C as Z}from"./objectToCSS-e90bd687.js";const $="_tagBoxV2_173q8_7",T="_container_173q8_15",A="_tagCloseIcon_173q8_35",R="_tagContent_173q8_48",ee="_tagInput_173q8_59",te="_tagContainer_173q8_72",se="_buttonContainer_173q8_88",ae="_newTagButton_173q8_101",ne="_newTagInput_173q8_126",re="_label_173q8_149",ce="_asterisk_173q8_164",le="_containerIsErrored_173q8_171",oe="_containerIsDisabled_173q8_174",ue="_containerFocused_173q8_179",ie="_tagContainerIsErrored_173q8_183",a={tagBoxV2:$,container:T,tagCloseIcon:A,tagContent:R,tagInput:ee,tagContainer:te,buttonContainer:se,newTagButton:ae,newTagInput:ne,label:re,asterisk:ce,containerIsErrored:le,containerIsDisabled:oe,containerFocused:ue,tagContainerIsErrored:ie},j=l.forwardRef(({isRequired:q,tagBoxLabel:b,tags:f=[],onAddTag:o,onEditTag:c,onRemoveTag:n,isDisabled:g=!1,isEditable:I,isErrored:_=!1,className:y,customValidationHandler:k,addTagPlaceholder:V,canRemoveOnDeleteAndBackspaceKey:D,css:F={},...H},K)=>{const[w,C]=l.useState(!1),[S,m]=l.useState(!1),[z,x]=l.useState(""),[u,i]=l.useState(null),d=l.useRef(null),h=l.useRef(null);l.useImperativeHandle(K,()=>({focus(){var e;(e=d.current)==null||e.focus()},blur(){var e;(e=d.current)==null||e.blur()}}));const L=e=>!!e&&e.trim()!=="",p=e=>{const t=L(e);return k?t&&k(e):t},N=()=>{var e;(e=d.current)==null||e.focus()},P=()=>{C(!0),setTimeout(()=>{var e;return(e=d.current)==null?void 0:e.focus()})},E=()=>{h.current&&!_&&m(!0)},M=e=>{x(e.target.value)},O=e=>{switch(e.key){case"Enter":case"Escape":{p(e.currentTarget.value)&&(o==null||o(e.currentTarget.value.trim())),x(""),C(!1);break}case"Backspace":case"Delete":{e.currentTarget.value===""&&D&&f&&f.length&&(n==null||n(f.at(-1)));break}}},v=e=>{h.current&&!_&&m(!1),p(e.currentTarget.value)&&(o==null||o(e.currentTarget.value.trim())),x(""),C(!1)},U=(e,t)=>{i({id:t.id,value:e.target.value})},W=(e,t)=>{e.preventDefault(),p(e.currentTarget.value)?(c==null||c({id:t.id,value:e.currentTarget.value.trim()}),i(null)):n==null||n(t)},G=(e,t)=>{switch(e.key){case"Enter":{e.preventDefault(),p(e.currentTarget.value)&&(c==null||c({id:t.id,value:e.currentTarget.value.trim()}),i(null));break}case"Escape":{e.preventDefault(),p(e.currentTarget.value)?(c==null||c({id:t.id,value:e.currentTarget.value.trim()}),i(null)):n==null||n(t);break}}},B=(e,t)=>{e.stopPropagation(),!g&&I&&i(t)},J=(e,t)=>{e.stopPropagation(),n==null||n(t)},Q=r(a.tagBoxV2,y,"cdg-tag-box-v2"),X=r(a.container,_&&a.containerIsErrored,g&&a.containerIsDisabled,S&&a.containerFocused,"cdg-tag-box-v2-container");return s.jsx(Z,{css:F,children:s.jsxs("div",{className:Q,...H,children:[s.jsxs("div",{"aria-label":b,onClick:N,className:r(a.label,"cdg-tag-box-v2-label"),children:[b,q&&s.jsx("span",{className:r(a.asterisk,"cdg-tag-box-v2-asterisk"),children:"*"})]}),s.jsxs("div",{ref:h,onClick:N,onFocus:E,onBlur:v,className:X,children:[f.map(e=>s.jsxs("div",{onClick:t=>B(t,e),onDoubleClick:t=>B(t,e),className:r(a.tagContainer,e.isErrored&&a.tagContainerIsErrored,"cdg-tag-box-v2-tag"),children:[s.jsx("div",{title:I?"Click to edit":void 0,className:r(a.tagContent,"cdg-tag-box-v2-tag-content"),children:u&&u.id===e.id?s.jsx("input",{type:"text",autoFocus:!0,size:Y(u,"value.length",0)+1,value:u.value,onChange:t=>U(t,e),onBlur:t=>W(t,e),onKeyDown:t=>G(t,e),className:r(a.tagInput,"cdg-tag-box-v2-tag-input")}):e.value}),!g&&s.jsx("svg",{width:9,viewBox:"0 0 384 512",onClick:t=>J(t,e),style:{display:u&&u.id===e.id?"none":"inline-block"},className:r(a.tagCloseIcon,"cdg-tag-box-v2-tag-icon"),children:s.jsx("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})]},e.id)),!g&&s.jsxs("div",{className:r(a.buttonContainer,"cdg-tag-box-v2-add"),children:[!w&&s.jsxs("div",{onClick:P,className:r(a.newTagButton,"cdg-tag-box-v2-add-button"),children:[s.jsx("svg",{width:11,viewBox:"0 0 448 512",children:s.jsx("path",{fill:"currentColor",d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"})}),s.jsx("p",{children:"New Tag"})]}),s.jsx("input",{type:"text",style:{display:w?"inline-block":"none"},placeholder:V,ref:d,value:z,onClick:e=>e.stopPropagation(),onChange:M,onKeyDown:O,onBlur:v,className:r(a.newTagInput,"cdg-tag-box-v2-add-input")})]})]})]})})});j.__docgenInfo={description:"",methods:[{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"TagBoxV2",props:{tags:{defaultValue:{value:"[]",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isErrored:{defaultValue:{value:"false",computed:!1},required:!1},css:{defaultValue:{value:"{}",computed:!1},required:!1}}};j.displayName="Tag-Box-V2";export{j as T};
