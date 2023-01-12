import{f as Q,$ as B,c as ue}from"./module.30462d86.js";import{r as m}from"./index.5181e2f2.js";import{i as Z,j as ie,e as oe}from"./module.929ab166.js";import{i as ee}from"./module.a9791687.js";import{$ as le}from"./module.aad0ebc4.js";import{a as Y,b as G,$ as ae}from"./module.a236d7df.js";import{e as te}from"./real-module.383a099c.js";const q=new WeakMap;function X(u,n){let e=q.get(u);if(!e)throw new Error("Unknown slider state");return`${e}-${n}`}function $e(u,n,e){let{labelProps:a,fieldProps:z}=ee(u),o=u.orientation==="vertical";var D;q.set(n,(D=a.id)!==null&&D!==void 0?D:z.id);let{direction:k}=te(),{addGlobalListener:P,removeGlobalListener:T}=Q();const d=m.exports.useRef(null),V=m.exports.useRef(null);V.current=n;const E=k==="rtl",c=m.exports.useRef(null),{moveProps:F}=Z({onMoveStart(){c.current=null},onMove({deltaX:r,deltaY:g}){let{height:s,width:h}=e.current.getBoundingClientRect(),p=o?s:h;c.current==null&&(c.current=V.current.getThumbPercent(d.current)*p);let $=o?g:r;if((o||E)&&($=-$),c.current+=$,d.current!=null&&e.current){const R=Y(c.current/p,0,1);V.current.setThumbPercent(d.current,R)}},onMoveEnd(){d.current!=null&&(V.current.setThumbDragging(d.current,!1),d.current=null)}});let L=m.exports.useRef(void 0),I=(r,g,s,h)=>{if(e.current&&!u.isDisabled&&n.values.every((p,$)=>!n.isThumbDragging($))){let{height:p,width:$,top:R,left:S}=e.current.getBoundingClientRect(),U=o?p:$,K=((o?h:s)-(o?R:S))/U;(k==="rtl"||o)&&(K=1-K);let i=n.getPercentValue(K),l,b=n.values.findIndex(x=>i-x<0);if(b===0)l=b;else if(b===-1)l=n.values.length-1;else{let x=n.values[b-1],t=n.values[b];Math.abs(x-i)<Math.abs(t-i)?l=b-1:l=b}l>=0&&n.isThumbEditable(l)?(r.preventDefault(),d.current=l,n.setFocusedThumb(l),L.current=g,n.setThumbDragging(d.current,!0),n.setThumbValue(l,i),P(window,"mouseup",w,!1),P(window,"touchend",w,!1),P(window,"pointerup",w,!1)):d.current=null}},w=r=>{var g,s;((s=r.pointerId)!==null&&s!==void 0?s:(g=r.changedTouches)===null||g===void 0?void 0:g[0].identifier)===L.current&&(d.current!=null&&(n.setThumbDragging(d.current,!1),d.current=null),T(window,"mouseup",w,!1),T(window,"touchend",w,!1),T(window,"pointerup",w,!1))};return"htmlFor"in a&&a.htmlFor&&(delete a.htmlFor,a.onClick=()=>{var r;(r=document.getElementById(X(n,0)))===null||r===void 0||r.focus(),ie("keyboard")}),{labelProps:a,groupProps:{role:"group",...z},trackProps:B({onMouseDown(r){r.button!==0||r.altKey||r.ctrlKey||r.metaKey||I(r,void 0,r.clientX,r.clientY)},onPointerDown(r){r.pointerType==="mouse"&&(r.button!==0||r.altKey||r.ctrlKey||r.metaKey)||I(r,r.pointerId,r.clientX,r.clientY)},onTouchStart(r){I(r,r.changedTouches[0].identifier,r.changedTouches[0].clientX,r.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},F),outputProps:{htmlFor:n.values.map((r,g)=>X(n,g)).join(" "),"aria-live":"off"}}}function ve(u,n){let{index:e,isRequired:a,validationState:z,trackRef:o,inputRef:D,orientation:k=n.orientation}=u,P=u.isDisabled||n.isDisabled,T=k==="vertical",{direction:d}=te(),{addGlobalListener:V,removeGlobalListener:E}=Q(),c=q.get(n);var F;const{labelProps:L,fieldProps:I}=ee({...u,id:X(n,e),"aria-labelledby":`${c} ${(F=u["aria-labelledby"])!==null&&F!==void 0?F:""}`.trim()}),w=n.values[e],r=m.exports.useCallback(()=>{D.current&&ue(D.current)},[D]),g=n.focusedThumb===e;m.exports.useEffect(()=>{g&&r()},[g,r]);const s=m.exports.useRef(null);s.current=n;let h=d==="rtl",p=m.exports.useRef(null),{keyboardProps:$}=oe({onKeyDown(i){let{getThumbMaxValue:l,getThumbMinValue:b,decrementThumb:x,incrementThumb:t,setThumbValue:f,setThumbDragging:v,pageSize:_}=s.current;if(!/^(PageUp|PageDown|Home|End)$/.test(i.key)){i.continuePropagation();return}switch(i.preventDefault(),v(e,!0),i.key){case"PageUp":t(e,_);break;case"PageDown":x(e,_);break;case"Home":f(e,b(e));break;case"End":f(e,l(e));break}v(e,!1)}}),{moveProps:R}=Z({onMoveStart(){p.current=null,s.current.setThumbDragging(e,!0)},onMove({deltaX:i,deltaY:l,pointerType:b,shiftKey:x}){const{getThumbPercent:t,setThumbPercent:f,decrementThumb:v,incrementThumb:_,step:j,pageSize:H}=s.current;let{width:ne,height:re}=o.current.getBoundingClientRect(),N=T?re:ne;if(p.current==null&&(p.current=t(e)*N),b==="keyboard")i>0&&h||i<0&&!h||l>0?v(e,x?H:j):_(e,x?H:j);else{let C=T?l:i;(T||h)&&(C=-C),p.current+=C,f(e,Y(p.current/N,0,1))}},onMoveEnd(){s.current.setThumbDragging(e,!1)}});n.setThumbEditable(e,!P);const{focusableProps:S}=le(B(u,{onFocus:()=>n.setFocusedThumb(e),onBlur:()=>n.setFocusedThumb(void 0)}),D);let U=m.exports.useRef(void 0),M=i=>{r(),U.current=i,n.setThumbDragging(e,!0),V(window,"mouseup",y,!1),V(window,"touchend",y,!1),V(window,"pointerup",y,!1)},y=i=>{var l,b;((b=i.pointerId)!==null&&b!==void 0?b:(l=i.changedTouches)===null||l===void 0?void 0:l[0].identifier)===U.current&&(r(),n.setThumbDragging(e,!1),E(window,"mouseup",y,!1),E(window,"touchend",y,!1),E(window,"pointerup",y,!1))},A=n.getThumbPercent(e);(T||d==="rtl")&&(A=1-A);let K=P?{}:B($,R,{onMouseDown:i=>{i.button!==0||i.altKey||i.ctrlKey||i.metaKey||M()},onPointerDown:i=>{i.button!==0||i.altKey||i.ctrlKey||i.metaKey||M(i.pointerId)},onTouchStart:i=>{M(i.changedTouches[0].identifier)}});return{inputProps:B(S,I,{type:"range",tabIndex:P?void 0:0,min:n.getThumbMinValue(e),max:n.getThumbMaxValue(e),step:n.step,value:w,disabled:P,"aria-orientation":k,"aria-valuetext":n.getThumbValueLabel(e),"aria-required":a||void 0,"aria-invalid":z==="invalid"||void 0,"aria-errormessage":u["aria-errormessage"],onChange:i=>{s.current.setThumbValue(e,parseFloat(i.target.value))}}),thumbProps:{...K,style:{position:"absolute",[T?"top":"left"]:`${A*100}%`,transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:L,isDragging:n.isThumbDragging(e),isDisabled:P,isFocused:g}}const ce=0,se=100,fe=1;function Pe(u){const{isDisabled:n=!1,minValue:e=ce,maxValue:a=se,numberFormatter:z,step:o=fe,orientation:D="horizontal"}=u;let k=m.exports.useMemo(()=>{let t=(a-e)/10;return t=G(t,0,t+o,o),Math.max(t,o)},[o,a,e]),P=m.exports.useMemo(()=>W(u.value),[u.value]);var T;let d=m.exports.useMemo(()=>(T=W(u.defaultValue))!==null&&T!==void 0?T:[e],[u.defaultValue,e]),V=J(u.value,u.defaultValue,u.onChange),E=J(u.value,u.defaultValue,u.onChangeEnd);const[c,F]=ae(P,d,V),[L,I]=m.exports.useState(new Array(c.length).fill(!1)),w=m.exports.useRef(new Array(c.length).fill(!0)),[r,g]=m.exports.useState(void 0),s=m.exports.useRef(null);s.current=c;const h=m.exports.useRef(null);h.current=L;function p(t){return(t-e)/(a-e)}function $(t){return t===0?e:c[t-1]}function R(t){return t===c.length-1?a:c[t+1]}function S(t){return w.current[t]}function U(t,f){w.current[t]=f}function M(t,f){if(n||!S(t))return;const v=$(t),_=R(t);f=G(f,v,_,o),s.current=O(s.current,t,f),F(s.current)}function y(t,f){if(n||!S(t))return;const v=h.current[t];h.current=O(h.current,t,f),I(h.current),E&&v&&!h.current.some(Boolean)&&E(s.current)}function A(t){return z.format(t)}function K(t,f){M(t,l(f))}function i(t){return Math.round((t-e)/o)*o+e}function l(t){const f=t*(a-e)+e;return Y(i(f),e,a)}function b(t,f=1){let v=Math.max(f,o);M(t,G(c[t]+v,e,a,o))}function x(t,f=1){let v=Math.max(f,o);M(t,G(c[t]-v,e,a,o))}return{values:c,getThumbValue:t=>c[t],setThumbValue:M,setThumbPercent:K,isThumbDragging:t=>L[t],setThumbDragging:y,focusedThumb:r,setFocusedThumb:g,getThumbPercent:t=>p(c[t]),getValuePercent:p,getThumbValueLabel:t=>A(c[t]),getFormattedValue:A,getThumbMinValue:$,getThumbMaxValue:R,getPercentValue:l,isThumbEditable:S,setThumbEditable:U,incrementThumb:b,decrementThumb:x,step:o,pageSize:k,orientation:D,isDisabled:n}}function O(u,n,e){return u[n]===e?u:[...u.slice(0,n),e,...u.slice(n+1)]}function W(u){if(u!=null)return Array.isArray(u)?u:[u]}function J(u,n,e){return a=>{typeof u=="number"||typeof n=="number"?e==null||e(a[0]):e==null||e(a)}}export{Pe as $,$e as a,ve as b};
