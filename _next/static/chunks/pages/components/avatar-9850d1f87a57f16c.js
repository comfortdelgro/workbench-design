(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6259],{86773:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return w}});var n,r,s,i,l,o,c,d,m,v,g,p={};e.r(p),e.d(p,{demoComponents:function(){return y},demos:function(){return z},docs:function(){return f},srcComponents:function(){return C}});var b=e(26098),h=e(3072),x=e(15393),u=e(14043),A=e(31549),f={description:"Avatars can be used in everything including a person's profile picture, dialog menu, ext.",location:"/docs/data/components/avatars/avatars.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Avatar</h1><p class="description">Avatars can be used in everything including a person\'s profile picture, dialog menu, ext.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Avatar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="examples">Examples<a aria-labelledby="examples" class="anchor-link" href="#examples" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="image-avatars">Image avatars<a aria-labelledby="image-avatars" class="anchor-link" href="#image-avatars" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>Image avatars can be created by passing standard <code>image</code> props to the component.</p>\n',{demo:"ImageAvatars.tsx"},'<h3 id="letter-avatars">Letter avatars<a aria-labelledby="letter-avatars" class="anchor-link" href="#letter-avatars" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LetterAvatars.tsx"},'<h3 id="sizes">Sizes<a aria-labelledby="sizes" class="anchor-link" href="#sizes" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SizesAvatars.tsx"},'<h3 id="icon-avatars">Icon avatars<a aria-labelledby="icon-avatars" class="anchor-link" href="#icon-avatars" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"IconAvatars.tsx"},'<h3 id="group-avatars">Group avatars<a aria-labelledby="group-avatars" class="anchor-link" href="#group-avatars" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"GroupAvatars.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CustomAvatars.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="avatar-gt"><code>&lt;Avatar/&gt;</code><a aria-labelledby="avatar-gt" class="anchor-link" href="#avatar-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">label</td>\n<td align="left"><code>String</code></td>\n<td align="left">—</td>\n<td align="left">The label, used as fallback for image. The avatars would show the initials of the labels.</td>\n</tr>\n<tr>\n<td align="left">image</td>\n<td align="left"><code>String </code></td>\n<td align="left">—</td>\n<td align="left">Image of the avatars takes the highest priority. We pass the image&#39;s address as string to this prop.</td>\n</tr>\n<tr>\n<td align="left">size</td>\n<td align="left"><code>xxs</code>|<code>xs</code>|<code>sm</code>|<code>md</code>|<code>lg</code></td>\n<td align="left">—</td>\n<td align="left">Sizes of the avatars.</td>\n</tr>\n<tr>\n<td align="left">icon</td>\n<td align="left"><code>ReactNode</code>|<code>false</code>| <code>true</code></td>\n<td align="left">false</td>\n<td align="left">The icon of the alerts. It&#39;d disappear if the value is false.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n<h3 id="avatar-group-gt"><code>&lt;Avatar.Group/&gt;</code><a aria-labelledby="avatar-group-gt" class="anchor-link" href="#avatar-group-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>ReactNode</code> | <code>String</code></td>\n<td align="left">—</td>\n<td align="left">We pass our avatars as children props to Avatar.Group.</td>\n</tr>\n<tr>\n<td align="left">display</td>\n<td align="left"><code>Number</code></td>\n<td align="left">—</td>\n<td align="left">Display prop determines the number of avatar displayed.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Examples",level:2,hash:"examples",children:[{text:"Image avatars",level:3,hash:"image-avatars"},{text:"Letter avatars",level:3,hash:"letter-avatars"},{text:"Sizes",level:3,hash:"sizes"},{text:"Icon avatars",level:3,hash:"icon-avatars"},{text:"Group avatars",level:3,hash:"group-avatars"},{text:"Custom styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[{text:"&lt;Avatar/&gt;",level:3,hash:"avatar-gt"},{text:"&lt;Avatar.Group/&gt;",level:3,hash:"avatar-group-gt"}]}],title:"React Avatar component",headers:{title:"React Avatar component",components:["Avatar","AvatarGroup","Badge"],hooks:[]}},z={"ImageAvatars.tsx":{module:"./ImageAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ImageAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=32'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=31'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=60'\n        size='lg'\n      />\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Avatar\n  label='Albert Einstein'\n  image='https://i.pravatar.cc/150?img=32'\n  size='lg'\n/>\n<Avatar\n  label='Albert Einstein'\n  image='https://i.pravatar.cc/150?img=31'\n  size='lg'\n/>\n<Avatar\n  label='Albert Einstein'\n  image='https://i.pravatar.cc/150?img=60'\n  size='lg'\n/>",moduleTS:"./ImageAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ImageAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=32'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=31'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=60'\n        size='lg'\n      />\n    </Flexbox>\n  )\n}\n"},"LetterAvatars.tsx":{module:"./LetterAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function LetterAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar label='Albert Einstein' size='lg' />\n\n      <Avatar label='Adam Levine' size='lg' />\n\n      <Avatar label='Dwane Johnson' size='lg' />\n    </Flexbox>\n  )\n}\nexport default LetterAvatars\n",jsxPreview:"<Avatar label='Albert Einstein' size='lg' />\r\n\r\n<Avatar label='Adam Levine' size='lg' />\r\n\r\n<Avatar label='Dwane Johnson' size='lg' />",moduleTS:"./LetterAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function LetterAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar label='Albert Einstein' size='lg' />\n\n      <Avatar label='Adam Levine' size='lg' />\n\n      <Avatar label='Dwane Johnson' size='lg' />\n    </Flexbox>\n  )\n}\nexport default LetterAvatars\n"},"SizesAvatars.tsx":{module:"./SizesAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function SizeAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=32'\n        size='xs'\n      />\n\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=31'\n        size='sm'\n      />\n\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=60'\n        size='md'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?u=a042581f4e29026704d'\n        size='lg'\n      />\n    </Flexbox>\n  )\n}\nexport default SizeAvatars\n",jsxPreview:"<Avatar\r\n  label='Albert Einstein'\r\n  image='https://i.pravatar.cc/150?img=32'\r\n  size='xs'\r\n/>\r\n\r\n<Avatar\r\n  label='Albert Einstein'\r\n  image='https://i.pravatar.cc/150?img=31'\r\n  size='sm'\r\n/>\r\n\r\n<Avatar\r\n  label='Albert Einstein'\r\n  image='https://i.pravatar.cc/150?img=60'\r\n  size='md'\r\n/>\r\n<Avatar\r\n  label='Albert Einstein'\r\n  image='https://i.pravatar.cc/150?u=a042581f4e29026704d'\r\n  size='lg'\r\n/>",moduleTS:"./SizesAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function SizeAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=32'\n        size='xs'\n      />\n\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=31'\n        size='sm'\n      />\n\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=60'\n        size='md'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?u=a042581f4e29026704d'\n        size='lg'\n      />\n    </Flexbox>\n  )\n}\nexport default SizeAvatars\n"},"IconAvatars.tsx":{module:"./IconAvatars.tsx",raw:"import BugIcon from '@comfortdelgro/compass-icons/react/bug'\nimport {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function IconAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar label='Albert Einstein' icon={<BugIcon />} size='lg' />\n    </Flexbox>\n  )\n}\nexport default IconAvatars\n",jsxPreview:"<Avatar label='Albert Einstein' icon={<BugIcon />} size='lg' />",moduleTS:"./IconAvatars.tsx",rawTS:"import BugIcon from '@comfortdelgro/compass-icons/react/bug'\nimport {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function IconAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar label='Albert Einstein' icon={<BugIcon />} size='lg' />\n    </Flexbox>\n  )\n}\nexport default IconAvatars\n"},"CustomAvatars.tsx":{module:"./CustomAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function CustomAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?u=a0425e81423429026704d'\n        size='lg'\n        css={{opacity: '0.8', '&:hover': {opacity: '0.5', cursor: 'pointer'}}}\n      />\n    </Flexbox>\n  )\n}\nexport default CustomAvatars\n",jsxPreview:"<Avatar\r\n  label='Albert Einstein'\r\n  image='https://i.pravatar.cc/150?u=a0425e81423429026704d'\r\n  size='lg'\r\n  css={{opacity: '0.8', '&:hover': {opacity: '0.5', cursor: 'pointer'}}}\r\n/>",moduleTS:"./CustomAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport function CustomAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?u=a0425e81423429026704d'\n        size='lg'\n        css={{opacity: '0.8', '&:hover': {opacity: '0.5', cursor: 'pointer'}}}\n      />\n    </Flexbox>\n  )\n}\nexport default CustomAvatars\n"},"GroupAvatars.tsx":{module:"./GroupAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function GroupAvatars() {\n  const images = [\n    'https://i.pravatar.cc/150?img=32',\n    'https://i.pravatar.cc/150?img=31',\n    'https://i.pravatar.cc/150?u=a048581f4e29026701d',\n    'https://i.pravatar.cc/150?img=60',\n    'https://i.pravatar.cc/150?u=a042581f4e29026704d',\n  ] as const\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Avatar.Group display={5} size='md' disabledAnimation>\n        <Avatar label='Leonhard Euler' image={images[0]} size='md' />\n        <Avatar label='Isaac Newton' image={images[1]} size='md' />\n        <Avatar label='Alan Turing' image={images[2]} size='md' />\n        <Avatar label='David Hilbert' image={images[3]} size='md' />\n        <Avatar label='Edwin Hubble' image={images[4]} size='md' />\n        <Avatar label='Ada Lovelace' image={images[0]} size='md' />\n        <Avatar label='Max Planck' image={images[1]} size='md' />\n      </Avatar.Group>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Avatar.Group display={5} size='md' disabledAnimation>\r\n    <Avatar label='Leonhard Euler' image={images[0]} size='md' />\r\n    <Avatar label='Isaac Newton' image={images[1]} size='md' />\r\n    <Avatar label='Alan Turing' image={images[2]} size='md' />\r\n    <Avatar label='David Hilbert' image={images[3]} size='md' />\r\n    <Avatar label='Edwin Hubble' image={images[4]} size='md' />\r\n    <Avatar label='Ada Lovelace' image={images[0]} size='md' />\r\n    <Avatar label='Max Planck' image={images[1]} size='md' />\r\n</Avatar.Group>\r\n",moduleTS:"./GroupAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function GroupAvatars() {\n  const images = [\n    'https://i.pravatar.cc/150?img=32',\n    'https://i.pravatar.cc/150?img=31',\n    'https://i.pravatar.cc/150?u=a048581f4e29026701d',\n    'https://i.pravatar.cc/150?img=60',\n    'https://i.pravatar.cc/150?u=a042581f4e29026704d',\n  ] as const\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Avatar.Group display={5} size='md' disabledAnimation>\n        <Avatar label='Leonhard Euler' image={images[0]} size='md' />\n        <Avatar label='Isaac Newton' image={images[1]} size='md' />\n        <Avatar label='Alan Turing' image={images[2]} size='md' />\n        <Avatar label='David Hilbert' image={images[3]} size='md' />\n        <Avatar label='Edwin Hubble' image={images[4]} size='md' />\n        <Avatar label='Ada Lovelace' image={images[0]} size='md' />\n        <Avatar label='Max Planck' image={images[1]} size='md' />\n      </Avatar.Group>\n    </Flexbox>\n  )\n}\n"}};z.scope={process:{},import:{"@comfortdelgro/react-compass":x,"@comfortdelgro/compass-icons/react/bug":u}};var y={"./ImageAvatars.tsx":function(){return(0,A.jsxs)(x.Flexbox,{css:{justifyContent:"center"},children:[n||(n=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=32",size:"lg"})),r||(r=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=31",size:"lg"})),s||(s=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=60",size:"lg"}))]})},"./LetterAvatars.tsx":function(){return(0,A.jsxs)(x.Flexbox,{css:{justifyContent:"center"},children:[i||(i=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",size:"lg"})),l||(l=(0,A.jsx)(x.Avatar,{label:"Adam Levine",size:"lg"})),o||(o=(0,A.jsx)(x.Avatar,{label:"Dwane Johnson",size:"lg"}))]})},"./SizesAvatars.tsx":function(){return(0,A.jsxs)(x.Flexbox,{css:{justifyContent:"center"},children:[c||(c=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=32",size:"xs"})),d||(d=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=31",size:"sm"})),m||(m=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=60",size:"md"})),v||(v=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?u=a042581f4e29026704d",size:"lg"}))]})},"./IconAvatars.tsx":function(){return(0,A.jsx)(x.Flexbox,{css:{justifyContent:"center"},children:g||(g=(0,A.jsx)(x.Avatar,{label:"Albert Einstein",icon:(0,A.jsx)(u.default,{}),size:"lg"}))})},"./CustomAvatars.tsx":function(){return(0,A.jsx)(x.Flexbox,{css:{justifyContent:"center"},children:(0,A.jsx)(x.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?u=a0425e81423429026704d",size:"lg",css:{opacity:"0.8","&:hover":{opacity:"0.5",cursor:"pointer"}}})})},"./GroupAvatars.tsx":function(){return(0,A.jsx)(x.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:(0,A.jsxs)(x.Avatar.Group,{display:5,size:"md",disabledAnimation:!0,children:[(0,A.jsx)(x.Avatar,{label:"Leonhard Euler",image:"https://i.pravatar.cc/150?img=32",size:"md"}),(0,A.jsx)(x.Avatar,{label:"Isaac Newton",image:"https://i.pravatar.cc/150?img=31",size:"md"}),(0,A.jsx)(x.Avatar,{label:"Alan Turing",image:"https://i.pravatar.cc/150?u=a048581f4e29026701d",size:"md"}),(0,A.jsx)(x.Avatar,{label:"David Hilbert",image:"https://i.pravatar.cc/150?img=60",size:"md"}),(0,A.jsx)(x.Avatar,{label:"Edwin Hubble",image:"https://i.pravatar.cc/150?u=a042581f4e29026704d",size:"md"}),(0,A.jsx)(x.Avatar,{label:"Ada Lovelace",image:"https://i.pravatar.cc/150?img=32",size:"md"}),(0,A.jsx)(x.Avatar,{label:"Max Planck",image:"https://i.pravatar.cc/150?img=31",size:"md"})]})})}},C={};function w(){return(0,A.jsx)(h.Z,(0,b.Z)({},p))}},31114:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/avatar",function(){return e(86773)}])},14043:function(a,t,e){"use strict";e.r(t);var n=e(44194);let r=(0,n.forwardRef)((a,t)=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:t,...a},n.createElement("g",{fill:"currentColor"},n.createElement("path",{d:"M11.6084 13.7248C11.6375 13.7498 11.6625 13.779 11.6875 13.8081C12.2834 13.5039 12.9542 13.3331 13.6292 13.3331H18.3334C19.0459 13.3331 19.7167 13.5039 20.3125 13.8081C20.3375 13.779 20.3625 13.7498 20.3917 13.7248L23.0584 11.0579C23.5792 10.5362 24.4209 10.5362 24.9417 11.0579C25.4625 11.5788 25.4625 12.4205 24.9417 12.9414L22.275 15.6083C22.2125 15.6375 22.2209 15.6625 22.1917 15.6875C22.4459 16.1875 22.6084 16.7459 22.6542 17.3334H25.3334C26.0709 17.3334 26.6667 17.9293 26.6667 18.6669C26.6667 19.4044 26.0709 20.0003 25.3334 20.0003H22.6667C22.6667 21.0254 22.4375 21.9922 22.025 22.8589C22.1125 22.9131 22.2 22.9797 22.275 23.0589L24.9417 25.7258C25.4625 26.2467 25.4625 27.0884 24.9417 27.6093C24.4209 28.1302 23.5792 28.1302 23.0584 27.6093L20.4292 24.9841C19.4084 25.8925 18.1042 26.4925 16.6667 26.6342V16.6667C16.6667 16.3 16.3667 16 15.9625 16C15.6334 16 15.2959 16.3 15.2959 16.6667V26.6342C13.8959 26.4925 12.5917 25.8925 11.5709 24.9841L8.94296 27.6093C8.42212 28.1302 7.57796 28.1302 7.05712 27.6093C6.53671 27.0884 6.53671 26.2467 7.05712 25.7258L9.72504 23.0589C9.80004 22.9797 9.88754 22.9131 9.97504 22.8589C9.56254 21.9922 9.33337 21.0254 9.33337 20.0003H6.66671C5.93046 20.0003 5.33337 19.4044 5.33337 18.6669C5.33337 17.9293 5.93046 17.3334 6.66671 17.3334H9.34587C9.39087 16.7459 9.55421 16.1875 9.80837 15.6875C9.77921 15.6625 9.75004 15.6375 9.72504 15.6083L7.05712 12.9414C6.53671 12.4205 6.53671 11.5788 7.05712 11.0579C7.57796 10.5362 8.42212 10.5362 8.94296 11.0579L11.6084 13.7248Z"}),n.createElement("path",{opacity:.4,d:"M20 9.60004V9.75826C20 10.4578 19.4708 11.0223 18.8167 11.0223H13.1833C12.5292 11.0223 12 10.4578 12 9.75826V9.60004C12 7.2436 13.7542 5.33337 16 5.33337C18.2083 5.33337 20 7.2436 20 9.60004ZM15.3333 26.6312V16C15.3333 15.6089 15.6333 15.2889 16 15.2889C16.3667 15.2889 16.6667 15.6089 16.6667 16V26.6312C16.4458 26.6534 16.225 26.6667 16 26.6667C15.775 26.6667 15.5542 26.6534 15.3333 26.6312Z"}))));t.default=r}},function(a){a.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return a(a.s=31114)}),_N_E=a.O()}]);