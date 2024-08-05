(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4632],{13877:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var o={};a.r(o),a.d(o,{demoComponents:function(){return l},demos:function(){return c},docs:function(){return p},srcComponents:function(){return i}});var t=a(26098),e=a(3072),p={description:"Install React Compass, the world's most popular React UI framework.",location:"/docs/data/getting-started/installation/installation.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Installation</h1><p class="description">Install React Compass, the world\'s most popular React UI framework.</p>\n\n<h2 id="important-note-using-poppins-font-from-google-fonts">Important Note: Using Poppins Font from Google Fonts<a aria-labelledby="important-note-using-poppins-font-from-google-fonts" class="anchor-link" href="#important-note-using-poppins-font-from-google-fonts" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>For the components in the <code>@comfortdelgro/react-compass</code> package to work correctly, it is essential to use the <strong>Poppins font</strong> from Google Fonts. This is because most components in React Compass are designed with the Poppins font.</p>\n<h3 id="step-to-include-poppins-font-in-your-project">Step to Include Poppins Font in Your Project:<a aria-labelledby="step-to-include-poppins-font-in-your-project" class="anchor-link" href="#step-to-include-poppins-font-in-your-project" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>Include the following link in the <code>&lt;head&gt;</code> section of your HTML file (usually <code>index.html</code> in a React project):</p>\n<div class="cdg-root"><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preconnect<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.gstatic.com<span class="token punctuation">"</span></span> <span class="token attr-name">cross-origin</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap<span class="token punctuation">"</span></span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="default-installation">Default installation<a aria-labelledby="default-installation" class="anchor-link" href="#default-installation" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>Run one of the following commands to add React Compass to your project:</p>\n<h3 id="npm">npm<a aria-labelledby="npm" class="anchor-link" href="#npm" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><div class="cdg-root"><pre><code class="language-bash">npm i @comfortdelgro<span class="token operator">/</span>react<span class="token operator">-</span>compass\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="yarn">yarn<a aria-labelledby="yarn" class="anchor-link" href="#yarn" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><div class="cdg-root"><pre><code class="language-bash">yarn add @comfortdelgro<span class="token operator">/</span>react<span class="token operator">-</span>compass\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="pnpm">pnpm<a aria-labelledby="pnpm" class="anchor-link" href="#pnpm" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><div class="cdg-root"><pre><code class="language-bash">pnpm add @comfortdelgro<span class="token operator">/</span>react<span class="token operator">-</span>compass\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="fix-package">Fix package<a aria-labelledby="fix-package" class="anchor-link" href="#fix-package" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><div class="cdg-root"><pre><code class="language-diff">  <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token operator">-</span>   <span class="token string">"@comfortdelgro/react-compass"</span><span class="token operator">:</span> <span class="token string">"^5.0.0"</span><span class="token punctuation">,</span>\n<span class="token operator">+</span>   <span class="token string">"@comfortdelgro/react-compass"</span><span class="token operator">:</span> <span class="token string">"5.0.0"</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Important Note: Using Poppins Font from Google Fonts",level:2,hash:"important-note-using-poppins-font-from-google-fonts",children:[{text:"Step to Include Poppins Font in Your Project:",level:3,hash:"step-to-include-poppins-font-in-your-project"}]},{text:"Default installation",level:2,hash:"default-installation",children:[{text:"npm",level:3,hash:"npm"},{text:"yarn",level:3,hash:"yarn"},{text:"pnpm",level:3,hash:"pnpm"},{text:"Fix package",level:3,hash:"fix-package"}]}],title:"Installation",headers:{components:[]}},c={};c.scope={process:{},import:{}};var l={},i={},r=a(31549);function u(){return(0,r.jsx)(e.Z,(0,t.Z)({},o))}},46118:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/installation",function(){return a(13877)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=46118)}),_N_E=n.O()}]);