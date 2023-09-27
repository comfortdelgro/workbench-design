(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4187],{2708:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});var i,r,a=t(38443),o=t(2158),s=t.n(o),c=t(97458);function d(){return(0,c.jsxs)(a.Flexbox,{css:{marginBottom:"$4"},children:[(0,c.jsx)(s(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,c.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,c.jsx)(s(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,c.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},725:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var i,r,a,o,s={};t.r(s),t.d(s,{demoComponents:function(){return y},demos:function(){return f},docs:function(){return S},srcComponents:function(){return g}});var c=t(88867),d=t(7703),l=t(38443),p=t(52983),h=t.t(p,2),m=t(26585),b=t(97458),u=t(2708),S={en:{description:"is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content.",location:"/docs/data/components/sidebar/sidebar.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Sidebar</h1><p class="description">is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Sidebar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Sidebar <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/sidebar\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="variant">Variant<a aria-labelledby="variant" class="anchor-link" href="#variant" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SidebarPrimary.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SidebarSecondary.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">variant</td>\n<td align="left"><code>primary</code> | <code>secondary</code></td>\n<td align="left">&#39;primary&#39;</td>\n<td align="left">Variants</td>\n</tr>\n<tr>\n<td align="left">position</td>\n<td align="left"><code>left</code> | <code>right</code></td>\n<td align="left">&#39;left&#39;</td>\n<td align="left">Display position of the side bar</td>\n</tr>\n<tr>\n<td align="left">handleClose</td>\n<td align="left"><code>Function</code></td>\n<td align="left">-</td>\n<td align="left">Callback to close sidebar.</td>\n</tr>\n<tr>\n<td align="left">isOpen</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">The sidebar is visible when true.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Variant",level:3,hash:"variant"},{text:"Custom styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Sidebar component",headers:{title:"React Sidebar component",components:["Sidebar"],hooks:[]}}},f={"SidebarPrimary.tsx":{module:"./SidebarPrimary.tsx",raw:"import {Button, Sidebar} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\ninterface PrimarySidebarProps {\n  position: 'left' | 'right'\n}\n\nfunction PrimarySidebar({position = 'left'}: PrimarySidebarProps) {\n  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}\n        onPress={() => setIsPrimaryOpen(true)}\n      >\n        Open sidebar\n      </Button>\n\n      <Sidebar\n        isOpen={isPrimaryOpen}\n        handleClose={() => setIsPrimaryOpen(false)}\n        variant='primary'\n      >\n        <Sidebar.Title>My title</Sidebar.Title>\n        <Sidebar.Content>My content</Sidebar.Content>\n        <Sidebar.Actions>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n        </Sidebar.Actions>\n      </Sidebar>\n    </>\n  )\n}\n\nexport default PrimarySidebar\n",jsxPreview:"<Button\r\n    css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}\r\n    onPress={() => setIsPrimaryOpen(true)}\r\n>\r\n    Open sidebar\r\n</Button>\r\n\r\n<Sidebar\r\n    isOpen={isPrimaryOpen}\r\n    handleClose={() => setIsPrimaryOpen(false)}\r\n     variant='primary'\r\n>\r\n    <Sidebar.Title>My title</Sidebar.Title>\r\n    <Sidebar.Content>My content</Sidebar.Content>\r\n    <Sidebar.Actions>\r\n    <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\r\n        Action\r\n    </Button>\r\n    <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\r\n        Action\r\n    </Button>\r\n    </Sidebar.Actions>\r\n</Sidebar>",moduleTS:"./SidebarPrimary.tsx",rawTS:"import {Button, Sidebar} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\ninterface PrimarySidebarProps {\n  position: 'left' | 'right'\n}\n\nfunction PrimarySidebar({position = 'left'}: PrimarySidebarProps) {\n  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}\n        onPress={() => setIsPrimaryOpen(true)}\n      >\n        Open sidebar\n      </Button>\n\n      <Sidebar\n        isOpen={isPrimaryOpen}\n        handleClose={() => setIsPrimaryOpen(false)}\n        variant='primary'\n      >\n        <Sidebar.Title>My title</Sidebar.Title>\n        <Sidebar.Content>My content</Sidebar.Content>\n        <Sidebar.Actions>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n        </Sidebar.Actions>\n      </Sidebar>\n    </>\n  )\n}\n\nexport default PrimarySidebar\n"},"SidebarSecondary.tsx":{module:"./SidebarSecondary.tsx",raw:"import {Button, Sidebar} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction SecondarySidebar() {\n  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}\n        onPress={() => setIsPrimaryOpen(true)}\n      >\n        Open sidebar\n      </Button>\n\n      <Sidebar\n        isOpen={isPrimaryOpen}\n        handleClose={() => setIsPrimaryOpen(false)}\n        variant='secondary'\n        position='right'\n      >\n        <Sidebar.Title>My title</Sidebar.Title>\n        <Sidebar.Content>My content</Sidebar.Content>\n        <Sidebar.Actions>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n        </Sidebar.Actions>\n      </Sidebar>\n    </>\n  )\n}\n\nexport default SecondarySidebar\n",jsxPreview:"<Button\r\n    css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}\r\n    onPress={() => setIsPrimaryOpen(true)}\r\n>\r\n    Open sidebar\r\n</Button>\r\n\r\n<Sidebar\r\n    isOpen={isPrimaryOpen}\r\n    handleClose={() => setIsPrimaryOpen(false)}\r\n    variant='secondary'\r\n    position='right'\r\n>\r\n    <Sidebar.Title>My title</Sidebar.Title>\r\n    <Sidebar.Content>My content</Sidebar.Content>\r\n    <Sidebar.Actions>\r\n    <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\r\n        Action\r\n    </Button>\r\n    <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\r\n        Action\r\n    </Button>\r\n    </Sidebar.Actions>\r\n</Sidebar>",moduleTS:"./SidebarSecondary.tsx",rawTS:"import {Button, Sidebar} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction SecondarySidebar() {\n  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false)\n  return (\n    <>\n      <Button\n        css={{width: '9rem', height: '3.5rem', fontSize: '1em'}}\n        onPress={() => setIsPrimaryOpen(true)}\n      >\n        Open sidebar\n      </Button>\n\n      <Sidebar\n        isOpen={isPrimaryOpen}\n        handleClose={() => setIsPrimaryOpen(false)}\n        variant='secondary'\n        position='right'\n      >\n        <Sidebar.Title>My title</Sidebar.Title>\n        <Sidebar.Content>My content</Sidebar.Content>\n        <Sidebar.Actions>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n          <Button css={{width: '45%', height: '100%', fontSize: '1em'}}>\n            Action\n          </Button>\n        </Sidebar.Actions>\n      </Sidebar>\n    </>\n  )\n}\n\nexport default SecondarySidebar\n"}};f.scope={process:{},import:{"@comfortdelgro/react-compass":l,react:h}};var y={"./SidebarPrimary.tsx":function(n){n.position;var e=p.useState(!1),t=(0,m.Z)(e,2),a=t[0],o=t[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Button,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:function(){return o(!0)},children:"Open sidebar"}),(0,b.jsxs)(l.Sidebar,{isOpen:a,handleClose:function(){return o(!1)},variant:"primary",children:[i||(i=(0,b.jsx)(l.Sidebar.Title,{children:"My title"})),r||(r=(0,b.jsx)(l.Sidebar.Content,{children:"My content"})),(0,b.jsxs)(l.Sidebar.Actions,{children:[(0,b.jsx)(l.Button,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),(0,b.jsx)(l.Button,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]})]})},"./SidebarSecondary.tsx":function(){var n=p.useState(!1),e=(0,m.Z)(n,2),t=e[0],i=e[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Button,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:function(){return i(!0)},children:"Open sidebar"}),(0,b.jsxs)(l.Sidebar,{isOpen:t,handleClose:function(){return i(!1)},variant:"secondary",position:"right",children:[a||(a=(0,b.jsx)(l.Sidebar.Title,{children:"My title"})),o||(o=(0,b.jsx)(l.Sidebar.Content,{children:"My content"})),(0,b.jsxs)(l.Sidebar.Actions,{children:[(0,b.jsx)(l.Button,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),(0,b.jsx)(l.Button,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]})]})}},g={"components/common/ComponentLinkHeader.tsx":u.Z};function x(){return(0,b.jsx)(d.Z,(0,c.Z)({},s))}},40621:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/sidebar",function(){return t(725)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=40621)}),_N_E=n.O()}]);