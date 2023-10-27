(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{2708:function(n,a,t){"use strict";t.d(a,{Z:function(){return d}});var r,e,l=t(38443),o=t(2158),i=t.n(o),s=t(97458);function d(){return(0,s.jsxs)(l.Flexbox,{css:{marginBottom:"$4"},children:[(0,s.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,s.jsx)(l.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,s.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:e||(e=(0,s.jsx)(l.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},5539:function(n,a,t){"use strict";t.r(a),t.d(a,{default:function(){return m}});var r={};t.r(r),t.d(r,{demoComponents:function(){return c},demos:function(){return h},docs:function(){return d},srcComponents:function(){return f}});var e=t(88867),l=t(7703),o=t(11895),i=t(97458),s=t(2708),d={en:{description:"Chart is used to render charts.",location:"/docs/data/components/chart/chart.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Chart</h1><p class="description">Chart is used to render charts.</p>\n\n<p>Warning: This component only works well with next.13 or later (because of swc issues). If you are using next.12 please use this config in your next.config file</p>\n<pre><code><span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">swcMinify</span><span class="token operator">:</span> fasle<span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Chart<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> Chart <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/chart\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="column">Column<a aria-labelledby="column" class="anchor-link" href="#column" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ChartColumn.tsx"},'<h3 id="bar">Bar<a aria-labelledby="bar" class="anchor-link" href="#bar" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ChartBar.tsx"},'<h3 id="line">Line<a aria-labelledby="line" class="anchor-link" href="#line" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ChartLine.tsx"},'<h3 id="area">Area<a aria-labelledby="area" class="anchor-link" href="#area" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ChartArea.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">data</td>\n<td align="left"><code>Dataset[]</code></td>\n<td align="left">-</td>\n<td align="left">Data set of the chart</td>\n</tr>\n<tr>\n<td align="left">labels</td>\n<td align="left"><code>string[]</code></td>\n<td align="left">-</td>\n<td align="left">List of lables in the chart</td>\n</tr>\n<tr>\n<td align="left">unit</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Unit of the dataset lables</td>\n</tr>\n<tr>\n<td align="left">title</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Display title of the chart</td>\n</tr>\n<tr>\n<td align="left">hideYAxis</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Hide the y-axis of the chart</td>\n</tr>\n<tr>\n<td align="left">hideXAxis</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Hide the x-axis of the chart</td>\n</tr>\n<tr>\n<td align="left">legendPosition</td>\n<td align="left"><code>top</code>|<code>bottom</code>|<code>left</code>|<code>right</code></td>\n<td align="left">false</td>\n<td align="left">Position of the legends</td>\n</tr>\n</tbody></table>\n<p>Type of DataSet includes:</p>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n<th></th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">label</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Name of the dataset</td>\n<td></td>\n</tr>\n<tr>\n<td align="left">data</td>\n<td align="left"><code>number[]</code></td>\n<td align="left">-</td>\n<td align="left">List of value in dataset</td>\n<td></td>\n</tr>\n<tr>\n<td align="left">backgroundColor</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Background color in 1 point of the dataset</td>\n<td></td>\n</tr>\n<tr>\n<td align="left">borderColor</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Border color in 1 point of the dataset</td>\n<td></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Import",level:2,hash:"import",children:[]},{text:"Example",level:2,hash:"example",children:[{text:"Column",level:3,hash:"column"},{text:"Bar",level:3,hash:"bar"},{text:"Line",level:3,hash:"line"},{text:"Area",level:3,hash:"area"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Chart component",headers:{title:"React Chart component",components:["Chart"],hooks:[]}}},h={"ChartColumn.tsx":{module:"./ChartColumn.tsx",raw:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartColumn() {\n  return (\n    <div>\n      <Chart.Column\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Column Chart'\n      />\n\n      {/* <StaticChart.Column\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Column Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartColumn\n",moduleTS:"./ChartColumn.tsx",rawTS:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartColumn() {\n  return (\n    <div>\n      <Chart.Column\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Column Chart'\n      />\n\n      {/* <StaticChart.Column\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Column Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartColumn\n"},"ChartBar.tsx":{module:"./ChartBar.tsx",raw:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartBar() {\n  return (\n    <div>\n      <Chart.Bar\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Bar Chart'\n      />\n\n      {/* <StaticChart.Bar\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Bar Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartBar\n",moduleTS:"./ChartBar.tsx",rawTS:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartBar() {\n  return (\n    <div>\n      <Chart.Bar\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Bar Chart'\n      />\n\n      {/* <StaticChart.Bar\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Bar Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartBar\n"},"ChartLine.tsx":{module:"./ChartLine.tsx",raw:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartLine() {\n  return (\n    <div>\n      <Chart.Line\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Line Chart'\n      />\n\n      {/* <StaticChart.Line\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Line Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartLine\n",moduleTS:"./ChartLine.tsx",rawTS:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartLine() {\n  return (\n    <div>\n      <Chart.Line\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Line Chart'\n      />\n\n      {/* <StaticChart.Line\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Line Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartLine\n"},"ChartArea.tsx":{module:"./ChartArea.tsx",raw:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartArea() {\n  return (\n    <div>\n      <Chart.Area\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Area Chart'\n      />\n\n      {/* <StaticChart.Area\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Area Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartArea\n",moduleTS:"./ChartArea.tsx",rawTS:"import Chart from '@comfortdelgro/react-compass/chart'\n// import {Chart as StaticChart} from '@comfortdelgro/static'\n\nfunction ChartArea() {\n  return (\n    <div>\n      <Chart.Area\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Area Chart'\n      />\n\n      {/* <StaticChart.Area\n        labels={[\n          'January',\n          'February',\n          'March',\n          'April',\n          'May',\n          'June',\n          'July',\n        ]}\n        data={[\n          {\n            label: 'Dataset 1',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n          {\n            label: 'Dataset 2',\n            data: new Array(7)\n              .fill(0)\n              .map(() => Math.floor(Math.random() * 1000)),\n          },\n        ]}\n        title='Area Chart'\n      /> */}\n    </div>\n  )\n}\n\nexport default ChartArea\n"}};h.scope={process:{},import:{"@comfortdelgro/react-compass/chart":o}};var c={"./ChartColumn.tsx":function(){return(0,i.jsx)("div",{children:(0,i.jsx)(o.default.Column,{labels:["January","February","March","April","May","June","July"],data:[{label:"Dataset 1",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})},{label:"Dataset 2",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})}],title:"Column Chart"})})},"./ChartBar.tsx":function(){return(0,i.jsx)("div",{children:(0,i.jsx)(o.default.Bar,{labels:["January","February","March","April","May","June","July"],data:[{label:"Dataset 1",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})},{label:"Dataset 2",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})}],title:"Bar Chart"})})},"./ChartLine.tsx":function(){return(0,i.jsx)("div",{children:(0,i.jsx)(o.default.Line,{labels:["January","February","March","April","May","June","July"],data:[{label:"Dataset 1",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})},{label:"Dataset 2",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})}],title:"Line Chart"})})},"./ChartArea.tsx":function(){return(0,i.jsx)("div",{children:(0,i.jsx)(o.default.Area,{labels:["January","February","March","April","May","June","July"],data:[{label:"Dataset 1",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})},{label:"Dataset 2",data:Array(7).fill(0).map(function(){return Math.floor(1e3*Math.random())})}],title:"Area Chart"})})}},f={"components/common/ComponentLinkHeader.tsx":s.Z};function m(){return(0,i.jsx)(l.Z,(0,e.Z)({},r))}},46428:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/chart",function(){return t(5539)}])}},function(n){n.O(0,[4308,5687,1055,2547,7703,9774,2888,179],function(){return n(n.s=46428)}),_N_E=n.O()}]);