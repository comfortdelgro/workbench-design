import{j as s}from"./jsx-runtime-9ef10904.js";import{R as T,r as H}from"./index-6c164b11.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import{a as S,b as j,K as P}from"./useKeyboardNavigation-7c849a98.js";import{c as r,a as u,C as O}from"./objectToCSS-e90bd687.js";import{u as C}from"./use-dom-ref-7c72e1a5.js";import{i as V}from"./floating-ui.react.esm-06842318.js";const $="_speedDial_7xce7_6",k="_speedDialTrigger_7xce7_11",z="_speedDialTriggerContent_7xce7_29",W="_speedDialActions_7xce7_36",B="_speedDialAction_7xce7_36",q="_speedDialIcon_7xce7_66",G="_speedDialName_7xce7_70",J="_speedDialUp_7xce7_76",Q="_speedDialDown_7xce7_80",X="_speedDialLeft_7xce7_84",Y="_speedDialRight_7xce7_88",Z="_speedDialTriggerOpen_7xce7_92",ee="_speedDialTriggerSpan_7xce7_96",se="_speedDialTriggerOpenSpan_7xce7_101",ie="_speedDialActionsOpen_7xce7_105",ne="_speedDialActionsUp_7xce7_109",ae="_speedDialActionsDown_7xce7_113",te="_speedDialActionsLeft_7xce7_117",oe="_speedDialActionsRight_7xce7_121",ce="_speedDialActionUp_7xce7_129",le="_speedDialActionDown_7xce7_133",pe="_speedDialActionRight_7xce7_137",de="_speedDialActionLeft_7xce7_141",re="_isVisibleTrue_7xce7_145",De="_isVisibleFalse_7xce7_149",e={speedDial:$,speedDialTrigger:k,speedDialTriggerContent:z,speedDialActions:W,speedDialAction:B,speedDialIcon:q,speedDialName:G,speedDialUp:J,speedDialDown:Q,speedDialLeft:X,speedDialRight:Y,speedDialTriggerOpen:Z,speedDialTriggerSpan:ee,speedDialTriggerOpenSpan:se,speedDialActionsOpen:ie,speedDialActionsUp:ne,speedDialActionsDown:ae,speedDialActionsLeft:te,speedDialActionsRight:oe,speedDialActionUp:ce,speedDialActionDown:le,speedDialActionRight:pe,speedDialActionLeft:de,isVisibleTrue:re,isVisibleFalse:De},L=T.forwardRef((o,l)=>{const{isVisible:p=!1,css:x={},className:m="",...n}=o,{useDescendant:d}=S(),{selected:D,onMouseMove:i}=j(),{icon:a,name:f,position:c}=o,{index:h,register:R}=d(),b=C(),_=h===D,g=V([l,b,R]),A=r(e.speedDialAction,c&&e[`speedDialAction${u(c)}`],p?e.isVisibleTrue:e.isVisibleFalse,c&&e[`speedDialAction${u(c)}`],m,"cdg-speed-dial-action");return s.jsx(O,{css:x,childrenRef:g,children:s.jsxs("button",{...n,className:A,ref:g,"aria-selected":_,onMouseMove:i==null?void 0:i(h),tabIndex:-1,type:"button",role:"menuitem",children:[s.jsx("span",{className:r(e.speedDialIcon,"cdg-speed-dial-action-icon"),children:a}),s.jsx("span",{className:r(e.speedDialName,"cdg-speed-dial-action-name"),children:f})]})})});L.__docgenInfo={description:"",methods:[],displayName:"SpeedDialAction"};const v=T.forwardRef((o,l)=>{const{children:p,isOpen:x,...m}=o,{useDescendant:n}=S(),{onMouseMove:d}=j(),{register:D,index:i}=n(),a=C(),f=V([l,D,a]),c=r(e.speedDialTrigger,x&&e.speedDialTriggerOpen,"cdg-speed-dial-trigger");return s.jsx("button",{...m,className:c,ref:f,type:"button",onMouseMove:d==null?void 0:d(i),children:p})});v.__docgenInfo={description:"",methods:[],displayName:"SpeedDialTrigger"};const _e=T.forwardRef((o,l)=>{const{css:p={},className:x,actions:m,position:n="up",...d}=o,D=C(l),[i,a]=H.useState(!1),f=()=>{a(t=>!t)},c=()=>{a(!0)},h=()=>{i===!1&&a(!0)},R=()=>{a(!1),_()},b=t=>{t(),_()},_=()=>{a(!1),w==null||w()},{onKeyDown:g,nextFocus:A,prevFocus:N,resetFocus:w}=j(),y=g==null?void 0:g({ArrowUp:t=>{t.preventDefault(),A==null||A()},ArrowDown:t=>{t.preventDefault(),N==null||N()},Tab:()=>{_()},Escape:()=>{_()}}),I=r(e.speedDial,n&&e[`speedDial${u(n)}`],x,"cdg-speed-dial"),U=r(e.speedDialTriggerContent,i?e.speedDialTriggerOpenSpan:e.speedDialTriggerSpan,"cdg-speed-dial-trigger-content"),M=r(e.speedDialActions,n&&e[`speedDialActions${u(n)}`],i&&e.speedDialActionsOpen,"cdg-speed-dial-actions");return s.jsx(O,{css:p,childrenRef:D,children:s.jsxs("div",{...d,className:I,ref:D,role:"presentation",onMouseLeave:R,onKeyDown:y,children:[s.jsx(v,{isOpen:i,onMouseEnter:c,onFocus:h,onClick:f,"aria-expanded":i,"aria-haspopup":!0,children:s.jsx("span",{className:U,children:s.jsx("svg",{width:21,viewBox:"0 0 448 512",children:s.jsx("path",{fill:"currentColor",d:"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"})})})}),s.jsx("ul",{className:M,role:"menu",children:m.map(({name:t,icon:E,onClick:K},F)=>s.jsx(L,{onClick:()=>b(K),icon:E,name:t,position:n,isVisible:i,disabled:!i},F))})]})})}),ge=T.forwardRef((o,l)=>{const{provider:p}=S();return s.jsx(P,{...p,children:s.jsx(_e,{...o,ref:l})})});ge.__docgenInfo={description:"",methods:[],displayName:"SpeedDialContextWrapper"};export{ge as S};