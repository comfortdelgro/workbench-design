"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6496],{86496:function(e,t,n){n.r(t),n.d(t,{useField:function(){return i},useLabel:function(){return o}});var r=n(80309);function o(e){let{id:t,label:n,"aria-labelledby":o,"aria-label":i,labelElementType:l="label"}=e;t=(0,r.Me)(t);let u=(0,r.Me)(),a={};return n?(o=o?`${o} ${u}`:u,a={id:u,htmlFor:"label"===l?t:void 0}):o||i||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:a,fieldProps:(0,r.bE)({id:t,"aria-label":i,"aria-labelledby":o})}}function i(e){let{description:t,errorMessage:n,validationState:i}=e,{labelProps:l,fieldProps:u}=o(e),a=(0,r.mp)([Boolean(t),Boolean(n),i]),c=(0,r.mp)([Boolean(t),Boolean(n),i]);return{labelProps:l,fieldProps:u=(0,r.dG)(u,{"aria-describedby":[a,c,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),descriptionProps:{id:a},errorMessageProps:{id:c}}}},39483:function(e,t,n){n.d(t,{Av:function(){return a},gP:function(){return u}});var r=n(52983);let o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),l=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement);function u(e){let t=(0,r.useContext)(i);return t!==o||l||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}function a(){let e=(0,r.useContext)(i)!==o,[t,n]=(0,r.useState)(e);return"undefined"!=typeof window&&e&&(0,r.useLayoutEffect)(()=>{n(!1)},[]),t}},80309:function(e,t,n){n.d(t,{Ao:function(){return y},Dt:function(){return W},IN:function(){return B},Me:function(){return a},PK:function(){return k},Pf:function(){return H},QB:function(){return L},V5:function(){return x},Zj:function(){return _},ad:function(){return R},bE:function(){return C},bt:function(){return l},cr:function(){return D},dG:function(){return s},gn:function(){return z},lE:function(){return T},mp:function(){return f},tS:function(){return d},xi:function(){return P},zL:function(){return v},zT:function(){return j},zX:function(){return $}});var r=n(52983),o=n(39483),i=n(14517);let l="undefined"!=typeof window?r.useLayoutEffect:()=>{},u=new Map;function a(e){let[t,n]=(0,r.useState)(e),i=(0,r.useRef)(null),a=(0,o.gP)(t),c=(0,r.useCallback)(e=>{i.current=e},[]);return u.set(a,c),l(()=>()=>{u.delete(a)},[a]),(0,r.useEffect)(()=>{let e=i.current;e&&(i.current=null,n(e))}),a}function c(e,t){if(e===t)return e;let n=u.get(e);if(n)return n(t),t;let r=u.get(t);return r?(r(e),e):t}function f(e=[]){let t=a(),[n,o]=function e(t){let[n,o]=(0,r.useState)(t),i=(0,r.useRef)(n),u=(0,r.useRef)(null);i.current=n;let a=(0,r.useRef)(null);return a.current=()=>{let e=u.current.next();if(e.done){u.current=null;return}n===e.value?a.current():o(e.value)},l(()=>{u.current&&a.current()}),[n,(0,r.useCallback)(e=>{u.current=e(i.current),a.current()},[u,a])]}(t),i=(0,r.useCallback)(()=>{o(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,o]);return l(i,[t,i,...e]),n}function d(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function s(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let o in r){let l=t[o],u=r[o];"function"==typeof l&&"function"==typeof u&&"o"===o[0]&&"n"===o[1]&&o.charCodeAt(2)>=65&&90>=o.charCodeAt(2)?t[o]=d(l,u):("className"===o||"UNSAFE_className"===o)&&"string"==typeof l&&"string"==typeof u?t[o]=(0,i.Z)(l,u):"id"===o&&l&&u?t.id=c(l,u):t[o]=void 0!==u?u:l}}return t}let p=new Set(["id"]),b=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),m=/^(data-.*)$/;function v(e,t={}){let{labelable:n,propNames:r}=t,o={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(p.has(i)||n&&b.has(i)||(null==r?void 0:r.has(i))||m.test(i))&&(o[i]=e[i]);return o}function y(e){if(function(){if(null==w){w=!1;try{document.createElement("div").focus({get preventScroll(){return w=!0,!0}})}catch(e){}}return w}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let w=null,g=new Map,h=new Set;function E(){if("undefined"==typeof window)return;let e=e=>{let n=g.get(e.target);n||(n=new Set,g.set(e.target,n),e.target.addEventListener("transitioncancel",t)),n.add(e.propertyName)},t=e=>{let n=g.get(e.target);if(n&&(n.delete(e.propertyName),0===n.size&&(e.target.removeEventListener("transitioncancel",t),g.delete(e.target)),0===g.size)){for(let r of h)r();h.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}function L(e){requestAnimationFrame(()=>{0===g.size?e():h.add(e)})}function P(){let e=(0,r.useRef)(new Map),t=(0,r.useCallback)((t,n,r,o)=>{let i=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:i,options:o}),t.addEventListener(n,r,o)},[]),n=(0,r.useCallback)((t,n,r,o)=>{var i;let l=(null===(i=e.current.get(r))||void 0===i?void 0:i.fn)||r;t.removeEventListener(n,l,o),e.current.delete(r)},[]),o=(0,r.useCallback)(()=>{e.current.forEach((e,t)=>{n(e.eventTarget,e.type,t,e.options)})},[n]);return(0,r.useEffect)(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}function C(e,t){let{id:n,"aria-label":r,"aria-labelledby":o}=e;return(n=a(n),o&&r)?o=[...new Set([...o.trim().split(/\s+/),n])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),r||o||!t||(r=t),{id:n,"aria-label":r,"aria-labelledby":o}}function T(e,t){l(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}},[e,t])}"undefined"!=typeof document&&("loading"!==document.readyState?E():document.addEventListener("DOMContentLoaded",E)),"undefined"!=typeof window&&window.visualViewport;let S=0,M=new Map;function k(e){let[t,n]=(0,r.useState)(void 0);return l(()=>{if(!e)return;let t=M.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${S++}`;n(r);let o=document.createElement("div");o.id=r,o.style.display="none",o.textContent=e,document.body.appendChild(o),t={refCount:0,element:o},M.set(e,t)}return t.refCount++,()=>{0==--t.refCount&&(t.element.remove(),M.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function A(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function N(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function x(){return N(/^Mac/i)}function B(){return N(/^iPhone/i)}function z(){return B()||N(/^iPad/i)||x()&&navigator.maxTouchPoints>1}function R(){return x()||z()}function H(){return A(/AppleWebKit/i)&&!A(/Chrome/i)}function W(){return A(/Android/i)}function $(e,t,n,o){let i=(0,r.useRef)(n);i.current=n;let l=null==n;(0,r.useEffect)(()=>{if(l)return;let n=e.current,r=e=>i.current.call(this,e);return n.addEventListener(t,r,o),()=>{n.removeEventListener(t,r,o)}},[e,t,o,l])}function j(e,t){let n=G(e,t,"left"),r=G(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight,l=e.scrollLeft,u=e.scrollTop,a=l+e.offsetWidth,c=u+e.offsetHeight;n<=l?l=n:n+o>a&&(l+=n+o-a),r<=u?u=r:r+i>c&&(u+=r+i-c),e.scrollLeft=l,e.scrollTop=u}function G(e,t,n){let r="left"===n?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function _(e){return 0===e.mozInputSource&&!!e.isTrusted||(W()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function D(e){return 0===e.width&&0===e.height||1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType}}}]);