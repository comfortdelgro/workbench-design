(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8328],{2708:function(n,a,s){"use strict";s.d(a,{Z:function(){return r}});var t,e,o=s(38443),c=s(2158),p=s.n(c),l=s(97458);function r(){return(0,l.jsxs)(o.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(p(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,l.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(p(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:e||(e=(0,l.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},73940:function(n,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var t={};s.r(t),s.d(t,{demoComponents:function(){return r},demos:function(){return l},docs:function(){return p},srcComponents:function(){return i}});var e=s(88867),o=s(7703),c=s(2708),p={en:{description:"Provides localized date formatting for the current locale. Automatically updates when the locale changes, and handles caching of the date formatter for performance.",location:"/docs/data/utilities/i18n/useDateFormatter.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>useDateFormatter</h1><p class="description">Provides localized date formatting for the current locale. Automatically updates when the locale changes, and handles caching of the date formatter for performance.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p><code>useDateFormatter</code> wraps a builtin browser <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat" target="_blank" rel="noopener nofollow">Intl.DateTimeFormat</a>\nobject to provide a React Hook that integrates with the i18n system in React Aria. It handles formatting dates for the current locale,\nupdating when the locale changes, and caching of date formatters for performance. See the\n<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat" target="_blank" rel="noopener nofollow">Intl.DateTimeFormat</a> docs for\ninformation on formatting options.</p>\n<h2 id="properties-amp-methods">Properties &amp; Methods<a aria-labelledby="properties-amp-methods" class="anchor-link" href="#properties-amp-methods" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>useDateFormatter(options?: DateFormatterOptions): DateFormatter</p>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>This example displays the current date for two locales: USA, and Russia. Two instances of the <code>CurrentDate</code> component are rendered,\nusing the <a href="I18nProvider.html" >I18nProvider</a> to specify the locale to display.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>I18nProvider<span class="token punctuation">,</span> useDateFormatter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n\n<span class="token keyword">function</span> <span class="token function">CurrentDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token function">useDateFormatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>formatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">I18nProvider</span></span> <span class="token attr-name">locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>en-US<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CurrentDate</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">I18nProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">I18nProvider</span></span> <span class="token attr-name">locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>ru-RU<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CurrentDate</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">I18nProvider</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[]},{text:"Properties &amp; Methods",level:2,hash:"properties-amp-methods",children:[]},{text:"Example",level:2,hash:"example",children:[]}],title:"useDateFormatter",headers:{title:"useDateFormatter",components:[],hooks:[]}}},l={};l.scope={process:{},import:{}};var r={},i={"components/common/ComponentLinkHeader.tsx":c.Z},u=s(97458);function d(){return(0,u.jsx)(o.Z,(0,e.Z)({},t))}},37105:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/i18n/useDateFormatter",function(){return s(73940)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=37105)}),_N_E=n.O()}]);