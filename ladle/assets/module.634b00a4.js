import{r as b}from"./index.28d6044e.js";import{$ as h}from"./module.e0843ab4.js";const $=new WeakMap;function E(f,o,i){let{type:a}=f,{isOpen:d}=o;b.exports.useEffect(()=>{i&&i.current&&$.set(i.current,o.close)});let l;a==="menu"?l=!0:a==="listbox"&&(l="listbox");let s=h();return{triggerProps:{"aria-haspopup":l,"aria-expanded":d,"aria-controls":d?s:null,onPress:o.toggle},overlayProps:{id:s}}}let c=new WeakMap,n=[];function g(f,o=document.body){let i=new Set(f),a=new Set,d=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,{acceptNode(e){return(e instanceof HTMLElement||e instanceof SVGElement)&&e.dataset.liveAnnouncer==="true"&&i.add(e),i.has(e)||a.has(e.parentElement)&&e.parentElement.getAttribute("role")!=="row"?NodeFilter.FILTER_REJECT:f.some(t=>e.contains(t))?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}}),l=e=>{var t;let r=(t=c.get(e))!==null&&t!==void 0?t:0;e.getAttribute("aria-hidden")==="true"&&r===0||(r===0&&e.setAttribute("aria-hidden","true"),a.add(e),c.set(e,r+1))};n.length&&n[n.length-1].disconnect();let s=d.nextNode();for(;s!=null;)l(s),s=d.nextNode();let u=new MutationObserver(e=>{for(let t of e)if(!(t.type!=="childList"||t.addedNodes.length===0)&&![...i,...a].some(r=>r.contains(t.target)))for(let r of t.addedNodes)(r instanceof HTMLElement||r instanceof SVGElement)&&r.dataset.liveAnnouncer==="true"?i.add(r):r instanceof Element&&l(r)});u.observe(o,{childList:!0,subtree:!0});let p={observe(){u.observe(o,{childList:!0,subtree:!0})},disconnect(){u.disconnect()}};return n.push(p),()=>{u.disconnect();for(let e of a){let t=c.get(e);t===1?(e.removeAttribute("aria-hidden"),c.delete(e)):c.set(e,t-1)}p===n[n.length-1]?(n.pop(),n.length&&n[n.length-1].observe()):n.splice(n.indexOf(p),1)}}export{E as $,g as a};
