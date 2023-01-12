import{r as g,R as ie}from"./index.5181e2f2.js";import{n as Ge,b as je,o as ze,p as Fe,q as Ye,d as D,r as qe,e as k,s as Q,t as Re,u as Ke,v as Ie,g as Xe,$ as Ze,h as Je}from"./module.a9791687.js";import{_ as ee}from"./_define_property.7aa556df.js";const ke=7e3;let j=null;function jt(t,e="assertive",r=ke){j||(j=new Qe),j.announce(t,e,r)}class Qe{createLog(e){let r=document.createElement("div");return r.setAttribute("role","log"),r.setAttribute("aria-live",e),r.setAttribute("aria-relevant","additions"),r}destroy(){!this.node||(document.body.removeChild(this.node),this.node=null)}announce(e,r="assertive",a=ke){if(!this.node)return;let s=document.createElement("div");s.textContent=e,r==="assertive"?this.assertiveLog.appendChild(s):this.politeLog.appendChild(s),e!==""&&setTimeout(()=>{s.remove()},a)}clear(e){!this.node||((!e||e==="assertive")&&(this.assertiveLog.innerHTML=""),(!e||e==="polite")&&(this.politeLog.innerHTML=""))}constructor(){this.node=document.createElement("div"),this.node.dataset.liveAnnouncer="true",Object.assign(this.node.style,{border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:1,whiteSpace:"nowrap"}),this.assertiveLog=this.createLog("assertive"),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog("polite"),this.node.appendChild(this.politeLog),document.body.prepend(this.node)}}class et{getStringForLocale(e,r){let a=this.strings[r];a||(a=tt(r,this.strings,this.defaultLocale),this.strings[r]=a);let s=a[e];if(!s)throw new Error(`Could not find intl message ${e} in ${r} locale`);return s}constructor(e,r="en-US"){this.strings={...e},this.defaultLocale=r}}function tt(t,e,r="en-US"){if(e[t])return e[t];let a=rt(t);if(e[a])return e[a];for(let s in e)if(s.startsWith(a+"-"))return e[s];return e[r]}function rt(t){return Intl.Locale?new Intl.Locale(t).language:t.split("-")[0]}const pe=new Map,be=new Map;class nt{format(e,r){let a=this.strings.getStringForLocale(e,this.locale);return typeof a=="function"?a(r,this):a}plural(e,r,a="cardinal"){let s=r["="+e];if(s)return typeof s=="function"?s():s;let o=this.locale+":"+a,d=pe.get(o);d||(d=new Intl.PluralRules(this.locale,{type:a}),pe.set(o,d));let f=d.select(e);return s=r[f]||r.other,typeof s=="function"?s():s}number(e){let r=be.get(this.locale);return r||(r=new Intl.NumberFormat(this.locale),be.set(this.locale,r)),r.format(e)}select(e,r){let a=e[r]||e.other;return typeof a=="function"?a():a}constructor(e,r){this.locale=e,this.strings=r}}let z=new Map,te=!1;try{te=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let V=!1;try{V=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const Oe={degree:{narrow:{default:"\xB0","ja-JP":" \u5EA6","zh-TW":"\u5EA6","sl-SI":" \xB0"}}};class at{format(e){let r="";if(!te&&this.options.signDisplay!=null?r=ot(this.numberFormatter,this.options.signDisplay,e):r=this.numberFormatter.format(e),this.options.style==="unit"&&!V){var a;let{unit:s,unitDisplay:o="short",locale:d}=this.resolvedOptions(),f=(a=Oe[s])===null||a===void 0?void 0:a[o];r+=f[d]||f.default}return r}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,r){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,r);if(r<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} \u2013 ${this.format(r)}`}formatRangeToParts(e,r){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,r);if(r<e)throw new RangeError("End date must be >= start date");let a=this.numberFormatter.formatToParts(e),s=this.numberFormatter.formatToParts(r);return[...a.map(o=>({...o,source:"startRange"})),{type:"literal",value:" \u2013 ",source:"shared"},...s.map(o=>({...o,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!te&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!V&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,r={}){this.numberFormatter=st(e,r),this.options=r}}function st(t,e={}){let{numberingSystem:r}=e;if(r&&t.indexOf("-u-nu-")===-1&&(t=`${t}-u-nu-${r}`),e.style==="unit"&&!V){var a;let{unit:d,unitDisplay:f="short"}=e;if(!d)throw new Error('unit option must be provided with style: "unit"');if(!(!((a=Oe[d])===null||a===void 0)&&a[f]))throw new Error(`Unsupported unit ${d} with unitDisplay = ${f}`);e={...e,style:"decimal"}}let s=t+(e?Object.entries(e).sort((d,f)=>d[0]<f[0]?-1:1).join():"");if(z.has(s))return z.get(s);let o=new Intl.NumberFormat(t,e);return z.set(s,o),o}function ot(t,e,r){if(e==="auto")return t.format(r);if(e==="never")return t.format(Math.abs(r));{let a=!1;if(e==="always"?a=r>0||Object.is(r,0):e==="exceptZero"&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):a=r>0),a){let s=t.format(-r),o=t.format(r),d=s.replace(o,"").replace(/\u200e|\u061C/,"");return[...d].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),s.replace(o,"!!!").replace(d,"+").replace("!!!",o)}else return t.format(r)}}const it=new RegExp("^.*\\(.*\\).*$"),lt=["latn","arab","hanidec"];class zt{parse(e){return Y(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,r,a){return Y(this.locale,this.options,e).isValidPartialNumber(e,r,a)}getNumberingSystem(e){return Y(this.locale,this.options,e).options.numberingSystem}constructor(e,r={}){this.locale=e,this.options=r}}const ge=new Map;function Y(t,e,r){let a=$e(t,e);if(!t.includes("-nu-")&&!a.isValidPartialNumber(r)){for(let s of lt)if(s!==a.options.numberingSystem){let o=$e(t+(t.includes("-u-")?"-nu-":"-u-nu-")+s,e);if(o.isValidPartialNumber(r))return o}}return a}function $e(t,e){let r=t+(e?Object.entries(e).sort((s,o)=>s[0]<o[0]?-1:1).join():""),a=ge.get(r);return a||(a=new ut(t,e),ge.set(r,a)),a}class ut{parse(e){let r=this.sanitize(e);r=U(r,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let a=r?+r:NaN;if(isNaN(a))return NaN;if(this.options.currencySign==="accounting"&&it.test(e)&&(a=-1*a),this.options.style==="percent"){a/=100;var s;a=+a.toFixed(((s=this.options.maximumFractionDigits)!==null&&s!==void 0?s:0)+2)}return a}sanitize(e){return e=e.replace(this.symbols.literals,""),e=e.replace("-",this.symbols.minusSign),this.options.numberingSystem==="arab"&&(e=e.replace(",",this.symbols.decimal),e=e.replace(String.fromCharCode(1548),this.symbols.decimal),e=U(e,".",this.symbols.group)),this.options.locale==="fr-FR"&&(e=U(e,".",String.fromCharCode(8239))),e}isValidPartialNumber(e,r=-1/0,a=1/0){return e=this.sanitize(e),e.startsWith(this.symbols.minusSign)&&r<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&a>0&&(e=e.slice(this.symbols.plusSign.length)),e.startsWith(this.symbols.group)?!1:(e=U(e,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,""),e.length===0)}constructor(e,r={}){this.formatter=new Intl.NumberFormat(e,r),this.options=this.formatter.resolvedOptions(),this.symbols=ct(this.formatter,this.options,r)}}const he=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function ct(t,e,r){var a,s,o,d;let f=t.formatToParts(-10000.111),$=t.formatToParts(10000.111),m=t.formatToParts(1);var u;let y=(u=(a=f.find(h=>h.type==="minusSign"))===null||a===void 0?void 0:a.value)!==null&&u!==void 0?u:"-",b=(s=$.find(h=>h.type==="plusSign"))===null||s===void 0?void 0:s.value;!b&&((r==null?void 0:r.signDisplay)==="exceptZero"||(r==null?void 0:r.signDisplay)==="always")&&(b="+");let p=(o=f.find(h=>h.type==="decimal"))===null||o===void 0?void 0:o.value,v=(d=f.find(h=>h.type==="group"))===null||d===void 0?void 0:d.value,x=f.filter(h=>!he.has(h.type)).map(h=>ve(h.value)),R=m.filter(h=>!he.has(h.type)).map(h=>ve(h.value)),w=[...new Set([...R,...x])].sort((h,S)=>S.length-h.length),M=w.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${w.join("|")}|[\\p{White_Space}]`,"gu"),A=[...new Intl.NumberFormat(e.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(A.map((h,S)=>[h,S])),L=new RegExp(`[${A.join("")}]`,"g");return{minusSign:y,plusSign:b,decimal:p,group:v,literals:M,numeral:L,index:h=>String(n.get(h))}}function U(t,e,r){return t.replaceAll?t.replaceAll(e,r):t.split(e).join(r)}function ve(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}const dt=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),ft=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function pt(t){if(Intl.Locale){let r=new Intl.Locale(t).maximize().script;return dt.has(r)}let e=t.split("-")[0];return ft.has(e)}function Ne(){let t=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([t])}catch{t="en-US"}return{locale:t,direction:pt(t)?"rtl":"ltr"}}let re=Ne(),H=new Set;function me(){re=Ne();for(let t of H)t(re)}function bt(){let t=Ge(),[e,r]=g.exports.useState(re);return g.exports.useEffect(()=>(H.size===0&&window.addEventListener("languagechange",me),H.add(r),()=>{H.delete(r),H.size===0&&window.removeEventListener("languagechange",me)}),[]),t?{locale:"en-US",direction:"ltr"}:e}const gt=ie.createContext(null);function le(){let t=bt();return g.exports.useContext(gt)||t}const ye=new WeakMap;function $t(t){let e=ye.get(t);return e||(e=new et(t),ye.set(t,e)),e}function Yt(t){let{locale:e}=le(),r=g.exports.useMemo(()=>$t(t),[t]);return g.exports.useMemo(()=>new nt(e,r),[e,r])}function qt(t={}){let{locale:e}=le();return g.exports.useMemo(()=>new at(e,t),[e,t])}let q=new Map;function Xt(t){let{locale:e}=le(),r=e+(t?Object.entries(t).sort((s,o)=>s[0]<o[0]?-1:1).join():"");if(q.has(r))return q.get(r);let a=new Intl.Collator(e,t);return q.set(r,a),a}let O="default",ne="",_=new WeakMap;function Pe(t){Re()?(O==="default"&&(ne=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),O="disabled"):(t instanceof HTMLElement||t instanceof SVGElement)&&(_.set(t,t.style.userSelect),t.style.userSelect="none")}function W(t){if(Re()){if(O!=="disabled")return;O="restoring",setTimeout(()=>{Ke(()=>{O==="restoring"&&(document.documentElement.style.webkitUserSelect==="none"&&(document.documentElement.style.webkitUserSelect=ne||""),ne="",O="default")})},300)}else if((t instanceof HTMLElement||t instanceof SVGElement)&&t&&_.has(t)){let e=_.get(t);t.style.userSelect==="none"&&(t.style.userSelect=e),t.getAttribute("style")===""&&t.removeAttribute("style"),_.delete(t)}}const He=ie.createContext(null);He.displayName="PressResponderContext";function ht(t){let e=g.exports.useContext(He);if(e){let{register:r,...a}=e;t=D(a,t),r()}return Ie(e,t.ref),t}function vt(t){let{onPress:e,onPressChange:r,onPressStart:a,onPressEnd:s,onPressUp:o,isDisabled:d,isPressed:f,preventFocusOnPress:$,shouldCancelOnPointerExit:m,allowTextSelectionOnPress:u,ref:y,...b}=ht(t),p=g.exports.useRef(null);p.current={onPress:e,onPressChange:r,onPressStart:a,onPressEnd:s,onPressUp:o,isDisabled:d,shouldCancelOnPointerExit:m};let[v,x]=g.exports.useState(!1),R=g.exports.useRef({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,didFirePressStart:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null}),{addGlobalListener:w,removeAllGlobalListeners:M}=Fe(),A=g.exports.useMemo(()=>{let n=R.current,L=(l,E)=>{let{onPressStart:i,onPressChange:c,isDisabled:B}=p.current;B||n.didFirePressStart||(i&&i({type:"pressstart",pointerType:E,target:l.currentTarget,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}),c&&c(!0),n.didFirePressStart=!0,x(!0))},T=(l,E,i=!0)=>{let{onPressEnd:c,onPressChange:B,onPress:fe,isDisabled:Ve}=p.current;!n.didFirePressStart||(n.ignoreClickAfterPress=!0,n.didFirePressStart=!1,c&&c({type:"pressend",pointerType:E,target:l.currentTarget,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}),B&&B(!1),x(!1),fe&&i&&!Ve&&fe({type:"press",pointerType:E,target:l.currentTarget,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey}))},h=(l,E)=>{let{onPressUp:i,isDisabled:c}=p.current;c||i&&i({type:"pressup",pointerType:E,target:l.currentTarget,shiftKey:l.shiftKey,metaKey:l.metaKey,ctrlKey:l.ctrlKey,altKey:l.altKey})},S=l=>{n.isPressed&&(n.isOverTarget&&T(C(n.target,l),n.pointerType,!1),n.isPressed=!1,n.isOverTarget=!1,n.activePointerId=null,n.pointerType=null,M(),u||W(n.target))},P={onKeyDown(l){X(l.nativeEvent,l.currentTarget)&&l.currentTarget.contains(l.target)?(Ee(l.target,l.key)&&l.preventDefault(),l.stopPropagation(),!n.isPressed&&!l.repeat&&(n.target=l.currentTarget,n.isPressed=!0,L(l,"keyboard"),w(document,"keyup",_e,!1))):l.key==="Enter"&&ae(l.currentTarget)&&l.stopPropagation()},onKeyUp(l){X(l.nativeEvent,l.currentTarget)&&!l.repeat&&l.currentTarget.contains(l.target)&&h(C(n.target,l),"keyboard")},onClick(l){l&&!l.currentTarget.contains(l.target)||l&&l.button===0&&(l.stopPropagation(),d&&l.preventDefault(),!n.ignoreClickAfterPress&&!n.ignoreEmulatedMouseEvents&&(n.pointerType==="virtual"||Q(l.nativeEvent))&&(!d&&!$&&k(l.currentTarget),L(l,"virtual"),h(l,"virtual"),T(l,"virtual")),n.ignoreEmulatedMouseEvents=!1,n.ignoreClickAfterPress=!1)}},_e=l=>{if(n.isPressed&&X(l,n.target)){Ee(l.target,l.key)&&l.preventDefault(),l.stopPropagation(),n.isPressed=!1;let E=l.target;T(C(n.target,l),"keyboard",n.target.contains(E)),M(),n.target instanceof HTMLElement&&n.target.contains(E)&&(ae(n.target)||n.target.getAttribute("role")==="link")&&n.target.click()}};if(typeof PointerEvent<"u"){P.onPointerDown=c=>{if(!(c.button!==0||!c.currentTarget.contains(c.target))){if(qe(c.nativeEvent)){n.pointerType="virtual";return}Z(c.currentTarget)&&c.preventDefault(),n.pointerType=c.pointerType,c.stopPropagation(),n.isPressed||(n.isPressed=!0,n.isOverTarget=!0,n.activePointerId=c.pointerId,n.target=c.currentTarget,!d&&!$&&k(c.currentTarget),u||Pe(n.target),L(c,n.pointerType),w(document,"pointermove",l,!1),w(document,"pointerup",E,!1),w(document,"pointercancel",i,!1))}},P.onMouseDown=c=>{!c.currentTarget.contains(c.target)||c.button===0&&(Z(c.currentTarget)&&c.preventDefault(),c.stopPropagation())},P.onPointerUp=c=>{!c.currentTarget.contains(c.target)||n.pointerType==="virtual"||c.button===0&&K(c,c.currentTarget)&&h(c,n.pointerType||c.pointerType)};let l=c=>{c.pointerId===n.activePointerId&&(K(c,n.target)?n.isOverTarget||(n.isOverTarget=!0,L(C(n.target,c),n.pointerType)):n.isOverTarget&&(n.isOverTarget=!1,T(C(n.target,c),n.pointerType,!1),p.current.shouldCancelOnPointerExit&&S(c)))},E=c=>{c.pointerId===n.activePointerId&&n.isPressed&&c.button===0&&(K(c,n.target)?T(C(n.target,c),n.pointerType):n.isOverTarget&&T(C(n.target,c),n.pointerType,!1),n.isPressed=!1,n.isOverTarget=!1,n.activePointerId=null,n.pointerType=null,M(),u||W(n.target))},i=c=>{S(c)};P.onDragStart=c=>{!c.currentTarget.contains(c.target)||S(c)}}else{P.onMouseDown=i=>{i.button!==0||!i.currentTarget.contains(i.target)||(Z(i.currentTarget)&&i.preventDefault(),i.stopPropagation(),!n.ignoreEmulatedMouseEvents&&(n.isPressed=!0,n.isOverTarget=!0,n.target=i.currentTarget,n.pointerType=Q(i.nativeEvent)?"virtual":"mouse",!d&&!$&&k(i.currentTarget),L(i,n.pointerType),w(document,"mouseup",l,!1)))},P.onMouseEnter=i=>{!i.currentTarget.contains(i.target)||(i.stopPropagation(),n.isPressed&&!n.ignoreEmulatedMouseEvents&&(n.isOverTarget=!0,L(i,n.pointerType)))},P.onMouseLeave=i=>{!i.currentTarget.contains(i.target)||(i.stopPropagation(),n.isPressed&&!n.ignoreEmulatedMouseEvents&&(n.isOverTarget=!1,T(i,n.pointerType,!1),p.current.shouldCancelOnPointerExit&&S(i)))},P.onMouseUp=i=>{!i.currentTarget.contains(i.target)||!n.ignoreEmulatedMouseEvents&&i.button===0&&h(i,n.pointerType)};let l=i=>{if(i.button===0){if(n.isPressed=!1,M(),n.ignoreEmulatedMouseEvents){n.ignoreEmulatedMouseEvents=!1;return}K(i,n.target)?T(C(n.target,i),n.pointerType):n.isOverTarget&&T(C(n.target,i),n.pointerType,!1),n.isOverTarget=!1}};P.onTouchStart=i=>{if(!i.currentTarget.contains(i.target))return;i.stopPropagation();let c=mt(i.nativeEvent);!c||(n.activePointerId=c.identifier,n.ignoreEmulatedMouseEvents=!0,n.isOverTarget=!0,n.isPressed=!0,n.target=i.currentTarget,n.pointerType="touch",!d&&!$&&k(i.currentTarget),u||Pe(n.target),L(i,n.pointerType),w(window,"scroll",E,!0))},P.onTouchMove=i=>{if(!i.currentTarget.contains(i.target)||(i.stopPropagation(),!n.isPressed))return;let c=Te(i.nativeEvent,n.activePointerId);c&&K(c,i.currentTarget)?n.isOverTarget||(n.isOverTarget=!0,L(i,n.pointerType)):n.isOverTarget&&(n.isOverTarget=!1,T(i,n.pointerType,!1),p.current.shouldCancelOnPointerExit&&S(i))},P.onTouchEnd=i=>{if(!i.currentTarget.contains(i.target)||(i.stopPropagation(),!n.isPressed))return;let c=Te(i.nativeEvent,n.activePointerId);c&&K(c,i.currentTarget)?(h(i,n.pointerType),T(i,n.pointerType)):n.isOverTarget&&T(i,n.pointerType,!1),n.isPressed=!1,n.activePointerId=null,n.isOverTarget=!1,n.ignoreEmulatedMouseEvents=!0,u||W(n.target),M()},P.onTouchCancel=i=>{!i.currentTarget.contains(i.target)||(i.stopPropagation(),n.isPressed&&S(i))};let E=i=>{n.isPressed&&i.target.contains(n.target)&&S({currentTarget:n.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})};P.onDragStart=i=>{!i.currentTarget.contains(i.target)||S(i)}}return P},[w,d,$,M,u]);return g.exports.useEffect(()=>()=>{u||W(R.current.target)},[u]),{isPressed:f||v,pressProps:D(b,A)}}function ae(t){return t.tagName==="A"&&t.hasAttribute("href")}function X(t,e){const{key:r,code:a}=t,s=e,o=s.getAttribute("role");return(r==="Enter"||r===" "||r==="Spacebar"||a==="Space")&&!(s instanceof HTMLInputElement&&!Ae(s,r)||s instanceof HTMLTextAreaElement||s.isContentEditable)&&(!ae(s)||o==="button"&&r!=="Enter")&&!(o==="link"&&r!=="Enter")}function mt(t){const{targetTouches:e}=t;return e.length>0?e[0]:null}function Te(t,e){const r=t.changedTouches;for(let a=0;a<r.length;a++){const s=r[a];if(s.identifier===e)return s}return null}function C(t,e){return{currentTarget:t,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,metaKey:e.metaKey,altKey:e.altKey}}function yt(t){let e=t.width/2||t.radiusX||0,r=t.height/2||t.radiusY||0;return{top:t.clientY-r,right:t.clientX+e,bottom:t.clientY+r,left:t.clientX-e}}function Pt(t,e){return!(t.left>e.right||e.left>t.right||t.top>e.bottom||e.top>t.bottom)}function K(t,e){let r=e.getBoundingClientRect(),a=yt(t);return Pt(r,a)}function Z(t){return!(t instanceof HTMLElement)||!t.draggable}function Ee(t,e){return t instanceof HTMLInputElement?!Ae(t,e):t instanceof HTMLButtonElement?t.type!=="submit":!0}const Tt=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function Ae(t,e){return t.type==="checkbox"||t.type==="radio"?e===" ":Tt.has(t.type)}class Et{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,r){this.nativeEvent=r,this.target=r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget,this.bubbles=r.bubbles,this.cancelable=r.cancelable,this.defaultPrevented=r.defaultPrevented,this.eventPhase=r.eventPhase,this.isTrusted=r.isTrusted,this.timeStamp=r.timeStamp,this.type=e}}function Be(t){let e=g.exports.useRef({isFocused:!1,onBlur:t,observer:null});return e.current.onBlur=t,ze(()=>{const r=e.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]),g.exports.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){e.current.isFocused=!0;let a=r.target,s=o=>{var d,f;e.current.isFocused=!1,a.disabled&&((f=(d=e.current).onBlur)===null||f===void 0||f.call(d,new Et("blur",o))),e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};a.addEventListener("focusout",s,{once:!0}),e.current.observer=new MutationObserver(()=>{e.current.isFocused&&a.disabled&&(e.current.observer.disconnect(),a.dispatchEvent(new FocusEvent("blur")),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),e.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[])}function St(t){let{isDisabled:e,onFocus:r,onBlur:a,onFocusChange:s}=t;const o=g.exports.useCallback($=>{if($.target===$.currentTarget)return a&&a($),s&&s(!1),!0},[a,s]),d=Be(o),f=g.exports.useCallback($=>{$.target===$.currentTarget&&(r&&r($),s&&s(!0),d($))},[s,r,d]);return{focusProps:{onFocus:!e&&(r||s||a)?f:void 0,onBlur:!e&&(a||s)?o:null}}}let N=null,xt=new Set,Se=!1,F=!1,se=!1;function ue(t,e){for(let r of xt)r(t,e)}function wt(t){return!(t.metaKey||!Xe()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function xe(t){F=!0,wt(t)&&(N="keyboard",ue("keyboard",t))}function I(t){N="pointer",(t.type==="mousedown"||t.type==="pointerdown")&&(F=!0,ue("pointer",t))}function Lt(t){Q(t)&&(F=!0,N="virtual")}function Ct(t){t.target===window||t.target===document||(!F&&!se&&(N="virtual",ue("virtual",t)),F=!1,se=!1)}function Mt(){F=!1,se=!0}function we(){if(typeof window>"u"||Se)return;let t=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){F=!0,t.apply(this,arguments)},document.addEventListener("keydown",xe,!0),document.addEventListener("keyup",xe,!0),document.addEventListener("click",Lt,!0),window.addEventListener("focus",Ct,!0),window.addEventListener("blur",Mt,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",I,!0),document.addEventListener("pointermove",I,!0),document.addEventListener("pointerup",I,!0)):(document.addEventListener("mousedown",I,!0),document.addEventListener("mousemove",I,!0),document.addEventListener("mouseup",I,!0)),Se=!0}typeof document<"u"&&(document.readyState!=="loading"?we():document.addEventListener("DOMContentLoaded",we));function Zt(){return N!=="pointer"}function Dt(){return N}function Jt(t){let{isDisabled:e,onBlurWithin:r,onFocusWithin:a,onFocusWithinChange:s}=t,o=g.exports.useRef({isFocusWithin:!1}),d=g.exports.useCallback(m=>{o.current.isFocusWithin&&!m.currentTarget.contains(m.relatedTarget)&&(o.current.isFocusWithin=!1,r&&r(m),s&&s(!1))},[r,s,o]),f=Be(d),$=g.exports.useCallback(m=>{o.current.isFocusWithin||(a&&a(m),s&&s(!0),o.current.isFocusWithin=!0,f(m))},[a,s,f]);return e?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:$,onBlur:d}}}let G=!1,J=0;function oe(){G=!0,setTimeout(()=>{G=!1},50)}function Le(t){t.pointerType==="touch"&&oe()}function Ft(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",Le):document.addEventListener("touchend",oe),J++,()=>{J--,!(J>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",Le):document.removeEventListener("touchend",oe))}}function Qt(t){let{onHoverStart:e,onHoverChange:r,onHoverEnd:a,isDisabled:s}=t,[o,d]=g.exports.useState(!1),f=g.exports.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;g.exports.useEffect(Ft,[]);let{hoverProps:$,triggerHoverEnd:m}=g.exports.useMemo(()=>{let u=(p,v)=>{if(f.pointerType=v,s||v==="touch"||f.isHovered||!p.currentTarget.contains(p.target))return;f.isHovered=!0;let x=p.currentTarget;f.target=x,e&&e({type:"hoverstart",target:x,pointerType:v}),r&&r(!0),d(!0)},y=(p,v)=>{if(f.pointerType="",f.target=null,v==="touch"||!f.isHovered)return;f.isHovered=!1;let x=p.currentTarget;a&&a({type:"hoverend",target:x,pointerType:v}),r&&r(!1),d(!1)},b={};return typeof PointerEvent<"u"?(b.onPointerEnter=p=>{G&&p.pointerType==="mouse"||u(p,p.pointerType)},b.onPointerLeave=p=>{!s&&p.currentTarget.contains(p.target)&&y(p,p.pointerType)}):(b.onTouchStart=()=>{f.ignoreEmulatedMouseEvents=!0},b.onMouseEnter=p=>{!f.ignoreEmulatedMouseEvents&&!G&&u(p,"mouse"),f.ignoreEmulatedMouseEvents=!1},b.onMouseLeave=p=>{!s&&p.currentTarget.contains(p.target)&&y(p,"mouse")}),{hoverProps:b,triggerHoverEnd:y}},[e,r,a,s,f]);return g.exports.useEffect(()=>{s&&m({currentTarget:f.target},f.pointerType)},[s]),{hoverProps:$,isHovered:o}}function Ce(t){if(!t)return;let e=!0;return r=>{let a={...r,preventDefault(){r.preventDefault()},isDefaultPrevented(){return r.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){e=!1}};t(a),e&&r.stopPropagation()}}function Rt(t){return{keyboardProps:t.isDisabled?{}:{onKeyDown:Ce(t.onKeyDown),onKeyUp:Ce(t.onKeyUp)}}}function er(t,e){let{onScroll:r,isDisabled:a}=t,s=g.exports.useCallback(o=>{o.ctrlKey||(o.preventDefault(),o.stopPropagation(),r&&r({deltaX:o.deltaX,deltaY:o.deltaY}))},[r]);je(e,"wheel",a?null:s)}const Kt=500;function tr(t){let{isDisabled:e,onLongPressStart:r,onLongPressEnd:a,onLongPress:s,threshold:o=Kt,accessibilityDescription:d}=t;const f=g.exports.useRef(null);let{addGlobalListener:$,removeGlobalListener:m}=Fe(),{pressProps:u}=vt({isDisabled:e,onPressStart(b){if((b.pointerType==="mouse"||b.pointerType==="touch")&&(r&&r({...b,type:"longpressstart"}),f.current=setTimeout(()=>{b.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),s&&s({...b,type:"longpress"}),f.current=null},o),b.pointerType==="touch")){let p=v=>{v.preventDefault()};$(b.target,"contextmenu",p,{once:!0}),$(window,"pointerup",()=>{setTimeout(()=>{m(b.target,"contextmenu",p)},30)},{once:!0})}},onPressEnd(b){f.current&&clearTimeout(f.current),a&&(b.pointerType==="mouse"||b.pointerType==="touch")&&a({...b,type:"longpressend"})}}),y=Ye(s&&!e?d:null);return{longPressProps:D(u,y)}}function It(t){if(Dt()==="virtual"){let e=document.activeElement;Ke(()=>{document.activeElement===e&&document.contains(t)&&k(t)})}else k(t)}function kt(t){if(!(t instanceof HTMLElement)&&!(t instanceof SVGElement))return!1;let{display:e,visibility:r}=t.style,a=e!=="none"&&r!=="hidden"&&r!=="collapse";if(a){const{getComputedStyle:s}=t.ownerDocument.defaultView;let{display:o,visibility:d}=s(t);a=o!=="none"&&d!=="hidden"&&d!=="collapse"}return a}function Ot(t,e){return!t.hasAttribute("hidden")&&(t.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}function Ue(t,e){return t.nodeName!=="#comment"&&kt(t)&&Ot(t,e)&&(!t.parentElement||Ue(t.parentElement,t))}const ce=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],Nt=ce.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";ce.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const Ht=ce.join(':not([hidden]):not([tabindex="-1"]),');function We(t,e){return e.some(r=>r.contains(t))}function rr(t,e,r){let a=e!=null&&e.tabbable?Ht:Nt,s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode(o){var d;return!(e==null||(d=e.from)===null||d===void 0)&&d.contains(o)?NodeFilter.FILTER_REJECT:o.matches(a)&&Ue(o)&&(!r||We(o,r))&&(!(e!=null&&e.accept)||e.accept(o))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return e!=null&&e.from&&(s.currentNode=e.from),s}class de{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,r,a){let s=this.fastMap.get(r!=null?r:null),o=new Me({scopeRef:e});s.addChild(o),o.parent=s,this.fastMap.set(e,o),a&&(o.nodeToRestore=a)}removeTreeNode(e){if(e===null)return;let r=this.fastMap.get(e),a=r.parent;for(let o of this.traverse())o!==r&&r.nodeToRestore&&o.nodeToRestore&&r.scopeRef.current&&We(o.nodeToRestore,r.scopeRef.current)&&(o.nodeToRestore=r.nodeToRestore);let s=r.children;a.removeChild(r),s.length>0&&s.forEach(o=>a.addChild(o)),this.fastMap.delete(r.scopeRef)}*traverse(e=this.root){if(e.scopeRef!=null&&(yield e),e.children.length>0)for(let r of e.children)yield*this.traverse(r)}clone(){let e=new de;for(let r of this.traverse())e.addTreeNode(r.scopeRef,r.parent.scopeRef,r.nodeToRestore);return e}constructor(){ee(this,"fastMap",new Map),this.root=new Me({scopeRef:null}),this.fastMap.set(null,this.root)}}class Me{addChild(e){this.children.push(e),e.parent=this}removeChild(e){this.children.splice(this.children.indexOf(e),1),e.parent=void 0}constructor(e){ee(this,"children",[]),ee(this,"contain",!1),this.scopeRef=e.scopeRef}}new de;let At=ie.createContext(null);function Bt(t){let e=g.exports.useContext(At)||{};Ie(e,t);let{ref:r,...a}=e;return a}function Ut(t,e){let{focusProps:r}=St(t),{keyboardProps:a}=Rt(t),s=D(r,a),o=Bt(e),d=t.isDisabled?{}:o,f=g.exports.useRef(t.autoFocus);return g.exports.useEffect(()=>{f.current&&e.current&&It(e.current),f.current=!1},[e]),{focusableProps:D({...s,tabIndex:t.excludeFromTabOrder&&!t.isDisabled?-1:void 0},d)}}function Wt(t,e){let{inputElementType:r="input",isDisabled:a=!1,isRequired:s=!1,isReadOnly:o=!1,validationState:d,type:f="text",onChange:$=()=>{}}=t,{focusableProps:m}=Ut(t,e),{labelProps:u,fieldProps:y,descriptionProps:b,errorMessageProps:p}=Ze(t),v=Je(t,{labelable:!0});const x={type:f,pattern:t.pattern};return{labelProps:u,inputProps:D(v,r==="input"&&x,{disabled:a,readOnly:o,"aria-required":s||void 0,"aria-invalid":d==="invalid"||void 0,"aria-errormessage":t["aria-errormessage"],"aria-activedescendant":t["aria-activedescendant"],"aria-autocomplete":t["aria-autocomplete"],"aria-haspopup":t["aria-haspopup"],value:t.value,defaultValue:t.value?void 0:t.defaultValue,onChange:R=>$(R.target.value),autoComplete:t.autoComplete,maxLength:t.maxLength,minLength:t.minLength,name:t.name,placeholder:t.placeholder,inputMode:t.inputMode,onCopy:t.onCopy,onCut:t.onCut,onPaste:t.onPaste,onCompositionEnd:t.onCompositionEnd,onCompositionStart:t.onCompositionStart,onCompositionUpdate:t.onCompositionUpdate,onSelect:t.onSelect,onBeforeInput:t.onBeforeInput,onInput:t.onInput,...m,...y}),descriptionProps:b,errorMessageProps:p}}function De(){return typeof window<"u"&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"}function nr(t,e,r){let a=g.exports.useRef(e);a.current=e,g.exports.useEffect(()=>{if(!De())return;let u=r.current,y=b=>{let p=a.current,v;switch(b.inputType){case"historyUndo":case"historyRedo":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":v=u.value.slice(0,u.selectionStart)+u.value.slice(u.selectionEnd);break;case"deleteContentForward":v=u.selectionEnd===u.selectionStart?u.value.slice(0,u.selectionStart)+u.value.slice(u.selectionEnd+1):u.value.slice(0,u.selectionStart)+u.value.slice(u.selectionEnd);break;case"deleteContentBackward":v=u.selectionEnd===u.selectionStart?u.value.slice(0,u.selectionStart-1)+u.value.slice(u.selectionStart):u.value.slice(0,u.selectionStart)+u.value.slice(u.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":v=u.value.slice(u.selectionStart);break;default:b.data!=null&&(v=u.value.slice(0,u.selectionStart)+b.data+u.value.slice(u.selectionEnd));break}(v==null||!p.validate(v))&&b.preventDefault()};return u.addEventListener("beforeinput",y,!1),()=>{u.removeEventListener("beforeinput",y,!1)}},[r,a]);let s=De()?null:u=>{let y=u.target.value.slice(0,u.target.selectionStart)+u.data+u.target.value.slice(u.target.selectionEnd);e.validate(y)||u.preventDefault()},{labelProps:o,inputProps:d,descriptionProps:f,errorMessageProps:$}=Wt(t,r),m=g.exports.useRef(null);return{inputProps:D(d,{onBeforeInput:s,onCompositionStart(){let{value:u,selectionStart:y,selectionEnd:b}=r.current;m.current={value:u,selectionStart:y,selectionEnd:b}},onCompositionEnd(){if(!e.validate(r.current.value)){let{value:u,selectionStart:y,selectionEnd:b}=m.current;r.current.value=u,r.current.setSelectionRange(y,b),e.setInputValue(u)}}}),labelProps:o,descriptionProps:f,errorMessageProps:$}}export{le as $,It as a,vt as b,tr as c,Xt as d,rr as e,Jt as f,Qt as g,Zt as h,Yt as i,Wt as j,jt as k,St as l,er as m,qt as n,nr as o,at as p,zt as q};
