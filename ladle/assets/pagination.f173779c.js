import{G as C,H as S,I as P,J as A,K as M}from"./index.1cfdb18d.js";import{g as j}from"./module.28cfaed6.js";import{r as f,s as R,R as D,j as c,a as w}from"./index.e3899799.js";import{I}from"./index.c36bb0d3.js";import{u as B}from"./use-dom-ref.6cfb0b91.js";const x=(e,a)=>Array.from({length:a-e+1},(t,o)=>o+e),E=({page:e,initialPage:a,total:t,onChange:o})=>{const[s,h]=f.exports.useState(e!=null?e:a);f.exports.useEffect(()=>{e&&e!==s&&h(e)},[e]);const u=r=>{h(r),o==null||o(r)},l=f.exports.useCallback(r=>{r<=0?u(1):r>t?u(t):u(r)},[t]),p=()=>l(s+1),n=()=>l(s-1),m=()=>l(1),b=()=>l(t);return{items:f.exports.useMemo(()=>{if(7>=t)return x(1,t);const i=Math.max(s-1,1),d=Math.min(s+1,t-1),g=i>3,k=d<t-2;return!g&&k?[...x(1,5),"dots",t]:g&&!k?[1,"dots",...x(t-4,t)]:[1,"dots",...x(i,d),"dots",t]},[t,s]),active:s,setPage:l,next:p,previous:n,first:m,last:b}},$=R("button",{width:"$8",height:"$8",aspectRatio:"1 / 1",borderRadius:"$full",display:"flex",alignItems:"center",justifyContent:"center",borderWidth:"$light",borderStyle:"solid",borderColor:"transparent",fontSize:"$label1",fontWeight:"$semibold",color:"$primaryText",background:"transparent",transition:"$default",cursor:"pointer","&:hover":{background:"$cdgBlue10"},variants:{active:{true:{color:"$whiteText",background:"$cdgBlue","&:hover":{background:"$cdgBlue"}}}}}),L=R("nav",{display:"flex",flexDirection:"row",alignItems:"center",gap:"$1",padding:"$2 0"}),H=({isBefore:e,...a})=>{const{hoverProps:t,isHovered:o}=j({}),s=f.exports.useMemo(()=>o?e?P:A:M,[e,o]);return c($,{...t,...a,children:c(I,{icon:s})})},O=D.forwardRef((e,a)=>{const{css:t={},page:o,total:s=1,initialPage:h=1,onChange:u}=e,l=B(a),{items:p,active:n,setPage:m,next:b,previous:v}=E({page:o,total:s,initialPage:h,onChange:u}),r=f.exports.useCallback((i,d)=>{if(i==="dots"){const g=d<p.indexOf(n);return c(H,{isBefore:g,onClick:()=>{m(g?n-5>=1?n-5:1:n+5<=s?n+5:s)}},d)}return c($,{active:i===n,onClick:()=>i!==n&&m(i),children:i},d)},[s,n]);return w(L,{css:t,ref:l,children:[c($,{onClick:v,children:c(I,{icon:C})}),p.map(r),c($,{onClick:b,children:c(I,{icon:S})})]})}),K=O;export{K as P};
