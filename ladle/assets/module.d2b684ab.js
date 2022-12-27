import{r as c,R as g}from"./index.5c529a62.js";import{t as S}from"./module.b1d36023.js";const m={prefix:String(Math.round(Math.random()*1e10)),current:0},E=g.createContext(m);let L=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function h(t){let e=c.exports.useContext(E);return e===m&&!L&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),c.exports.useMemo(()=>t||`react-aria${e.prefix}-${++e.current}`,[t])}function F(){let e=c.exports.useContext(E)!==m,[a,r]=c.exports.useState(e);return typeof window<"u"&&e&&c.exports.useLayoutEffect(()=>{r(!1)},[]),a}const p=typeof window<"u"?g.useLayoutEffect:()=>{};function P(t){let[e,a]=c.exports.useState(t),r=c.exports.useRef(e),n=c.exports.useRef(null);r.current=e;let l=c.exports.useRef(null);l.current=()=>{let i=n.current.next();if(i.done){n.current=null;return}e===i.value?l.current():a(i.value)},p(()=>{n.current&&l.current()});let o=c.exports.useCallback(i=>{n.current=i(r.current),l.current()},[n,l]);return[e,o]}let u=new Map;function b(t){let[e,a]=c.exports.useState(t),r=c.exports.useRef(null),n=h(e),l=c.exports.useCallback(o=>{r.current=o},[]);return u.set(n,l),p(()=>{let o=n;return()=>{u.delete(o)}},[n]),c.exports.useEffect(()=>{let o=r.current;o&&(r.current=null,a(o))}),n}function R(t,e){if(t===e)return t;let a=u.get(t);if(a)return a(e),e;let r=u.get(e);return r?(r(t),t):e}function y(t=[]){let e=b(),[a,r]=P(e),n=c.exports.useCallback(()=>{r(function*(){yield e,yield document.getElementById(e)?e:void 0})},[e,r]);return p(n,[e,n,...t]),a}function T(...t){return(...e)=>{for(let a of t)typeof a=="function"&&a(...e)}}function C(...t){let e={...t[0]};for(let a=1;a<t.length;a++){let r=t[a];for(let n in r){let l=e[n],o=r[n];typeof l=="function"&&typeof o=="function"&&n[0]==="o"&&n[1]==="n"&&n.charCodeAt(2)>=65&&n.charCodeAt(2)<=90?e[n]=T(l,o):(n==="className"||n==="UNSAFE_className")&&typeof l=="string"&&typeof o=="string"?e[n]=S(l,o):n==="id"&&l&&o?e.id=R(l,o):e[n]=o!==void 0?o:l}}return e}const M=new Set(["id"]),I=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),k=/^(data-.*)$/;function W(t,e={}){let{labelable:a,propNames:r}=e,n={};for(const l in t)Object.prototype.hasOwnProperty.call(t,l)&&(M.has(l)||a&&I.has(l)||(r==null?void 0:r.has(l))||k.test(l))&&(n[l]=t[l]);return n}function q(t){if(N())t.focus({preventScroll:!0});else{let e=A(t);t.focus(),_(e)}}let f=null;function N(){if(f==null){f=!1;try{var t=document.createElement("div");t.focus({get preventScroll(){return f=!0,!0}})}catch{}}return f}function A(t){for(var e=t.parentNode,a=[],r=document.scrollingElement||document.documentElement;e instanceof HTMLElement&&e!==r;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&a.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return r instanceof HTMLElement&&a.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),a}function _(t){for(let{element:e,scrollTop:a,scrollLeft:r}of t)e.scrollTop=a,e.scrollLeft=r}let d=new Map,v=new Set;function w(){if(typeof window>"u")return;let t=a=>{let r=d.get(a.target);r||(r=new Set,d.set(a.target,r),a.target.addEventListener("transitioncancel",e)),r.add(a.propertyName)},e=a=>{let r=d.get(a.target);if(!!r&&(r.delete(a.propertyName),r.size===0&&(a.target.removeEventListener("transitioncancel",e),d.delete(a.target)),d.size===0)){for(let n of v)n();v.clear()}};document.body.addEventListener("transitionrun",t),document.body.addEventListener("transitionend",e)}typeof document<"u"&&(document.readyState!=="loading"?w():document.addEventListener("DOMContentLoaded",w));function J(t){requestAnimationFrame(()=>{d.size===0?t():v.add(t)})}function K(){let t=c.exports.useRef(new Map),e=c.exports.useCallback((n,l,o,i)=>{let s=i!=null&&i.once?(...$)=>{t.current.delete(o),o(...$)}:o;t.current.set(o,{type:l,eventTarget:n,fn:s,options:i}),n.addEventListener(l,o,i)},[]),a=c.exports.useCallback((n,l,o,i)=>{var s;let $=((s=t.current.get(o))===null||s===void 0?void 0:s.fn)||o;n.removeEventListener(l,$,i),t.current.delete(o)},[]),r=c.exports.useCallback(()=>{t.current.forEach((n,l)=>{a(n.eventTarget,n.type,l,n.options)})},[a]);return c.exports.useEffect(()=>r,[r]),{addGlobalListener:e,removeGlobalListener:a,removeAllGlobalListeners:r}}function D(t,e){let{id:a,"aria-label":r,"aria-labelledby":n}=t;return a=b(a),n&&r?n=[...new Set([...n.trim().split(/\s+/),a])].join(" "):n&&(n=n.trim().split(/\s+/).join(" ")),!r&&!n&&e&&(r=e),{id:a,"aria-label":r,"aria-labelledby":n}}function Q(t,e){p(()=>{if(t&&t.ref&&e)return t.ref.current=e.current,()=>{t.ref.current=null}},[t,e])}function G(t){var e;return typeof window>"u"||window.navigator==null?!1:((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.brands.some(a=>t.test(a.brand)))||t.test(window.navigator.userAgent)}function x(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function B(){return x(/^Mac/i)}function j(){return x(/^iPhone/i)}function O(){return x(/^iPad/i)||B()&&navigator.maxTouchPoints>1}function X(){return j()||O()}function z(){return G(/Android/i)}function Y(t,e,a,r){let n=c.exports.useRef(a);n.current=a;let l=a==null;c.exports.useEffect(()=>{if(l)return;let o=t.current,i=s=>n.current.call(this,s);return o.addEventListener(e,i,r),()=>{o.removeEventListener(e,i,r)}},[t,e,r,l])}function Z(t){return t.mozInputSource===0&&t.isTrusted?!0:z()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function H(t){let{id:e,label:a,"aria-labelledby":r,"aria-label":n,labelElementType:l="label"}=t;e=b(e);let o=b(),i={};a?(r=r?`${r} ${o}`:o,i={id:o,htmlFor:l==="label"?e:void 0}):!r&&!n&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let s=D({id:e,"aria-label":n,"aria-labelledby":r});return{labelProps:i,fieldProps:s}}function ee(t){let{description:e,errorMessage:a,validationState:r}=t,{labelProps:n,fieldProps:l}=H(t),o=y([Boolean(e),Boolean(a),r]),i=y([Boolean(e),Boolean(a),r]);return l=C(l,{"aria-describedby":[o,i,t["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:n,fieldProps:l,descriptionProps:{id:o},errorMessageProps:{id:i}}}export{ee as $,H as a,Y as b,p as c,Z as d,B as e,C as f,J as g,q as h,Q as i,W as j,F as k,K as l,b as m,j as n,z as o,X as p};
