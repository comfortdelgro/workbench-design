import{o as g}from"./index-f439fe92.js";import{s,R as l,j as r,a as d,F as j}from"./index-5e72961f.js";import"./index-b70dfe66.js";import{I as h}from"./index-06ffeb8e.js";import{C as x}from"./components-985c45bd.js";import{p as m}from"./pick-child-c1616f8a.js";import{u as p}from"./use-dom-ref-efd20e6c.js";import{B as f}from"./button-cef3b33f.js";import"./index.es-ab72e13c.js";const b=s("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center","& *":{widht:"100%",height:"100%"}}),F=s("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"100%",display:"flex",justifyContent:"flex-end"}),y=s("p",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",fontFamily:"$sans",size:"$body2",lineHeight:"$normal",fontWeight:"$normal"}),E=s("h3",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",height:"100%",fontFamily:"$sans",size:"$header5",lineHeight:"$normal",fontWeight:"$semibold",display:"flex",alignItems:"center"}),N=s("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"$5_5",height:"$4_5",display:"flex",alignItems:"center"}),P=s("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"100%",height:"$9",display:"flex",alignItems:"center",gap:"$4"}),O=s("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"$4",flexDirection:"collumn",justifyContent:"flex-start",gap:"$4",borderRadius:"$1",variants:{variant:{primary:{width:"$138",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",display:"flex",flexDirection:"column",backgroundColor:"$background"},secondary:{width:"$127_25",height:"$181",padding:"$8",backgroundColor:"#F6F7F8",borderRadius:"0px 4px 4px 0px",display:"flex",flexDirection:"column",justifyContent:"space-between",[`${b}`]:{height:"66%"},[`${E}`]:{height:"$12",fontSize:"$header1",justifyContent:"center"},[`${y}`]:{height:"$12",fontSize:"$body3",color:"gray80",justifyContent:"center",textAlign:"center"}}}},defaultVariants:{variant:"primary"}}),B=l.forwardRef((n,t)=>{const{children:a,css:o={},...c}=n,i=p(t);return r(F,{css:o,ref:i,...c,children:a})}),$=B,H=l.forwardRef((n,t)=>{const{children:a,css:o={},...c}=n,i=p(t);return r(y,{css:o,ref:i,...c,children:a})}),I=H,K=l.forwardRef((n,t)=>{const{children:a,css:o={},...c}=n,i=p(t);return r(N,{css:o,ref:i,...c,children:a})}),w=K,_=l.forwardRef((n,t)=>{const{children:a,css:o={},...c}=n,i=p(t);return r(b,{css:o,ref:i,...c,children:a})}),S=_,q=l.forwardRef((n,t)=>{const{children:a,css:o={},...c}=n,i=p(t);return r(E,{css:o,ref:i,...c,children:a})}),k=q,L=l.forwardRef((n,t)=>{const{css:a={},children:o,onClose:c,variant:i="primary",...D}=n,R={variant:i},v=p(t),{child:u}=m(o,k),{child:A}=m(o,I),{child:C}=m(o,$),{child:z}=m(o,w),{child:T}=m(o,S);return d(O,{variant:i,css:a,ref:v,...R,...D,children:[i=="primary"&&d(P,{children:[z,u]}),i=="secondary"&&d(j,{children:[T,u]}),A,C]})}),e=L;e.Action=$;e.Description=I;e.Icon=w;e.Image=S;e.Title=k;e.Action.displayName="Error.Action";e.Description.displayName="Error.Description";e.Icon.displayName="Error.Icon";e.Image.displayName="Error.Image";e.Title.displayName="Error.Title";e.displayName="Error";const Z=()=>{const n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.";return d(x,{children:[r("h3",{children:"Default error is primary variant"}),d(e,{children:[r(e.Icon,{children:r(h,{icon:g})}),r(e.Title,{children:"Error: some bugs"}),r(e.Description,{children:n}),r(e.Action,{children:r(f,{onPress:()=>{console.log("click ok")},children:"OK"})})]})]})},rr=()=>{const n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.";return d(x,{children:[r("h3",{children:"Primary variant"}),d(e,{variant:"primary",children:[r(e.Icon,{children:r(h,{icon:g})}),r(e.Title,{children:"Error: some bugs"}),r(e.Description,{children:n}),r(e.Action,{children:r(f,{onPress:()=>{console.log("click ok")},children:"OK"})})]}),r("h3",{children:"Secondary variant"}),d(e,{variant:"secondary",children:[r(e.Image,{children:r(h,{icon:g})}),r(e.Title,{children:"Error: some bugs"}),r(e.Description,{children:n}),r(e.Action,{children:r(f,{onPress:()=>{console.log("click ok")},children:"OK"})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Z as Default,rr as Variant};
