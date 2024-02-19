"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9727],{3936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(5893),o=r(1151);const i={title:"@modify"},s=void 0,a={id:"operators/modify",title:"@modify",description:"The @modify operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:",source:"@site/docs/operators/modify.md",sourceDirName:"operators",slug:"/operators/modify",permalink:"/docs/operators/modify",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/operators/modify.md",tags:[],version:"current",frontMatter:{title:"@modify"},sidebar:"tutorialSidebar",previous:{title:"@http",permalink:"/docs/operators/http"},next:{title:"@server",permalink:"/docs/operators/server"}},d={},c=[{value:"name",id:"name",level:2},{value:"omit",id:"omit",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"@modify"})," operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here's how you can use this operator:"]}),"\n",(0,n.jsx)(t.h2,{id:"name",children:"name"}),"\n",(0,n.jsxs)(t.p,{children:["You can rename a field or a node in your GraphQL schema using the ",(0,n.jsx)(t.code,{children:"name"})," argument in the ",(0,n.jsx)(t.code,{children:"@modify"})," operator. This can be helpful when the field name in your underlying data source doesn't match the desired field name in your schema. For instance:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type User {\n  id: Int! @modify(name: "userId")\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'@modify(name: "userId")'})," informs GraphQL to present the field known as ",(0,n.jsx)(t.code,{children:"id"})," in the underlying data source as ",(0,n.jsx)(t.code,{children:"userId"})," in your schema."]}),"\n",(0,n.jsx)(t.h2,{id:"omit",children:"omit"}),"\n",(0,n.jsxs)(t.p,{children:["You can exclude a field or a node from your GraphQL schema using the ",(0,n.jsx)(t.code,{children:"omit"})," argument in the ",(0,n.jsx)(t.code,{children:"@modify"})," operator. This can be useful if you want to keep certain data hidden from the client. For instance:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-graphql",metastring:"showLineNumbers",children:"type User {\n  id: Int! @modify(omit: true)\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@modify(omit: true)"})," instructs GraphQL to exclude the ",(0,n.jsx)(t.code,{children:"id"})," field from the schema, making it inaccessible to the client."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var n=r(7294);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);