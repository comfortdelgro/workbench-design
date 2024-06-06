"use client";import{j as t}from"./jsx-runtime-ea7736fc.js";import{R as H}from"./index-6c164b11.js";import{C as A}from"./objectToCSS-aff350d4.js";import{a as G}from"./string-de12cf5f.js";import{u as J}from"./use-dom-ref-7c72e1a5.js";const K="_button_1yfgz_36",Q="_ripple_1yfgz_58",U="_rippleEffect_1yfgz_1",Z="_content_1yfgz_62",nn="_children_1yfgz_68",tn="_leftIcon_1yfgz_74",en="_rightIcon_1yfgz_75",on="_loadingDots_1yfgz_90",sn="_loadingDot_1yfgz_90",an="_blink_1yfgz_1",rn="_firstLoadingDot_1yfgz_108",cn="_secondLoadingDot_1yfgz_111",ln="_thirdLoadingDot_1yfgz_114",dn="_linkButton_1yfgz_117",_n="_h5_1yfgz_129",gn="_lg_1yfgz_141",pn="_md_1yfgz_145",fn="_sm_1yfgz_149",yn="_fullWidth_1yfgz_153",un="_isSquare_1yfgz_157",hn="_primary_1yfgz_161",mn="_primaryLink_1yfgz_168",bn="_secondary_1yfgz_174",zn="_secondaryLink_1yfgz_181",kn="_danger_1yfgz_188",Dn="_dangerLink_1yfgz_195",Ln="_ghost_1yfgz_202",Cn="_ghostLink_1yfgz_209",xn="_loading_1yfgz_90",jn="_smContent_1yfgz_228",Nn="_mdContent_1yfgz_232",Rn="_lgContent_1yfgz_236",En="_h5Content_1yfgz_240",In="_primaryH5_1yfgz_244",$n="_secondaryH5_1yfgz_255",Bn="_dangerH5_1yfgz_267",n={button:K,ripple:Q,rippleEffect:U,content:Z,children:nn,leftIcon:tn,rightIcon:en,loadingDots:on,loadingDot:sn,blink:an,firstLoadingDot:rn,secondLoadingDot:cn,thirdLoadingDot:ln,linkButton:dn,h5:_n,lg:gn,md:pn,sm:fn,fullWidth:yn,isSquare:un,primary:hn,primaryLink:mn,secondary:bn,secondaryLink:zn,danger:kn,dangerLink:Dn,ghost:Ln,ghostLink:Cn,loading:xn,smContent:jn,mdContent:Nn,lgContent:Rn,h5Content:En,primaryH5:In,secondaryH5:$n,dangerH5:Bn},I=({children:g,isEnabled:m=!1})=>{const a=i=>{const r=i.currentTarget,e=document.createElement("span"),f=Math.max(r.clientWidth,r.clientHeight),c=f/2;e.style.width=e.style.height=`${f}px`,e.style.left=`${i.clientX-r.getBoundingClientRect().left-c}px`,e.style.top=`${i.clientY-r.getBoundingClientRect().top-c}px`,e.classList.add(n.ripple),e.style.position="absolute",e.style.borderRadius="50%",e.style.transform="scale(0)",e.style.backgroundColor="rgba(255, 255, 255, 0.7)";const l=r.getElementsByClassName(n.ripple)[0];l&&l.remove(),r.appendChild(e)},p=i=>i;return m?H.cloneElement(g,{onMouseDown:a,onTouchStart:a,onFocus:p,style:Object.assign({overflow:"hidden",position:"relative"},g.props.style)}):g};I.__docgenInfo={description:"",methods:[],displayName:"Ripple",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},isEnabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Hn=H.forwardRef((g,m)=>{const{href:a,hrefTarget:p,hrefExternal:i,css:r={},children:e,className:f,leftIcon:c,rightIcon:l,onPress:b,onClick:y,onTouchEnd:z,onBlur:k,onDragStart:D,onFocus:L,onKeyDown:C,onKeyUp:x,onPointerDown:j,onPointerUp:N,ripple:$=!1,isDisabled:R=!1,type:S="button",tabIndex:q,"aria-controls":v,"aria-expanded":w,"aria-haspopup":T,"aria-pressed":W,enableEventsOnDisabled:O=!1,enableEventsOnLoading:M=!1,variant:d="primary",size:u="md",fullWidth:h=!1,loading:_=!1,isSquare:P=!1,h5:E=!1,...F}=g,V=J(m),s=o=>{if(!(!O&&R)&&!(!M&&_))switch(o.type){case"keydown":C==null||C(o);break;case"keyup":x==null||x(o);break;case"pointerdown":j==null||j(o);break;case"pointerup":N==null||N(o);break;case"focus":L==null||L(o);break;case"blur":k==null||k(o);break;case"click":y?y==null||y(o):b==null||b(o);break;case"touchend":z==null||z(o);break;case"dragstart":D==null||D(o);break}},X=a?"a":"button",Y=G(n.button,_&&n.loading,d&&n[d],u&&n[u],h&&n.fullWidth,P&&n.isSquare,_&&n.loading,R&&n.isDisabled,a&&d&&n[d+"Link"],a&&n.linkButton,E&&n.h5,E&&d&&n[d+"H5"],f,"cdg-button"),B=[n.content,c||h&&l?n.hasIcon:"",u&&n[`${u}Content`],E&&n.h5Content,"cdg-button-content"].filter(Boolean).join(" ");return t.jsx(A,{css:r,children:t.jsx(X,{ref:V,href:a,target:p||(i?"_blank":void 0),rel:p==="_blank"||i?"noopener noreferrer":void 0,disabled:R,"aria-controls":v,"aria-expanded":w,"aria-haspopup":T,"aria-pressed":W,tabIndex:q,role:a?"link":"button",onClick:s,onTouchEnd:s,onBlur:s,onDragStart:s,onFocus:s,onKeyDown:s,onKeyUp:s,onPointerDown:s,onPointerUp:s,type:S,className:Y,...F,children:_?t.jsx(I,{isEnabled:$,children:t.jsx("span",{hidden:!_,"aria-hidden":!_,className:B,children:t.jsxs("span",{className:n.loadingDots,children:[t.jsx("span",{className:`${n.loadingDot} ${n.firstLoadingDot}`}),t.jsx("span",{className:`${n.loadingDot} ${n.secondLoadingDot}`}),t.jsx("span",{className:`${n.loadingDot} ${n.thirdLoadingDot}`})]})})}):t.jsx(I,{isEnabled:$,children:t.jsxs("span",{className:B,children:[c||h&&l?t.jsx("span",{className:`${n.leftIcon} cdg-button-left-icon`,children:c}):null,t.jsx("span",{className:`cdg-button-content-children ${n.children}`,children:e}),l||h&&c?t.jsx("span",{className:`${n.rightIcon} cdg-button-right-icon`,children:l}):null]})})})})});Hn.__docgenInfo={description:"",methods:[],displayName:"Button"};export{Hn as B};
