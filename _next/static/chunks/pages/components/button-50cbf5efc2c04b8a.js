(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9091],{2708:function(n,t,o){"use strict";o.d(t,{Z:function(){return u}});var e,r,a=o(38443),s=o(2158),i=o.n(s),c=o(97458);function u(){return(0,c.jsxs)(a.Flexbox,{css:{marginBottom:"$4"},children:[(0,c.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:e||(e=(0,c.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,c.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,c.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},20852:function(n,t,o){"use strict";o.r(t),o.d(t,{default:function(){return N}});var e,r,a,s,i,c,u,l,d,f,h,g,m,x,B,p,b,v,I,y,w,j,S,T,F,k,V,U,C,D,z,L={};o.r(L),o.d(L,{demoComponents:function(){return M},demos:function(){return E},docs:function(){return _},srcComponents:function(){return A}});var q=o(88867),R=o(7703),G=o(38443),P=o(46769),W=o(97458),H=o(2708),_={en:{description:"Buttons allow users to take actions, and make choices, with a single tap.",location:"/docs/data/components/button/button.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Button</h1><p class="description">Buttons allow users to take actions, and make choices, with a single tap.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Button<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/button\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="button-sizes">Button Sizes<a aria-labelledby="button-sizes" class="anchor-link" href="#button-sizes" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ButtonSize.tsx"},'<h2 id="button-with-ripple-effect">Button with ripple effect<a aria-labelledby="button-with-ripple-effect" class="anchor-link" href="#button-with-ripple-effect" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ButtonRippleEffect.tsx"},'<h2 id="button-variants">Button Variants<a aria-labelledby="button-variants" class="anchor-link" href="#button-variants" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ButtonVariants.tsx"},'<h3 id="buttons-with-left-icons">Buttons with left icons<a aria-labelledby="buttons-with-left-icons" class="anchor-link" href="#buttons-with-left-icons" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ButtonWithLeftIcon.tsx"},'<h3 id="buttons-with-right-icons">Buttons with right icons<a aria-labelledby="buttons-with-right-icons" class="anchor-link" href="#buttons-with-right-icons" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ButtonWithRightIcon.tsx"},'<h3 id="buttons-with-both-left-and-right-icons">Buttons with both left and right icons<a aria-labelledby="buttons-with-both-left-and-right-icons" class="anchor-link" href="#buttons-with-both-left-and-right-icons" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ButtonLeftAndRightIcon.tsx"},'<h3 id="buttons-with-icons-as-content">Buttons with icons as content<a aria-labelledby="buttons-with-icons-as-content" class="anchor-link" href="#buttons-with-icons-as-content" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ButtonIcon.tsx"},'<h2 id="loading-buttons">Loading buttons<a aria-labelledby="loading-buttons" class="anchor-link" href="#loading-buttons" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ButtonLoading.tsx"},'<h2 id="square-buttons">Square buttons<a aria-labelledby="square-buttons" class="anchor-link" href="#square-buttons" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"SquareButton.tsx"},'<h2 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>You can style React Compass&#39;s components with the css prop. <br/>\nWith css prop, you can basically do anything that css can do.</p>\n',{demo:"CustomStyling.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">color</td>\n<td align="left"><code>info</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">rightIcon</td>\n<td align="left"><code>ReactNode</code>|<code>false</code>| <code>true</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">leftIcon</td>\n<td align="left"><code>ReactNode</code>|<code>false</code>| <code>true</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>primary</code> | <code>secondary</code> | <code>danger</code> | <code>ghost</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">loading</td>\n<td align="left"><code>false</code>| <code>true</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">isSquare</td>\n<td align="left"><code>false</code>| <code>true</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Import",level:2,hash:"import",children:[]},{text:"Button Sizes",level:2,hash:"button-sizes",children:[]},{text:"Button with ripple effect",level:2,hash:"button-with-ripple-effect",children:[]},{text:"Button Variants",level:2,hash:"button-variants",children:[{text:"Buttons with left icons",level:3,hash:"buttons-with-left-icons"},{text:"Buttons with right icons",level:3,hash:"buttons-with-right-icons"},{text:"Buttons with both left and right icons",level:3,hash:"buttons-with-both-left-and-right-icons"},{text:"Buttons with icons as content",level:3,hash:"buttons-with-icons-as-content"}]},{text:"Loading buttons",level:2,hash:"loading-buttons",children:[]},{text:"Square buttons",level:2,hash:"square-buttons",children:[]},{text:"Custom styling",level:2,hash:"custom-styling",children:[]},{text:"Props",level:2,hash:"props",children:[]}],title:"Button",headers:{components:[]}}},E={"ButtonSize.tsx":{module:"./ButtonSize.tsx",raw:"import {Button, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ButtonSize() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button size='lg'>Large</Button>\n      <Button size='md'>Medium (Default)</Button>\n      <Button size='sm'>Small</Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button size='lg'>Large</Button>\n<Button size='md'>Medium (Default)</Button>\n<Button size='sm'>Small</Button>",moduleTS:"./ButtonSize.tsx",rawTS:"import {Button, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ButtonSize() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button size='lg'>Large</Button>\n      <Button size='md'>Medium (Default)</Button>\n      <Button size='sm'>Small</Button>\n    </Flexbox>\n  )\n}\n"},"ButtonRippleEffect.tsx":{module:"./ButtonRippleEffect.tsx",raw:"import {Button, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ButtonRippleEffect() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='primary' ripple>\n        Primary\n      </Button>\n      <Button variant='secondary' ripple>\n        Secondary\n      </Button>\n      <Button variant='danger' ripple>\n        Danger\n      </Button>\n      <Button variant='ghost' ripple>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='primary' ripple>\n  Primary\n</Button>\n<Button variant='secondary' ripple>\n  Secondary\n</Button>\n<Button variant='danger' ripple>\n  Danger\n</Button>\n<Button variant='ghost' ripple>\n  Ghost\n</Button>",moduleTS:"./ButtonRippleEffect.tsx",rawTS:"import {Button, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ButtonRippleEffect() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='primary' ripple>\n        Primary\n      </Button>\n      <Button variant='secondary' ripple>\n        Secondary\n      </Button>\n      <Button variant='danger' ripple>\n        Danger\n      </Button>\n      <Button variant='ghost' ripple>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n"},"ButtonVariants.tsx":{module:"./ButtonVariants.tsx",raw:"import {Button, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ButtonVariants() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='primary'>Primary</Button>\n      <Button variant='secondary'>Secondary</Button>\n      <Button variant='danger'>Danger</Button>\n      <Button variant='ghost'>Ghost</Button>\n      <Button isDisabled>Disabled</Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='primary'>Primary</Button>\n<Button variant='secondary'>Secondary</Button>\n<Button variant='danger'>Danger</Button>\n<Button variant='ghost'>Ghost</Button>\n<Button isDisabled>Disabled</Button>",moduleTS:"./ButtonVariants.tsx",rawTS:"import {Button, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ButtonVariants() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='primary'>Primary</Button>\n      <Button variant='secondary'>Secondary</Button>\n      <Button variant='danger'>Danger</Button>\n      <Button variant='ghost'>Ghost</Button>\n      <Button isDisabled>Disabled</Button>\n    </Flexbox>\n  )\n}\n"},"ButtonWithLeftIcon.tsx":{module:"./ButtonWithLeftIcon.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonWithLeftIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' leftIcon={<Icon icon={faThumbsUp} />}>\n        Secondary\n      </Button>\n      <Button variant='danger' leftIcon={<Icon icon={faThumbsUp} />}>\n        Danger\n      </Button>\n      <Button variant='ghost' leftIcon={<Icon icon={faThumbsUp} />}>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='secondary' leftIcon={<Icon icon={faThumbsUp} />}>\n  Secondary\n</Button>\n<Button variant='danger' leftIcon={<Icon icon={faThumbsUp} />}>\n  Danger\n</Button>\n<Button variant='ghost' leftIcon={<Icon icon={faThumbsUp} />}>\n  Ghost\n</Button>",moduleTS:"./ButtonWithLeftIcon.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonWithLeftIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' leftIcon={<Icon icon={faThumbsUp} />}>\n        Secondary\n      </Button>\n      <Button variant='danger' leftIcon={<Icon icon={faThumbsUp} />}>\n        Danger\n      </Button>\n      <Button variant='ghost' leftIcon={<Icon icon={faThumbsUp} />}>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n"},"ButtonWithRightIcon.tsx":{module:"./ButtonWithRightIcon.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonWithRightIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' rightIcon={<Icon icon={faThumbsUp} />}>\n        Secondary\n      </Button>\n      <Button variant='danger' rightIcon={<Icon icon={faThumbsUp} />}>\n        Danger\n      </Button>\n      <Button variant='ghost' rightIcon={<Icon icon={faThumbsUp} />}>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='secondary' rightIcon={<Icon icon={faThumbsUp} />}>\n  Secondary\n</Button>\n<Button variant='danger' rightIcon={<Icon icon={faThumbsUp} />}>\n  Danger\n</Button>\n<Button variant='ghost' rightIcon={<Icon icon={faThumbsUp} />}>\n  Ghost\n</Button>",moduleTS:"./ButtonWithRightIcon.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonWithRightIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' rightIcon={<Icon icon={faThumbsUp} />}>\n        Secondary\n      </Button>\n      <Button variant='danger' rightIcon={<Icon icon={faThumbsUp} />}>\n        Danger\n      </Button>\n      <Button variant='ghost' rightIcon={<Icon icon={faThumbsUp} />}>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n"},"ButtonLeftAndRightIcon.tsx":{module:"./ButtonLeftAndRightIcon.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp, faVirus} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonLeftAndRight() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button\n        variant='secondary'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        leftIcon={<Icon icon={faVirus} />}\n      >\n        Secondary\n      </Button>\n      <Button\n        variant='danger'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        leftIcon={<Icon icon={faVirus} />}\n      >\n        Danger\n      </Button>\n      <Button\n        variant='ghost'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        leftIcon={<Icon icon={faVirus} />}\n      >\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button\n  variant='secondary'\n  rightIcon={<Icon icon={faThumbsUp} />}\n  leftIcon={<Icon icon={faVirus} />}\n>\n  Secondary\n</Button>\n<Button\n  variant='danger'\n  rightIcon={<Icon icon={faThumbsUp} />}\n  leftIcon={<Icon icon={faVirus} />}\n>\n  Danger\n</Button>\n<Button\n  variant='ghost'\n  rightIcon={<Icon icon={faThumbsUp} />}\n  leftIcon={<Icon icon={faVirus} />}\n>\n  Ghost\n</Button>",moduleTS:"./ButtonLeftAndRightIcon.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp, faVirus} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonLeftAndRight() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button\n        variant='secondary'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        leftIcon={<Icon icon={faVirus} />}\n      >\n        Secondary\n      </Button>\n      <Button\n        variant='danger'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        leftIcon={<Icon icon={faVirus} />}\n      >\n        Danger\n      </Button>\n      <Button\n        variant='ghost'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        leftIcon={<Icon icon={faVirus} />}\n      >\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n"},"ButtonIcon.tsx":{module:"./ButtonIcon.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faVirus} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary'>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='danger'>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='ghost'>\n        <Icon icon={faVirus} />\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='secondary'>\n  <Icon icon={faVirus} />\n</Button>\n<Button variant='danger'>\n  <Icon icon={faVirus} />\n</Button>\n<Button variant='ghost'>\n  <Icon icon={faVirus} />\n</Button>",moduleTS:"./ButtonIcon.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faVirus} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary'>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='danger'>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='ghost'>\n        <Icon icon={faVirus} />\n      </Button>\n    </Flexbox>\n  )\n}\n"},"ButtonLoading.tsx":{module:"./ButtonLoading.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonLoading() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' loading>\n        Secondary\n      </Button>\n      <Button variant='danger' loading rightIcon={<Icon icon={faThumbsUp} />}>\n        Danger\n      </Button>\n      <Button variant='ghost' loading rightIcon={<Icon icon={faThumbsUp} />}>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='secondary' loading>\n  Secondary\n</Button>\n<Button variant='danger' loading rightIcon={<Icon icon={faThumbsUp} />}>\n  Danger\n</Button>\n<Button variant='ghost' loading rightIcon={<Icon icon={faThumbsUp} />}>\n  Ghost\n</Button>",moduleTS:"./ButtonLoading.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function ButtonLoading() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' loading>\n        Secondary\n      </Button>\n      <Button variant='danger' loading rightIcon={<Icon icon={faThumbsUp} />}>\n        Danger\n      </Button>\n      <Button variant='ghost' loading rightIcon={<Icon icon={faThumbsUp} />}>\n        Ghost\n      </Button>\n    </Flexbox>\n  )\n}\n"},"SquareButton.tsx":{module:"./SquareButton.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faVirus} from '@fortawesome/free-solid-svg-icons'\n\nexport default function SquareButtons() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' isSquare>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='danger' isSquare>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='ghost' isSquare>\n        <Icon icon={faVirus} />\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button variant='secondary' isSquare>\r\n    <Icon icon={faVirus} />\r\n</Button>\r\n<Button variant='danger' isSquare>\r\n    <Icon icon={faVirus} />\r\n</Button>\r\n<Button variant='ghost' isSquare>\r\n    <Icon icon={faVirus} />\r\n</Button>",moduleTS:"./SquareButton.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faVirus} from '@fortawesome/free-solid-svg-icons'\n\nexport default function SquareButtons() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button variant='secondary' isSquare>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='danger' isSquare>\n        <Icon icon={faVirus} />\n      </Button>\n      <Button variant='ghost' isSquare>\n        <Icon icon={faVirus} />\n      </Button>\n    </Flexbox>\n  )\n}\n"},"CustomStyling.tsx":{module:"./CustomStyling.tsx",raw:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function CustomStyling() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button\n        variant='danger'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        css={{'&:hover': {color: 'grey'}}}\n      >\n        Danger\n      </Button>\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Button\n  variant='danger'\n  rightIcon={<Icon icon={faThumbsUp} />}\n  css={{'&:hover': {color: 'grey'}}}\n>\n  Danger\n</Button>",moduleTS:"./CustomStyling.tsx",rawTS:"import {Button, Flexbox, Icon} from '@comfortdelgro/react-compass'\nimport {faThumbsUp} from '@fortawesome/free-solid-svg-icons'\n\nexport default function CustomStyling() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Button\n        variant='danger'\n        rightIcon={<Icon icon={faThumbsUp} />}\n        css={{'&:hover': {color: 'grey'}}}\n      >\n        Danger\n      </Button>\n    </Flexbox>\n  )\n}\n"}};E.scope={process:{},import:{"@comfortdelgro/react-compass":G,"@fortawesome/free-solid-svg-icons":P}};var M={"./ButtonSize.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[e||(e=(0,W.jsx)(G.Button,{size:"lg",children:"Large"})),r||(r=(0,W.jsx)(G.Button,{size:"md",children:"Medium (Default)"})),a||(a=(0,W.jsx)(G.Button,{size:"sm",children:"Small"}))]})},"./ButtonRippleEffect.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[s||(s=(0,W.jsx)(G.Button,{variant:"primary",ripple:!0,children:"Primary"})),i||(i=(0,W.jsx)(G.Button,{variant:"secondary",ripple:!0,children:"Secondary"})),c||(c=(0,W.jsx)(G.Button,{variant:"danger",ripple:!0,children:"Danger"})),u||(u=(0,W.jsx)(G.Button,{variant:"ghost",ripple:!0,children:"Ghost"}))]})},"./ButtonVariants.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[l||(l=(0,W.jsx)(G.Button,{variant:"primary",children:"Primary"})),d||(d=(0,W.jsx)(G.Button,{variant:"secondary",children:"Secondary"})),f||(f=(0,W.jsx)(G.Button,{variant:"danger",children:"Danger"})),h||(h=(0,W.jsx)(G.Button,{variant:"ghost",children:"Ghost"})),g||(g=(0,W.jsx)(G.Button,{isDisabled:!0,children:"Disabled"}))]})},"./ButtonWithLeftIcon.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[m||(m=(0,W.jsx)(G.Button,{variant:"secondary",leftIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Secondary"})),x||(x=(0,W.jsx)(G.Button,{variant:"danger",leftIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Danger"})),B||(B=(0,W.jsx)(G.Button,{variant:"ghost",leftIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Ghost"}))]})},"./ButtonWithRightIcon.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[p||(p=(0,W.jsx)(G.Button,{variant:"secondary",rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Secondary"})),b||(b=(0,W.jsx)(G.Button,{variant:"danger",rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Danger"})),v||(v=(0,W.jsx)(G.Button,{variant:"ghost",rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Ghost"}))]})},"./ButtonLeftAndRightIcon.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[I||(I=(0,W.jsx)(G.Button,{variant:"secondary",rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),leftIcon:(0,W.jsx)(G.Icon,{icon:P.faVirus}),children:"Secondary"})),y||(y=(0,W.jsx)(G.Button,{variant:"danger",rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),leftIcon:(0,W.jsx)(G.Icon,{icon:P.faVirus}),children:"Danger"})),w||(w=(0,W.jsx)(G.Button,{variant:"ghost",rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),leftIcon:(0,W.jsx)(G.Icon,{icon:P.faVirus}),children:"Ghost"}))]})},"./ButtonIcon.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[j||(j=(0,W.jsx)(G.Button,{variant:"secondary",children:(0,W.jsx)(G.Icon,{icon:P.faVirus})})),S||(S=(0,W.jsx)(G.Button,{variant:"danger",children:(0,W.jsx)(G.Icon,{icon:P.faVirus})})),T||(T=(0,W.jsx)(G.Button,{variant:"ghost",children:(0,W.jsx)(G.Icon,{icon:P.faVirus})}))]})},"./ButtonLoading.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[F||(F=(0,W.jsx)(G.Button,{variant:"secondary",loading:!0,children:"Secondary"})),k||(k=(0,W.jsx)(G.Button,{variant:"danger",loading:!0,rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Danger"})),V||(V=(0,W.jsx)(G.Button,{variant:"ghost",loading:!0,rightIcon:(0,W.jsx)(G.Icon,{icon:P.faThumbsUp}),children:"Ghost"}))]})},"./SquareButton.tsx":function(){return(0,W.jsxs)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[U||(U=(0,W.jsx)(G.Button,{variant:"secondary",isSquare:!0,children:(0,W.jsx)(G.Icon,{icon:P.faVirus})})),C||(C=(0,W.jsx)(G.Button,{variant:"danger",isSquare:!0,children:(0,W.jsx)(G.Icon,{icon:P.faVirus})})),D||(D=(0,W.jsx)(G.Button,{variant:"ghost",isSquare:!0,children:(0,W.jsx)(G.Icon,{icon:P.faVirus})}))]})},"./CustomStyling.tsx":function(){return(0,W.jsx)(G.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:(0,W.jsx)(G.Button,{variant:"danger",rightIcon:z||(z=(0,W.jsx)(G.Icon,{icon:P.faThumbsUp})),css:{"&:hover":{color:"grey"}},children:"Danger"})})}},A={"components/common/ComponentLinkHeader.tsx":H.Z};function N(){return(0,W.jsx)(R.Z,(0,q.Z)({},L))}},23376:function(n,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button",function(){return o(20852)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=23376)}),_N_E=n.O()}]);