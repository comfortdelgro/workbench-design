import{R as s,a as r,j as e}from"./index-f44380ee.js";import"./index-1c484b2b.js";import{C as a}from"./calendar-195ea282.js";import{C as l}from"./components-46861628.js";import"./useCalendarState-bb1f7966.js";import"./import-8d5aa74e.js";import"./clsx.m-1229b3e0.js";import"./use-dom-ref-586729b0.js";import"./arrow-right-2b08ba50.js";import"./index-848668cb.js";import"./button-75352c4c.js";const{useDateFormatter:c}=a.I18N,{getLocalTimeZone:o,parseDate:p,today:n}=a.InternationalizedDate,I=()=>{const[t,i]=s.useState(p(n(o()).toString())),m=c({dateStyle:"full"});return r(l,{children:[r("p",{children:[e("b",{children:"Selected date:"}),e("span",{style:{marginLeft:"4px"},children:t?m.format(t.toDate(o())):"Invalid date"})]}),e(a,{value:t,minValue:n(o()),onChange:d=>{i(d)},hasFooter:!0})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{I as Variants};
