import{a as r,j as t,R as s}from"./index-7edb77fa.js";import{C as a}from"./index-27a4076a.js";import{C as l}from"./components-93d0bf0d.js";import"./real-module-e3e6000d.js";import"./module-f4aada32.js";import"./_define_property-1764bf98.js";import"./calendar-header-52823304.js";import"./module-19b13009.js";import"./module-8a8221e0.js";import"./module-a56e2f8c.js";import"./module-fd4388ac.js";import"./use-dom-ref-2d1a83ce.js";import"./index-c5a2327f.js";import"./module-986c7f6a.js";import"./index-1a3a8504.js";import"./button-981461ab.js";import"./module-9e43f3ec.js";import"./index-0357f7e1.js";const{useDateFormatter:p}=a.I18N,{getLocalTimeZone:o,parseDate:c,today:n}=a.InternationalizedDate,T=()=>{const[e,i]=s.useState(c(n(o()).toString())),m=p({dateStyle:"full"});return r(l,{children:[r("p",{children:[t("b",{children:"Selected date:"}),t("span",{style:{marginLeft:"4px"},children:m.format(e.toDate(o()))})]}),t(a,{value:e,maxValue:n(o()),onChange:d=>i(d)})]})},V={decorators:[e=>r("div",{children:[t("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),t(e,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Variants,V as default};
