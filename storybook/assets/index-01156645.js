import{j as e}from"./jsx-runtime-9ef10904.js";import{R as r,r as t}from"./index-6c164b11.js";import{c as p,C as O}from"./objectToCSS-e90bd687.js";import{u as G,a as J,s as K,c as Q,d as V,e as W,l as X,F as Y,m as Z,h as ee,g as ne,f as se}from"./floating-ui.react.esm-06842318.js";const te="_divider_fi0wf_6",ae={divider:te},P=r.forwardRef((a,s)=>{const{className:o="",...c}=a;return e.jsx("div",{...c,ref:s,className:p(ae.divider,o,"cdg-sidenav-divider")})});P.__docgenInfo={description:"",methods:[],displayName:"Divider"};const ie=r.createContext({}),de="_sidenav_1j88r_6",ce="_sidenavFull_1j88r_16",D={sidenav:de,sidenavFull:ce},m=r.forwardRef((a,s)=>{const[o,c]=t.useState(!1),{children:g,expand:f=!1,className:h="",delay:n=0,css:x={},..._}=a,i=t.useRef(null),l=()=>{f||i.current||(i.current=setTimeout(()=>{c(!0),a.onExpandChange&&a.onExpandChange(!0)},n))},S=()=>{f||(i.current&&(clearTimeout(i.current),i.current=null,a.onExpandChange&&a.onExpandChange(!1)),c(!1))},u=f?!0:o;return e.jsx(O,{css:x,childrenRef:s,children:e.jsx("div",{ref:s,className:p(D.sidenav,o&&"sidenav-expanded",u?D.sidenavFull:"default",h,"cdg-sidenav"),onMouseOver:l,onMouseLeave:S,..._,children:e.jsx(ie.Provider,{value:{isExpand:u},children:g})})})});m.__docgenInfo={description:"",methods:[],displayName:"Sidenav"};const oe="_sidenavItem_iv1ls_7",re="_cdgSidenavItemIcon_iv1ls_21",le="_cdgSidenavItemTitle_iv1ls_30",ue="_sidenavItemActive_iv1ls_59",ve="_cdgSidenavItemActiveIcon_iv1ls_63",j={sidenavItem:oe,cdgSidenavItemIcon:re,cdgSidenavItemTitle:le,sidenavItemActive:ue,cdgSidenavItemActiveIcon:ve},$=r.forwardRef((a,s)=>{const{children:o,isActive:c,className:g="",css:f={},...h}=a,[n,x]=t.useState(null),[_,i]=t.useState(!1),[l,S,u]=r.Children.toArray(o),y=(d,F)=>{x({ref:d,getReferenceProps:F})},M=u?r.cloneElement(u,{setMenuParentProps:y,isOpenMenu:_}):e.jsx(e.Fragment,{}),N=d=>{n==null||n.ref.setReference(d),typeof s=="function"?s(d):s!=null&&(s.current=d)};return e.jsx(O,{css:f,childrenRef:N,children:e.jsxs("div",{...h,...n==null?void 0:n.getReferenceProps(),ref:N,className:p(j.sidenavItem,c?`${j.sidenavItemActive} sidenav-item-active`:"default",g,"cdg-sidenav-item"),onMouseEnter:()=>{i(!0)},children:[e.jsx("div",{className:p(j.cdgSidenavItemIcon,c&&j.cdgSidenavItemActiveIcon,"cdg-sidenav-item-icon"),children:l}),e.jsx("div",{className:p(j.cdgSidenavItemTitle,"cdg-sidenav-item-title"),children:S}),M]})})});$.__docgenInfo={description:"",methods:[],displayName:"SidenavItem"};const me="_sidenavMenu_1y5xa_6",fe={sidenavMenu:me},H=r.forwardRef((a,s)=>{const{children:o,isOpen:c=!1,isOpenMenu:g=!1,className:f="",css:h={},delay:n,placement:x,shouldFlip:_=!0,onOpenChange:i,setMenuParentProps:l,...S}=a,[u,y]=t.useState(!1),[M,N]=t.useState(!1),[d,F]=t.useState(!1),{setIsChildOpen:v}=t.useContext(L);t.useEffect(()=>{!d&&u&&(N(!1),v==null||v(!1))},[u,d,v]);const{refs:E,floatingStyles:b,context:R}=G({open:M,onOpenChange:I=>{i==null||i(I),!d&&N(I)},middleware:[ee(),_?ne():null],whileElementsMounted:se,placement:x??"right-start"}),B=J(R,{delay:{open:(n==null?void 0:n.open)??150,close:(n==null?void 0:n.close)??100},handleClose:K()}),U=Q(R),k=V(R),{getReferenceProps:A,getFloatingProps:q}=W([B,U,k]);t.useEffect(()=>{l==null||l(E,A)},[E,A,l]);const z=X(),w=!!r.Children.count(o),C=t.useMemo(()=>c===!0||d?!0:g&&M&&w,[c,d,g,M,w]);t.useEffect(()=>{v==null||v(C)},[C,v]);const T=I=>{E.setFloating(I),typeof s=="function"?s(I):s!=null&&(s.current=I)};return e.jsx(e.Fragment,{children:C&&e.jsx(Y,{children:e.jsx(Z,{context:R,modal:!1,children:e.jsx(O,{css:h,childrenRef:T,children:e.jsx("div",{...S,className:p(fe.sidenavMenu,f,"cdg-sidenav-menu"),ref:T,style:{...b},"aria-labelledby":z,...q(),onMouseLeave:()=>{y(!0)},onMouseOver:()=>{y(!1)},children:e.jsx(L.Provider,{value:{setIsChildOpen:F},children:o})})})})})})}),L=r.createContext({});H.__docgenInfo={description:"",methods:[],displayName:"SidenavMenu"};m.Item=$;m.Divider=P;m.Menu=H;m.Item.displayName="Sidenar.Item";m.Divider.displayName="Sidenar.Divider";m.Menu.displayName="Sidenar.Menu";m.displayName="Sidenar";export{m as S,H as a};