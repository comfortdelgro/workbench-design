(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4820],{24030:function(e,t,r){"use strict";var l=r(61041).default,n=r(92191).default,o=r(64921).default,a=r(57197).default,i=r(55389).default,u=r(93993);u(t,"__esModule",{value:!0}),u(t,"default",{enumerable:!0,get:function(){return g}});var d=r(60005),s=d._(r(52983)),f=d._(r(14863)),c={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var h={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},g=function(e){a(r,e);var t=i(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,l=this.props.title||c[t]||"An unexpected error has occurred";return s.default.createElement("div",{style:h.error},s.default.createElement(f.default,null,s.default.createElement("title",null,t?t+": "+l:"Application error: a client-side exception has occurred")),s.default.createElement("div",{style:h.desc},s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?s.default.createElement("h1",{className:"next-error-h1",style:h.h1},t):null,s.default.createElement("div",{style:h.wrap},s.default.createElement("h2",{style:h.h2},this.props.title||t?l:s.default.createElement(s.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),r}(s.default.Component);g.displayName="ErrorPage",g.getInitialProps=p,g.origGetInitialProps=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(u(t.default,"__esModule",{value:!0}),l(t.default,t),e.exports=t.default)},9206:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return r(24030)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=9206)}),_N_E=e.O()}]);