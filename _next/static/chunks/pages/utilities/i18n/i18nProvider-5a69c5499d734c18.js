(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5115],{2708:function(n,s,e){"use strict";e.d(s,{Z:function(){return p}});var t,a,o=e(38443),c=e(2158),i=e.n(c),l=e(97458);function p(){return(0,l.jsxs)(o.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,l.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,l.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},16307:function(n,s,e){"use strict";e.r(s),e.d(s,{default:function(){return h}});var t={};e.r(t),e.d(t,{demoComponents:function(){return p},demos:function(){return l},docs:function(){return i},srcComponents:function(){return r}});var a=e(88867),o=e(7703),c=e(2708),i={en:{description:"Provides the locale for the application to all child components..",location:"/docs/data/utilities/i18n/i18nProvider.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>I18nProvider</h1><p class="description">Provides the locale for the application to all child components..</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p><code>I18nProvider</code> allows you to override the default locale as determined by the browser/system setting\nwith a locale defined by your application (e.g. application setting). This should be done by wrapping\nyour entire application in the provider, which will be cause all child elements to receive the new locale\ninformation via <code>useLocale</code>.</p>\n<h2 id="properties-amp-methods">Properties &amp; Methods<a aria-labelledby="properties-amp-methods" class="anchor-link" href="#properties-amp-methods" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th>Method</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>children: ReactNode</td>\n<td>Contents that should have the locale applied.</td>\n</tr>\n<tr>\n<td>locale: string</td>\n<td>The locale to apply to the children.</td>\n</tr>\n</tbody></table>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>I18nProvider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">I18nProvider</span></span> <span class="token attr-name">locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>fr-FR<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">YourApp</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">I18nProvider</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[]},{text:"Properties &amp; Methods",level:2,hash:"properties-amp-methods",children:[]},{text:"Example",level:2,hash:"example",children:[]}],title:"I18nProvider",headers:{title:"I18nProvider",components:[],hooks:[]}}},l={};l.scope={process:{},import:{}};var p={},r={"components/common/ComponentLinkHeader.tsx":c.Z},d=e(97458);function h(){return(0,d.jsx)(o.Z,(0,a.Z)({},t))}},73317:function(n,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/i18n/i18nProvider",function(){return e(16307)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=73317)}),_N_E=n.O()}]);