import{j as n}from"./jsx-runtime-9ef10904.js";import{R as u,r as I}from"./index-6c164b11.js";import{c as o,C as x}from"./objectToCSS-e90bd687.js";import{u as R}from"./use-dom-ref-7c72e1a5.js";import{C as j}from"./color-214871c7.js";const $="_circular_h0u41_30",S="_svg_h0u41_34",P="_svgCircle_h0u41_38",M="_circularVariantIndeterminate_h0u41_45",w="_circularRotateKeyframe_h0u41_1",L="_svgCircleVariantIndeterminate_h0u41_49",X="_svgCircleVariantDeterminate_h0u41_55",z="_svgCircleVariantDeterminateDisableShrink_h0u41_61",E="_circularDashKeyframe_h0u41_1",c={circular:$,svg:S,svgCircle:P,circularVariantIndeterminate:M,circularRotateKeyframe:w,svgCircleVariantIndeterminate:L,svgCircleVariantDeterminate:X,svgCircleVariantDeterminateDisableShrink:z,circularDashKeyframe:E},s=44,K=u.forwardRef((b,V)=>{const{css:h={},className:i,value:l=0,size:_=40,thickness:a=3.6,color:d="#0142af",disableShrink:t=!1,variant:e="indeterminate",...v}=b,m=R(V),C=u.useMemo(()=>e==="determinate"?{transform:"rotate(-90deg)"}:{},[e]),y=u.useMemo(()=>{if(e==="determinate"){const g=2*Math.PI*((s-a)/2),k=(100-l)/100*g;return{strokeDasharray:g.toFixed(3),strokeDashoffset:`${k.toFixed(3)}px`}}return{}},[a,l,e]),p=o(c.circular,e==="indeterminate"&&c.circularVariantIndeterminate,i,"cdg-progress-circular"),D=o(c.svgCircle,e==="determinate"?c.svgCircleVariantDeterminate:c.svgCircleVariantIndeterminate,e==="indeterminate"&&!t&&c.svgCircleVariantDeterminateDisableShrink,"cdg-progress-svgCircle");return n.jsx(x,{css:h,childrenRef:m,children:n.jsx("div",{...v,ref:m,className:p,style:{color:d,width:_,height:_,...C},children:n.jsx("svg",{className:o(c.svg,"cdg-progress-svg"),viewBox:`${s/2} ${s/2} ${s} ${s}`,children:n.jsx("circle",{cx:s,cy:s,fill:"none",style:y,strokeWidth:a,r:(s-a)/2,className:D})})})})});K.__docgenInfo={description:"",methods:[],displayName:"CircularProgress"};const F="_linear_1s1sk_51",O="_dashed_1s1sk_60",W="_bufferKeyframe_1s1sk_1",Z="_bar1_1s1sk_70",q="_bar2_1s1sk_80",A="_linearVariantIndeterminate_1s1sk_92",G="_linearVariantDeterminate_1s1sk_93",H="_linearRounded_1s1sk_104",J="_bar1VariantIndeterminate_1s1sk_109",Q="_indeterminate1Keyframe_1s1sk_1",T="_bar2VariantIndeterminate_1s1sk_115",U="_indeterminate2Keyframe_1s1sk_1",Y="_bar1VariantDeterminate_1s1sk_128",ee="_bar2VariantDeterminate_1s1sk_132",re="_linearVariantBuffer_1s1sk_137",ae="_bar1VariantBuffer_1s1sk_142",te="_bar2VariantBuffer_1s1sk_147",r={linear:F,dashed:O,bufferKeyframe:W,bar1:Z,bar2:q,linearVariantIndeterminate:A,linearVariantDeterminate:G,linearRounded:H,bar1VariantIndeterminate:J,indeterminate1Keyframe:Q,bar2VariantIndeterminate:T,indeterminate2Keyframe:U,bar1VariantDeterminate:Y,bar2VariantDeterminate:ee,linearVariantBuffer:re,bar1VariantBuffer:ae,bar2VariantBuffer:te},B=u.forwardRef((b,V)=>{const{css:h={},value:i,size:l=4,className:_,valueBuffer:a,rounded:d=!1,color:t="#0142af",variant:e="indeterminate",...v}=b,m=R(V),C=u.useMemo(()=>new j(t).set("lch.l",70),[t]),y=o(r.linear,e==="indeterminate"&&r.linearVariantIndeterminate,e==="determinate"&&r.linearVariantDeterminate,e==="buffer"&&r.linearVariantBuffer,d&&r.linearRounded,_,"cdg-progress-linear"),p=o(r.bar1,e==="indeterminate"&&r.bar1VariantIndeterminate,e==="determinate"&&r.bar1VariantDeterminate,e==="buffer"&&r.bar1VariantBuffer,d&&r.linearRounded,"cdg-progress-bar1"),D=I.useMemo(()=>{if(e==="determinate"||e==="buffer"){let f="translateX(-100%)";return i&&i>=0&&i<=100&&(f=`translateX(${i-100}%)`),{transform:f}}return{}},[i,e]),g=o(r.bar2,e==="indeterminate"&&r.bar2VariantIndeterminate,e==="determinate"&&r.bar2VariantDeterminate,e==="buffer"&&r.bar2VariantBuffer,d&&r.linearRounded,"cdg-progress-bar2"),k=I.useMemo(()=>{if(e==="buffer"){let f="translateX(-100%)";return a&&a>=0&&a<=100&&(f=`translateX(${(a||0)-100}%)`),{transform:f}}return{}},[a,e]);return n.jsx(x,{css:h,childrenRef:m,children:n.jsxs("div",{...v,ref:m,className:y,style:{"--cdg-progress-linear-color":t,height:`${l}px`},children:[e==="buffer"&&n.jsx("div",{className:o(r.dashed,"cdg-progress-linear-dashed"),style:{"--cdg-progress-linear-color":t,backgroundImage:`radial-gradient(circle at center, ${t} 40%, transparent 0%)`,backgroundSize:`${l*2}px ${l}px`}}),n.jsx("div",{className:p,style:{...D,backgroundColor:t}}),e!=="determinate"&&n.jsx("div",{className:g,style:{...k,"--cdg-progress-linear-color":t,"--cdg-progress-linear-shadeColor":C}})]})})});B.__docgenInfo={description:"",methods:[],displayName:"LinearProgress"};const N={Circular:K,Linear:B};N.Circular.displayName="Progress.Circular";N.Linear.displayName="Progress.Linear";export{N as P};
