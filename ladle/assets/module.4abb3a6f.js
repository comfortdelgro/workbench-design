import{f as y,$ as z,c as f,b as g,j as w,k as A}from"./module.e0843ab4.js";import{$ as D,j as H,k as K}from"./module.31e72b8d.js";import{a as W}from"./module.9e34b676.js";import{d as k,e as B}from"./module.ae1f3597.js";import{$ as I}from"./module.3c41e53e.js";const p=new WeakMap;function j(e){return typeof e=="string"?e.replace(/\s*/g,""):""+e}function C(e,o){let a=p.get(e);if(!a)throw new Error("Unknown list");return`${a.id}-option-${j(o)}`}function L(e,o,a){let l=y(e,{labelable:!0}),{listProps:s}=k({...e,ref:a,selectionManager:o.selectionManager,collection:o.collection,disabledKeys:o.disabledKeys}),{focusWithinProps:t}=D({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),i=z(e.id);p.set(o,{id:i,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction});let{labelProps:d,fieldProps:n}=W({...e,id:i,labelElementType:"span"});return{labelProps:d,listBoxProps:f(l,t,o.selectionManager.selectionMode==="multiple"?{"aria-multiselectable":"true"}:{},{role:"listbox",...f(n,s)})}}function N(e,o,a){let{key:l}=e,s=p.get(o);var t;let i=(t=e.isDisabled)!==null&&t!==void 0?t:o.disabledKeys.has(l);var d;let n=(d=e.isSelected)!==null&&d!==void 0?d:o.selectionManager.isSelected(l),m=o.selectionManager.focusedKey===l;var c;let h=(c=e.shouldSelectOnPressUp)!==null&&c!==void 0?c:s.shouldSelectOnPressUp;var u;let P=(u=e.shouldFocusOnHover)!==null&&u!==void 0?u:s.shouldFocusOnHover;var b;let S=(b=e.shouldUseVirtualFocus)!==null&&b!==void 0?b:s.shouldUseVirtualFocus;var $;let v=($=e.isVirtualized)!==null&&$!==void 0?$:s.isVirtualized,x=g(),F=g(),r={role:"option","aria-disabled":i,"aria-selected":o.selectionManager.selectionMode!=="none"?n:void 0};w()&&A()||(r["aria-label"]=e["aria-label"],r["aria-labelledby"]=x,r["aria-describedby"]=F),v&&(r["aria-posinset"]=o.collection.getItem(l).index+1,r["aria-setsize"]=I(o.collection));let{itemProps:U,isPressed:O,hasAction:V,allowsSelection:M}=B({selectionManager:o.selectionManager,key:l,ref:a,shouldSelectOnPressUp:h,allowsDifferentPressOrigin:h&&P,isVirtualized:v,shouldUseVirtualFocus:S,isDisabled:i,onAction:s.onAction?()=>s.onAction(l):void 0}),{hoverProps:_}=H({isDisabled:i||!P,onHoverStart(){K()||(o.selectionManager.setFocused(!0),o.selectionManager.setFocusedKey(l))}});return{optionProps:{...r,...f(U,_),id:C(o,l)},labelProps:{id:x},descriptionProps:{id:F},isFocused:m,isSelected:n,isDisabled:i,isPressed:O,allowsSelection:M,hasAction:V}}export{p as $,C as a,N as b,L as c};
