"use client";import{j as n}from"./jsx-runtime-ea7736fc.js";import{R as l}from"./index-6c164b11.js";import{C as d}from"./objectToCSS-aff350d4.js";import{p as u}from"./pick-child-c116e6b4.js";import{u as f}from"./use-dom-ref-7c72e1a5.js";import{c as C}from"./string-de12cf5f.js";const I="_subBannerImage_1klt7_7",N="_subBannerBottom_1klt7_21",$="_subBannerTitle_1klt7_41",j="_subBannerDescription_1klt7_58",x="_bottomContentContainer_1klt7_76",P="_subBanner_1klt7_7",k="_subBannerPrimary_1klt7_103",R="_subBannerSecondary_1klt7_107",D="_subBannerBottomPrimary_1klt7_111",T="_subBannerBottomSecondary_1klt7_115",v="_bottomContentContainerPrimary_1klt7_119",E="_bottomContentContainerSecondary_1klt7_123",w="_subBannerImagePrimary_1klt7_129",F="_subBannerImageSecondary_1klt7_133",t={subBannerImage:I,subBannerBottom:N,subBannerTitle:$,subBannerDescription:j,bottomContentContainer:x,subBanner:P,subBannerPrimary:k,subBannerSecondary:R,subBannerBottomPrimary:D,subBannerBottomSecondary:T,bottomContentContainerPrimary:v,bottomContentContainerSecondary:E,subBannerImagePrimary:w,subBannerImageSecondary:F},B=l.forwardRef((i,r)=>{const{children:e,css:c={},className:a="",...s}=i;return n.jsx(d,{css:c,childrenRef:r,children:n.jsx("p",{ref:r,...s,className:`cdg-sub-banner-description ${a} ${t.subBannerDescription}`,children:e})})});B.__docgenInfo={description:"",methods:[],displayName:"SubBannerDescription"};const _=l.forwardRef((i,r)=>{const{css:e={},className:c="",variant:a="primary",id:s="cdg-sub-banner-image",...m}=i,b=f(r);return n.jsx(d,{css:e,childrenRef:b,children:n.jsx("img",{className:`cdg-sub-banner-image ${c} ${t.subBannerImage} ${t[`subBannerImage${C(a)}`]}`,...m,ref:b,id:s})})});_.__docgenInfo={description:"",methods:[],displayName:"SubBannerImage"};const p=l.forwardRef((i,r)=>{const{children:e,css:c={},className:a="",...s}=i,m=()=>typeof e=="string"?n.jsx(n.Fragment,{children:e}):e;return n.jsx(d,{css:c,childrenRef:r,children:n.jsx("h1",{className:`cdg-sub-banner-title ${a} ${t.subBannerTitle}`,ref:r,...s,children:m()})})});p.__docgenInfo={description:"",methods:[],displayName:"SubBannerTitle"};const o=l.forwardRef((i,r)=>{const{children:e,css:c={},className:a="",variant:s="primary",...m}=i,b=f(r),{child:y}=u(e,_),g=()=>{if(l.isValidElement(y))return l.cloneElement(y,{variant:s})},{child:S}=u(e,p),{child:h}=u(e,B);return n.jsx(d,{css:c,childrenRef:b,children:s=="primary"?n.jsxs("div",{className:`cdg-sub-banner ${a} ${t.subBanner} `,ref:b,...m,children:[g(),n.jsx("div",{className:`cdg-sub-banner-bottom ${t.subBannerBottom} `,children:n.jsxs("div",{className:`cdg-bottom-content-container ${t.bottomContentContainer} `,children:[S,h]})})]}):n.jsxs("div",{className:`cdg-sub-banner ${a} ${t.subBanner} ${t.subBannerSecondary}`,ref:b,...m,children:[g(),n.jsxs("div",{className:`cdg-bottom-content-container ${t.bottomContentContainer} ${t.bottomContentContainerSecondary}`,children:[S,h]})]})})});o.__docgenInfo={description:"",methods:[],displayName:"SubBanner"};o.Image=_;o.Title=p;o.Description=B;o.Image.displayName="SubBanner.Image";o.Title.displayName="SubBanner.Title";o.Description.displayName="SubBanner.Description";o.displayName="SubBanner";export{o as S};
