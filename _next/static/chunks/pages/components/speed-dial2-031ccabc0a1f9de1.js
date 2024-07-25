(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3027],{29625:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return v}});var t,i,a,s,l,r,c={};o.r(c),o.d(c,{demoComponents:function(){return x},demos:function(){return w},docs:function(){return D},srcComponents:function(){return B}});var p=o(26098),d=o(3072),f=o(15393),g=o(42096),h=o(99902),S=o(44194),m=o.t(S,2),u=o(31549),D={description:"Provides the behavior and accessibility implementation for a speed-dial component.",location:"/docs/data/components/speed-dial2/speed-dial.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>SpeedDial2</h1><p class="description">Provides the behavior and accessibility implementation for a speed-dial component.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>SpeedDial2<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="default">Default<a aria-labelledby="default" class="anchor-link" href="#default" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SpeedDial.tsx"},'<h3 id="right">Right<a aria-labelledby="right" class="anchor-link" href="#right" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SpeedDialRight.tsx"},'<h3 id="left">Left<a aria-labelledby="left" class="anchor-link" href="#left" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SpeedDialLeft.tsx"},'<h3 id="hover">Hover<a aria-labelledby="hover" class="anchor-link" href="#hover" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SpeedDialHover.tsx"},'<!-- ### SpeedDial Server (Experimental)\n\n{{"demo": "SpeedDialServer.tsx"}} -->\n\n<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">showing</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether actions list is showing or not</td>\n</tr>\n<tr>\n<td align="left">position</td>\n<td align="left"><code>&#39;up&#39;</code> | <code>&#39;down&#39;</code>| <code>&#39;left&#39;</code>| <code>&#39;right&#39;</code></td>\n<td align="left"><code>up</code></td>\n<td align="left">Position of the Speed Dial Actions</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Default",level:3,hash:"default"},{text:"Right",level:3,hash:"right"},{text:"Left",level:3,hash:"left"},{text:"Hover",level:3,hash:"hover"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"SpeedDial 2 component",headers:{title:"SpeedDial 2 component",components:["SpeedDial2"],hooks:[]}},w={"SpeedDial.tsx":{module:"./SpeedDial.tsx",raw:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {\n  faBagShopping,\n  faCameraRetro,\n  faChair,\n  faPlus,\n} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '240px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions>\n            <SpeedDial2.Button\n              onClick={() => {\n                setShowing(false)\n              }}\n            >\n              <FontAwesomeIcon icon={faCameraRetro} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button\n              onClick={() => {\n                setShowing(false)\n              }}\n            >\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button\n              onClick={() => {\n                setShowing(false)\n              }}\n            >\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n",jsxPreview:"<SpeedDial2\r\n    showing={showing}\r\n    actions={\r\n        <SpeedDial2.Actions>\r\n            <SpeedDial2.Button\r\n              onClick={() => {\r\n                setShowing(false)\r\n              }}\r\n            >\r\n              <FontAwesomeIcon icon={faCameraRetro} />\r\n            </SpeedDial2.Button>\r\n            <SpeedDial2.Button\r\n              onClick={() => {\r\n                setShowing(false)\r\n              }}\r\n            >\r\n              <FontAwesomeIcon icon={faBagShopping} />\r\n            </SpeedDial2.Button>\r\n            <SpeedDial2.Button\r\n              onClick={() => {\r\n                setShowing(false)\r\n              }}\r\n            >\r\n              <FontAwesomeIcon icon={faChair} />\r\n            </SpeedDial2.Button>\r\n        </SpeedDial2.Actions>\r\n    }\r\n>\r\n    <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\r\n        <FontAwesomeIcon\r\n        icon={faPlus}\r\n        style={{\r\n            ...(showing && {transform: 'rotate(45deg)'}),\r\n            ...{transition: 'all 0.2s'},\r\n        }}\r\n        />\r\n    </SpeedDial2.Button>\r\n</SpeedDial2>",moduleTS:"./SpeedDial.tsx",rawTS:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {\n  faBagShopping,\n  faCameraRetro,\n  faChair,\n  faPlus,\n} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '240px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions>\n            <SpeedDial2.Button\n              onClick={() => {\n                setShowing(false)\n              }}\n            >\n              <FontAwesomeIcon icon={faCameraRetro} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button\n              onClick={() => {\n                setShowing(false)\n              }}\n            >\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button\n              onClick={() => {\n                setShowing(false)\n              }}\n            >\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n"},"SpeedDialRight.tsx":{module:"./SpeedDialRight.tsx",raw:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'flex-start',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '200px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions position={'right'}>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n",jsxPreview:"<SpeedDial2\r\n    showing={showing}\r\n    actions={\r\n        <SpeedDial2.Actions position={'right'}>\r\n            <SpeedDial2.Button>\r\n                <FontAwesomeIcon icon={faBagShopping} />\r\n            </SpeedDial2.Button>\r\n            <SpeedDial2.Button>\r\n                <FontAwesomeIcon icon={faChair} />\r\n            </SpeedDial2.Button>\r\n        </SpeedDial2.Actions>\r\n    }\r\n>\r\n    <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\r\n        <FontAwesomeIcon\r\n        icon={faPlus}\r\n        style={{\r\n            ...(showing && {transform: 'rotate(45deg)'}),\r\n            ...{transition: 'all 0.2s'},\r\n        }}\r\n        />\r\n    </SpeedDial2.Button>\r\n</SpeedDial2>",moduleTS:"./SpeedDialRight.tsx",rawTS:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'flex-start',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '200px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions position={'right'}>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n"},"SpeedDialLeft.tsx":{module:"./SpeedDialLeft.tsx",raw:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'flex-end',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '200px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions position={'left'}>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n",jsxPreview:"<SpeedDial2\r\n    showing={showing}\r\n    actions={\r\n        <SpeedDial2.Actions position={'left'}>\r\n            <SpeedDial2.Button>\r\n                <FontAwesomeIcon icon={faBagShopping} />\r\n            </SpeedDial2.Button>\r\n            <SpeedDial2.Button>\r\n                <FontAwesomeIcon icon={faChair} />\r\n            </SpeedDial2.Button>\r\n        </SpeedDial2.Actions>\r\n    }\r\n>\r\n    <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\r\n        <FontAwesomeIcon\r\n        icon={faPlus}\r\n        style={{\r\n            ...(showing && {transform: 'rotate(45deg)'}),\r\n            ...{transition: 'all 0.2s'},\r\n        }}\r\n        />\r\n    </SpeedDial2.Button>\r\n</SpeedDial2>",moduleTS:"./SpeedDialLeft.tsx",rawTS:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'flex-end',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '200px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions position={'left'}>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button onClick={() => toggleSpeedDial()}>\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n"},"SpeedDialHover.tsx":{module:"./SpeedDialHover.tsx",raw:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '200px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button\n          onMouseEnter={() => {\n            setShowing(true)\n          }}\n          onMouseLeave={() => {\n            setShowing(false)\n          }}\n        >\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n",jsxPreview:"<SpeedDial2\r\n    showing={showing}\r\n    actions={\r\n        <SpeedDial2.Actions>\r\n            <SpeedDial2.Button>\r\n                <FontAwesomeIcon icon={faBagShopping} />\r\n            </SpeedDial2.Button>\r\n            <SpeedDial2.Button>\r\n                <FontAwesomeIcon icon={faChair} />\r\n            </SpeedDial2.Button>\r\n        </SpeedDial2.Actions>\r\n    }\r\n>\r\n    <SpeedDial2.Button\r\n        onMouseEnter={() => {\r\n        setShowing(true)\r\n        }}\r\n        onMouseLeave={() => {\r\n        setShowing(false)\r\n        }}\r\n    >\r\n        <FontAwesomeIcon\r\n        icon={faPlus}\r\n        style={{\r\n            ...(showing && {transform: 'rotate(45deg)'}),\r\n            ...{transition: 'all 0.2s'},\r\n        }}\r\n        />\r\n    </SpeedDial2.Button>\r\n</SpeedDial2>",moduleTS:"./SpeedDialHover.tsx",rawTS:"import {SpeedDial2} from '@comfortdelgro/react-compass'\nimport {faBagShopping, faChair, faPlus} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport {useState} from 'react'\n\nfunction SpeedDialExample() {\n  const [showing, setShowing] = useState(false)\n\n  const toggleSpeedDial = () => {\n    setShowing(!showing)\n  }\n\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'flex-end',\n        gap: '2rem',\n        height: '200px',\n      }}\n    >\n      <SpeedDial2\n        showing={showing}\n        actions={\n          <SpeedDial2.Actions>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faBagShopping} />\n            </SpeedDial2.Button>\n            <SpeedDial2.Button>\n              <FontAwesomeIcon icon={faChair} />\n            </SpeedDial2.Button>\n          </SpeedDial2.Actions>\n        }\n      >\n        <SpeedDial2.Button\n          onMouseEnter={() => {\n            setShowing(true)\n          }}\n          onMouseLeave={() => {\n            setShowing(false)\n          }}\n        >\n          <FontAwesomeIcon\n            icon={faPlus}\n            style={{\n              ...(showing && {transform: 'rotate(45deg)'}),\n              ...{transition: 'all 0.2s'},\n            }}\n          />\n        </SpeedDial2.Button>\n      </SpeedDial2>\n    </div>\n  )\n}\n\nexport default SpeedDialExample\n"}};w.scope={process:{},import:{"@comfortdelgro/react-compass":f,"@fortawesome/free-solid-svg-icons":g,"@fortawesome/react-fontawesome":h,react:m}};var x={"./SpeedDial.tsx":function(){var n=(0,S.useState)(!1),e=n[0],o=n[1],s=function(){o(!e)};return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",gap:"2rem",height:"240px"},children:(0,u.jsx)(f.SpeedDial2,{showing:e,actions:(0,u.jsxs)(f.SpeedDial2.Actions,{children:[(0,u.jsx)(f.SpeedDial2.Button,{onClick:function(){o(!1)},children:t||(t=(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faCameraRetro}))}),(0,u.jsx)(f.SpeedDial2.Button,{onClick:function(){o(!1)},children:i||(i=(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faBagShopping}))}),(0,u.jsx)(f.SpeedDial2.Button,{onClick:function(){o(!1)},children:a||(a=(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faChair}))})]}),children:(0,u.jsx)(f.SpeedDial2.Button,{onClick:function(){return s()},children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faPlus,style:(0,p.Z)((0,p.Z)({},e&&{transform:"rotate(45deg)"}),{transition:"all 0.2s"})})})})})},"./SpeedDialRight.tsx":function(){var n=(0,S.useState)(!1),e=n[0],o=n[1],t=function(){o(!e)};return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",gap:"2rem",height:"200px"},children:(0,u.jsx)(f.SpeedDial2,{showing:e,actions:s||(s=(0,u.jsxs)(f.SpeedDial2.Actions,{position:"right",children:[(0,u.jsx)(f.SpeedDial2.Button,{children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faBagShopping})}),(0,u.jsx)(f.SpeedDial2.Button,{children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faChair})})]})),children:(0,u.jsx)(f.SpeedDial2.Button,{onClick:function(){return t()},children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faPlus,style:(0,p.Z)((0,p.Z)({},e&&{transform:"rotate(45deg)"}),{transition:"all 0.2s"})})})})})},"./SpeedDialLeft.tsx":function(){var n=(0,S.useState)(!1),e=n[0],o=n[1],t=function(){o(!e)};return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"flex-end",gap:"2rem",height:"200px"},children:(0,u.jsx)(f.SpeedDial2,{showing:e,actions:l||(l=(0,u.jsxs)(f.SpeedDial2.Actions,{position:"left",children:[(0,u.jsx)(f.SpeedDial2.Button,{children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faBagShopping})}),(0,u.jsx)(f.SpeedDial2.Button,{children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faChair})})]})),children:(0,u.jsx)(f.SpeedDial2.Button,{onClick:function(){return t()},children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faPlus,style:(0,p.Z)((0,p.Z)({},e&&{transform:"rotate(45deg)"}),{transition:"all 0.2s"})})})})})},"./SpeedDialHover.tsx":function(){var n=(0,S.useState)(!1),e=n[0],o=n[1];return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",gap:"2rem",height:"200px"},children:(0,u.jsx)(f.SpeedDial2,{showing:e,actions:r||(r=(0,u.jsxs)(f.SpeedDial2.Actions,{children:[(0,u.jsx)(f.SpeedDial2.Button,{children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faBagShopping})}),(0,u.jsx)(f.SpeedDial2.Button,{children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faChair})})]})),children:(0,u.jsx)(f.SpeedDial2.Button,{onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)},children:(0,u.jsx)(h.FontAwesomeIcon,{icon:g.faPlus,style:(0,p.Z)((0,p.Z)({},e&&{transform:"rotate(45deg)"}),{transition:"all 0.2s"})})})})})}},B={};function v(){return(0,u.jsx)(d.Z,(0,p.Z)({},c))}},97917:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/speed-dial2",function(){return o(29625)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,9902,3072,9774,2888,179],function(){return n(n.s=97917)}),_N_E=n.O()}]);