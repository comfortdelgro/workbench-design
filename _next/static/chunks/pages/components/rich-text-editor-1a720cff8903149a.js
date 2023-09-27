(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1856],{2708:function(t,n,e){"use strict";e.d(n,{Z:function(){return s}});var i,o,r=e(38443),d=e(2158),l=e.n(d),c=e(97458);function s(){return(0,c.jsxs)(r.Flexbox,{css:{marginBottom:"$4"},children:[(0,c.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,c.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,c.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,c.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},12063:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var i,o,r,d={};e.r(d),e.d(d,{demoComponents:function(){return R},demos:function(){return p},docs:function(){return x},srcComponents:function(){return T}});var l=e(88867),c=e(7703),s=e(38443),h=e(97458),a=e(2708),x={en:{description:"A rich text editor is an interface or input field for text editing.",location:"/docs/data/components/rich-text-editor/rich-text-editor.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Rich text editor</h1><p class="description">A rich text editor is an interface or input field for text editing.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  RichTextEditor<span class="token punctuation">,</span>\n  JSONContent<span class="token punctuation">,</span>\n  Content<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  RichTextEditor<span class="token punctuation">,</span>\n  JSONContent<span class="token punctuation">,</span>\n  Content<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/rich-text-editor\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="rich-text-editor">Rich Text Editor<a aria-labelledby="rich-text-editor" class="anchor-link" href="#rich-text-editor" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"RichTextEditor.tsx"},'<h3 id="placeholder">Placeholder<a aria-labelledby="placeholder" class="anchor-link" href="#placeholder" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"Placeholder.tsx"},'<h3 id="read-only">Read-only<a aria-labelledby="read-only" class="anchor-link" href="#read-only" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ReadOnly.tsx"},'<h2 id="components">Components<a aria-labelledby="components" class="anchor-link" href="#components" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">RichTextEditor</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">The core component, used for wrapping editing controls.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Default</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Default rich text editor.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Toolbar</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">The toolbar for the editor.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.ControlsGroup</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Used for grouping editor controls.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Undo</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Undo the last change.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Redo</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Redo the last change.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.H1</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Heading 1.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.H2</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Heading 2.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.H3</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Heading 3.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.H4</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Heading 4.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.H5</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Heading 5.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.H6</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Heading 6.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.AlignLeft</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Left text alignment.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.AlignCenter</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Center text alignment.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.AlignRight</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Right text alignment.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.AlignJustify</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Justify text alignment.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Bold</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render text in bold.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Italic</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render text in italic.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Underline</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render text in underline.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Strikethrough</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render text in strike through.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.BulletList</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a bullet list.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.OrderedList</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render an ordered list.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Link</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a link.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Unlink</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Removes a link.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Image</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render an image from a provided link.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Superscript</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render text in superscript.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Subscript</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render text in subscript.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.Hr</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a line breaker.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.ColorControl</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a color selector, provide colors via <strong>colors</strong> props.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.TextAlginmentSelector</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a text alignment selector.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.HeadingsControl</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a heading selector, provide levels via <strong>levels</strong> props.</td>\n</tr>\n<tr>\n<td align="left">RichTextEditor.CodeBlock</td>\n<td align="left"><code>Component</code></td>\n<td align="left"></td>\n<td align="left">Render a code block.</td>\n</tr>\n</tbody></table>\n<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="richtexteditor">RichTextEditor<a aria-labelledby="richtexteditor" class="anchor-link" href="#richtexteditor" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">outputType</td>\n<td align="left"><code>html</code> | <code>json</code></td>\n<td align="left">&#39;html&#39;</td>\n<td align="left">Output type.</td>\n</tr>\n<tr>\n<td align="left">onChange</td>\n<td align="left"><code>Function</code></td>\n<td align="left">-</td>\n<td align="left">Callback when the editor content changes.</td>\n</tr>\n<tr>\n<td align="left">isEditable</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">true</td>\n<td align="left">Whether the editor is editable.</td>\n</tr>\n<tr>\n<td align="left">characterCount</td>\n<td align="left"><code>number</code> | <code>null</code></td>\n<td align="left">null</td>\n<td align="left">Show maximum allowed characters.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td align="left">content</td>\n<td align="left"><code>null</code></td>\n<td align="left">null</td>\n<td align="left">You can provide the initial content for the editor.</td>\n</tr>\n</tbody></table>\n<h3 id="headingscontrol">HeadingsControl<a aria-labelledby="headingscontrol" class="anchor-link" href="#headingscontrol" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">levels</td>\n<td align="left"><code>number[]</code></td>\n<td align="left">[1, 2, 3, 4, 5, 6]</td>\n<td align="left">Levels of heading.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Rich Text Editor",level:3,hash:"rich-text-editor"},{text:"Placeholder",level:3,hash:"placeholder"},{text:"Read-only",level:3,hash:"read-only"}]},{text:"Components",level:2,hash:"components",children:[]},{text:"Props",level:2,hash:"props",children:[{text:"RichTextEditor",level:3,hash:"richtexteditor"},{text:"HeadingsControl",level:3,hash:"headingscontrol"}]}],title:"React Rich text editor component",headers:{title:"React Rich text editor component",components:["RichTextEditor"],hooks:[]}}},p={"RichTextEditor.tsx":{module:"./RichTextEditor.tsx",raw:'import {Content, RichTextEditor} from \'@comfortdelgro/react-compass\'\n\nconst content: Content = `\n    <h1>What is Lorem Ipsum?</h1>\n    <h2>What is Lorem Ipsum?</h2>\n    <h3>What is Lorem Ipsum?</h3>\n    <h4>What is Lorem Ipsum?</h4>\n    <h5>What is Lorem Ipsum?</h5>\n    <h6>What is Lorem Ipsum?</h6>\n          <p>\n            <strong>Lorem Ipsum</strong>\n            <span>\n              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem\n              Ipsum has been the industry\'s standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled\n              it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining\n              essentially unchanged. </span\n            >\n          </p>\n          <img\n            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"\n            contenteditable="false"\n            draggable="true"\n            class=""\n          />\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ul>\n          <ol>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ol>\n    `\nconst WithContent: React.FC = () => {\n  return (\n    <RichTextEditor\n      content={content}\n      placeholder=\'Type something...\'\n      isEditable={false}\n      characterCount={707}\n    >\n      <RichTextEditor.Toolbar>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.H1 />\n          <RichTextEditor.H2 />\n          <RichTextEditor.H3 />\n          <RichTextEditor.H4 />\n          <RichTextEditor.H5 />\n          <RichTextEditor.H6 />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.AlignLeft />\n          <RichTextEditor.AlignCenter />\n          <RichTextEditor.AlignRight />\n          <RichTextEditor.AlignJustify />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.Bold />\n          <RichTextEditor.Italic />\n          <RichTextEditor.Underline />\n          <RichTextEditor.Strikethrough />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.BulletList />\n        <RichTextEditor.OrderedList />\n        <RichTextEditor.Link />\n        <RichTextEditor.Unlink />\n        <RichTextEditor.Image />\n        <RichTextEditor.Superscript />\n        <RichTextEditor.Subscript />\n        <RichTextEditor.Hr />\n        <RichTextEditor.Undo />\n        <RichTextEditor.Redo />\n      </RichTextEditor.Toolbar>\n    </RichTextEditor>\n  )\n}\n\nexport default WithContent\n',jsxPreview:"<RichTextEditor\r\n    content={content}\r\n    placeholder='Type something...'\r\n    isEditable={false}\r\n    characterCount={500}\r\n>\r\n    <RichTextEditor.Toolbar>\r\n    <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.H1 />\r\n        <RichTextEditor.H2 />\r\n        <RichTextEditor.H3 />\r\n        <RichTextEditor.H4 />\r\n        <RichTextEditor.H5 />\r\n        <RichTextEditor.H6 />\r\n    </RichTextEditor.ControlsGroup>\r\n    <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.AlignLeft />\r\n        <RichTextEditor.AlignCenter />\r\n        <RichTextEditor.AlignRight />\r\n        <RichTextEditor.AlignJustify />\r\n    </RichTextEditor.ControlsGroup>\r\n    <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.Bold />\r\n        <RichTextEditor.Italic />\r\n        <RichTextEditor.Underline />\r\n        <RichTextEditor.Strikethrough />\r\n    </RichTextEditor.ControlsGroup>\r\n    <RichTextEditor.BulletList />\r\n    <RichTextEditor.OrderedList />\r\n    <RichTextEditor.Link />\r\n    <RichTextEditor.Unlink />\r\n    <RichTextEditor.Image />\r\n    <RichTextEditor.Superscript />\r\n    <RichTextEditor.Subscript />\r\n    <RichTextEditor.Hr />\r\n    <RichTextEditor.Undo />\r\n    <RichTextEditor.Redo />\r\n    </RichTextEditor.Toolbar>\r\n</RichTextEditor>",moduleTS:"./RichTextEditor.tsx",rawTS:'import {Content, RichTextEditor} from \'@comfortdelgro/react-compass\'\n\nconst content: Content = `\n    <h1>What is Lorem Ipsum?</h1>\n    <h2>What is Lorem Ipsum?</h2>\n    <h3>What is Lorem Ipsum?</h3>\n    <h4>What is Lorem Ipsum?</h4>\n    <h5>What is Lorem Ipsum?</h5>\n    <h6>What is Lorem Ipsum?</h6>\n          <p>\n            <strong>Lorem Ipsum</strong>\n            <span>\n              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem\n              Ipsum has been the industry\'s standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled\n              it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining\n              essentially unchanged. </span\n            >\n          </p>\n          <img\n            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"\n            contenteditable="false"\n            draggable="true"\n            class=""\n          />\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ul>\n          <ol>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ol>\n    `\nconst WithContent: React.FC = () => {\n  return (\n    <RichTextEditor\n      content={content}\n      placeholder=\'Type something...\'\n      isEditable={false}\n      characterCount={707}\n    >\n      <RichTextEditor.Toolbar>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.H1 />\n          <RichTextEditor.H2 />\n          <RichTextEditor.H3 />\n          <RichTextEditor.H4 />\n          <RichTextEditor.H5 />\n          <RichTextEditor.H6 />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.AlignLeft />\n          <RichTextEditor.AlignCenter />\n          <RichTextEditor.AlignRight />\n          <RichTextEditor.AlignJustify />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.Bold />\n          <RichTextEditor.Italic />\n          <RichTextEditor.Underline />\n          <RichTextEditor.Strikethrough />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.BulletList />\n        <RichTextEditor.OrderedList />\n        <RichTextEditor.Link />\n        <RichTextEditor.Unlink />\n        <RichTextEditor.Image />\n        <RichTextEditor.Superscript />\n        <RichTextEditor.Subscript />\n        <RichTextEditor.Hr />\n        <RichTextEditor.Undo />\n        <RichTextEditor.Redo />\n      </RichTextEditor.Toolbar>\n    </RichTextEditor>\n  )\n}\n\nexport default WithContent\n'},"Placeholder.tsx":{module:"./Placeholder.tsx",raw:"import {RichTextEditor} from '@comfortdelgro/react-compass'\n\nconst Placeholder: React.FC = () => {\n  return (\n    <RichTextEditor placeholder='Type something...'>\n      <RichTextEditor.Toolbar>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.H1 />\n          <RichTextEditor.H2 />\n          <RichTextEditor.H3 />\n          <RichTextEditor.H4 />\n          <RichTextEditor.H5 />\n          <RichTextEditor.H6 />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.AlignLeft />\n          <RichTextEditor.AlignCenter />\n          <RichTextEditor.AlignRight />\n          <RichTextEditor.AlignJustify />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.Bold />\n          <RichTextEditor.Italic />\n          <RichTextEditor.Underline />\n          <RichTextEditor.Strikethrough />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.BulletList />\n        <RichTextEditor.OrderedList />\n        <RichTextEditor.Link />\n        <RichTextEditor.Unlink />\n        <RichTextEditor.Image />\n        <RichTextEditor.Superscript />\n        <RichTextEditor.Subscript />\n        <RichTextEditor.Hr />\n        <RichTextEditor.Undo />\n        <RichTextEditor.Redo />\n      </RichTextEditor.Toolbar>\n    </RichTextEditor>\n  )\n}\n\nexport default Placeholder\n",jsxPreview:"<RichTextEditor placeholder='Type something...'>\r\n    <RichTextEditor.Toolbar>\r\n    <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.H1 />\r\n        <RichTextEditor.H2 />\r\n        <RichTextEditor.H3 />\r\n        <RichTextEditor.H4 />\r\n        <RichTextEditor.H5 />\r\n        <RichTextEditor.H6 />\r\n    </RichTextEditor.ControlsGroup>\r\n    <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.AlignLeft />\r\n        <RichTextEditor.AlignCenter />\r\n        <RichTextEditor.AlignRight />\r\n        <RichTextEditor.AlignJustify />\r\n    </RichTextEditor.ControlsGroup>\r\n    <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.Bold />\r\n        <RichTextEditor.Italic />\r\n        <RichTextEditor.Underline />\r\n        <RichTextEditor.Strikethrough />\r\n    </RichTextEditor.ControlsGroup>\r\n    <RichTextEditor.BulletList />\r\n    <RichTextEditor.OrderedList />\r\n    <RichTextEditor.Link />\r\n    <RichTextEditor.Unlink />\r\n    <RichTextEditor.Image />\r\n    <RichTextEditor.Superscript />\r\n    <RichTextEditor.Subscript />\r\n    <RichTextEditor.Hr />\r\n    <RichTextEditor.Undo />\r\n    <RichTextEditor.Redo />\r\n    </RichTextEditor.Toolbar>\r\n</RichTextEditor>",moduleTS:"./Placeholder.tsx",rawTS:"import {RichTextEditor} from '@comfortdelgro/react-compass'\n\nconst Placeholder: React.FC = () => {\n  return (\n    <RichTextEditor placeholder='Type something...'>\n      <RichTextEditor.Toolbar>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.H1 />\n          <RichTextEditor.H2 />\n          <RichTextEditor.H3 />\n          <RichTextEditor.H4 />\n          <RichTextEditor.H5 />\n          <RichTextEditor.H6 />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.AlignLeft />\n          <RichTextEditor.AlignCenter />\n          <RichTextEditor.AlignRight />\n          <RichTextEditor.AlignJustify />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.Bold />\n          <RichTextEditor.Italic />\n          <RichTextEditor.Underline />\n          <RichTextEditor.Strikethrough />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.BulletList />\n        <RichTextEditor.OrderedList />\n        <RichTextEditor.Link />\n        <RichTextEditor.Unlink />\n        <RichTextEditor.Image />\n        <RichTextEditor.Superscript />\n        <RichTextEditor.Subscript />\n        <RichTextEditor.Hr />\n        <RichTextEditor.Undo />\n        <RichTextEditor.Redo />\n      </RichTextEditor.Toolbar>\n    </RichTextEditor>\n  )\n}\n\nexport default Placeholder\n"},"ReadOnly.tsx":{module:"./ReadOnly.tsx",raw:'import {Content, RichTextEditor} from \'@comfortdelgro/react-compass\'\n\nconst content: Content = `\n    <h1>What is Lorem Ipsum?</h1>\n    <h2>What is Lorem Ipsum?</h2>\n    <h3>What is Lorem Ipsum?</h3>\n    <h4>What is Lorem Ipsum?</h4>\n    <h5>What is Lorem Ipsum?</h5>\n    <h6>What is Lorem Ipsum?</h6>\n          <p>\n            <strong>Lorem Ipsum</strong>\n            <span>\n              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem\n              Ipsum has been the industry\'s standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled\n              it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining\n              essentially unchanged. </span\n            >\n          </p>\n          <img\n            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"\n            contenteditable="false"\n            draggable="true"\n            class=""\n          />\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ul>\n          <ol>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ol>\n    `\nconst WithContentReadOnly: React.FC = () => {\n  return (\n    <RichTextEditor content={content} isEditable={false}>\n      <RichTextEditor.Toolbar>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.H1 />\n          <RichTextEditor.H2 />\n          <RichTextEditor.H3 />\n          <RichTextEditor.H4 />\n          <RichTextEditor.H5 />\n          <RichTextEditor.H6 />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.AlignLeft />\n          <RichTextEditor.AlignCenter />\n          <RichTextEditor.AlignRight />\n          <RichTextEditor.AlignJustify />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.Bold />\n          <RichTextEditor.Italic />\n          <RichTextEditor.Underline />\n          <RichTextEditor.Strikethrough />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.BulletList />\n        <RichTextEditor.OrderedList />\n        <RichTextEditor.Link />\n        <RichTextEditor.Unlink />\n        <RichTextEditor.Image />\n        <RichTextEditor.Superscript />\n        <RichTextEditor.Subscript />\n        <RichTextEditor.Hr />\n        <RichTextEditor.Undo />\n        <RichTextEditor.Redo />\n      </RichTextEditor.Toolbar>\n    </RichTextEditor>\n  )\n}\n\nexport default WithContentReadOnly\n',jsxPreview:"<RichTextEditor content={content} isEditable={false}>\r\n    <RichTextEditor.Toolbar>\r\n        <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.H1 />\r\n        <RichTextEditor.H2 />\r\n        <RichTextEditor.H3 />\r\n        <RichTextEditor.H4 />\r\n        <RichTextEditor.H5 />\r\n        <RichTextEditor.H6 />\r\n        </RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.AlignLeft />\r\n        <RichTextEditor.AlignCenter />\r\n        <RichTextEditor.AlignRight />\r\n        <RichTextEditor.AlignJustify />\r\n        </RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.Bold />\r\n        <RichTextEditor.Italic />\r\n        <RichTextEditor.Underline />\r\n        <RichTextEditor.Strikethrough />\r\n        </RichTextEditor.ControlsGroup>\r\n        <RichTextEditor.BulletList />\r\n        <RichTextEditor.OrderedList />\r\n        <RichTextEditor.Link />\r\n        <RichTextEditor.Unlink />\r\n        <RichTextEditor.Image />\r\n        <RichTextEditor.Superscript />\r\n        <RichTextEditor.Subscript />\r\n        <RichTextEditor.Hr />\r\n        <RichTextEditor.Undo />\r\n        <RichTextEditor.Redo />\r\n    </RichTextEditor.Toolbar>\r\n</RichTextEditor>",moduleTS:"./ReadOnly.tsx",rawTS:'import {Content, RichTextEditor} from \'@comfortdelgro/react-compass\'\n\nconst content: Content = `\n    <h1>What is Lorem Ipsum?</h1>\n    <h2>What is Lorem Ipsum?</h2>\n    <h3>What is Lorem Ipsum?</h3>\n    <h4>What is Lorem Ipsum?</h4>\n    <h5>What is Lorem Ipsum?</h5>\n    <h6>What is Lorem Ipsum?</h6>\n          <p>\n            <strong>Lorem Ipsum</strong>\n            <span>\n              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem\n              Ipsum has been the industry\'s standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled\n              it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining\n              essentially unchanged. </span\n            >\n          </p>\n          <img\n            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"\n            contenteditable="false"\n            draggable="true"\n            class=""\n          />\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ul>\n          <ol>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ol>\n    `\nconst WithContentReadOnly: React.FC = () => {\n  return (\n    <RichTextEditor content={content} isEditable={false}>\n      <RichTextEditor.Toolbar>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.H1 />\n          <RichTextEditor.H2 />\n          <RichTextEditor.H3 />\n          <RichTextEditor.H4 />\n          <RichTextEditor.H5 />\n          <RichTextEditor.H6 />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.AlignLeft />\n          <RichTextEditor.AlignCenter />\n          <RichTextEditor.AlignRight />\n          <RichTextEditor.AlignJustify />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.ControlsGroup>\n          <RichTextEditor.Bold />\n          <RichTextEditor.Italic />\n          <RichTextEditor.Underline />\n          <RichTextEditor.Strikethrough />\n        </RichTextEditor.ControlsGroup>\n        <RichTextEditor.BulletList />\n        <RichTextEditor.OrderedList />\n        <RichTextEditor.Link />\n        <RichTextEditor.Unlink />\n        <RichTextEditor.Image />\n        <RichTextEditor.Superscript />\n        <RichTextEditor.Subscript />\n        <RichTextEditor.Hr />\n        <RichTextEditor.Undo />\n        <RichTextEditor.Redo />\n      </RichTextEditor.Toolbar>\n    </RichTextEditor>\n  )\n}\n\nexport default WithContentReadOnly\n'}};p.scope={process:{},import:{"@comfortdelgro/react-compass":s}};var R={"./RichTextEditor.tsx":function(){return i||(i=(0,h.jsx)(s.RichTextEditor,{content:'\n    <h1>What is Lorem Ipsum?</h1>\n    <h2>What is Lorem Ipsum?</h2>\n    <h3>What is Lorem Ipsum?</h3>\n    <h4>What is Lorem Ipsum?</h4>\n    <h5>What is Lorem Ipsum?</h5>\n    <h6>What is Lorem Ipsum?</h6>\n          <p>\n            <strong>Lorem Ipsum</strong>\n            <span>\n              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem\n              Ipsum has been the industry\'s standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled\n              it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining\n              essentially unchanged. </span\n            >\n          </p>\n          <img\n            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"\n            contenteditable="false"\n            draggable="true"\n            class=""\n          />\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ul>\n          <ol>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ol>\n    ',placeholder:"Type something...",isEditable:!1,characterCount:707,children:(0,h.jsxs)(s.RichTextEditor.Toolbar,{children:[(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.H1,{}),(0,h.jsx)(s.RichTextEditor.H2,{}),(0,h.jsx)(s.RichTextEditor.H3,{}),(0,h.jsx)(s.RichTextEditor.H4,{}),(0,h.jsx)(s.RichTextEditor.H5,{}),(0,h.jsx)(s.RichTextEditor.H6,{})]}),(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.AlignLeft,{}),(0,h.jsx)(s.RichTextEditor.AlignCenter,{}),(0,h.jsx)(s.RichTextEditor.AlignRight,{}),(0,h.jsx)(s.RichTextEditor.AlignJustify,{})]}),(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.Bold,{}),(0,h.jsx)(s.RichTextEditor.Italic,{}),(0,h.jsx)(s.RichTextEditor.Underline,{}),(0,h.jsx)(s.RichTextEditor.Strikethrough,{})]}),(0,h.jsx)(s.RichTextEditor.BulletList,{}),(0,h.jsx)(s.RichTextEditor.OrderedList,{}),(0,h.jsx)(s.RichTextEditor.Link,{}),(0,h.jsx)(s.RichTextEditor.Unlink,{}),(0,h.jsx)(s.RichTextEditor.Image,{}),(0,h.jsx)(s.RichTextEditor.Superscript,{}),(0,h.jsx)(s.RichTextEditor.Subscript,{}),(0,h.jsx)(s.RichTextEditor.Hr,{}),(0,h.jsx)(s.RichTextEditor.Undo,{}),(0,h.jsx)(s.RichTextEditor.Redo,{})]})}))},"./Placeholder.tsx":function(){return o||(o=(0,h.jsx)(s.RichTextEditor,{placeholder:"Type something...",children:(0,h.jsxs)(s.RichTextEditor.Toolbar,{children:[(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.H1,{}),(0,h.jsx)(s.RichTextEditor.H2,{}),(0,h.jsx)(s.RichTextEditor.H3,{}),(0,h.jsx)(s.RichTextEditor.H4,{}),(0,h.jsx)(s.RichTextEditor.H5,{}),(0,h.jsx)(s.RichTextEditor.H6,{})]}),(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.AlignLeft,{}),(0,h.jsx)(s.RichTextEditor.AlignCenter,{}),(0,h.jsx)(s.RichTextEditor.AlignRight,{}),(0,h.jsx)(s.RichTextEditor.AlignJustify,{})]}),(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.Bold,{}),(0,h.jsx)(s.RichTextEditor.Italic,{}),(0,h.jsx)(s.RichTextEditor.Underline,{}),(0,h.jsx)(s.RichTextEditor.Strikethrough,{})]}),(0,h.jsx)(s.RichTextEditor.BulletList,{}),(0,h.jsx)(s.RichTextEditor.OrderedList,{}),(0,h.jsx)(s.RichTextEditor.Link,{}),(0,h.jsx)(s.RichTextEditor.Unlink,{}),(0,h.jsx)(s.RichTextEditor.Image,{}),(0,h.jsx)(s.RichTextEditor.Superscript,{}),(0,h.jsx)(s.RichTextEditor.Subscript,{}),(0,h.jsx)(s.RichTextEditor.Hr,{}),(0,h.jsx)(s.RichTextEditor.Undo,{}),(0,h.jsx)(s.RichTextEditor.Redo,{})]})}))},"./ReadOnly.tsx":function(){return r||(r=(0,h.jsx)(s.RichTextEditor,{content:'\n    <h1>What is Lorem Ipsum?</h1>\n    <h2>What is Lorem Ipsum?</h2>\n    <h3>What is Lorem Ipsum?</h3>\n    <h4>What is Lorem Ipsum?</h4>\n    <h5>What is Lorem Ipsum?</h5>\n    <h6>What is Lorem Ipsum?</h6>\n          <p>\n            <strong>Lorem Ipsum</strong>\n            <span>\n              is simply dummy <sup>text</sup> of the <sub>printing and typesetting</sub> industry. Lorem\n              Ipsum has been the industry\'s standard dummy text ever since the\n              1500s, when an unknown printer took a galley of type and scrambled\n              it to make a type specimen book. It has survived not only five\n              centuries, but also the leap into electronic typesetting, remaining\n              essentially unchanged. </span\n            >\n          </p>\n          <img\n            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"\n            contenteditable="false"\n            draggable="true"\n            class=""\n          />\n          <ul>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ul>\n          <ol>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>\n          </ol>\n    ',isEditable:!1,children:(0,h.jsxs)(s.RichTextEditor.Toolbar,{children:[(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.H1,{}),(0,h.jsx)(s.RichTextEditor.H2,{}),(0,h.jsx)(s.RichTextEditor.H3,{}),(0,h.jsx)(s.RichTextEditor.H4,{}),(0,h.jsx)(s.RichTextEditor.H5,{}),(0,h.jsx)(s.RichTextEditor.H6,{})]}),(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.AlignLeft,{}),(0,h.jsx)(s.RichTextEditor.AlignCenter,{}),(0,h.jsx)(s.RichTextEditor.AlignRight,{}),(0,h.jsx)(s.RichTextEditor.AlignJustify,{})]}),(0,h.jsxs)(s.RichTextEditor.ControlsGroup,{children:[(0,h.jsx)(s.RichTextEditor.Bold,{}),(0,h.jsx)(s.RichTextEditor.Italic,{}),(0,h.jsx)(s.RichTextEditor.Underline,{}),(0,h.jsx)(s.RichTextEditor.Strikethrough,{})]}),(0,h.jsx)(s.RichTextEditor.BulletList,{}),(0,h.jsx)(s.RichTextEditor.OrderedList,{}),(0,h.jsx)(s.RichTextEditor.Link,{}),(0,h.jsx)(s.RichTextEditor.Unlink,{}),(0,h.jsx)(s.RichTextEditor.Image,{}),(0,h.jsx)(s.RichTextEditor.Superscript,{}),(0,h.jsx)(s.RichTextEditor.Subscript,{}),(0,h.jsx)(s.RichTextEditor.Hr,{}),(0,h.jsx)(s.RichTextEditor.Undo,{}),(0,h.jsx)(s.RichTextEditor.Redo,{})]})}))}},T={"components/common/ComponentLinkHeader.tsx":a.Z};function g(){return(0,h.jsx)(c.Z,(0,l.Z)({},d))}},21529:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/rich-text-editor",function(){return e(12063)}])}},function(t){t.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return t(t.s=21529)}),_N_E=t.O()}]);