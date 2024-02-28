"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Getting Started","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Introduction","href":"/docs/","docId":"getting_started/introduction","unlisted":false},{"type":"link","label":"Configuration","href":"/docs/getting_started/configuration","docId":"getting_started/configuration","unlisted":false},{"type":"link","label":"Installation","href":"/docs/getting_started","docId":"getting_started/installation","unlisted":false},{"type":"link","label":"Launch","href":"/docs/getting_started/launch","docId":"getting_started/launch","unlisted":false},{"type":"link","label":"Execute","href":"/docs/getting_started/execute","docId":"getting_started/execute","unlisted":false}]},{"type":"category","label":"Guides","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"CLI","href":"/docs/guides/cli","docId":"guides/cli","unlisted":false},{"type":"link","label":"Tuning Client for Performance","href":"/docs/guides/client-tuning","docId":"guides/client-tuning","unlisted":false},{"type":"link","label":"Context","href":"/docs/guides/context","docId":"guides/context","unlisted":false},{"type":"link","label":"Environment Variables","href":"/docs/guides/environment-variables","docId":"guides/environment-variables","unlisted":false},{"type":"link","label":"GraphQL on gRPC","href":"/docs/guides/grpc","docId":"guides/grpc","unlisted":false},{"type":"link","label":"Logging","href":"/docs/guides/logging","docId":"guides/logging","unlisted":false},{"type":"link","label":"Tackling N + 1","href":"/docs/guides/n+1","docId":"guides/n+1","unlisted":false},{"type":"link","label":"Operator Composition","href":"/docs/guides/operator-composition","docId":"guides/operator-composition","unlisted":false},{"type":"link","label":"Watch Mode","href":"/docs/guides/watch-mode","docId":"guides/watch-mode","unlisted":false}]},{"type":"category","label":"Operators","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"@addField","href":"/docs/operators/add-field","docId":"operators/add-field","unlisted":false},{"type":"link","label":"@cache","href":"/docs/operators/cache","docId":"operators/cache","unlisted":false},{"type":"link","label":"@const","href":"/docs/operators/const","docId":"operators/const","unlisted":false},{"type":"link","label":"@graphQL","href":"/docs/operators/graphql","docId":"operators/graphql","unlisted":false},{"type":"link","label":"@grpc","href":"/docs/operators/grpc","docId":"operators/grpc","unlisted":false},{"type":"link","label":"@http","href":"/docs/operators/http","docId":"operators/http","unlisted":false},{"type":"link","label":"@modify","href":"/docs/operators/modify","docId":"operators/modify","unlisted":false},{"type":"link","label":"@omit","href":"/docs/operators/omit","docId":"operators/omit","unlisted":false},{"type":"link","label":"@server","href":"/docs/operators/server","docId":"operators/server","unlisted":false},{"type":"link","label":"@upstream","href":"/docs/operators/upstream","docId":"operators/upstream","unlisted":false}],"href":"/docs/operators/"}]},"docs":{"getting_started/configuration":{"id":"getting_started/configuration","title":"Configuration","description":"For our first example, we are going to compose a GraphQL schema from the REST APIs at https://jsonplaceholder.typicode.com, a free online REST API with some fake data.","sidebar":"tutorialSidebar"},"getting_started/execute":{"id":"getting_started/execute","title":"Execute","description":"1. Open a web browser and go to http8000. This should load the GraphiQL interface.","sidebar":"tutorialSidebar"},"getting_started/installation":{"id":"getting_started/installation","title":"Installation","description":"You can install the latest version - , by using NPM.","sidebar":"tutorialSidebar"},"getting_started/introduction":{"id":"getting_started/introduction","title":"Introduction","description":"Good APIs craft a broad spectrum of functionalities. Yet, the broader their scope, the more they diverge from being the perfect fit for any specific use case. This fundamental discrepancy \u2014 the impedance mismatch between the general capabilities of an API and the precise needs of a particular scenario \u2014 amplifies the necessity for an orchestration layer. Such a layer adeptly bridges this gap, tailor-fitting generic APIs to meet exact requirements with finesse. Tailcall stands at the forefront of this innovation, seamlessly transforming the way APIs are integrated and interacted with.","sidebar":"tutorialSidebar"},"getting_started/launch":{"id":"getting_started/launch","title":"Launch","description":"Now, run the following command to start the server with the full path to the file that you created earlier.","sidebar":"tutorialSidebar"},"guides/cli":{"id":"guides/cli","title":"CLI","description":"The TailCall CLI (Command Line Interface) is an essential part of the TailCall toolkit. It allows developers to manage and optimize GraphQL configurations directly from the command line. Each command within the CLI handles a specific aspect of GraphQL composition. Below, you\'ll find a detailed overview of each command, along with its options and usage examples.","sidebar":"tutorialSidebar"},"guides/client-tuning":{"id":"guides/client-tuning","title":"Tuning Client for Performance","description":"HTTP (Hypertext Transfer Protocol)","sidebar":"tutorialSidebar"},"guides/context":{"id":"guides/context","title":"Context","description":"In any GraphQL framework, including Tailcall, Context serves as a fundamental mechanism for sharing data across different parts of your application. This adaptable object becomes available to every resolver in GraphQL.","sidebar":"tutorialSidebar"},"guides/environment-variables":{"id":"guides/environment-variables","title":"Environment Variables","description":"Environment variables are key-value pairs stored in our operating systems. Most of them come by default, and we can also create our own. They store information used by our operating system or other programs. For example, the PATH variable stores a list of directories the operating system searches when we run a command in the terminal. The HOME variable stores the path to our home directory.","sidebar":"tutorialSidebar"},"guides/grpc":{"id":"guides/grpc","title":"GraphQL on gRPC","description":"Building a GraphQL API on top of gRPC endpoints.","sidebar":"tutorialSidebar"},"guides/logging":{"id":"guides/logging","title":"Logging","description":"Logging acts as an essential tool for obtaining insights into code execution and addressing software development challenges. You can configure the verbosity of logs via log levels. Use TAILCALLLOGLEVEL or TCLOGLEVEL environment variables to set the application\'s log level. The available log levels include:","sidebar":"tutorialSidebar"},"guides/n+1":{"id":"guides/n+1","title":"Tackling N + 1","description":"The N+1 problem is a pervasive and critical issue in application development that occurs when an application ends up issuing a large number of downstream requests, for a single request from upstream. Let\'s understand with an example:","sidebar":"tutorialSidebar"},"guides/operator-composition":{"id":"guides/operator-composition","title":"Operator Composition","description":"You can combine operators to create new and powerful transformations.","sidebar":"tutorialSidebar"},"guides/watch-mode":{"id":"guides/watch-mode","title":"Watch Mode","description":"Developers often find themselves in situations where they need to run a server in watch mode to streamline the development process. This guide will introduce you to [entr], a versatile file-watcher tool, and how to run your server in watch mode with it. We\'ll also touch on the installation process and suggest some best practices to optimize your workflow.","sidebar":"tutorialSidebar"},"operators/add-field":{"id":"operators/add-field","title":"@addField","description":"The @addField operator simplifies data structures and queries by adding a field that inline or flattens a nested field or node within your schema. It modifies the schema and the data transformation process, making nested data more accessible and straightforward to present.","sidebar":"tutorialSidebar"},"operators/cache":{"id":"operators/cache","title":"@cache","description":"The @cache directive provides a protocol agnostic mechanism for caching the results of fields within a GraphQL schema. Like any other cache implementation, this feature is useful for optimizing performance by reducing the need to fetch data that doesn\'t change frequently.","sidebar":"tutorialSidebar"},"operators/const":{"id":"operators/const","title":"@const","description":"The @const directive in GraphQL is a powerful tool for embedding data directly into your schema, offering two primary functionalities:","sidebar":"tutorialSidebar"},"operators/graphql":{"id":"operators/graphql","title":"@graphQL","description":"@graphQL","sidebar":"tutorialSidebar"},"operators/grpc":{"id":"operators/grpc","title":"@grpc","description":"The @grpc directive enables the resolution of GraphQL fields via gRPC services. Below is an illustrative example of how to apply this directive within a GraphQL schema:","sidebar":"tutorialSidebar"},"operators/http":{"id":"operators/http","title":"@http","description":"The @http operator indicates a field or node relies on a REST API. For example:","sidebar":"tutorialSidebar"},"operators/index":{"id":"operators/index","title":"Operators","description":"Tailcall DSL builds on your existing GraphQL knowledge by allowing the addition of some custom operators. These operators provide powerful compile time guarantees to ensure your API composition is tight and robust. The system automatically generates highly optimized resolver logic for your types using the operator information.","sidebar":"tutorialSidebar"},"operators/modify":{"id":"operators/modify","title":"@modify","description":"The @modify operator in GraphQL provides the flexibility to alter the attributes of a field or a node within your GraphQL schema. Here\'s how you can use this operator:","sidebar":"tutorialSidebar"},"operators/omit":{"id":"operators/omit","title":"@omit","description":"Within a GraphQL schema, the @omit operator excludes fields or nodes from the generated schema, making them inaccessible through the GraphQL API. This operator is useful for hiding sensitive information or simplifying your API by removing unnecessary fields.","sidebar":"tutorialSidebar"},"operators/server":{"id":"operators/server","title":"@server","description":"The @server directive, applied at the schema level, provides a comprehensive set of server configurations. It dictates server behavior and helps tune Tailcall for a range of use-cases.","sidebar":"tutorialSidebar"},"operators/upstream":{"id":"operators/upstream","title":"@upstream","description":"The upstream directive enables control over specific aspects of the upstream server connection, including settings such as connection timeouts, keep-alive intervals, and more. The system applies default values if you do not specify them.","sidebar":"tutorialSidebar"}}}')}}]);