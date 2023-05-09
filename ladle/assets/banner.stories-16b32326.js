import{s as l,R as m,j as e,F as x,a as i}from"./index-5e72961f.js";import{C as B}from"./components-985c45bd.js";import{p as b}from"./pick-child-c1616f8a.js";import{u as g}from"./use-dom-ref-efd20e6c.js";const I=l("img",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"100%",position:"absolute",zIndex:-1}),$=l("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",width:"100%",height:"100%",position:"absolute",zIndex:-1,backgroundColor:"grey",padding:"1rem"}),D=l("h1",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",fontFamily:"$sans",fontSize:"$header0",color:"$whiteText",lineHeight:"$normal",fontWeight:"$bold"}),S=l("p",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",fontFamily:"$sans",fontSize:"$body3",color:"$whiteText",lineHeight:"$normal",fontWeight:"$normal"}),R=l("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",height:"100%",width:"100%",paddingLeft:"$26",paddingRight:"$48",paddingTop:"$50"}),E=l("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",height:"$128",width:"$206",display:"flex",flexDirection:"column",position:"relative",variants:{size:{sm:{width:"$206"},md:{width:"$269"},lg:{width:"$328"},full:{width:"100%"}}},defaultVariants:{size:"md"}}),C=m.forwardRef((o,a)=>{const{children:r,css:d={},...t}=o,s=g(a);return e(S,{css:d,ref:s,...t,children:r})}),w=C,M=m.forwardRef((o,a)=>{const{css:r={},id:d="myId",onError:t,...s}=o,[p,h]=m.useState(!1),u=g(a);return e(x,{children:p?e($,{children:"Image failed to load. Please try again later."}):e(I,{css:r,ref:u,id:d,alt:"banner image",onError:f=>{h(!0),typeof t=="function"&&t(f),console.log("error event",f)},...s})})}),z=M,k=m.forwardRef((o,a)=>{const{children:r,css:d={},...t}=o,s=g(a);return e(D,{css:d,ref:s,...t,children:(()=>typeof r=="string"?e(x,{children:r}):r)()})}),T=k,v=m.forwardRef((o,a)=>{const{children:r,css:d={},size:t="md",...s}=o,p=g(a),{child:h}=b(r,z),{child:u}=b(r,T),{child:y}=b(r,w);return e(x,{children:i(E,{css:d,ref:p,...{size:t},...s,children:[h,i(R,{children:[u,y]})]})})}),n=v;n.Image=z;n.Title=T;n.Description=w;n.Image.displayName="Banner.Image";n.Title.displayName="Banner.Title";n.Description.displayName="Banner.Description";n.displayName="Banner";const c="https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",N=()=>i(B,{children:[e("h3",{children:"Default banner is medium sized"}),i(n,{children:[e(n.Image,{src:c}),e(n.Title,{children:"My Title"}),e(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]})]}),P=()=>i(B,{children:[e("h3",{children:"Small sized Banner"}),i(n,{size:"sm",children:[e(n.Image,{src:c}),e(n.Title,{children:"My Title"}),e(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]}),e("h3",{children:"Medium sized Banner"}),i(n,{size:"md",children:[e(n.Image,{src:c}),e(n.Title,{children:"My Title"}),e(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]}),e("h3",{children:"Large sized Banner"}),i(n,{size:"lg",children:[e(n.Image,{src:c}),e(n.Title,{children:"My Title"}),e(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]}),e("h3",{children:"Full sized Banner"}),i(n,{size:"full",children:[e(n.Image,{src:c}),e(n.Title,{children:"My Title"}),e(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{N as Basic,P as Sizes};
