(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3424],{21338:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return T}});var t,r,s,a,o,c,l,m,p,d,u,f,x,B={};i.r(B),i.d(B,{demoComponents:function(){return D},demos:function(){return M},docs:function(){return y},srcComponents:function(){return H}});var h=i(26098),g=i(3072),b=i(15393),w=i(31549),y={description:"The Banner component is a reusable React component that displays a banner or header section on a web page.",location:"/docs/data/components/banner/banner.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Banner</h1><p class="description">The Banner component is a reusable React component that displays a banner or header section on a web page.</p>\n\n\n<h2 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Banner<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BannerBasic.tsx"},'<h3 id="size">Size<a aria-labelledby="size" class="anchor-link" href="#size" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BannerSizing.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>You can style React Compass&#39;s components with the css prop.<br>\nWith css prop, you can basically do anything that css can do.</p>\n',{demo:"BannerCustom.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">size</td>\n<td align="left"><code>sm</code>|<code>md</code>| <code>lg</code></td>\n<td align="left">—</td>\n<td align="left">This prop will determine the size of the banner</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td align="left">onError</td>\n<td align="left"><code>function</code></td>\n<td align="left">—</td>\n<td align="left">This prop will allow users to handle error when loading the background image of the banner.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Import",level:2,hash:"import",children:[]},{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Size",level:3,hash:"size"},{text:"Custom styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Banner component",headers:{title:"React Banner component",components:["Banner"],hooks:[]}},M={"BannerBasic.tsx":{module:"./BannerBasic.tsx",raw:"import {Banner} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <Banner css={{zIndex: 1}}>\n      <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n      <Banner.Title>My Title</Banner.Title>\n      <Banner.Description>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </Banner.Description>\n    </Banner>\n  )\n}\n\nexport default BasicExample\n",jsxPreview:"<Banner>\n  <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n  <Banner.Title>My Title</Banner.Title>\n  <Banner.Description>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n    esse qui earum dolorum.\n  </Banner.Description>\n</Banner>",moduleTS:"./BannerBasic.tsx",rawTS:"import {Banner} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <Banner css={{zIndex: 1}}>\n      <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n      <Banner.Title>My Title</Banner.Title>\n      <Banner.Description>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </Banner.Description>\n    </Banner>\n  )\n}\n\nexport default BasicExample\n"},"BannerSizing.tsx":{module:"./BannerSizing.tsx",raw:"import {Banner, Flexbox} from '@comfortdelgro/react-compass'\n\nfunction Sizing() {\n  return (\n    <Flexbox css={{flexDirection: 'column'}}>\n      <Banner size='sm' css={{zIndex: 1}}>\n        <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n        <Banner.Title>My Title</Banner.Title>\n        <Banner.Description>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n          corrupti esse qui earum dolorum.\n        </Banner.Description>\n      </Banner>\n\n      <Banner size='md' css={{zIndex: 1}}>\n        <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n        <Banner.Title>My Title</Banner.Title>\n        <Banner.Description>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n          corrupti esse qui earum dolorum.\n        </Banner.Description>\n      </Banner>\n\n      <Banner size='lg' css={{zIndex: 1}}>\n        <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n        <Banner.Title>My Title</Banner.Title>\n        <Banner.Description>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n          corrupti esse qui earum dolorum.\n        </Banner.Description>\n      </Banner>\n    </Flexbox>\n  )\n}\n\nexport default Sizing\n",jsxPreview:"<Banner size='sm'>\n  <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n  <Banner.Title>My Title</Banner.Title>\n  <Banner.Description>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n    corrupti esse qui earum dolorum.\n  </Banner.Description>\n</Banner>\n\n<Banner size='md'>\n  <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n  <Banner.Title>My Title</Banner.Title>\n  <Banner.Description>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n    corrupti esse qui earum dolorum.\n  </Banner.Description>\n</Banner>\n\n<Banner size='lg'>\n  <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n  <Banner.Title>My Title</Banner.Title>\n  <Banner.Description>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n    corrupti esse qui earum dolorum.\n  </Banner.Description>\n</Banner>",moduleTS:"./BannerSizing.tsx",rawTS:"import {Banner, Flexbox} from '@comfortdelgro/react-compass'\n\nfunction Sizing() {\n  return (\n    <Flexbox css={{flexDirection: 'column'}}>\n      <Banner size='sm' css={{zIndex: 1}}>\n        <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n        <Banner.Title>My Title</Banner.Title>\n        <Banner.Description>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n          corrupti esse qui earum dolorum.\n        </Banner.Description>\n      </Banner>\n\n      <Banner size='md' css={{zIndex: 1}}>\n        <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n        <Banner.Title>My Title</Banner.Title>\n        <Banner.Description>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n          corrupti esse qui earum dolorum.\n        </Banner.Description>\n      </Banner>\n\n      <Banner size='lg' css={{zIndex: 1}}>\n        <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n        <Banner.Title>My Title</Banner.Title>\n        <Banner.Description>\n          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste\n          corrupti esse qui earum dolorum.\n        </Banner.Description>\n      </Banner>\n    </Flexbox>\n  )\n}\n\nexport default Sizing\n"},"BannerCustom.tsx":{module:"./BannerCustom.tsx",raw:"import {Banner} from '@comfortdelgro/react-compass'\n\nfunction Custom() {\n  return (\n    <Banner size='md' css={{zIndex: 1}}>\n      <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n      <Banner.Title css={{color: 'red'}}>My Title</Banner.Title>\n      <Banner.Description css={{color: 'white'}}>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </Banner.Description>\n    </Banner>\n  )\n}\n\nexport default Custom\n",jsxPreview:"<Banner size='md'>\n  <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n  <Banner.Title css={{color: 'red'}}>My Title</Banner.Title>\n  <Banner.Description css={{color: 'white'}}>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n    esse qui earum dolorum.\n  </Banner.Description>\n</Banner>",moduleTS:"./BannerCustom.tsx",rawTS:"import {Banner} from '@comfortdelgro/react-compass'\n\nfunction Custom() {\n  return (\n    <Banner size='md' css={{zIndex: 1}}>\n      <Banner.Image src='https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />\n      <Banner.Title css={{color: 'red'}}>My Title</Banner.Title>\n      <Banner.Description css={{color: 'white'}}>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti\n        esse qui earum dolorum.\n      </Banner.Description>\n    </Banner>\n  )\n}\n\nexport default Custom\n"}};M.scope={process:{},import:{"@comfortdelgro/react-compass":b}};var D={"./BannerBasic.tsx":function(){return(0,w.jsxs)(b.Banner,{css:{zIndex:1},children:[t||(t=(0,w.jsx)(b.Banner.Image,{src:"https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})),r||(r=(0,w.jsx)(b.Banner.Title,{children:"My Title"})),s||(s=(0,w.jsx)(b.Banner.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."}))]})},"./BannerSizing.tsx":function(){return(0,w.jsxs)(b.Flexbox,{css:{flexDirection:"column"},children:[(0,w.jsxs)(b.Banner,{size:"sm",css:{zIndex:1},children:[a||(a=(0,w.jsx)(b.Banner.Image,{src:"https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})),o||(o=(0,w.jsx)(b.Banner.Title,{children:"My Title"})),c||(c=(0,w.jsx)(b.Banner.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."}))]}),(0,w.jsxs)(b.Banner,{size:"md",css:{zIndex:1},children:[l||(l=(0,w.jsx)(b.Banner.Image,{src:"https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})),m||(m=(0,w.jsx)(b.Banner.Title,{children:"My Title"})),p||(p=(0,w.jsx)(b.Banner.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."}))]}),(0,w.jsxs)(b.Banner,{size:"lg",css:{zIndex:1},children:[d||(d=(0,w.jsx)(b.Banner.Image,{src:"https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})),u||(u=(0,w.jsx)(b.Banner.Title,{children:"My Title"})),f||(f=(0,w.jsx)(b.Banner.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."}))]})]})},"./BannerCustom.tsx":function(){return(0,w.jsxs)(b.Banner,{size:"md",css:{zIndex:1},children:[x||(x=(0,w.jsx)(b.Banner.Image,{src:"https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"})),(0,w.jsx)(b.Banner.Title,{css:{color:"red"},children:"My Title"}),(0,w.jsx)(b.Banner.Description,{css:{color:"white"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]})}},H={};function T(){return(0,w.jsx)(g.Z,(0,h.Z)({},B))}},94914:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/banner",function(){return i(21338)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=94914)}),_N_E=n.O()}]);