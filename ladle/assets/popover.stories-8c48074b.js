import{r as o,a as r,F as m,j as e}from"./index-f44380ee.js";import{P as p}from"./index-878ce657.js";import"./index-848668cb.js";import{B as f}from"./button-75352c4c.js";import"./floating-ui.react.esm-0c75412f.js";import"./use-dom-ref-586729b0.js";const u=()=>e("div",{className:"popover-content",style:{background:"#ffffff",border:"1px solid #b63f3f",borderRadius:"5px",width:"100px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},children:"Content"}),h=["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],C=()=>{const[s,n]=o.useState(!1),[l,d]=o.useState("bottom"),[i,a]=o.useState(10),c=()=>{n(!0)};return r(m,{children:[r("div",{style:{display:"flex",gap:"1rem"},children:[r("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[e("label",{style:{fontSize:"0.85em",color:"red"},htmlFor:"directionSelect",children:"Direction"}),e("select",{id:"directionSelect",onChange:t=>{d(t.target.value)},style:{width:"6rem",height:"1.8rem"},children:h.map(t=>e("option",{value:t,children:t},t))})]}),r("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[e("label",{style:{fontSize:"0.85em",color:"red"},htmlFor:"offsetInput",children:"Offset"}),e("input",{id:"offsetInput",style:{width:"6rem",height:"1.8rem"},type:"number",value:i,onChange:t=>a(Number(t.target.value))})]})]}),e("div",{style:{width:"50rem",height:"30rem",border:"1px solid black",borderRadius:"5px",padding:"10rem 10rem",marginTop:"0.5rem"},children:e(p,{isOpen:s,anchor:e(f,{variant:"secondary",onPress:c,children:"Click me!"}),offset:i,direction:l,onClose:()=>{n(!1)},children:e(u,{})})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{C as Controlled};