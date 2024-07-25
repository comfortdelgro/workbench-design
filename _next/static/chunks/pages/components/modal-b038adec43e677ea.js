(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4157],{25155:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return k}});var t,l,a,s,r,d,i,c,m,u,p,M,h,f,g={};o.r(g),o.d(g,{demoComponents:function(){return A},demos:function(){return j},docs:function(){return b},srcComponents:function(){return S}});var C=o(26098),O=o(3072),x=o(15393),B=o(42096),T=o(99902),w=o(44194),v=o.t(w,2),D=o(73804),y=o(31549),P=function(){var n=w.useState(!1),e=(0,D.Z)(n,2),o=e[0],t=e[1],l=function(){t(!1)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.Button,{variant:"secondary",css:{width:"7.8rem"},onPress:function(){return t(!0)},children:"Open Child"}),(0,y.jsx)(x.Modal.Trigger,{isOpen:o,handleClose:function(){return null==l?void 0:l()},className:"parent-modal-trigger",children:(0,y.jsxs)(x.Modal,{css:{width:"20rem"},children:[m||(m=(0,y.jsx)(x.Modal.Title,{children:"My child modal"})),u||(u=(0,y.jsx)(x.Modal.CloseIcon,{children:(0,y.jsx)(T.FontAwesomeIcon,{icon:B.faXmark})})),(0,y.jsx)(x.Modal.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur."}),(0,y.jsx)(x.Modal.Actions,{children:(0,y.jsx)(x.Button,{variant:"secondary",onPress:function(){return t(!1)},children:"Cancel"})})]})})]})},b={description:"The Modal component is a flexible and customizable modal/dialog that can be used in various use cases like confirmation dialogs, information popups, and more.",location:"/docs/data/components/modal/modal.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Modal</h1><p class="description">The Modal component is a flexible and customizable modal/dialog that can be used in various use cases like confirmation dialogs, information popups, and more.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Modal<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ModalDefault.tsx"},'<h3 id="modal-variant">Modal Variant<a aria-labelledby="modal-variant" class="anchor-link" href="#modal-variant" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ModalVariant.tsx"},'<h3 id="modal-nested">Modal Nested<a aria-labelledby="modal-nested" class="anchor-link" href="#modal-nested" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ModalNested.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">isOpen</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">—</td>\n<td align="left">If true, the modal is open.</td>\n</tr>\n<tr>\n<td align="left">handleClose</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Callback fired when the modal needs to be closed.</td>\n</tr>\n<tr>\n<td align="left">size</td>\n<td align="left"><code>&#39;sm&#39;</code> | <code>&#39;md&#39;</code> | <code>&#39;lg&#39;</code></td>\n<td align="left"><code>md</code></td>\n<td align="left">Size of the modal. &#39;sm&#39; for small, &#39;md&#39; for medium, and &#39;lg&#39; for large.</td>\n</tr>\n<tr>\n<td align="left">children</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">The content of the component.</td>\n</tr>\n<tr>\n<td align="left">disableBackdrop</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">If true, clicking the backdrop will not fire the handleClose callback.</td>\n</tr>\n<tr>\n<td align="left">modalProps</td>\n<td align="left"><code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td align="left">—</td>\n<td align="left">Additional props to be spread to the Modal component.</td>\n</tr>\n<tr>\n<td align="left">backdropProps</td>\n<td align="left"><code>React.HTMLAttributes&lt;HTMLDivElement&gt;</code></td>\n<td align="left">—</td>\n<td align="left">Additional props to be spread to the backdrop (overlay) component.</td>\n</tr>\n<tr>\n<td align="left">containerProps</td>\n<td align="left"><code>React.HTMLAttributes&lt;HTMLDivElement&gt; &amp; {className?: string}</code></td>\n<td align="left">—</td>\n<td align="left">Additional props to be spread to the container component.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Modal Variant",level:3,hash:"modal-variant"},{text:"Modal Nested",level:3,hash:"modal-nested"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Modal component",headers:{title:"React Modal component",components:["Modal"],hooks:[]}},j={"ModalDefault.tsx":{module:"./ModalDefault.tsx",raw:"import {Button, Column, Modal} from '@comfortdelgro/react-compass'\nimport {faXmark} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n  const handleDefaultClose = () => {\n    setDefaultOpen(false)\n  }\n  return (\n    <Column>\n      <Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => handleDefaultClose?.()}\n        className='my-modal-trigger'\n      >\n        <Modal className='my-modal'>\n          <Modal.Title>My small title</Modal.Title>\n          <Modal.CloseIcon>\n            <FontAwesomeIcon icon={faXmark} />\n          </Modal.CloseIcon>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>\n            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </Column>\n  )\n}\nexport default Default\n",jsxPreview:"<Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>\r\nOpen Modal\r\n</Button>\r\n<Modal.Trigger\r\nisOpen={defaultOpen}\r\nhandleClose={() => handleDefaultClose?.()}\r\nclassName='my-modal-trigger'\r\n>\r\n<Modal className='my-modal'>\r\n    <Modal.Title>My small title</Modal.Title>\r\n    <Modal.CloseIcon>\r\n    <FontAwesomeIcon icon={faXmark} />\r\n    </Modal.CloseIcon>\r\n    <Modal.Description>{lorem}</Modal.Description>\r\n    <Modal.Actions>\r\n    <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>\r\n    <Button onPress={() => setDefaultOpen(false)}>Do it</Button>\r\n    </Modal.Actions>\r\n</Modal>\r\n</Modal.Trigger>",moduleTS:"./ModalDefault.tsx",rawTS:"import {Button, Column, Modal} from '@comfortdelgro/react-compass'\nimport {faXmark} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n  const handleDefaultClose = () => {\n    setDefaultOpen(false)\n  }\n  return (\n    <Column>\n      <Button css={{width: '7.8rem'}} onPress={() => setDefaultOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => handleDefaultClose?.()}\n        className='my-modal-trigger'\n      >\n        <Modal className='my-modal'>\n          <Modal.Title>My small title</Modal.Title>\n          <Modal.CloseIcon>\n            <FontAwesomeIcon icon={faXmark} />\n          </Modal.CloseIcon>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>\n            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </Column>\n  )\n}\nexport default Default\n"},"ModalVariant.tsx":{module:"./ModalVariant.tsx",raw:"import {Button, Column, Modal} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Variants: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [smallOpen, setSmallOpen] = React.useState(false)\n  const handleSmallClose = () => {\n    setSmallOpen(false)\n  }\n  const [mediumOpen, setMediumOpen] = React.useState(false)\n  const handleMediumClose = () => {\n    setMediumOpen(false)\n  }\n  const [largeOpen, setLargeOpen] = React.useState(false)\n  const handleLargeClose = () => {\n    setLargeOpen(false)\n  }\n  return (\n    <Column>\n      <h3>Small sized modal</h3>\n      <Button css={{width: '7.8rem'}} onPress={() => setSmallOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={smallOpen}\n        handleClose={() => handleSmallClose?.()}\n        size='sm'\n      >\n        <Modal>\n          <Modal.Title>My small title</Modal.Title>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setSmallOpen(false)}>Cancel</Button>\n            <Button onPress={() => setSmallOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n\n      <h3>Medium sized modal</h3>\n      <Button css={{width: '7.8rem'}} onPress={() => setMediumOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={mediumOpen}\n        handleClose={() => handleMediumClose?.()}\n        size='md'\n      >\n        <Modal>\n          <Modal.Title>My medium title</Modal.Title>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setMediumOpen(false)}>Cancel</Button>\n            <Button onPress={() => setMediumOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n\n      <h3>Large sized modal</h3>\n      <Button css={{width: '7.8rem'}} onPress={() => setLargeOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={largeOpen}\n        handleClose={() => handleLargeClose?.()}\n        size='lg'\n      >\n        <Modal>\n          <Modal.Title>My large title</Modal.Title>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setLargeOpen(false)}>Cancel</Button>\n            <Button onPress={() => setLargeOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </Column>\n  )\n}\nexport default Variants\n",jsxPreview:"export const Variants: React.FC = () => {\r\nconst lorem =\r\n'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\r\nconst [smallOpen, setSmallOpen] = React.useState(false)\r\nconst handleSmallClose = () => {\r\nsetSmallOpen(false)\r\n}\r\nconst [mediumOpen, setMediumOpen] = React.useState(false)\r\nconst handleMediumClose = () => {\r\nsetMediumOpen(false)\r\n}\r\nconst [largeOpen, setLargeOpen] = React.useState(false)\r\nconst handleLargeClose = () => {\r\nsetLargeOpen(false)\r\n}\r\nreturn (\r\n<Column>\r\n<h3>Small sized modal</h3>\r\n<Button css={{width: '7.8rem'}} onPress={() => setSmallOpen(true)}>\r\nOpen Modal\r\n</Button>\r\n<Modal.Trigger\r\nisOpen={smallOpen}\r\nhandleClose={() => handleSmallClose?.()}\r\nsize='sm'\r\n>\r\n<Modal>\r\n    <Modal.Title>My small title</Modal.Title>\r\n    <Modal.Description>{lorem}</Modal.Description>\r\n    <Modal.Actions>\r\n    <Button onPress={() => setSmallOpen(false)}>Cancel</Button>\r\n    <Button onPress={() => setSmallOpen(false)}>Do it</Button>\r\n    </Modal.Actions>\r\n</Modal>\r\n</Modal.Trigger>\r\n\r\n<h3>Medium sized modal</h3>\r\n<Button css={{width: '7.8rem'}} onPress={() => setMediumOpen(true)}>\r\nOpen Modal\r\n</Button>\r\n<Modal.Trigger\r\nisOpen={mediumOpen}\r\nhandleClose={() => handleMediumClose?.()}\r\nsize='md'\r\n>\r\n<Modal>\r\n    <Modal.Title>My medium title</Modal.Title>\r\n    <Modal.Description>{lorem}</Modal.Description>\r\n    <Modal.Actions>\r\n    <Button onPress={() => setMediumOpen(false)}>Cancel</Button>\r\n    <Button onPress={() => setMediumOpen(false)}>Do it</Button>\r\n    </Modal.Actions>\r\n</Modal>\r\n</Modal.Trigger>\r\n\r\n<h3>Large sized modal</h3>\r\n<Button css={{width: '7.8rem'}} onPress={() => setLargeOpen(true)}>\r\nOpen Modal\r\n</Button>\r\n<Modal.Trigger\r\nisOpen={largeOpen}\r\nhandleClose={() => handleLargeClose?.()}\r\nsize='lg'\r\n>\r\n<Modal>\r\n    <Modal.Title>My large title</Modal.Title>\r\n    <Modal.Description>{lorem}</Modal.Description>\r\n    <Modal.Actions>\r\n    <Button onPress={() => setLargeOpen(false)}>Cancel</Button>\r\n    <Button onPress={() => setLargeOpen(false)}>Do it</Button>\r\n    </Modal.Actions>\r\n</Modal>\r\n</Modal.Trigger>\r\n</Column>\r\n)\r\n}",moduleTS:"./ModalVariant.tsx",rawTS:"import {Button, Column, Modal} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Variants: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [smallOpen, setSmallOpen] = React.useState(false)\n  const handleSmallClose = () => {\n    setSmallOpen(false)\n  }\n  const [mediumOpen, setMediumOpen] = React.useState(false)\n  const handleMediumClose = () => {\n    setMediumOpen(false)\n  }\n  const [largeOpen, setLargeOpen] = React.useState(false)\n  const handleLargeClose = () => {\n    setLargeOpen(false)\n  }\n  return (\n    <Column>\n      <h3>Small sized modal</h3>\n      <Button css={{width: '7.8rem'}} onPress={() => setSmallOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={smallOpen}\n        handleClose={() => handleSmallClose?.()}\n        size='sm'\n      >\n        <Modal>\n          <Modal.Title>My small title</Modal.Title>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setSmallOpen(false)}>Cancel</Button>\n            <Button onPress={() => setSmallOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n\n      <h3>Medium sized modal</h3>\n      <Button css={{width: '7.8rem'}} onPress={() => setMediumOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={mediumOpen}\n        handleClose={() => handleMediumClose?.()}\n        size='md'\n      >\n        <Modal>\n          <Modal.Title>My medium title</Modal.Title>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setMediumOpen(false)}>Cancel</Button>\n            <Button onPress={() => setMediumOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n\n      <h3>Large sized modal</h3>\n      <Button css={{width: '7.8rem'}} onPress={() => setLargeOpen(true)}>\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={largeOpen}\n        handleClose={() => handleLargeClose?.()}\n        size='lg'\n      >\n        <Modal>\n          <Modal.Title>My large title</Modal.Title>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button onPress={() => setLargeOpen(false)}>Cancel</Button>\n            <Button onPress={() => setLargeOpen(false)}>Do it</Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </Column>\n  )\n}\nexport default Variants\n"},"ModalNested.tsx":{module:"./ModalNested.tsx",raw:"import {Button, Column, Modal} from '@comfortdelgro/react-compass'\nimport {faXmark} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport React from 'react'\n\nconst ChildModal: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [isChildOpen, setIsChildOpen] = React.useState(false)\n  const handleChildClose = () => {\n    setIsChildOpen(false)\n  }\n\n  return (\n    <>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setIsChildOpen(true)}\n      >\n        Open Child\n      </Button>\n      <Modal.Trigger\n        isOpen={isChildOpen}\n        handleClose={() => handleChildClose?.()}\n        className='parent-modal-trigger'\n      >\n        <Modal css={{width: '20rem'}}>\n          <Modal.Title>My child modal</Modal.Title>\n          <Modal.CloseIcon>\n            <FontAwesomeIcon icon={faXmark} />\n          </Modal.CloseIcon>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button variant='secondary' onPress={() => setIsChildOpen(false)}>\n              Cancel\n            </Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </>\n  )\n}\n\nconst NestedModal: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [parentOpen, setParentOpen] = React.useState(false)\n  const handleParentClose = () => {\n    setParentOpen(false)\n  }\n  return (\n    <Column>\n      <h3>Nested Modal</h3>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setParentOpen(true)}\n        data-target='parent-modal' // This is needed for accessibility. When modal unmouts, focus will be set to this element\n      >\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={parentOpen}\n        handleClose={() => handleParentClose?.()}\n        className='my-modal-trigger'\n        id='parent-modal'\n      >\n        <Modal>\n          <Modal.Title>My parent modal</Modal.Title>\n          <Modal.CloseIcon>\n            <FontAwesomeIcon icon={faXmark} />\n          </Modal.CloseIcon>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button variant='secondary' onPress={() => setParentOpen(false)}>\n              Cancel\n            </Button>\n            <ChildModal />\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </Column>\n  )\n}\n\nexport default NestedModal\n",jsxPreview:"<Button\r\nvariant='secondary'\r\ncss={{width: '7.8rem'}}\r\nonPress={() => setParentOpen(true)}\r\ndata-target='parent-modal' // This is needed for accessibility. When modal unmouts, focus will be set to this element\r\n>\r\nOpen Modal\r\n</Button>\r\n<Modal.Trigger\r\nisOpen={parentOpen}\r\nhandleClose={() => handleParentClose?.()}\r\nclassName='my-modal-trigger'\r\nid='parent-modal'\r\n>\r\n<Modal>\r\n    <Modal.Title>My parent modal</Modal.Title>\r\n    <Modal.CloseIcon>\r\n    <FontAwesomeIcon icon={faXmark} />\r\n    </Modal.CloseIcon>\r\n    <Modal.Description>{lorem}</Modal.Description>\r\n    <Modal.Actions>\r\n    <Button variant='secondary' onPress={() => setParentOpen(false)}>\r\n        Cancel\r\n    </Button>\r\n    <ChildModal />\r\n    </Modal.Actions>\r\n</Modal>\r\n</Modal.Trigger>",moduleTS:"./ModalNested.tsx",rawTS:"import {Button, Column, Modal} from '@comfortdelgro/react-compass'\nimport {faXmark} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\nimport React from 'react'\n\nconst ChildModal: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [isChildOpen, setIsChildOpen] = React.useState(false)\n  const handleChildClose = () => {\n    setIsChildOpen(false)\n  }\n\n  return (\n    <>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setIsChildOpen(true)}\n      >\n        Open Child\n      </Button>\n      <Modal.Trigger\n        isOpen={isChildOpen}\n        handleClose={() => handleChildClose?.()}\n        className='parent-modal-trigger'\n      >\n        <Modal css={{width: '20rem'}}>\n          <Modal.Title>My child modal</Modal.Title>\n          <Modal.CloseIcon>\n            <FontAwesomeIcon icon={faXmark} />\n          </Modal.CloseIcon>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button variant='secondary' onPress={() => setIsChildOpen(false)}>\n              Cancel\n            </Button>\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </>\n  )\n}\n\nconst NestedModal: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [parentOpen, setParentOpen] = React.useState(false)\n  const handleParentClose = () => {\n    setParentOpen(false)\n  }\n  return (\n    <Column>\n      <h3>Nested Modal</h3>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setParentOpen(true)}\n        data-target='parent-modal' // This is needed for accessibility. When modal unmouts, focus will be set to this element\n      >\n        Open Modal\n      </Button>\n      <Modal.Trigger\n        isOpen={parentOpen}\n        handleClose={() => handleParentClose?.()}\n        className='my-modal-trigger'\n        id='parent-modal'\n      >\n        <Modal>\n          <Modal.Title>My parent modal</Modal.Title>\n          <Modal.CloseIcon>\n            <FontAwesomeIcon icon={faXmark} />\n          </Modal.CloseIcon>\n          <Modal.Description>{lorem}</Modal.Description>\n          <Modal.Actions>\n            <Button variant='secondary' onPress={() => setParentOpen(false)}>\n              Cancel\n            </Button>\n            <ChildModal />\n          </Modal.Actions>\n        </Modal>\n      </Modal.Trigger>\n    </Column>\n  )\n}\n\nexport default NestedModal\n"}};j.scope={process:{},import:{"@comfortdelgro/react-compass":x,"@fortawesome/free-solid-svg-icons":B,"@fortawesome/react-fontawesome":T,react:v}};var A={"./ModalDefault.tsx":function(){var n=w.useState(!1),e=(0,D.Z)(n,2),o=e[0],a=e[1],s=function(){a(!1)};return(0,y.jsxs)(x.Column,{children:[(0,y.jsx)(x.Button,{css:{width:"7.8rem"},onPress:function(){return a(!0)},children:"Open Modal"}),(0,y.jsx)(x.Modal.Trigger,{isOpen:o,handleClose:function(){return null==s?void 0:s()},className:"my-modal-trigger",children:(0,y.jsxs)(x.Modal,{className:"my-modal",children:[t||(t=(0,y.jsx)(x.Modal.Title,{children:"My small title"})),l||(l=(0,y.jsx)(x.Modal.CloseIcon,{children:(0,y.jsx)(T.FontAwesomeIcon,{icon:B.faXmark})})),(0,y.jsx)(x.Modal.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur."}),(0,y.jsxs)(x.Modal.Actions,{children:[(0,y.jsx)(x.Button,{onPress:function(){return a(!1)},children:"Cancel"}),(0,y.jsx)(x.Button,{onPress:function(){return a(!1)},children:"Do it"})]})]})})]})},"./ModalVariant.tsx":function(){var n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",e=w.useState(!1),o=(0,D.Z)(e,2),t=o[0],l=o[1],m=function(){l(!1)},u=w.useState(!1),p=(0,D.Z)(u,2),M=p[0],h=p[1],f=function(){h(!1)},g=w.useState(!1),C=(0,D.Z)(g,2),O=C[0],B=C[1],T=function(){B(!1)};return(0,y.jsxs)(x.Column,{children:[a||(a=(0,y.jsx)("h3",{children:"Small sized modal"})),(0,y.jsx)(x.Button,{css:{width:"7.8rem"},onPress:function(){return l(!0)},children:"Open Modal"}),(0,y.jsx)(x.Modal.Trigger,{isOpen:t,handleClose:function(){return null==m?void 0:m()},size:"sm",children:(0,y.jsxs)(x.Modal,{children:[s||(s=(0,y.jsx)(x.Modal.Title,{children:"My small title"})),(0,y.jsx)(x.Modal.Description,{children:n}),(0,y.jsxs)(x.Modal.Actions,{children:[(0,y.jsx)(x.Button,{onPress:function(){return l(!1)},children:"Cancel"}),(0,y.jsx)(x.Button,{onPress:function(){return l(!1)},children:"Do it"})]})]})}),r||(r=(0,y.jsx)("h3",{children:"Medium sized modal"})),(0,y.jsx)(x.Button,{css:{width:"7.8rem"},onPress:function(){return h(!0)},children:"Open Modal"}),(0,y.jsx)(x.Modal.Trigger,{isOpen:M,handleClose:function(){return null==f?void 0:f()},size:"md",children:(0,y.jsxs)(x.Modal,{children:[d||(d=(0,y.jsx)(x.Modal.Title,{children:"My medium title"})),(0,y.jsx)(x.Modal.Description,{children:n}),(0,y.jsxs)(x.Modal.Actions,{children:[(0,y.jsx)(x.Button,{onPress:function(){return h(!1)},children:"Cancel"}),(0,y.jsx)(x.Button,{onPress:function(){return h(!1)},children:"Do it"})]})]})}),i||(i=(0,y.jsx)("h3",{children:"Large sized modal"})),(0,y.jsx)(x.Button,{css:{width:"7.8rem"},onPress:function(){return B(!0)},children:"Open Modal"}),(0,y.jsx)(x.Modal.Trigger,{isOpen:O,handleClose:function(){return null==T?void 0:T()},size:"lg",children:(0,y.jsxs)(x.Modal,{children:[c||(c=(0,y.jsx)(x.Modal.Title,{children:"My large title"})),(0,y.jsx)(x.Modal.Description,{children:n}),(0,y.jsxs)(x.Modal.Actions,{children:[(0,y.jsx)(x.Button,{onPress:function(){return B(!1)},children:"Cancel"}),(0,y.jsx)(x.Button,{onPress:function(){return B(!1)},children:"Do it"})]})]})})]})},"./ModalNested.tsx":function(){var n=w.useState(!1),e=(0,D.Z)(n,2),o=e[0],t=e[1],l=function(){t(!1)};return(0,y.jsxs)(x.Column,{children:[p||(p=(0,y.jsx)("h3",{children:"Nested Modal"})),(0,y.jsx)(x.Button,{variant:"secondary",css:{width:"7.8rem"},onPress:function(){return t(!0)},"data-target":"parent-modal",children:"Open Modal"}),(0,y.jsx)(x.Modal.Trigger,{isOpen:o,handleClose:function(){return null==l?void 0:l()},className:"my-modal-trigger",id:"parent-modal",children:(0,y.jsxs)(x.Modal,{children:[M||(M=(0,y.jsx)(x.Modal.Title,{children:"My parent modal"})),h||(h=(0,y.jsx)(x.Modal.CloseIcon,{children:(0,y.jsx)(T.FontAwesomeIcon,{icon:B.faXmark})})),(0,y.jsx)(x.Modal.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur."}),(0,y.jsxs)(x.Modal.Actions,{children:[(0,y.jsx)(x.Button,{variant:"secondary",onPress:function(){return t(!1)},children:"Cancel"}),f||(f=(0,y.jsx)(P,{}))]})]})})]})}},S={};function k(){return(0,y.jsx)(O.Z,(0,C.Z)({},g))}},77875:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modal",function(){return o(25155)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,9902,3072,9774,2888,179],function(){return n(n.s=77875)}),_N_E=n.O()}]);