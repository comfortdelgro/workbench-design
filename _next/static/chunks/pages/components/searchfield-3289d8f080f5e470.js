(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2882],{2708:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var o,a,l=t(38443),r=t(2158),s=t.n(r),c=t(97458);function i(){return(0,c.jsxs)(l.Flexbox,{css:{marginBottom:"$4"},children:[(0,c.jsx)(s(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,c.jsx)(l.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,c.jsx)(s(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,c.jsx)(l.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},53032:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var o={};t.r(o),t.d(o,{demoComponents:function(){return h},demos:function(){return d},docs:function(){return i},srcComponents:function(){return p}});var a=t(88867),l=t(7703),r=t(38443),s=t(97458),c=t(2708),i={en:{description:"Search Fields let users enter search input.",location:"/docs/data/components/searchfield/searchfield.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>SearchField</h1><p class="description">Search Fields let users enter search input.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>SearchField<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> SearchField <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/searchfield\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic-searchfield">Basic SearchField<a aria-labelledby="basic-searchfield" class="anchor-link" href="#basic-searchfield" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SearchFieldBasic.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SearchFieldCustom.tsx"},'<h3 id="h5-variant">H5 variant<a aria-labelledby="h5-variant" class="anchor-link" href="#h5-variant" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SearchFieldH5.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>false</code>| <code>true</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">onSubmit</td>\n<td align="left"><code>(i:string)=&gt;void</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic SearchField",level:3,hash:"basic-searchfield"},{text:"Custom styling",level:3,hash:"custom-styling"},{text:"H5 variant",level:3,hash:"h5-variant"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React SearchField component",headers:{title:"React SearchField component",components:["SearchField"],hooks:[]}}},d={"SearchFieldBasic.tsx":{module:"./SearchFieldBasic.tsx",raw:"import {SearchField} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <div style={{gap: '1rem', display: 'flex'}}>\n      <SearchField\n        placeholder='Search'\n        onSubmit={(text) => console.log(text)}\n      />\n      <SearchField\n        isDisabled\n        placeholder='Search'\n        onSubmit={(text) => console.log(text)}\n      />\n    </div>\n  )\n}\n\nexport default BasicExample\n",jsxPreview:"<SearchField\r\n    placeholder='Search'\r\n    onSubmit={(text) => console.log(text)}\r\n/>\r\n<SearchField\r\n    isDisabled\r\n    placeholder='Search'\r\n    onSubmit={(text) => console.log(text)}\r\n/>",moduleTS:"./SearchFieldBasic.tsx",rawTS:"import {SearchField} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <div style={{gap: '1rem', display: 'flex'}}>\n      <SearchField\n        placeholder='Search'\n        onSubmit={(text) => console.log(text)}\n      />\n      <SearchField\n        isDisabled\n        placeholder='Search'\n        onSubmit={(text) => console.log(text)}\n      />\n    </div>\n  )\n}\n\nexport default BasicExample\n"},"SearchFieldCustom.tsx":{module:"./SearchFieldCustom.tsx",raw:"import {SearchField} from '@comfortdelgro/react-compass'\n\nfunction SearchFieldCustom() {\n  return (\n    <SearchField\n      placeholder='Search'\n      onSubmit={(text) => console.log(text)}\n      css={{border: '1px solid gray'}}\n    />\n  )\n}\n\nexport default SearchFieldCustom\n",jsxPreview:"<SearchField\r\n    placeholder='Search'\r\n    onSubmit={(text) => console.log(text)}\r\n    css={{border: '1px solid gray'}}\r\n/>",moduleTS:"./SearchFieldCustom.tsx",rawTS:"import {SearchField} from '@comfortdelgro/react-compass'\n\nfunction SearchFieldCustom() {\n  return (\n    <SearchField\n      placeholder='Search'\n      onSubmit={(text) => console.log(text)}\n      css={{border: '1px solid gray'}}\n    />\n  )\n}\n\nexport default SearchFieldCustom\n"},"SearchFieldH5.tsx":{module:"./SearchFieldH5.tsx",raw:"import {SearchField} from '@comfortdelgro/react-compass'\n\nfunction H5Example() {\n  return (\n    <div style={{gap: '1rem', display: 'flex'}}>\n      <SearchField\n        placeholder='Search'\n        onSubmit={(text) => console.log(text)}\n        isH5Variant\n      />\n      <SearchField\n        isDisabled\n        placeholder='Search'\n        isH5Variant\n        onSubmit={(text) => console.log(text)}\n      />\n    </div>\n  )\n}\n\nexport default H5Example\n",jsxPreview:"<SearchField\r\n  placeholder='Search'\r\n  onSubmit={(text) => console.log(text)}\r\n  isH5Variant\r\n/>\r\n<SearchField\r\n  isDisabled\r\n  placeholder='Search'\r\n  isH5Variant\r\n  onSubmit={(text) => console.log(text)}\r\n/>",moduleTS:"./SearchFieldH5.tsx",rawTS:"import {SearchField} from '@comfortdelgro/react-compass'\n\nfunction H5Example() {\n  return (\n    <div style={{gap: '1rem', display: 'flex'}}>\n      <SearchField\n        placeholder='Search'\n        onSubmit={(text) => console.log(text)}\n        isH5Variant\n      />\n      <SearchField\n        isDisabled\n        placeholder='Search'\n        isH5Variant\n        onSubmit={(text) => console.log(text)}\n      />\n    </div>\n  )\n}\n\nexport default H5Example\n"}};d.scope={process:{},import:{"@comfortdelgro/react-compass":r}};var h={"./SearchFieldBasic.tsx":function(){return(0,s.jsxs)("div",{style:{gap:"1rem",display:"flex"},children:[(0,s.jsx)(r.SearchField,{placeholder:"Search",onSubmit:function(e){return console.log(e)}}),(0,s.jsx)(r.SearchField,{isDisabled:!0,placeholder:"Search",onSubmit:function(e){return console.log(e)}})]})},"./SearchFieldCustom.tsx":function(){return(0,s.jsx)(r.SearchField,{placeholder:"Search",onSubmit:function(e){return console.log(e)},css:{border:"1px solid gray"}})},"./SearchFieldH5.tsx":function(){return(0,s.jsxs)("div",{style:{gap:"1rem",display:"flex"},children:[(0,s.jsx)(r.SearchField,{placeholder:"Search",onSubmit:function(e){return console.log(e)},isH5Variant:!0}),(0,s.jsx)(r.SearchField,{isDisabled:!0,placeholder:"Search",isH5Variant:!0,onSubmit:function(e){return console.log(e)}})]})}},p={"components/common/ComponentLinkHeader.tsx":c.Z};function m(){return(0,s.jsx)(l.Z,(0,a.Z)({},o))}},97253:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/searchfield",function(){return t(53032)}])}},function(e){e.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return e(e.s=97253)}),_N_E=e.O()}]);