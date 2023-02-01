(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8865],{86496:function(e,s,n){"use strict";n.r(s),n.d(s,{useField:function(){return t},useLabel:function(){return o}});var r=n(80309);function o(e){let{id:s,label:n,"aria-labelledby":o,"aria-label":t,labelElementType:l="label"}=e;s=(0,r.Me)(s);let a=(0,r.Me)(),i={};return n?(o=o?`${o} ${a}`:a,i={id:a,htmlFor:"label"===l?s:void 0}):o||t||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:i,fieldProps:(0,r.bE)({id:s,"aria-label":t,"aria-labelledby":o})}}function t(e){let{description:s,errorMessage:n,validationState:t}=e,{labelProps:l,fieldProps:a}=o(e),i=(0,r.mp)([Boolean(s),Boolean(n),t]),c=(0,r.mp)([Boolean(s),Boolean(n),t]);return{labelProps:l,fieldProps:a=(0,r.dG)(a,{"aria-describedby":[i,c,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),descriptionProps:{id:i},errorMessageProps:{id:c}}}},75584:function(e,s,n){"use strict";n.r(s),n.d(s,{useProgressBar:function(){return a}});var r=n(30227),o=n(1826),t=n(86496),l=n(17850);function a(e){let{value:s=0,minValue:n=0,maxValue:a=100,valueLabel:i,isIndeterminate:c,formatOptions:d={style:"percent"}}=e,h=(0,r.filterDOMProps)(e,{labelable:!0}),{labelProps:p,fieldProps:x}=(0,t.useLabel)({...e,labelElementType:"span"}),k=((s=(0,o.uZ)(s,n,a))-n)/(a-n),u=(0,l.Ux)(d);if(!c&&!i){let g="percent"===d.style?k:s;i=u.format(g)}return{progressBarProps:(0,r.mergeProps)(h,{...x,"aria-valuenow":c?void 0:s,"aria-valuemin":n,"aria-valuemax":a,"aria-valuetext":c?void 0:i,role:"progressbar"}),labelProps:p}}},10742:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress-bar",function(){return n(91028)}])},47479:function(e,s,n){"use strict";var r=n(36690),o=n(93089),t=n(97458),l=n(37893),a=(0,o.Z)((0,r.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,t.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,t.jsx)("div",{className:"w-7 aspect-square bg-no-repeat bg-cover",style:{backgroundImage:"url(/compass-design/logo.svg)"}}),(0,t.jsx)("div",{className:"font-bold",children:"Admin Portal Design System"})]})},getNextSeoProps:function(){var e=(0,l.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});s.Z=a},91028:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return d.ZP}});var r,o=n(36690),t=n(93089),l=n(97458),a=n(66038),i=n(47479);n(71505);var c=n(56945);n(54505);var d=n(37893),h=n(36042),p=n.n(h),x=n(59189),k={filePath:"src/pages/components/progress-bar.mdx",route:"/components/progress-bar",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",carousel:"Carousel",chart:"Chart","dashboard-sidecard":"Dashboard Sidecard","date-picker":"Date Picker","date-range-picker":"Date Range Picker",dropdown:"Dropdown",file:"File",footer:"Footer",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists","multiple-dropdown":"Multiple Dropdown",navbar:"Navbar","page-header":"Page Header",pagination:"Pagination","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio","range-calendar":"Range Calendar",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",slider:"Slider",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips",typography:"Typography","video-player":"Video Player",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"carousel",route:"/components/carousel"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"dashboard-sidecard",route:"/components/dashboard-sidecard"},{kind:"MdxPage",name:"date-picker",route:"/components/date-picker"},{kind:"MdxPage",name:"date-range-picker",route:"/components/date-range-picker"},{kind:"MdxPage",name:"dropdown",route:"/components/dropdown"},{kind:"MdxPage",name:"file",route:"/components/file"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"multiple-dropdown",route:"/components/multiple-dropdown"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"range-calendar",route:"/components/range-calendar"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"typography",route:"/components/typography"},{kind:"MdxPage",name:"video-player",route:"/components/video-player"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"ProgressBar",position:{start:{line:5,column:3,offset:163},end:{line:5,column:14,offset:174}}}],position:{start:{line:5,column:1,offset:161},end:{line:5,column:14,offset:174}},value:"ProgressBar"},{type:"heading",depth:3,children:[{type:"text",value:"Import:",position:{start:{line:11,column:5,offset:349},end:{line:11,column:12,offset:356}}}],position:{start:{line:11,column:1,offset:345},end:{line:11,column:12,offset:356}},value:"Import:"},{type:"heading",depth:3,children:[{type:"text",value:"Basic Usage:",position:{start:{line:25,column:5,offset:518},end:{line:25,column:17,offset:530}}}],position:{start:{line:25,column:1,offset:514},end:{line:25,column:17,offset:530}},value:"Basic Usage:"},{type:"heading",depth:3,children:[{type:"text",value:"Size:",position:{start:{line:37,column:5,offset:763},end:{line:37,column:10,offset:768}}}],position:{start:{line:37,column:1,offset:759},end:{line:37,column:10,offset:768}},value:"Size:"},{type:"heading",depth:3,children:[{type:"text",value:"Color:",position:{start:{line:63,column:5,offset:1537},end:{line:63,column:11,offset:1543}}}],position:{start:{line:63,column:1,offset:1533},end:{line:63,column:11,offset:1543}},value:"Color:"},{type:"heading",depth:3,children:[{type:"text",value:"Variant:",position:{start:{line:81,column:5,offset:2011},end:{line:81,column:13,offset:2019}}}],position:{start:{line:81,column:1,offset:2007},end:{line:81,column:13,offset:2019}},value:"Variant:"},{type:"heading",depth:3,children:[{type:"text",value:"Custom styling:",position:{start:{line:99,column:5,offset:2483},end:{line:99,column:20,offset:2498}}}],position:{start:{line:99,column:1,offset:2479},end:{line:99,column:20,offset:2498}},value:"Custom styling:"},{type:"heading",depth:3,children:[{type:"text",value:"Props:",position:{start:{line:114,column:5,offset:2876},end:{line:114,column:11,offset:2882}}}],position:{start:{line:114,column:1,offset:2872},end:{line:114,column:11,offset:2882}},value:"Props:"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:k.pageMap,route:k.route};var u="ProgressBar";function g(e){var s=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",div:"div",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"ProgressBar"}),"\n",(0,l.jsx)(s.p,{children:"Provides the accessibility implementation for a progress bar component. Progress bars show either determinate or indeterminate progress of an operation over time."}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"import",children:"Import:"}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {ProgressBar} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})})}),"\n",(0,l.jsx)(s.p,{children:"or"}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ProgressBar "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/progress-bar'"})]})})})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"basic-usage",children:"Basic Usage:"}),"\n",(0,l.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,l.jsx)(x.default,{value:20,label:"Label Left",rightLabel:"Label Right"})}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Label Left'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"rightLabel"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Label Right'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"size",children:"Size:"}),"\n",(0,l.jsxs)("section",{className:p().avatarShowcaseContainer,style:{flexDirection:"column"},children:[(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,size:"sm",label:"sm"})}),(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,size:"md",label:"md"})}),(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,size:"lg",label:"lg"})}),(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,size:"xl",label:"xl"})})]}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sm'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sm'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'md'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'md'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'lg'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'lg'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'xl'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'xl'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})]})]})})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"color",children:"Color:"}),"\n",(0,l.jsxs)("section",{className:p().avatarShowcaseContainer,style:{flexDirection:"column"},children:[(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,color:"blue",label:"blue"})}),(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,color:"green",label:"green"})})]}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'blue'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'blue'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'green'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'md'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})]})})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"variant",children:"Variant:"}),"\n",(0,l.jsxs)("section",{className:p().avatarShowcaseContainer,style:{flexDirection:"column"},children:[(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,variant:"normal",label:"normal"})}),(0,l.jsx)("div",{style:{width:"100%",marginBottom:"10px"},children:(0,l.jsx)(x.default,{value:20,variant:"rounded",label:"rounded"})})]}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'normal'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'rounded'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})]})})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"custom-styling",children:"Custom styling:"}),"\n",(0,l.jsxs)(s.p,{children:["You can style React Compass's components with the css prop. ",(0,l.jsx)("br",{}),"\nWith css prop, you can basically do anything that css can do."]}),"\n",(0,l.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,l.jsx)(x.default,{value:20,css:{".progress-bar":{backgroundColor:"red"}}})}),"\n",(0,l.jsx)(s.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ProgressBar"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"20"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"css"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{ "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'.progress-bar'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {backgroundColor"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'red'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} }} />"})]})})})}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(s.h3,{id:"props",children:"Props:"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{align:"left",children:"Name"}),(0,l.jsx)(s.th,{align:"left",children:"Type"}),(0,l.jsx)(s.th,{align:"left",children:"Default"}),(0,l.jsx)(s.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"isIndeterminate"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"boolean"})}),(0,l.jsx)(s.td,{align:"left",children:"-"}),(0,l.jsx)(s.td,{align:"left",children:"Whether presentation is indeterminate when progress isn't known."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"label"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"boolean"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"false"})}),(0,l.jsx)(s.td,{align:"left",children:"The content to display as the left label."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"rightLabel"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"boolean"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"false"})}),(0,l.jsx)(s.td,{align:"left",children:"The content to display as the right label."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"value"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"number"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"0"})}),(0,l.jsx)(s.td,{align:"left",children:"The current value (controlled)."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"minValue"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"number"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"0"})}),(0,l.jsx)(s.td,{align:"left",children:"The smallest value allowed for the input."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"maxValue"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"number"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"100"})}),(0,l.jsx)(s.td,{align:"left",children:"Whether presentation is indeterminate when progress isn't known."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"isIndeterminate"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"boolean"})}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"false"})}),(0,l.jsx)(s.td,{align:"left",children:"Whether presentation is indeterminate when progress isn't known."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{align:"left",children:"css"}),(0,l.jsx)(s.td,{align:"left",children:(0,l.jsx)(s.code,{children:"CSS"})}),(0,l.jsx)(s.td,{align:"left",children:"—"}),(0,l.jsx)(s.td,{align:"left",children:"Extra styles for progress bar"})]})]})]}),"\n",(0,l.jsx)(s.hr,{}),"\n",(0,l.jsx)(d.UW,{children:(0,l.jsxs)(s.p,{children:["Check out our ",(0,l.jsx)(s.a,{href:"/ladle?story=progress-bar--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,c.ah)(),e.components).wrapper;return s?(0,l.jsx)(s,(0,t.Z)((0,o.Z)({},e),{children:(0,l.jsx)(g,(0,o.Z)({},e))})):g(e)}k.title="string"==typeof u&&u||"Progress Bar";var m=function(e){return(0,l.jsx)(a.mK.Provider,{value:e,children:(0,l.jsx)(j,{})})};(r=globalThis).__nextra_pageContext__||(r.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/components/progress-bar"]={Content:m,pageOpts:k,themeConfig:i.Z}},36042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi",iconWrapper:"Home_iconWrapper__pfdVa",contentSliderDemo:"Home_contentSliderDemo__C8wM5","slide-content":"Home_slide-content__7jA7J"}},59189:function(e,s,n){"use strict";var r;Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:()=>t});let o=(r=n(38857),r&&r.__esModule?r:{default:r});o.default.displayName="ProgressBar";let t=o.default},38857:function(e,s,n){"use strict";var r;Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:()=>d});let o=n(75584),t=(r=n(52983),r&&r.__esModule?r:{default:r}),l=n(78810),a=n(82027);function i(){return(i=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let c=t.default.forwardRef((e,s)=>{let{css:n={},label:r,rightLabel:c,size:d="lg",color:h="blue",variant:p="normal",value:x=0,minValue:k=0,maxValue:u=100}=e,g=(0,l.useDOMRef)(s),{labelProps:j}=(0,o.useProgressBar)(e),m=`${Math.round(100*((x-k)/(u-k)))}%`;return t.default.createElement(a.StyledProgressBar,i({css:n,ref:g,size:d,color:h,variant:p},j,{}),(!!r||!!c)&&t.default.createElement("div",{className:"progress-bar-label"},t.default.createElement("span",i({},j),r??""),c&&t.default.createElement("span",i({},j),c??"")),t.default.createElement("div",{className:"progress-bar"},t.default.createElement("div",{style:{width:m}})))}),d=c},82027:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"StyledProgressBar",{enumerable:!0,get:()=>o});let r=n(37250),o=(0,r.styled)("div",{width:"100%",".progress-bar-label":{display:"flex",justifyContent:"space-between",marginBottom:"$2","& span":{fontWeight:"$normal",fontSize:"$label1"}},".progress-bar":{backgroundColor:"$gray30","& div":{height:"100%",backgroundColor:"#009EDA"}},variants:{variant:{normal:{},rounded:{".progress-bar":{borderRadius:"$full","& div":{borderRadius:"$full"}}}},color:{blue:{".progress-bar":{"& div":{backgroundColor:"#009EDA"}}},green:{".progress-bar":{"& div":{backgroundColor:"$success"}}}},size:{sm:{".progress-bar":{height:"$0_5"}},md:{".progress-bar":{height:"$1"}},lg:{".progress-bar":{height:"$2"}},xl:{".progress-bar":{height:"$3"}}}},defaultVariants:{size:"lg",color:"green",variant:"normal"}})},78810:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"useDOMRef",{enumerable:!0,get:()=>o});let r=n(52983);function o(e){let s=(0,r.useRef)(null);return(0,r.useImperativeHandle)(e,()=>s.current),s}}},function(e){e.O(0,[5944,227,7850,309,9774,2888,179],function(){return e(e.s=10742)}),_N_E=e.O()}]);