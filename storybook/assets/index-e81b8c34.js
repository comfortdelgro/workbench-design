import{j as s}from"./jsx-runtime-9ef10904.js";import{R as j}from"./index-6c164b11.js";import{B as C}from"./button-a57955c5.js";import{g as N}from"./get-icon-from-color-db7992f5.js";import{c,C as w}from"./objectToCSS-e90bd687.js";import{u as B}from"./use-dom-ref-7c72e1a5.js";const v="_alert_674xy_7",R="_icon_674xy_25",A="_dismissButton_674xy_33",L="_content_674xy_37",b="_closeIcon_674xy_41",z="_info_674xy_51",F="_infoIcon_674xy_56",M="_success_674xy_64",P="_successIcon_674xy_69",E="_warning_674xy_73",O="_warningIcon_674xy_78",k="_danger_674xy_82",q="_dangerIcon_674xy_87",n={alert:v,icon:R,dismissButton:A,content:L,closeIcon:b,info:z,infoIcon:F,success:M,successIcon:P,warning:E,warningIcon:O,danger:k,dangerIcon:q},r=j.forwardRef((a,i)=>{const{css:l={},icon:e,dismissible:_,onDismiss:t,children:d,color:o="info",className:m,...x}=a,f=B(i),g=typeof e>"u"?N(o):e===!1?null:e,I=c(n.alert,o&&n[o],m,"cdg-alert"),u=c(n.content,"cdg-alert-content"),y=c(n.closeIcon,"cdg-alert-close-icon"),p=c(n.icon,o&&n[o+"Icon"],"cdg-alert-icon"),h=c(n.dismissButton,"custom","cdg-alert-dismiss-button");return s.jsx(s.Fragment,{children:s.jsx(w,{css:l,children:s.jsxs("div",{ref:f,...x,className:I,children:[e!==!1&&s.jsx("div",{className:p,children:g}),s.jsx("div",{className:u,children:d}),_&&s.jsx(C,{size:"sm",variant:"ghost",className:h,onPress:()=>t==null?void 0:t(),children:s.jsx("svg",{className:y,viewBox:"0 0 384 512",children:s.jsx("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})})]})})})});r.__docgenInfo={description:"",methods:[],displayName:"Alert"};r.displayName="Alert";export{r as A};
