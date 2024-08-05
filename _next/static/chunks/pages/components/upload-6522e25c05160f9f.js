(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1428],{17367:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return C}});var t,a,i,o,d,l,s,c,p,m,g,h,u={};r.r(u),r.d(u,{demoComponents:function(){return H},demos:function(){return S},docs:function(){return U},srcComponents:function(){return z}});var y=r(26098),v=r(3072),x=r(15393),f=r(44194),F=r.t(f,2),b=r(73804),D=r(31549),T=function(e){e.length<1||console.log(e)},w=function(e){e.length<1||console.log(e)},U={description:"The upload component allows users to upload files of various types and sizes.",location:"/docs/data/components/upload/upload.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Upload</h1><p class="description">The upload component allows users to upload files of various types and sizes.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Upload<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"UploadBasic.tsx"},'<h3 id="drag-and-drop-upload">Drag-and-Drop Upload<a aria-labelledby="drag-and-drop-upload" class="anchor-link" href="#drag-and-drop-upload" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DragAndDrop.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>getFile</td>\n<td><code>(file: File[]) =&gt; any</code></td>\n<td>—</td>\n<td>A callback function that receives the selected file(s) as an array of <code>File</code> objects.</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>string</td>\n<td>—</td>\n<td>A string specifying the file types that are accepted. It follows the format: <code>&#39;image/*, .docs, .docx&#39;</code>.</td>\n</tr>\n<tr>\n<td>fileSizeLimit</td>\n<td>number</td>\n<td>—</td>\n<td>The maximum file size limit in bytes.</td>\n</tr>\n<tr>\n<td>onError</td>\n<td><code>(error: string) =&gt; any</code></td>\n<td>—</td>\n<td>A callback function that receives an error message if an error occurs during file upload.</td>\n</tr>\n<tr>\n<td>customErrorMessages</td>\n<td>React.ReactNode</td>\n<td>—</td>\n<td>Custom error message to display when an error occurs during file upload.</td>\n</tr>\n<tr>\n<td>helperText</td>\n<td>React.ReactNode</td>\n<td>—</td>\n<td>Helper text to display instructions or limitations to the user.</td>\n</tr>\n<tr>\n<td>label</td>\n<td>string</td>\n<td>—</td>\n<td>A label to provide a descriptive name for the file upload field.</td>\n</tr>\n<tr>\n<td>isRequired</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>Indicates whether the file upload is required.</td>\n</tr>\n<tr>\n<td>isDisabled</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>Indicates whether the file upload is disabled and cannot be interacted with.</td>\n</tr>\n<tr>\n<td>css</td>\n<td><code>CSS</code></td>\n<td>—</td>\n<td>The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n<h2 id="upload-draganddrop">Upload.DragAndDrop<a aria-labelledby="upload-draganddrop" class="anchor-link" href="#upload-draganddrop" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>getFile</td>\n<td><code>(file: File[]) =&gt; any</code></td>\n<td>—</td>\n<td>A callback function that receives the selected file(s) as an array of <code>File</code> objects.</td>\n</tr>\n<tr>\n<td>accept</td>\n<td>string</td>\n<td>—</td>\n<td>A string specifying the file types that are accepted. It follows the format: <code>&#39;image/*, .docs, .docx&#39;</code>.</td>\n</tr>\n<tr>\n<td>fileSizeLimit</td>\n<td>number</td>\n<td>—</td>\n<td>The maximum file size limit in bytes.</td>\n</tr>\n<tr>\n<td>onError</td>\n<td><code>(error: string) =&gt; any</code></td>\n<td>—</td>\n<td>A callback function that receives an error message if an error occurs during file upload.</td>\n</tr>\n<tr>\n<td>customErrorMessages</td>\n<td>React.ReactNode</td>\n<td>—</td>\n<td>Custom error message to display when an error occurs during file upload.</td>\n</tr>\n<tr>\n<td>helperText</td>\n<td>React.ReactNode</td>\n<td>—</td>\n<td>Helper text to display instructions or limitations to the user.</td>\n</tr>\n<tr>\n<td>label</td>\n<td>string</td>\n<td>—</td>\n<td>A label to provide a descriptive name for the file upload field.</td>\n</tr>\n<tr>\n<td>isRequired</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>Indicates whether the file upload is required.</td>\n</tr>\n<tr>\n<td>isDisabled</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>Indicates whether the file upload is disabled and cannot be interacted with.</td>\n</tr>\n<tr>\n<td>variant</td>\n<td>string</td>\n<td>—</td>\n<td>Determines the variant of the drag-and-drop area. Possible values: &quot;primary&quot; or &quot;secondary&quot;.</td>\n</tr>\n<tr>\n<td>multiple</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td>Indicates whether multiple files can be selected for upload.</td>\n</tr>\n<tr>\n<td>css</td>\n<td><code>CSS</code></td>\n<td>—</td>\n<td>The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Drag-and-Drop Upload",level:3,hash:"drag-and-drop-upload"}]},{text:"Props",level:2,hash:"props",children:[]},{text:"Upload.DragAndDrop",level:2,hash:"upload-draganddrop",children:[]}],title:"React Upload component",headers:{title:"React Upload component",components:["Upload"],hooks:[]}},S={"UploadBasic.tsx":{module:"./UploadBasic.tsx",raw:"import {Typography, Upload} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst getFileFunc = (file: File[]) => {\n  if (file.length < 1) return\n  console.log(file)\n}\n\nconst ClickToUpload: React.FC = () => {\n  const [customError, setCustomError] = React.useState<string>('')\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        justifyContent: 'space-between',\n        gap: '2rem',\n      }}\n    >\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Click-to-upload\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={999999999999999}\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Custom helper text\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          helperText={\n            <>\n              <span>\n                Only files with the following extensions are allowed: pdf, image\n                extension, excel, word, powerpoint\n              </span>\n              <br />\n              <span>Maximum file size is 30MB</span>\n            </>\n          }\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Custom error message\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          onError={(error) => setCustomError(error)}\n          customErrorMessages={<span>No no no! You have a {customError}</span>}\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Add label\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          helperText={'Custom helper text'}\n          label='Upload label'\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          isRequired\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          isRequired\n          label='Upload label'\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          isDisabled\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          isDisabled\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Allow multiple uploaded file\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={9990000}\n          multiple\n        />\n      </div>\n    </div>\n  )\n}\n\nexport default ClickToUpload\n",jsxPreview:"const ClickToUpload: React.FC = () => {\r\n  const [customError, setCustomError] = React.useState<string>('')\r\n  return (\r\n    <div\r\n      style={{\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n        justifyContent: 'space-between',\r\n        gap: '2rem',\r\n      }}\r\n    >\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Click-to-upload</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={999999999999999}\r\n        />\r\n      </div>\r\n\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Custom helper text</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          helperText={\r\n            <>\r\n              <span>\r\n                Only files with the following extensions are allowed: pdf, image\r\n                extension, excel, word, powerpoint\r\n              </span>\r\n              <br />\r\n              <span>Maximum file size is 30MB</span>\r\n            </>\r\n          }\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Custom error message</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          onError={(error) => setCustomError(error)}\r\n          customErrorMessages={<span>No no no! You have a {customError}</span>}\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Add label</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          helperText={'Custom helper text'}\r\n          label='Upload label'\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>isRequired</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          isRequired\r\n          label='Upload label'\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>isDisabled</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          isDisabled\r\n        />\r\n      </div>\r\n\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Allow multiple uploaded file</h3>\r\n        <Upload\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={9990000}\r\n          multiple\r\n        />\r\n      </div>\r\n    </div>\r\n  )\r\n}",moduleTS:"./UploadBasic.tsx",rawTS:"import {Typography, Upload} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst getFileFunc = (file: File[]) => {\n  if (file.length < 1) return\n  console.log(file)\n}\n\nconst ClickToUpload: React.FC = () => {\n  const [customError, setCustomError] = React.useState<string>('')\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        justifyContent: 'space-between',\n        gap: '2rem',\n      }}\n    >\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Click-to-upload\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={999999999999999}\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Custom helper text\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          helperText={\n            <>\n              <span>\n                Only files with the following extensions are allowed: pdf, image\n                extension, excel, word, powerpoint\n              </span>\n              <br />\n              <span>Maximum file size is 30MB</span>\n            </>\n          }\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Custom error message\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          onError={(error) => setCustomError(error)}\n          customErrorMessages={<span>No no no! You have a {customError}</span>}\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Add label\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          helperText={'Custom helper text'}\n          label='Upload label'\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          isRequired\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          isRequired\n          label='Upload label'\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          isDisabled\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          isDisabled\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Allow multiple uploaded file\n        </Typography.Header>\n        <Upload\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={9990000}\n          multiple\n        />\n      </div>\n    </div>\n  )\n}\n\nexport default ClickToUpload\n"},"DragAndDrop.tsx":{module:"./DragAndDrop.tsx",raw:"import {Typography, Upload} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst getFileFunc = (file: File[]) => {\n  if (file.length < 1) return\n  console.log(file)\n}\n\nconst DragAndDrop: React.FC = () => {\n  const [customError, setCustomError] = React.useState<string>('')\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        justifyContent: 'space-between',\n        gap: '2rem',\n      }}\n    >\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Primary drag-and-drop\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000000000000000000000000}\n          multiple\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Secondary drag-and-drop\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          variant='area'\n          multiple={true}\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with custom helper text\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          multiple\n          helperText='Custom helper text'\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with custom error message\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={300000}\n          multiple\n          onError={(error) => setCustomError(error)}\n          customErrorMessages={<span>No no no! You have a {customError}</span>}\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with custom label\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          multiple\n          label='Custom label'\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with isRequired\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          multiple\n          label='Custom label'\n          isRequired\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with isDisabled\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={9990000}\n          multiple\n          label='Custom label'\n          isDisabled\n        />\n      </div>\n    </div>\n  )\n}\n\nexport default DragAndDrop\n",jsxPreview:"const DragAndDrop: React.FC = () => {\r\n  const [customError, setCustomError] = React.useState<string>('')\r\n  return (\r\n    <div\r\n      style={{\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n        justifyContent: 'space-between',\r\n        gap: '2rem',\r\n      }}\r\n    >\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Primary drag-and-drop</h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000000000000000000000000}\r\n          multiple\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>Secondary drag-and-drop</h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          variant='area'\r\n          multiple={true}\r\n        />\r\n      </div>\r\n\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>\r\n          drag-and-drop with custom helper text\r\n        </h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          multiple\r\n          helperText='Custom helper text'\r\n        />\r\n      </div>\r\n\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>\r\n          drag-and-drop with custom error message\r\n        </h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={300000}\r\n          multiple\r\n          onError={(error) => setCustomError(error)}\r\n          customErrorMessages={<span>No no no! You have a {customError}</span>}\r\n        />\r\n      </div>\r\n\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>\r\n          drag-and-drop with custom label\r\n        </h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          multiple\r\n          label='Custom label'\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>drag-and-drop with isRequired</h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={30000}\r\n          multiple\r\n          label='Custom label'\r\n          isRequired\r\n        />\r\n      </div>\r\n      <div>\r\n        <h3 style={{marginBottom: '0.8rem'}}>drag-and-drop with isDisabled</h3>\r\n        <Upload.DragAndDrop\r\n          getFile={getFileFunc}\r\n          accept='image/*, .docs, .docx'\r\n          fileSizeLimit={9990000}\r\n          multiple\r\n          label='Custom label'\r\n          isDisabled\r\n        />\r\n      </div>\r\n    </div>\r\n  )\r\n}",moduleTS:"./DragAndDrop.tsx",rawTS:"import {Typography, Upload} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst getFileFunc = (file: File[]) => {\n  if (file.length < 1) return\n  console.log(file)\n}\n\nconst DragAndDrop: React.FC = () => {\n  const [customError, setCustomError] = React.useState<string>('')\n  return (\n    <div\n      style={{\n        display: 'flex',\n        flexDirection: 'column',\n        justifyContent: 'space-between',\n        gap: '2rem',\n      }}\n    >\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Primary drag-and-drop\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000000000000000000000000}\n          multiple\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          Secondary drag-and-drop\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          variant='area'\n          multiple={true}\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with custom helper text\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          multiple\n          helperText='Custom helper text'\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with custom error message\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={300000}\n          multiple\n          onError={(error) => setCustomError(error)}\n          customErrorMessages={<span>No no no! You have a {customError}</span>}\n        />\n      </div>\n\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with custom label\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          multiple\n          label='Custom label'\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with isRequired\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={30000}\n          multiple\n          label='Custom label'\n          isRequired\n        />\n      </div>\n      <div>\n        <Typography.Header variant='header3' style={{marginBottom: '0.8rem'}}>\n          drag-and-drop with isDisabled\n        </Typography.Header>\n        <Upload.DragAndDrop\n          getFile={getFileFunc}\n          accept='image/*, .docs, .docx'\n          fileSizeLimit={9990000}\n          multiple\n          label='Custom label'\n          isDisabled\n        />\n      </div>\n    </div>\n  )\n}\n\nexport default DragAndDrop\n"}};S.scope={process:{},import:{"@comfortdelgro/react-compass":x,react:F}};var H={"./UploadBasic.tsx":function(){var e=f.useState(""),n=(0,b.Z)(e,2),r=n[0],s=n[1];return(0,D.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"2rem"},children:[(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Click-to-upload"}),t||(t=(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:999999999999999}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Custom helper text"}),a||(a=(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,helperText:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("span",{children:"Only files with the following extensions are allowed: pdf, image extension, excel, word, powerpoint"}),(0,D.jsx)("br",{}),(0,D.jsx)("span",{children:"Maximum file size is 30MB"})]})}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Custom error message"}),(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,onError:function(e){return s(e)},customErrorMessages:(0,D.jsxs)("span",{children:["No no no! You have a ",r]})})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Add label"}),i||(i=(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,helperText:"Custom helper text",label:"Upload label"}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"isRequired"}),o||(o=(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,isRequired:!0,label:"Upload label"}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"isDisabled"}),d||(d=(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,isDisabled:!0}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Allow multiple uploaded file"}),l||(l=(0,D.jsx)(x.Upload,{getFile:T,accept:"image/*, .docs, .docx",fileSizeLimit:999e4,multiple:!0}))]})]})},"./DragAndDrop.tsx":function(){var e=f.useState(""),n=(0,b.Z)(e,2),r=n[0],t=n[1];return(0,D.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"2rem"},children:[(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Primary drag-and-drop"}),s||(s=(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:3e25,multiple:!0}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"Secondary drag-and-drop"}),c||(c=(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"area",multiple:!0}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"drag-and-drop with custom helper text"}),p||(p=(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0,helperText:"Custom helper text"}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"drag-and-drop with custom error message"}),(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:3e5,multiple:!0,onError:function(e){return t(e)},customErrorMessages:(0,D.jsxs)("span",{children:["No no no! You have a ",r]})})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"drag-and-drop with custom label"}),m||(m=(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0,label:"Custom label"}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"drag-and-drop with isRequired"}),g||(g=(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0,label:"Custom label",isRequired:!0}))]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(x.Typography.Header,{variant:"header3",style:{marginBottom:"0.8rem"},children:"drag-and-drop with isDisabled"}),h||(h=(0,D.jsx)(x.Upload.DragAndDrop,{getFile:w,accept:"image/*, .docs, .docx",fileSizeLimit:999e4,multiple:!0,label:"Custom label",isDisabled:!0}))]})]})}},z={};function C(){return(0,D.jsx)(v.Z,(0,y.Z)({},u))}},77865:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/upload",function(){return r(17367)}])}},function(e){e.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return e(e.s=77865)}),_N_E=e.O()}]);