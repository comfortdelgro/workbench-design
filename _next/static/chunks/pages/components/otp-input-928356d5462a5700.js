(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8025],{99223:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var o,l,s=e(15393),a=e(92274),r=e.n(a),p=e(97458);function i(){return(0,p.jsxs)(s.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,p.jsx)(r(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,p.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,p.jsx)(r(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:l||(l=(0,p.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},4486:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return T}});var o={};e.r(o),e.d(o,{demoComponents:function(){return h},demos:function(){return g},docs:function(){return d},srcComponents:function(){return f}});var l=e(26098),s=e(916),a=e(15393),r=e(52983),p=e.t(r,2),i=e(73804),c=e(97458),u=e(99223),d={en:{description:"OTP Input component for inputting One-Time Passwords.",location:"/docs/data/components/otp-input/otp-input.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>OTP Input</h1><p class="description">OTP Input component for inputting One-Time Passwords.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>OTPInput<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="examples">Examples<a aria-labelledby="examples" class="anchor-link" href="#examples" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"OTPInput.tsx"},'<h2 id="mobile-view">Mobile view<a aria-labelledby="mobile-view" class="anchor-link" href="#mobile-view" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"OTPInputMobile.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">length</td>\n<td align="left"><code>number</code></td>\n<td align="left">6</td>\n<td align="left">The length of the OTP input</td>\n</tr>\n<tr>\n<td align="left">otp</td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left">Controlled value of OTP</td>\n</tr>\n<tr>\n<td align="left">isNumberInput</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the input should be numbers</td>\n</tr>\n<tr>\n<td align="left">autoFocus</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether to autofocus the first input</td>\n</tr>\n<tr>\n<td align="left">onChangeOTP*</td>\n<td align="left"><code>(otp: string) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Callback when the OTP value changes</td>\n</tr>\n<tr>\n<td align="left">disabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the input should be disabled</td>\n</tr>\n<tr>\n<td align="left">isErrored</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">State when OTP is error</td>\n</tr>\n<tr>\n<td align="left">isMobile</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Toggle Mobile UI</td>\n</tr>\n</tbody></table>\n<p>*: Required.</p>\n'],toc:[{text:"Examples",level:2,hash:"examples",children:[]},{text:"Mobile view",level:2,hash:"mobile-view",children:[]},{text:"Props",level:2,hash:"props",children:[]}],title:"React OTP Input component",headers:{title:"React OTP Input component",components:["OTPInput"],hooks:[]}}},g={"OTPInput.tsx":{module:"./OTPInput.tsx",raw:"import {Column, OTPInput, Typography} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction Default() {\n  const [value, setValue] = React.useState('12345678')\n\n  return (\n    <Column>\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        String OTP\n      </Typography.Label>\n      <OTPInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('String OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Number OTP\n      </Typography.Label>\n      <OTPInput\n        isNumberInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        4 Numbers\n      </Typography.Label>\n      <OTPInput\n        length={4}\n        isNumberInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Controlled\n      </Typography.Label>\n      <OTPInput otp={value} onChangeOTP={(otp) => setValue(otp)} />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Error\n      </Typography.Label>\n      <OTPInput\n        isErrored\n        isNumberInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Disabled\n      </Typography.Label>\n      <OTPInput\n        autoFocus\n        disabled\n        onChangeOTP={(otp) => console.log('String OTP: ', otp)}\n      />\n    </Column>\n  )\n}\n\nexport default Default\n",jsxPreview:"// Default: String OTP\r\n<OTPInput onChangeOTP={(otp) => console.log('String OTP: ', otp)} />\r\n\r\n// Number OTP\r\n<OTPInput isNumberInput />\r\n    \r\n// 4 Inputs\r\n<OTPInput length={4} />\r\n\r\n// Controlled\r\n<OTPInput otp={value} onChangeOTP={(otp) => setValue(otp)} />\r\n\r\n// Disabled state\r\n<OTPInput disabled />",moduleTS:"./OTPInput.tsx",rawTS:"import {Column, OTPInput, Typography} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction Default() {\n  const [value, setValue] = React.useState('12345678')\n\n  return (\n    <Column>\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        String OTP\n      </Typography.Label>\n      <OTPInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('String OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Number OTP\n      </Typography.Label>\n      <OTPInput\n        isNumberInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        4 Numbers\n      </Typography.Label>\n      <OTPInput\n        length={4}\n        isNumberInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Controlled\n      </Typography.Label>\n      <OTPInput otp={value} onChangeOTP={(otp) => setValue(otp)} />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Error\n      </Typography.Label>\n      <OTPInput\n        isErrored\n        isNumberInput\n        autoFocus\n        onChangeOTP={(otp) => console.log('Number OTP: ', otp)}\n      />\n\n      <Typography.Label css={{justifyContent: 'center', display: 'flex'}}>\n        Disabled\n      </Typography.Label>\n      <OTPInput\n        autoFocus\n        disabled\n        onChangeOTP={(otp) => console.log('String OTP: ', otp)}\n      />\n    </Column>\n  )\n}\n\nexport default Default\n"},"OTPInputMobile.tsx":{module:"./OTPInputMobile.tsx",raw:"import {OTPInput} from '@comfortdelgro/react-compass'\n\nexport default function OTPInputMobileView() {\n  return (\n    <OTPInput\n      autoFocus\n      length={4}\n      isNumberInput\n      isMobile\n      onChangeOTP={(otp) => console.log('OTP: ', otp)}\n    />\n  )\n}\n",jsxPreview:"<OTPInput isMobile />",moduleTS:"./OTPInputMobile.tsx",rawTS:"import {OTPInput} from '@comfortdelgro/react-compass'\n\nexport default function OTPInputMobileView() {\n  return (\n    <OTPInput\n      autoFocus\n      length={4}\n      isNumberInput\n      isMobile\n      onChangeOTP={(otp) => console.log('OTP: ', otp)}\n    />\n  )\n}\n"}};g.scope={process:{},import:{"@comfortdelgro/react-compass":a,react:p}};var h={"./OTPInput.tsx":function(){var n=r.useState("12345678"),t=(0,i.Z)(n,2),e=t[0],o=t[1];return(0,c.jsxs)(a.Column,{children:[(0,c.jsx)(a.Typography.Label,{css:{justifyContent:"center",display:"flex"},children:"String OTP"}),(0,c.jsx)(a.OTPInput,{autoFocus:!0,onChangeOTP:function(n){return console.log("String OTP: ",n)}}),(0,c.jsx)(a.Typography.Label,{css:{justifyContent:"center",display:"flex"},children:"Number OTP"}),(0,c.jsx)(a.OTPInput,{isNumberInput:!0,autoFocus:!0,onChangeOTP:function(n){return console.log("Number OTP: ",n)}}),(0,c.jsx)(a.Typography.Label,{css:{justifyContent:"center",display:"flex"},children:"4 Numbers"}),(0,c.jsx)(a.OTPInput,{length:4,isNumberInput:!0,autoFocus:!0,onChangeOTP:function(n){return console.log("Number OTP: ",n)}}),(0,c.jsx)(a.Typography.Label,{css:{justifyContent:"center",display:"flex"},children:"Controlled"}),(0,c.jsx)(a.OTPInput,{otp:e,onChangeOTP:function(n){return o(n)}}),(0,c.jsx)(a.Typography.Label,{css:{justifyContent:"center",display:"flex"},children:"Error"}),(0,c.jsx)(a.OTPInput,{isErrored:!0,isNumberInput:!0,autoFocus:!0,onChangeOTP:function(n){return console.log("Number OTP: ",n)}}),(0,c.jsx)(a.Typography.Label,{css:{justifyContent:"center",display:"flex"},children:"Disabled"}),(0,c.jsx)(a.OTPInput,{autoFocus:!0,disabled:!0,onChangeOTP:function(n){return console.log("String OTP: ",n)}})]})},"./OTPInputMobile.tsx":function(){return(0,c.jsx)(a.OTPInput,{autoFocus:!0,length:4,isNumberInput:!0,isMobile:!0,onChangeOTP:function(n){return console.log("OTP: ",n)}})}},f={"components/common/ComponentLinkHeader.tsx":u.Z};function T(){return(0,c.jsx)(s.Z,(0,l.Z)({},o))}},79360:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/otp-input",function(){return e(4486)}])}},function(n){n.O(0,[4308,6555,47,916,9774,2888,179],function(){return n(n.s=79360)}),_N_E=n.O()}]);