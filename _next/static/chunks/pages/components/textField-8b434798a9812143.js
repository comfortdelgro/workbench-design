(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[653],{40710:function(e,n,t){"use strict";t.r(n),t.d(n,{useFormattedTextField:function(){return c},useTextField:function(){return i}});var s=t(30227),r=t(86496),l=t(67925),o=t(52983);function i(e,n){let{inputElementType:t="input",isDisabled:o=!1,isRequired:i=!1,isReadOnly:a=!1,validationState:c,type:d="text",onChange:h=()=>{}}=e,{focusableProps:p}=(0,l.useFocusable)(e,n),{labelProps:x,fieldProps:u,descriptionProps:f,errorMessageProps:j}=(0,r.useField)(e),m=(0,s.filterDOMProps)(e,{labelable:!0}),k={type:d,pattern:e.pattern};return{labelProps:x,inputProps:(0,s.mergeProps)(m,"input"===t&&k,{disabled:o,readOnly:a,"aria-required":i||void 0,"aria-invalid":"invalid"===c||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:e.value,defaultValue:e.value?void 0:e.defaultValue,onChange:e=>h(e.target.value),autoComplete:e.autoComplete,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...p,...u}),descriptionProps:f,errorMessageProps:j}}function a(){return"undefined"!=typeof window&&window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges}function c(e,n,t){let r=(0,o.useRef)(n);r.current=n,(0,o.useEffect)(()=>{if(!a())return;let e=t.current,n=n=>{let t=r.current,s;switch(n.inputType){case"historyUndo":case"historyRedo":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":s=e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteContentForward":s=e.selectionEnd===e.selectionStart?e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd+1):e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteContentBackward":s=e.selectionEnd===e.selectionStart?e.value.slice(0,e.selectionStart-1)+e.value.slice(e.selectionStart):e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":s=e.value.slice(e.selectionStart);break;default:null!=n.data&&(s=e.value.slice(0,e.selectionStart)+n.data+e.value.slice(e.selectionEnd))}null!=s&&t.validate(s)||n.preventDefault()};return e.addEventListener("beforeinput",n,!1),()=>{e.removeEventListener("beforeinput",n,!1)}},[t,r]);let l=a()?null:e=>{let t=e.target.value.slice(0,e.target.selectionStart)+e.data+e.target.value.slice(e.target.selectionEnd);n.validate(t)||e.preventDefault()},{labelProps:c,inputProps:d,descriptionProps:h,errorMessageProps:p}=i(e,t),x=(0,o.useRef)(null);return{inputProps:(0,s.mergeProps)(d,{onBeforeInput:l,onCompositionStart(){let{value:e,selectionStart:n,selectionEnd:s}=t.current;x.current={value:e,selectionStart:n,selectionEnd:s}},onCompositionEnd(){if(!n.validate(t.current.value)){let{value:e,selectionStart:s,selectionEnd:r}=x.current;t.current.value=e,t.current.setSelectionRange(s,r),n.setInputValue(e)}}}),labelProps:c,descriptionProps:h,errorMessageProps:p}}},67522:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textField",function(){return t(33370)}])},47479:function(e,n,t){"use strict";var s=t(36690),r=t(93089),l=t(97458),o=t(37893),i=(0,r.Z)((0,s.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,l.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,l.jsx)("div",{className:"w-7 aspect-square bg-no-repeat bg-cover",style:{backgroundImage:"url(/compass-design/logo.svg)"}}),(0,l.jsx)("div",{className:"font-bold",children:"Admin Portal Design System"})]})},getNextSeoProps:function(){var e=(0,o.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});n.Z=i},33370:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d.ZP}});var s,r=t(36690),l=t(93089),o=t(97458),i=t(66038),a=t(47479);t(71505);var c=t(56945);t(54505);var d=t(37893),h=t(36042),p=t.n(h),x=t(89725),u=t(34355),f={filePath:"src/pages/components/textField.mdx",route:"/components/textField",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",chart:"Chart","date-picker":"Date Picker","date-range-picker":"Date Range Picker",footer:"Footer",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists",navbar:"Navbar","page-header":"Page Header",pagination:"Pagination","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio","range-calendar":"Range Calendar",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",slider:"Slider",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"date-picker",route:"/components/date-picker"},{kind:"MdxPage",name:"date-range-picker",route:"/components/date-range-picker"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"range-calendar",route:"/components/range-calendar"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Text Field",position:{start:{line:6,column:3,offset:228},end:{line:6,column:13,offset:238}}}],position:{start:{line:6,column:1,offset:226},end:{line:6,column:13,offset:238}},value:"Text Field"},{type:"heading",depth:3,children:[{type:"text",value:"Import:",position:{start:{line:12,column:5,offset:293},end:{line:12,column:12,offset:300}}}],position:{start:{line:12,column:1,offset:289},end:{line:12,column:12,offset:300}},value:"Import:"},{type:"heading",depth:3,children:[{type:"text",value:"Basic text field:",position:{start:{line:26,column:5,offset:455},end:{line:26,column:22,offset:472}}}],position:{start:{line:26,column:1,offset:451},end:{line:26,column:22,offset:472}},value:"Basic text field:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with label:",position:{start:{line:38,column:5,offset:649},end:{line:38,column:27,offset:671}}}],position:{start:{line:38,column:1,offset:645},end:{line:38,column:27,offset:671}},value:"Text field with label:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with helper text:",position:{start:{line:50,column:5,offset:874},end:{line:50,column:33,offset:902}}}],position:{start:{line:50,column:1,offset:870},end:{line:50,column:33,offset:902}},value:"Text field with helper text:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with input error:",position:{start:{line:70,column:5,offset:1175},end:{line:70,column:33,offset:1203}}}],position:{start:{line:70,column:1,offset:1171},end:{line:70,column:33,offset:1203}},value:"Text field with input error:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with icons:",position:{start:{line:94,column:5,offset:1574},end:{line:94,column:27,offset:1596}}}],position:{start:{line:94,column:1,offset:1570},end:{line:94,column:27,offset:1596}},value:"Text field with icons:"},{type:"heading",depth:3,children:[{type:"text",value:"Disabled text field:",position:{start:{line:116,column:5,offset:2025},end:{line:116,column:25,offset:2045}}}],position:{start:{line:116,column:1,offset:2021},end:{line:116,column:25,offset:2045}},value:"Disabled text field:"},{type:"heading",depth:3,children:[{type:"text",value:"Custom styling:",position:{start:{line:140,column:5,offset:2422},end:{line:140,column:20,offset:2437}}}],position:{start:{line:140,column:1,offset:2418},end:{line:140,column:20,offset:2437}},value:"Custom styling:"},{type:"heading",depth:3,children:[{type:"text",value:"Props:",position:{start:{line:169,column:5,offset:2995},end:{line:169,column:11,offset:3001}}}],position:{start:{line:169,column:1,offset:2991},end:{line:169,column:11,offset:3001}},value:"Props:"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:f.pageMap,route:f.route};var j="Text Field";function m(e){var n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",div:"div",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,c.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Text Field"}),"\n",(0,o.jsx)(n.p,{children:"Text Fields let users enter and edit text."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"import",children:"Import:"}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Textfield} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Textfield "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/textfield'"})]})})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"basic-text-field",children:"Basic text field:"}),"\n",(0,o.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,o.jsx)(u.default,{placeholder:"Enter your name"})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"text-field-with-label",children:"Text field with label:"}),"\n",(0,o.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,o.jsx)(u.default,{label:"Name",placeholder:"Enter your name"})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"text-field-with-helper-text",children:"Text field with helper text:"}),"\n",(0,o.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,o.jsx)(u.default,{label:"Name",placeholder:"Enter your name",helperText:"Helper Text"})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Helper Text'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"text-field-with-input-error",children:"Text field with input error:"}),"\n",(0,o.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,o.jsx)(u.default,{errored:!0,value:"Wrong Value",label:"Name",placeholder:"Enter your name",helperText:"Use Helper Text for Errors"})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"errored"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Wrong Value'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Use Helper Text for Errors'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"text-field-with-icons",children:"Text field with icons:"}),"\n",(0,o.jsxs)("section",{className:p().avatarShowcaseContainer,children:[(0,o.jsx)(u.default,{label:"Name",leftIcon:x.u8Q,placeholder:"Enter your name"}),(0,o.jsx)(u.default,{label:"Name",rightIcon:x.u8Q,placeholder:"Enter your name"})]}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"leftIcon"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{faThumbsUp} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"rightIcon"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{faThumbsUp}"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"disabled-text-field",children:"Disabled text field:"}),"\n",(0,o.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,o.jsx)(u.default,{value:"Wrong Value",label:"Name",placeholder:"Enter your name",helperText:"Use Helper Text for Errors",isDisabled:!0})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Wrong Value'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Use Helper Text for Errors'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDisabled"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"custom-styling",children:"Custom styling:"}),"\n",(0,o.jsxs)(n.p,{children:["You can style React Compass's components with the css prop. ",(0,o.jsx)("br",{}),"\nWith css prop, you can basically do anything that css can do."]}),"\n",(0,o.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,o.jsx)(u.default,{value:"Wrong Value",label:"Name",placeholder:"Enter your name",helperText:"Use Helper Text for Errors",isDisabled:!0,css:{width:"20rem"}})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Wrong Value'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Use Helper Text for Errors'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDisabled"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"css"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{width"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'20rem'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"props",children:"Props:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"placeholder"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"null"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"null"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Placeholder of the text field"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"label"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"null"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"null"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Label of the text field"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"helperText"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"string"})," | ",(0,o.jsx)(n.code,{children:"null"})]}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"errored"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"true"})," | ",(0,o.jsx)(n.code,{children:"false"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Throw error when input value is wrong"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"value"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Input value"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"rightIcon"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"IconProp"}),"|",(0,o.jsx)(n.code,{children:"false"}),"| ",(0,o.jsx)(n.code,{children:"true"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Icon placed on the right side of the text field"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"leftIcon"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"IconProp"}),"|",(0,o.jsx)(n.code,{children:"false"}),"| ",(0,o.jsx)(n.code,{children:"true"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Icon placed on the left side of the text field"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"isDisabled"})}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"false"}),"| ",(0,o.jsx)(n.code,{children:"true"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"false"})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Disable the text field when true"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"css "})}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"CSS"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(d.UW,{children:(0,o.jsxs)(n.p,{children:["Check out our ",(0,o.jsx)(n.a,{href:"/ladle?story=textfield--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,l.Z)((0,r.Z)({},e),{children:(0,o.jsx)(m,(0,r.Z)({},e))})):m(e)}f.title="string"==typeof j&&j||"Textfield";var g=function(e){return(0,o.jsx)(i.mK.Provider,{value:e,children:(0,o.jsx)(k,{})})};(s=globalThis).__nextra_pageContext__||(s.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/components/textField"]={Content:g,pageOpts:f,themeConfig:a.Z}},36042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi",iconWrapper:"Home_iconWrapper__pfdVa"}},63622:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{Icon:()=>r,default:()=>l});let s=t(84527),r=s.FontAwesomeIcon,l=r},34355:function(e,n,t){"use strict";var s;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:()=>l});let r=(s=t(24567),s&&s.__esModule?s:{default:s});r.default.displayName="TextField";let l=r.default},24567:function(e,n,t){"use strict";var s;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:()=>h});let r=t(40710),l=(s=t(52983),s&&s.__esModule?s:{default:s}),o=t(63622),i=t(78810),a=t(32553);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}let d=l.default.forwardRef((e,n)=>{let{css:t={},label:s,errored:d,helperText:h,leftIcon:p,rightIcon:x,isDisabled:u,...f}=e,j={label:s,isDisabled:u,inputElementType:"input",...f},m=(0,i.useDOMRef)(n),{labelProps:k,inputProps:g,descriptionProps:y,errorMessageProps:v}=(0,r.useTextField)(j,m);return l.default.createElement(a.StyledTextFieldWrapper,{css:t},s&&l.default.createElement(a.StyledTextFieldLabel,c({},k,{disabled:!!u}),s),l.default.createElement(a.StyledTextFieldBox,{disabled:!!u,errored:!!d},p?l.default.createElement(o.Icon,{className:"left-icon",icon:p}):null,l.default.createElement(a.StyledTextField,c({css:t,ref:m},g)),x?l.default.createElement(o.Icon,{className:"right-icon",icon:x}):null),!d&&h?l.default.createElement(a.StyledTextFieldHelperText,c({},y),h):null,d?l.default.createElement(a.StyledTextFieldHelperText,c({},v,{error:!0}),h):null)}),h=d},32553:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{StyledTextFieldWrapper:()=>r,StyledTextFieldLabel:()=>l,StyledTextFieldBox:()=>o,StyledTextField:()=>i,StyledTextFieldHelperText:()=>a});let s=t(37250),r=(0,s.styled)("div",{display:"block",fontFamily:"$sans"}),l=(0,s.styled)("label",{fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",display:"block",marginBottom:"$1",color:"$gray90",variants:{disabled:{true:{color:"$disabledText"}}}}),o=(0,s.styled)("div",{display:"flex",flexDirection:"row",alignItems:"center",borderWidth:"$medium",borderStyle:"solid",borderColor:"$divider",borderRadius:"$md",color:"$typeHeading",backgroundColor:"$whiteText",transition:"$default","&:focus-within":{borderColor:"$cdgBlue",".left-icon":{color:"$cdgBlue"}},".left-icon, .right-icon":{color:"$typeHeading",transition:"$default"},".left-icon":{width:"$5",height:"$5",marginLeft:"$2_5",marginRight:"-$1"},".right-icon":{width:"$4",height:"$4",marginRight:"$2_5",marginLeft:"-$1"},variants:{disabled:{true:{color:"$disabledText",backgroundColor:"$gray20",".left-icon, .right-icon":{color:"$disabledText"}}},errored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}}}}),i=(0,s.styled)("input",{fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",padding:"$1_5 $3",border:0,borderRadius:"$md",backgroundColor:"transparent","&:focus":{outline:"none"},"&:disabled":{cursor:"not-allowed"}}),a=(0,s.styled)("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"}}}})},78810:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useDOMRef",{enumerable:!0,get:()=>r});let s=t(52983);function r(e){let n=(0,s.useRef)(null);return(0,s.useImperativeHandle)(e,()=>n.current),n}}},function(e){e.O(0,[1786,5944,227,2024,7925,4527,6496,9774,2888,179],function(){return e(e.s=67522)}),_N_E=e.O()}]);