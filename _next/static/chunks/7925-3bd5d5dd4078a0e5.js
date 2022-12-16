"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7925],{67925:function(e,t,n){n.r(t),n.d(t,{FocusRing:function(){return R},FocusScope:function(){return l},FocusableProvider:function(){return k},createFocusManager:function(){return L},focusSafely:function(){return s},getFocusableTreeWalker:function(){return w},isElementInChildOfActiveScope:function(){return h},useFocusManager:function(){return d},useFocusRing:function(){return N},useFocusable:function(){return C}});var r=n(52983),o=n(30227),i=n(12024),u=n(14517);function s(e){if("virtual"===(0,i.getInteractionModality)()){let t=document.activeElement;(0,o.runAfterTransition)(()=>{document.activeElement===t&&document.contains(e)&&(0,o.focusWithoutScrolling)(e)})}else(0,o.focusWithoutScrolling)(e)}let a=r.createContext(null),c=null;function l(e){var t,n,i,u,s,l,d;let{children:p,contain:f,restoreFocus:g,autoFocus:h}=e,L=(0,r.useRef)(),K=(0,r.useRef)(),M=(0,r.useRef)([]),S=(0,r.useContext)(a),N=null!==(t=null==S?void 0:S.scopeRef)&&void 0!==t?t:null,R=(0,r.useMemo)(()=>c&&F.getTreeNode(c)&&!E(c,N)?c:N,[N]);(0,o.useLayoutEffect)(()=>{let e=L.current.nextSibling,t=[];for(;e&&e!==K.current;)t.push(e),e=e.nextSibling;M.current=t},[p,R]),F.getTreeNode(R)&&!F.getTreeNode(M)&&F.addTreeNode(M,R);let D,k;F.getTreeNode(M).contain=f,n=M,i=g,u=f,(0,o.useLayoutEffect)(()=>{if(i||u)return;let e=n.current,t=e=>{let t=e.target;if(b(t,n.current))c=n;else{var r;!y(t)&&(c=null)}};return document.addEventListener("focusin",t,!1),e.forEach(e=>e.addEventListener("focusin",t,!1)),()=>{document.removeEventListener("focusin",t,!1),e.forEach(e=>e.removeEventListener("focusin",t,!1))}},[n,i,u]),s=M,l=f,D=(0,r.useRef)(),k=(0,r.useRef)(null),(0,o.useLayoutEffect)(()=>{let e=s.current;if(!l){k.current&&(cancelAnimationFrame(k.current),k.current=null);return}let t=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!m(s))return;let t=document.activeElement,n=s.current;if(!b(t,n))return;let r=w(v(n),{tabbable:!0},n);r.currentNode=t;let o=e.shiftKey?r.previousNode():r.nextNode();o||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,o=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),o&&T(o,!0)},n=e=>{(!c||E(c,s))&&b(e.target,s.current)?(c=s,D.current=e.target):m(s)&&!y(e.target,s)?D.current?D.current.focus():c&&P(c.current):m(s)&&(D.current=e.target)},r=e=>{k.current=requestAnimationFrame(()=>{m(s)&&!y(document.activeElement,s)&&(c=s,document.body.contains(e.target)?(D.current=e.target,D.current.focus()):c&&P(c.current))})};return document.addEventListener("keydown",t,!1),document.addEventListener("focusin",n,!1),e.forEach(e=>e.addEventListener("focusin",n,!1)),e.forEach(e=>e.addEventListener("focusout",r,!1)),()=>{document.removeEventListener("keydown",t,!1),document.removeEventListener("focusin",n,!1),e.forEach(e=>e.removeEventListener("focusin",n,!1)),e.forEach(e=>e.removeEventListener("focusout",r,!1))}},[s,l]),(0,r.useEffect)(()=>()=>{k.current&&cancelAnimationFrame(k.current)},[k]),function(e,t,n){let i=(0,r.useRef)("undefined"!=typeof document?document.activeElement:null);(0,o.useLayoutEffect)(()=>{let r=e.current;if(!t||n)return;let o=()=>{(!c||E(c,e))&&(c=e)};return document.addEventListener("focusin",o,!1),r.forEach(e=>e.addEventListener("focusin",o,!1)),()=>{document.removeEventListener("focusin",o,!1),r.forEach(e=>e.removeEventListener("focusin",o,!1))}},[e,n]),(0,o.useLayoutEffect)(()=>{if(!t)return;F.getTreeNode(e).nodeToRestore=i.current;let r=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey)return;let n=document.activeElement;if(!b(n,e.current))return;let r=F.getTreeNode(e).nodeToRestore,o=w(document.body,{tabbable:!0});o.currentNode=n;let i=t.shiftKey?o.previousNode():o.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null,F.getTreeNode(e).nodeToRestore=null),(!i||!b(i,e.current))&&r){o.currentNode=r;do i=t.shiftKey?o.previousNode():o.nextNode();while(b(i,e.current));if(t.preventDefault(),t.stopPropagation(),i)T(i,!0);else{var u;(u=r,y(u))?T(r,!0):n.blur()}}};return n||document.addEventListener("keydown",r,!0),()=>{n||document.removeEventListener("keydown",r,!0);let o=F.getTreeNode(e).nodeToRestore;if(t&&o&&(b(document.activeElement,e.current)||document.activeElement===document.body&&function(e){let t=F.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let i=F.clone();requestAnimationFrame(()=>{if(document.activeElement===document.body){let t=i.getTreeNode(e);for(;t;){if(t.nodeToRestore&&document.body.contains(t.nodeToRestore)){T(t.nodeToRestore);return}t=t.parent}for(t=i.getTreeNode(e);t;){if(t.scopeRef&&F.getTreeNode(t.scopeRef)){P(t.scopeRef.current,!0);return}t=t.parent}}})}}},[e,t,n])}(M,g,f),function(e,t){let n=r.useRef(t);(0,r.useEffect)(()=>{n.current&&(c=e,b(document.activeElement,c.current)||P(e.current)),n.current=!1},[e])}(M,h),(0,o.useLayoutEffect)(()=>{if(M)return()=>{let e=F.getTreeNode(M).parent.scopeRef;(M===c||E(M,c))&&(!e||F.getTreeNode(e))&&(c=e),F.removeTreeNode(M)}},[M,R]);let C=(d=M,{focusNext(e={}){let t=d.current,{from:n,tabbable:r,wrap:o,accept:i}=e,u=n||document.activeElement,s=t[0].previousElementSibling,a=w(v(t),{tabbable:r,accept:i},t);a.currentNode=b(u,t)?u:s;let c=a.nextNode();return!c&&o&&(a.currentNode=s,c=a.nextNode()),c&&T(c,!0),c},focusPrevious(e={}){let t=d.current,{from:n,tabbable:r,wrap:o,accept:i}=e,u=n||document.activeElement,s=t[t.length-1].nextElementSibling,a=w(v(t),{tabbable:r,accept:i},t);a.currentNode=b(u,t)?u:s;let c=a.previousNode();return!c&&o&&(a.currentNode=s,c=a.previousNode()),c&&T(c,!0),c},focusFirst(e={}){let t=d.current,{tabbable:n,accept:r}=e,o=w(v(t),{tabbable:n,accept:r},t);o.currentNode=t[0].previousElementSibling;let i=o.nextNode();return i&&T(i,!0),i},focusLast(e={}){let t=d.current,{tabbable:n,accept:r}=e,o=w(v(t),{tabbable:n,accept:r},t);o.currentNode=t[t.length-1].nextElementSibling;let i=o.previousNode();return i&&T(i,!0),i}});return r.createElement(a.Provider,{value:{scopeRef:M,focusManager:C}},r.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:L}),p,r.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:K}))}function d(){var e;return null===(e=(0,r.useContext)(a))||void 0===e?void 0:e.focusManager}let p=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],f=p.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";p.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let g=p.join(':not([hidden]):not([tabindex="-1"]),');function v(e){return e[0].parentElement}function m(e){let t=F.getTreeNode(c);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function b(e,t){return t.some(t=>t.contains(e))}function y(e,t=null){for(let{scopeRef:n}of F.traverse(F.getTreeNode(t)))if(b(e,n.current))return!0;return!1}function h(e){return y(e,c)}function E(e,t){var n;let r=null===(n=F.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function T(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(n){}}else try{s(e)}catch(r){}}function P(e,t=!0){let n=e[0].previousElementSibling,r=w(v(e),{tabbable:t},e);r.currentNode=n;let o=r.nextNode();t&&!o&&((r=w(v(e),{tabbable:!1},e)).currentNode=n,o=r.nextNode()),T(o)}function w(e,t,n){let r=(null==t?void 0:t.tabbable)?g:f,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var o;return(null==t?void 0:null===(o=t.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)&&function e(t,n){var r,o;return"#comment"!==t.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r="none"!==t&&"hidden"!==n&&"collapse"!==n;if(r){let{getComputedStyle:o}=e.ownerDocument.defaultView,{display:i,visibility:u}=o(e);r="none"!==i&&"hidden"!==u&&"collapse"!==u}return r}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||b(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(o.currentNode=t.from),o}function L(e,t={}){return{focusNext(n={}){let r=e.current;if(!r)return;let{from:o,tabbable:i=t.tabbable,wrap:u=t.wrap,accept:s=t.accept}=n,a=o||document.activeElement,c=w(r,{tabbable:i,accept:s});r.contains(a)&&(c.currentNode=a);let l=c.nextNode();return!l&&u&&(c.currentNode=r,l=c.nextNode()),l&&T(l,!0),l},focusPrevious(n=t){let r=e.current;if(!r)return;let{from:o,tabbable:i=t.tabbable,wrap:u=t.wrap,accept:s=t.accept}=n,a=o||document.activeElement,c=w(r,{tabbable:i,accept:s});if(r.contains(a))c.currentNode=a;else{let l=K(c);return l&&T(l,!0),l}let d=c.previousNode();return!d&&u&&(c.currentNode=r,d=K(c)),d&&T(d,!0),d},focusFirst(n=t){let r=e.current;if(!r)return;let{tabbable:o=t.tabbable,accept:i=t.accept}=n,u=w(r,{tabbable:o,accept:i}).nextNode();return u&&T(u,!0),u},focusLast(n=t){let r=e.current;if(!r)return;let{tabbable:o=t.tabbable,accept:i=t.accept}=n,u=w(r,{tabbable:o,accept:i}),s=K(u);return s&&T(s,!0),s}}}function K(e){let t,n;do(n=e.lastChild())&&(t=n);while(n);return t}class M{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null),o=new S({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e),n=t.parent;for(let r of this.traverse())r!==t&&t.nodeToRestore&&r.nodeToRestore&&t.scopeRef.current&&b(r.nodeToRestore,t.scopeRef.current)&&(r.nodeToRestore=t.nodeToRestore);let o=t.children;n.removeChild(t),o.length>0&&o.forEach(e=>n.addChild(e)),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.length>0)for(let t of e.children)yield*this.traverse(t)}clone(){let e=new M;for(let t of this.traverse())e.addTreeNode(t.scopeRef,t.parent.scopeRef,t.nodeToRestore);return e}constructor(){this.fastMap=new Map,this.root=new S({scopeRef:null}),this.fastMap.set(null,this.root)}}class S{addChild(e){this.children.push(e),e.parent=this}removeChild(e){this.children.splice(this.children.indexOf(e),1),e.parent=void 0}constructor(e){this.children=[],this.contain=!1,this.scopeRef=e.scopeRef}}let F=new M;function N(e={}){let{autoFocus:t=!1,isTextInput:n,within:o}=e,u=(0,r.useRef)({isFocused:!1,isFocusVisible:t||(0,i.isFocusVisible)()}),[s,a]=(0,r.useState)(!1),[c,l]=(0,r.useState)(()=>u.current.isFocused&&u.current.isFocusVisible),d=(0,r.useCallback)(()=>l(u.current.isFocused&&u.current.isFocusVisible),[]),p=(0,r.useCallback)(e=>{u.current.isFocused=e,a(e),d()},[d]);(0,i.useFocusVisibleListener)(e=>{u.current.isFocusVisible=e,d()},[],{isTextInput:n});let{focusProps:f}=(0,i.useFocus)({isDisabled:o,onFocusChange:p}),{focusWithinProps:g}=(0,i.useFocusWithin)({isDisabled:!o,onFocusWithinChange:p});return{isFocused:s,isFocusVisible:u.current.isFocused&&c,focusProps:o?g:f}}function R(e){let{children:t,focusClass:n,focusRingClass:i}=e,{isFocused:s,isFocusVisible:a,focusProps:c}=N(e),l=r.Children.only(t);return r.cloneElement(l,(0,o.mergeProps)(l.props,{...c,className:(0,u.Z)({[n||""]:s,[i||""]:a})}))}let D=r.createContext(null),k=r.forwardRef(function(e,t){let{children:n,...o}=e,i={...o,ref:t};return r.createElement(D.Provider,{value:i},n)});function C(e,t){let{focusProps:n}=(0,i.useFocus)(e),{keyboardProps:u}=(0,i.useKeyboard)(e),a=(0,o.mergeProps)(n,u),c=function(e){let t=(0,r.useContext)(D)||{};(0,o.useSyncRef)(t,e);let{ref:n,...i}=t;return i}(t),l=e.isDisabled?{}:c,d=(0,r.useRef)(e.autoFocus);return(0,r.useEffect)(()=>{d.current&&t.current&&s(t.current),d.current=!1},[t]),{focusableProps:(0,o.mergeProps)({...a,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},l)}}},12024:function(e,t,n){n.r(t),n.d(t,{PressResponder:function(){return P},Pressable:function(){return T},getInteractionModality:function(){return Y},isFocusVisible:function(){return W},setInteractionModality:function(){return X},useFocus:function(){return K},useFocusVisible:function(){return U},useFocusVisibleListener:function(){return G},useFocusWithin:function(){return B},useHover:function(){return Z},useInteractOutside:function(){return Q},useInteractionModality:function(){return V},useKeyboard:function(){return et},useLongPress:function(){return eo},useMove:function(){return en},usePress:function(){return d},useScrollWheel:function(){return er}});var r=n(30227),o=n(52983);let i="default",u="",s=new WeakMap;function a(e){(0,r.isIOS)()?("default"===i&&(u=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),i="disabled"):(e instanceof HTMLElement||e instanceof SVGElement)&&(s.set(e,e.style.userSelect),e.style.userSelect="none")}function c(e){if((0,r.isIOS)())"disabled"===i&&(i="restoring",setTimeout(()=>{(0,r.runAfterTransition)(()=>{"restoring"===i&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=u||""),u="",i="default")})},300));else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&s.has(e)){let t=s.get(e);"none"===e.style.userSelect&&(e.style.userSelect=t),""===e.getAttribute("style")&&e.removeAttribute("style"),s.delete(e)}}let l=o.createContext(null);function d(e){let{onPress:t,onPressChange:n,onPressStart:i,onPressEnd:u,onPressUp:s,isDisabled:d,isPressed:h,preventFocusOnPress:E,shouldCancelOnPointerExit:T,allowTextSelectionOnPress:P,ref:w,...L}=function(e){let t=(0,o.useContext)(l);if(t){let{register:n,...i}=t;e=(0,r.mergeProps)(i,e),n()}return(0,r.useSyncRef)(t,e.ref),e}(e),K=(0,o.useRef)(null);K.current={onPress:t,onPressChange:n,onPressStart:i,onPressEnd:u,onPressUp:s,isDisabled:d,shouldCancelOnPointerExit:T};let[M,S]=(0,o.useState)(!1),F=(0,o.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:N,removeAllGlobalListeners:R}=(0,r.useGlobalListeners)(),D=(0,o.useMemo)(()=>{let e=F.current,t=(t,n)=>{let{onPressStart:r,onPressChange:o,isDisabled:i}=K.current;i||e.didFirePressStart||(r&&r({type:"pressstart",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),o&&o(!0),e.didFirePressStart=!0,S(!0))},n=(t,n,r=!0)=>{let{onPressEnd:o,onPressChange:i,onPress:u,isDisabled:s}=K.current;e.didFirePressStart&&(e.ignoreClickAfterPress=!0,e.didFirePressStart=!1,o&&o({type:"pressend",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}),i&&i(!1),S(!1),u&&r&&!s&&u({type:"press",pointerType:n,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey,altKey:t.altKey}))},o=(e,t)=>{let{onPressUp:n,isDisabled:r}=K.current;!r&&n&&n({type:"pressup",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})},i=t=>{e.isPressed&&(e.isOverTarget&&n(v(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,R(),P||c(e.target))},u={onKeyDown(n){f(n.nativeEvent,n.currentTarget)&&n.currentTarget.contains(n.target)?(y(n.target,n.key)&&n.preventDefault(),n.stopPropagation(),e.isPressed||n.repeat||(e.target=n.currentTarget,e.isPressed=!0,t(n,"keyboard"),N(document,"keyup",s,!1))):"Enter"===n.key&&p(n.currentTarget)&&n.stopPropagation()},onKeyUp(t){f(t.nativeEvent,t.currentTarget)&&!t.repeat&&t.currentTarget.contains(t.target)&&o(v(e.target,t),"keyboard")},onClick(i){(!i||i.currentTarget.contains(i.target))&&i&&0===i.button&&(i.stopPropagation(),d&&i.preventDefault(),!e.ignoreClickAfterPress&&!e.ignoreEmulatedMouseEvents&&("virtual"===e.pointerType||(0,r.isVirtualClick)(i.nativeEvent))&&(d||E||(0,r.focusWithoutScrolling)(i.currentTarget),t(i,"virtual"),o(i,"virtual"),n(i,"virtual")),e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1)}},s=t=>{if(e.isPressed&&f(t,e.target)){y(t.target,t.key)&&t.preventDefault(),t.stopPropagation(),e.isPressed=!1;let r=t.target;n(v(e.target,t),"keyboard",e.target.contains(r)),R(),e.target instanceof HTMLElement&&e.target.contains(r)&&(p(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click()}};if("undefined"!=typeof PointerEvent){u.onPointerDown=n=>{if(0===n.button&&n.currentTarget.contains(n.target)){if((0,r.isVirtualPointerEvent)(n.nativeEvent)){e.pointerType="virtual";return}b(n.currentTarget)&&n.preventDefault(),e.pointerType=n.pointerType,n.stopPropagation(),e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=n.pointerId,e.target=n.currentTarget,d||E||(0,r.focusWithoutScrolling)(n.currentTarget),P||a(e.target),t(n,e.pointerType),N(document,"pointermove",l,!1),N(document,"pointerup",h,!1),N(document,"pointercancel",T,!1))}},u.onMouseDown=e=>{e.currentTarget.contains(e.target)&&0===e.button&&(b(e.currentTarget)&&e.preventDefault(),e.stopPropagation())},u.onPointerUp=t=>{t.currentTarget.contains(t.target)&&"virtual"!==e.pointerType&&0===t.button&&m(t,t.currentTarget)&&o(t,e.pointerType||t.pointerType)};let l=r=>{r.pointerId===e.activePointerId&&(m(r,e.target)?e.isOverTarget||(e.isOverTarget=!0,t(v(e.target,r),e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(v(e.target,r),e.pointerType,!1),K.current.shouldCancelOnPointerExit&&i(r)))},h=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&(m(t,e.target)?n(v(e.target,t),e.pointerType):e.isOverTarget&&n(v(e.target,t),e.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,e.pointerType=null,R(),P||c(e.target))},T=e=>{i(e)};u.onDragStart=e=>{e.currentTarget.contains(e.target)&&i(e)}}else{u.onMouseDown=n=>{0===n.button&&n.currentTarget.contains(n.target)&&(b(n.currentTarget)&&n.preventDefault(),n.stopPropagation(),e.ignoreEmulatedMouseEvents||(e.isPressed=!0,e.isOverTarget=!0,e.target=n.currentTarget,e.pointerType=(0,r.isVirtualClick)(n.nativeEvent)?"virtual":"mouse",d||E||(0,r.focusWithoutScrolling)(n.currentTarget),t(n,e.pointerType),N(document,"mouseup",w,!1)))},u.onMouseEnter=n=>{n.currentTarget.contains(n.target)&&(n.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,t(n,e.pointerType)))},u.onMouseLeave=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,n(t,e.pointerType,!1),K.current.shouldCancelOnPointerExit&&i(t)))},u.onMouseUp=t=>{t.currentTarget.contains(t.target)&&!e.ignoreEmulatedMouseEvents&&0===t.button&&o(t,e.pointerType)};let w=t=>{if(0===t.button){if(e.isPressed=!1,R(),e.ignoreEmulatedMouseEvents){e.ignoreEmulatedMouseEvents=!1;return}m(t,e.target)?n(v(e.target,t),e.pointerType):e.isOverTarget&&n(v(e.target,t),e.pointerType,!1),e.isOverTarget=!1}};u.onTouchStart=n=>{if(!n.currentTarget.contains(n.target))return;n.stopPropagation();let o=function(e){let{targetTouches:t}=e;return t.length>0?t[0]:null}(n.nativeEvent);o&&(e.activePointerId=o.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=n.currentTarget,e.pointerType="touch",d||E||(0,r.focusWithoutScrolling)(n.currentTarget),P||a(e.target),t(n,e.pointerType),N(window,"scroll",L,!0))},u.onTouchMove=r=>{if(!r.currentTarget.contains(r.target)||(r.stopPropagation(),!e.isPressed))return;let o=g(r.nativeEvent,e.activePointerId);o&&m(o,r.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,t(r,e.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,n(r,e.pointerType,!1),K.current.shouldCancelOnPointerExit&&i(r))},u.onTouchEnd=t=>{if(!t.currentTarget.contains(t.target)||(t.stopPropagation(),!e.isPressed))return;let r=g(t.nativeEvent,e.activePointerId);r&&m(r,t.currentTarget)?(o(t,e.pointerType),n(t,e.pointerType)):e.isOverTarget&&n(t,e.pointerType,!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,P||c(e.target),R()},u.onTouchCancel=t=>{t.currentTarget.contains(t.target)&&(t.stopPropagation(),e.isPressed&&i(t))};let L=t=>{e.isPressed&&t.target.contains(e.target)&&i({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};u.onDragStart=e=>{e.currentTarget.contains(e.target)&&i(e)}}return u},[N,d,E,R,P]);return(0,o.useEffect)(()=>()=>{P||c(F.current.target)},[P]),{isPressed:h||M,pressProps:(0,r.mergeProps)(L,D)}}function p(e){return"A"===e.tagName&&e.hasAttribute("href")}function f(e,t){let{key:n,code:r}=e,o=t.getAttribute("role");return("Enter"===n||" "===n||"Spacebar"===n||"Space"===r)&&!(t instanceof HTMLInputElement&&!E(t,n)||t instanceof HTMLTextAreaElement||t.isContentEditable)&&(!p(t)||"button"===o&&"Enter"!==n)&&!("link"===o&&"Enter"!==n)}function g(e,t){let n=e.changedTouches;for(let r=0;r<n.length;r++){let o=n[r];if(o.identifier===t)return o}return null}function v(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey}}function m(e,t){var n,r,o;let i=t.getBoundingClientRect(),u,s,a=(u=e.width/2||e.radiusX||0,s=e.height/2||e.radiusY||0,{top:e.clientY-s,right:e.clientX+u,bottom:e.clientY+s,left:e.clientX-u});return!(i.left>a.right)&&!(a.left>i.right)&&!(i.top>a.bottom)&&!(a.top>i.bottom)}function b(e){return!(e instanceof HTMLElement)||!e.draggable}function y(e,t){return e instanceof HTMLInputElement?!E(e,t):!(e instanceof HTMLButtonElement)||"submit"!==e.type}l.displayName="PressResponderContext";let h=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function E(e,t){return"checkbox"===e.type||"radio"===e.type?" "===t:h.has(e.type)}let T=o.forwardRef(({children:e,...t},n)=>{let i=(0,o.useRef)();n=null!=n?n:i;let{pressProps:u}=d({...t,ref:n}),s=o.Children.only(e);return o.cloneElement(s,{ref:n,...(0,r.mergeProps)(s.props,u)})}),P=o.forwardRef(({children:e,...t},n)=>{let i=(0,o.useRef)(!1),u=(0,o.useContext)(l),s=(0,r.mergeProps)(u||{},{...t,ref:n||(null==u?void 0:u.ref),register(){i.current=!0,u&&u.register()}});return(0,r.useSyncRef)(u,n),(0,o.useEffect)(()=>{i.current||console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.")},[]),o.createElement(l.Provider,{value:s},e)});class w{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function L(e){let t=(0,o.useRef)({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,(0,r.useLayoutEffect)(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]),(0,o.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,r=e=>{var r,o;t.current.isFocused=!1,n.disabled&&(null===(o=(r=t.current).onBlur)||void 0===o||o.call(r,new w("blur",e))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",r,{once:!0}),t.current.observer=new MutationObserver(()=>{t.current.isFocused&&n.disabled&&(t.current.observer.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[])}function K(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e,u=(0,o.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0},[r,i]),s=L(u),a=(0,o.useCallback)(e=>{e.target===e.currentTarget&&(n&&n(e),i&&i(!0),s(e))},[i,n,s]);return{focusProps:{onFocus:!t&&(n||i||r)?a:void 0,onBlur:!t&&(r||i)?u:null}}}let M=null,S=new Set,F=!1,N=!1,R=!1,D={Tab:!0,Escape:!0};function k(e,t){for(let n of S)n(e,t)}function C(e){var t;N=!0,!(e.metaKey||!(0,r.isMac)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)&&(M="keyboard",k("keyboard",e))}function x(e){M="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(N=!0,k("pointer",e))}function I(e){(0,r.isVirtualClick)(e)&&(N=!0,M="virtual")}function O(e){e.target!==window&&e.target!==document&&(N||R||(M="virtual",k("virtual",e)),N=!1,R=!1)}function A(){N=!1,R=!0}function H(){if("undefined"==typeof window||F)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){N=!0,e.apply(this,arguments)},document.addEventListener("keydown",C,!0),document.addEventListener("keyup",C,!0),document.addEventListener("click",I,!0),window.addEventListener("focus",O,!0),window.addEventListener("blur",A,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",x,!0),document.addEventListener("pointermove",x,!0),document.addEventListener("pointerup",x,!0)):(document.addEventListener("mousedown",x,!0),document.addEventListener("mousemove",x,!0),document.addEventListener("mouseup",x,!0)),F=!0}function W(){return"pointer"!==M}function Y(){return M}function X(e){M=e,k(e,null)}function V(){H();let[e,t]=(0,o.useState)(M);return(0,o.useEffect)(()=>{let e=()=>{t(M)};return S.add(e),()=>{S.delete(e)}},[]),e}function U(e={}){let{isTextInput:t,autoFocus:n}=e,[r,i]=(0,o.useState)(n||W());return G(e=>{i(e)},[t],{isTextInput:t}),{isFocusVisible:r}}function G(e,t,n){H(),(0,o.useEffect)(()=>{let t=(t,r)=>{var o,i,u;(!((o=null==n?void 0:n.isTextInput)&&"keyboard"===t&&r instanceof KeyboardEvent)||D[r.key])&&e(W())};return S.add(t),()=>{S.delete(t)}},t)}function B(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:i}=e,u=(0,o.useRef)({isFocusWithin:!1}),s=(0,o.useCallback)(e=>{u.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(u.current.isFocusWithin=!1,n&&n(e),i&&i(!1))},[n,i,u]),a=L(s),c=(0,o.useCallback)(e=>{u.current.isFocusWithin||(r&&r(e),i&&i(!0),u.current.isFocusWithin=!0,a(e))},[r,i,a]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:c,onBlur:s}}}"undefined"!=typeof document&&("loading"!==document.readyState?H():document.addEventListener("DOMContentLoaded",H));let _=!1,j=0;function q(){_=!0,setTimeout(()=>{_=!1},50)}function z(e){"touch"===e.pointerType&&q()}function J(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",z):document.addEventListener("touchend",q),j++,()=>{--j>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",z):document.removeEventListener("touchend",q))}}function Z(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[u,s]=(0,o.useState)(!1),a=(0,o.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,o.useEffect)(J,[]);let{hoverProps:c,triggerHoverEnd:l}=(0,o.useMemo)(()=>{let e=(e,r)=>{if(a.pointerType=r,i||"touch"===r||a.isHovered||!e.currentTarget.contains(e.target))return;a.isHovered=!0;let o=e.currentTarget;a.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),s(!0)},o=(e,t)=>{if(a.pointerType="",a.target=null,"touch"===t||!a.isHovered)return;a.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),s(!1)},u={};return"undefined"!=typeof PointerEvent?(u.onPointerEnter=t=>{_&&"mouse"===t.pointerType||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,e.pointerType)}):(u.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},u.onMouseEnter=t=>{a.ignoreEmulatedMouseEvents||_||e(t,"mouse"),a.ignoreEmulatedMouseEvents=!1},u.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,"mouse")}),{hoverProps:u,triggerHoverEnd:o}},[t,n,r,i,a]);return(0,o.useEffect)(()=>{i&&l({currentTarget:a.target},a.pointerType)},[i]),{hoverProps:c,isHovered:u}}function Q(e){let{ref:t,onInteractOutside:n,isDisabled:r,onInteractOutsideStart:i}=e,u=(0,o.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1,onInteractOutside:n,onInteractOutsideStart:i}).current;u.onInteractOutside=n,u.onInteractOutsideStart=i,(0,o.useEffect)(()=>{if(r)return;let e=e=>{$(e,t)&&u.onInteractOutside&&(u.onInteractOutsideStart&&u.onInteractOutsideStart(e),u.isPointerDown=!0)};if("undefined"!=typeof PointerEvent){let n=e=>{u.isPointerDown&&u.onInteractOutside&&$(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))};return document.addEventListener("pointerdown",e,!0),document.addEventListener("pointerup",n,!0),()=>{document.removeEventListener("pointerdown",e,!0),document.removeEventListener("pointerup",n,!0)}}{let o=e=>{u.ignoreEmulatedMouseEvents?u.ignoreEmulatedMouseEvents=!1:u.isPointerDown&&u.onInteractOutside&&$(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))},i=e=>{u.ignoreEmulatedMouseEvents=!0,u.onInteractOutside&&u.isPointerDown&&$(e,t)&&(u.isPointerDown=!1,u.onInteractOutside(e))};return document.addEventListener("mousedown",e,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",i,!0),()=>{document.removeEventListener("mousedown",e,!0),document.removeEventListener("mouseup",o,!0),document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",i,!0)}}},[t,u,r])}function $(e,t){if(e.button>0)return!1;if(e.target){let n=e.target.ownerDocument;if(!n||!n.documentElement.contains(e.target))return!1}return t.current&&!t.current.contains(e.target)}function ee(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}function et(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:ee(e.onKeyDown),onKeyUp:ee(e.onKeyUp)}}}function en(e){let{onMoveStart:t,onMove:n,onMoveEnd:i}=e,u=(0,o.useRef)({didMove:!1,lastPosition:null,id:null}),{addGlobalListener:s,removeGlobalListener:l}=(0,r.useGlobalListeners)();return{moveProps:(0,o.useMemo)(()=>{let e={},r=()=>{a(),u.current.didMove=!1},o=(e,r,o,i)=>{(0!==o||0!==i)&&(u.current.didMove||(u.current.didMove=!0,null==t||t({type:"movestart",pointerType:r,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey})),n({type:"move",pointerType:r,deltaX:o,deltaY:i,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey}))},d=(e,t)=>{c(),u.current.didMove&&(null==i||i({type:"moveend",pointerType:t,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey,altKey:e.altKey}))};if("undefined"==typeof PointerEvent){let p=e=>{0===e.button&&(o(e,"mouse",e.pageX-u.current.lastPosition.pageX,e.pageY-u.current.lastPosition.pageY),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY})},f=e=>{0===e.button&&(d(e,"mouse"),l(window,"mousemove",p,!1),l(window,"mouseup",f,!1))};e.onMouseDown=e=>{0===e.button&&(r(),e.stopPropagation(),e.preventDefault(),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY},s(window,"mousemove",p,!1),s(window,"mouseup",f,!1))};let g=e=>{let t=[...e.changedTouches].findIndex(({identifier:e})=>e===u.current.id);if(t>=0){let{pageX:n,pageY:r}=e.changedTouches[t];o(e,"touch",n-u.current.lastPosition.pageX,r-u.current.lastPosition.pageY),u.current.lastPosition={pageX:n,pageY:r}}},v=e=>{[...e.changedTouches].findIndex(({identifier:e})=>e===u.current.id)>=0&&(d(e,"touch"),u.current.id=null,l(window,"touchmove",g),l(window,"touchend",v),l(window,"touchcancel",v))};e.onTouchStart=e=>{if(0===e.changedTouches.length||null!=u.current.id)return;let{pageX:t,pageY:n,identifier:o}=e.changedTouches[0];r(),e.stopPropagation(),e.preventDefault(),u.current.lastPosition={pageX:t,pageY:n},u.current.id=o,s(window,"touchmove",g,!1),s(window,"touchend",v,!1),s(window,"touchcancel",v,!1)}}else{let m=e=>{if(e.pointerId===u.current.id){let t=e.pointerType||"mouse";o(e,t,e.pageX-u.current.lastPosition.pageX,e.pageY-u.current.lastPosition.pageY),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY}}},b=e=>{if(e.pointerId===u.current.id){let t=e.pointerType||"mouse";d(e,t),u.current.id=null,l(window,"pointermove",m,!1),l(window,"pointerup",b,!1),l(window,"pointercancel",b,!1)}};e.onPointerDown=e=>{0===e.button&&null==u.current.id&&(r(),e.stopPropagation(),e.preventDefault(),u.current.lastPosition={pageX:e.pageX,pageY:e.pageY},u.current.id=e.pointerId,s(window,"pointermove",m,!1),s(window,"pointerup",b,!1),s(window,"pointercancel",b,!1))}}let y=(e,t,n)=>{r(),o(e,"keyboard",t,n),d(e,"keyboard")};return e.onKeyDown=e=>{switch(e.key){case"Left":case"ArrowLeft":e.preventDefault(),e.stopPropagation(),y(e,-1,0);break;case"Right":case"ArrowRight":e.preventDefault(),e.stopPropagation(),y(e,1,0);break;case"Up":case"ArrowUp":e.preventDefault(),e.stopPropagation(),y(e,0,-1);break;case"Down":case"ArrowDown":e.preventDefault(),e.stopPropagation(),y(e,0,1)}},e},[u,t,n,i,s,l])}}function er(e,t){let{onScroll:n,isDisabled:i}=e,u=(0,o.useCallback)(e=>{!e.ctrlKey&&(e.preventDefault(),e.stopPropagation(),n&&n({deltaX:e.deltaX,deltaY:e.deltaY}))},[n]);(0,r.useEvent)(t,"wheel",i?null:u)}function eo(e){let{isDisabled:t,onLongPressStart:n,onLongPressEnd:i,onLongPress:u,threshold:s=500,accessibilityDescription:a}=e,c=(0,o.useRef)(null),{addGlobalListener:l,removeGlobalListener:p}=(0,r.useGlobalListeners)(),{pressProps:f}=d({isDisabled:t,onPressStart(e){if(("mouse"===e.pointerType||"touch"===e.pointerType)&&(n&&n({...e,type:"longpressstart"}),c.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),u&&u({...e,type:"longpress"}),c.current=null},s),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};l(e.target,"contextmenu",t,{once:!0}),l(window,"pointerup",()=>{setTimeout(()=>{p(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){c.current&&clearTimeout(c.current),i&&("mouse"===e.pointerType||"touch"===e.pointerType)&&i({...e,type:"longpressend"})}}),g=(0,r.useDescription)(u&&!t?a:null);return{longPressProps:(0,r.mergeProps)(f,g)}}}}]);