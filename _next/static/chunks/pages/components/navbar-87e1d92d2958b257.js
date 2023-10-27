(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2437],{2708:function(n,t,e){"use strict";e.d(t,{Z:function(){return c}});var a,r,o=e(38443),s=e(2158),i=e.n(s),l=e(97458);function c(){return(0,l.jsxs)(o.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,l.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,l.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},21788:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return $}});var a,r,o,s,i,l,c,d,h,m,f={};e.r(f),e.d(f,{demoComponents:function(){return A},demos:function(){return S},docs:function(){return B},srcComponents:function(){return j}});var b=e(88867),v=e(7703),u=e(38443),p=e(63516),g=e(61031),w=e(32800),x=e(46769),C=e(16799),F=e(29810),N=e(42830),k=e(97458),y=e(2708),B={en:{description:"The Navbar displays horizontally information and navigation relating to the current screen.",location:"/docs/data/components/navbar/navbar.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Navbar</h1><p class="description">The Navbar displays horizontally information and navigation relating to the current screen.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Navbar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/navbar\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="full-features">Full Features<a aria-labelledby="full-features" class="anchor-link" href="#full-features" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"Navbar.tsx"},'<h3 id="website-version">Website Version<a aria-labelledby="website-version" class="anchor-link" href="#website-version" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"WebsiteVersion.tsx"},'<h3 id="with-alternative-element">With alternative element<a aria-labelledby="with-alternative-element" class="anchor-link" href="#with-alternative-element" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>Change screen size to less than 768px</p>\n',{demo:"Alternative.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="navbar">Navbar<a aria-labelledby="navbar" class="anchor-link" href="#navbar" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">color</td>\n<td align="left"><code>white</code> | <code>blue</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>portal</code> | <code>website</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n<h3 id="navbar-brand">Navbar.Brand<a aria-labelledby="navbar-brand" class="anchor-link" href="#navbar-brand" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">hiddenOnMobile</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">—</td>\n<td align="left">Brand name will be hidden when screen is resize to small size</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n<h3 id="navbar-links">Navbar.Links<a aria-labelledby="navbar-links" class="anchor-link" href="#navbar-links" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n<h3 id="navbar-separator">Navbar.Separator<a aria-labelledby="navbar-separator" class="anchor-link" href="#navbar-separator" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n<h3 id="navbar-actions">Navbar.Actions<a aria-labelledby="navbar-actions" class="anchor-link" href="#navbar-actions" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">alternativeElement</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">Alternative element to show when the screen is resize to small size</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Full Features",level:3,hash:"full-features"},{text:"Website Version",level:3,hash:"website-version"},{text:"With alternative element",level:3,hash:"with-alternative-element"}]},{text:"Props",level:2,hash:"props",children:[{text:"Navbar",level:3,hash:"navbar"},{text:"Navbar.Brand",level:3,hash:"navbar-brand"},{text:"Navbar.Links",level:3,hash:"navbar-links"},{text:"Navbar.Separator",level:3,hash:"navbar-separator"},{text:"Navbar.Actions",level:3,hash:"navbar-actions"}]}],title:"React Navbar component",headers:{title:"React Navbar component",components:["Navbar"],hooks:[]}}},S={"Navbar.tsx":{module:"./Navbar.tsx",raw:"import {\n  Avatar,\n  Button,\n  Column,\n  Navbar,\n  SearchField,\n} from '@comfortdelgro/react-compass'\nimport NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'\nimport {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links'\nimport {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'\nimport {\n  faBars,\n  faBell,\n  faChartGantt,\n  faQuestionCircle,\n} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nconst imageSrc = 'https://i.pravatar.cc/150?img=32'\n\nconst Variants: React.FC = () => {\n  return (\n    <Column>\n      <Navbar css={{width: '100%'}}>\n        <a href='#'>\n          <FontAwesomeIcon\n            icon={faBars}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n        </a>\n        <Navbar.Brand>Workbench Title</Navbar.Brand>\n        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />\n        <NavbarLinks>\n          <Button href='#'>Home</Button>\n          <Button href='#'>Services</Button>\n          <Button href='#'>Products</Button>\n        </NavbarLinks>\n        <NavbarSeperator />\n        <NavbarActions>\n          <FontAwesomeIcon\n            icon={faQuestionCircle}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n          <FontAwesomeIcon\n            icon={faBell}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n          <FontAwesomeIcon\n            icon={faChartGantt}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n          <Avatar label='H' size='xs' image={imageSrc} />\n        </NavbarActions>\n      </Navbar>\n    </Column>\n  )\n}\nexport default Variants\n",jsxPreview:"<Navbar css={{width:'100%'}}>\r\n<a href='#'>\r\n    <FontAwesomeIcon\r\n    icon={faBars}\r\n    style={{\r\n        color: '#FFF',\r\n        width: '$5',\r\n        height: '$5',\r\n        cursor: 'pointer',\r\n    }}\r\n    />\r\n</a>\r\n<Navbar.Brand>Workbench Title</Navbar.Brand>\r\n<SearchField placeholder='Search' css={{minWidth: 'unset'}} />\r\n<NavbarLinks>\r\n    <Button href='#'>Home</Button>\r\n    <Button href='#'>Services</Button>\r\n    <Button href='#'>Products</Button>\r\n</NavbarLinks>\r\n<NavbarSeperator />\r\n<NavbarActions>\r\n    <FontAwesomeIcon\r\n    icon={faQuestionCircle}\r\n    style={{\r\n        color: '#FFF',\r\n        width: '$5',\r\n        height: '$5',\r\n        cursor: 'pointer',\r\n    }}\r\n    />\r\n    <FontAwesomeIcon\r\n    icon={faBell}\r\n    style={{\r\n        color: '#FFF',\r\n        width: '$5',\r\n        height: '$5',\r\n        cursor: 'pointer',\r\n    }}\r\n    />\r\n    <FontAwesomeIcon\r\n    icon={faChartGantt}\r\n    style={{\r\n        color: '#FFF',\r\n        width: '$5',\r\n        height: '$5',\r\n        cursor: 'pointer',\r\n    }}\r\n    />\r\n    <Avatar label='H' size='xs' image={imageSrc} />\r\n</NavbarActions>\r\n</Navbar>",moduleTS:"./Navbar.tsx",rawTS:"import {\n  Avatar,\n  Button,\n  Column,\n  Navbar,\n  SearchField,\n} from '@comfortdelgro/react-compass'\nimport NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'\nimport {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links'\nimport {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'\nimport {\n  faBars,\n  faBell,\n  faChartGantt,\n  faQuestionCircle,\n} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nconst imageSrc = 'https://i.pravatar.cc/150?img=32'\n\nconst Variants: React.FC = () => {\n  return (\n    <Column>\n      <Navbar css={{width: '100%'}}>\n        <a href='#'>\n          <FontAwesomeIcon\n            icon={faBars}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n        </a>\n        <Navbar.Brand>Workbench Title</Navbar.Brand>\n        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />\n        <NavbarLinks>\n          <Button href='#'>Home</Button>\n          <Button href='#'>Services</Button>\n          <Button href='#'>Products</Button>\n        </NavbarLinks>\n        <NavbarSeperator />\n        <NavbarActions>\n          <FontAwesomeIcon\n            icon={faQuestionCircle}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n          <FontAwesomeIcon\n            icon={faBell}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n          <FontAwesomeIcon\n            icon={faChartGantt}\n            style={{\n              color: '#FFF',\n              width: '$5',\n              height: '$5',\n              cursor: 'pointer',\n            }}\n          />\n          <Avatar label='H' size='xs' image={imageSrc} />\n        </NavbarActions>\n      </Navbar>\n    </Column>\n  )\n}\nexport default Variants\n"},"WebsiteVersion.tsx":{module:"./WebsiteVersion.tsx",raw:"import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'\nimport {Button, Column, Navbar} from '@comfortdelgro/react-compass'\n\nconst Variants: React.FC = () => {\n  return (\n    <Column>\n      <Navbar variant='website' color='white'>\n        <Workbench width={'40px'} height={'40px'} />\n        <Navbar.Links>\n          <Button variant='ghost'>Home</Button>\n          <Button variant='ghost'>Services</Button>\n          <Button variant='ghost'>Products</Button>\n        </Navbar.Links>\n      </Navbar>\n    </Column>\n  )\n}\nexport default Variants\n",jsxPreview:"<Navbar variant='website' color='white'>\r\n    <Workbench width={'40px'} height={'40px'} />\r\n    <Navbar.Links>\r\n      <Button variant='ghost'>Home</Button>\r\n      <Button variant='ghost'>Services</Button>\r\n      <Button variant='ghost'>Products</Button>\r\n    </Navbar.Links>\r\n</Navbar>",moduleTS:"./WebsiteVersion.tsx",rawTS:"import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'\nimport {Button, Column, Navbar} from '@comfortdelgro/react-compass'\n\nconst Variants: React.FC = () => {\n  return (\n    <Column>\n      <Navbar variant='website' color='white'>\n        <Workbench width={'40px'} height={'40px'} />\n        <Navbar.Links>\n          <Button variant='ghost'>Home</Button>\n          <Button variant='ghost'>Services</Button>\n          <Button variant='ghost'>Products</Button>\n        </Navbar.Links>\n      </Navbar>\n    </Column>\n  )\n}\nexport default Variants\n"},"Alternative.tsx":{module:"./Alternative.tsx",raw:"import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'\nimport MenuIcon from '@comfortdelgro/compass-icons/react/menu'\nimport {\n  Avatar,\n  Button,\n  Column,\n  Navbar,\n  SearchField,\n} from '@comfortdelgro/react-compass'\nimport NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'\nimport {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links'\nimport {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'\nimport {\n  faBell,\n  faChartGantt,\n  faQuestionCircle,\n} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nconst Variants: React.FC = () => {\n  const imageSrc = 'https://i.pravatar.cc/150?img=32'\n  const resetButtonStyle = {\n    backgroundColor: 'transparent',\n    border: 'none',\n    cursor: 'pointer',\n  }\n  return (\n    <Column>\n      <Navbar>\n        <a href='#' style={{backgroundColor: 'white', borderRadius: '100%'}}>\n          <Workbench width={'28px'} height={'24px'} />\n        </a>\n        <Navbar.Brand>Workbench Title</Navbar.Brand>\n        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />\n        <NavbarLinks>\n          <Button href='#'>Home</Button>\n          <Button href='#'>Services</Button>\n          <Button href='#'>Products</Button>\n        </NavbarLinks>\n        <NavbarSeperator />\n        <NavbarActions\n          alternativeElement={\n            <Button>\n              <MenuIcon />\n            </Button>\n          }\n        >\n          <button style={resetButtonStyle}>\n            <FontAwesomeIcon\n              icon={faQuestionCircle}\n              style={{\n                color: '#FFF',\n                width: '$5',\n                height: '$5',\n              }}\n            />\n          </button>\n          <button style={resetButtonStyle}>\n            <FontAwesomeIcon\n              icon={faBell}\n              style={{\n                color: '#FFF',\n                width: '$5',\n                height: '$5',\n              }}\n            />\n          </button>\n          <button style={resetButtonStyle}>\n            <FontAwesomeIcon\n              icon={faChartGantt}\n              style={{\n                color: '#FFF',\n                width: '$5',\n                height: '$5',\n              }}\n            />\n          </button>\n          <Avatar label='H' size='xs' image={imageSrc} />\n        </NavbarActions>\n      </Navbar>\n    </Column>\n  )\n}\nexport default Variants\n",jsxPreview:"",moduleTS:"./Alternative.tsx",rawTS:"import Workbench from '@comfortdelgro/compass-icons/react/colorful/workbench'\nimport MenuIcon from '@comfortdelgro/compass-icons/react/menu'\nimport {\n  Avatar,\n  Button,\n  Column,\n  Navbar,\n  SearchField,\n} from '@comfortdelgro/react-compass'\nimport NavbarActions from '@comfortdelgro/react-compass/navbar/navbar-actions'\nimport {NavbarLinks} from '@comfortdelgro/react-compass/navbar/navbar-links'\nimport {NavbarSeperator} from '@comfortdelgro/react-compass/navbar/navbar-seperator.style'\nimport {\n  faBell,\n  faChartGantt,\n  faQuestionCircle,\n} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nconst Variants: React.FC = () => {\n  const imageSrc = 'https://i.pravatar.cc/150?img=32'\n  const resetButtonStyle = {\n    backgroundColor: 'transparent',\n    border: 'none',\n    cursor: 'pointer',\n  }\n  return (\n    <Column>\n      <Navbar>\n        <a href='#' style={{backgroundColor: 'white', borderRadius: '100%'}}>\n          <Workbench width={'28px'} height={'24px'} />\n        </a>\n        <Navbar.Brand>Workbench Title</Navbar.Brand>\n        <SearchField placeholder='Search' css={{minWidth: 'unset'}} />\n        <NavbarLinks>\n          <Button href='#'>Home</Button>\n          <Button href='#'>Services</Button>\n          <Button href='#'>Products</Button>\n        </NavbarLinks>\n        <NavbarSeperator />\n        <NavbarActions\n          alternativeElement={\n            <Button>\n              <MenuIcon />\n            </Button>\n          }\n        >\n          <button style={resetButtonStyle}>\n            <FontAwesomeIcon\n              icon={faQuestionCircle}\n              style={{\n                color: '#FFF',\n                width: '$5',\n                height: '$5',\n              }}\n            />\n          </button>\n          <button style={resetButtonStyle}>\n            <FontAwesomeIcon\n              icon={faBell}\n              style={{\n                color: '#FFF',\n                width: '$5',\n                height: '$5',\n              }}\n            />\n          </button>\n          <button style={resetButtonStyle}>\n            <FontAwesomeIcon\n              icon={faChartGantt}\n              style={{\n                color: '#FFF',\n                width: '$5',\n                height: '$5',\n              }}\n            />\n          </button>\n          <Avatar label='H' size='xs' image={imageSrc} />\n        </NavbarActions>\n      </Navbar>\n    </Column>\n  )\n}\nexport default Variants\n"}};S.scope={process:{},import:{"@comfortdelgro/react-compass":u,"@comfortdelgro/react-compass/navbar/navbar-actions":p,"@comfortdelgro/react-compass/navbar/navbar-links":g,"@comfortdelgro/react-compass/navbar/navbar-seperator.style":w,"@fortawesome/free-solid-svg-icons":x,"@fortawesome/react-fontawesome":C,"@comfortdelgro/compass-icons/react/colorful/workbench":F,"@comfortdelgro/compass-icons/react/menu":N}};var A={"./Navbar.tsx":function(){return(0,k.jsx)(u.Column,{children:(0,k.jsxs)(u.Navbar,{css:{width:"100%"},children:[(0,k.jsx)("a",{href:"#",children:(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faBars,style:{color:"#FFF",width:"$5",height:"$5",cursor:"pointer"}})}),a||(a=(0,k.jsx)(u.Navbar.Brand,{children:"Workbench Title"})),(0,k.jsx)(u.SearchField,{placeholder:"Search",css:{minWidth:"unset"}}),r||(r=(0,k.jsxs)(g.NavbarLinks,{children:[(0,k.jsx)(u.Button,{href:"#",children:"Home"}),(0,k.jsx)(u.Button,{href:"#",children:"Services"}),(0,k.jsx)(u.Button,{href:"#",children:"Products"})]})),o||(o=(0,k.jsx)(w.NavbarSeperator,{})),(0,k.jsxs)(p.default,{children:[(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faQuestionCircle,style:{color:"#FFF",width:"$5",height:"$5",cursor:"pointer"}}),(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faBell,style:{color:"#FFF",width:"$5",height:"$5",cursor:"pointer"}}),(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faChartGantt,style:{color:"#FFF",width:"$5",height:"$5",cursor:"pointer"}}),s||(s=(0,k.jsx)(u.Avatar,{label:"H",size:"xs",image:"https://i.pravatar.cc/150?img=32"}))]})]})})},"./WebsiteVersion.tsx":function(){return i||(i=(0,k.jsx)(u.Column,{children:(0,k.jsxs)(u.Navbar,{variant:"website",color:"white",children:[(0,k.jsx)(F.default,{width:"40px",height:"40px"}),(0,k.jsxs)(u.Navbar.Links,{children:[(0,k.jsx)(u.Button,{variant:"ghost",children:"Home"}),(0,k.jsx)(u.Button,{variant:"ghost",children:"Services"}),(0,k.jsx)(u.Button,{variant:"ghost",children:"Products"})]})]})}))},"./Alternative.tsx":function(){var n={backgroundColor:"transparent",border:"none",cursor:"pointer"};return(0,k.jsx)(u.Column,{children:(0,k.jsxs)(u.Navbar,{children:[(0,k.jsx)("a",{href:"#",style:{backgroundColor:"white",borderRadius:"100%"},children:l||(l=(0,k.jsx)(F.default,{width:"28px",height:"24px"}))}),c||(c=(0,k.jsx)(u.Navbar.Brand,{children:"Workbench Title"})),(0,k.jsx)(u.SearchField,{placeholder:"Search",css:{minWidth:"unset"}}),d||(d=(0,k.jsxs)(g.NavbarLinks,{children:[(0,k.jsx)(u.Button,{href:"#",children:"Home"}),(0,k.jsx)(u.Button,{href:"#",children:"Services"}),(0,k.jsx)(u.Button,{href:"#",children:"Products"})]})),h||(h=(0,k.jsx)(w.NavbarSeperator,{})),(0,k.jsxs)(p.default,{alternativeElement:m||(m=(0,k.jsx)(u.Button,{children:(0,k.jsx)(N.default,{})})),children:[(0,k.jsx)("button",{style:n,children:(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faQuestionCircle,style:{color:"#FFF",width:"$5",height:"$5"}})}),(0,k.jsx)("button",{style:n,children:(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faBell,style:{color:"#FFF",width:"$5",height:"$5"}})}),(0,k.jsx)("button",{style:n,children:(0,k.jsx)(C.FontAwesomeIcon,{icon:x.faChartGantt,style:{color:"#FFF",width:"$5",height:"$5"}})}),(0,k.jsx)(u.Avatar,{label:"H",size:"xs",image:"https://i.pravatar.cc/150?img=32"})]})]})})}},j={"components/common/ComponentLinkHeader.tsx":y.Z};function $(){return(0,k.jsx)(v.Z,(0,b.Z)({},f))}},19801:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navbar",function(){return e(21788)}])},29810:function(n,t,e){"use strict";e.r(t);var a=e(52983);let r=(0,a.forwardRef)((n,t)=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 100 100",ref:t,...n},a.createElement("g",{clipPath:"url(#clip0_526_71417)"},a.createElement("path",{d:"M45.0064 46.1742C45.1021 47.3211 45.2097 48.4641 45.3372 49.607C45.397 50.1404 45.4607 50.6738 45.5285 51.2071C45.5564 51.4157 45.5883 51.6202 45.6162 51.8287C45.9031 53.7697 46.2419 55.7067 46.6882 57.6196C46.8158 58.169 46.9552 58.7184 47.1027 59.2679C47.1226 59.2077 47.1426 59.1475 47.1625 59.0874C48.0313 56.3644 48.7128 53.5772 49.3066 50.778C50.6576 44.4137 51.4706 37.9531 52.7379 31.5686C53.3796 28.3363 54.0411 25.0158 55.2567 21.9439C56.3526 19.1687 57.7156 16.4498 60.7564 15.4632C66.563 13.5824 69.293 20.6285 70.6121 24.8273C72.1584 29.752 73.2145 34.833 74.438 39.8459C74.6691 40.8004 74.9083 41.7548 75.1514 42.7093C76.5183 36.0842 77.2237 29.2467 79.7743 22.9826C79.7943 22.9344 79.8142 22.8863 79.8341 22.8382L57.4446 9.78462C55.1172 8.42913 51.9488 7.84764 48.8961 8.03612C48.8004 8.2206 48.7088 8.40507 48.6211 8.59356C48.5414 8.75798 48.4697 8.92641 48.3939 9.09084C48.0671 9.92097 47.7603 10.7631 47.4972 11.6173C46.8636 13.6546 46.3614 15.7319 45.9709 17.8293C45.7596 18.9562 45.5723 20.0911 45.4129 21.23C45.4129 21.2341 45.4129 21.2381 45.4129 21.2421C45.381 21.4907 45.3492 21.7353 45.3213 21.984C45.2535 22.5815 45.1858 23.1791 45.126 23.7766C44.8869 26.2309 44.7275 28.6892 44.6477 31.1556C44.4883 36.1604 44.5959 41.1814 45.0104 46.1742H45.0064Z",fill:"#0142AF"}),a.createElement("path",{d:"M34.9514 30.8427C35.1667 25.0518 35.609 18.9 36.968 13.057L19.3529 23.3715C15.268 25.7577 12 31.5927 12 36.3449V37.7525L40.8816 69.1853C38.9926 66.6869 38.06 63.23 37.3705 60.2183C35.1826 50.6818 34.5888 40.5998 34.9514 30.8427Z",fill:"#0142AF"}),a.createElement("path",{d:"M19.3529 76.5443L42.6192 90.1312C46.7081 92.5133 53.3756 92.5133 57.4605 90.1312L80.5275 76.5443C84.6125 74.1622 87.721 68.3231 87.721 63.5709V36.3449C87.721 34.8691 87.6254 33.285 87.0595 31.7371C86.0831 35.7915 85.5291 39.9101 84.6962 44.0006C84.0665 47.0966 83.4806 50.2928 82.2611 53.2203C81.221 55.7227 79.7863 58.8147 76.8092 59.4002C73.613 60.0258 71.0425 58.4538 69.4404 55.7268L60.0948 45.729C59.2738 50.6337 58.3572 55.5222 56.9464 60.2865C55.9262 63.7353 54.6349 68.4675 51.6778 70.8376C47.836 73.9215 43.751 72.9831 40.8776 69.1854L12 37.7565V63.5709C12 68.3231 15.268 74.1622 19.3529 76.5443Z",fill:"#0142AF"}),a.createElement("path",{d:"M65.0844 42.4486C64.2356 38.9556 63.4624 35.4266 62.5498 31.9456C61.952 34.6726 61.4697 37.4317 61.0154 40.1828C60.7086 42.0316 60.4136 43.8843 60.1028 45.7371L69.4523 55.7348C67.1289 51.7806 66.1565 46.864 65.0844 42.4526V42.4486Z",fill:"#0142AF"}),a.createElement("path",{opacity:.3,d:"M36.968 13.057L12 63.5709C12 63.5709 12.3268 72.4417 19.3529 76.5443L42.6192 90.1312C42.6192 90.1312 50.3348 94.33 57.4605 90.1312C64.5863 85.9324 80.5275 76.5443 80.5275 76.5443C80.5275 76.5443 87.721 72.2211 87.721 63.5709V51.564C87.721 45.2398 88.6815 37.8407 87.0276 31.725C86.0552 37.6563 84.8556 43.5474 83.4368 49.3864C82.9506 51.3916 82.4285 53.4128 81.4402 55.2214C79.6747 58.4578 76.0759 60.8599 72.5091 58.8347C71.0943 58.0327 70.0701 56.6732 69.2531 55.2575C66.6507 50.7579 65.8058 45.5486 64.6301 40.5557C64.2037 38.739 63.7533 36.9304 63.3189 35.1177C63.1276 34.3277 62.4023 32.7637 62.5537 31.9456L61.0194 40.1828L60.1068 45.737C59.1662 51.4437 57.9746 57.3629 56.2051 62.9573C54.8541 67.2363 52.5944 72.153 47.545 72.6502C44.8829 72.9109 42.3243 71.2466 40.77 69.057C37.3546 64.2446 36.5575 56.8697 35.7684 51.171C34.8518 44.5821 34.6007 37.9049 34.8917 31.2598C35.0431 27.7829 35.3141 24.2859 35.6369 20.821C35.8641 18.3747 35.8362 15.2948 36.976 13.061L36.968 13.057Z",fill:"#201F1E"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_526_71417"},a.createElement("rect",{width:76,height:84,fill:"white",transform:"translate(12 8)"})))));t.default=r},42830:function(n,t,e){"use strict";e.r(t);var a=e(52983);let r=(0,a.forwardRef)((n,t)=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 30 28",ref:t,...n},a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M0 2.33333C0 1.0449 0.959598 0 2.14286 0H27.8571C29.0424 0 30 1.0449 30 2.33333C30 3.62396 29.0424 4.66667 27.8571 4.66667H2.14286C0.959598 4.66667 0 3.62396 0 2.33333ZM0 14C0 12.7094 0.959598 11.6667 2.14286 11.6667H27.8571C29.0424 11.6667 30 12.7094 30 14C30 15.2906 29.0424 16.3333 27.8571 16.3333H2.14286C0.959598 16.3333 0 15.2906 0 14ZM27.8571 28H2.14286C0.959598 28 0 26.9573 0 25.6667C0 24.376 0.959598 23.3333 2.14286 23.3333H27.8571C29.0424 23.3333 30 24.376 30 25.6667C30 26.9573 29.0424 28 27.8571 28Z"}))));t.default=r}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=19801)}),_N_E=n.O()}]);