(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9725],{3986:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/calendar",function(){return s(37256)}])},36836:function(e,n,s){"use strict";s.d(n,{H9:function(){return d},Ps:function(){return x},fC:function(){return c},xf:function(){return h}});var t=s(30191),a=s(97458),r=s(38443),o=s(79913),l=s(17850),i=s(52983);function c(){var e=(0,t.Z)(i.useState((0,o.parseDate)((0,o.today)((0,o.getLocalTimeZone)()).toString())),2),n=e[0],s=e[1],c=(0,l.aQ)({dateStyle:"full"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Selected date:"}),(0,a.jsx)("span",{style:{marginLeft:"4px"},children:c.format(n.toDate((0,o.getLocalTimeZone)()))})]}),(0,a.jsx)(r.Calendar,{value:n,onChange:function(e){return s(e)}})]})}function d(){var e=(0,l.bU)().locale;return(0,a.jsx)(r.Calendar,{isDateUnavailable:function(n){return(0,o.isWeekend)(n,e)}})}function h(){var e=(0,t.Z)(i.useState({start:(0,o.parseDate)("2020-02-03"),end:(0,o.parseDate)("2020-02-08")}),2),n=e[0],s=e[1],c=(0,l.aQ)({dateStyle:"long"});return(0,a.jsxs)(a.Fragment,{children:[n&&c.formatRange(n.start.toDate((0,o.getLocalTimeZone)()),n.end.toDate((0,o.getLocalTimeZone)())),(0,a.jsx)(r.RangeCalendar,{onChange:s})]})}function x(e){var n=e.contiguos,s=(0,l.bU)().locale;return(0,a.jsx)(r.RangeCalendar,{allowsNonContiguousRanges:void 0!==n&&n,isDateUnavailable:function(e){return(0,o.isWeekend)(e,s)}})}},37256:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return k.ZP}});var t,a=s(36690),r=s(93089),o=s(97458),l=s(66038),i=s(47479);s(71505);var c=s(56945);s(54505);var d=s(36042),h=s.n(d),x=s(36836),p=s(97077),k=s(37893),j={filePath:"src/pages/components/calendar.mdx",route:"/components/calendar",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",chart:"Chart","dashboard-sidecard":"Dashboard Sidecard","date-picker":"Date Picker","date-range-picker":"Date Range Picker",dropdown:"Dropdown",file:"File",footer:"Footer",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists",navbar:"Navbar","page-header":"Page Header",pagination:"Pagination","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio","range-calendar":"Range Calendar",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",slider:"Slider",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips",typography:"Typography","video-player":"Video Player",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"dashboard-sidecard",route:"/components/dashboard-sidecard"},{kind:"MdxPage",name:"date-picker",route:"/components/date-picker"},{kind:"MdxPage",name:"date-range-picker",route:"/components/date-range-picker"},{kind:"MdxPage",name:"dropdown",route:"/components/dropdown"},{kind:"MdxPage",name:"file",route:"/components/file"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"range-calendar",route:"/components/range-calendar"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"typography",route:"/components/typography"},{kind:"MdxPage",name:"video-player",route:"/components/video-player"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Calendar",position:{start:{line:5,column:3,offset:195},end:{line:5,column:11,offset:203}}}],position:{start:{line:5,column:1,offset:193},end:{line:5,column:11,offset:203}},value:"Calendar"},{type:"heading",depth:3,children:[{type:"text",value:"Pre-Install",position:{start:{line:9,column:5,offset:306},end:{line:9,column:16,offset:317}}}],position:{start:{line:9,column:1,offset:302},end:{line:9,column:16,offset:317}},value:"Pre-Install"},{type:"heading",depth:3,children:[{type:"text",value:"Import",position:{start:{line:35,column:5,offset:775},end:{line:35,column:11,offset:781}}}],position:{start:{line:35,column:1,offset:771},end:{line:35,column:11,offset:781}},value:"Import"},{type:"heading",depth:3,children:[{type:"text",value:"Basic",position:{start:{line:49,column:5,offset:933},end:{line:49,column:10,offset:938}}}],position:{start:{line:49,column:1,offset:929},end:{line:49,column:10,offset:938}},value:"Basic"},{type:"heading",depth:3,children:[{type:"text",value:"Controlled",position:{start:{line:59,column:5,offset:1051},end:{line:59,column:15,offset:1061}}}],position:{start:{line:59,column:1,offset:1047},end:{line:59,column:15,offset:1061}},value:"Controlled"},{type:"heading",depth:3,children:[{type:"text",value:"Validation",position:{start:{line:96,column:5,offset:1840},end:{line:96,column:15,offset:1850}}}],position:{start:{line:96,column:1,offset:1836},end:{line:96,column:15,offset:1850}},value:"Validation"},{type:"heading",depth:3,children:[{type:"text",value:"Disabled",position:{start:{line:113,column:5,offset:2406},end:{line:113,column:13,offset:2414}}}],position:{start:{line:113,column:1,offset:2402},end:{line:113,column:13,offset:2414}},value:"Disabled"},{type:"heading",depth:3,children:[{type:"text",value:"Read only",position:{start:{line:123,column:5,offset:2597},end:{line:123,column:14,offset:2606}}}],position:{start:{line:123,column:1,offset:2593},end:{line:123,column:14,offset:2606}},value:"Read only"},{type:"heading",depth:3,children:[{type:"text",value:"Props",position:{start:{line:133,column:5,offset:2789},end:{line:133,column:10,offset:2794}}}],position:{start:{line:133,column:1,offset:2785},end:{line:133,column:10,offset:2794}},value:"Props"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:j.pageMap,route:j.route};var u="Calendar";function y(e){var n=Object.assign({h1:"h1",p:"p",h3:"h3",div:"div",pre:"pre",code:"code",span:"span",hr:"hr",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,c.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Calendar"}),"\n",(0,o.jsx)(n.p,{children:"Calendars display a grid of days in one or more months and allow users to select a single date."}),"\n",(0,o.jsx)(n.h3,{id:"pre-install",children:"Pre-Install"}),"\n",(0,o.jsx)(n.p,{children:"Install these packages to use their utilities"}),"\n","\n",(0,o.jsxs)(k.mQ,{items:["npm","yarn","pnpm"],defaultIndex:0,children:[(0,o.jsx)(k.OK,{children:(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  npm i @react-aria/i18n @internationalized/date "})})})})})}),(0,o.jsx)(k.OK,{children:(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  yarn add @react-aria/i18n @internationalized/date "})})})})})}),(0,o.jsx)(k.OK,{children:(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  pnpm add @react-aria/i18n @internationalized/date "})})})})})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"import",children:"Import"}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Calendar} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Calendar "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/calendar'"})]})})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,o.jsx)("section",{className:h().componentShowcaseContainer,children:(0,o.jsx)(p.default,{})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,o.jsx)(n.h3,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)("section",{className:h().componentShowcaseContainer,children:(0,o.jsx)(x.fC,{})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Calendar} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  DateValue"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  getLocalTimeZone"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  parseDate"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  today"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@internationalized/date'"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {useDateFormatter} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@react-aria/i18n'"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ControlledCalendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"date"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"setDate"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"React"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".useState"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"DateValue"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">("})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"parseDate"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"today"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getLocalTimeZone"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"())"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".toString"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"())"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"formatter"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"useDateFormatter"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({dateStyle"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'full'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    <>"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"b"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">Selected date:</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"b"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"style"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{marginLeft"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'4px'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}}>"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"          {"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"formatter"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".format"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"date"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".toDate"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getLocalTimeZone"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()))}"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        </"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"span"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{date} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onChange"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{(e) "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setDate"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(e)} />"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    </>"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  )"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "})]})})}),"\n",(0,o.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,o.jsx)(n.p,{children:"Calendar supports marking certain dates as unavailable. These dates cannot be selected by the user and are displayed with a crossed out appearance. The isDateUnavailable prop accepts a callback that is called to evaluate whether each visible date is unavailable."}),"\n",(0,o.jsx)(n.p,{children:"This example prevents selecting weekends."}),"\n",(0,o.jsx)("section",{className:h().componentShowcaseContainer,children:(0,o.jsx)(x.H9,{})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ValidatedCalendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"locale"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"useLocale"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDateUnavailable"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{(date) "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isWeekend"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(date"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" locale)} />"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})}),"\n",(0,o.jsx)(n.h3,{id:"disabled",children:"Disabled"}),"\n",(0,o.jsx)("section",{className:h().componentShowcaseContainer,children:(0,o.jsx)(p.default,{"aria-label":"Event date",isDisabled:!0})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"aria-label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Event date"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDisabled"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,o.jsx)(n.h3,{id:"read-only",children:"Read only"}),"\n",(0,o.jsx)("section",{className:h().componentShowcaseContainer,children:(0,o.jsx)(p.default,{"aria-label":"Event date",isReadOnly:!0})}),"\n",(0,o.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Calendar"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"aria-label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Event date"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isReadOnly"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,o.jsx)(n.h3,{id:"props",children:"Props"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"minValue"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"DateValue"})}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"The minimum allowed date that a user may select."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"maxValue"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"DateValue"})}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"The maximum allowed date that a user may select."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"isReadOnly"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the calendar value is immutable."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"isDisabled"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the calendar is disabled."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"value"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"DateValue"})}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"The current value (controlled)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"defaultValue"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"DateValue"})}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"The default value (uncontrolled)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"onChange"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"(e: DateValue) => void"})}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"The default value (uncontrolled)."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"isDateUnavailable"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"(date: DateValue) => boolean"})}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Callback that is called for each date of the calendar. If it returns true, then the date is unavailable."})]})]})]}),"\n",(0,o.jsx)(k.UW,{children:(0,o.jsxs)(n.p,{children:["Check out our ",(0,o.jsx)(n.a,{href:"/ladle?story=calendar--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,r.Z)((0,a.Z)({},e),{children:(0,o.jsx)(y,(0,a.Z)({},e))})):y(e)}j.title="string"==typeof u&&u||"Calendar";var v=function(e){return(0,o.jsx)(l.mK.Provider,{value:e,children:(0,o.jsx)(m,{})})};(t=globalThis).__nextra_pageContext__||(t.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/components/calendar"]={Content:v,pageOpts:j,themeConfig:i.Z}},36042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi",iconWrapper:"Home_iconWrapper__pfdVa"}},30191:function(e,n,s){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,t=Array(n);s<n;s++)t[s]=e[s];return t}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.d(n,{Z:function(){return a}})}},function(e){e.O(0,[8158,1652,4981,678,1854,5944,227,2024,7925,4527,7850,309,6199,2773,1689,7676,1605,7784,4346,659,6520,9883,61,9774,2888,179],function(){return e(e.s=3986)}),_N_E=e.O()}]);