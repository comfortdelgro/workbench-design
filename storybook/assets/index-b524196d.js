import{j as c}from"./jsx-runtime-9ef10904.js";import{R as n}from"./index-6c164b11.js";import{c as t,C as m}from"./objectToCSS-e90bd687.js";import{u as p}from"./use-dom-ref-7c72e1a5.js";const b="_card_iarh4_6",j="_disabled_iarh4_30",T="_shadowless_iarh4_36",w="_clickable_iarh4_44",A="_sm_iarh4_52",B="_lg_iarh4_56",P="_full_iarh4_60",k="_cardTitle_iarh4_66",v="_cardTitleContainer_iarh4_72",D="_cardBody_iarh4_93",z="_cardImage_iarh4_117",E="_cardActions_iarh4_127",s={card:b,disabled:j,shadowless:T,clickable:w,sm:A,lg:B,full:P,cardTitle:k,cardTitleContainer:v,cardBody:D,cardImage:z,cardActions:E},d=n.forwardRef((r,a)=>{const{children:e,className:i,css:o={},isDisabled:l=!1,isShadowless:_=!1,isClickable:f=!1,size:h="full",...I}=r,g=p(a),R=f?{tabIndex:1,role:"button"}:{},x=t(s.card,l&&s.disabled,_&&s.shadowless,f&&s.clickable,h==="full"?s.full:h==="lg"?s.lg:h==="sm"?s.sm:"",i,"cdg-card");return c.jsx(m,{css:o,childrenRef:g,children:c.jsx("div",{...I,...R,ref:g,className:x,children:e})})});d.__docgenInfo={description:"",methods:[],displayName:"Card"};const C=n.forwardRef((r,a)=>{const{children:e,css:i={},className:o,...l}=r;return c.jsx(m,{css:i,childrenRef:a,children:c.jsx("div",{...l,ref:a,className:t(s.cardActions,o,"cdg-card-action"),children:e})})});C.__docgenInfo={description:"",methods:[],displayName:"CardAction"};const y=n.forwardRef((r,a)=>{const{children:e,css:i={},className:o,...l}=r;return c.jsx(m,{css:i,childrenRef:a,children:c.jsx("div",{...l,ref:a,className:t(s.cardBody,o,"cdg-card-body"),children:e})})});y.__docgenInfo={description:"",methods:[],displayName:"CardBody"};const N=n.forwardRef((r,a)=>{const{css:e={},className:i,...o}=r,l=p(a);return c.jsx(m,{css:e,childrenRef:a,children:c.jsx("img",{...o,ref:l,className:t(s.cardImage,i,"cdg-card-image")})})});N.__docgenInfo={description:"",methods:[],displayName:"CardImage"};const u=n.forwardRef((r,a)=>{const{children:e,css:i={},className:o,...l}=r,_=()=>typeof e=="string"?c.jsx("h3",{className:t(s.cardTitle,"cdg-card-title"),children:e}):e;return c.jsx(m,{css:i,childrenRef:a,children:c.jsx("div",{...l,ref:a,className:t(s.cardTitleContainer,o,"cdg-card-title-container"),children:_()})})});u.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};d.Body=y;d.Image=N;d.Title=u;d.Action=C;d.displayName="Card";d.Body.displayName="Card.Body";d.Image.displayName="Card.Image";d.Title.displayName="Card.Title";d.Action.displayName="Card.Action";export{d as C};