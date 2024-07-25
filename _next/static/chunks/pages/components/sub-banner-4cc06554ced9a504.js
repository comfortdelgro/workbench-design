(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1360],{97621:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var a,t,i,o={};r.r(o),r.d(o,{demoComponents:function(){return m},demos:function(){return p},docs:function(){return d},srcComponents:function(){return b}});var s=r(26098),c=r(3072),l=r(15393),u=r(31549),d={description:"The Sub Banner.",location:"/docs/data/components/sub-banner/sub-banner.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>SubBanner</h1><p class="description">The Sub Banner.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>SubBanner<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="primary">Primary<a aria-labelledby="primary" class="anchor-link" href="#primary" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SubBannerPrimary.tsx"},'<h3 id="secondary">Secondary<a aria-labelledby="secondary" class="anchor-link" href="#secondary" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SubBannerSecondary.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">variant</td>\n<td align="left"><code>primary</code> | <code>secondary</code></td>\n<td align="left">&#39;primary&#39;</td>\n<td align="left">Variants</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Primary",level:3,hash:"primary"},{text:"Secondary",level:3,hash:"secondary"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React SubBanner component",headers:{title:"React SubBanner component",components:["SubBanner"],hooks:[]}},p={"SubBannerPrimary.tsx":{module:"./SubBannerPrimary.tsx",raw:"import {SubBanner} from '@comfortdelgro/react-compass'\n\nfunction SubBannerPrimary() {\n  return (\n    <SubBanner variant='primary'>\n      <SubBanner.Image src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n      <SubBanner.Title>My Title</SubBanner.Title>\n      <SubBanner.Description>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </SubBanner.Description>\n    </SubBanner>\n  )\n}\n\nexport default SubBannerPrimary\n",jsxPreview:"<SubBanner variant='primary'>\r\n  <SubBanner.Image src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\r\n  <SubBanner.Title>My Title</SubBanner.Title>\r\n  <SubBanner.Description>\r\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse\r\n    qui earum dolorum.\r\n  </SubBanner.Description>\r\n</SubBanner>",moduleTS:"./SubBannerPrimary.tsx",rawTS:"import {SubBanner} from '@comfortdelgro/react-compass'\n\nfunction SubBannerPrimary() {\n  return (\n    <SubBanner variant='primary'>\n      <SubBanner.Image src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n      <SubBanner.Title>My Title</SubBanner.Title>\n      <SubBanner.Description>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </SubBanner.Description>\n    </SubBanner>\n  )\n}\n\nexport default SubBannerPrimary\n"},"SubBannerSecondary.tsx":{module:"./SubBannerSecondary.tsx",raw:"import {SubBanner} from '@comfortdelgro/react-compass'\n\nfunction SubBannerSecondary() {\n  return (\n    <SubBanner variant='secondary'>\n      <SubBanner.Image\n        src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'\n        style={{zIndex: 0}}\n      />\n      <SubBanner.Title>My Title</SubBanner.Title>\n      <SubBanner.Description>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </SubBanner.Description>\n    </SubBanner>\n  )\n}\n\nexport default SubBannerSecondary\n",jsxPreview:"<SubBanner variant='secondary'>\r\n  <SubBanner.Image src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\r\n  <SubBanner.Title>My Title</SubBanner.Title>\r\n  <SubBanner.Description>\r\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse\r\n    qui earum dolorum.\r\n  </SubBanner.Description>\r\n</SubBanner>",moduleTS:"./SubBannerSecondary.tsx",rawTS:"import {SubBanner} from '@comfortdelgro/react-compass'\n\nfunction SubBannerSecondary() {\n  return (\n    <SubBanner variant='secondary'>\n      <SubBanner.Image\n        src='https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'\n        style={{zIndex: 0}}\n      />\n      <SubBanner.Title>My Title</SubBanner.Title>\n      <SubBanner.Description>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </SubBanner.Description>\n    </SubBanner>\n  )\n}\n\nexport default SubBannerSecondary\n"}};p.scope={process:{},import:{"@comfortdelgro/react-compass":l}};var m={"./SubBannerPrimary.tsx":function(){return a||(a=(0,u.jsxs)(l.SubBanner,{variant:"primary",children:[(0,u.jsx)(l.SubBanner.Image,{src:"https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}),(0,u.jsx)(l.SubBanner.Title,{children:"My Title"}),(0,u.jsx)(l.SubBanner.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]}))},"./SubBannerSecondary.tsx":function(){return(0,u.jsxs)(l.SubBanner,{variant:"secondary",children:[(0,u.jsx)(l.SubBanner.Image,{src:"https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",style:{zIndex:0}}),t||(t=(0,u.jsx)(l.SubBanner.Title,{children:"My Title"})),i||(i=(0,u.jsx)(l.SubBanner.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."}))]})}},b={};function f(){return(0,u.jsx)(c.Z,(0,s.Z)({},o))}},28393:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sub-banner",function(){return r(97621)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=28393)}),_N_E=n.O()}]);