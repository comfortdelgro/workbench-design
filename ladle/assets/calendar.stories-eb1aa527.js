import{a as r,j as t,R as s}from"./index-82b8714e.js";import{C as a}from"./index-6fd1a856.js";import{C as l}from"./components-4cf80d1e.js";import"./real-module-be21ce05.js";import"./module-11645758.js";import"./_define_property-1764bf98.js";import"./calendar-header-9f0ca609.js";import"./module-f5b5988b.js";import"./module-8a8221e0.js";import"./module-0425fddf.js";import"./module-32c36482.js";import"./use-dom-ref-66181667.js";import"./index-1156f3dc.js";import"./module-40cb4056.js";import"./index-27141f54.js";import"./button-b17523a3.js";import"./module-8470bddb.js";import"./index-7ed89495.js";const{useDateFormatter:p}=a.I18N,{getLocalTimeZone:o,parseDate:c,today:n}=a.InternationalizedDate,T=()=>{const[e,i]=s.useState(c(n(o()).toString())),m=p({dateStyle:"full"});return r(l,{children:[r("p",{children:[t("b",{children:"Selected date:"}),t("span",{style:{marginLeft:"4px"},children:m.format(e.toDate(o()))})]}),t(a,{value:e,maxValue:n(o()),onChange:d=>i(d)})]})},V={decorators:[e=>r("div",{children:[t("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),t(e,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Variants,V as default};
