(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3678],{99223:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i,d,o=n(15393),r=n(92274),s=n.n(r),l=n(97458);function a(){return(0,l.jsxs)(o.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,l.jsx)(s(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,l.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(s(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:d||(d=(0,l.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},5510:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var i={};n.r(i),n.d(i,{demoComponents:function(){return p},demos:function(){return h},docs:function(){return f},srcComponents:function(){return m}});var d=n(26098),o=n(916),r=n(15393),s=n(52983),l=n.t(s,2),a=n(73804),c=n(97458),u=n(99223),f={en:{description:"Gutter is used to manage spacing and separation between elements in layout design.",location:"/docs/data/components/gutter/gutter.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Gutter</h1><p class="description">Gutter is used to manage spacing and separation between elements in layout design.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Gutter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"GutterBasic.tsx"},'<h2 id="left-side-gutter">Left Side Gutter<a aria-labelledby="left-side-gutter" class="anchor-link" href="#left-side-gutter" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"GutterLeftSide.tsx"},'<h2 id="both-side-gutter">Both Side Gutter<a aria-labelledby="both-side-gutter" class="anchor-link" href="#both-side-gutter" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"GutterBothSide.tsx"},'<h2 id="extend-button">Extend Button<a aria-labelledby="extend-button" class="anchor-link" href="#extend-button" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"GutterExtendButton.tsx"},'<h3 id="props">Props:<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">parentRef*</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">Reference to the parent element</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">side</td>\n<td align="left"><code>&#39;left&#39;</code> | <code>&#39;right&#39;</code></td>\n<td align="left"><code>&#39;right&#39;</code></td>\n<td align="left">The side that you want to resize of it&#39;s parent.</td>\n</tr>\n<tr>\n<td align="left">hasExpandButton</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">To display quick collapse icon button on top of gutter.</td>\n</tr>\n<tr>\n<td align="left">minCollapse</td>\n<td align="left"><code>CSS[&#39;width&#39;] </code></td>\n<td align="left"></td>\n<td align="left">The minimum width when gutter collapse.</td>\n</tr>\n<tr>\n<td align="left">maxExpand</td>\n<td align="left"><code>CSS[&#39;width&#39;] </code></td>\n<td align="left"></td>\n<td align="left">The maximum width when gutter expand.</td>\n</tr>\n<tr>\n<td align="left">hasExpandButton</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">To display quick collapse icon button on top of gutter.</td>\n</tr>\n<tr>\n<td align="left">onChange</td>\n<td align="left"><code>(width: CSS[&#39;width&#39;] ) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Callback event that will return the width for the parent as the gutter resize</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Basic",level:2,hash:"basic",children:[]},{text:"Left Side Gutter",level:2,hash:"left-side-gutter",children:[]},{text:"Both Side Gutter",level:2,hash:"both-side-gutter",children:[]},{text:"Extend Button",level:2,hash:"extend-button",children:[{text:"Props:",level:3,hash:"props"}]}],title:"React Gutter component",headers:{title:"React Gutter component",components:["Gutter"],hooks:[]}}},h={"GutterBasic.tsx":{module:"./GutterBasic.tsx",raw:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\n\nfunction GutterBasic() {\n  const ref = React.useRef<HTMLDivElement>(null)\n  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)\n\n  return (\n    <div style={{display: 'flex', height: '100%', flex: 1}}>\n      <div\n        ref={ref}\n        style={{\n          position: 'relative',\n          width: width,\n        }}\n      >\n        <div style={{overflow: 'hidden'}}>Right side</div>\n        <Gutter parentRef={ref} onChange={setWidth} />\n      </div>\n      <div style={{flex: 1}}>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </div>\n    </div>\n  )\n}\n\nexport default GutterBasic\n",moduleTS:"./GutterBasic.tsx",rawTS:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\n\nfunction GutterBasic() {\n  const ref = React.useRef<HTMLDivElement>(null)\n  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)\n\n  return (\n    <div style={{display: 'flex', height: '100%', flex: 1}}>\n      <div\n        ref={ref}\n        style={{\n          position: 'relative',\n          width: width,\n        }}\n      >\n        <div style={{overflow: 'hidden'}}>Right side</div>\n        <Gutter parentRef={ref} onChange={setWidth} />\n      </div>\n      <div style={{flex: 1}}>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n        tempor incididunt ut labore et dolore magna aliqua.\n      </div>\n    </div>\n  )\n}\n\nexport default GutterBasic\n"},"GutterLeftSide.tsx":{module:"./GutterLeftSide.tsx",raw:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\n\nfunction GutterLeftSide() {\n  const ref = React.useRef<HTMLDivElement>(null)\n  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)\n  return (\n    <>\n      <div style={{display: 'flex', height: '100%', flex: 1}}>\n        <div style={{flex: 1}}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </div>\n        <div\n          ref={ref}\n          style={{\n            position: 'relative',\n            width: width,\n            paddingLeft: '12px',\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Left side</div>\n          <Gutter parentRef={ref} onChange={setWidth} side='left' />\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default GutterLeftSide\n",moduleTS:"./GutterLeftSide.tsx",rawTS:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\n\nfunction GutterLeftSide() {\n  const ref = React.useRef<HTMLDivElement>(null)\n  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)\n  return (\n    <>\n      <div style={{display: 'flex', height: '100%', flex: 1}}>\n        <div style={{flex: 1}}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </div>\n        <div\n          ref={ref}\n          style={{\n            position: 'relative',\n            width: width,\n            paddingLeft: '12px',\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Left side</div>\n          <Gutter parentRef={ref} onChange={setWidth} side='left' />\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default GutterLeftSide\n"},"GutterBothSide.tsx":{module:"./GutterBothSide.tsx",raw:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\nfunction GutterBothSide() {\n  const rightGutterRef = React.useRef<HTMLDivElement>(null)\n  const leftGutterRef = React.useRef<HTMLDivElement>(null)\n  const [rightGutterWidth, setRightGutterWidth] =\n    React.useState<CSSProperties['width']>(undefined)\n  const [leftGutterWidth, setLeftGutterWidth] =\n    React.useState<CSSProperties['width']>(undefined)\n  return (\n    <div>\n      <div style={{display: 'flex', height: '100%', flex: 1}}>\n        <div\n          ref={rightGutterRef}\n          style={{\n            position: 'relative',\n            width: rightGutterWidth,\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Right side</div>\n          <Gutter parentRef={rightGutterRef} onChange={setRightGutterWidth} />\n        </div>\n        <div style={{flex: 1}}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </div>\n        <div\n          ref={leftGutterRef}\n          style={{\n            position: 'relative',\n            width: leftGutterWidth,\n            paddingLeft: '12px',\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Left side</div>\n          <Gutter\n            parentRef={leftGutterRef}\n            onChange={setLeftGutterWidth}\n            side='left'\n          />\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default GutterBothSide\n",moduleTS:"./GutterBothSide.tsx",rawTS:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\nfunction GutterBothSide() {\n  const rightGutterRef = React.useRef<HTMLDivElement>(null)\n  const leftGutterRef = React.useRef<HTMLDivElement>(null)\n  const [rightGutterWidth, setRightGutterWidth] =\n    React.useState<CSSProperties['width']>(undefined)\n  const [leftGutterWidth, setLeftGutterWidth] =\n    React.useState<CSSProperties['width']>(undefined)\n  return (\n    <div>\n      <div style={{display: 'flex', height: '100%', flex: 1}}>\n        <div\n          ref={rightGutterRef}\n          style={{\n            position: 'relative',\n            width: rightGutterWidth,\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Right side</div>\n          <Gutter parentRef={rightGutterRef} onChange={setRightGutterWidth} />\n        </div>\n        <div style={{flex: 1}}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </div>\n        <div\n          ref={leftGutterRef}\n          style={{\n            position: 'relative',\n            width: leftGutterWidth,\n            paddingLeft: '12px',\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Left side</div>\n          <Gutter\n            parentRef={leftGutterRef}\n            onChange={setLeftGutterWidth}\n            side='left'\n          />\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default GutterBothSide\n"},"GutterExtendButton.tsx":{module:"./GutterExtendButton.tsx",raw:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\nfunction GutterExtendButton() {\n  const ref = React.useRef<HTMLDivElement>(null)\n  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)\n  return (\n    <div>\n      <div style={{display: 'flex', height: '100%', flex: 1}}>\n        <div\n          ref={ref}\n          style={{\n            position: 'relative',\n            width: width,\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Right side</div>\n          <Gutter parentRef={ref} onChange={setWidth} hasExpandButton />\n        </div>\n        <div style={{flex: 1}}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default GutterExtendButton\n",moduleTS:"./GutterExtendButton.tsx",rawTS:"import {Gutter} from '@comfortdelgro/react-compass'\nimport React, {CSSProperties} from 'react'\nfunction GutterExtendButton() {\n  const ref = React.useRef<HTMLDivElement>(null)\n  const [width, setWidth] = React.useState<CSSProperties['width']>(undefined)\n  return (\n    <div>\n      <div style={{display: 'flex', height: '100%', flex: 1}}>\n        <div\n          ref={ref}\n          style={{\n            position: 'relative',\n            width: width,\n          }}\n        >\n          <div style={{overflow: 'hidden'}}>Right side</div>\n          <Gutter parentRef={ref} onChange={setWidth} hasExpandButton />\n        </div>\n        <div style={{flex: 1}}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        </div>\n      </div>\n    </div>\n  )\n}\n\nexport default GutterExtendButton\n"}};h.scope={process:{},import:{"@comfortdelgro/react-compass":r,react:l}};var p={"./GutterBasic.tsx":function(){var t=s.useRef(null),e=s.useState(void 0),n=(0,a.Z)(e,2),i=n[0],d=n[1];return(0,c.jsxs)("div",{style:{display:"flex",height:"100%",flex:1},children:[(0,c.jsxs)("div",{ref:t,style:{position:"relative",width:i},children:[(0,c.jsx)("div",{style:{overflow:"hidden"},children:"Right side"}),(0,c.jsx)(r.Gutter,{parentRef:t,onChange:d})]}),(0,c.jsx)("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},"./GutterLeftSide.tsx":function(){var t=s.useRef(null),e=s.useState(void 0),n=(0,a.Z)(e,2),i=n[0],d=n[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{style:{display:"flex",height:"100%",flex:1},children:[(0,c.jsx)("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)("div",{ref:t,style:{position:"relative",width:i,paddingLeft:"12px"},children:[(0,c.jsx)("div",{style:{overflow:"hidden"},children:"Left side"}),(0,c.jsx)(r.Gutter,{parentRef:t,onChange:d,side:"left"})]})]})})},"./GutterBothSide.tsx":function(){var t=s.useRef(null),e=s.useRef(null),n=s.useState(void 0),i=(0,a.Z)(n,2),d=i[0],o=i[1],l=s.useState(void 0),u=(0,a.Z)(l,2),f=u[0],h=u[1];return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{style:{display:"flex",height:"100%",flex:1},children:[(0,c.jsxs)("div",{ref:t,style:{position:"relative",width:d},children:[(0,c.jsx)("div",{style:{overflow:"hidden"},children:"Right side"}),(0,c.jsx)(r.Gutter,{parentRef:t,onChange:o})]}),(0,c.jsx)("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,c.jsxs)("div",{ref:e,style:{position:"relative",width:f,paddingLeft:"12px"},children:[(0,c.jsx)("div",{style:{overflow:"hidden"},children:"Left side"}),(0,c.jsx)(r.Gutter,{parentRef:e,onChange:h,side:"left"})]})]})})},"./GutterExtendButton.tsx":function(){var t=s.useRef(null),e=s.useState(void 0),n=(0,a.Z)(e,2),i=n[0],d=n[1];return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{style:{display:"flex",height:"100%",flex:1},children:[(0,c.jsxs)("div",{ref:t,style:{position:"relative",width:i},children:[(0,c.jsx)("div",{style:{overflow:"hidden"},children:"Right side"}),(0,c.jsx)(r.Gutter,{parentRef:t,onChange:d,hasExpandButton:!0})]}),(0,c.jsx)("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})})}},m={"components/common/ComponentLinkHeader.tsx":u.Z};function g(){return(0,c.jsx)(o.Z,(0,d.Z)({},i))}},15801:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/gutter",function(){return n(5510)}])}},function(t){t.O(0,[4308,6555,47,916,9774,2888,179],function(){return t(t.s=15801)}),_N_E=t.O()}]);