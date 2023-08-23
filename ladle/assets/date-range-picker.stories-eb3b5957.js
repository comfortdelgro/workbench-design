import{r as x,s as ee,R as W,j as n,a as I,F as le}from"./index-f44380ee.js";import"./index-848668cb.js";import"./index-1c484b2b.js";import{u as re,a as se,b as ie,c as de,d as oe,D as A,P as ce,e as ue}from"./useOverlayTriggerState-0f0973f8.js";import{u as he,a as be,b as H,c as me,f as fe,r as De,d as ye,e as ge,i as Q,g as k,h as _,D as q,t as J,j as X,k as Ce,p as Se,l as Y}from"./useCalendarState-bb1f7966.js";import{R as Pe}from"./range-calendar-eef6337f.js";import{u as ve}from"./use-dom-ref-586729b0.js";import{C as te}from"./calendar-195ea282.js";import{C as Ve}from"./components-46861628.js";import{B as Me}from"./button-75352c4c.js";import"./useEvent-3a93768a.js";import"./import-103c32e0.js";import"./real-module-dbbb62ef.js";import"./import-8d5aa74e.js";import"./clsx.m-1229b3e0.js";import"./arrow-right-2b08ba50.js";import"./index-947751b3.js";function Fe(e,l,o){var a,s;const{labelProps:u,fieldProps:d,descriptionProps:c,errorMessageProps:t}=re({...e,labelElementType:"span"}),h=d["aria-labelledby"]||d.id,{locale:V}=he(),b=l.formatValue(V,{month:"long"}),y=b?`selectedRangeDescription ${b.start} ${b.end}`:"",f=be(y),i={"aria-label":"startDate","aria-labelledby":h},D={"aria-label":"endDate","aria-labelledby":h},r=H(),P=H(),g=se(l,o),v=[f["aria-describedby"],d["aria-describedby"]].filter(Boolean).join(" ")||void 0,F=x.useMemo(()=>me(o,{accept:m=>m.id!==r}),[o,r]),O={[fe]:F,[De]:"presentation","aria-describedby":v,minValue:e.minValue,maxValue:e.maxValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationState:l.validationState},L=ye(e),{focusWithinProps:R}=ie({...e,isDisabled:l.isOpen,onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});return{groupProps:{...L,...g,...d,...f,...R,role:"group","aria-disabled":e.isDisabled||null,"aria-describedby":v,onKeyDown(m){l.isOpen||e.onKeyDown&&e.onKeyDown(m)},onKeyUp(m){l.isOpen||e.onKeyUp&&e.onKeyUp(m)}},labelProps:{...u,onClick:()=>{F.focusFirst()}},buttonProps:{...f,id:r,"aria-haspopup":"dialog","aria-label":"calendar","aria-labelledby":`${h} ${r}`,"aria-describedby":v,"aria-expanded":l.isOpen||void 0,onPress:()=>l.setOpen(!0)},dialogProps:{id:P,"aria-labelledby":`${h} ${r}`},startFieldProps:{...i,...O,value:(a=l.value)==null?void 0:a.start,onChange:m=>l.setDateTime("start",m),autoFocus:e.autoFocus},endFieldProps:{...D,...O,value:(s=l.value)==null?void 0:s.end,onChange:m=>l.setDateTime("end",m)},descriptionProps:c,errorMessageProps:t,calendarProps:{autoFocus:!0,value:l.dateRange,onChange:l.setDateRange,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,allowsNonContiguousRanges:e.allowsNonContiguousRanges,defaultFocusedValue:l.dateRange?void 0:e.placeholderValue,validationState:l.validationState,errorMessage:e.errorMessage}}}function Oe(e){var L,R;const l=de(e),[o,u]=ge(e.value,e.defaultValue||null,e.onChange);let[d,c]=x.useState(()=>o||{start:null,end:null});o==null&&d.start&&d.end&&(d={start:null,end:null},c(d));const t=o||d,h=a=>{c(a),a.start||a.end?u(a):u(null)},V=t.start||t.end||e.placeholderValue,[b]=oe(V,e.granularity),y=b==="hour"||b==="minute"||b==="second",f=e.shouldCloseOnSelect??!0;let[i,D]=x.useState(null),[r,P]=x.useState(null);t&&t.start&&t.end&&(i=t,"hour"in t.start&&(r=t));const g=(a,s)=>{a.end&&a.start&&s.end&&s.start&&(h({start:"timeZone"in s.start?s.start.set(J(a.start)):X(a.start,s.start),end:"timeZone"in s.end?s.end.set(J(a.end)):X(a.end,s.end)}),D(null),P(null))},v=a=>{let s=typeof f=="function"?f():f;y?s||a.start&&a.end&&(r!=null&&r.start)&&r.end?g(a,{start:(r==null?void 0:r.start)||k(e.placeholderValue),end:(r==null?void 0:r.end)||k(e.placeholderValue)}):D(a):a.start||a.end?h(a):!a.start||!a.end?(u({start:null,end:null}),D(null)):D(a),s&&a.start&&a.end&&l.setOpen(!1)},F=a=>{i!=null&&i.start&&i.end&&a.start&&a.end?g(i,a):P(a)},O=e.validationState||(t!=null&&(Q(t.start,e.minValue,e.maxValue)||Q(t.end,e.minValue,e.maxValue)||t.end!=null&&t.start!=null&&t.end.compare(t.start)<0||t.start&&((L=e.isDateUnavailable)!=null&&L.call(e,t.start))||t.end&&((R=e.isDateUnavailable)!=null&&R.call(e,t.end)))?"invalid":null);return{value:t,setValue:h,dateRange:i,timeRange:r,granularity:b,hasTime:y,setDate(a,s){v({...i,[a]:s})},setTime(a,s){F({...r,[a]:s})},setDateTime(a,s){h({...t,[a]:s})},setDateRange:v,setTimeRange:F,...l,setOpen(a){!a&&!(t.start&&t.end)&&(i!=null&&i.start)&&i.end&&y&&g(i,{start:(r==null?void 0:r.start)||k(e.placeholderValue),end:(r==null?void 0:r.end)||k(e.placeholderValue)}),l.setOpen(a)},validationState:O,formatValue(a,s){if(!t||!t.start||!t.end)return null;const m="timeZone"in t.start?t.start.timeZone:void 0,E=e.granularity||(t.start&&"minute"in t.start?"minute":"day"),T="timeZone"in t.end?t.end.timeZone:void 0,N=e.granularity||(t.end&&"minute"in t.end?"minute":"day"),ne=_(s,{granularity:E,timeZone:m??"UTC",hideTimeZone:!!e.hideTimeZone,hourCycle:e.hourCycle??24,showEra:t.start.calendar.identifier==="gregory"&&t.start.era==="BC"||t.end.calendar.identifier==="gregory"&&t.end.era==="BC"}),K=t.start.toDate(m||"UTC"),j=t.end.toDate(T||"UTC"),Z=new q(a,ne);let B;if(m===T&&E===N&&t.start.compare(t.end)!==0){try{const M=Z.formatRangeToParts(K,j);let $=-1;for(let C=0;C<M.length;C++){const U=M[C];if(U.source==="shared"&&U.type==="literal")$=C;else if(U.source==="endRange")break}let G="",z="";for(let C=0;C<M.length;C++)C<$?G+=M[C].value:C>$&&(z+=M[C].value);return{start:G,end:z}}catch{}B=Z}else{const M=_(s,{granularity:N,timeZone:T??"UTC",hideTimeZone:!!e.hideTimeZone,hourCycle:e.hourCycle??24});B=new q(a,M)}return{start:Z.format(K),end:B.format(j)}}}}function Le(e){const l=c=>typeof window<"u"?window.matchMedia(c).matches:!1,[o,u]=x.useState(l(e));function d(){u(l(e))}return x.useEffect(()=>{const c=window.matchMedia(e);return d(),c.addListener?c.addListener(d):c.addEventListener("change",d),()=>{c.removeListener?c.removeListener(d):c.removeEventListener("change",d)}},[e]),o}const Re=ee("div",{width:"fit-content","@max_768":{"& .date-range-fields":{flexDirection:"column",gap:"$6"},"&":{width:"100%"}}}),we=ee("div",{"& .date-range-fields":{display:"flex",gap:"$6"}}),xe=W.forwardRef((e,l)=>{const{startDateLabel:o,endDateLabel:u,shouldCloseOnSelect:d=!1,css:c={},errorMessage:t,helperText:h,maxValue:V,hasShortcuts:b,ctaButtonRender:y,visibleMonths:f,onSearchButtonClick:i,customShortcuts:D,...r}=e,P=Oe({...r,isReadOnly:e.isReadOnly?!0:!!e.isMobile,shouldCloseOnSelect:e.granularity?!0:d??!1}),g=ve(l),{labelProps:v,groupProps:F,startFieldProps:O,endFieldProps:L,buttonProps:R,dialogProps:a,calendarProps:s}=Fe({...r,isReadOnly:e.isReadOnly?!0:!!e.isMobile,"aria-label":"date range picker","aria-describedby":""},P,g),m={necessityIndicator:e.necessityIndicator,...O},E={necessityIndicator:e.necessityIndicator,...L},T=()=>e.isReadOnly?!0:!(!e.isReadOnly&&!e.isMobile||e.isMobile);return s.isReadOnly=T(),n(Re,{ref:g,css:c,className:"date-range-picker-wrapper",children:I(Ce,{children:[n(Te,{state:P,label:e.label,labelProps:v,groupProps:F,startFieldProps:m,endFieldProps:E,buttonProps:R,startDateLabel:o,endDateLabel:u,isInvalid:e.isInvalid,isReadOnly:e.isReadOnly,isMobile:e.isMobile,errorMessage:t,helperText:h}),n(Ie,{maxValue:V,state:P,calendarRef:g,dialogProps:a,calendarProps:s,hasShortcuts:b,ctaButtonRender:y,onSearchButtonClick:i,customShortcuts:D,css:e.calendarCSS,visibleMonths:f})]})})}),Te=W.forwardRef((e,l)=>{const{label:o,labelProps:u,groupProps:d,startFieldProps:c,endFieldProps:t,buttonProps:h,startDateLabel:V,endDateLabel:b,isInvalid:y,isMobile:f,isReadOnly:i=!1,errorMessage:D,helperText:r}=e;return I(we,{children:[n("span",{...u,className:"date-range-label",children:o}),n("div",{...d,ref:l,className:"date-range-inputs-body",children:I("div",{className:"date-range-fields",children:[n(A,{...c,label:V,buttonProps:h,isInvalid:y,isMobile:f,isReadOnly:i,errorMessage:D,helperText:r}),n(A,{...t,label:b,buttonProps:h,isInvalid:y,isMobile:f,isReadOnly:i})]})})]})}),Ie=e=>{const{state:l,calendarRef:o,dialogProps:u,calendarProps:d,css:c={},hasShortcuts:t=!1,maxValue:h=Se("2999-03-10"),ctaButtonRender:V,visibleMonths:b,onSearchButtonClick:y,customShortcuts:f}=e,{value:i,onChange:D,...r}=d,P=Le("(max-width: 768px)"),g=v=>{D&&D(v)};return n(le,{children:l.isOpen&&n(ce,{state:l,triggerRef:o,placement:"bottom start",offset:8,children:n(ue,{...u,"aria-describedby":u["aria-describedby"]??"","aria-label":u["aria-label"]??"","aria-labelledby":u["aria-labelledby"]??"",children:n(Pe,{css:c,state:l,hasFooter:!0,"aria-label":"","aria-labelledby":"",...i?{value:i}:{},onChange:g,...r,maxValue:h,hasShortcuts:t,ctaButtonRender:V,onSearchButtonClick:y,customShortcuts:f,visibleMonths:b||(P?1:2)})})})})},S=xe,{I18nProvider:ae,useDateFormatter:Ee}=te.I18N,{getLocalTimeZone:w,parseDate:p}=te.InternationalizedDate,Xe=()=>n(ae,{locale:"en-SG",children:I(Ve,{children:[n("h3",{children:"Basic"}),n(S,{startDateLabel:"Start date",endDateLabel:"End date"}),n("br",{}),n("h3",{children:"Disabled"}),n(S,{isDisabled:!0,startDateLabel:"Start date",endDateLabel:"End date"}),n("h3",{children:"Read only"}),n(S,{isReadOnly:!0,startDateLabel:"Start date",endDateLabel:"End date"}),n("h3",{children:"Invalid"}),n(S,{isInvalid:!0,startDateLabel:"Start date",endDateLabel:"End date"}),n("h3",{children:"Min & Max"}),n(S,{startDateLabel:"Start date",endDateLabel:"End date",minValue:Y(w()),maxValue:Y(w()).add({days:7})}),n("h3",{children:"Is Mobile"}),n(S,{startDateLabel:"Start date",endDateLabel:"End date",isMobile:!0}),n("h3",{children:"Helper texts"}),n(S,{isInvalid:!0,isRequired:!0,helperText:"Weekend is excluded",errorMessage:"Must not include weekend",startDateLabel:"Start date",endDateLabel:"End date"}),n("h3",{children:"Shortcuts"}),n(S,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0}),n("h3",{children:"Custom Shortcuts Range Calendar"}),n(S,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0,customShortcuts:e=>{const l=[{label:"Custom Shortcut",getValue:()=>({start:null,end:null})}];return[...e,...l]},ctaButtonRender:n(Me,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})}),Ye=()=>{const[e,l]=W.useState({start:p("2020-02-03"),end:p("2020-02-08")}),o=Ee({dateStyle:"long"});return I(ae,{locale:"en-SG",children:[n("h3",{children:"Controlled"}),n("p",{children:e.start&&e.end?o.formatRange(e.start.toDate(w()),e.end.toDate(w())):`${e.start&&o.format(e.start.toDate(w()))} - ${e.end&&o.format(e.end.toDate(w()))}`}),n(S,{value:e,shouldCloseOnSelect:!0,startDateLabel:"Start Date",endDateLabel:"End Date",onChange:u=>l(u)})]})},pe=()=>n(S,{});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ye as Controlled,pe as Default,Xe as Variants};