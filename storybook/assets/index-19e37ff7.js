import{j as e}from"./jsx-runtime-9ef10904.js";import{R as l,r as ne}from"./index-6c164b11.js";import{C as q,c as a}from"./objectToCSS-e90bd687.js";import{p as re}from"./pick-child-1fb557e7.js";import{u as N}from"./use-dom-ref-7c72e1a5.js";const le="_tagBox_hopvs_6",ie="_wrapper_hopvs_10",ae="_label_hopvs_15",ce="_asterix_hopvs_23",de="_bodyWrapper_hopvs_28",pe="_body_hopvs_28",ue="_bodyContent_hopvs_50",he="_bodyContentInput_hopvs_59",fe="_icon_hopvs_69",be="_iconCollapse_hopvs_86",me="_count_hopvs_90",xe="_helperText_hopvs_94",ge="_action_hopvs_102",ye="_wrapperLabelPositionLeft_hopvs_118",_e="_wrapperLabelPositionTop_hopvs_129",ve="_bodyCollaspableFalse_hopvs_134",Ce="_bodyIsErrored_hopvs_138",we="_helperTextIsErrored_hopvs_144",r={tagBox:le,wrapper:ie,label:ae,asterix:ce,bodyWrapper:de,body:pe,bodyContent:ue,bodyContentInput:he,icon:fe,iconCollapse:be,count:me,helperText:xe,action:ge,wrapperLabelPositionLeft:ye,wrapperLabelPositionTop:_e,bodyCollaspableFalse:ve,bodyIsErrored:Ce,helperTextIsErrored:we},O=l.forwardRef((d,_)=>{const{css:p={},children:g,...y}=d,i=N(_);return e.jsx(q,{css:p,children:e.jsx("div",{ref:i,...y,children:g})})});O.__docgenInfo={description:"",methods:[],displayName:"TagBoxAction"};const G=l.forwardRef((d,_)=>{const{wrapperRef:p,onEnter:g=()=>{},...y}=d,i=N(_),w=h=>{if(p.current){const f=h.target.value;if(f!==""){const s=document.createElement("div");s.style.position="absolute",s.style.top="0",s.style.left="-9999px",s.style.overflow="hidden",s.style.visibility="hidden",s.style.whiteSpace="nowrap",s.style.fontSize="0.875rem",s.style.fontWeight="400",s.style.lineHeight="1.15",s.style.height="0",s.style.width="fit-content",s.style.maxWidth=`${p.current.clientWidth-62}px`,s.innerHTML=f.replace(/\s/g,"&nbsp;"),document.body.appendChild(s),h.target.focus(),h.target.style.width=`${s.clientWidth+4}px`,s.remove()}else h.target.style.width="4px"}};return e.jsx("input",{...y,type:"text",ref:i,className:a(r.bodyContentInput,"cdg-tag-box-input"),onChange:w,onKeyDown:h=>{const f=h.target.value;f!==""&&h.key==="Enter"&&(g(f),i.current&&(i.current.value="",i.current.style.width="4px"))}})});G.__docgenInfo={description:"",methods:[],displayName:"TagBoxInput"};const Ie="_item_sklsl_6",je="_itemHover_sklsl_20",Ee="_itemButton_sklsl_25",Le="_itemSvg_sklsl_29",Re="_itemInput_sklsl_34",Te="_itemIsDisabled_sklsl_60",Ne="_itemIsErrored_sklsl_66",C={item:Ie,itemHover:je,itemButton:Ee,itemSvg:Le,itemInput:Re,itemIsDisabled:Te,itemIsErrored:Ne},J=l.forwardRef((d,_)=>{const{isDisabled:p=!1,isError:g,icon:y,value:i,id:w,wrapperRef:h,addInputRef:f,onRemove:s,onEdit:I,calculateRemainingItems:B,...k}=d,[E,m]=l.useState(!1),[W,L]=l.useState(i),u=l.useRef(null),H=N(_),P=()=>{p||(f.current&&(f.current.disabled=!0),m(!0),setTimeout(()=>{var n;(n=u==null?void 0:u.current)==null||n.focus()}))},x=l.useCallback((n,c)=>{const o=document.createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="-9999px",o.style.overflow="hidden",o.style.visibility="hidden",o.style.whiteSpace="nowrap",o.style.height="0",o.style.width="fit-content",o.style.fontSize="12px",o.style.fontWeight="600",o.style.maxWidth=`${h.current.clientWidth-62}px`,o.innerHTML=n.replace(/\s/g,"&nbsp;"),document.body.appendChild(o),c(o.clientWidth),o.remove()},[h]),F=n=>{const c=n.target.value;L(c),B(),c!==""?x(c,o=>{n.target.focus(),n.target.style.width=`${o+4}px`}):n.target.style.width="4px"},S=()=>{p||s==null||s(w)},D=n=>{var o;const c=n.target.value;c!==""&&n.key==="Enter"&&(I==null||I(w,c),f.current&&(f.current.disabled=!1),(o=u==null?void 0:u.current)==null||o.blur()),(n.key=="Escape"||n.keyCode==27)&&R()};l.useEffect(()=>{const n=i;n!==""&&x(n,c=>{u.current&&(u.current.focus(),u.current.style.width=`${c+4}px`,u.current.style.maxWidth=`${h.current.clientWidth-62}px`)}),L(i)},[x,i,h]);const R=()=>{L(i),m(!1),f.current&&(f.current.disabled=!1),x(i,n=>{u.current&&(u.current.style.width=`${n+4}px`)})},v=a(C.item,!p&&C.itemHover,p&&C.itemIsDisabled,g&&C.itemIsErrored,"cdg-tag-box-item");return e.jsxs("div",{...k,ref:H,className:v,children:[y,e.jsx("input",{ref:u,value:W,style:{display:E?"block":"none"},className:a(C.itemInput,"cdg-tag-box-item-input"),onBlur:R,onKeyDown:D,onClick:P,onChange:F}),e.jsx("span",{style:{display:E?"none":"block",cursor:p?"not-allowed":"text"},onClick:P,children:i}),e.jsx("button",{tabIndex:p?-1:0,style:{cursor:p?"not-allowed":"pointer"},className:a(C.itemButton,"cdg-tag-box-item-button"),onClick:S,children:e.jsx("svg",{width:"12",height:"12",fill:"none",viewBox:"0 0 12 12",className:a(C.itemSvg,"cdg-tag-box-item-icon"),children:e.jsx("path",{d:"M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z",fill:"currentColor"})})})]})});J.__docgenInfo={description:"",methods:[],displayName:"TagBoxItem"};const Q=({...d})=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...d,children:e.jsx("path",{d:"M11.9991 18C11.5301 18 11.0608 17.8186 10.7033 17.4559L1.53708 8.1702C0.820973 7.44475 0.820973 6.26953 1.53708 5.54408C2.25319 4.81864 3.41329 4.81864 4.12939 5.54408L11.9991 13.5196L19.8706 5.54554C20.5867 4.82009 21.7468 4.82009 22.4629 5.54554C23.179 6.27098 23.179 7.44621 22.4629 8.17165L13.2967 17.4574C12.9387 17.8201 12.4689 18 11.9991 18Z",fill:"currentColor"})}),X=({...d})=>e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...d,children:e.jsx("path",{d:"M12.0009 5C12.4699 5 12.9392 5.18136 13.2967 5.54409L22.4629 14.8298C23.179 15.5552 23.179 16.7305 22.4629 17.4559C21.7468 18.1814 20.5867 18.1814 19.8706 17.4559L12.0009 9.48036L4.12939 17.4545C3.41329 18.1799 2.25319 18.1799 1.53708 17.4545C0.820973 16.729 0.820973 15.5538 1.53708 14.8284L10.7033 5.54264C11.0613 5.17991 11.5311 5 12.0009 5Z",fill:"currentColor"})});Q.__docgenInfo={description:"",methods:[],displayName:"ChevronDown"};X.__docgenInfo={description:"",methods:[],displayName:"ChevronUp"};const $=l.forwardRef((d,_)=>{const{id:p,icon:g,label:y,items:i,css:w={},children:h,className:f,isRequired:s,helperText:I,errorMessage:B,typeable:k=!1,isErrored:E=!1,collaspable:m=!1,labelPosition:W="top",onRemove:L,onAdd:u,onEdit:H,...P}=d,x=N(null),F=N(_),{child:S}=re(h,O),[D,R]=l.useState(0),v=l.useRef(null),n=l.useRef(null),[c,o]=l.useState([]),[j,Y]=l.useState(!1);l.useEffect(()=>{o(t=>Array(i.length).fill(0).map((b,M)=>t[M]||ne.createRef()))},[i]);const z=l.useCallback(()=>{var t,b;if(!j){let M=((t=v.current)==null?void 0:t.clientWidth)??0,Z=0;for(const T of c)T.current&&T.current.removeAttribute("style");for(const T of c){const K=(b=T.current)==null?void 0:b.clientWidth;if(K){const U=M-K-16;U>37?M=U:(T.current.style.display="none",Z++)}}R(Math.min(Z,99))}},[c,j]),V=()=>{var t;(t=x.current)==null||t.focus()},ee=()=>{var t;Y(b=>!b),(t=x.current)==null||t.focus()},A=l.useCallback(()=>{if(m&&!j)z();else{for(const t of c)t.current&&t.current.removeAttribute("style");R(0)}},[c,j,m,z]);l.useEffect(()=>{A()},[A]),l.useEffect(()=>{const t=v.current;if(!t)return;const b=new ResizeObserver(()=>{A()});return b.observe(t),()=>{b.disconnect()}},[A]);const te=a(r.tabBox,f,"cdg-tag-box"),se=a(r.wrapper,W==="top"&&r.wrapperLabelPositionTop,W==="left"&&r.wrapperLabelPositionLeft,"cdg-tab-box-wrapper"),oe=a(r.body,m===!1&&r.bodyCollaspableFalse,E&&r.bodyIsErrored,"cdg-tag-box-body");return e.jsx(q,{css:w,children:e.jsxs("div",{...P,ref:F,className:te,children:[e.jsxs("div",{className:se,onClick:V,children:[y&&e.jsxs("label",{htmlFor:p,className:a(r.label,"cdg-tag-box-label"),children:[y,s&&e.jsx("span",{className:a(r.label,"cdg-tag-box-asterix"),children:"*"})]}),e.jsxs("div",{className:a(r.bodyWrapper,"cdg-tag-box-body-wrapper"),children:[e.jsxs("div",{id:p,tabIndex:0,ref:n,className:oe,"aria-label":d["aria-label"],"aria-details":d["aria-details"],"aria-labelledby":d["aria-labelledby"],"aria-describedby":d["aria-describedby"],onFocus:V,children:[g&&e.jsx("div",{className:a(r.icon,"cdg-tag-box-body-icon"),children:g}),e.jsxs("div",{className:a(r.bodyContent,"cdg-tag-box-body-content"),ref:v,children:[i.map((t,b)=>e.jsx(J,{id:t.id,icon:t.icon,value:t.value,ref:c[b],addInputRef:x,isError:!!t.isError,wrapperRef:v,isDisabled:!!t.isDisabled,onEdit:H,onRemove:L,calculateRemainingItems:z},t.id)),D>0&&e.jsx("div",{className:a(r.item,r.count,"cdg-tag-box-count"),children:e.jsxs("span",{children:["+",D]})},"remainingCount"),(!m&&k||m&&k&&j)&&e.jsx(G,{ref:x,wrapperRef:v,onEnter:u})]}),m&&e.jsx("div",{className:a(r.icon,r.iconCollapse,"cdg-tag-box-collapse-icon"),onClick:ee,children:j?e.jsx(X,{}):e.jsx(Q,{})})]}),E&&B&&e.jsx("div",{className:a(r.helperText,r.helperTextIsErrored,"cdg-tag-box-error-message"),children:B})]})]}),(I||S)&&e.jsxs("div",{className:a(r.action,"cdg-tag-box-action"),children:[e.jsx("span",{className:a(r.helperText,"cdg-tag-box-helper-text"),children:I}),S]})]})})});$.__docgenInfo={description:"",methods:[],displayName:"TagBox"};$.Action=O;$.displayName="TagBox";$.Action.displayName="TagBox.Action";export{$ as T};
