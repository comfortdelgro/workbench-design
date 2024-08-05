(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2058],{23059:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var i,o,r,d,l,a={};t.r(a),t.d(a,{demoComponents:function(){return f},demos:function(){return v},docs:function(){return h},srcComponents:function(){return m}});var c=t(26098),s=t(3072),g=t(15393),p=t(31549),h={description:"A divider is a thin line that groups content in lists and layouts.",location:"/docs/data/components/divider/divider.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Divider</h1><p class="description">A divider is a thin line that groups content in lists and layouts.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Divider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DividerBasic.tsx"},'<h3 id="align-divider">Align Divider<a aria-labelledby="align-divider" class="anchor-link" href="#align-divider" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DividerAlign.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">color</td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left">Color of the line.</td>\n</tr>\n<tr>\n<td align="left">flexItem</td>\n<td align="left"><code>Boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">If true, a vertical divider will have the correct height when used in flex container. (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.)</td>\n</tr>\n<tr>\n<td align="left">absolute</td>\n<td align="left"><code>Boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Absolutely position the element.</td>\n</tr>\n<tr>\n<td align="left">children</td>\n<td align="left"><code>Node</code></td>\n<td align="left">—</td>\n<td align="left">The content of the component.</td>\n</tr>\n<tr>\n<td align="left">component</td>\n<td align="left"><code>JSX.IntrinsicElements</code></td>\n<td align="left">—</td>\n<td align="left">The component used for the root node. Either a string to use a HTML element or a component.</td>\n</tr>\n<tr>\n<td align="left">textAlign</td>\n<td align="left"><code>center</code>| <code>right</code>| <code>left</code>| <code>top</code>| <code>bottom</code></td>\n<td align="left"><code>center</code></td>\n<td align="left">The text alignment.</td>\n</tr>\n<tr>\n<td align="left">orientation</td>\n<td align="left"><code>vertical</code>| <code>horizontal</code></td>\n<td align="left"><code>horizontal</code></td>\n<td align="left">The component orientation.</td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>fullWidth</code>| <code>inset</code>| <code>middle</code></td>\n<td align="left"><code>fullWidth</code></td>\n<td align="left">The variant to use.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Align Divider",level:3,hash:"align-divider"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Divider component",headers:{title:"React Divider component",components:["Divider"],hooks:[]}},v={"DividerBasic.tsx":{module:"./DividerBasic.tsx",raw:"import {Column, Divider} from '@comfortdelgro/react-compass'\n\nconst Basic: React.FC = () => {\n  return (\n    <Column\n      css={{\n        alignItems: 'center',\n        background: 'var(--cdg-color-background)',\n        padding: '1.6rem',\n      }}\n    >\n      <Divider />\n      <div style={{height: 200}}>\n        <Divider orientation='vertical'></Divider>\n      </div>\n    </Column>\n  )\n}\n\nexport default Basic\n",jsxPreview:"<Divider />\r\n<Divider orientation='vertical'></Divider>",moduleTS:"./DividerBasic.tsx",rawTS:"import {Column, Divider} from '@comfortdelgro/react-compass'\n\nconst Basic: React.FC = () => {\n  return (\n    <Column\n      css={{\n        alignItems: 'center',\n        background: 'var(--cdg-color-background)',\n        padding: '1.6rem',\n      }}\n    >\n      <Divider />\n      <div style={{height: 200}}>\n        <Divider orientation='vertical'></Divider>\n      </div>\n    </Column>\n  )\n}\n\nexport default Basic\n"},"DividerAlign.tsx":{module:"./DividerAlign.tsx",raw:"import {Column, Divider, Typography} from '@comfortdelgro/react-compass'\n\nconst Align: React.FC = () => {\n  return (\n    <Column\n      css={{background: 'var(--cdg-color-background)', padding: '1.6rem'}}\n    >\n      <Divider textAlign='left'>\n        <Typography.Label>Left</Typography.Label>\n      </Divider>\n      <Divider textAlign='center'>\n        <Typography.Label>Center</Typography.Label>\n      </Divider>\n      <Divider textAlign='right'>\n        <Typography.Label>Right</Typography.Label>\n      </Divider>\n    </Column>\n  )\n}\n\nexport default Align\n",jsxPreview:"<Divider textAlign='left'>\r\n    <span>Left</span>\r\n</Divider>\r\n<Divider textAlign='center'>\r\n    <span>Center</span>\r\n</Divider>\r\n<Divider textAlign='right'>\r\n    <span>Right</span>\r\n</Divider>",moduleTS:"./DividerAlign.tsx",rawTS:"import {Column, Divider, Typography} from '@comfortdelgro/react-compass'\n\nconst Align: React.FC = () => {\n  return (\n    <Column\n      css={{background: 'var(--cdg-color-background)', padding: '1.6rem'}}\n    >\n      <Divider textAlign='left'>\n        <Typography.Label>Left</Typography.Label>\n      </Divider>\n      <Divider textAlign='center'>\n        <Typography.Label>Center</Typography.Label>\n      </Divider>\n      <Divider textAlign='right'>\n        <Typography.Label>Right</Typography.Label>\n      </Divider>\n    </Column>\n  )\n}\n\nexport default Align\n"}};v.scope={process:{},import:{"@comfortdelgro/react-compass":g}};var f={"./DividerBasic.tsx":function(){return(0,p.jsxs)(g.Column,{css:{alignItems:"center",background:"var(--cdg-color-background)",padding:"1.6rem"},children:[i||(i=(0,p.jsx)(g.Divider,{})),(0,p.jsx)("div",{style:{height:200},children:o||(o=(0,p.jsx)(g.Divider,{orientation:"vertical"}))})]})},"./DividerAlign.tsx":function(){return(0,p.jsxs)(g.Column,{css:{background:"var(--cdg-color-background)",padding:"1.6rem"},children:[r||(r=(0,p.jsx)(g.Divider,{textAlign:"left",children:(0,p.jsx)(g.Typography.Label,{children:"Left"})})),d||(d=(0,p.jsx)(g.Divider,{textAlign:"center",children:(0,p.jsx)(g.Typography.Label,{children:"Center"})})),l||(l=(0,p.jsx)(g.Divider,{textAlign:"right",children:(0,p.jsx)(g.Typography.Label,{children:"Right"})}))]})}},m={};function u(){return(0,p.jsx)(s.Z,(0,c.Z)({},a))}},78758:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/divider",function(){return t(23059)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=78758)}),_N_E=n.O()}]);