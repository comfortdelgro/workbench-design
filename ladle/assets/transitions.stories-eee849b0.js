import{R as r,a as c,j as e}from"./index-f44380ee.js";import{B as i}from"./index-947751b3.js";import{T as p}from"./index-076ea80e.js";import{C as l}from"./components-46861628.js";import{T as s}from"./index-9cc060ce.js";import"./use-dom-ref-586729b0.js";const u=()=>{const[n,d]=r.useState(!1),t={display:"flex",justifyContent:"center",alignItems:"center",height:"160px",width:"160px",backgroundColor:"#ADD8E6",borderRadius:"0.5rem",border:"1px solid black",color:"black",fontWeight:"600"};return c(l,{children:[c(i,{css:{width:"7rem",display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed"},children:[e("span",{style:{fontSize:"13px"},children:"Click here:"}),e(p,{size:"sm",onChange:o=>d(o)})]}),c(i,{css:{display:"flex",justifyContent:"space-around","& h3":{width:"100%",textAlign:"center"}},children:[c(i,{css:{padding:"5px"},children:[e("h3",{children:"Collapse"}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"collapse",show:n,children:e(i,{css:{...t},children:"Basic"})})}),e(i,{css:{marginBottom:"5px",minHeight:"180px",width:"180px"},children:e(s,{effect:"collapse",show:n,speed:2,children:e(i,{css:{...t},children:"Custom Speed: 2s"})})}),e(i,{css:{marginBottom:"5px",minHeight:"180px",width:"180px"},children:e(s,{effect:"collapse",show:n,collapsedSize:"100px",children:e(i,{css:{...t,textAlign:"center",alignItems:"start",padding:"3px"},children:"Custom Collapsed Size: 100px. Default is 1000px"})})}),e(i,{css:{marginBottom:"5px",minHeight:"180px",width:"180px"},children:e(s,{effect:"collapse",show:n,orientation:"horizontal",children:e(i,{css:{...t},children:"Horizontal"})})})]}),c(i,{css:{padding:"5px"},children:[e("h3",{children:"Fade"}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"fade",show:n,children:e(i,{css:{...t},children:"Basic"})})}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"fade",show:n,speed:2,children:e(i,{css:{...t},children:"Custom Speed: 2s"})})})]}),c(i,{css:{padding:"5px"},children:[e("h3",{children:"Zoom"}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"zoom",show:n,children:e(i,{css:{...t},children:"Basic"})})}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"zoom",show:n,speed:2,children:e(i,{css:{...t},children:"Custom Speed: 2s"})})})]}),c(i,{css:{padding:"5px"},children:[e("h3",{children:"Slide"}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"slide",show:n,children:e(i,{css:{...t},children:"Basic"})})}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"slide",show:n,speed:2,children:e(i,{css:{...t},children:"Custom Speed: 2s"})})}),e(i,{css:{marginBottom:"5px",marginTop:"5px",minHeight:"180px",minWidth:"180px"},children:e(s,{effect:"slide",show:n,slideDirection:"top",children:e(i,{css:{...t},children:"Custom Direction: top"})})})]})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as Variants};