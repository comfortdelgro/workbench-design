import{s as m,R as p,a as h,j as e}from"./index.e3899799.js";import{I as g}from"./index.c36bb0d3.js";import{u as f}from"./use-dom-ref.6cfb0b91.js";const c=m("span",{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",aspectRatio:"1 / 1",borderRadius:"$full",overflow:"hidden",userSelect:"none",color:"$info",transition:"$default",".initials, .icon-wrapper, .image":{width:"100%",height:"100%",position:"absolute",background:"$infoBg",top:0,left:0},".initials, .icon-wrapper":{display:"grid",placeItems:"center"},".initials":{fontFamily:"$sans",fontSize:"$body2",fontWeight:"$semibold",zIndex:1},".icon-wrapper":{zIndex:2},".image":{zIndex:3,color:"transparent",background:"transparent"},".initials.count":{zIndex:4},variants:{size:{lg:{width:"$12",".icon-wrapper > .icon":{width:"$6",height:"$6"}},md:{width:"$10",".icon-wrapper > .icon":{width:"$6",height:"$6"}},sm:{width:"$8",".icon-wrapper > .icon":{width:"$4",height:"$4"}},xs:{width:"$6",".icon-wrapper > .icon":{width:"$4",height:"$4"}}}},defaultVariants:{size:"md"}}),$=(t,a)=>t.toUpperCase().split(" ").map(i=>i[0]).join("").slice(0,a==="sm"||a==="xs"?1:2),w=p.forwardRef((t,a)=>{const{css:s={},label:i,icon:r,image:o,size:l="md"}=t,d={size:l},n=f(a);return h(c,{css:s,ref:n,...d,children:[i?e("span",{className:"initials",children:$(i,l)}):null,r?e("div",{className:"icon-wrapper",children:e(g,{className:"icon",icon:r})}):null,o?e("img",{className:"image",src:o,alt:i||"Avatar"}):null]})}),v=w,x=m("div",{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"fit-content",[`& ${c}`]:{marginRight:"-$2","&:hover":{marginTop:"-$4"}},variants:{disabledAnimation:{false:{},true:{[`& ${c}`]:{marginRight:"-$2","&:hover":{marginTop:"0px"}}}}}}),y=p.forwardRef((t,a)=>{const{css:s={},display:i=4,children:r,size:o="md",disabledAnimation:l=!1}=t,d=f(a),n=p.Children.toArray(r);return h(x,{css:s,ref:d,disabledAnimation:l,children:[n.slice(0,i).map(u=>u),i<n.length&&e(c,{size:o,children:h("span",{className:"initials count",children:["+",n.length-i]})})]})}),A=y;v.Group=A;export{v as A,c as S,x as a,A as b};
