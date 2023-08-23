import{R as m,r,a as $,j as t,F as lt}from"./index-f44380ee.js";import{P as nt}from"./index-878ce657.js";import{u as _}from"./use-dom-ref-586729b0.js";import{D as we,t as P,a as qe,g as ct,b as Be,c as Ae,d as He,e as it,f as at}from"./utils-94e73a65.js";import{a as ut,b as We,c as dt,d as ft,e as pt,f as bt,g as mt,h as wt,i as je,j as ht,k as vt,l as St,m as yt,n as gt,o as Ct,S as Ue,p as Dt}from"./dropdown.styles-a265a99c.js";import{p as kt}from"./pick-child-e105db02.js";const xt=()=>t("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:t("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),Et=()=>t("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:t("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})}),Lt=m.forwardRef((b,w)=>{const{children:f,value:c="",flagName:v,type:C,rightIcon:i,leftIcon:D,rightColor:k,css:S={},checkmark:L="none",...H}=b,{textValue:W,...N}=H,{isPositioned:I,open:M,selectedItem:K,disabledKeys:ee=[],searchValue:Y,focusKey:z,selectedKey:J,setSelectedItem:ne,setDropdownItemKeys:te,onItemClick:T}=r.useContext(we),V=_(w),p=r.useMemo(()=>(K==null?void 0:K.value.toString())===c.toString(),[K,c]),x=r.useMemo(()=>(z==null?void 0:z.toString())===c.toString(),[z,c]),Q=r.useMemo(()=>ee.findIndex(E=>E.toString()===c.toString())!==-1,[ee,c]),re=r.useMemo(()=>!Y||P(f).toLocaleLowerCase().includes(Y.toLocaleLowerCase()),[Y,f]);return r.useEffect(()=>{Q||te==null||te(E=>{const ce=E.findIndex(u=>u.value.toString()===c.toString());return ce===-1?E.push({value:c,visibility:!0}):E[ce]={value:c,visibility:re},E})},[c,Q,re]),r.useEffect(()=>{J&&J.toString()===c.toString()&&ne({value:c.toString(),displayValue:W||f})},[J,c]),r.useEffect(()=>{I&&(x||p&&x)&&V.current&&V.current.scrollIntoView({block:"nearest"})},[I,x,p]),r.useEffect(()=>{p&&I&&V.current&&V.current.scrollIntoView({block:"nearest"})},[I,M,p]),re?$(ut,{css:S,isFocused:x&&!p,isSelected:p&&!x,isSelectedFocused:p&&x,isDisabled:Q,onClick:()=>{Q||T({value:c.toString(),displayValue:W||f,flagName:v??""})},ref:V,role:"option","aria-selected":p,...N,children:[D&&t(We,{children:D}),t(dt,{children:f}),C==="icon"&&i&&t(We,{children:i}),C==="color"&&k&&t(ft,{css:{$$bg:k}}),L!=="none"&&t(pt,{isSelected:p,checkmark:L,children:L==="checkbox"?t("div",{children:t(xt,{})}):L==="tick"?t(Et,{}):null})]}):null}),Ze=Lt;function It(){return t(bt,{children:$("div",{className:"spinner",children:[t("div",{className:"spinner-1"}),t("div",{className:"spinner-2"}),t("div",{className:"spinner-3"}),t("div",{})]})})}function Mt(b){const[w,f]=r.useState(!1),c=r.useMemo(()=>new IntersectionObserver(([v])=>f(!!(v!=null&&v.isIntersecting))),[b.current]);return r.useEffect(()=>(b.current&&c.observe(b.current),()=>{c.disconnect()}),[b,c]),w}const Rt=b=>{const{children:w,isLoading:f,css:c={},noDataMessage:v,onLoadMore:C}=b,i=_(null),D=_(null),k=Mt(i),{searchValue:S,labelId:L,isLoadingMore:H}=r.useContext(we),{child:W,rest:N}=kt(w,qe),I=r.useMemo(()=>{let M=0;return m.Children.map(N,K=>{P(K).toLocaleLowerCase().includes(S.toLocaleLowerCase())&&M++}),M},[N,S]);return r.useEffect(()=>{if(i.current&&D.current){const M=ct(i.current,D.current);k&&M>=0&&M<4&&!H&&(C==null||C())}},[k]),r.useMemo(()=>$(lt,{children:[W&&W,$(mt,{css:c,role:"listbox","aria-labelledby":L,children:[f?t(It,{}):I===0?t(wt,{children:v||"No data"}):N,m.Children.toArray(N).length>0&&t(je,{ref:i}),t(je,{ref:D})]})]}),[c,f,I,w])},Nt=Rt,Vt=m.forwardRef((b,w)=>t(G,{...b,ref:w,type:"combobox"})),Ft=Vt,Pt=m.forwardRef((b,w)=>{const{children:f,title:c,isClickable:v,css:C={},onClick:i,...D}=b,k=_(w);return $(ht,{css:C,ref:k,...D,children:[c&&t(vt,{isClickable:!!v,onClick:()=>{v&&(i==null||i())},children:c}),f]})}),$t=Pt,Kt=m.forwardRef((b,w)=>t(G,{...b,ref:w,type:"select"})),Tt=Kt,Bt=()=>t(Dt,{width:"16",height:"16",viewBox:"0 0 16 16",className:"cdg-dropdown-button-icon",children:t("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"currentColor"})}),At=37,Z=()=>{},Ht=m.forwardRef((b,w)=>{const{id:f=`cdg-element-${Math.random().toString(36).substring(2)}`,css:c={},popoverCSS:v={},children:C,type:i="select",icon:D=t(Bt,{}),placeholder:k,isErrored:S=!1,isRequired:L=!1,isReadOnly:H=!1,isLoading:W=!1,helperText:N,errorMessage:I,numberOfRows:M,disabledKeys:K=[],selectedKey:ee="",defaultSelectedKey:Y="",disabledValues:z,value:J="",defaultValue:ne="",defaultOpen:te=!1,isDisabled:T=!1,shouldDeselect:V=!1,allowsCustomValue:p=!1,disableClearable:x=!1,prefix:Q=null,noDataMessage:re="",label:de,isCloseOnSelect:E=!0,isLoadingMore:ce=!1,onValueChange:u=Z,onSelectionChange:d=Z,onFocus:fe=Z,onBlur:oe=Z,onLoadMore:_e=Z,onOpenChange:a=Z,onKeyDown:he=Z,...Ge}=b,j=r.useMemo(()=>ne||Y,[ne,Y]),X=r.useMemo(()=>J||ee,[J,ee]),[Ye,ze]=m.useState(!1),[h,U]=m.useState(te),[o,ie]=m.useState(null),[pe,F]=m.useState(null),[ve,q]=r.useState(""),[B,Je]=r.useState([]),[y,Qe]=r.useState(null),Xe=_(w),se=_(null),n=_(null),Se=r.useRef(!1),ae=r.useMemo(()=>!!j||!j&&!X,[j,X]),Oe=r.useMemo(()=>{var e,s;switch(i){case"select":return((e=se.current)==null?void 0:e.clientWidth)??"100%";case"combobox":return((s=n.current)==null?void 0:s.clientWidth)??"100%";default:return"100%"}},[i,h]);r.useEffect(()=>{Se.current?h||F(null):Se.current=!0},[h,p]);const ye=e=>typeof e=="string"?e:m.Children.map(e,s=>{if(!s)return s;if(m.isValidElement(s)){if(s.type===Ze){const R=s;if(!("value"in R.props))return m.cloneElement(R,{value:`${s.key}`||""})}const g=s;if(g.props.children)return m.cloneElement(g,{children:ye(g.props.children)})}return s});r.useEffect(()=>{Qe(ye(C))},[C]);const A=r.useCallback(e=>{ae&&(ie(e),F((e==null?void 0:e.value)??null))},[ae]),et=r.useCallback(e=>{var s,g,R,le,ke,xe,Ee,Le,Ie,Me,Re,Ne,Ve,Fe,Pe,$e,Ke,Te;if(he(e),h){const O=pe??(o==null?void 0:o.value.toString())??null;switch(e.key){case"ArrowUp":case"ArrowLeft":if(e.preventDefault(),O!==null){const l=at(O??"",y,B),me=(l==null?void 0:l.props.value)??((s=l==null?void 0:l.key)==null?void 0:s.toString().replace(".$",""))??null;F(me)}else F(((le=(R=(g=Be(y,B))==null?void 0:g.props)==null?void 0:R.value)==null?void 0:le.toString())??null);break;case"ArrowDown":case"ArrowRight":if(e.preventDefault(),O!==null){const l=it(O??"",y,B),me=(l==null?void 0:l.props.value)??((ke=l==null?void 0:l.key)==null?void 0:ke.toString().replace(".$",""))??null;F(me)}else F(((Le=(Ee=(xe=Ae(y,B))==null?void 0:xe.props)==null?void 0:Ee.value)==null?void 0:Le.toString())??null);break;case"Enter":if(e.preventDefault(),O!==null){q("");const l=He(O??"",y);if(l){if(U(!E),a==null||a(!1),!x&&V&&(o==null?void 0:o.value)===l.props.value){A(null),d==null||d(""),u==null||u(""),n.current&&(n.current.value="");return}A({value:((Me=(Ie=l==null?void 0:l.props)==null?void 0:Ie.value)==null?void 0:Me.toString())??"",displayValue:l.props.textValue||l.props.children,flagName:l.props.flagName??""}),n.current&&(n.current.value=P(l.props.children)),d==null||d((Re=l==null?void 0:l.props)==null?void 0:Re.value),u==null||u((Ne=l==null?void 0:l.props)==null?void 0:Ne.value)}}break;case"Escape":case"Tab":U(!1),a==null||a(!1);break;case"Home":e.preventDefault(),F(((Pe=(Fe=(Ve=Ae(y,B))==null?void 0:Ve.props)==null?void 0:Fe.value)==null?void 0:Pe.toString())??null);break;case"End":e.preventDefault(),F(((Te=(Ke=($e=Be(y,B))==null?void 0:$e.props)==null?void 0:Ke.value)==null?void 0:Te.toString())??null);break}}else switch(e.key){case"ArrowUp":case"ArrowDown":e.preventDefault(),U(!0),a==null||a(!0);break}},[E,h,x,V,pe,y,o,B,u,d,a,he,A]),ue=r.useCallback(()=>{var e;q(""),U(s=>!s),a==null||a(!h),(e=n.current)==null||e.focus()},[a,h]),ge=r.useCallback(e=>{U(!0),a==null||a(!0),q(e.target.value??""),i==="combobox"&&p&&(A(null),d==null||d(""),u==null||u(""))},[ae,i,o,p,a,u,d,A]),Ce=r.useCallback(()=>{["combobox"].includes(i)&&n.current&&setTimeout(()=>{document.activeElement!==n.current&&n.current&&(p||(o?n.current.value=P(o==null?void 0:o.displayValue):n.current.value=""),q(""))})},[i,o,p,ae]);r.useEffect(()=>{!h&&["combobox"].includes(i)&&n.current&&Ce()},[h,i,Ce]),r.useEffect(()=>{var g;if(!y||!X&&!j){ie(null),q(""),!p&&n.current&&(n.current.value=""),F(R=>R??null);return}const e=X||j,s=He(e,y);s&&(ie({value:e.toString(),displayValue:s,flagName:((g=s==null?void 0:s.props)==null?void 0:g.flagName)??""}),n.current&&(n.current.value=P(s)))},[y,X,j,p]);const be=r.useCallback(e=>{oe==null||oe(e),["combobox"].includes(i)&&n.current&&n.current&&(p||(o?n.current.value=P(o==null?void 0:o.displayValue):n.current.value=""))},[oe,o,i,p]),tt=r.useMemo(()=>{switch(i){case"select":return t(yt,{isEmpty:!o,className:"cdg-dropdown-input",role:"button",isErrored:!!S,isDisabled:T,"aria-required":L,children:$("button",{id:f,type:"button",ref:se,disabled:T,onClick:ue,onBlur:be,onFocus:fe,className:"cdg-dropdown-button",children:[Q,t("span",{children:o?P(o==null?void 0:o.displayValue):k}),D]})});case"combobox":return $(St,{isEmpty:!o,className:"cdg-dropdown-input",role:"button",isErrored:!!S,isDisabled:T,"aria-required":L,children:[t("input",{id:f,ref:n,readOnly:H,disabled:T,placeholder:k,onChange:ge,onBlur:be,onFocus:fe,onClick:ue,"aria-autocomplete":"list",role:"combobox","aria-invalid":S,"aria-expanded":h}),t("button",{type:"button",tabIndex:-1,disabled:T,onClick:ue,className:"cdg-dropdown-button",children:D})]});default:return null}},[h,i,f,k,o,S,T,H,oe,fe,ue,ge,be]),rt=e=>{var s,g;if(!H){if(E&&(U(!1),q(""),a==null||a(!1)),setTimeout(()=>{var R,le;(R=n.current)==null||R.focus(),(le=se.current)==null||le.focus()},0),!x&&!e.value){A(null),d==null||d(""),u==null||u("");return}if(!x&&V&&(o==null?void 0:o.value)===e.value){A(null),d==null||d(""),u==null||u("");return}(o==null?void 0:o.value)!==e.value&&(d==null||d(e.value),u==null||u(e.value)),A(e),["combobox"].includes(i)?n.current&&(n.current.value=P(e.displayValue),E?(q(P(e.displayValue)),n.current.blur()):(s=n.current)==null||s.focus()):(g=se.current)==null||g.focus()}},De=()=>{setTimeout(()=>{var e,s;(e=n.current)==null||e.focus(),(s=se.current)==null||s.focus()},0)},ot=r.useCallback(()=>{U(!1),a==null||a(!1)},[a]),st=r.useCallback(e=>{ze(e)},[]);return $(gt,{className:`${h?"cdg-dropdown-opening":""}`,css:c,ref:Xe,onKeyDown:et,...Ge,children:[de&&$("label",{htmlFor:f,id:`${f}-label`,children:[de,L&&t("span",{children:"*"})]}),t(we.Provider,{value:{isLoadingMore:ce,isPositioned:Ye,open:h,focusKey:pe,selectedKey:X,defaultSelectedKey:j,disabledKeys:z??K??[],searchValue:ve,labelId:`${f}-label`,selectedItem:o,setSelectedItem:ie,dropdownItemKeys:B,setDropdownItemKeys:Je,onItemClick:rt,onHeaderClick:De},children:t(nt,{isOpen:h,anchor:tt,css:{width:"100%"},direction:"bottom-left",onClose:ot,onPositionedChange:st,children:t(Ct,{onClick:De,css:{...v,width:v.width??Oe},children:t(Nt,{searchValue:ve,isLoading:W,css:{maxHeight:M?`${M*At}px`:"16rem"},onLoadMore:_e,noDataMessage:re,children:y})})})}),S&&I&&t(Ue,{error:!!S,children:I}),N&&t(Ue,{children:N})]})}),G=Ht;G.Item=Ze;G.Select=Tt;G.ComboBox=Ft;G.Section=$t;G.Header=qe;export{G as D};