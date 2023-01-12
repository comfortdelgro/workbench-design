import{C as k}from"./components.9c4cf978.js";import{u as B}from"./module.30462d86.js";import{s as o,R as i,a as s,j as e}from"./index.5181e2f2.js";import{u as U}from"./use-dom-ref.7ee095ce.js";const I=n=>n>=1024&&n<1048576?`${(Math.round(n/1024*100)/100).toFixed(2)} KB`:n>=1048576&&n<1073741824?`${(Math.round(n/1048576*100)/100).toFixed(2)} MB`:n>=1073741824&&n<1099511627776?`${(Math.round(n/1073741824*100)/100).toFixed(2)} GB`:n>=1099511627776&&n<0x4000000000000?`${(Math.round(n/1099511627776*100)/100).toFixed(2)} TB`:n>=0x4000000000000?`${(Math.round(n/0x4000000000000*100)/100).toFixed(2)} PB`:`${n} Bytes`,j="audio/*,video/*,image/*, .docs, .docx, .pdf",M=9999999999;o("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",display:"flex",justifyContent:"center",justifyItems:"center"});const R=o("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$label3",lineHeight:"$normal",color:"$gray50",display:"flex",justifyContent:"center",justifyItems:"center"}),A=o("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#E31617"}),W=o("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#B4B4B4"});o("h2",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontSize:"$label1",lineHeight:"$normal",color:"#333333",width:"85%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"});o("h2",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontSize:"$label1",lineHeight:"$normal",display:"flex",justifyContent:"center",alignItems:"center",color:"#B4B4B4"});const E=o("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",flexGrow:1,height:"100%",display:"flex",alignItems:"center",fontSize:"$body3",fontWeight:"$semibold"}),H=o("label",{appearance:"none",boxSizing:"border-box",margin:"0px",background:"transparent",height:"100%",padding:"$2 $5",backgroundColor:"#FFFFFF",border:"1px solid $cdgBlue",color:"$cdgBlue",borderRadius:"$md",fontWeight:"$bold",fontSize:"$label2",fontFamily:"$sans",display:"flex",justifyContent:"center",alignItems:"center",gap:"$2_5",cursor:"pointer"}),V=o("div",{appearance:"none",boxSizing:"border-box",margin:"0px",width:"100%",border:"1px dashed #E6E6E6",background:"$primaryBg",padding:"$2",overflow:"hidden",borderRadius:"$lg",display:"flex",alignItems:"center",gap:"$2",variants:{variant:{field:{},area:{flexDirection:"column-reverse"}}}}),T=o("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",minWidth:"$96",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"$2","& input":{display:"none"},variants:{variant:{field:{},area:{}}}}),L=i.forwardRef((n,$)=>{const{css:C={},variant:t="field",getFile:F=()=>{},accept:h=j,fileSizeLimit:a=M,multiple:f=!1,...z}=n,v=U($),l=i.useRef(null),[p,u]=i.useState([]),[D,S]=i.useState(!1),m=B(),w=r=>{r.preventDefault(),r.stopPropagation();const d=r.dataTransfer;if(!d)return;const b=d.files;f&&u([...p,b[0]]),f||u([b[0]])},x=r=>{r.preventDefault(),r.stopPropagation()},c=r=>{r.preventDefault();const d=r.target,b=(d==null?void 0:d.files)!==null&&(d==null?void 0:d.files)[0];b&&(b.size>a?S("Sorry, your file exceeds our size limit."):(f&&u([...p,b]),f||u([b])))};return i.useEffect(()=>{p&&F(p)},[p]),s(T,{variant:t,css:C,ref:v,id:m,onDrop:w,onDragOver:x,...z,children:[s(V,{variant:t,children:[e("input",{ref:l,type:"file",accept:h,id:m,multiple:f,onChange:r=>{c(r)}}),s(H,{htmlFor:m,children:[t==="field"&&e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M12.2857 10.6249V12.375C12.2857 12.8581 11.9019 13.25 11.4286 13.25H4.57143C4.09812 13.25 3.71429 12.8581 3.71429 12.375V10.6249C3.71429 10.1418 3.33045 9.74993 2.85714 9.74993C2.38384 9.74993 2 10.1418 2 10.6249V12.375C2 13.8247 3.15125 15 4.57143 15H11.4286C12.8488 15 14 13.8247 14 12.375V10.6249C14 10.1418 13.6162 9.74993 13.1429 9.74993C12.6696 9.74993 12.2857 10.141 12.2857 10.6249ZM7.39464 1.25616L3.96607 4.75621C3.63098 5.09829 3.63152 5.652 3.96607 5.99353C4.30089 6.33533 4.8433 6.33533 5.17813 5.99353L7.14286 3.98852V9.74993C7.14286 10.2336 7.52616 10.6249 8 10.6249C8.47384 10.6249 8.85714 10.2336 8.85714 9.74993V3.98852L10.8227 5.99504C11.1575 6.33684 11.6999 6.33684 12.0347 5.99504C12.3696 5.65323 12.3696 5.09952 12.0347 4.75771L8.60616 1.25767C8.27054 0.914362 7.72946 0.914362 7.39464 1.25616Z",fill:"#0142AF"})}),t==="area"?e("span",{children:"Browse Files"}):e("span",{children:"Upload files"})]}),t==="area"&&e(R,{children:"or"}),t==="area"?e(E,{children:"Drag&Drop files here"}):e(E,{children:"or Drop Files"}),t==="area"&&e(E,{children:e("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",children:e("path",{d:"M8.4335 25.3332C4.78837 25.3332 1.8335 22.6457 1.8335 19.3332C1.8335 16.7165 3.67462 14.4915 6.24266 13.6707C6.2367 13.5582 6.2335 13.4457 6.2335 13.3332C6.2335 9.64984 9.51516 6.6665 13.5668 6.6665C16.2847 6.6665 18.6543 8.01025 19.9239 10.0082C20.6206 9.54567 21.4639 9.33317 22.3668 9.33317C24.796 9.33317 26.7668 11.0873 26.7668 13.3332C26.7668 13.8415 26.6614 14.3248 26.4735 14.7748C29.1502 15.2665 31.1668 17.4207 31.1668 19.9998C31.1668 22.9457 28.5406 25.3332 25.3002 25.3332H8.4335ZM12.0543 16.2915C11.6281 16.6832 11.6281 17.3165 12.0543 17.6707C12.4852 18.0957 13.1818 18.0957 13.5714 17.6707L15.4002 16.079V21.6665C15.4002 22.2207 15.8906 22.6665 16.5002 22.6665C17.1097 22.6665 17.6002 22.2207 17.6002 21.6665V16.079L19.3877 17.6707C19.8185 18.0957 20.5152 18.0957 20.9047 17.6707C21.3722 17.3165 21.3722 16.6832 20.9047 16.2915L17.2381 12.9582C16.8485 12.5707 16.1518 12.5707 15.721 12.9582L12.0543 16.2915Z",fill:"#0142AF"})})})]}),s(W,{children:["Maximum size: ",I(a)]}),e(A,{children:D})]})}),O=L,P=o("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#E31617"}),_=o("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#B4B4B4"}),N=o("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",flexGrow:1,height:"100%",display:"flex",alignItems:"center",borderLeft:"1px solid #E6E6E6",paddingLeft:"$4",fontSize:"$body2",fontWeight:"$semibold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",variants:{fileSelected:{true:{color:"#333333"},false:{color:"#B4B4B4"}}}});o("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"30.275%",height:"100%",backgroundColor:"#F7F8F9",fontFamily:"$sans",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"1px 0 0 0 #E6E6E6"});const Z=o("div",{appearance:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",height:"$11",border:"1px solid #E6E6E6",overflow:"hidden",borderRadius:"$lg",display:"flex",gap:"0px"}),G=o("label",{appearance:"none",boxSizing:"border-box",margin:"0px",background:"transparent",width:"min-content",flexShrink:0,padding:"0 $3",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"$label1",fontWeight:"$semibold",lineHeight:"$normal",cursor:"pointer",backgroundColor:"$gray10",span:{width:"max-content"},"&:hover":{backgroundColor:"$gray20"}}),K=o("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",boxShadow:"1px solid #E6E6E6",minWidth:"$96",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"$2","& input":{display:"none"}}),q=i.forwardRef((n,$)=>{var w;const{css:C={},getFile:t,accept:F=j,fileSizeLimit:h=M,multiple:a=!1,...f}=n,z=U($),v=i.useRef(null),[l,p]=i.useState([]),[u,D]=i.useState(!1),S=B(),m=x=>{x.preventDefault();const c=x.target,r=(c==null?void 0:c.files)!==null&&(c==null?void 0:c.files)[0];r&&(r.size>h?D("Sorry, your file exceeds our size limit."):(a&&p([...l,r]),a||p([r])))};return i.useEffect(()=>{l&&(t==null||t(l))},[l]),s(K,{css:C,ref:z,...f,children:[s(Z,{children:[e("input",{ref:v,type:"file",accept:F,id:S,multiple:a,onChange:x=>{m(x)}}),e(G,{htmlFor:S,children:e("span",{children:"Browse file"})}),e(N,{fileSelected:l.length>0&&!a,children:l.length>0&&!a?(w=l[0])==null?void 0:w.name:"No file chosen"})]}),s(_,{children:["Maximum size: ",I(h)]}),e(P,{children:u})]})}),g=q;g.DragAndDrop=O;g.DragAndDrop.displayName="Upload.DragAndDrop";g.displayName="Upload";const y=n=>{n.length<1||console.log(n)},ee=()=>s(k,{children:[e("h3",{children:"Default file upload is click-to-upload variant which allows only 1 uploaded file"}),e(g,{getFile:y,accept:"image/*, .docs, .docx"})]}),ne=()=>s(k,{children:[e("h3",{children:"Click-to-upload"}),e(g,{getFile:y,accept:"image/*, .docs, .docx"}),e("h3",{children:"Allow multiple uploaded file"}),e(g,{getFile:y,accept:"image/*, .docs, .docx",multiple:!0}),e("h3",{children:"Primary drag-and-drop"}),e(g.DragAndDrop,{getFile:y,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0}),e("h3",{children:"Secondary drag-and-drop"}),e(g.DragAndDrop,{getFile:y,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"area",multiple:!0})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ee as Default,ne as Variants};
