import{s as C,R as l,j as s,r as n,F as D,a as W}from"./index-bbce26b5.js";import{u as H,h as T,g as A,f as _,a as U,s as q,c as G,d as J,e as K,i as Q,F as V,j as X}from"./floating-ui.react.esm-69870459.js";const Y=C("div",{width:"100%",height:"1px",backgroundColor:"$gray50"}),Z=l.forwardRef((a,t)=>{const{className:d="",...r}=a;return s(Y,{className:`${d} cdg-sidenav-divider`,ref:t,...r})}),ee=Z,te=l.createContext({}),ne=C("div",{color:"$gray80",display:"flex",flexDirection:"row",alignItems:"center",position:"relative",height:"$10",cursor:"pointer",padding:"0 $4",overflow:"hidden",maxWidth:"480px","& svg":{width:"$6",height:"$6"},"&:hover":{color:"$cdgBlue"},"& .cdg-sidenav-item-icon":{minWidth:"$10",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",".cdg-sidenav-item-icon-wrapper":{width:"$10",height:"$10",display:"flex",alignItems:"center",justifyContent:"center"}},"& .cdg-sidenav-item-title":{fontSize:"$body3",fontWeight:"$semibold",marginLeft:"$2_5",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},"& .cdg-sidenav-item-title > *":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},variants:{active:{active:{"&":{color:"$cdgBlue"},"& .cdg-sidenav-item-icon:before":{content:"",position:"absolute",left:"0",top:0,height:"100%",width:"3px",backgroundColor:"currentColor"}},default:{}}}}),se=l.forwardRef((a,t)=>{const{children:d,isActive:r,className:p="",css:c={},...h}=a,[e,x]=n.useState(null),[w,i]=n.useState(!1),[u,S,f]=l.Children.toArray(d),M=(o,I)=>{x({ref:o,getReferenceProps:I})},$=f?l.cloneElement(f,{setMenuParentProps:M,isOpenMenu:w}):s(D,{});return W(ne,{ref:o=>{e==null||e.ref.setReference(o),typeof t=="function"?t(o):t!=null&&(t.current=o)},css:c,className:`cdg-sidenav-item ${p} ${r?"sidenav-item-active":""}`,active:r?"active":"default",onMouseEnter:()=>{i(!0)},...h,...e==null?void 0:e.getReferenceProps(),children:[s("div",{className:"cdg-sidenav-item-icon",children:s("div",{className:"cdg-sidenav-item-icon-wrapper",children:u})}),s("div",{className:"cdg-sidenav-item-title",children:S}),$]})}),ae=se,ie=C("div",{minWidth:"$72",padding:"$4 0",backgroundColor:"$darkerBg",display:"flex",flexDirection:"column",overflow:"hidden",outline:"1px solid #ffffff00",filter:"drop-shadow(0px 0.6px 1.8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3.2px 7.2px rgba(0, 0, 0, 0.13))",zIndex:100}),oe=l.forwardRef((a,t)=>{const{children:d,isOpen:r=!1,isOpenMenu:p=!1,className:c="",css:h={},delay:e,placement:x,shouldFlip:w=!0,onOpenChange:i,setMenuParentProps:u,...S}=a,[f,M]=n.useState(!1),[$,b]=n.useState(!1),[o,I]=n.useState(!1),{setIsChildOpen:g}=n.useContext(F);n.useEffect(()=>{!o&&f&&(b(!1),g==null||g(!1))},[o]);const{refs:N,floatingStyles:j,context:y}=H({open:$,onOpenChange:m=>{i==null||i(m),!o&&b(m)},middleware:[T(),w?A():null],whileElementsMounted:_,placement:x??"right-start"}),k=U(y,{delay:{open:(e==null?void 0:e.open)??150,close:(e==null?void 0:e.close)??100},handleClose:q()}),B=G(y),L=J(y),{getReferenceProps:E,getFloatingProps:z}=K([k,B,L]);n.useEffect(()=>{u==null||u(N,E)},[N,E]);const P=Q(),O=!!l.Children.count(d),R=n.useMemo(()=>r===!0||o?!0:p&&$&&O,[r,o,p,$,O]);return n.useEffect(()=>{g==null||g(R)},[R]),s(D,{children:R&&s(V,{children:s(X,{context:y,modal:!1,children:s(ie,{css:h,className:c,ref:m=>{N.setFloating(m),typeof t=="function"?t(m):t!=null&&(t.current=m)},style:{...j},"aria-labelledby":P,...z(),onMouseLeave:()=>{M(!0)},onMouseOver:()=>{M(!1)},...S,children:s(F.Provider,{value:{setIsChildOpen:I},children:d})})})})})}),F=l.createContext({}),re=oe,de=C("div",{width:"$18",padding:"$2 0",backgroundColor:"$background",display:"flex",flexDirection:"column",overflow:"hidden",transition:"all 0.25s","& .cdg-sidenav-item":{marginBottom:"$4"},"& .cdg-sidenav-item:last-child":{marginBottom:"0"},variants:{size:{full:{width:"$67_5",filter:"drop-shadow(0px 0.6px 1.8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3.2px 7.2px rgba(0, 0, 0, 0.13))"},default:{}}}}),le=l.forwardRef((a,t)=>{const[d,r]=n.useState(!1),{children:p,expand:c=!1,className:h="",delay:e=0,css:x={},...w}=a,i=n.useRef(null),u=()=>{c||i.current||(i.current=setTimeout(()=>{r(!0),a.onExpandChange&&a.onExpandChange(!0)},e))},S=()=>{c||(i.current&&(clearTimeout(i.current),i.current=null,a.onExpandChange&&a.onExpandChange(!1)),r(!1))},f=c?!0:d;return s(de,{css:{...x},ref:t,className:`${h} ${d?"sidenav-expanded":""}`,size:f?"full":"default",onMouseOver:u,onMouseLeave:S,...w,children:s(te.Provider,{value:{isExpand:f},children:p})})}),v=le;v.Item=ae;v.Divider=ee;v.Menu=re;v.Item.displayName="Sidenar.Item";v.Divider.displayName="Sidenar.Divider";v.Menu.displayName="Sidenar.Menu";v.displayName="Sidenar";export{v as S,re as a};
