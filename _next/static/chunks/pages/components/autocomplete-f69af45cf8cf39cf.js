(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9054],{99223:function(e,n,o){"use strict";o.d(n,{Z:function(){return i}});var t,a,s=o(15393),l=o(92274),c=o.n(l),r=o(97458);function i(){return(0,r.jsxs)(s.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,r.jsx)(c(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,r.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,r.jsx)(c(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,r.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},99813:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return y}});var t={};o.r(t),o.d(t,{demoComponents:function(){return b},demos:function(){return g},docs:function(){return w},srcComponents:function(){return S}});var a=o(26098),s=o(916),l=o(15393),c=o(52983),r=o.t(c,2),i=o(50436),u=o(9555),d=o(37601),h=o(73804),p=o(28339),m=o.n(p),f=o(97458),v=o(99223),w={en:{description:"Auto-complete is a text input with a list of suggestions that users can select from.",location:"/docs/data/components/autocomplete/autocomplete.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Autocomplete</h1><p class="description">Auto-complete is a text input with a list of suggestions that users can select from.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>AutoComplete<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="combo-box">Combo box<a aria-labelledby="combo-box" class="anchor-link" href="#combo-box" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>The value must be chosen from a predefined set of allowed values.</p>\n',{demo:"ComboBox.tsx"}],toc:[{text:"Combo box",level:2,hash:"combo-box",children:[]}],title:"React Autocomplete component",headers:{title:"React Autocomplete component",components:["TextField"],hooks:[]}}},g={"ComboBox.tsx":{module:"./ComboBox.tsx",raw:"import {AutoComplete, Column, SearchField} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst FullFeatured: React.FC = () => {\n  const [inputValue, setInputValue] = React.useState('')\n  const [searchResults, setSearchResults] = React.useState<string[]>([])\n\n  const onSearchHandler = async (value: string): Promise<void> => {\n    try {\n      // Simulating API call with a delay\n      await new Promise((resolve) => setTimeout(resolve, 100)) // Delay of 1 second (adjust as needed)\n\n      // Simulating API response\n      const Animals = [\n        'Lion',\n        'Giraffe',\n        'Elephant',\n        'Penguin',\n        'Dolphin',\n        'Koala',\n        'Cheetah',\n        'Kangaroo',\n        'Octopus',\n        'Gorilla',\n        'Tiger',\n        'Zebra',\n        'Hippopotamus',\n        'Panda',\n        'Snake',\n      ]\n      const filteredAnimals = Animals.filter((animal) =>\n        animal.toLowerCase().includes(value.toLowerCase()),\n      )\n      setSearchResults([...filteredAnimals])\n      console.log('API call successful: ', filteredAnimals)\n    } catch (error) {\n      console.error('Error during API call:', error)\n    }\n  }\n\n  const onSelectHandler = (value: string): void => {\n    setInputValue(value)\n    // You can do anything you want with the selected value here\n    console.log('Selected value: ', value)\n  }\n\n  return (\n    <Column>\n      <AutoComplete\n        searchedValue={inputValue} // This is the value that will be passed to the onSearch callback with a debounce (delay)\n        debounce={300} // Fire onSearch after 300ms of user inactivity\n        onSearch={(value) => onSearchHandler(value)} // This is where you would make your API call\n        options={searchResults} // This is the list of options that will be displayed in the dropdown\n        onSelect={(value) => onSelectHandler(value)} // This is the callback that will be called when user selects an option from the dropdown\n        notFoundContent='No data found' // This is the message that will be displayed when no options are found\n      >\n        {/* You can put our own input element here instead of using our SearchField component */}\n        <SearchField\n          placeholder='Search'\n          onChange={(newValue) => setInputValue(newValue)}\n          value={inputValue}\n          css={{width: '10rem'}}\n        />\n      </AutoComplete>\n    </Column>\n  )\n}\n\nexport default FullFeatured\n",jsxPreview:"<AutoComplete\n  searchedValue={inputValue}\n  debounce={300}\n  onSearch={(value) => onSearchHandler(value)}\n  options={searchResults}\n  onSelect={(value) => onSelectHandler(value)}\n>\n  <SearchField\n    placeholder='Search'\n    onChange={(newValue) => setInputValue(newValue)}\n    value={inputValue}\n    css={{width: '10rem'}}\n  />\n</AutoComplete>",moduleTS:"./ComboBox.tsx",rawTS:"import {AutoComplete, Column, SearchField} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst FullFeatured: React.FC = () => {\n  const [inputValue, setInputValue] = React.useState('')\n  const [searchResults, setSearchResults] = React.useState<string[]>([])\n\n  const onSearchHandler = async (value: string): Promise<void> => {\n    try {\n      // Simulating API call with a delay\n      await new Promise((resolve) => setTimeout(resolve, 100)) // Delay of 1 second (adjust as needed)\n\n      // Simulating API response\n      const Animals = [\n        'Lion',\n        'Giraffe',\n        'Elephant',\n        'Penguin',\n        'Dolphin',\n        'Koala',\n        'Cheetah',\n        'Kangaroo',\n        'Octopus',\n        'Gorilla',\n        'Tiger',\n        'Zebra',\n        'Hippopotamus',\n        'Panda',\n        'Snake',\n      ]\n      const filteredAnimals = Animals.filter((animal) =>\n        animal.toLowerCase().includes(value.toLowerCase()),\n      )\n      setSearchResults([...filteredAnimals])\n      console.log('API call successful: ', filteredAnimals)\n    } catch (error) {\n      console.error('Error during API call:', error)\n    }\n  }\n\n  const onSelectHandler = (value: string): void => {\n    setInputValue(value)\n    // You can do anything you want with the selected value here\n    console.log('Selected value: ', value)\n  }\n\n  return (\n    <Column>\n      <AutoComplete\n        searchedValue={inputValue} // This is the value that will be passed to the onSearch callback with a debounce (delay)\n        debounce={300} // Fire onSearch after 300ms of user inactivity\n        onSearch={(value) => onSearchHandler(value)} // This is where you would make your API call\n        options={searchResults} // This is the list of options that will be displayed in the dropdown\n        onSelect={(value) => onSelectHandler(value)} // This is the callback that will be called when user selects an option from the dropdown\n        notFoundContent='No data found' // This is the message that will be displayed when no options are found\n      >\n        {/* You can put our own input element here instead of using our SearchField component */}\n        <SearchField\n          placeholder='Search'\n          onChange={(newValue) => setInputValue(newValue)}\n          value={inputValue}\n          css={{width: '10rem'}}\n        />\n      </AutoComplete>\n    </Column>\n  )\n}\n\nexport default FullFeatured\n"}};g.scope={process:{},import:{"@comfortdelgro/react-compass":l,react:r}};var b={"./ComboBox.tsx":function(){var e,n=c.useState(""),o=(0,h.Z)(n,2),t=o[0],a=o[1],s=c.useState([]),r=(0,h.Z)(s,2),p=r[0],v=r[1],w=(e=(0,d.Z)((0,i.Z)().mark(function e(n){var o;return(0,i.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new(m())(function(e){return setTimeout(e,100)});case 3:o=["Lion","Giraffe","Elephant","Penguin","Dolphin","Koala","Cheetah","Kangaroo","Octopus","Gorilla","Tiger","Zebra","Hippopotamus","Panda","Snake"].filter(function(e){return e.toLowerCase().includes(n.toLowerCase())}),v((0,u.Z)(o)),console.log("API call successful: ",o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error during API call:",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(n){return e.apply(this,arguments)}),g=function(e){a(e),console.log("Selected value: ",e)};return(0,f.jsx)(l.Column,{children:(0,f.jsx)(l.AutoComplete,{searchedValue:t,debounce:300,onSearch:function(e){return w(e)},options:p,onSelect:function(e){return g(e)},notFoundContent:"No data found",children:(0,f.jsx)(l.SearchField,{placeholder:"Search",onChange:function(e){return a(e)},value:t,css:{width:"10rem"}})})})}},S={"components/common/ComponentLinkHeader.tsx":v.Z};function y(){return(0,f.jsx)(s.Z,(0,a.Z)({},t))}},27390:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/autocomplete",function(){return o(99813)}])}},function(e){e.O(0,[4308,6555,47,916,9774,2888,179],function(){return e(e.s=27390)}),_N_E=e.O()}]);