(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9725],{20241:function(e,n,a){"use strict";a.d(n,{Z:function(){return c}});var t,l,o=a(38443),d=a(66481),r=a.n(d),s=a(97458);function c(){return(0,s.jsxs)(o.Flexbox,{css:{marginBottom:"$4"},children:[(0,s.jsx)(r(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,s.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,s.jsx)(r(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:l||(l=(0,s.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},41812:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return k}});var t,l={};a.r(l),a.d(l,{demoComponents:function(){return y},demos:function(){return C},docs:function(){return x},srcComponents:function(){return b}});var o=a(23577),d=a(73440),r=a(38443),s=a(52983),c=a.t(s,2),i=a(9867),m=a(97458),p=r.Calendar.I18N.useDateFormatter,u=r.Calendar.InternationalizedDate,g=u.getLocalTimeZone,f=u.parseDate,h=u.today,v=a(20241),x={en:{description:"Calendars display a grid of days in one or more months and allow users to select a single date.",location:"/docs/data/components/calendar/calendar.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Calendar</h1><p class="description">Calendars display a grid of days in one or more months and allow users to select a single date.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Calendar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Calendar <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/calendar\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="calendar">Calendar<a aria-labelledby="calendar" class="anchor-link" href="#calendar" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"Calendar.tsx"},'<h3 id="validation-calendar">Validation Calendar<a aria-labelledby="validation-calendar" class="anchor-link" href="#validation-calendar" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"Validation.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">minValue</td>\n<td align="left"><code>DateValue</code></td>\n<td align="left"></td>\n<td align="left">The minimum allowed date that a user may select.</td>\n</tr>\n<tr>\n<td align="left">maxValue</td>\n<td align="left"><code>DateValue</code></td>\n<td align="left"></td>\n<td align="left">The maximum allowed date that a user may select.</td>\n</tr>\n<tr>\n<td align="left">isReadOnly</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar value is immutable.</td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar is disabled.</td>\n</tr>\n<tr>\n<td align="left">hasFooter</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar footer is shown.</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>DateValue || null</code></td>\n<td align="left"></td>\n<td align="left">The current value (controlled).</td>\n</tr>\n<tr>\n<td align="left">defaultValue</td>\n<td align="left"><code>DateValue</code></td>\n<td align="left"></td>\n<td align="left">The default value (uncontrolled).</td>\n</tr>\n<tr>\n<td align="left">onChange</td>\n<td align="left"><code>(e: DateValue || null) =&gt; void</code></td>\n<td align="left"></td>\n<td align="left">The default value (uncontrolled).</td>\n</tr>\n<tr>\n<td align="left">isDateUnavailable</td>\n<td align="left"><code>(date: DateValue) =&gt; boolean</code></td>\n<td align="left"></td>\n<td align="left">Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Calendar",level:3,hash:"calendar"},{text:"Validation Calendar",level:3,hash:"validation-calendar"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Calendar component",headers:{title:"React Calendar component",components:["Calendar"],hooks:[]}}},C={"Calendar.tsx":{module:"./Calendar.tsx",raw:"import {Calendar, CalendarProps, Column} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst {useDateFormatter} = Calendar.I18N\nconst {getLocalTimeZone, parseDate, today} = Calendar.InternationalizedDate\n\nconst Variants: React.FC = () => {\n  const [date, setDate] = React.useState<CalendarProps>(\n    parseDate(today(getLocalTimeZone()).toString()),\n  )\n  const formatter = useDateFormatter({dateStyle: 'full'})\n\n  return (\n    <Column>\n      <p>\n        <b>Selected date:</b>\n        <span style={{marginLeft: '4px'}}>\n          {date\n            ? formatter.format(date.toDate(getLocalTimeZone()))\n            : 'Invalid date'}\n        </span>\n      </p>\n      <Calendar\n        value={date}\n        // maxValue={today(getLocalTimeZone())}\n        minValue={today(getLocalTimeZone())}\n        onChange={(e) => {\n          setDate(e)\n        }}\n        hasFooter\n      />\n    </Column>\n  )\n}\n\nexport default Variants\n",jsxPreview:"<Calendar\r\n    value={date}\r\n    // maxValue={today(getLocalTimeZone())}\r\n    minValue={today(getLocalTimeZone())}\r\n    onChange={(e) => {\r\n    setDate(e)\r\n    }}\r\n    hasFooter\r\n/>",moduleTS:"./Calendar.tsx",rawTS:"import {Calendar, CalendarProps, Column} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst {useDateFormatter} = Calendar.I18N\nconst {getLocalTimeZone, parseDate, today} = Calendar.InternationalizedDate\n\nconst Variants: React.FC = () => {\n  const [date, setDate] = React.useState<CalendarProps>(\n    parseDate(today(getLocalTimeZone()).toString()),\n  )\n  const formatter = useDateFormatter({dateStyle: 'full'})\n\n  return (\n    <Column>\n      <p>\n        <b>Selected date:</b>\n        <span style={{marginLeft: '4px'}}>\n          {date\n            ? formatter.format(date.toDate(getLocalTimeZone()))\n            : 'Invalid date'}\n        </span>\n      </p>\n      <Calendar\n        value={date}\n        // maxValue={today(getLocalTimeZone())}\n        minValue={today(getLocalTimeZone())}\n        onChange={(e) => {\n          setDate(e)\n        }}\n        hasFooter\n      />\n    </Column>\n  )\n}\n\nexport default Variants\n"},"Validation.tsx":{module:"./Validation.tsx",raw:"import {Calendar, isWeekend, useLocale} from '@comfortdelgro/react-compass'\n\nfunction ValidatedCalendar() {\n  const {locale} = useLocale()\n  return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />\n}\n\nexport default ValidatedCalendar\n",jsxPreview:"import {Calendar, isWeekend, useLocale} from '@comfortdelgro/react-compass'\r\n\r\nfunction ValidatedCalendar() {\r\n  const {locale} = useLocale()\r\n  return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />\r\n}\r\n\r\nexport default ValidatedCalendar",moduleTS:"./Validation.tsx",rawTS:"import {Calendar, isWeekend, useLocale} from '@comfortdelgro/react-compass'\n\nfunction ValidatedCalendar() {\n  const {locale} = useLocale()\n  return <Calendar isDateUnavailable={(date) => isWeekend(date, locale)} />\n}\n\nexport default ValidatedCalendar\n"}};C.scope={process:{},import:{"@comfortdelgro/react-compass":r,react:c}};var y={"./Calendar.tsx":function(){var e=s.useState(f(h(g()).toString())),n=(0,i.Z)(e,2),a=n[0],l=n[1],o=p({dateStyle:"full"});return(0,m.jsxs)(r.Column,{children:[(0,m.jsxs)("p",{children:[t||(t=(0,m.jsx)("b",{children:"Selected date:"})),(0,m.jsx)("span",{style:{marginLeft:"4px"},children:a?o.format(a.toDate(g())):"Invalid date"})]}),(0,m.jsx)(r.Calendar,{value:a,minValue:h(g()),onChange:function(e){l(e)},hasFooter:!0})]})},"./Validation.tsx":function(){var e=(0,r.useLocale)().locale;return(0,m.jsx)(r.Calendar,{isDateUnavailable:function(n){return(0,r.isWeekend)(n,e)}})}},b={"components/common/ComponentLinkHeader.tsx":v.Z};function k(){return(0,m.jsx)(d.Z,(0,o.Z)({},l))}},81945:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/calendar",function(){return a(41812)}])}},function(e){e.O(0,[4308,8332,1511,4591,3440,9774,2888,179],function(){return e(e.s=81945)}),_N_E=e.O()}]);