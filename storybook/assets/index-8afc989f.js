import{j as e}from"./jsx-runtime-9ef10904.js";import{R as c}from"./index-6c164b11.js";import{C as t,c as i}from"./objectToCSS-e90bd687.js";import{u as f}from"./use-dom-ref-7c72e1a5.js";const _="_header_khngw_11",b="_content_khngw_63",D="_container_khngw_109",h={header:_,content:b,container:D},a=c.forwardRef((d,s)=>{const{children:r,css:o={},...n}=d,p=f(s);return e.jsx(t,{css:o,children:e.jsx("div",{...n,ref:p,className:i(h.container,"cdg-dashboard-sidecard"),children:r})})});a.__docgenInfo={description:"",methods:[],displayName:"DashboardSidecard"};const m=c.forwardRef((d,s)=>{const{children:r,css:o={},...n}=d;return e.jsx(t,{css:o,children:e.jsx("div",{ref:s,...n,className:i(h.content,"cdg-dashboard-sidecard-content"),children:r})})});m.__docgenInfo={description:"",methods:[],displayName:"DashboardSidecardContent"};const l=c.forwardRef((d,s)=>{const{children:r,css:o={},...n}=d;return e.jsx(t,{css:o,children:e.jsx("div",{...n,ref:s,className:i(h.header,"cdg-dashboard-sidecard-header"),children:r})})});l.__docgenInfo={description:"",methods:[],displayName:"DashboardSidecardHeader"};a.Header=l;a.Content=m;a.displayName="DashboardSidecard";a.Header.displayName="DashboardSidecard.Header";a.Content.displayName="DashboardSidecard.Content";export{a as D};