"use strict";(self.webpackChunktailcall_in=self.webpackChunktailcall_in||[]).push([[2267],{3905:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>g});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),c=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},i=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),m=c(r),g=n,d=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return r?o.createElement(d,s(s({ref:e},i),{},{components:r})):o.createElement(d,s({ref:e},i))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:n,s[1]=u;for(var c=2;c<a;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8642:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={slug:"mdx-blog-post",title:"MDX Blog Post",authors:["tusharmath"],tags:["docusaurus"]},s=void 0,u={permalink:"/blog/mdx-blog-post",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx",source:"@site/blog/2021-08-01-mdx-blog-post.mdx",title:"MDX Blog Post",description:"Blog posts support Docusaurus Markdown features, such as MDX.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.175,hasTruncateMarker:!1,authors:[{name:"Tushar Mathur",title:"CEO and First Engineer",url:"https://github.com/tusharmath",imageURL:"https://github.com/tusharmath.png",key:"tusharmath"}],frontMatter:{slug:"mdx-blog-post",title:"MDX Blog Post",authors:["tusharmath"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/blog/long-blog-post"}},l={authorsImageUrls:[void 0]},c=[],i={toc:c};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Blog posts support ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features"},"Docusaurus Markdown features"),", such as ",(0,n.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use the power of React to create interactive blog posts."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,n.kt)("button",{onClick:()=>alert("button clicked!")},"Click me!")))}p.isMDXComponent=!0}}]);