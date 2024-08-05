(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1543],{36080:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o={};n.r(o),n.d(o,{demoComponents:function(){return s},demos:function(){return l},docs:function(){return i},srcComponents:function(){return d}});var a=n(26098),r=n(3072),i={description:"A wrapper around Intl.DateTimeFormat that fixes various browser bugs, and polyfills new features.",location:"/docs/data/utilities/date/date-formatter.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>DateFormatter</h1><p class="description">A wrapper around Intl.DateTimeFormat that fixes various browser bugs, and polyfills new features.</p>\n\n\n<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p><code>DateFormatter</code> is a wrapper around the native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat" target="_blank" rel="noopener nofollow">Intl.DateTimeFormat</a> API. It exposes the same API, but works around several browser bugs and provides polyfills for newer features. These are currently:</p>\n<ul>\n<li>A simple polyfill for the <code>formatRange</code> and <code>formatRangeToParts</code> methods for older browsers.</li>\n<li>A workaround for a bug involving the <code>hour12</code> option in <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=1045791" target="_blank" rel="noopener nofollow">Chrome</a> and and the <a href="https://github.com/tc39/ecma402/issues/402" target="_blank" rel="noopener nofollow">ECMAScript spec</a>.</li>\n<li>A workaround for a bug involving the <code>hourCycle</code> option in <a href="https://bugs.webkit.org/show_bug.cgi?id=229313" target="_blank" rel="noopener nofollow">Safari</a>.</li>\n</ul>\n<p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat" target="_blank" rel="noopener nofollow">MDN docs</a> for full details on how to use the API.</p>\n<h2 id="properties-amp-methods">Properties &amp; Methods<a aria-labelledby="properties-amp-methods" class="anchor-link" href="#properties-amp-methods" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">constructor</td>\n<td align="left"><code>(locale: string, options: Intl.DateTimeFormatOptions): void</code></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">format</td>\n<td align="left"><code>(value: Date): string</code></td>\n<td align="left">Returns a new CalendarDateTime with the given duration added to it.</td>\n</tr>\n<tr>\n<td align="left">formatToParts</td>\n<td align="left"><code>(value: Date): Intl.DateTimeFormatPart[]</code></td>\n<td align="left">Returns a new CalendarDateTime with the given duration subtracted from it.</td>\n</tr>\n<tr>\n<td align="left">formatRange</td>\n<td align="left"><code>(start: Date, end: Date): string	</code></td>\n<td align="left">Returns a new CalendarDateTime with the given fields set to the provided values. Other fields will be constrained accordingly.</td>\n</tr>\n<tr>\n<td align="left">formatRangeToParts</td>\n<td align="left"><code>(start: Date, end: Date): DateRangeFormatPart[]</code></td>\n<td align="left">Returns a new CalendarDateTime with the given field adjusted by a specified amount. When the resulting value reaches the limits of the field, it wraps around.</td>\n</tr>\n<tr>\n<td align="left">resolvedOptions</td>\n<td align="left"><code>(): ResolvedDateTimeFormatOptions</code></td>\n<td align="left">Converts the date to a native JavaScript Date object in the given time zone.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[]},{text:"Properties &amp; Methods",level:2,hash:"properties-amp-methods",children:[]}],title:"DateFormatter",headers:{title:"DateFormatter",components:[],hooks:[]}},l={};l.scope={process:{},import:{}};var s={},d={},c=n(31549);function h(){return(0,c.jsx)(r.Z,(0,a.Z)({},o))}},40156:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/date/date-formatter",function(){return n(36080)}])}},function(e){e.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return e(e.s=40156)}),_N_E=e.O()}]);