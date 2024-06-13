(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8114],{93279:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var t,i,r=o(15393),c=o(16371),a=o.n(c),l=o(31549);function s(){return(0,l.jsxs)(r.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,l.jsx)(a(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,l.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(a(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,l.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},86154:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return P}});var t,i,r,c,a,l,s,d,p,u,g,m,f,h={};o.r(h),o.d(h,{demoComponents:function(){return H},demos:function(){return E},docs:function(){return D},srcComponents:function(){return q}});var y=o(26098),S=o(43866),b=o(15393),v=o(44194),w=o.t(v,2),x=o(42096),C=o(99902),A=o(31549),k=["#475569","#ea580c","#059669","var(--cdg-color-cdgBlue)","#0891b2","#7c3aed","#e11d48"],T=function(e){return(0,A.jsx)("div",(0,y.Z)((0,y.Z)({},e),{},{style:(0,y.Z)((0,y.Z)({},e.styles),{},{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"}),children:e.children}))},B=function(e){return(0,A.jsx)("button",(0,y.Z)((0,y.Z)({},e),{},{type:"button",style:(0,y.Z)((0,y.Z)({},e.styles),{},{height:"2.5rem",width:"5rem",fontWeight:"600",color:"#FFF",fontSize:"0.75rem",border:"none",borderRadius:"4px",opacity:.8,transition:"opacity .2s ease",cursor:"pointer"}),children:e.children}))},j=o(93279),D={en:{description:"A component that requires user to swipe to confirm an action. Use for important actions, such as purchase order, privacy setting changes, delete something, etc.",location:"/docs/data/components/slide-action/slide-action.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Slide Action | Swiper</h1><p class="description">A component that requires user to swipe to confirm an action. Use for important actions, such as purchase order, privacy setting changes, delete something, etc.\n</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>SlideAction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="usage">Usage<a aria-labelledby="usage" class="anchor-link" href="#usage" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideAction.tsx"},'<h3 id="effects">Effects<a aria-labelledby="effects" class="anchor-link" href="#effects" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideEffect.tsx"},'<h3 id="icon">Icon<a aria-labelledby="icon" class="anchor-link" href="#icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideActionIcon.tsx"},'<h3 id="color">Color<a aria-labelledby="color" class="anchor-link" href="#color" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideColorful.tsx"},'<h3 id="compact">Compact<a aria-labelledby="compact" class="anchor-link" href="#compact" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideCompact.tsx"},'<h3 id="allowswipeafterend">allowSwipeAfterEnd<a aria-labelledby="allowswipeafterend" class="anchor-link" href="#allowswipeafterend" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>Avoid enabling this flag as much as possible. If you wanna reset the component state, please use <code>reset()</code> function that shipped with <code>onSwipeEnd</code> instead.</p>\n<h4>⚠️ Accessibility considerations: Act unintentionally</h4><p>Since an action is a successful action when users dragged/swiped this component all the way to the end.</p>\n<p>On that state, if users tap &amp; release without swiping, this component will assume that it is an successful or confirmatory action. As a result, <code>onSwipeEnd</code> will be triggered.</p>\n',{demo:"SlideActionBehavior.tsx"},'<h2 id="component-props">Component Props<a aria-labelledby="component-props" class="anchor-link" href="#component-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>children</code></td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">Will be consider as a label</td>\n</tr>\n<tr>\n<td align="left"><code>css</code></td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td align="left"><code>icon</code></td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">Double arrow right</td>\n<td align="left">Icon for the swiper</td>\n</tr>\n<tr>\n<td align="left"><code>color</code></td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>var(--cdg-color-dangerShades)</code> - <code>#E31617</code></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>label</code></td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>&#39;Slide&#39;</code></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>labelType</code></td>\n<td align="left"><code>&#39;default&#39;</code> | <code>&#39;slide&#39;</code></td>\n<td align="left"><code>&#39;default&#39;</code></td>\n<td align="left">Label effect</td>\n</tr>\n<tr>\n<td align="left"><code>slideColor</code></td>\n<td align="left"><code>&#39;mono&#39;</code> | <code>&#39;gradient&#39;</code></td>\n<td align="left"><code>&#39;mono&#39;</code></td>\n<td align="left">Color type of the background that left behind by the slide button</td>\n</tr>\n<tr>\n<td align="left"><code>slideType</code></td>\n<td align="left"><code>&#39;static&#39;</code> | <code>&#39;slide&#39;</code></td>\n<td align="left"><code>&#39;slide&#39;</code></td>\n<td align="left">The left behind background color&#39;s effect</td>\n</tr>\n<tr>\n<td align="left"><code>onSwipeEnd</code></td>\n<td align="left"><code>(reset: () =&gt; void) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Trigger when users swiped all the way to the end.<br/><small>Call the <code>reset()</code> function to reset the component status.</small></td>\n</tr>\n<tr>\n<td align="left"><code>onChange</code></td>\n<td align="left"><code>(isSuccess: boolean) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Trigger when component&#39;s status changes</td>\n</tr>\n<tr>\n<td align="left"><code>compact</code></td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Compact size</td>\n</tr>\n<tr>\n<td align="left"><code>allowSwipeAfterEnd</code></td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Read the section <strong>allowSwipeAfterEnd</strong> above for detail</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Usage",level:2,hash:"usage",children:[{text:"Basic",level:3,hash:"basic"},{text:"Effects",level:3,hash:"effects"},{text:"Icon",level:3,hash:"icon"},{text:"Color",level:3,hash:"color"},{text:"Compact",level:3,hash:"compact"},{text:"allowSwipeAfterEnd",level:3,hash:"allowswipeafterend"}]},{text:"Component Props",level:2,hash:"component-props",children:[]}],title:"React Slide Action component",headers:{title:"React Slide Action component",components:["Slide Action"],hooks:[]}}},E={"SlideAction.tsx":{module:"./SlideAction.tsx",raw:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionDocs() {\n  const [slideStatus, setSlideStatus] = useState(false)\n\n  return (\n    <Column>\n      <Typography.Body variant='body2'>\n        When users swiped all the way to the end, we can call it a successful or\n        confirmatory action.\n      </Typography.Body>\n      <Typography.Body variant='body3' css={{color: 'var(--cdg-color-grayShades60)'}}>\n        The component below will be reset 1000ms after that.\n      </Typography.Body>\n\n      <SlideAction\n        label='Swipe to purchase'\n        onChange={(isSuccess) => setSlideStatus(isSuccess)}\n        onSwipeEnd={(reset) => {\n          console.log('success')\n          // do sth when users swiped to the end\n          setTimeout(() => {\n            reset()\n          }, 1000)\n        }}\n      />\n\n      <Typography.Body variant='body3'>\n        Status: <strong>{`${slideStatus}`}</strong>\n      </Typography.Body>\n    </Column>\n  )\n}\n",jsxPreview:"import {SlideAction} from '@comfortdelgro/react-compass'\n\n<SlideAction\n  label='Swipe to purchase'\n  onSwipeEnd={async (reset) => {\n    await purchaseOrder()\n    reset()\n  }}\n/>\n",moduleTS:"./SlideAction.tsx",rawTS:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionDocs() {\n  const [slideStatus, setSlideStatus] = useState(false)\n\n  return (\n    <Column>\n      <Typography.Body variant='body2'>\n        When users swiped all the way to the end, we can call it a successful or\n        confirmatory action.\n      </Typography.Body>\n      <Typography.Body variant='body3' css={{color: 'var(--cdg-color-grayShades60)'}}>\n        The component below will be reset 1000ms after that.\n      </Typography.Body>\n\n      <SlideAction\n        label='Swipe to purchase'\n        onChange={(isSuccess) => setSlideStatus(isSuccess)}\n        onSwipeEnd={(reset) => {\n          console.log('success')\n          // do sth when users swiped to the end\n          setTimeout(() => {\n            reset()\n          }, 1000)\n        }}\n      />\n\n      <Typography.Body variant='body3'>\n        Status: <strong>{`${slideStatus}`}</strong>\n      </Typography.Body>\n    </Column>\n  )\n}\n"},"SlideEffect.tsx":{module:"./SlideEffect.tsx",raw:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\n\nexport default function SliderEffectDocs() {\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Slide effect</Typography.Header>\n      <SlideAction color='#475569'>Default: Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: 'var(--cdg-spacing-4)'}} color='#475569' slideType='static'>\n        Static fade-in background\n      </SlideAction>\n\n      <Typography.Header variant='header4'>Label effect</Typography.Header>\n      <SlideAction color='#475569' labelType='slide'>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,\n        temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a\n        soluta, veniam ut id porro adipisci molestias cumque perspiciatis\n        asperiores facilis voluptatem.\n      </SlideAction>\n    </Column>\n  )\n}\n",jsxPreview:"<SlideAction />\n<SlideAction slideType='static' />\n<SlideAction labelType='slide' />",moduleTS:"./SlideEffect.tsx",rawTS:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\n\nexport default function SliderEffectDocs() {\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Slide effect</Typography.Header>\n      <SlideAction color='#475569'>Default: Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: 'var(--cdg-spacing-4)'}} color='#475569' slideType='static'>\n        Static fade-in background\n      </SlideAction>\n\n      <Typography.Header variant='header4'>Label effect</Typography.Header>\n      <SlideAction color='#475569' labelType='slide'>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,\n        temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a\n        soluta, veniam ut id porro adipisci molestias cumque perspiciatis\n        asperiores facilis voluptatem.\n      </SlideAction>\n    </Column>\n  )\n}\n"},"SlideActionIcon.tsx":{module:"./SlideActionIcon.tsx",raw:"import {SlideAction} from '@comfortdelgro/react-compass'\nimport {faPowerOff} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nexport default function SliderActionIconDocs() {\n  return (\n    <SlideAction\n      css={{\n        border: 'none',\n        backgroundColor: 'rgba(61, 127, 118, 0.5)',\n      }}\n      color='#fff'\n      icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}\n      labelType='slide'\n    >\n      Slide to power off\n    </SlideAction>\n  )\n}\n",jsxPreview:"<SlideAction\n  icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}\n/>",moduleTS:"./SlideActionIcon.tsx",rawTS:"import {SlideAction} from '@comfortdelgro/react-compass'\nimport {faPowerOff} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nexport default function SliderActionIconDocs() {\n  return (\n    <SlideAction\n      css={{\n        border: 'none',\n        backgroundColor: 'rgba(61, 127, 118, 0.5)',\n      }}\n      color='#fff'\n      icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}\n      labelType='slide'\n    >\n      Slide to power off\n    </SlideAction>\n  )\n}\n"},"SlideColorful.tsx":{module:"./SlideColorful.tsx",raw:"import {\n  Column,\n  Divider,\n  SlideAction,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {ReactNode, useState} from 'react'\n\n// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose\nconst slideBgColors = [\n  '#475569',\n  '#ea580c',\n  '#059669',\n  'var(--cdg-color-cdgBlue)',\n  '#0891b2',\n  '#7c3aed',\n  '#e11d48',\n]\n\nexport default function SliderColorfulDocs() {\n  const [colorBg, setColorBg] = useState(slideBgColors[0] || 'var(--cdg-color-cdgBlue)')\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Default color</Typography.Header>\n      <code>var(--cdg-color-dangerShades) - #E31617</code>\n      <SlideAction css={{marginBlock: 'var(--cdg-spacing-4)'}}>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim\n        sint labore nesciunt\n      </SlideAction>\n\n      <Divider />\n\n      <Typography.Header variant='header4'>More colors \uD83C\uDFA8</Typography.Header>\n      <StyledColorPickerWrapper styles={{marginBottom: 'var(--cdg-spacing-4)'}}>\n        {slideBgColors.map((color) => (\n          <StyledColorPicker\n            key={color}\n            title={color}\n            styles={{backgroundColor: color}}\n            onClick={() => setColorBg(color)}\n          />\n        ))}\n\n        <StyledColorPicker\n          styles={{\n            background:\n              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',\n          }}\n          onClick={() =>\n            setColorBg(`#${Math.floor(Math.random() * 16777215).toString(16)}`)\n          }\n        >\n          Random\n        </StyledColorPicker>\n      </StyledColorPickerWrapper>\n\n      <SlideAction color={colorBg}>Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: 'var(--cdg-spacing-4)'}} color={colorBg} slideType='static'>\n        Fadein background\n      </SlideAction>\n\n      <SlideAction labelType='slide' color={colorBg}>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non\n        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur\n        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa\n        deleniti!\n      </SlideAction>\n\n      <Divider css={{marginBlock: 'var(--cdg-spacing-4)'}} />\n\n      <Typography.Header variant='header4'>\n        Default gradient background\n      </Typography.Header>\n      <SlideAction color='#e11d48' slideColor='gradient'>\n        Slide to see bg color change\n      </SlideAction>\n    </Column>\n  )\n}\n\nconst StyledColorPickerWrapper = (props: {\n  children: ReactNode\n  styles: object\n}) => (\n  <div\n    {...props}\n    style={{\n      ...props.styles,\n      display: 'flex',\n      alignItems: 'center',\n      flexWrap: 'wrap',\n      gap: '0.5rem',\n    }}\n  >\n    {props.children}\n  </div>\n)\n\nconst StyledColorPicker = (props: {\n  children?: ReactNode\n  title?: string\n  styles: object\n  onClick: () => void\n}) => (\n  <button\n    {...props}\n    type='button'\n    style={{\n      ...props.styles,\n      height: '2.5rem',\n      width: '5rem',\n      fontWeight: '600',\n      color: '#FFF',\n      fontSize: '0.75rem',\n\n      border: 'none',\n      borderRadius: '4px',\n      opacity: 0.8,\n      transition: 'opacity .2s ease',\n      cursor: 'pointer',\n\n      // '&:hover': {\n      //   opacity: 1,\n      // },\n    }}\n  >\n    {props.children}\n  </button>\n)\n",jsxPreview:"<SlideAction color='var(--cdg-color-cdgBlue)' />\n",moduleTS:"./SlideColorful.tsx",rawTS:"import {\n  Column,\n  Divider,\n  SlideAction,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {ReactNode, useState} from 'react'\n\n// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose\nconst slideBgColors = [\n  '#475569',\n  '#ea580c',\n  '#059669',\n  'var(--cdg-color-cdgBlue)',\n  '#0891b2',\n  '#7c3aed',\n  '#e11d48',\n]\n\nexport default function SliderColorfulDocs() {\n  const [colorBg, setColorBg] = useState(slideBgColors[0] || 'var(--cdg-color-cdgBlue)')\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Default color</Typography.Header>\n      <code>var(--cdg-color-dangerShades) - #E31617</code>\n      <SlideAction css={{marginBlock: 'var(--cdg-spacing-4)'}}>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim\n        sint labore nesciunt\n      </SlideAction>\n\n      <Divider />\n\n      <Typography.Header variant='header4'>More colors \uD83C\uDFA8</Typography.Header>\n      <StyledColorPickerWrapper styles={{marginBottom: 'var(--cdg-spacing-4)'}}>\n        {slideBgColors.map((color) => (\n          <StyledColorPicker\n            key={color}\n            title={color}\n            styles={{backgroundColor: color}}\n            onClick={() => setColorBg(color)}\n          />\n        ))}\n\n        <StyledColorPicker\n          styles={{\n            background:\n              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',\n          }}\n          onClick={() =>\n            setColorBg(`#${Math.floor(Math.random() * 16777215).toString(16)}`)\n          }\n        >\n          Random\n        </StyledColorPicker>\n      </StyledColorPickerWrapper>\n\n      <SlideAction color={colorBg}>Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: 'var(--cdg-spacing-4)'}} color={colorBg} slideType='static'>\n        Fadein background\n      </SlideAction>\n\n      <SlideAction labelType='slide' color={colorBg}>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non\n        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur\n        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa\n        deleniti!\n      </SlideAction>\n\n      <Divider css={{marginBlock: 'var(--cdg-spacing-4)'}} />\n\n      <Typography.Header variant='header4'>\n        Default gradient background\n      </Typography.Header>\n      <SlideAction color='#e11d48' slideColor='gradient'>\n        Slide to see bg color change\n      </SlideAction>\n    </Column>\n  )\n}\n\nconst StyledColorPickerWrapper = (props: {\n  children: ReactNode\n  styles: object\n}) => (\n  <div\n    {...props}\n    style={{\n      ...props.styles,\n      display: 'flex',\n      alignItems: 'center',\n      flexWrap: 'wrap',\n      gap: '0.5rem',\n    }}\n  >\n    {props.children}\n  </div>\n)\n\nconst StyledColorPicker = (props: {\n  children?: ReactNode\n  title?: string\n  styles: object\n  onClick: () => void\n}) => (\n  <button\n    {...props}\n    type='button'\n    style={{\n      ...props.styles,\n      height: '2.5rem',\n      width: '5rem',\n      fontWeight: '600',\n      color: '#FFF',\n      fontSize: '0.75rem',\n\n      border: 'none',\n      borderRadius: '4px',\n      opacity: 0.8,\n      transition: 'opacity .2s ease',\n      cursor: 'pointer',\n\n      // '&:hover': {\n      //   opacity: 1,\n      // },\n    }}\n  >\n    {props.children}\n  </button>\n)\n"},"SlideCompact.tsx":{module:"./SlideCompact.tsx",raw:"import {Column, SlideAction} from '@comfortdelgro/react-compass'\n\nexport default function SliderCompactDocs() {\n  return (\n    <Column>\n      <SlideAction compact>\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab,\n        dicta consequatur harum iusto cumque, sunt quia dolor, adipisci commodi\n        repellendus perferendis iste. Soluta placeat dolores reiciendis\n        distinctio temporibus nisi!\n      </SlideAction>\n    </Column>\n  )\n}\n",jsxPreview:"<SlideAction compact />\n",moduleTS:"./SlideCompact.tsx",rawTS:"import {Column, SlideAction} from '@comfortdelgro/react-compass'\n\nexport default function SliderCompactDocs() {\n  return (\n    <Column>\n      <SlideAction compact>\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab,\n        dicta consequatur harum iusto cumque, sunt quia dolor, adipisci commodi\n        repellendus perferendis iste. Soluta placeat dolores reiciendis\n        distinctio temporibus nisi!\n      </SlideAction>\n    </Column>\n  )\n}\n"},"SlideActionBehavior.tsx":{module:"./SlideActionBehavior.tsx",raw:"import {SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionBehaviorDocs() {\n  const [countSuccess, setCountSuccess] = useState(0)\n\n  return (\n    <>\n      <Typography.Body variant='body3' css={{marginBottom: 'var(--cdg-spacing-4)'}}>\n        Successful / confirmatory action count:{' '}\n        <strong>{`${countSuccess}`}</strong>\n      </Typography.Body>\n\n      <SlideAction\n        color='#475569'\n        allowSwipeAfterEnd\n        onSwipeEnd={() => setCountSuccess((currState) => currState + 1)}\n      >\n        Can swipe after success\n      </SlideAction>\n    </>\n  )\n}\n",jsxPreview:"<SlideAction allowSwipeAfterEnd />\n",moduleTS:"./SlideActionBehavior.tsx",rawTS:"import {SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionBehaviorDocs() {\n  const [countSuccess, setCountSuccess] = useState(0)\n\n  return (\n    <>\n      <Typography.Body variant='body3' css={{marginBottom: 'var(--cdg-spacing-4)'}}>\n        Successful / confirmatory action count:{' '}\n        <strong>{`${countSuccess}`}</strong>\n      </Typography.Body>\n\n      <SlideAction\n        color='#475569'\n        allowSwipeAfterEnd\n        onSwipeEnd={() => setCountSuccess((currState) => currState + 1)}\n      >\n        Can swipe after success\n      </SlideAction>\n    </>\n  )\n}\n"}};E.scope={process:{},import:{"@comfortdelgro/react-compass":b,react:w,"@fortawesome/free-solid-svg-icons":x,"@fortawesome/react-fontawesome":C}};var H={"./SlideAction.tsx":function(){var e=(0,v.useState)(!1),n=e[0],o=e[1];return(0,A.jsxs)(b.Column,{children:[t||(t=(0,A.jsx)(b.Typography.Body,{variant:"body2",children:"When users swiped all the way to the end, we can call it a successful or confirmatory action."})),(0,A.jsx)(b.Typography.Body,{variant:"body3",css:{color:"var(--cdg-color-grayShades60)"},children:"The component below will be reset 1000ms after that."}),(0,A.jsx)(b.SlideAction,{label:"Swipe to purchase",onChange:function(e){return o(e)},onSwipeEnd:function(e){console.log("success"),setTimeout(function(){e()},1e3)}}),(0,A.jsxs)(b.Typography.Body,{variant:"body3",children:["Status: ",(0,A.jsx)("strong",{children:"".concat(n)})]})]})},"./SlideEffect.tsx":function(){return(0,A.jsxs)(b.Column,{children:[i||(i=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Slide effect"})),r||(r=(0,A.jsx)(b.SlideAction,{color:"#475569",children:"Default: Slide background"})),(0,A.jsx)(b.SlideAction,{css:{marginBlock:"var(--cdg-spacing-4)"},color:"#475569",slideType:"static",children:"Static fade-in background"}),c||(c=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Label effect"})),a||(a=(0,A.jsx)(b.SlideAction,{color:"#475569",labelType:"slide",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a soluta, veniam ut id porro adipisci molestias cumque perspiciatis asperiores facilis voluptatem."}))]})},"./SlideActionIcon.tsx":function(){return(0,A.jsx)(b.SlideAction,{css:{border:"none",backgroundColor:"rgba(61, 127, 118, 0.5)"},color:"#fff",icon:l||(l=(0,A.jsx)(C.FontAwesomeIcon,{icon:x.faPowerOff,color:"red",size:"lg"})),labelType:"slide",children:"Slide to power off"})},"./SlideColorful.tsx":function(){var e=(0,v.useState)(k[0]||"var(--cdg-color-cdgBlue)"),n=e[0],o=e[1];return(0,A.jsxs)(b.Column,{children:[s||(s=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Default color"})),d||(d=(0,A.jsx)("code",{children:"var(--cdg-color-dangerShades) - #E31617"})),(0,A.jsx)(b.SlideAction,{css:{marginBlock:"var(--cdg-spacing-4)"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt"}),p||(p=(0,A.jsx)(b.Divider,{})),u||(u=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"More colors \uD83C\uDFA8"})),(0,A.jsxs)(T,{styles:{marginBottom:"var(--cdg-spacing-4)"},children:[k.map(function(e){return(0,A.jsx)(B,{title:e,styles:{backgroundColor:e},onClick:function(){return o(e)}},e)}),(0,A.jsx)(B,{styles:{background:"linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)"},onClick:function(){return o("#".concat(Math.floor(16777215*Math.random()).toString(16)))},children:"Random"})]}),(0,A.jsx)(b.SlideAction,{color:n,children:"Slide background"}),(0,A.jsx)(b.SlideAction,{css:{marginBlock:"var(--cdg-spacing-4)"},color:n,slideType:"static",children:"Fadein background"}),(0,A.jsx)(b.SlideAction,{labelType:"slide",color:n,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa deleniti!"}),(0,A.jsx)(b.Divider,{css:{marginBlock:"var(--cdg-spacing-4)"}}),g||(g=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Default gradient background"})),m||(m=(0,A.jsx)(b.SlideAction,{color:"#e11d48",slideColor:"gradient",children:"Slide to see bg color change"}))]})},"./SlideCompact.tsx":function(){return f||(f=(0,A.jsx)(b.Column,{children:(0,A.jsx)(b.SlideAction,{compact:!0,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab, dicta consequatur harum iusto cumque, sunt quia dolor, adipisci commodi repellendus perferendis iste. Soluta placeat dolores reiciendis distinctio temporibus nisi!"})}))},"./SlideActionBehavior.tsx":function(){var e=(0,v.useState)(0),n=e[0],o=e[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b.Typography.Body,{variant:"body3",css:{marginBottom:"var(--cdg-spacing-4)"},children:["Successful / confirmatory action count:"," ",(0,A.jsx)("strong",{children:"".concat(n)})]}),(0,A.jsx)(b.SlideAction,{color:"#475569",allowSwipeAfterEnd:!0,onSwipeEnd:function(){return o(function(e){return e+1})},children:"Can swipe after success"})]})}},q={"components/common/ComponentLinkHeader.tsx":j.Z};function P(){return(0,A.jsx)(S.Z,(0,y.Z)({},h))}},12137:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slide-action",function(){return o(86154)}])}},function(e){e.O(0,[4308,9813,5675,9902,3866,9774,2888,179],function(){return e(e.s=12137)}),_N_E=e.O()}]);