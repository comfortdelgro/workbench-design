import{r as w,j as e,s as c,R as h,a as i}from"./index-12a99532.js";import{B as n}from"./button-6255561c.js";import{C as g}from"./components-79765e20.js";import{u as p}from"./use-dom-ref-2bd5dd1a.js";import{u as v}from"./useCurrentTheme-29b321da.js";import"./ripple-01c7c154.js";const $=(t,d)=>e("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:d,...t,children:e("g",{fill:"currentColor",children:e("path",{d:"M30.0276 3.08064C31.3241 4.37537 31.3241 6.47465 30.0276 7.76939L28.2515 9.55135L22.4495 3.7508L24.2315 1.97121C25.5281 0.676265 27.6239 0.676265 28.9205 1.97121L30.0276 3.08064ZM11.2067 14.9979L21.1115 5.08993L26.9135 10.8893L17.0028 20.7937C16.6416 21.1607 16.1976 21.4331 15.7062 21.5988L10.4489 23.3512C9.88648 23.5169 9.37733 23.3867 8.9925 22.9545C8.6136 22.623 8.48335 22.0606 8.64912 21.5515L10.4016 16.2944C10.5673 15.803 10.8397 15.359 11.2067 14.9979ZM12.3671 4.42451C13.415 4.42451 14.2616 5.32615 14.2616 6.31895C14.2616 7.4201 13.415 8.2134 12.3671 8.2134H6.68356C5.63743 8.2134 4.78904 9.11326 4.78904 10.1078V25.3167C4.78904 26.3645 5.63743 27.2111 6.68356 27.2111H21.8397C22.8876 27.2111 23.7342 26.3645 23.7342 25.3167V19.5801C23.7342 18.5855 24.5808 17.6856 25.6287 17.6856C26.6767 17.6856 27.5233 18.5855 27.5233 19.5801V25.3167C27.5233 28.4543 24.9775 31 21.8397 31H6.68356C3.54458 31 1 28.4543 1 25.3167V10.1078C1 6.97017 3.54458 4.42451 6.68356 4.42451H12.3671Z"})})}),D=w.forwardRef($),T=D,S=c("div",{display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center","@max_320":{justifyContent:"center"}}),z=h.forwardRef((t,d)=>{const{children:l,css:o={},...s}=t;return e(S,{css:o,ref:d,...s,children:l})}),A=z,y=c("div",{width:"100%",position:"relative",backgroundColor:"inherit",padding:"$4 $4",borderRadius:"$md",lineHeight:"$normal",color:"$gray80",fontSize:"$label2",display:"flex",flexDirection:"column",gap:"12px"}),R=h.forwardRef((t,d)=>{const{children:l,css:o={},...s}=t;return e(y,{css:o,ref:d,...s,children:l})}),I=R,k=c("img",{width:"100%",height:"$44",objectFit:"cover",borderTopLeftRadius:"$md",borderTopRightRadius:"$md"}),L=h.forwardRef((t,d)=>{const{css:l={},...o}=t,s=p(d);return e(k,{css:l,...o,ref:s})}),N=L,M=c("div",{width:"100%",position:"relative",backgroundColor:"inherit",display:"flex",alignItems:"center",".card-title":{fontSize:"$header5",margin:0,fontWeight:"$semibold",color:"$primaryText",flex:1}}),f=c("h3",{fontSize:"$header5",margin:0,fontWeight:"$semibold",color:"$primaryText",flex:1}),W=h.forwardRef((t,d)=>{const{children:l,css:o={},...s}=t;return e(M,{css:o,ref:d,...s,children:(()=>typeof l=="string"?e(f,{children:l}):l)()})}),j=W,q=c("div",{width:"100%",position:"relative",backgroundColor:"$background",boxShadow:"0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)",borderRadius:"$md",display:"flex",flexDirection:"column",transition:"box-shadow 0.3s ease-in-out","&:focus-visible":{outline:"$cdgBlue60 solid 2px"},"&:hover":{boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",transition:"box-shadow 0.3s ease-in-out"},variants:{isDarkTheme:{true:{backgroundColor:"$secondaryBg"},false:{}},isDisabled:{true:{backgroundColor:"$gray20",userSelect:"none",cursor:"not-allowed",[`& ${f}`]:{color:"$gray50"},[`& ${y}`]:{color:"$gray50"}}},isShadowless:{true:{boxShadow:"none","&:hover":{boxShadow:"none"}}},isClickable:{true:{cursor:"pointer","&:active":{backgroundColor:"$gray20"}}},size:{sm:{maxWidth:"245px"},lg:{maxWidth:"396px"},full:{width:"100%"}}}}),H=h.forwardRef((t,d)=>{const{children:l,css:o={},isDisabled:s=!1,isShadowless:u=!1,isClickable:m=!1,size:C="full",...b}=t,x=v(),B=p(d);return e(q,{...{isDisabled:s,isShadowless:u,isClickable:m},size:C,css:o,ref:B,isDarkTheme:x,...m?{tabIndex:1,role:"button"}:{},...b,children:l})}),r=H;r.Body=I;r.Image=N;r.Title=j;r.Action=A;r.Body.displayName="Card.Body";r.Image.displayName="Card.Image";r.Title.displayName="Card.Title";r.Action.displayName="Card.Action";r.Action.displayName="Card.Action";r.displayName="Card";const a=` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`,X=()=>{const t="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80";return i(g,{children:[e("h3",{children:"Basic card small size"}),i(r,{size:"sm",children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a.slice(0,a.length/5)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"primary",children:"Button"})]})]})]}),e("h3",{children:"Basic card large size"}),i(r,{size:"lg",children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a.slice(0,a.length/2)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})]}),e("h3",{children:"Basic card full size"}),i(r,{size:"full",children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})]}),e("h3",{children:"Basic card customized size"}),i(r,{css:{maxWidth:"400px"},isClickable:!0,children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})]})]})},Y=()=>i(g,{children:[e("h3",{children:"Default"}),e(r,{size:"lg",children:i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a.slice(0,a.length/2)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})}),e("h3",{children:"Disabled"}),e(r,{isDisabled:!0,size:"lg",children:i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a.slice(0,a.length/2)}),i(r.Action,{children:[e(n,{isDisabled:!0,variant:"primary",children:"Button"}),e(n,{isDisabled:!0,variant:"secondary",children:"Button"})]})]})}),e("h3",{children:"Default - Shadowless"}),e(r,{size:"lg",isShadowless:!0,children:i(r.Body,{children:[i(r.Title,{children:[e("h3",{className:"card-title",children:"Card title"}),e(n,{variant:"ghost",children:e(T,{})})]}),e("p",{style:{margin:0},children:a.slice(0,a.length/2)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})}),e("h3",{children:"Disabled - Shadowless"}),e(r,{isDisabled:!0,size:"lg",isShadowless:!0,children:i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:a.slice(0,a.length/2)}),i(r.Action,{children:[e(n,{isDisabled:!0,variant:"primary",children:"Button"}),e(n,{isDisabled:!0,variant:"secondary",children:"Button"})]})]})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{X as Sizes,Y as Variants};
