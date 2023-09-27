(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6930],{2708:function(n,e,t){"use strict";t.d(e,{Z:function(){return c}});var o,a,r=t(38443),l=t(2158),i=t.n(l),s=t(97458);function c(){return(0,s.jsxs)(r.Flexbox,{css:{marginBottom:"$4"},children:[(0,s.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,s.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,s.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,s.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},38218:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var o,a,r,l,i,s,c,d,h={};t.r(h),t.d(h,{demoComponents:function(){return k},demos:function(){return y},docs:function(){return u},srcComponents:function(){return x}});var g=t(88867),p=t(7703),m=t(38443),f=t(97458),v=t(2708),u={en:{description:"Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.",location:"/docs/data/components/skeleton/skeleton.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Skeleton</h1><p class="description">Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Skeleton<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Skeleton <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/skeleton\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="variant">Variant<a aria-labelledby="variant" class="anchor-link" href="#variant" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SkeletonVariants.tsx"},'<h3 id="animation">Animation<a aria-labelledby="animation" class="anchor-link" href="#animation" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SkeletonAnimation.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SkeletonAnimations.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">color</td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left">Color for the background</td>\n</tr>\n<tr>\n<td align="left">width</td>\n<td align="left"><code>string</code> | <code>number</code></td>\n<td align="left">—</td>\n<td align="left">Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.</td>\n</tr>\n<tr>\n<td align="left">height</td>\n<td align="left"><code>string</code> | <code>number</code></td>\n<td align="left">—</td>\n<td align="left">Height of the skeleton. Useful when you don&#39;t want to adapt the skeleton to a text element but for instance a card.</td>\n</tr>\n<tr>\n<td align="left">children</td>\n<td align="left"><code>Node</code></td>\n<td align="left">—</td>\n<td align="left">Optional children to infer width and height from.</td>\n</tr>\n<tr>\n<td align="left">component</td>\n<td align="left"><code>JSX.IntrinsicElements</code></td>\n<td align="left">—</td>\n<td align="left">The component used for the root node. Either a string to use a HTML element or a component.</td>\n</tr>\n<tr>\n<td align="left">animation</td>\n<td align="left"><code>pulse</code> | <code>wave</code> | <code>false</code></td>\n<td align="left"><code>pulse</code></td>\n<td align="left">The animation. If false the animation effect is disabled.</td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>circular</code> | <code>rectangular</code> | <code>rounded</code> | <code>text</code></td>\n<td align="left"><code>text</code></td>\n<td align="left">The type of content that will be rendered.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Variant",level:3,hash:"variant"},{text:"Animation",level:3,hash:"animation"},{text:"Custom styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Skeleton component",headers:{title:"React Skeleton component",components:["Skeleton"],hooks:[]}}},y={"SkeletonVariants.tsx":{module:"./SkeletonVariants.tsx",raw:"import {Skeleton} from '@comfortdelgro/react-compass'\n\nfunction SkeletonVariants() {\n  return (\n    <div\n      style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}\n      color='var(--colors-gray40)'\n    >\n      <Skeleton variant='text' width={210} color='var(--colors-gray40)' />\n      <Skeleton\n        variant='circular'\n        width={40}\n        height={40}\n        color='var(--colors-gray40)'\n      />\n      <Skeleton\n        variant='rectangular'\n        width={210}\n        height={60}\n        color='var(--colors-gray40)'\n      />\n      <Skeleton\n        variant='rounded'\n        width={210}\n        height={60}\n        color='var(--colors-gray40)'\n      />\n      <Skeleton variant='rectangular' color='var(--colors-gray40)'>\n        <div style={{width: 210, height: 120}} />\n      </Skeleton>\n    </div>\n  )\n}\n\nexport default SkeletonVariants\n",jsxPreview:"<Skeleton variant='text' />\r\n<Skeleton variant='circular' width={40} height={40} />\r\n<Skeleton variant='rectangular' width={210} height={60} />\r\n<Skeleton variant='rounded' width={210} height={60} />\r\n<Skeleton variant='rectangular'>\r\n  <div style={{width: 210, height: 120}} />\r\n</Skeleton>",moduleTS:"./SkeletonVariants.tsx",rawTS:"import {Skeleton} from '@comfortdelgro/react-compass'\n\nfunction SkeletonVariants() {\n  return (\n    <div\n      style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}\n      color='var(--colors-gray40)'\n    >\n      <Skeleton variant='text' width={210} color='var(--colors-gray40)' />\n      <Skeleton\n        variant='circular'\n        width={40}\n        height={40}\n        color='var(--colors-gray40)'\n      />\n      <Skeleton\n        variant='rectangular'\n        width={210}\n        height={60}\n        color='var(--colors-gray40)'\n      />\n      <Skeleton\n        variant='rounded'\n        width={210}\n        height={60}\n        color='var(--colors-gray40)'\n      />\n      <Skeleton variant='rectangular' color='var(--colors-gray40)'>\n        <div style={{width: 210, height: 120}} />\n      </Skeleton>\n    </div>\n  )\n}\n\nexport default SkeletonVariants\n"},"SkeletonAnimation.tsx":{module:"./SkeletonAnimation.tsx",raw:"import {Column, Skeleton, Typography} from '@comfortdelgro/react-compass'\n\nconst Animations: React.FC = () => (\n  <Column>\n    <Typography.Header variant='header4'>Pulse</Typography.Header>\n    <Skeleton />\n    <Typography.Header variant='header4'>Wave</Typography.Header>\n    <Skeleton animation='wave' />\n    <Typography.Header variant='header4'>False</Typography.Header>\n    <Skeleton animation={false} />\n  </Column>\n)\n\nexport default Animations\n",jsxPreview:"<Skeleton />\r\n\r\n<Skeleton animation='wave' />\r\n\r\n<Skeleton animation={false} />",moduleTS:"./SkeletonAnimation.tsx",rawTS:"import {Column, Skeleton, Typography} from '@comfortdelgro/react-compass'\n\nconst Animations: React.FC = () => (\n  <Column>\n    <Typography.Header variant='header4'>Pulse</Typography.Header>\n    <Skeleton />\n    <Typography.Header variant='header4'>Wave</Typography.Header>\n    <Skeleton animation='wave' />\n    <Typography.Header variant='header4'>False</Typography.Header>\n    <Skeleton animation={false} />\n  </Column>\n)\n\nexport default Animations\n"},"SkeletonAnimations.tsx":{module:"./SkeletonAnimations.tsx",raw:"import {Skeleton} from '@comfortdelgro/react-compass'\n\nfunction SkeletonAnimations() {\n  return (\n    <div style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>\n      <Skeleton width={210} height={60} color='var(--colors-gray40)' />\n      <Skeleton\n        width={210}\n        height={60}\n        animation='wave'\n        color='var(--colors-gray40)'\n      />\n      <Skeleton\n        width={210}\n        height={60}\n        animation={false}\n        color='var(--colors-gray40)'\n      />\n    </div>\n  )\n}\n\nexport default SkeletonAnimations\n",jsxPreview:"<Skeleton width={210} height={60} />\r\n<Skeleton width={210} height={60} animation='wave' />\r\n<Skeleton width={210} height={60} animation={false} />",moduleTS:"./SkeletonAnimations.tsx",rawTS:"import {Skeleton} from '@comfortdelgro/react-compass'\n\nfunction SkeletonAnimations() {\n  return (\n    <div style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>\n      <Skeleton width={210} height={60} color='var(--colors-gray40)' />\n      <Skeleton\n        width={210}\n        height={60}\n        animation='wave'\n        color='var(--colors-gray40)'\n      />\n      <Skeleton\n        width={210}\n        height={60}\n        animation={false}\n        color='var(--colors-gray40)'\n      />\n    </div>\n  )\n}\n\nexport default SkeletonAnimations\n"}};y.scope={process:{},import:{"@comfortdelgro/react-compass":m}};var k={"./SkeletonVariants.tsx":function(){return(0,f.jsxs)("div",{style:{gap:"1rem",display:"flex",flexDirection:"column"},color:"var(--colors-gray40)",children:[o||(o=(0,f.jsx)(m.Skeleton,{variant:"text",width:210,color:"var(--colors-gray40)"})),a||(a=(0,f.jsx)(m.Skeleton,{variant:"circular",width:40,height:40,color:"var(--colors-gray40)"})),r||(r=(0,f.jsx)(m.Skeleton,{variant:"rectangular",width:210,height:60,color:"var(--colors-gray40)"})),l||(l=(0,f.jsx)(m.Skeleton,{variant:"rounded",width:210,height:60,color:"var(--colors-gray40)"})),(0,f.jsx)(m.Skeleton,{variant:"rectangular",color:"var(--colors-gray40)",children:(0,f.jsx)("div",{style:{width:210,height:120}})})]})},"./SkeletonAnimation.tsx":function(){return i||(i=(0,f.jsxs)(m.Column,{children:[(0,f.jsx)(m.Typography.Header,{variant:"header4",children:"Pulse"}),(0,f.jsx)(m.Skeleton,{}),(0,f.jsx)(m.Typography.Header,{variant:"header4",children:"Wave"}),(0,f.jsx)(m.Skeleton,{animation:"wave"}),(0,f.jsx)(m.Typography.Header,{variant:"header4",children:"False"}),(0,f.jsx)(m.Skeleton,{animation:!1})]}))},"./SkeletonAnimations.tsx":function(){return(0,f.jsxs)("div",{style:{gap:"1rem",display:"flex",flexDirection:"column"},children:[s||(s=(0,f.jsx)(m.Skeleton,{width:210,height:60,color:"var(--colors-gray40)"})),c||(c=(0,f.jsx)(m.Skeleton,{width:210,height:60,animation:"wave",color:"var(--colors-gray40)"})),d||(d=(0,f.jsx)(m.Skeleton,{width:210,height:60,animation:!1,color:"var(--colors-gray40)"}))]})}},x={"components/common/ComponentLinkHeader.tsx":v.Z};function S(){return(0,f.jsx)(p.Z,(0,g.Z)({},h))}},38184:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/skeleton",function(){return t(38218)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=38184)}),_N_E=n.O()}]);