import{M as h}from"./index-5c199fc3.js";import{F as f}from"./index.es-b412f6c7.js";import{r as s,a,j as e,F as b,s as m}from"./index-b2761b56.js";import"./index-2520ffe2.js";import{M as l}from"./index-04532bd0.js";import{T as i}from"./index-b3511d79.js";import{S as o}from"./slide-action-8777c5fa.js";import{B as u}from"./button-87b4e9e7.js";import"./pick-child-7b8c9795.js";import"./use-dom-ref-b82bff2a.js";import"./index-89ca1cc3.js";import"./useDrag-2e955e51.js";function O(){const[n,d]=s.useState(!1),[c,r]=s.useState(!1);return a("div",{children:[e(i.Header,{variant:"header3",css:{marginBottom:"$4"},children:"Slide Action | Swiper component"}),e(i.Body,{variant:"body2",css:{color:"$grayShades60",marginBottom:"$4"},children:"Component will be reset after 1000ms"}),a(i.Body,{variant:"body3",css:{marginBottom:"$4"},children:["Slide status: ",e("strong",{children:`${n}`})]}),e(o,{color:"$cdgBlue",onChange:t=>d(t),onSwipeEnd:t=>{console.log("success"),setTimeout(()=>{t()},1e3)},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate fugit reprehenderit minus beatae hic dolor rerum, labore architecto facere nam numquam?"}),e(i.Header,{variant:"header3",css:{marginBlock:"$8 $4"},children:"Close a modal"}),e(u,{type:"button",variant:"secondary",onClick:()=>r(!0),children:"Open confirm modal"}),e(l.Trigger,{isOpen:c,handleClose:()=>r(!1),children:e(l,{css:{display:"flex",flexDirection:"column",maxWidth:"$88","&>div":{width:"100%"}},children:a(l.Description,{children:["Our Driver is on the way. Any promo code that has been applied maybe forfeited. Do you want to proceed?",e(o,{css:{marginBlock:"$4",maxWidth:"unset",width:"100%"},onSwipeEnd:()=>r(!1),children:"Slide to cancel"}),e(u,{variant:"ghost",onClick:()=>r(!1),type:"button",css:{display:"block",color:"$cdgBlue",marginInline:"auto"},children:"Close"})]})})})]})}const p=["#475569","#ea580c","#059669","$cdgBlue","#0891b2","#7c3aed","#e11d48"];function W(){const[n,d]=s.useState(p[0]||"$cdgBlue"),[c,r]=s.useState(!1);return a(b,{children:[e(i.Header,{variant:"header3",css:{marginBottom:"$4"},children:"Default"}),e("pre",{children:"color: $dangerShades"}),e(o,{css:{marginTop:"$4"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt"}),e(i.Header,{variant:"header3",css:{marginBlock:"$8 $4"},children:"Compact"}),e(o,{compact:!0,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt, excepturi et voluptates laudantium exercitationem similique. Libero id quo eligendi sunt. Cupiditate dignissimos qui inventore dolores hic."}),e(i.Header,{variant:"header3",css:{marginBlock:"$8 $4"},children:"More colors 🎨"}),a($,{children:[p.map(t=>e(g,{title:t,css:{backgroundColor:t},type:"button",onClick:()=>d(t)},t)),e(g,{type:"button",css:{background:"linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)"},onClick:()=>d(`#${Math.floor(Math.random()*16777215).toString(16)}`),children:"Random"})]}),e(o,{css:{marginTop:"$4"},color:n,children:"Slide background"}),e(o,{css:{marginTop:"$4"},color:n,slideType:"static",children:"Fadein background"}),e(i.Header,{variant:"header4",css:{marginBlock:"$8 $4"},children:"Label slide effect"}),e(o,{labelType:"slide",color:n,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa deleniti!"}),e(i.Header,{variant:"header4",css:{marginBlock:"$8 $4"},children:"Default gradient background"}),e(o,{css:{marginTop:"$4"},color:"#e11d48",slideColor:"gradient",children:"Slide to see bg color change"}),e(i.Header,{variant:"header4",css:{marginTop:"$8"},children:"With custom icon"}),e(y,{css:{...c?{background:"#000","&>*":{display:"none"}}:void 0},children:e(o,{css:{border:"none",backgroundColor:"rgba(61, 127, 118, 0.5)"},color:"#fff",icon:e(f,{icon:h,color:"red",size:"lg"}),labelType:"slide",onSwipeEnd:()=>r(!0),children:"Slide to power off"})})]})}const $=m("div",{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"$2"}),g=m("button",{height:"$10",width:"$20",fontWeight:"$semibold",color:"$whiteText",fontSize:"$label2",border:"none",borderRadius:"$md",opacity:.8,transition:"opacity .2s ease",cursor:"pointer","&:hover":{opacity:1}}),y=m("div",{position:"relative",marginBlock:"$8",height:"780px",width:"360px",padding:"$4 $12",paddingTop:"$20",backgroundColor:"rgb(34,193,195)",background:"linear-gradient(321deg, rgba(34,193,195,0.8) 0%, rgba(253,187,45,0.8) 100%)",fontWeight:"$semibold",textAlign:"center",outline:"10px solid #000",borderRadius:"36px","&::before":{content:"",position:"absolute",top:"$2",insetInline:0,marginInline:"auto",height:"$6",width:"$20",borderRadius:"9999px",backgroundColor:"#000"}});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Customize,O as Default};
