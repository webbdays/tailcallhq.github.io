"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7527],{4010:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>h,toc:()=>l});var n=s(5893),a=s(1151);const t={title:"@graphQL",sidebar_position:4},i=void 0,h={id:"guides/operators/graphql",title:"@graphQL",description:"@graphQL",source:"@site/docs/guides/operators/graphql.md",sourceDirName:"guides/operators",slug:"/guides/operators/graphql",permalink:"/docs/guides/operators/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/tailcallhq/tailcallhq.github.io/tree/develop/docs/guides/operators/graphql.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"@graphQL",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"@http",permalink:"/docs/guides/operators/http"},next:{title:"@modify",permalink:"/docs/guides/operators/modify"}},o={},l=[{value:"@graphQL",id:"graphql",level:2},{value:"baseURL",id:"baseurl",level:3},{value:"name",id:"name",level:3},{value:"args",id:"args",level:3},{value:"headers",id:"headers",level:3},{value:"batch",id:"batch",level:3}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"graphql",children:"@graphQL"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.strong,{children:"@graphQL"})," operator allows to specify GraphQL API server request to fetch data from."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @graphQL(name: "userList")\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["In this example, the ",(0,n.jsx)(r.code,{children:"@graphQL"})," operator is used to fetch list of users from the GraphQL API upstream. The ",(0,n.jsx)(r.a,{href:"#name",children:"name"})," argument is used to specify the name of the root field on the upstream server. The inner fields from the ",(0,n.jsx)(r.code,{children:"User"})," type to request are inferred from the upcoming request to the Tailcall server. The operation type of the query is inferred from the Tailcall config based on inside which operation type the ",(0,n.jsx)(r.code,{children:"@graphQL"})," operator is used."]}),"\n",(0,n.jsx)(r.p,{children:"For next request with the config above:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:"query {\n  users {\n    id\n    name\n  }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"Tailcall will request next query for the upstream:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:"query {\n  userList {\n    id\n    name\n  }\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"baseurl",children:"baseURL"}),"\n",(0,n.jsxs)(r.p,{children:["This refers to the base URL of the API. If not specified, the default base URL is the one specified in the ",(0,n.jsx)(r.a,{href:"#upstream",children:"@upstream"})," operator."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @graphQL(name: "users", baseURL: "https://graphqlzero.almansi.me/api")\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"name",children:"name"}),"\n",(0,n.jsx)(r.p,{children:"Name of the root field on the upstream to request data from. For example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  users: [User] @graphQL(name: "userList")\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["When Tailcall receives query for ",(0,n.jsx)(r.code,{children:"users"})," field it will request query for ",(0,n.jsx)(r.code,{children:"userList"})," from the upstream."]}),"\n",(0,n.jsx)(r.h3,{id:"args",children:"args"}),"\n",(0,n.jsx)(r.p,{children:"Named arguments for the requested field. For example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Query {\n  user: User @graphQL(name: "user", args: [{key: "id", value: "{{value.userId}}"}])\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"Will request next query from the upstream for first user's name:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:"query {\n  user(id: 1) {\n    name\n  }\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"headers",children:"headers"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"headers"})," parameter allows you to customize the headers of the GraphQL request made by the ",(0,n.jsx)(r.code,{children:"@graphQL"})," operator. It is used by specifying a key-value map of header names and their values."]}),"\n",(0,n.jsx)(r.p,{children:"For instance:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'type Mutation {\n  users: User @graphQL(name: "users", headers: [{key: "X-Server", value: "Tailcall"}])\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["In this example, a request to ",(0,n.jsx)(r.code,{children:"/users"})," will include an additional HTTP header ",(0,n.jsx)(r.code,{children:"X-Server"})," with the value ",(0,n.jsx)(r.code,{children:"Tailcall"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"batch",children:"batch"}),"\n",(0,n.jsxs)(r.p,{children:["In case upstream GraphQL server supports request batching we can specify argument ",(0,n.jsx)(r.code,{children:"batch"})," to batch several requests to single upstream into single batch request. For example:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-graphql",metastring:"showLineNumbers",children:'schema @upstream(batch: {maxSize: 1000, delay: 10, headers: ["X-Server", "Authorization"]}) {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  users: [User] @graphQL(name: "users", batch: true)\n  posts: [Post] @graphQL(name: "posts", batch: true)\n}\n'})}),"\n",(0,n.jsxs)(r.p,{children:["Make sure you have also specified batch settings to the ",(0,n.jsx)(r.code,{children:"@upstream"})," and to the ",(0,n.jsx)(r.code,{children:"@graphQL"})," operator."]})]})}function c(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>h,a:()=>i});var n=s(7294);const a={},t=n.createContext(a);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);