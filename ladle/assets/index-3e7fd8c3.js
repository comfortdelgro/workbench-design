import{j as t}from"./jsx-runtime-ea7736fc.js";import{r as i,R as b}from"./index-6c164b11.js";import{u as Z}from"./use-dom-ref-7c72e1a5.js";import{C as Ne}from"./color-214871c7.js";import{p as ce}from"./pick-child-c116e6b4.js";import{C as po}from"./objectToCSS-aff350d4.js";import{P as Be}from"./index-f318de67.js";import{u as Me}from"./useId-133e3351.js";const go=i.createContext({isLoadingMore:!1,focusKey:null,isPositioned:!1,labelId:"",open:!1,searchValue:"",selectedItem:null,disabledKeys:[],selectedKey:"",defaultSelectedKey:"",disabledAutofill:!1,setSelectedItem:()=>{},onItemClick:()=>{},onHeaderClick:()=>{}}),ho=b.forwardRef((s,n)=>{const{children:r,css:o,onClick:a}=s,u=Z(n),{onHeaderClick:l}=i.useContext(go),p=h=>{l(),a==null||a(h)};return t.jsx(po,{css:o,childrenRef:u,children:t.jsx("div",{ref:u,onClick:p,children:r})})});ho.__docgenInfo={description:"",methods:[],displayName:"DropdownHeader"};function H(s){var r;if(!s)return"";if(typeof s=="string")return s;if(typeof s=="number")return String(s);const n=(r=s.props)==null?void 0:r.children;return n instanceof Array?n.map(H).join(" "):H(n)}const ae=(s,n,r=[])=>{var o,a;for(let u=0;u<s.length;u++){const l=s[u];if(l!=null&&l.props){const p=((o=l.props.value)==null?void 0:o.toString())??((a=l.key)==null?void 0:a.toString().replace(".$",""))??"";if(p.toString()===n.toString()&&!(r!=null&&r.find(h=>h===p.toString())))return l;if(l.props.children){const h=ae(b.Children.toArray(l.props.children),n);if(h)return h}}}return null},He=(s,n,r=[])=>{if(!r.length)return null;const o=r.filter(u=>u.visibility);if(o.length){const u=o.findIndex(l=>l.value.toString()===s.toString());if(u!==-1){const l=o[u-1]??o[o.length-1];if(l)return so(l.value,n)}}return Ro(n,r)},$e=(s,n,r=[])=>{if(!r.length)return null;const o=r.filter(u=>u.visibility);if(o.length){const u=o.findIndex(l=>l.value.toString()===s.toString());if(u!==-1){const l=o[u+1]??o[0];if(l)return so(l.value,n)}}return jo(n,r)},jo=(s,n=[])=>{if(!(n!=null&&n.length))return null;let r=null;for(let o=0;o<n.length;o++){const a=n[o];if(a!=null&&a.visibility){r=so(a.value,s);break}}return r},Ro=(s,n=[])=>{if(!(n!=null&&n.length))return null;let r=null;for(let o=n.length-1;o>=0;o--){const a=n[o];if(a!=null&&a.visibility){r=so(a.value,s);break}}return r},so=(s,n)=>{const{rest:r}=ce(n,ho),o=b.Children.toArray(r);return o!=null&&o.length?ae(n,s)??null:null},Te=(s,n)=>{const r=u=>{const{top:l}=u.getBoundingClientRect();return l},o=r(s),a=r(n);return Math.hypot(o-a)},Pe="_dropdownOption_1myqm_19",Fe="_dropdownItemIcon_1myqm_31",Ae="_dropdownItemContent_1myqm_41",Ve="_dropdownItemColor_1myqm_48",We="_dropdownItemRightIcon_1myqm_62",Ue="_dropdownLoading_1myqm_71",Oe="_dropdownLoadingSpinner_1myqm_77",Ze="_dropdownLoadingSpinnerItem_1myqm_84",ze="_spin_1myqm_1",Ge="_dropdownLoadingSpinnerItem1_1myqm_96",Ye="_dropdownLoadingSpinnerItem2_1myqm_100",Je="_dropdownLoadingSpinnerItem3_1myqm_104",Qe="_dropdownListItem_1myqm_108",Xe="_dropdownListEmptyData_1myqm_112",Ke="_dropdownComboBox_1myqm_120",on="_dropdownInputControl_1myqm_141",en="_dropdownSelectButton_1myqm_163",nn="_dropdownButtonControl_1myqm_179",tn="_dropdownWrapper_1myqm_201",rn="_dropdownLabel_1myqm_205",dn="_dropdownLabelAsterisk_1myqm_223",sn="_dropdownOpening_1myqm_228",ln="_dropdownSelect_1myqm_163",cn="_dropdownHelperText_1myqm_232",an="_dropdownHelperIsErrored_1myqm_240",pn="_dropdownButtonIcon_1myqm_244",un="_dropdownPopover_1myqm_248",mn="_dropdownList_1myqm_108",wn="_dropdownButtonText_1myqm_314",fn="_dropdownSection_1myqm_327",In="_dropdownSectionContent_1myqm_336",_n="_dropdownSectionContentClickable_1myqm_348",gn="_dropdownSelectButtonH5_1myqm_358",hn="_dropdownItemIsFocused_1myqm_369",bn="_dropdownItemIsSelected_1myqm_373",xn="_dropdownItemIsSelectedFocused_1myqm_377",Cn="_dropdownItemIsDisabled_1myqm_381",Sn="_dropdownItemSelected_1myqm_394",yn="_dropdownItemRightIconCheckMarkCheckbox_1myqm_398",vn="_dropdownItemRightIconContent_1myqm_399",kn="_dropdownItemRightIconContentSvg_1myqm_412",Ln="_dropdownItemRightIconCheckMarkTick_1myqm_416",jn="_dropdownItemRightIconSelected_1myqm_426",Rn="_dropdownItemRightIconIsEmpty_1myqm_443",Dn="_dropdownItemRightIconIsDisabled_1myqm_450",En="_dropdownItemRightIconIsErrored_1myqm_469",qn="_dropdownH5_1myqm_489",Nn="_dropdownInputIsEmpty_1myqm_503",Bn="_dropdownInputIsDisabled_1myqm_509",Mn="_dropdownInputIsErrored_1myqm_522",Hn="_dropdownInputH5_1myqm_530",e={dropdownOption:Pe,dropdownItemIcon:Fe,dropdownItemContent:Ae,dropdownItemColor:Ve,dropdownItemRightIcon:We,dropdownLoading:Ue,dropdownLoadingSpinner:Oe,dropdownLoadingSpinnerItem:Ze,spin:ze,dropdownLoadingSpinnerItem1:Ge,dropdownLoadingSpinnerItem2:Ye,dropdownLoadingSpinnerItem3:Je,dropdownListItem:Qe,dropdownListEmptyData:Xe,dropdownComboBox:Ke,dropdownInputControl:on,dropdownSelectButton:en,dropdownButtonControl:nn,dropdownWrapper:tn,dropdownLabel:rn,dropdownLabelAsterisk:dn,dropdownOpening:sn,dropdownSelect:ln,dropdownHelperText:cn,dropdownHelperIsErrored:an,dropdownButtonIcon:pn,dropdownPopover:un,dropdownList:mn,dropdownButtonText:wn,dropdownSection:fn,dropdownSectionContent:In,dropdownSectionContentClickable:_n,dropdownSelectButtonH5:gn,dropdownItemIsFocused:hn,dropdownItemIsSelected:bn,dropdownItemIsSelectedFocused:xn,dropdownItemIsDisabled:Cn,dropdownItemSelected:Sn,dropdownItemRightIconCheckMarkCheckbox:yn,dropdownItemRightIconContent:vn,dropdownItemRightIconContentSvg:kn,dropdownItemRightIconCheckMarkTick:Ln,dropdownItemRightIconSelected:jn,dropdownItemRightIconIsEmpty:Rn,dropdownItemRightIconIsDisabled:Dn,dropdownItemRightIconIsErrored:En,dropdownH5:qn,dropdownInputIsEmpty:Nn,dropdownInputIsDisabled:Bn,dropdownInputIsErrored:Mn,dropdownInputH5:Hn},$n=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:t.jsx("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),Tn=()=>t.jsx("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",className:`${e.dropdownItemRightIconContentSvg}`,children:t.jsx("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})}),Do=b.forwardRef((s,n)=>{const{children:r,value:o="",flagName:a,type:u,rightIcon:l,leftIcon:p,rightColor:h,className:v,css:k={},checkmark:x="none",...L}=s,{textValue:$,...E}=L,{isPositioned:q,open:N,selectedItem:P,disabledKeys:io=[],searchValue:K,focusKey:oo,selectedKey:eo,disabledAutofill:lo,setSelectedItem:uo,setDropdownItemKeys:F,onItemClick:D}=i.useContext(go),C=Z(n),S=i.useMemo(()=>(P==null?void 0:P.value.toString())===o.toString(),[P,o]),T=i.useMemo(()=>(oo==null?void 0:oo.toString())===o.toString(),[oo,o]),A=i.useMemo(()=>io.findIndex(w=>w.toString()===o.toString())!==-1,[io,o]),V=i.useMemo(()=>lo?!0:!K||H(r).toLocaleLowerCase().includes(K.toLocaleLowerCase()),[K,r,lo]);i.useEffect(()=>{A||F==null||F(w=>{const B=w.findIndex(Co=>Co.value.toString()===o.toString());return B===-1?w.push({value:o,visibility:!0}):w[B]={value:o,visibility:V},w})},[o,A,V,F]),i.useEffect(()=>{eo&&eo.toString()===o.toString()&&uo({value:o.toString(),displayValue:$||r})},[r,eo,uo,$,o]),i.useEffect(()=>{q&&(T||S&&T)&&C.current&&setTimeout(()=>{C.current.scrollIntoView({block:"nearest"})})},[q,T,S,C]),i.useEffect(()=>{S&&q&&C.current&&setTimeout(()=>{C.current.scrollIntoView({block:"nearest"})})},[q,N,S,C]);const bo=()=>{A||D({value:o.toString(),displayValue:$||r,flagName:a??""})},I=i.useMemo(()=>[e.dropdownOption,T&&!S&&e.dropdownItemIsFocused,S&&!T&&e.dropdownItemIsSelected,S&&T&&e.dropdownItemIsSelectedFocused,A&&e.dropdownItemIsDisabled,v,"cdg-dropdown-item"].filter(Boolean).join(" "),[v,A,T,S]),_=i.useMemo(()=>[e.dropdownItemRightIcon,S&&e.dropdownItemRightIconSelected,x==="checkbox"&&e.dropdownItemRightIconCheckMarkCheckbox,x==="tick"&&e.dropdownItemRightIconCheckMarkTick,"cdg-dropdown-item-right-icon"].filter(Boolean).join(" "),[x,S]),xo=i.useMemo(()=>[e.dropdownItemColor,S&&e.dropdownItemSelected,"cdg-dropdown-item-color"].filter(Boolean).join(" "),[S]);return V?t.jsx(po,{css:k,childrenRef:C,children:t.jsxs("li",{...E,className:I,onClick:bo,ref:C,role:"option","aria-selected":S,children:[p&&t.jsx("div",{className:`${e.dropdownItemIcon} cdg-dropdown-item-left-icon`,children:p}),t.jsx("div",{className:`${e.dropdownItemContent} cdg-dropdown-item-content`,children:r}),u==="icon"&&l&&t.jsx("div",{className:`${e.dropdownItemIcon} cdg-dropdown-item-right-icon`,children:l}),u==="color"&&h&&t.jsx("div",{className:xo,style:{background:h},children:t.jsx("svg",{width:"16",height:"16",fill:"none",children:t.jsx("path",{d:"M15.0265 2.97978C15.4357 3.39649 15.4357 4.0699 15.0265 4.48661L6.64506 13.0209C6.23581 13.4376 5.57446 13.4376 5.16521 13.0209L0.973587 8.75375C0.564469 8.33704 0.564469 7.66363 0.973587 7.24692C1.38277 6.8302 2.04608 6.8302 2.45533 7.24692L5.87567 10.7573L13.5466 2.97978C13.9559 2.5624 14.6172 2.5624 15.0265 2.97978Z",fill:new Ne(h).luminance>.3?"#000000":"#ffffff"})})}),x!=="none"&&t.jsx("div",{className:_,children:x==="checkbox"?t.jsx("div",{className:e.dropdownItemRightIconContent,children:t.jsx($n,{})}):x==="tick"?t.jsx(Tn,{}):null})]})}):null});Do.__docgenInfo={description:"",methods:[],displayName:"DropdownItem"};function pe(){return t.jsx("div",{className:`${e.dropdownLoading}`,children:t.jsxs("div",{className:e.dropdownLoadingSpinner,children:[t.jsx("div",{className:`${e.dropdownLoadingSpinnerItem} ${e.dropdownLoadingSpinnerItem1}`}),t.jsx("div",{className:`${e.dropdownLoadingSpinnerItem} ${e.dropdownLoadingSpinnerItem2}`}),t.jsx("div",{className:`${e.dropdownLoadingSpinnerItem} ${e.dropdownLoadingSpinnerItem3}`}),t.jsx("div",{})]})})}pe.__docgenInfo={description:"",methods:[],displayName:"DropdownLoading"};function Pn(s){const[n,r]=i.useState(!1),o=i.useMemo(()=>new IntersectionObserver(([a])=>r(!!(a!=null&&a.isIntersecting))),[s.current]);return i.useEffect(()=>(s.current&&o.observe(s.current),()=>{o.disconnect()}),[s,o]),n}const Fn=s=>{const{children:n,isLoading:r,css:o={},noDataMessage:a,onLoadMore:u}=s,l=Z(null),p=Z(null),h=Pn(l),{searchValue:v,labelId:k,isLoadingMore:x,disabledAutofill:L}=i.useContext(go),{child:$,rest:E}=ce(n,ho),q=i.useMemo(()=>{let N=0;return b.Children.map(E,P=>{H(P).toLocaleLowerCase().includes(L?"":v.toLocaleLowerCase())&&N++}),N},[L,E,v]);return i.useEffect(()=>{if(l.current&&p.current){const N=Te(l.current,p.current);h&&N>=0&&N<4&&!x&&(u==null||u())}},[h,x,l,u,p]),i.useMemo(()=>t.jsxs(po,{css:o,children:[$&&$,t.jsxs("ul",{role:"listbox","aria-labelledby":k,className:`${e.dropdownList} cdg-dropdown-list`,children:[r?t.jsx(pe,{}):q===0?t.jsx("div",{className:`${e.dropdownListEmptyData} cdg-dropdown-list-empty-data`,children:a||"No data"}):E,b.Children.toArray(E).length>0&&t.jsx("div",{className:`${e.dropdownListItem}`,ref:l}),t.jsx("div",{className:`${e.dropdownListItem}`,ref:p})]})]}),[o,$,k,r,q,a,E,l,p])},ue=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",className:`${e.dropdownButtonIcon} cdg-dropdown-button-icon`,children:t.jsx("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"currentColor"})}),An=37,X=()=>{},me=s=>typeof s=="string"?s:b.Children.map(s,n=>{if(!n)return n;if(b.isValidElement(n)){if(n.type===Do){const o=n;if(!("value"in o.props))return b.cloneElement(o,{value:`${n.key}`||""})}const r=n;if(r.props.children)return b.cloneElement(r,{children:me(r.props.children)})}return n}),z=b.forwardRef((s,n)=>{const{id:r,css:o,className:a,popoverCSS:u={},children:l,type:p="select",icon:h=t.jsx(ue,{}),placeholder:v,isErrored:k=!1,isRequired:x=!1,isReadOnly:L=!1,isLoading:$=!1,helperText:E,errorMessage:q,numberOfRows:N,disabledKeys:P=[],selectedKey:io="",defaultSelectedKey:K="",disabledValues:oo,value:eo="",defaultValue:lo="",defaultOpen:uo=!1,shouldDeselect:F=!1,allowsCustomValue:D=!1,disableClearable:C=!1,prefix:S=null,noDataMessage:T="",label:A,isCloseOnSelect:V=!0,isLoadingMore:bo=!1,onValueChange:I=X,onSelectionChange:_=X,onLoadMore:xo=X,onOpenChange:w=X,isDisabled:B=!1,inputRef:Co,buttonRef:_e,autoFocus:So,autoCapitalize:Eo,disabledAutofill:mo=!1,onCut:qo,onCopy:No,onBlur:wo=X,onFocus:yo=X,onPaste:Bo,onInput:Mo,onKeyUp:Ho,onSelect:$o,onKeyDown:fo=X,onBeforeInput:To,onCompositionEnd:Po,onCompositionStart:Fo,onCompositionUpdate:Ao,h5:Io=!1,isFloatingPortal:ge=!0,...he}=s,no=Me(r),be={...he},G=i.useMemo(()=>lo||K,[lo,K]),to=i.useMemo(()=>eo||io,[eo,io]),[xe,Ce]=b.useState(!1),[y,Y]=b.useState(uo),[m,co]=b.useState(null),[vo,M]=b.useState(null),[Vo,J]=i.useState(""),[W,Se]=i.useState([]),[j,ye]=i.useState(null),[ve,ke]=i.useState("100%"),Wo=Z(n),U=Z(_e),c=Z(Co),Uo=i.useRef(!1),Oo=i.useMemo(()=>!!G||!G&&!to,[G,to]);i.useEffect(()=>{Uo.current?y||M(null):Uo.current=!0},[y,D]),i.useEffect(()=>{ye(me(l))},[l]);const O=i.useCallback(d=>{Oo&&(co(d),M((d==null?void 0:d.value)??null))},[Oo]),Le=i.useCallback(d=>{var g,R,Q,ao,Yo,Jo,Qo,Xo,Ko,oe,ee,ne,te,re,de,se,ie,le;if(fo(d),y){const ro=vo??(m==null?void 0:m.value.toString())??null;switch(d.key){case"ArrowUp":case"ArrowLeft":if(d.preventDefault(),ro!==null){const f=He(ro??"",j,W),Lo=(f==null?void 0:f.props.value)??((g=f==null?void 0:f.key)==null?void 0:g.toString().replace(".$",""))??null;M(Lo)}else M(((ao=(Q=(R=Ro(j,W))==null?void 0:R.props)==null?void 0:Q.value)==null?void 0:ao.toString())??null);break;case"ArrowDown":case"ArrowRight":if(d.preventDefault(),ro!==null){const f=$e(ro??"",j,W),Lo=(f==null?void 0:f.props.value)??((Yo=f==null?void 0:f.key)==null?void 0:Yo.toString().replace(".$",""))??null;M(Lo)}else M(((Xo=(Qo=(Jo=jo(j,W))==null?void 0:Jo.props)==null?void 0:Qo.value)==null?void 0:Xo.toString())??null);break;case"Enter":if(d.preventDefault(),ro!==null){J("");const f=so(ro??"",j);if(f){if(Y(!V),w==null||w(!1),!C&&F&&(m==null?void 0:m.value)===f.props.value){O(null),_==null||_(""),I==null||I(""),c.current&&(c.current.value="");return}O({value:((oe=(Ko=f==null?void 0:f.props)==null?void 0:Ko.value)==null?void 0:oe.toString())??"",displayValue:f.props.textValue||f.props.children,flagName:f.props.flagName??""}),c.current&&(c.current.value=H(f.props.children)),_==null||_((ee=f==null?void 0:f.props)==null?void 0:ee.value),I==null||I((ne=f==null?void 0:f.props)==null?void 0:ne.value)}}break;case"Escape":case"Tab":Y(!1),w==null||w(!1);break;case"Home":d.preventDefault(),M(((de=(re=(te=jo(j,W))==null?void 0:te.props)==null?void 0:re.value)==null?void 0:de.toString())??null);break;case"End":d.preventDefault(),M(((le=(ie=(se=Ro(j,W))==null?void 0:se.props)==null?void 0:ie.value)==null?void 0:le.toString())??null);break}}else switch(d.key){case"ArrowUp":case"ArrowDown":d.preventDefault(),Y(!0),w==null||w(!0);break}},[fo,y,vo,m==null?void 0:m.value,w,j,W,V,C,F,O,c,_,I]),_o=i.useCallback(()=>{var d;J(""),Y(g=>!g),w==null||w(!y),(d=c.current)==null||d.focus()},[c,w,y]),Zo=i.useCallback(d=>{Y(!0),w==null||w(!0),J(d.target.value??""),p==="combobox"&&(D?(O(null),_==null||_(""),I==null||I("")):(d.target.value===""||!d.target.value.replace(/ /g,""))&&!L&&!C&&(co(null),M(null),_==null||_(""),I==null||I("")))},[L,C,p,D,w,I,_,O]),zo=i.useCallback(()=>{["combobox"].includes(p)&&c.current&&setTimeout(()=>{document.activeElement!==c.current&&c.current&&(D||(m?c.current.value=H(m==null?void 0:m.displayValue):c.current.value=""),J(""))})},[p,c,D,m]);i.useEffect(()=>{!y&&["combobox"].includes(p)&&c.current&&zo()},[y,p,zo,c]),i.useEffect(()=>{var R;if(!j||!to&&!G){co(null),J(""),!D&&c.current&&!mo&&(c.current.value=""),M(Q=>Q??null);return}const d=to||G,g=so(d,j);g&&(co({value:d.toString(),displayValue:g.props.textValue||g.props.children,flagName:((R=g==null?void 0:g.props)==null?void 0:R.flagName)??""}),c.current&&!mo&&(c.current.value=H(g)))},[mo,j,to,G,D,c]),i.useEffect(()=>{var d,g;if(y){let R="100%";p==="select"?R=(d=U.current)!=null&&d.clientWidth?`${U.current.clientWidth}px`:"100%":p==="combobox"&&(R=(g=c.current)!=null&&g.clientWidth?`${c.current.clientWidth}px`:"100%"),ke(u.width??R)}},[U,c,y,p,u.width]);const ko=i.useCallback(d=>{wo==null||wo(d),p==="combobox"&&c.current&&c.current&&(!D||!C)&&(m?c.current.value=H(m==null?void 0:m.displayValue):c.current.value="")},[wo,p,c,D,C,m]),je=i.useMemo(()=>{switch(p){case"select":{const d=[e.dropdownSelect,!m&&e.dropdownInputIsEmpty,k&&e.dropdownInputIsErrored,B&&e.dropdownItemIsSelectedFocused,B&&e.dropdownInputIsDisabled,Io&&e.dropdownInputH5,"cdg-dropdown-input"].filter(Boolean).join(" "),g=[e.dropdownSelectButton,Io&&e.dropdownSelectButtonH5,"cdg-dropdown-button"].filter(Boolean).join(" ");return t.jsx("div",{className:d,role:"button","aria-required":x,children:t.jsxs("button",{id:no,type:"button",ref:U,disabled:B,onClick:_o,onBlur:ko,onFocus:yo,className:g,autoFocus:So,children:[S,t.jsx("span",{className:`${e.dropdownButtonText} cdg-dropdown-button-text`,children:m?m==null?void 0:m.displayValue:v}),h]})})}case"combobox":{const d=[e.dropdownComboBox,!m&&e.dropdownItemRightIconIsEmpty,B&&e.dropdownItemRightIconIsDisabled,k&&e.dropdownItemRightIconIsErrored,"cdg-dropdown-input"].filter(Boolean).join(" ");return t.jsxs("div",{className:d,role:"button","aria-required":x,children:[S,t.jsx("input",{id:no,ref:c,readOnly:L,disabled:B,placeholder:v,required:x,autoFocus:So,autoCapitalize:Eo,"aria-autocomplete":"list",role:"combobox","aria-invalid":k,"aria-expanded":y,onClick:_o,onChange:Zo,onBlur:ko,onFocus:yo,onCut:qo,onCopy:No,onPaste:Bo,onInput:Mo,onKeyUp:Ho,onSelect:$o,onKeyDown:fo,onBeforeInput:To,onCompositionEnd:Po,onCompositionStart:Fo,onCompositionUpdate:Ao,className:`${e.dropdownInputControl} cdg-dropdown-input-control`}),t.jsx("button",{type:"button",tabIndex:-1,disabled:B,onClick:_o,className:`${e.dropdownButtonControl} cdg-dropdown-button`,children:h})]})}default:return null}},[p,m,k,B,Io,x,no,U,_o,ko,yo,So,S,v,h,c,L,Eo,y,Zo,qo,No,Bo,Mo,Ho,$o,fo,To,Po,Fo,Ao]),Re=d=>{var g,R;if(!L){if(V&&(Y(!1),J(""),w==null||w(!1)),setTimeout(()=>{var Q,ao;(Q=c.current)==null||Q.focus(),(ao=U.current)==null||ao.focus()},0),!C&&!d.value){O(null),_==null||_(""),I==null||I("");return}if(!C&&F&&(m==null?void 0:m.value)===d.value){O(null),_==null||_(""),I==null||I("");return}(m==null?void 0:m.value)!==d.value&&(_==null||_(d.value),I==null||I(d.value)),O(d),["combobox"].includes(p)?c.current&&(c.current.value=H(d.displayValue),V?(J(H(d.displayValue)),c.current.blur()):(g=c.current)==null||g.focus()):(R=U.current)==null||R.focus()}},Go=()=>{setTimeout(()=>{var d,g;(d=c.current)==null||d.focus(),(g=U.current)==null||g.focus()},0)},De=i.useCallback(()=>{Y(!1),w==null||w(!1)},[w]),Ee=i.useCallback(d=>{Ce(d)},[]),qe=[e.dropdownWrapper,y&&e.dropdownOpening,Io&&e.dropdownH5,a,"cdg-dropdown"].filter(Boolean).join(" ");return t.jsx(po,{css:o,childrenRef:Wo,children:t.jsxs("div",{...be,className:qe,ref:Wo,onKeyDown:Le,children:[A&&t.jsxs("label",{htmlFor:no,id:`${no}-label`,className:`${e.dropdownLabel} cdg-dropdown-label`,children:[A,x&&t.jsx("span",{className:e.dropdownLabelAsterisk,children:"*"})]}),t.jsx(go.Provider,{value:{isLoadingMore:bo,isPositioned:xe,open:y,focusKey:vo,selectedKey:to,defaultSelectedKey:G,disabledKeys:oo??P??[],searchValue:Vo,labelId:`${no}-label`,selectedItem:m,disabledAutofill:mo,setSelectedItem:co,dropdownItemKeys:W,setDropdownItemKeys:Se,onItemClick:Re,onHeaderClick:Go},children:t.jsx(Be,{isOpen:y,anchor:je,css:{width:"100%"},direction:"bottom-left",onClose:De,onPositionedChange:Ee,isFloatingPortal:ge,children:t.jsx("div",{className:`${e.dropdownPopover} cdg-dropdown-popover`,onClick:Go,style:{...u,width:u.width??ve},children:t.jsx(Fn,{searchValue:Vo,isLoading:$,css:{maxHeight:N?`${N*An}px`:"16rem"},onLoadMore:xo,noDataMessage:T,children:j})})})}),k&&q&&t.jsx("div",{className:`${e.dropdownHelperText} ${e.dropdownHelperIsErrored} cdg-dropdown-error-message`,children:q}),E&&t.jsx("div",{className:`${e.dropdownHelperText} cdg-dropdown-helper-text`,children:E})]})})});ue.__docgenInfo={description:"",methods:[],displayName:"Icon"};z.__docgenInfo={description:"",methods:[],displayName:"Select"};const we=b.forwardRef((s,n)=>t.jsx(z,{...s,ref:n,type:"combobox"}));we.__docgenInfo={description:"",methods:[],displayName:"DropdownComboBox"};const fe=b.forwardRef((s,n)=>{const{children:r,title:o,isClickable:a,className:u,css:l={},onClick:p,...h}=s,v=Z(n),k=()=>{a&&(p==null||p())},x=[e.dropdownSection,u,"cdg-dropdown-section"].filter(Boolean).join(" "),L=[e.dropdownSectionContent,a&&e.dropdownSectionContentClickable,"cdg-dropdown-section-title"].filter(Boolean).join(" ");return t.jsx(po,{css:l,childrenRef:v,children:t.jsxs("div",{...h,className:x,ref:v,children:[o&&t.jsx("div",{className:L,onClick:k,children:o}),r]})})});fe.__docgenInfo={description:"",methods:[],displayName:"DropdownSection"};const Ie=b.forwardRef((s,n)=>t.jsx(z,{...s,ref:n,type:"select"}));Ie.__docgenInfo={description:"",methods:[],displayName:"DropdownSelect"};z.Item=Do;z.Select=Ie;z.ComboBox=we;z.Section=fe;z.Header=ho;export{z as S};
