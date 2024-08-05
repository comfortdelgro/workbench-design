import{j as a}from"./jsx-runtime-9ef10904.js";import{g as $,R as k,r as x}from"./index-6c164b11.js";import{t as y}from"./toNumber-bd7815ee.js";import{C as B,c as i}from"./objectToCSS-e90bd687.js";import{u as h}from"./use-dom-ref-7c72e1a5.js";function A(e,s,r){return e===e&&(r!==void 0&&(e=e<=r?e:r),s!==void 0&&(e=e>=s?e:s)),e}var D=A,F=D,L=y;function I(e,s,r){return r===void 0&&(r=s,s=void 0),r!==void 0&&(r=L(r),r=r===r?r:0),s!==void 0&&(s=L(s),s=s===s?s:0),F(L(e),s,r)}var W=I;const T=$(W),U="_progressBarWrapper_1ue1q_42",X="_progressBarLabel_1ue1q_46",O="_progressBarLabelSpan_1ue1q_53",G="_variantRounded_1ue1q_61",H="_sizeSm_1ue1q_70",J="_sizeMd_1ue1q_74",K="_sizeLg_1ue1q_78",Q="_sizeXl_1ue1q_82",Y="_progressBar_1ue1q_42",Z="_currentProgress_1ue1q_92",w="_loadingSlide_1ue1q_99",ss="_loadingProgress_1ue1q_103",rs="_loadingStripes_1ue1q_110",es="_progressLoading_1ue1q_1",as="_loadingTrue_1ue1q_117",os="_progressSlideLoading_1ue1q_1",ns="_loadingFalse_1ue1q_121",o={progressBarWrapper:U,progressBarLabel:X,progressBarLabelSpan:O,variantRounded:G,sizeSm:H,sizeMd:J,sizeLg:K,sizeXl:Q,progressBar:Y,currentProgress:Z,loadingSlide:w,loadingProgress:ss,loadingStripes:rs,progressLoading:es,loadingTrue:as,progressSlideLoading:os,loadingFalse:ns},z=k.forwardRef((e,s)=>{const{css:r={},className:C="",loading:l=!1,label:u,rightLabel:_,size:S="lg",barColor:R="#EDEBE9",color:g="blue",variant:v="normal",value:N=0,minValue:q=0,maxValue:P=100,onComplete:c,...M}=e,d=x.useMemo(()=>g==="blue"?"#009EDA":g==="green"?"#107C10":g,[g]),n=q<0?0:q,t=P<n?n:P,p=T(N,n,t),j=h(s),E=h(s),m=h(s),f={role:"progressbar","aria-label":u??"","aria-valuemin":n,"aria-valuenow":p,"aria-valuemax":t},b=x.useMemo(()=>{if(t-n===0||p===t)return 100;const V=(p-n)/(t-n);return Math.round(V*100)},[p,n,t]);return x.useEffect(()=>{b===100&&(c==null||c())},[b,c]),a.jsx(B,{css:r,childrenRef:j,children:a.jsxs("div",{...f,...M,className:i(o.progressBarWrapper,C,"cdg-progress-bar"),ref:j,children:[(!!u||!!_)&&a.jsxs("div",{className:i(o.progressBarLabel,"cdg-progress-bar-label"),children:[a.jsx("span",{...f,className:i(o.progressBarLabelSpan,"cdg-progress-bar-label-span"),children:u}),_&&a.jsx("span",{...f,className:i(o.progressBarLabelSpan,"cdg-progress-bar-label-span"),children:_})]}),a.jsxs("div",{className:i(o.progressBar,o[`variant${v.charAt(0).toUpperCase()+v.slice(1)}`],o[`size${S.charAt(0).toUpperCase()+S.slice(1)}`],"cdg-progress-bar-content"),style:{backgroundColor:R},children:[!l&&a.jsx(B,{css:{width:`${b}%`,backgroundColor:d},childrenRef:m,children:a.jsx("div",{className:i(o.currentProgress,"cdg-progress-bar-current-state"),ref:m})}),l&&a.jsx(B,{css:{...l==="stripes"?{backgroundImage:`repeating-linear-gradient(-45deg,transparent 0 1.5%,${d} 1.5% 3%)`,"@media (max-width: 600px)":{backgroundImage:`repeating-linear-gradient(-45deg,transparent 0 .8%,${d} .8% 1.6%)`}}:{backgroundColor:d}},childrenRef:m,children:a.jsx("div",{className:i(o.loadingProgress,o[`loading${l.toString().charAt(0).toUpperCase()+l.toString().slice(1)}`],"cdg-progress-bar-loading"),ref:E})})]})]})})});z.__docgenInfo={description:"",methods:[],displayName:"ProgressBar"};z.displayName="ProgressBar";export{z as P};