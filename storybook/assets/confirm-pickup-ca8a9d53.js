import{j as i}from"./jsx-runtime-9ef10904.js";import{r as o}from"./index-6c164b11.js";import"./index-f0ea8199.js";import{D as j}from"./index-a28a8ffa.js";import{T as S}from"./index-d7c7ead6.js";import{c as s,C as v}from"./objectToCSS-e90bd687.js";import{u as A}from"./use-dom-ref-7c72e1a5.js";import{B as r}from"./button-a57955c5.js";const N="_confirmPickup_1l2s3_4",w="_puPointAddress_1l2s3_12",T="_puPointAddressTitle_1l2s3_23",k="_puPointAddressDescription_1l2s3_24",B="_puPointAddressIcon_1l2s3_44",D="_puPointLabel_1l2s3_52",b="_puSpecificLocation_1l2s3_64",V="_puSpecificLocationSVG_1l2s3_73",F="_puSpecificLocationName_1l2s3_77",I="_puTextField_1l2s3_86",M="_puConfirmButton_1l2s3_100",c={confirmPickup:N,puPointAddress:w,puPointAddressTitle:T,puPointAddressDescription:k,puPointAddressIcon:B,puPointLabel:D,puSpecificLocation:b,puSpecificLocationSVG:V,puSpecificLocationName:F,puTextField:I,puConfirmButton:M},H=o.memo(o.forwardRef((l,a)=>{const{css:u={},className:m,puPointTitle:f,placeholder:_="",puPointDescription:C,specificPUPoint:t,onConfirmPickup:n,onChangePUPoint:e,...P}=l,p=A(a),[d,x]=o.useState(t),h=o.useCallback(()=>n(d),[n,d]),g=s(c.confirmPickup,m,"cdg-cp-container");return i.jsx(v,{css:u,childrenRef:p,children:i.jsxs("div",{...P,ref:p,className:g,children:[i.jsxs("div",{className:s(c.puPointAddress,"cdg-cp-point-address"),children:[i.jsxs("div",{children:[i.jsx("div",{className:s(c.puPointAddressTitle,"cdg-cp-point-address__title"),children:f}),i.jsx("div",{className:s(c.puPointAddressDescription,"cdg-cp-point-address__description"),children:C})]}),i.jsx(r,{className:s(c.puPointAddressIcon,"cdg-cp-point-address__icon"),variant:"ghost",onPress:()=>e==null?void 0:e(),children:i.jsx("svg",{width:"18",height:"21",viewBox:"0 0 18 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M3.414 14.5L13.556 4.35799L12.142 2.94399L2 13.086V14.5H3.414ZM4.243 16.5H0V12.257L11.435 0.821992C11.6225 0.634521 11.8768 0.529205 12.142 0.529205C12.4072 0.529205 12.6615 0.634521 12.849 0.821992L15.678 3.65099C15.8655 3.83852 15.9708 4.09283 15.9708 4.35799C15.9708 4.62316 15.8655 4.87746 15.678 5.06499L4.243 16.5ZM0 18.5H18V20.5H0V18.5Z",fill:"#008BF8"})})})]}),i.jsxs("div",{className:s(c.puPointLabel,"cdg-cp-point-label"),children:[i.jsx("div",{children:"Set a specific pickup point"}),i.jsx(j,{})]}),t?i.jsxs("div",{className:s(c.puSpecificLocation,"cdg-cp-specific-location"),children:[i.jsx("svg",{width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:s(c.puSpecificLocationSVG,"cdg-cp-specific-location__svg"),children:i.jsx("path",{d:"M6.07416 14.3588C6.04885 14.3635 6.02299 14.365 5.99735 14.3625C5.8928 14.3524 5.79176 14.3199 5.7017 14.2672C4.09509 13.2699 2.69008 12.0009 1.55487 10.5217C0.595114 9.27986 0.0526721 7.78613 2.58066e-05 6.24014C-0.0030831 5.20954 0.274756 4.19614 0.805894 3.30076C1.33703 2.40538 2.10295 1.65926 3.02743 1.13663C3.94415 0.623425 4.98786 0.357022 6.0488 0.365427C7.10975 0.373833 8.14874 0.656736 9.05653 1.18439C9.96286 1.72763 10.7082 2.48606 11.2208 3.38655C11.7367 4.29343 12.0048 5.31122 11.9999 6.34473C11.8316 8.46416 10.8578 10.4501 9.26396 11.9242C8.4021 12.8039 7.43579 13.5834 6.38483 14.2466C6.28838 14.3003 6.18338 14.3382 6.07416 14.3588ZM5.99398 4.35751C5.72584 4.35717 5.46035 4.40844 5.21318 4.5083C4.966 4.60816 4.74216 4.75459 4.55485 4.93894C4.26736 5.21989 4.07197 5.57572 3.9929 5.96232C3.91383 6.34893 3.95454 6.74933 4.10999 7.11392C4.25928 7.47767 4.51887 7.78994 4.85512 8.01021C5.19136 8.23048 5.58873 8.3486 5.99569 8.34924H6.01027C6.27642 8.3496 6.53995 8.29879 6.78534 8.19978C7.03074 8.10077 7.25303 7.95558 7.43911 7.77275C7.67553 7.53895 7.8496 7.25369 7.94649 6.94129C8.04338 6.62888 8.06021 6.2986 7.99555 5.9786C7.93089 5.65859 7.78666 5.35836 7.57515 5.10348C7.36364 4.8486 7.09112 4.64664 6.78083 4.51481C6.53237 4.41164 6.26465 4.35813 5.99398 4.35751Z",fill:"#0142AF"})}),i.jsx("div",{className:s(c.puSpecificLocationName,"cdg-cp-specific-location__name"),children:t})]}):i.jsx(S,{className:s(c.puTextField,"cdg-cp-textfield"),placeholder:_,onChange:L=>x(L.toString())}),i.jsx(r,{className:s(c.puConfirmButton,"cdg-cp-button"),onPress:h,fullWidth:!0,children:"Confirm pick up"})]})})}));H.__docgenInfo={description:"",methods:[],displayName:"ConfirmPUPoint"};export{H as C};
