(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7449],{2708:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var o,s,a=n(38443),i=n(2158),r=n.n(i),l=n(97458);function c(){return(0,l.jsxs)(a.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(r(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,l.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(r(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:s||(s=(0,l.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},61973:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return tO}});var o,s,a,i,r,l,c,d,u,m,f,h,p,T,g,v,x,I,C,w,k,b,O,B,y,j,S,A,D,L,M,P,R,z,N,X,H,F,K,_,V,Z,E,q,$,J,U,G,W,Q,Y,tt,te,tn,to,ts={};n.r(ts),n.d(ts,{demoComponents:function(){return tk},demos:function(){return tw},docs:function(){return tC},srcComponents:function(){return tb}});var ta=n(88867),ti=n(7703),tr=n(94335),tl=n(63622),tc=n.n(tl),td=n(81901),tu=n(46769),tm=n(52983),tf=n.t(tm,2),th=n(38443),tp=n(48044),tT=n(26585),tg=n(97458),tv=function(){var t=(0,th.useToast)();return(0,tg.jsxs)(tg.Fragment,{children:[(0,tg.jsx)(th.Button,{css:{width:"fit-content"},onClick:function(){return t.show({color:"informative",title:"Lorem ipsum dolor, sit amet consectetur"})},children:"Open toast"}),(0,tg.jsx)(th.Button,{css:{width:"fit-content"},onClick:function(){return t.show({title:"Lorem ipsum dolor, sit amet consectetur",hasCloseIcon:!1})},children:"Open toast without close button"})]})},tx=function(){var t=(0,th.useToast)();return(0,tg.jsxs)(tg.Fragment,{children:[(0,tg.jsx)(th.Button,{css:{width:"fit-content"},onClick:function(){return t.show({autoClose:!1,message:"Lorem ipsum dolor, sit amet consectetur.",icon:E||(E=(0,tg.jsx)(th.Icon,{icon:tu.faImage})),title:"My Title",actions:(0,tg.jsxs)(tg.Fragment,{children:[q||(q=(0,tg.jsx)(th.Button,{children:"Take action"})),$||($=(0,tg.jsx)(th.Button,{children:"Take action"}))]}),label:"a few minutes ago"})},children:"Open toast autoClose: false"}),(0,tg.jsx)(th.Button,{css:{width:"fit-content"},onClick:function(){return t.clearAll()},children:"Clear all toasts"})]})},tI=n(2708),tC={en:{description:"Toasts provide brief notifications.",location:"/docs/data/components/toast/toast.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Toast</h1><p class="description">Toasts provide brief notifications.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Toast <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/toast\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Toast<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="examples">Examples<a aria-labelledby="examples" class="anchor-link" href="#examples" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="default">Default<a aria-labelledby="default" class="anchor-link" href="#default" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ToastDefault.tsx"},'<h3 id="color">Color<a aria-labelledby="color" class="anchor-link" href="#color" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ToastColor.tsx"},'<h3 id="auto-close">Auto Close<a aria-labelledby="auto-close" class="anchor-link" href="#auto-close" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ToastAutoClose.tsx"},'<h3 id="toast-as-a-service">Toast as a service<a aria-labelledby="toast-as-a-service" class="anchor-link" href="#toast-as-a-service" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><h4>Note: Toast As AService has an API that makes it easy to display toasts, without having to handle their open/close state.</h4><h4>Store multiple toasts and display them in the same container.</h4>',{demo:"ToastAsAService.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="toast-gt"><code>&lt;Toast/&gt;</code><a aria-labelledby="toast-gt" class="anchor-link" href="#toast-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">color</td>\n<td align="left"><code>informative</code> | <code>neutral</code> | <code>negative</code> | <code>positive</code></td>\n<td align="left">&#39;neutral&#39;</td>\n<td align="left">Variants</td>\n</tr>\n<tr>\n<td align="left">handleClose</td>\n<td align="left"><code>Function</code></td>\n<td align="left">-</td>\n<td align="left">Callback to close toast.</td>\n</tr>\n<tr>\n<td align="left">isOpen</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">The toast is visible when true.</td>\n</tr>\n<tr>\n<td align="left">autoClose</td>\n<td align="left"><code>false</code> | <code>number</code></td>\n<td align="left">false</td>\n<td align="left">Number of miliseconds to auto close.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td align="left">portalTo</td>\n<td align="left"><code>HTMLElement</code></td>\n<td align="left">-</td>\n<td align="left">Using ReactPortals to create portal to an element, example document.body</td>\n</tr>\n<tr>\n<td align="left">anchorOrigin</td>\n<td align="left"><code>Anchor</code></td>\n<td align="left"><code>{horizontal: &#39;center&#39;, vertical: &#39;center&#39;}</code></td>\n<td align="left">Placements of Toast.</td>\n</tr>\n</tbody></table>\n<h3 id="usetoast"><code>useToast()</code><a aria-labelledby="usetoast" class="anchor-link" href="#usetoast" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><h5>Used for Children component located in Toast Context Provider to add/remove current Toast</h5><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">show</td>\n<td align="left"><code>Function</code></td>\n<td align="left">-</td>\n<td align="left">Call to add toast to show in ToastContainer.</td>\n</tr>\n<tr>\n<td align="left">remove</td>\n<td align="left"><code>Function</code></td>\n<td align="left">-</td>\n<td align="left">Call to remove toast from ToastContext.</td>\n</tr>\n<tr>\n<td align="left">clearAll</td>\n<td align="left"><code>Function</code></td>\n<td align="left">—</td>\n<td align="left">Call to remove all toasts from ToastContext.</td>\n</tr>\n</tbody></table>\n<h3 id="toastcontextprovider"><code>ToastContextProvider</code><a aria-labelledby="toastcontextprovider" class="anchor-link" href="#toastcontextprovider" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><h5>Store multiple toasts and display them in the same container and handle toast&#39;s open/close state.</h5><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">anchorOrigin</td>\n<td align="left"><code>Anchor</code></td>\n<td align="left"><code>{horizontal: &#39;right&#39;, vertical: &#39;top&#39;}</code></td>\n<td align="left">Placements of ToastContainer.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Examples",level:2,hash:"examples",children:[{text:"Default",level:3,hash:"default"},{text:"Color",level:3,hash:"color"},{text:"Auto Close",level:3,hash:"auto-close"},{text:"Toast as a service",level:3,hash:"toast-as-a-service"}]},{text:"Props",level:2,hash:"props",children:[{text:"<code>&lt;Toast/&gt;</code>",level:3,hash:"toast-gt"},{text:"<code>useToast(&#8203;)</code>",level:3,hash:"usetoast"},{text:"<code>ToastContextProvider</code>",level:3,hash:"toastcontextprovider"}]}],title:"React Page Toast component",headers:{title:"React Page Toast component",components:["Toast"],hooks:[]}}},tw={"ToastDefault.tsx":{module:"./ToastDefault.tsx",raw:"import Button from '@comfortdelgro/react-compass/button'\nimport Icon from '@comfortdelgro/react-compass/icon'\nimport Toast from '@comfortdelgro/react-compass/toast'\nimport {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)\n\n  return (\n    <div>\n      <h3>Default toast</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsDefaultOpen(true)}>\n        Open toast\n      </Button>\n      <Toast isOpen={isDefaultOpen} handleClose={() => setIsDefaultOpen(false)}>\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n    </div>\n  )\n}\n\nexport default Default\n",moduleTS:"./ToastDefault.tsx",rawTS:"import Button from '@comfortdelgro/react-compass/button'\nimport Icon from '@comfortdelgro/react-compass/icon'\nimport Toast from '@comfortdelgro/react-compass/toast'\nimport {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false)\n\n  return (\n    <div>\n      <h3>Default toast</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsDefaultOpen(true)}>\n        Open toast\n      </Button>\n      <Toast isOpen={isDefaultOpen} handleClose={() => setIsDefaultOpen(false)}>\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n    </div>\n  )\n}\n\nexport default Default\n"},"ToastColor.tsx":{module:"./ToastColor.tsx",raw:"import Button from '@comfortdelgro/react-compass/button'\nimport Icon from '@comfortdelgro/react-compass/icon'\nimport Toast from '@comfortdelgro/react-compass/toast'\nimport {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Colors: React.FC = () => {\n  const [isInformativeOpen, setIsInformativeOpen] = React.useState(false)\n  const [isNeutralOpen, setIsNeutralOpen] = React.useState(false)\n  const [isPositiveOpen, setIsPositiveOpen] = React.useState(false)\n  const [isNegativeOpen, setIsNegativeOpen] = React.useState(false)\n\n  return (\n    <div>\n      <h3>Informative: blue</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsInformativeOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isInformativeOpen}\n        handleClose={() => setIsInformativeOpen(false)}\n        color='informative'\n        anchorOrigin={{horizontal: 'left', vertical: 'top'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n\n      <h3>Neutral: white</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsNeutralOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isNeutralOpen}\n        handleClose={() => setIsNeutralOpen(false)}\n        color='neutral'\n        anchorOrigin={{horizontal: 'right', vertical: 'top'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n\n      <h3>Negative: red</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsNegativeOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isNegativeOpen}\n        handleClose={() => setIsNegativeOpen(false)}\n        color='negative'\n        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n\n      <h3>Positive: green</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsPositiveOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isPositiveOpen}\n        handleClose={() => setIsPositiveOpen(false)}\n        color='positive'\n        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n    </div>\n  )\n}\n\nexport default Colors\n",moduleTS:"./ToastColor.tsx",rawTS:"import Button from '@comfortdelgro/react-compass/button'\nimport Icon from '@comfortdelgro/react-compass/icon'\nimport Toast from '@comfortdelgro/react-compass/toast'\nimport {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Colors: React.FC = () => {\n  const [isInformativeOpen, setIsInformativeOpen] = React.useState(false)\n  const [isNeutralOpen, setIsNeutralOpen] = React.useState(false)\n  const [isPositiveOpen, setIsPositiveOpen] = React.useState(false)\n  const [isNegativeOpen, setIsNegativeOpen] = React.useState(false)\n\n  return (\n    <div>\n      <h3>Informative: blue</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsInformativeOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isInformativeOpen}\n        handleClose={() => setIsInformativeOpen(false)}\n        color='informative'\n        anchorOrigin={{horizontal: 'left', vertical: 'top'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n\n      <h3>Neutral: white</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsNeutralOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isNeutralOpen}\n        handleClose={() => setIsNeutralOpen(false)}\n        color='neutral'\n        anchorOrigin={{horizontal: 'right', vertical: 'top'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n\n      <h3>Negative: red</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsNegativeOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isNegativeOpen}\n        handleClose={() => setIsNegativeOpen(false)}\n        color='negative'\n        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n\n      <h3>Positive: green</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsPositiveOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isPositiveOpen}\n        handleClose={() => setIsPositiveOpen(false)}\n        color='positive'\n        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n    </div>\n  )\n}\n\nexport default Colors\n"},"ToastAutoClose.tsx":{module:"./ToastAutoClose.tsx",raw:"import {Icon} from '@comfortdelgro/react-compass'\nimport Button from '@comfortdelgro/react-compass/button'\nimport Toast from '@comfortdelgro/react-compass/toast'\nimport {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst AutoClose: React.FC = () => {\n  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false)\n  return (\n    <div>\n      <h3>Auto-close toast</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsAutoCloseOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isAutoCloseOpen}\n        handleClose={() => setIsAutoCloseOpen(false)}\n        autoClose={500}\n        color='informative'\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n    </div>\n  )\n}\n\nexport default AutoClose\n",moduleTS:"./ToastAutoClose.tsx",rawTS:"import {Icon} from '@comfortdelgro/react-compass'\nimport Button from '@comfortdelgro/react-compass/button'\nimport Toast from '@comfortdelgro/react-compass/toast'\nimport {faImage, faXmark} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst AutoClose: React.FC = () => {\n  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false)\n  return (\n    <div>\n      <h3>Auto-close toast</h3>\n      <Button css={{width: '8rem'}} onPress={() => setIsAutoCloseOpen(true)}>\n        Open toast\n      </Button>\n      <Toast\n        isOpen={isAutoCloseOpen}\n        handleClose={() => setIsAutoCloseOpen(false)}\n        autoClose={500}\n        color='informative'\n      >\n        <Toast.Icon>\n          <Icon icon={faImage} />\n        </Toast.Icon>\n        <Toast.Title>My Title</Toast.Title>\n        <Toast.Label>a few minutes ago</Toast.Label>\n        <Toast.CloseIcon>\n          <Icon icon={faXmark} />\n        </Toast.CloseIcon>\n        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>\n        <Toast.Actions>\n          <Button>Take action</Button>\n          <Button>Take action</Button>\n        </Toast.Actions>\n      </Toast>\n    </div>\n  )\n}\n\nexport default AutoClose\n"},"ToastAsAService.tsx":{module:"./ToastAsAService.tsx",raw:"import {\n  Button,\n  Icon,\n  ToastContextProvider,\n  useToast,\n} from '@comfortdelgro/react-compass'\nimport Dropdown from '@comfortdelgro/react-compass/dropdown'\nimport {faImage} from '@fortawesome/free-solid-svg-icons'\nimport React, {Key} from 'react'\n\nconst SubService1 = () => {\n  const toast = useToast()\n  return (\n    <>\n      <Button\n        css={{width: 'fit-content'}}\n        onClick={() =>\n          toast.show({\n            color: 'informative',\n            title: 'Lorem ipsum dolor, sit amet consectetur',\n          })\n        }\n      >\n        Open toast\n      </Button>\n      <Button\n        css={{width: 'fit-content'}}\n        onClick={() =>\n          toast.show({\n            title: 'Lorem ipsum dolor, sit amet consectetur',\n            hasCloseIcon: false,\n          })\n        }\n      >\n        Open toast without close button\n      </Button>\n    </>\n  )\n}\nconst SubService2 = () => {\n  const toast = useToast()\n  return (\n    <>\n      <Button\n        css={{width: 'fit-content'}}\n        onClick={() =>\n          toast.show({\n            autoClose: false,\n            message: 'Lorem ipsum dolor, sit amet consectetur.',\n            icon: <Icon icon={faImage} />,\n            title: 'My Title',\n            actions: (\n              <>\n                <Button>Take action</Button>\n                <Button>Take action</Button>\n              </>\n            ),\n            label: 'a few minutes ago',\n          })\n        }\n      >\n        Open toast autoClose: false\n      </Button>\n      <Button css={{width: 'fit-content'}} onClick={() => toast.clearAll()}>\n        Clear all toasts\n      </Button>\n    </>\n  )\n}\n\nconst ToastAsService: React.FC = () => {\n  const [horizontal, setHorizontal] = React.useState<\n    'center' | 'left' | 'right'\n  >('right')\n  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(\n    'top',\n  )\n\n  return (\n    <div>\n      <h3>Toast as a service</h3>\n      <Dropdown.Select\n        isRequired\n        label='Please select horizontal'\n        placeholder='Choose a horizontal'\n        selectedKey={horizontal}\n        onSelectionChange={(k: Key) =>\n          setHorizontal(k as 'center' | 'left' | 'right')\n        }\n      >\n        <Dropdown.Item key='left'>Left</Dropdown.Item>\n        <Dropdown.Item key='center'>Center</Dropdown.Item>\n        <Dropdown.Item key='right'>Right</Dropdown.Item>\n      </Dropdown.Select>\n      <br />\n      <Dropdown.Select\n        isRequired\n        label='Please select vertical'\n        placeholder='Choose a vertical'\n        selectedKey={vertical}\n        onSelectionChange={(k: Key) =>\n          setVertical(k as 'center' | 'top' | 'bottom')\n        }\n      >\n        <Dropdown.Item key='top'>Top</Dropdown.Item>\n        <Dropdown.Item key='center'>Center</Dropdown.Item>\n        <Dropdown.Item key='bottom'>Bottom</Dropdown.Item>\n      </Dropdown.Select>\n      <ToastContextProvider anchorOrigin={{horizontal, vertical}}>\n        <div\n          style={{\n            display: 'flex',\n            justifyContent: 'center',\n            gap: '0.5rem',\n            margin: '1rem',\n          }}\n        >\n          <SubService1 />\n          <SubService2 />\n        </div>\n      </ToastContextProvider>\n    </div>\n  )\n}\n\nexport default ToastAsService\n",moduleTS:"./ToastAsAService.tsx",rawTS:"import {\n  Button,\n  Icon,\n  ToastContextProvider,\n  useToast,\n} from '@comfortdelgro/react-compass'\nimport Dropdown from '@comfortdelgro/react-compass/dropdown'\nimport {faImage} from '@fortawesome/free-solid-svg-icons'\nimport React, {Key} from 'react'\n\nconst SubService1 = () => {\n  const toast = useToast()\n  return (\n    <>\n      <Button\n        css={{width: 'fit-content'}}\n        onClick={() =>\n          toast.show({\n            color: 'informative',\n            title: 'Lorem ipsum dolor, sit amet consectetur',\n          })\n        }\n      >\n        Open toast\n      </Button>\n      <Button\n        css={{width: 'fit-content'}}\n        onClick={() =>\n          toast.show({\n            title: 'Lorem ipsum dolor, sit amet consectetur',\n            hasCloseIcon: false,\n          })\n        }\n      >\n        Open toast without close button\n      </Button>\n    </>\n  )\n}\nconst SubService2 = () => {\n  const toast = useToast()\n  return (\n    <>\n      <Button\n        css={{width: 'fit-content'}}\n        onClick={() =>\n          toast.show({\n            autoClose: false,\n            message: 'Lorem ipsum dolor, sit amet consectetur.',\n            icon: <Icon icon={faImage} />,\n            title: 'My Title',\n            actions: (\n              <>\n                <Button>Take action</Button>\n                <Button>Take action</Button>\n              </>\n            ),\n            label: 'a few minutes ago',\n          })\n        }\n      >\n        Open toast autoClose: false\n      </Button>\n      <Button css={{width: 'fit-content'}} onClick={() => toast.clearAll()}>\n        Clear all toasts\n      </Button>\n    </>\n  )\n}\n\nconst ToastAsService: React.FC = () => {\n  const [horizontal, setHorizontal] = React.useState<\n    'center' | 'left' | 'right'\n  >('right')\n  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>(\n    'top',\n  )\n\n  return (\n    <div>\n      <h3>Toast as a service</h3>\n      <Dropdown.Select\n        isRequired\n        label='Please select horizontal'\n        placeholder='Choose a horizontal'\n        selectedKey={horizontal}\n        onSelectionChange={(k: Key) =>\n          setHorizontal(k as 'center' | 'left' | 'right')\n        }\n      >\n        <Dropdown.Item key='left'>Left</Dropdown.Item>\n        <Dropdown.Item key='center'>Center</Dropdown.Item>\n        <Dropdown.Item key='right'>Right</Dropdown.Item>\n      </Dropdown.Select>\n      <br />\n      <Dropdown.Select\n        isRequired\n        label='Please select vertical'\n        placeholder='Choose a vertical'\n        selectedKey={vertical}\n        onSelectionChange={(k: Key) =>\n          setVertical(k as 'center' | 'top' | 'bottom')\n        }\n      >\n        <Dropdown.Item key='top'>Top</Dropdown.Item>\n        <Dropdown.Item key='center'>Center</Dropdown.Item>\n        <Dropdown.Item key='bottom'>Bottom</Dropdown.Item>\n      </Dropdown.Select>\n      <ToastContextProvider anchorOrigin={{horizontal, vertical}}>\n        <div\n          style={{\n            display: 'flex',\n            justifyContent: 'center',\n            gap: '0.5rem',\n            margin: '1rem',\n          }}\n        >\n          <SubService1 />\n          <SubService2 />\n        </div>\n      </ToastContextProvider>\n    </div>\n  )\n}\n\nexport default ToastAsService\n"}};tw.scope={process:{},import:{"@comfortdelgro/react-compass/button":tr,"@comfortdelgro/react-compass/icon":tl,"@comfortdelgro/react-compass/toast":td,"@fortawesome/free-solid-svg-icons":tu,react:tf,"@comfortdelgro/react-compass":th,"@comfortdelgro/react-compass/dropdown":tp}};var tk={"./ToastDefault.tsx":function(){var t=tm.useState(!1),e=(0,tT.Z)(t,2),n=e[0],d=e[1];return(0,tg.jsxs)("div",{children:[o||(o=(0,tg.jsx)("h3",{children:"Default toast"})),(0,tg.jsx)(tr.default,{css:{width:"8rem"},onPress:function(){return d(!0)},children:"Open toast"}),(0,tg.jsxs)(td.default,{isOpen:n,handleClose:function(){return d(!1)},children:[s||(s=(0,tg.jsx)(td.default.Icon,{children:(0,tg.jsx)(tc(),{icon:tu.faImage})})),a||(a=(0,tg.jsx)(td.default.Title,{children:"My Title"})),i||(i=(0,tg.jsx)(td.default.Label,{children:"a few minutes ago"})),r||(r=(0,tg.jsx)(td.default.CloseIcon,{children:(0,tg.jsx)(tc(),{icon:tu.faXmark})})),l||(l=(0,tg.jsx)(td.default.Message,{children:"Lorem ipsum dolor, sit amet consectetur."})),c||(c=(0,tg.jsxs)(td.default.Actions,{children:[(0,tg.jsx)(tr.default,{children:"Take action"}),(0,tg.jsx)(tr.default,{children:"Take action"})]}))]})]})},"./ToastColor.tsx":function(){var t=tm.useState(!1),e=(0,tT.Z)(t,2),n=e[0],o=e[1],s=tm.useState(!1),a=(0,tT.Z)(s,2),i=a[0],r=a[1],l=tm.useState(!1),c=(0,tT.Z)(l,2),X=c[0],H=c[1],F=tm.useState(!1),K=(0,tT.Z)(F,2),_=K[0],V=K[1];return(0,tg.jsxs)("div",{children:[d||(d=(0,tg.jsx)("h3",{children:"Informative: blue"})),(0,tg.jsx)(tr.default,{css:{width:"8rem"},onPress:function(){return o(!0)},children:"Open toast"}),(0,tg.jsxs)(td.default,{isOpen:n,handleClose:function(){return o(!1)},color:"informative",anchorOrigin:{horizontal:"left",vertical:"top"},children:[u||(u=(0,tg.jsx)(td.default.Icon,{children:(0,tg.jsx)(tc(),{icon:tu.faImage})})),m||(m=(0,tg.jsx)(td.default.Title,{children:"My Title"})),f||(f=(0,tg.jsx)(td.default.Label,{children:"a few minutes ago"})),h||(h=(0,tg.jsx)(td.default.CloseIcon,{children:(0,tg.jsx)(tc(),{icon:tu.faXmark})})),p||(p=(0,tg.jsx)(td.default.Message,{children:"Lorem ipsum dolor, sit amet consectetur."})),T||(T=(0,tg.jsxs)(td.default.Actions,{children:[(0,tg.jsx)(tr.default,{children:"Take action"}),(0,tg.jsx)(tr.default,{children:"Take action"})]}))]}),g||(g=(0,tg.jsx)("h3",{children:"Neutral: white"})),(0,tg.jsx)(tr.default,{css:{width:"8rem"},onPress:function(){return r(!0)},children:"Open toast"}),(0,tg.jsxs)(td.default,{isOpen:i,handleClose:function(){return r(!1)},color:"neutral",anchorOrigin:{horizontal:"right",vertical:"top"},children:[v||(v=(0,tg.jsx)(td.default.Icon,{children:(0,tg.jsx)(tc(),{icon:tu.faImage})})),x||(x=(0,tg.jsx)(td.default.Title,{children:"My Title"})),I||(I=(0,tg.jsx)(td.default.Label,{children:"a few minutes ago"})),C||(C=(0,tg.jsx)(td.default.CloseIcon,{children:(0,tg.jsx)(tc(),{icon:tu.faXmark})})),w||(w=(0,tg.jsx)(td.default.Message,{children:"Lorem ipsum dolor, sit amet consectetur."})),k||(k=(0,tg.jsxs)(td.default.Actions,{children:[(0,tg.jsx)(tr.default,{children:"Take action"}),(0,tg.jsx)(tr.default,{children:"Take action"})]}))]}),b||(b=(0,tg.jsx)("h3",{children:"Negative: red"})),(0,tg.jsx)(tr.default,{css:{width:"8rem"},onPress:function(){return V(!0)},children:"Open toast"}),(0,tg.jsxs)(td.default,{isOpen:_,handleClose:function(){return V(!1)},color:"negative",anchorOrigin:{horizontal:"left",vertical:"bottom"},children:[O||(O=(0,tg.jsx)(td.default.Icon,{children:(0,tg.jsx)(tc(),{icon:tu.faImage})})),B||(B=(0,tg.jsx)(td.default.Title,{children:"My Title"})),y||(y=(0,tg.jsx)(td.default.Label,{children:"a few minutes ago"})),j||(j=(0,tg.jsx)(td.default.CloseIcon,{children:(0,tg.jsx)(tc(),{icon:tu.faXmark})})),S||(S=(0,tg.jsx)(td.default.Message,{children:"Lorem ipsum dolor, sit amet consectetur."})),A||(A=(0,tg.jsxs)(td.default.Actions,{children:[(0,tg.jsx)(tr.default,{children:"Take action"}),(0,tg.jsx)(tr.default,{children:"Take action"})]}))]}),D||(D=(0,tg.jsx)("h3",{children:"Positive: green"})),(0,tg.jsx)(tr.default,{css:{width:"8rem"},onPress:function(){return H(!0)},children:"Open toast"}),(0,tg.jsxs)(td.default,{isOpen:X,handleClose:function(){return H(!1)},color:"positive",anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[L||(L=(0,tg.jsx)(td.default.Icon,{children:(0,tg.jsx)(tc(),{icon:tu.faImage})})),M||(M=(0,tg.jsx)(td.default.Title,{children:"My Title"})),P||(P=(0,tg.jsx)(td.default.Label,{children:"a few minutes ago"})),R||(R=(0,tg.jsx)(td.default.CloseIcon,{children:(0,tg.jsx)(tc(),{icon:tu.faXmark})})),z||(z=(0,tg.jsx)(td.default.Message,{children:"Lorem ipsum dolor, sit amet consectetur."})),N||(N=(0,tg.jsxs)(td.default.Actions,{children:[(0,tg.jsx)(tr.default,{children:"Take action"}),(0,tg.jsx)(tr.default,{children:"Take action"})]}))]})]})},"./ToastAutoClose.tsx":function(){var t=tm.useState(!1),e=(0,tT.Z)(t,2),n=e[0],o=e[1];return(0,tg.jsxs)("div",{children:[X||(X=(0,tg.jsx)("h3",{children:"Auto-close toast"})),(0,tg.jsx)(tr.default,{css:{width:"8rem"},onPress:function(){return o(!0)},children:"Open toast"}),(0,tg.jsxs)(td.default,{isOpen:n,handleClose:function(){return o(!1)},autoClose:500,color:"informative",children:[H||(H=(0,tg.jsx)(td.default.Icon,{children:(0,tg.jsx)(th.Icon,{icon:tu.faImage})})),F||(F=(0,tg.jsx)(td.default.Title,{children:"My Title"})),K||(K=(0,tg.jsx)(td.default.Label,{children:"a few minutes ago"})),_||(_=(0,tg.jsx)(td.default.CloseIcon,{children:(0,tg.jsx)(th.Icon,{icon:tu.faXmark})})),V||(V=(0,tg.jsx)(td.default.Message,{children:"Lorem ipsum dolor, sit amet consectetur."})),Z||(Z=(0,tg.jsxs)(td.default.Actions,{children:[(0,tg.jsx)(tr.default,{children:"Take action"}),(0,tg.jsx)(tr.default,{children:"Take action"})]}))]})]})},"./ToastAsAService.tsx":function(){var t=tm.useState("right"),e=(0,tT.Z)(t,2),n=e[0],o=e[1],s=tm.useState("top"),a=(0,tT.Z)(s,2),i=a[0],r=a[1];return(0,tg.jsxs)("div",{children:[J||(J=(0,tg.jsx)("h3",{children:"Toast as a service"})),(0,tg.jsxs)(tp.default.Select,{isRequired:!0,label:"Please select horizontal",placeholder:"Choose a horizontal",selectedKey:n,onSelectionChange:function(t){return o(t)},children:[U||(U=(0,tg.jsx)(tp.default.Item,{children:"Left"},"left")),G||(G=(0,tg.jsx)(tp.default.Item,{children:"Center"},"center")),W||(W=(0,tg.jsx)(tp.default.Item,{children:"Right"},"right"))]}),Q||(Q=(0,tg.jsx)("br",{})),(0,tg.jsxs)(tp.default.Select,{isRequired:!0,label:"Please select vertical",placeholder:"Choose a vertical",selectedKey:i,onSelectionChange:function(t){return r(t)},children:[Y||(Y=(0,tg.jsx)(tp.default.Item,{children:"Top"},"top")),tt||(tt=(0,tg.jsx)(tp.default.Item,{children:"Center"},"center")),te||(te=(0,tg.jsx)(tp.default.Item,{children:"Bottom"},"bottom"))]}),(0,tg.jsx)(th.ToastContextProvider,{anchorOrigin:{horizontal:n,vertical:i},children:(0,tg.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"0.5rem",margin:"1rem"},children:[tn||(tn=(0,tg.jsx)(tv,{})),to||(to=(0,tg.jsx)(tx,{}))]})})]})}},tb={"components/common/ComponentLinkHeader.tsx":tI.Z};function tO(){return(0,tg.jsx)(ti.Z,(0,ta.Z)({},ts))}},82769:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast",function(){return n(61973)}])}},function(t){t.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return t(t.s=82769)}),_N_E=t.O()}]);