import{$ as d}from"./module.b1a9d0e8.js";import{R as p,r as c}from"./index.e3899799.js";import{d as u}from"./module.28cfaed6.js";const a={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:1,whiteSpace:"nowrap"};function f(t={}){let{style:e,isFocusable:s}=t,[i,l]=c.exports.useState(!1),{focusWithinProps:o}=u({isDisabled:!s,onFocusWithinChange:n=>l(n)}),r=c.exports.useMemo(()=>i?e:e?{...a,...e}:a,[i]);return{visuallyHiddenProps:{...o,style:r}}}function m(t){let{children:e,elementType:s="div",isFocusable:i,style:l,...o}=t,{visuallyHiddenProps:r}=f(t);return p.createElement(s,d(o,r),e)}export{m as $};
