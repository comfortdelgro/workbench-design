(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7870],{31403:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return A}});var r,a,e,i,c={};o.r(c),o.d(c,{demoComponents:function(){return g},demos:function(){return h},docs:function(){return f},srcComponents:function(){return x}});var s=o(26098),l=o(3072),u=o(15393),d=o(42096),m=o(44194),p=o.t(m,2),B=o(31549),f={description:"The ActionBar component is a versatile user interface element that provides a cohesive grouping of buttons, icons, and interactive elements within a container.",location:"/docs/data/components/action-bar/action-bar.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Action Bar</h1><p class="description">The ActionBar component is a versatile user interface element that provides a cohesive grouping of buttons, icons, and interactive elements within a container.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>ActionBar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="default">Default<a aria-labelledby="default" class="anchor-link" href="#default" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ActionBarDefault.tsx"},'<h3 id="center">Center<a aria-labelledby="center" class="anchor-link" href="#center" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ActionBarCenter.tsx"},'<h3 id="left">Left<a aria-labelledby="left" class="anchor-link" href="#left" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ActionBarLeft.tsx"},'<h3 id="right">Right<a aria-labelledby="right" class="anchor-link" href="#right" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ActionBarRight.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">The content to display in the accordion.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Default",level:3,hash:"default"},{text:"Center",level:3,hash:"center"},{text:"Left",level:3,hash:"left"},{text:"Right",level:3,hash:"right"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Actionbar component",headers:{title:"React Actionbar component",components:["Action Bar"],hooks:[]}},h={"ActionBarDefault.tsx":{module:"./ActionBarDefault.tsx",raw:"import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'\nimport {\n  faExclamationTriangle,\n  faUserEdit,\n} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.LeftGroup>\n          <Button variant='primary'>\n            <Icon icon={faExclamationTriangle} />\n          </Button>\n        </ActionBar.LeftGroup>\n        <ActionBar.CenterGroup>\n          <Button isDisabled>\n            <Icon icon={faUserEdit} />\n          </Button>\n          <Button variant='danger'>Danger</Button>\n        </ActionBar.CenterGroup>\n        <ActionBar.RightGroup>\n          <Button variant='primary'>Primary</Button>\n          <Button variant='secondary'>Secondary</Button>\n        </ActionBar.RightGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Default\n",jsxPreview:"<ActionBar>\n  <ActionBar.LeftGroup>\n    <Button variant='primary'>\n      <Icon icon={faExclamationTriangle} />\n    </Button>\n  </ActionBar.LeftGroup>\n  <ActionBar.CenterGroup>\n    <Button isDisabled>\n      <Icon icon={faUserEdit} />\n    </Button>\n    <Button variant='danger'>Danger</Button>\n  </ActionBar.CenterGroup>\n  <ActionBar.RightGroup>\n    <Button variant='primary'>Primary</Button>\n    <Button variant='secondary'>Secondary</Button>\n  </ActionBar.RightGroup>\n</ActionBar>",moduleTS:"./ActionBarDefault.tsx",rawTS:"import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'\nimport {\n  faExclamationTriangle,\n  faUserEdit,\n} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.LeftGroup>\n          <Button variant='primary'>\n            <Icon icon={faExclamationTriangle} />\n          </Button>\n        </ActionBar.LeftGroup>\n        <ActionBar.CenterGroup>\n          <Button isDisabled>\n            <Icon icon={faUserEdit} />\n          </Button>\n          <Button variant='danger'>Danger</Button>\n        </ActionBar.CenterGroup>\n        <ActionBar.RightGroup>\n          <Button variant='primary'>Primary</Button>\n          <Button variant='secondary'>Secondary</Button>\n        </ActionBar.RightGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Default\n"},"ActionBarCenter.tsx":{module:"./ActionBarCenter.tsx",raw:"import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'\nimport {faUserEdit} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Center: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.CenterGroup>\n          <Button isDisabled>\n            <Icon icon={faUserEdit} />\n          </Button>\n          <Button variant='danger'>Danger</Button>\n        </ActionBar.CenterGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Center\n",jsxPreview:"<ActionBar>\n  <ActionBar.CenterGroup>\n    <Button isDisabled>\n      <Icon icon={faUserEdit} />\n    </Button>\n    <Button variant='danger'>Danger</Button>\n  </ActionBar.CenterGroup>\n</ActionBar>",moduleTS:"./ActionBarCenter.tsx",rawTS:"import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'\nimport {faUserEdit} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Center: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.CenterGroup>\n          <Button isDisabled>\n            <Icon icon={faUserEdit} />\n          </Button>\n          <Button variant='danger'>Danger</Button>\n        </ActionBar.CenterGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Center\n"},"ActionBarLeft.tsx":{module:"./ActionBarLeft.tsx",raw:"import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'\nimport {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Left: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.LeftGroup>\n          <Button variant='primary'>\n            <Icon icon={faExclamationTriangle} />\n          </Button>\n        </ActionBar.LeftGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Left\n",jsxPreview:"<ActionBar>\n  <ActionBar.LeftGroup>\n    <Button variant='primary'>\n      <Icon icon={faExclamationTriangle} />\n    </Button>\n  </ActionBar.LeftGroup>\n</ActionBar>",moduleTS:"./ActionBarLeft.tsx",rawTS:"import {ActionBar, Button, Column, Icon} from '@comfortdelgro/react-compass'\nimport {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Left: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.LeftGroup>\n          <Button variant='primary'>\n            <Icon icon={faExclamationTriangle} />\n          </Button>\n        </ActionBar.LeftGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Left\n"},"ActionBarRight.tsx":{module:"./ActionBarRight.tsx",raw:"import {ActionBar, Button, Column} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Right: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.RightGroup>\n          <Button variant='primary'>Primary</Button>\n          <Button variant='secondary'>Secondary</Button>\n        </ActionBar.RightGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Right\n",jsxPreview:"<ActionBar>\n  <ActionBar.RightGroup>\n    <Button variant='primary'>Primary</Button>\n    <Button variant='secondary'>Secondary</Button>\n  </ActionBar.RightGroup>\n</ActionBar>",moduleTS:"./ActionBarRight.tsx",rawTS:"import {ActionBar, Button, Column} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Right: React.FC = () => {\n  return (\n    <Column>\n      <ActionBar>\n        <ActionBar.RightGroup>\n          <Button variant='primary'>Primary</Button>\n          <Button variant='secondary'>Secondary</Button>\n        </ActionBar.RightGroup>\n      </ActionBar>\n    </Column>\n  )\n}\n\nexport default Right\n"}};h.scope={process:{},import:{"@comfortdelgro/react-compass":u,"@fortawesome/free-solid-svg-icons":d,react:p}};var g={"./ActionBarDefault.tsx":function(){return r||(r=(0,B.jsx)(u.Column,{children:(0,B.jsxs)(u.ActionBar,{children:[(0,B.jsx)(u.ActionBar.LeftGroup,{children:(0,B.jsx)(u.Button,{variant:"primary",children:(0,B.jsx)(u.Icon,{icon:d.faExclamationTriangle})})}),(0,B.jsxs)(u.ActionBar.CenterGroup,{children:[(0,B.jsx)(u.Button,{isDisabled:!0,children:(0,B.jsx)(u.Icon,{icon:d.faUserEdit})}),(0,B.jsx)(u.Button,{variant:"danger",children:"Danger"})]}),(0,B.jsxs)(u.ActionBar.RightGroup,{children:[(0,B.jsx)(u.Button,{variant:"primary",children:"Primary"}),(0,B.jsx)(u.Button,{variant:"secondary",children:"Secondary"})]})]})}))},"./ActionBarCenter.tsx":function(){return a||(a=(0,B.jsx)(u.Column,{children:(0,B.jsx)(u.ActionBar,{children:(0,B.jsxs)(u.ActionBar.CenterGroup,{children:[(0,B.jsx)(u.Button,{isDisabled:!0,children:(0,B.jsx)(u.Icon,{icon:d.faUserEdit})}),(0,B.jsx)(u.Button,{variant:"danger",children:"Danger"})]})})}))},"./ActionBarLeft.tsx":function(){return e||(e=(0,B.jsx)(u.Column,{children:(0,B.jsx)(u.ActionBar,{children:(0,B.jsx)(u.ActionBar.LeftGroup,{children:(0,B.jsx)(u.Button,{variant:"primary",children:(0,B.jsx)(u.Icon,{icon:d.faExclamationTriangle})})})})}))},"./ActionBarRight.tsx":function(){return i||(i=(0,B.jsx)(u.Column,{children:(0,B.jsx)(u.ActionBar,{children:(0,B.jsxs)(u.ActionBar.RightGroup,{children:[(0,B.jsx)(u.Button,{variant:"primary",children:"Primary"}),(0,B.jsx)(u.Button,{variant:"secondary",children:"Secondary"})]})})}))}},x={};function A(){return(0,B.jsx)(l.Z,(0,s.Z)({},c))}},787:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/action-bar",function(){return o(31403)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=787)}),_N_E=n.O()}]);