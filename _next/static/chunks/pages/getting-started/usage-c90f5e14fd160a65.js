(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7390],{12824:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t={};a.r(t),a.d(t,{demoComponents:function(){return l},demos:function(){return e},docs:function(){return c},srcComponents:function(){return u}});var p=a(88867),o=a(7703),c={en:{description:"Learn the basics of working with React Compass components.",location:"/docs/data/getting-started/usage/usage.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Usage</h1><p class="description">Learn the basics of working with React Compass components.</p>\n\n<h2 id="quickstart">Quickstart<a aria-labelledby="quickstart" class="anchor-link" href="#quickstart" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>The following code snippet demonstrates a simple app that uses the React Compass Button</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Preflight <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/preflight\'</span>\n<span class="token keyword">import</span> Document<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  DocumentContext<span class="token punctuation">,</span>\n  Head<span class="token punctuation">,</span>\n  Html<span class="token punctuation">,</span>\n  Main<span class="token punctuation">,</span>\n  NextScript<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'next/document\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyDocument</span> <span class="token keyword">extends</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getInitialProps</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ctx</span><span class="token operator">:</span> DocumentContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> initialProps <span class="token operator">=</span> <span class="token keyword">await</span> Document<span class="token punctuation">.</span><span class="token function">getInitialProps</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>initialProps<span class="token punctuation">,</span>\n      <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>initialProps<span class="token punctuation">.</span>styles<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Html</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>Preflight<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Head</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Main</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NextScript</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Html</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> MyDocument\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Quickstart",level:2,hash:"quickstart",children:[]}],title:"Usage",headers:{components:[]}}},e={};e.scope={process:{},import:{}};var l={},u={},i=a(97458);function k(){return(0,i.jsx)(o.Z,(0,p.Z)({},t))}},84186:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/usage",function(){return a(12824)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=84186)}),_N_E=n.O()}]);