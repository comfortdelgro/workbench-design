import{d as u,h,K as a,$ as i,e as $,N as b,_ as p}from"./import-c22940b6.js";import{a as c,j as e,R as g}from"./index-f1a30790.js";import"./index-d9315967.js";import{R as n}from"./range-calendar-faa61d45.js";import{C as f}from"./components-05bfb5e5.js";import{B as w}from"./button-a4fa884c.js";import"./clsx.m-30223e4c.js";import"./index-96027412.js";import"./use-dom-ref-b16a0995.js";import"./useCalendarState-ac4c88d2.js";import"./useEvent-a29c16e9.js";const _=()=>{const[t,r]=g.useState({start:u("2020-02-03"),end:u("2020-02-08")}),o=h({dateStyle:"long"});return c(f,{children:[t.start&&t.end?o.formatRange(t.start.toDate(a()),t.end.toDate(a())):`${t.start&&o.format(t.start.toDate(a()))} - ${t.end&&o.format(t.end.toDate(a()))}`,e(n,{value:t,onChange:s=>{r(s)},hasFooter:!0})]})},j=()=>{const{locale:t}=i(),r=$(a()).subtract({weeks:2}),o=b(r,t),s=p(r,t);return c(f,{children:[e("h3",{children:"Footer"}),e(n,{hasFooter:!0}),e("h3",{children:"Footer & Shorcuts"}),e(n,{hasFooter:!0,hasShortcuts:!0,onSearchButtonClick:()=>{alert("search button callback")}}),e("h3",{children:"Custom Footer & Custom Shorcuts"}),e(n,{hasFooter:!0,hasShortcuts:!0,customShortcuts:(l,d)=>{const m=[{label:"Custom Shortcut (Two weeks ago)",isDisable:d(o)||d(s),getValue:()=>({start:o,end:s})}];return[...l,...m]},ctaButtonRender:e(w,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})},O={decorators:[t=>c("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(t,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_ as Controlled,j as Variants,O as default};