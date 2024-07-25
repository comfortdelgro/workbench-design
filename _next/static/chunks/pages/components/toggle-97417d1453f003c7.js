(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5194],{94848:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var l,o,s,d,i={};t.r(i),t.d(i,{demoComponents:function(){return v},demos:function(){return p},docs:function(){return m},srcComponents:function(){return T}});var a=t(26098),g=t(3072),r=t(15393),c=t(44194),h=t.t(c,2),u=t(73804),f=t(31549),m={description:"Provides the behavior and accessibility implementation for a toggle component. A toggle is similar to a checkbox, but represents on/off values as opposed to selection.",location:"/docs/data/components/toggle/toggle.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Toggle</h1><p class="description">Provides the behavior and accessibility implementation for a toggle component. A toggle is similar to a checkbox, but represents on/off values as opposed to selection.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Toggle<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="controlled">Controlled<a aria-labelledby="controlled" class="anchor-link" href="#controlled" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ToggleControlled.tsx"},'<h2 id="uncontrolled">UnControlled<a aria-labelledby="uncontrolled" class="anchor-link" href="#uncontrolled" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ToggleUnControlled.tsx"},'<h2 id="isdisabled">isDisabled<a aria-labelledby="isdisabled" class="anchor-link" href="#isdisabled" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ToggleIsDisabled.tsx"},'<!-- ## isReadOnly -->\n\n<!-- {{"demo": "ToggleIsReadOnly.tsx"}} -->\n\n<h2 id="sizes">Sizes<a aria-labelledby="sizes" class="anchor-link" href="#sizes" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ToggleSizes.tsx"},'<h2 id="custom-styling">Custom Styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ToggleCustomStyling.tsx"},'<!-- ## Toggle Server (Experimental)\n\n{{"demo": "ToggleServer.tsx"}} -->\n\n<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">defaultSelected</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the Toggle should be selected (uncontrolled).</td>\n</tr>\n<tr>\n<td align="left">isSelected</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the Toggle should be selected (controlled).</td>\n</tr>\n<tr>\n<td align="left">onChange</td>\n<td align="left"><code>(isSelected: boolean) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when the Toggle&#39;s selection state changes.</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">The value of the input element, used when submitting an HTML form. See MDN.</td>\n</tr>\n<tr>\n<td align="left">name</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">The name of the input element, used when submitting an HTML form. See MDN.</td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the input is disabled.</td>\n</tr>\n<tr>\n<td align="left">isReadOnly</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the input can be selected but not changed by the user.</td>\n</tr>\n<tr>\n<td align="left">autoFocus</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the element should receive focus on render.</td>\n</tr>\n<tr>\n<td align="left">onFocus</td>\n<td align="left"><code>(e: FocusEvent) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when the element receives focus.</td>\n</tr>\n<tr>\n<td align="left">onBlur</td>\n<td align="left"><code>(e: FocusEvent) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when the element loses focus.</td>\n</tr>\n<tr>\n<td align="left">onFocusChange</td>\n<td align="left"><code>(isFocused: boolean) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when the element&#39;s focus status changes.</td>\n</tr>\n<tr>\n<td align="left">onKeyDown</td>\n<td align="left"><code>(e: KeyboardEvent) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when a key is pressed.</td>\n</tr>\n<tr>\n<td align="left">onKeyUp</td>\n<td align="left"><code>(e: KeyboardEvent) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when a key is released.</td>\n</tr>\n<tr>\n<td align="left">onFocus</td>\n<td align="left"><code>(e: FocusEvent) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler that is called when the element receives focus.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Controlled",level:2,hash:"controlled",children:[]},{text:"UnControlled",level:2,hash:"uncontrolled",children:[]},{text:"isDisabled",level:2,hash:"isdisabled",children:[]},{text:"Sizes",level:2,hash:"sizes",children:[]},{text:"Custom Styling",level:2,hash:"custom-styling",children:[]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Toggle component",headers:{title:"React Toggle component",components:["Toggle"],hooks:[]}},p={"ToggleControlled.tsx":{module:"./ToggleControlled.tsx",raw:"import {Toggle} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction ToggleControlled() {\n  const [value, setValue] = React.useState<boolean>(true)\n  return (\n    <div>\n      <Toggle size='lg' isSelected={value} onChange={setValue} />\n    </div>\n  )\n}\n\nexport default ToggleControlled\n",jsxPreview:"<Toggle size='lg' isSelected={value} onChange={setValue} />",moduleTS:"./ToggleControlled.tsx",rawTS:"import {Toggle} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction ToggleControlled() {\n  const [value, setValue] = React.useState<boolean>(true)\n  return (\n    <div>\n      <Toggle size='lg' isSelected={value} onChange={setValue} />\n    </div>\n  )\n}\n\nexport default ToggleControlled\n"},"ToggleUnControlled.tsx":{module:"./ToggleUnControlled.tsx",raw:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleUnControlled() {\n  return (\n    <div>\n      <Toggle size='lg' defaultSelected={true} />\n    </div>\n  )\n}\n\nexport default ToggleUnControlled\n",jsxPreview:"<Toggle size='lg' defaultSelected={true} />",moduleTS:"./ToggleUnControlled.tsx",rawTS:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleUnControlled() {\n  return (\n    <div>\n      <Toggle size='lg' defaultSelected={true} />\n    </div>\n  )\n}\n\nexport default ToggleUnControlled\n"},"ToggleIsDisabled.tsx":{module:"./ToggleIsDisabled.tsx",raw:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleIsDisabled() {\n  return (\n    <div style={{display: 'flex', gap: '12px'}}>\n      <Toggle size='lg' isDisabled />\n      <Toggle size='lg' isSelected={true} isDisabled />\n    </div>\n  )\n}\n\nexport default ToggleIsDisabled\n",jsxPreview:"<Toggle size='lg' isDisabled />\n<Toggle size='lg' isSelected={true} isDisabled />",moduleTS:"./ToggleIsDisabled.tsx",rawTS:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleIsDisabled() {\n  return (\n    <div style={{display: 'flex', gap: '12px'}}>\n      <Toggle size='lg' isDisabled />\n      <Toggle size='lg' isSelected={true} isDisabled />\n    </div>\n  )\n}\n\nexport default ToggleIsDisabled\n"},"ToggleSizes.tsx":{module:"./ToggleSizes.tsx",raw:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleSizes() {\n  return (\n    <div>\n      <h3>Small</h3>\n      <Toggle size='sm' />\n      <h3>Large</h3>\n      <Toggle size='lg' isSelected={true} />\n    </div>\n  )\n}\n\nexport default ToggleSizes\n",jsxPreview:"<h3>Small</h3>\n<Toggle size='sm' />\n<h3>Large</h3>\n<Toggle size='lg' isSelected={true} />",moduleTS:"./ToggleSizes.tsx",rawTS:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleSizes() {\n  return (\n    <div>\n      <h3>Small</h3>\n      <Toggle size='sm' />\n      <h3>Large</h3>\n      <Toggle size='lg' isSelected={true} />\n    </div>\n  )\n}\n\nexport default ToggleSizes\n"},"ToggleCustomStyling.tsx":{module:"./ToggleCustomStyling.tsx",raw:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleCustomStyling() {\n  return (\n    <div>\n      <Toggle css={{'&:hover': {background: 'red'}}} />\n    </div>\n  )\n}\n\nexport default ToggleCustomStyling\n",jsxPreview:"<Toggle css={{'&:hover': {background: 'red'}}} />",moduleTS:"./ToggleCustomStyling.tsx",rawTS:"import {Toggle} from '@comfortdelgro/react-compass'\n\nfunction ToggleCustomStyling() {\n  return (\n    <div>\n      <Toggle css={{'&:hover': {background: 'red'}}} />\n    </div>\n  )\n}\n\nexport default ToggleCustomStyling\n"}};p.scope={process:{},import:{"@comfortdelgro/react-compass":r,react:h}};var v={"./ToggleControlled.tsx":function(){var e=c.useState(!0),n=(0,u.Z)(e,2),t=n[0],l=n[1];return(0,f.jsx)("div",{children:(0,f.jsx)(r.Toggle,{size:"lg",isSelected:t,onChange:l})})},"./ToggleUnControlled.tsx":function(){return l||(l=(0,f.jsx)("div",{children:(0,f.jsx)(r.Toggle,{size:"lg",defaultSelected:!0})}))},"./ToggleIsDisabled.tsx":function(){return(0,f.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[o||(o=(0,f.jsx)(r.Toggle,{size:"lg",isDisabled:!0})),s||(s=(0,f.jsx)(r.Toggle,{size:"lg",isSelected:!0,isDisabled:!0}))]})},"./ToggleSizes.tsx":function(){return d||(d=(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Small"}),(0,f.jsx)(r.Toggle,{size:"sm"}),(0,f.jsx)("h3",{children:"Large"}),(0,f.jsx)(r.Toggle,{size:"lg",isSelected:!0})]}))},"./ToggleCustomStyling.tsx":function(){return(0,f.jsx)("div",{children:(0,f.jsx)(r.Toggle,{css:{"&:hover":{background:"red"}}})})}},T={};function x(){return(0,f.jsx)(g.Z,(0,a.Z)({},i))}},64669:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toggle",function(){return t(94848)}])}},function(e){e.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return e(e.s=64669)}),_N_E=e.O()}]);