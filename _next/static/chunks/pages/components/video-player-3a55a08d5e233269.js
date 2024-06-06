(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4932],{99223:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var o,l,d=n(15393),i=n(92274),a=n.n(i),s=n(97458);function r(){return(0,s.jsxs)(d.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,s.jsx)(a(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,s.jsx)(d.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,s.jsx)(a(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:l||(l=(0,s.jsx)(d.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},66575:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var o,l={};n.r(l),n.d(l,{demoComponents:function(){return g},demos:function(){return p},docs:function(){return c},srcComponents:function(){return h}});var d=n(26098),i=n(916),a=n(15393),s=n(97458),r=n(99223),c={en:{description:"Using to display a video.",location:"/docs/data/components/video-player/video-player.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Video Player</h1><p class="description">Using to display a video.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>VideoPlayer<span class="token punctuation">,</span> VideoPlayerProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"VideoPlayer.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="tooltiptrigger-props">TooltipTrigger Props:<a aria-labelledby="tooltiptrigger-props" class="anchor-link" href="#tooltiptrigger-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">src</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Specifies the URL of the video file</td>\n</tr>\n<tr>\n<td align="left">id</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Unique id of the video</td>\n</tr>\n<tr>\n<td align="left">loop</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Specifies that the video will start over again, every time it is finished</td>\n</tr>\n<tr>\n<td align="left">autoPlay</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Specifies that the video will start playing as soon as it is ready</td>\n</tr>\n<tr>\n<td align="left">muted</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Specifies that the audio output of the video should be muted</td>\n</tr>\n<tr>\n<td align="left">controls</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">true</td>\n<td align="left">Specifies that video controls should be displayed (such as a play/pause button etc).</td>\n</tr>\n<tr>\n<td align="left">poster</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Specifies an image to be shown while the video is downloading, or until the user hits the play button</td>\n</tr>\n<tr>\n<td align="left">preload</td>\n<td align="left"><code>auto</code> | <code>metadata</code> | <code>none</code></td>\n<td align="left">-</td>\n<td align="left">Specifies if and how the author thinks the video should be loaded when the page loads</td>\n</tr>\n<tr>\n<td align="left">width</td>\n<td align="left"><code>number</code></td>\n<td align="left">-</td>\n<td align="left">Sets the width of the video player</td>\n</tr>\n<tr>\n<td align="left">height</td>\n<td align="left"><code>number</code></td>\n<td align="left">-</td>\n<td align="left">Sets the height of the video player</td>\n</tr>\n<tr>\n<td align="left">onNext</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Fired when the next button is clicked</td>\n</tr>\n<tr>\n<td align="left">onPrev</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Fired when the prev button is clicked</td>\n</tr>\n<tr>\n<td align="left">onSetting</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Fired when the settings button is clicked</td>\n</tr>\n<tr>\n<td align="left">css?</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[]},{text:"Props",level:2,hash:"props",children:[{text:"TooltipTrigger Props:",level:3,hash:"tooltiptrigger-props"}]}],title:"React Video Player component",headers:{title:"React Video Player component",components:["VideoPlayer"],hooks:[]}}},p={"VideoPlayer.tsx":{module:"./VideoPlayer.tsx",raw:"import {VideoPlayer} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <VideoPlayer src='http://techslides.com/demos/sample-videos/small.webm' />\n  )\n}\n\nexport default BasicExample\n",moduleTS:"./VideoPlayer.tsx",rawTS:"import {VideoPlayer} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <VideoPlayer src='http://techslides.com/demos/sample-videos/small.webm' />\n  )\n}\n\nexport default BasicExample\n"}};p.scope={process:{},import:{"@comfortdelgro/react-compass":a}};var g={"./VideoPlayer.tsx":function(){return o||(o=(0,s.jsx)(a.VideoPlayer,{src:"http://techslides.com/demos/sample-videos/small.webm"}))}},h={"components/common/ComponentLinkHeader.tsx":r.Z};function f(){return(0,s.jsx)(i.Z,(0,d.Z)({},l))}},56840:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/video-player",function(){return n(66575)}])}},function(t){t.O(0,[4308,6555,47,916,9774,2888,179],function(){return t(t.s=56840)}),_N_E=t.O()}]);