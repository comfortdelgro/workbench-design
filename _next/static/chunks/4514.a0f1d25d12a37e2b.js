(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4514],{54514:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r,o,i=n(73804),c=n(50436),a=n(37601),l=n(9555),s=n(26098),u=n(20281),d=n.n(u),h=n(95562),f=n(15393),p=n(42096),g=n(99902),v=n(86843),x=n(45037),w=n(39378),m=n(82191),y=n(44194),C=n(1145),j=n(5045),k=n.n(j),b=n(31549),E=(0,C.$)();function B(e){var t,n=(0,y.useRef)(null),u=(0,y.useState)(!1),C=u[0],j=u[1],B=(0,y.useState)(""),M=B[0],T=B[1],Z=(0,x.gp)(),_=(0,m.useRouter)(),F=window.navigator.platform.toUpperCase().indexOf("MAC")>=0,L=(0,y.useCallback)(function(){j(!0)},[j]),S=function(){j(!1)},R=function(e){75===e.keyCode&&e.metaKey&&j(!0)};(0,y.useEffect)(function(){return window.addEventListener("keydown",R),function(){window.removeEventListener("keydown",R)}}),(0,y.useEffect)(function(){C&&document&&(T(""),setTimeout(function(){var e=document.querySelector('[placeholder="Enter the keyword you want to search..."]');null==e||e.focus()},200))},[C]);var I=(0,y.useMemo)(function(){if(M){var e=function(e){var t,n=function(e){return e.replace(RegExp(M,"gi"),'<span style="color: red; text-decoration: underline">$&</span>')};return(0,s.Z)((0,s.Z)({},e),{},{title:n(e.title),description:n(null!==(t=e.description)&&void 0!==t?t:"")})},t=(0,w.toLower)(M),n=E.reduce(function(n,r){return(0,w.toLower)(r.title).includes(t)&&n.push(e(r)),n},[]),r=E.reduce(function(n,r){return(0,w.toLower)(r.description).includes(t)&&n.push(e(r)),n},[]);return(0,w.chain)([].concat((0,l.Z)(n),(0,l.Z)(r))).unionBy("pathname").groupBy("parent").value()}return[]},[M]),H=(t=(0,a.Z)((0,c.Z)().mark(function e(t){return(0,c.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.push(t);case 2:j(!1);case 3:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Box,{css:{position:"relative"},children:Z?(0,b.jsx)(f.Button,{variant:"primary",onClick:L,css:{border:"1px solid var(--cdg-color-cdgBlue60)",height:34,width:34,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},children:r||(r=(0,b.jsx)(h.default,{fill:"white"}))}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.TextField,{css:{background:"var(--cdg-color-cdgBlue) !important",height:34,":first-child":{borderColor:"var(--cdg-color-cdgBlue60)",height:34,overflow:"hidden"}},onClick:L,placeholder:"Search..."}),(0,b.jsxs)("div",{className:k().shortcut,style:{position:"absolute",color:"#FFF",top:3,right:3},children:[F?"⌘":"Ctrl+","K"]})]})}),(0,b.jsx)(f.Modal.Trigger,{isOpen:C,handleClose:function(){return null==S?void 0:S()},size:"lg",children:(0,b.jsxs)(f.Modal,{children:[(0,b.jsx)(f.Modal.Title,{css:{width:"100%"},children:(0,b.jsx)(f.SearchField,{autoFocus:!0,onChange:function(e){T(e)},placeholder:"Enter the keyword you want to search...",value:M,css:{width:"100%",height:"var(--cdg-spacing-12)",".cdg-searchfield-button":{height:"var(--cdg-spacing-8)",width:"var(--cdg-spacing-8)"}},ref:n})}),""===M?(0,b.jsx)(f.Modal.Description,{css:{maxHeight:"50vh",overflowY:"auto",overflowX:"hidden",display:"grid",flex:"initial",gridTemplateColumns:"repeat(2, 1fr)",gridAutoRows:"var(--cdg-spacing-14)",flexDirection:"row",flexWrap:"wrap",gap:"var(--cdg-spacing-4)"},children:v.Z.map(function(e){var t;return(0,b.jsx)(f.Button,{size:"lg",onClick:function(){var t;return H(e.pathname+(null===(t=e.children)||void 0===t?void 0:t[0].pathname))},leftIcon:(0,b.jsx)(f.Icon,{icon:null!==(t=e.icon)&&void 0!==t?t:p.faChevronRight}),css:{width:"100%",".cdg-button-content-children":{flexGrow:1,justifyContent:"center"}},children:e.title})})}):(0,b.jsx)(f.Modal.Description,{css:{height:"50vh",overflowY:"auto",overflowX:"hidden",display:"flex",flex:"initial",flexDirection:"column",gap:"var(--cdg-spacing-4)"},children:d()(I).map(function(e){var t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.Typography.Header,{variant:"header4",children:n}),r.map(function(e){return(0,b.jsx)(f.Button,{size:"lg",variant:"secondary",onClick:function(){return H(e.pathname)},rightIcon:o||(o=(0,b.jsx)(g.FontAwesomeIcon,{icon:p.faChevronRight})),css:{width:"100%",".cdg-button-content-children":{flexGrow:1,justifyContent:"flex-start"}},children:(0,b.jsxs)(f.Box,{css:{display:"flex",justifyContent:"flex-start",flexDirection:"column"},children:[(0,b.jsx)(f.Typography.Header,{variant:"header5",css:{textAlign:"left",cursor:"pointer"},dangerouslySetInnerHTML:{__html:e.title}}),(0,b.jsx)(f.Typography.Label,{variant:"label1",css:{textAlign:"left",color:"var(--cdg-color-gray80)",fontSize:"14px",lineHeight:"1.3125rem",fontWeight:400,marginTop:"var(--cdg-spacing-gray80)",cursor:"pointer"},dangerouslySetInnerHTML:{__html:e.description}})]})},e.pathname)})]})})})]})})]})}},5045:function(e){e.exports={shortcut:"Shortcut_shortcut__yWx6U"}},95562:function(e,t,n){"use strict";n.r(t);var r=n(44194);let o=(0,r.forwardRef)((e,t)=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:t,...e},r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"M30.3145 26.9953L23.3008 19.9823C24.8957 17.6148 25.6826 14.6567 25.2614 11.5047C24.543 6.14338 20.1484 1.78037 14.7812 1.10093C6.80132 0.0912877 0.0911399 6.80073 1.10095 14.7798C1.78064 20.1487 6.14472 24.5463 11.5072 25.2611C14.6596 25.6822 17.6186 24.8957 19.9858 23.3007L26.9995 30.3137C27.9147 31.2288 29.3989 31.2288 30.3141 30.3137C31.2286 29.3973 31.2286 27.9092 30.3145 26.9953ZM5.63472 13.1862C5.63472 9.05107 8.99918 5.68698 13.1347 5.68698C17.2703 5.68698 20.6348 9.05107 20.6348 13.1862C20.6348 17.3213 17.2703 20.6854 13.1347 20.6854C8.99918 20.6854 5.63472 17.3225 5.63472 13.1862Z"}))));t.default=o}}]);