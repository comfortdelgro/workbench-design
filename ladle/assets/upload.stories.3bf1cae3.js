import{_ as T}from"./index.1cfdb18d.js";import"./index.241930ef.js";import{I as G}from"./index.4d985a28.js";import{C as P}from"./components.04e93519.js";import{s as c,R as i,a as l,j as e,F as K}from"./index.5c529a62.js";import{p as w}from"./pick-child.b8dc0401.js";import{u as k}from"./use-dom-ref.937a0154.js";import{B}from"./button.9c9f88e7.js";import"./module.8ce56c77.js";import"./module.b1d36023.js";import"./module.dd78b376.js";import"./module.a8b58f88.js";const V=c("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",display:"flex",justifyContent:"center",justifyItems:"center"}),q=c("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$label3",lineHeight:"$normal",color:"$gray50",width:"100%",display:"flex",justifyContent:"center",justifyItems:"center"}),J=c("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#E31617"}),Q=c("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#B4B4B4"}),X=c("h2",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontSize:"$label1",lineHeight:"$normal",color:"#333333",width:"85%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}),Y=c("h2",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontSize:"$label1",lineHeight:"$normal",display:"flex",justifyContent:"center",alignItems:"center",color:"#B4B4B4"}),F=c("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"69.725%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}),E=c("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"30.275%",height:"100%",backgroundColor:"#F7F8F9",fontFamily:"$sans",fontSize:"$label1",fontWeight:"$semibold",lineHeight:"$normal",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"1px 0 0 0 #E6E6E6","&:hover":{backgroundColor:"$gray20"}}),v=c("div",{appearance:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"$81_75",height:"$11",boxShadow:"0 0 0 1px #E6E6E6",overflow:"hidden",borderRadius:"$lg",display:"flex",gap:"0px"}),Z=c("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"$2","& input":{display:"none"},variants:{variant:{click:{},dropPrimary:{[`${v}`]:{height:"$12_5",boxShadow:"none",border:"1px dashed #8A8886",cursor:"pointer",backgroundColor:"$gray10","&:hover":{backgroundColor:"$gray20"},position:"relative","& input":{display:"block",opacity:0,position:"absolute",top:0,left:0,width:"100%",height:"100%",cursor:"pointer"}},[`${E}`]:{width:"50%",boxShadow:"none",backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"}},[`${F}`]:{width:"50%",display:"flex",justifyContent:"flex-start"}},dropSecondary:{[`${v}`]:{height:"$39_25",boxShadow:"none",border:"1px dashed #8A8886",cursor:"pointer",backgroundColor:"$gray10",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"$4","&:hover":{backgroundColor:"$gray20"},position:"relative","& input":{display:"block",opacity:0,position:"absolute",top:0,left:0,width:"100%",height:"100%",cursor:"pointer"}},[`${E}`]:{width:"100%",boxShadow:"none",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"}},[`${F}`]:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}}}}),ee=i.forwardRef((a,h)=>{const{children:s,css:g={},onClick:t,...m}=a,z=k(h),{child:o,rest:p}=w(s,B);return l(E,{css:g,ref:z,onClick:o?()=>null:t,...m,children:[o&&i.cloneElement(o,{onPress:t}),p]})}),j=ee,ne=i.forwardRef((a,h)=>{const{children:s,css:g={},...t}=a,m=k(h);return e(V,{css:g,ref:m,...t,children:s})}),R=ne,oe=i.forwardRef((a,h)=>{const{children:s,css:g={},...t}=a,m=k(h);return e(Y,{css:g,ref:m,...t,children:s})}),D=oe,te=i.forwardRef((a,h)=>{var I;const{children:s,css:g={},variant:t="click",getFile:m=()=>{},fileExtenstions:z="audio/*,video/*,image/*, .docs, .docx, .pdf",fileSizeLimit:o=9999999999,multiple:p=!1,...L}=a,M=k(h),b=i.useRef(null),[f,S]=i.useState([]),[N,C]=i.useState(!1),{child:x}=w(s,j),{child:A}=w(s,D),{child:H}=w(s,R),U=r=>{r.preventDefault(),r.stopPropagation();const d=r.dataTransfer;if(!d)return;const u=d.files;p&&S([...f,u[0]]),p||S([u[0]])},W=r=>{r.preventDefault();const d=r.target,u=(d==null?void 0:d.files)!==null&&(d==null?void 0:d.files)[0];u&&(u.size>o?C("Sorry, your file exceeds our size limit."):(p&&S([...f,u]),p||S([u])))},O=()=>o>=1024&&o<1048576?`${(Math.round(o/1024*100)/100).toFixed(2)} KB`:o>=1048576&&o<1073741824?`${(Math.round(o/1048576*100)/100).toFixed(2)} MB`:o>=1073741824&&o<1099511627776?`${(Math.round(o/1073741824*100)/100).toFixed(2)} GB`:o>=1099511627776&&o<0x4000000000000?`${(Math.round(o/1099511627776*100)/100).toFixed(2)} TB`:o>=0x4000000000000?`${(Math.round(o/0x4000000000000*100)/100).toFixed(2)} PB`:`${o} Bytes`,_=()=>e("input",{ref:b,type:"file",accept:z,id:"inputFileField",multiple:p,onChange:r=>{W(r)}});return i.useEffect(()=>{if(t=="click")return;const r=document.getElementById("drop-files-area");return r.addEventListener("drop",U,!1),()=>{r.removeEventListener("drop",U,!1)}},[f]),i.useEffect(()=>{f&&m(f)},[f]),l(Z,{variant:t,css:g,ref:M,id:"drop-files-area",...L,children:[l(v,{children:[_(),t=="dropSecondary"&&H,x&&t!=="dropSecondary"&&i.cloneElement(x,{onClick:()=>{b.current&&b.current.click(),C(!1)}}),e(F,{children:f.length&&t=="click"&&!p?e(K,{children:e(X,{children:(I=f[0])==null?void 0:I.name})}):A}),x&&t=="dropSecondary"&&e(q,{children:"OR"}),x&&t=="dropSecondary"&&i.cloneElement(x,{onClick:()=>{b.current&&b.current.click(),C(!1)}})]}),l(Q,{children:["Maximum size: ",O()]}),e(J,{children:N})]})}),n=te;n.Button=j;n.Placeholder=D;n.Icon=R;n.Button.displayName="Upload.Button";n.Placeholder.displayName="Upload.Placeholder";n.Icon.displayName="Upload.Icon";n.displayName="Upload";const y=a=>{a.length<1||console.log(a)},xe=()=>l(P,{children:[e("h3",{children:"Default file upload is click-to-upload variant which allows only 1 uploaded file"}),l(n,{getFile:y,fileExtenstions:"image/*, .docs, .docx",fileSizeLimit:3e4,children:[e(n.Button,{children:"Browse file"}),e(n.Placeholder,{children:"No file chosen"})]})]}),ye=()=>l(P,{children:[e("h3",{children:"Click-to-upload"}),l(n,{getFile:y,fileExtenstions:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"click",children:[e(n.Button,{children:"Browse file"}),e(n.Placeholder,{children:"No file chosen"})]}),e("h3",{children:"Allow multiple uploaded file"}),l(n,{getFile:y,fileExtenstions:"image/*, .docs, .docx",fileSizeLimit:3e6,variant:"click",multiple:!0,children:[e(n.Button,{children:"Browse file"}),e(n.Placeholder,{children:"Please upload"})]}),e("h3",{children:"Primary drag-and-drop"}),l(n,{getFile:y,fileExtenstions:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"dropPrimary",multiple:!0,children:[e(n.Button,{children:e(B,{css:{width:"80%",height:"60%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Upload files"})}),e(n.Placeholder,{children:"or Drop files"})]}),e("h3",{children:"Secondary drag-and-drop"}),l(n,{getFile:y,fileExtenstions:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"dropSecondary",multiple:!0,children:[e(n.Icon,{children:e(G,{icon:T})}),e(n.Button,{children:e(B,{css:{width:"40%",height:"60%",display:"flex",justifyContent:"center",alignItems:"center"},children:"Upload files"})}),e(n.Placeholder,{children:"or Drop files"})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{xe as Default,ye as Variants};
