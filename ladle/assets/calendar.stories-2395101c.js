import{a as r,j as t,R as s}from"./index-b56eb51a.js";import{C as a}from"./index-18bd4976.js";import{C as l}from"./components-ea661ed6.js";import"./real-module-6066a88d.js";import"./module-39d76a4a.js";import"./_define_property-1764bf98.js";import"./calendar-header-f8f843b2.js";import"./module-0227cc24.js";import"./module-8a8221e0.js";import"./module-e5c2c17c.js";import"./module-be80db77.js";import"./use-dom-ref-19fc324c.js";import"./index-1156f3dc.js";import"./module-2506c213.js";import"./index-a7bce409.js";import"./button-f2d22ed3.js";import"./module-04faeec4.js";import"./index-11f55683.js";const{useDateFormatter:p}=a.I18N,{getLocalTimeZone:o,parseDate:c,today:n}=a.InternationalizedDate,T=()=>{const[e,i]=s.useState(c(n(o()).toString())),m=p({dateStyle:"full"});return r(l,{children:[r("p",{children:[t("b",{children:"Selected date:"}),t("span",{style:{marginLeft:"4px"},children:m.format(e.toDate(o()))})]}),t(a,{value:e,maxValue:n(o()),onChange:d=>i(d)})]})},V={decorators:[e=>r("div",{children:[t("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),t(e,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Variants,V as default};
