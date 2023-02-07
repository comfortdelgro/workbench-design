(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7408],{80633:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design/colors",function(){return n(64084)}])},70501:function(e,o,n){"use strict";var t=n(97458),r=n(52983),s=n(14413),a=function(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw Error("Invalid HEX color.");var o=parseInt(e.slice(0,2),16),n=parseInt(e.slice(2,4),16),t=parseInt(e.slice(4,6),16);return .299*o+.587*n+.114*t>186?"#000000":"#FFFFFF"},i=function(e){if(e.startsWith("var(")){var o,n,t,r,s,a=e.replace("var(","").replace(")","");return window.getComputedStyle(document.documentElement).getPropertyValue(a)}return e.startsWith("rgb")?(r=((t=(o=e).replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i))&&t[4]||"").trim(),s=t?(256|Number(t[1])).toString(16).slice(1)+(256|Number(t[2])).toString(16).slice(1)+(256|Number(t[3])).toString(16).slice(1):o,"#"+(s+=(255*(""!==r?Number(r):1)|256).toString(16).slice(1))):e},l=function(e){var o=e.color,n=(0,r.useState)(null),l=n[0],c=n[1],d=(0,r.useState)(1),m=d[0],u=d[1];return(0,r.useEffect)(function(){var e;c(((e=i(o.value)).startsWith("#")&&9===e.length?{color:e.slice(0,7),opacity:parseInt(e.slice(7),16)/255}:{color:e,opacity:1}).color),u(m)},[o.value,m]),(0,t.jsxs)("div",{className:"w-36 h-24 p-2 font-mono text-xs font-semibold flex flex-col items-start justify-between cursor-copy flex-shrink-0 transition-all hover:scale-105",style:{backgroundColor:o.value,opacity:m,color:l?a(l):"transparent"},onClick:function(){navigator&&navigator.clipboard.writeText(l||""),s.ZP.success("Copied to clipboard")},children:[(0,t.jsx)("div",{children:o.token}),(0,t.jsx)("div",{children:l})]})};o.Z=l},47479:function(e,o,n){"use strict";var t=n(36690),r=n(93089),s=n(97458),a=n(37893),i=(0,r.Z)((0,t.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,s.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,s.jsx)("div",{className:"w-7 aspect-square bg-no-repeat bg-cover",style:{backgroundImage:"url(/compass-design/logo.svg)"}}),(0,s.jsx)("div",{className:"font-bold",children:"Compass Design"})]})},getNextSeoProps:function(){var e=(0,a.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});o.Z=i},64084:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return u.ZP}});var t,r=n(36690),s=n(93089),a=n(97458),i=n(66038),l=n(47479);n(71505);var c=n(56945);n(54505);var d=n(37250),m=n(70501),u=n(37893),p={filePath:"src/pages/design/colors.mdx",route:"/design/colors",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",carousel:"Carousel",chart:"Chart",checkbox:"Checkbox","dashboard-sidecard":"Dashboard Sidecard","date-picker":"Date Picker","date-range-picker":"Date Range Picker",dialog:"Dialog",dropdown:"Dropdown",file:"File",footer:"Footer",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists","multiple-dropdown":"Multiple Dropdown",navbar:"Navbar","page-header":"Page Header",pagination:"Pagination",popover:"Popover","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio","range-calendar":"Range Calendar",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",slider:"Slider",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header","table-v2":"Table V2",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips",typography:"Typography","video-player":"Video Player",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"carousel",route:"/components/carousel"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"checkbox",route:"/components/checkbox"},{kind:"MdxPage",name:"dashboard-sidecard",route:"/components/dashboard-sidecard"},{kind:"MdxPage",name:"date-picker",route:"/components/date-picker"},{kind:"MdxPage",name:"date-range-picker",route:"/components/date-range-picker"},{kind:"MdxPage",name:"dialog",route:"/components/dialog"},{kind:"MdxPage",name:"dropdown",route:"/components/dropdown"},{kind:"MdxPage",name:"file",route:"/components/file"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"multiple-dropdown",route:"/components/multiple-dropdown"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"popover",route:"/components/popover"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"range-calendar",route:"/components/range-calendar"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"table-v2",route:"/components/table-v2"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"typography",route:"/components/typography"},{kind:"MdxPage",name:"video-player",route:"/components/video-player"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Colors",position:{start:{line:5,column:3,offset:145},end:{line:5,column:9,offset:151}}}],position:{start:{line:5,column:1,offset:143},end:{line:5,column:9,offset:151}},value:"Colors"},{type:"heading",depth:2,children:[{type:"text",value:"Palette",position:{start:{line:9,column:4,offset:258},end:{line:9,column:11,offset:265}}}],position:{start:{line:9,column:1,offset:255},end:{line:9,column:11,offset:265}},value:"Palette"},{type:"heading",depth:3,children:[{type:"text",value:"Primary Colors",position:{start:{line:11,column:5,offset:271},end:{line:11,column:19,offset:285}}}],position:{start:{line:11,column:1,offset:267},end:{line:11,column:19,offset:285}},value:"Primary Colors"},{type:"heading",depth:3,children:[{type:"text",value:"Secondary Colors",position:{start:{line:42,column:5,offset:1319},end:{line:42,column:21,offset:1335}}}],position:{start:{line:42,column:1,offset:1315},end:{line:42,column:21,offset:1335}},value:"Secondary Colors"},{type:"heading",depth:3,children:[{type:"text",value:"Shades & Tints",position:{start:{line:60,column:5,offset:2148},end:{line:60,column:19,offset:2162}}}],position:{start:{line:60,column:1,offset:2144},end:{line:60,column:19,offset:2162}},value:"Shades & Tints"},{type:"heading",depth:2,children:[{type:"text",value:"Rules",position:{start:{line:109,column:4,offset:3795},end:{line:109,column:9,offset:3800}}}],position:{start:{line:109,column:1,offset:3792},end:{line:109,column:9,offset:3800}},value:"Rules"},{type:"heading",depth:3,children:[{type:"text",value:"Accessibility",position:{start:{line:111,column:5,offset:3806},end:{line:111,column:18,offset:3819}}}],position:{start:{line:111,column:1,offset:3802},end:{line:111,column:18,offset:3819}},value:"Accessibility"},{type:"heading",depth:3,children:[{type:"text",value:"Contrast Ratio",position:{start:{line:115,column:5,offset:4052},end:{line:115,column:19,offset:4066}}}],position:{start:{line:115,column:1,offset:4048},end:{line:115,column:19,offset:4066}},value:"Contrast Ratio"},{type:"heading",depth:3,children:[{type:"text",value:"RAG (Red, Amber, and Green)",position:{start:{line:121,column:5,offset:4697},end:{line:121,column:32,offset:4724}}}],position:{start:{line:121,column:1,offset:4693},end:{line:121,column:32,offset:4724}},value:"RAG (Red, Amber, and Green)"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:p.pageMap,route:p.route};var g="Colors";function h(e){var o=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ol:"ol",li:"li"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h1,{children:"Colors"}),"\n",(0,a.jsx)(o.p,{children:"Color distinguishes a brand. It is used to convey personality, attracts the eye and indicate change."}),"\n",(0,a.jsx)(o.h2,{id:"palette",children:"Palette"}),"\n",(0,a.jsx)(o.h3,{id:"primary-colors",children:"Primary Colors"}),"\n",(0,a.jsx)(o.p,{children:"ComfortDelgro color palette has been created to reflect the spirit of our brand. Blue is used across all our communication as an essential element of branding. Primary color is the color displayed most frequently across your app's screens and components."}),"\n",(0,a.jsx)(o.p,{children:"Black is used primarily for body text and headings, and White is used for screen backgrounds and negative space."}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:"Main Colors"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row mt-5",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue}),(0,a.jsx)(m.Z,{color:d.theme.colors.typeHeading}),(0,a.jsx)(m.Z,{color:d.theme.colors.background})]}),"\n",(0,a.jsxs)(o.ol,{start:"2",children:["\n",(0,a.jsx)(o.li,{children:"Text Colors"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row mt-5",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.primaryText}),(0,a.jsx)(m.Z,{color:d.theme.colors.secondaryText}),(0,a.jsx)(m.Z,{color:d.theme.colors.disabledText}),(0,a.jsx)(m.Z,{color:d.theme.colors.whiteText})]}),"\n",(0,a.jsxs)(o.ol,{start:"3",children:["\n",(0,a.jsx)(o.li,{children:"Dividers & Borders"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row mt-5",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.divider}),(0,a.jsx)(m.Z,{color:d.theme.colors.border}),(0,a.jsx)(m.Z,{color:d.theme.colors.activeBorder})]}),"\n",(0,a.jsx)(o.h3,{id:"secondary-colors",children:"Secondary Colors"}),"\n",(0,a.jsx)(o.p,{children:"Secondary color provides more ways to accent and distinguish our product. Each color is selected with purpose in order to provide meaningful feedback within our products. Secondary colors can also be used to create unique secondary brands for each one of ComfortDelgro products."}),"\n",(0,a.jsxs)("div",{className:"grid grid-rows-2 grid-cols-5 gap-0 mt-5 w-fit",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.infoBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.dangerBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.successBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.severeWarningBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.warningBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.info}),(0,a.jsx)(m.Z,{color:d.theme.colors.danger}),(0,a.jsx)(m.Z,{color:d.theme.colors.success}),(0,a.jsx)(m.Z,{color:d.theme.colors.severeWarning}),(0,a.jsx)(m.Z,{color:d.theme.colors.warning})]}),"\n",(0,a.jsx)(o.h3,{id:"shades--tints",children:"Shades & Tints"}),"\n",(0,a.jsx)(o.p,{children:"We intend for tints and shades to be ever evolving, offering an endless palette to choose from. Usage of these colors varies depending on scenarios, but they come in handy for components in our products."}),"\n",(0,a.jsxs)(o.ol,{children:["\n",(0,a.jsx)(o.li,{children:"Theme"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"grid grid-rows-2 grid-cols-4 gap-0 mt-5 w-fit",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue10}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue20}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue40}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue60}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue80}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue100}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue120}),(0,a.jsx)(m.Z,{color:d.theme.colors.cdgBlue140})]}),"\n",(0,a.jsxs)(o.ol,{start:"2",children:["\n",(0,a.jsx)(o.li,{children:"Overlays"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row mt-5",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.overlayLight}),(0,a.jsx)(m.Z,{color:d.theme.colors.overlayDark})]}),"\n",(0,a.jsxs)(o.ol,{start:"3",children:["\n",(0,a.jsx)(o.li,{children:"Grays"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"grid grid-rows-3 grid-cols-4 gap-0 mt-5 w-fit",children:[(0,a.jsx)(m.Z,{color:{token:"white",value:"#FFFFFF"}}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray10}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray20}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray30}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray40}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray50}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray60}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray70}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray80}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray90}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray100}),(0,a.jsx)(m.Z,{color:d.theme.colors.gray110})]}),"\n",(0,a.jsxs)(o.ol,{start:"4",children:["\n",(0,a.jsx)(o.li,{children:"Backgrounds"}),"\n"]}),"\n",(0,a.jsxs)("div",{className:"flex flex-row mt-5",children:[(0,a.jsx)(m.Z,{color:d.theme.colors.primaryBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.secondaryBg}),(0,a.jsx)(m.Z,{color:d.theme.colors.darkerBg})]}),"\n",(0,a.jsx)(o.h2,{id:"rules",children:"Rules"}),"\n",(0,a.jsx)(o.h3,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsx)(o.p,{children:"All our product user interface should meet minimum WCAG AA level contrast guidelines. Low contrast can be problematic for people with lower vision, color blindness or even in non-optimal conditions (outdoor, bright sunlight)."}),"\n",(0,a.jsx)(o.h3,{id:"contrast-ratio",children:"Contrast Ratio"}),"\n",(0,a.jsx)(o.p,{children:"All colors in this section are marked with their contrast ratio against White. If you use these colors on any other background or use these as background with text other than White, you will need to calculate these ratios again."}),"\n",(0,a.jsx)(o.p,{children:"The minimum required contrast ration depends on the text size and weight. To mantain WCAG AA level of contrast ratio, colors are required to be at least 4.5:1 for normal text and 3:1 for large text, and 3:1 for graphics and user interface components (such as form input borders), with exception to text or images of text that are part of an inactive user interface component (disabled states)."}),"\n",(0,a.jsx)(o.h3,{id:"rag-red-amber-and-green",children:"RAG (Red, Amber, and Green)"}),"\n",(0,a.jsx)(o.p,{children:"This palette should only be used to convey status or meaning for messages and feedback. For contexts such as selecting risk, the full RAG palette can be used to reinforce positivity or negativity of the user’s choice."})]})}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=Object.assign({},(0,c.ah)(),e.components).wrapper;return o?(0,a.jsx)(o,(0,s.Z)((0,r.Z)({},e),{children:(0,a.jsx)(h,(0,r.Z)({},e))})):h(e)}p.title="string"==typeof g&&g||"Colors";var f=function(e){return(0,a.jsx)(i.mK.Provider,{value:e,children:(0,a.jsx)(x,{})})};(t=globalThis).__nextra_pageContext__||(t.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/design/colors"]={Content:f,pageOpts:p,themeConfig:l.Z}}},function(e){e.O(0,[5944,9774,2888,179],function(){return e(e.s=80633)}),_N_E=e.O()}]);