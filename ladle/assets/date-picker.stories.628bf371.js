import{x as m,b as i,c as n,a as g,d as x}from"./real-module.383a099c.js";import{s as u,R as b,a as s,j as e,F as C,r as y}from"./index.5181e2f2.js";import{$ as S,a as v,D as k,P as w,b as R}from"./popover.f873cd00.js";import{C as I}from"./calendar.a8164558.js";import{u as F}from"./use-dom-ref.7ee095ce.js";import{C as O}from"./components.9c4cf978.js";import"./module.30462d86.js";import"./index.949660c6.js";import"./module.aad0ebc4.js";import"./module.929ab166.js";import"./module.a9791687.js";import"./module.2d65ff14.js";import"./module.ab5f4f67.js";import"./module.a236d7df.js";import"./index.6d5d3def.js";import"./button.f727647e.js";import"./module.ea96ac1c.js";import"./index.9427df45.js";import"./module.685b792d.js";import"./module.e6709bf7.js";import"./calendar-header.afce7218.js";const V=u("div",{width:"fit-content"}),j=u("div",{"& .date-range-fields":{display:"flex",gap:"$6"}}),W=b.forwardRef((a,t)=>{const{css:r={}}=a,l=S({...a,shouldCloseOnSelect:()=>{var p;return(p=a.shouldCloseOnSelect)!=null?p:!1}}),o=F(t),{groupProps:d,fieldProps:f,buttonProps:h,dialogProps:$,calendarProps:P}=v(a,l,o),D={necessityIndicator:a.necessityIndicator,...f};return s(V,{css:r,children:[e(_,{ref:o,groupProps:d,fieldProps:D,buttonProps:h,isInvalid:a.isInvalid,label:a.label}),e(E,{state:l,onCancel:a.onCancel,calendarProps:P,calendarRef:o,dialogProps:$})]})}),_=b.forwardRef((a,t)=>{const{groupProps:r,fieldProps:l,buttonProps:o,label:d,isInvalid:f}=a;return e(j,{...r,ref:t,children:e(k,{...l,buttonProps:o,label:d,isInvalid:f})})}),E=a=>{const{state:t,calendarRef:r,dialogProps:l,calendarProps:o,onCancel:d}=a;return e(C,{children:t.isOpen&&e(w,{state:t,triggerRef:r,offset:8,placement:"bottom start",children:e(R,{...l,children:e(I,{state:t,hasFooter:!0,onCancelCallback:d,...o})})})})},c=W,oe=()=>e(m,{locale:"en-SG",children:s(O,{children:[e("h3",{children:"Basic"}),e(c,{isReadOnly:!0,label:"Date",defaultValue:i(n())}),e("h3",{children:"Disabled"}),e(c,{isDisabled:!0,label:"Date",defaultValue:i(n())}),e("h3",{children:"Invalid"}),e(c,{isInvalid:!0,label:"Date",defaultValue:i(n())})]})}),le=()=>{const[a,t]=y.exports.useState(g(i(n()).toString())),r=x({dateStyle:"full"});return s(m,{locale:"en-SG",children:[s("p",{children:[e("b",{children:"Selected date:"}),e("span",{style:{marginLeft:"4px"},children:r.format(a.toDate(n()))})]}),e(c,{label:"Date",value:a,defaultValue:i(n()),onChange:t})]})},ne={decorators:[a=>s("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(a,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{le as Controlled,oe as Variants,ne as default};
