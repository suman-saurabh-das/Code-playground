# Namaste React - Akshay Saini

### Episode 01 - Inception - Creating a basic react-app.

<details>
<summary>Notes</summary>

  [01] What is emmet ?
  
    • Emmet is a popular plugin for text editors like Visual Studio Code, Sublime Text, and Atom that enhances HTML and CSS coding efficiency through abbreviations. Key features include:
      ○ Abbreviation Expansion: Short codes expand into complete HTML/CSS structures.
      ○ Custom Snippets: Users can create personalized snippets.
      ○ Dynamic Abbreviations: Supports dynamic element naming and repetition.
      ○ Built-in Support: Available for many editors, with Visual Studio Code having it built-in.
  
  [02] What is the difference between a Library and Framework ?
  
    • The difference between a library and a framework lies in control and structure.
      
    Library -
    • Definition - A set of tools and functions you call as needed, giving you control over the application flow.
    • Example - React is a library for building UI's, where you manage component structure and state.
      ○ Libraries give you control of the app flow.
      ○ Libraries are flexible.
      ○ Libraries integrate into various parts.

    Framework -
    • Definition - Provides a structured architecture and controls the application flow, calling your code at specific points.
    • Example - Next.js is a framework built on React that dictates file structure, routing, and rendering processes.
      ○ Frameworks control the app flow.
      ○ Frameworks enforce structure.
      ○ Frameworks provide comprehensive solutions.

  [03] What is CDN ?
  
    • Content Delivery Network (CDN) is a system of distributed servers that deliver web content to users based on their geographic location, the origin of the webpage, and a content delivery server. 
    • Primary goal of a CDN is to deliver content quickly, efficiently, & reliably to users across the globe.
  
  [04] Why do we use CDN ?
      
    • Improved Load Times -
      ○ Geographic Proximity - By serving content from servers closer to the user’s location, CDNs reduce latency and improve load times.
      ○ Caching - CDNs cache content at various locations, so when a user requests a webpage, the CDN can deliver the content from the nearest cache instead of the origin server.
    • Reduced Bandwidth Costs -
      ○ CDNs optimize the delivery of content, reducing the amount of data transferred from the origin server, which can lower bandwidth costs for website owners.
    • Enhanced Reliability and Availability -
      ○ Distributed Architecture - With content distributed across multiple servers, CDNs can handle server outages and network issues more effectively, ensuring continuous availability.
      ○ Load Balancing - CDNs can distribute traffic across multiple servers to prevent any single server from becoming overwhelmed.
    • Scalability -
      ○ CDNs can handle large amounts of traffic and sudden spikes in demand, making it easier for websites to scale their operations globally.
    • Security -
      ○ DDoS Protection - CDNs provide protection against Distributed Denial of Service (DDoS) attacks by distributing traffic across many servers and employing various mitigation strategies.
      ○ SSL/TLS Encryption - Many CDNs offer SSL/TLS encryption, ensuring secure data transfer between users and servers.
  
  [05] What is crossorigin in JS script tag ?
  
    • The crossorigin attribute in the <script> tag is used to handle the Cross-Origin Resource Sharing (CORS) settings for scripts. It is crucial for managing how cross-origin requests are made and how the responses are handled, enhancing both security and functionality when dealing with external scripts.
      
  [06] What is dependency injection ?
  
    • Dependency Injection (DI) is a design pattern used in software development to manage and inject dependencies into an object or class, rather than creating the dependencies within the object itself. This pattern helps achieve better modularity, easier testing, and greater flexibility in the design of applications.
  
    • Key Concepts of Dependency Injection -
      ○ Dependency - An object or service that a class or module needs to function properly. For example, a UserService might depend on a DatabaseService to retrieve user data.
      ○ Injection - The process of providing the dependencies to a class or module, typically through a constructor, method, or property.
  
    • Types of Dependency Injection -
      ○ Constructor Injection.
      ○ Setter Injection.
      ○ Property Injection.
      
    • Benefits of Dependency Injection -
      ○ Improved Modularity
      ○ Easier Testing
      ○ Flexibility and Maintainability
      ○ Code Reusability
</details>

### Episode 02 - Igniting our app - Deploying an app to production.

<details>
<summary>Notes</summary>

  [01] Why do we use npm ?

    • We use npm because only the react code is not sufficient and we need to use other helper packages in addition to the react code to make a production ready application. For e.g. Minifying code, bundling files, remove console logs, optimizing app etc. And these helper packages come inside npm.

      ○ git init : initializes a git repository in current directory.
      ○ npm init : initializes a package.json file in current directory.

    • npm - is used for managing packages but it doesn't stand for node package manager. 
    • It enables sharing and reusability of code.
    • It is used for -
      ○ Managing (installing, updating, uninstalling) packages/dependencies in your app.
      ○ Ensuring that the correct versions of libraries are installed and maintained.
      ○ Running scripts for tasks like testing, building, and deploying your application.

  [02] What is package.json ?

    • package.json is a configuration file for npm.
    • Contains metadata about project, its dependencies, scripts, and other settings.

  [03] What is a bundler ?

    • Bundler - tool used in web development to combine multiple files and modules into a single, cohesive file (or a few files). This process is essential for optimizing the delivery of assets in web applications, ensuring efficient loading times and better performance. e.g. Webpack, Parcel, Rollup, Vite etc.

    • Key Functions of a Bundler -

      ○ Combining Files - Bundlers take various assets (JavaScript, CSS, HTML, images, etc.) and combine them into a single or a few files. This reduces the number of HTTP requests needed to load a web page, which can significantly speed up the loading process.
        
      ○ Dependency Management - Bundlers analyse the dependencies between different modules in your codebase and include them in the correct order in the final bundle. This ensures that all dependencies are loaded before the code that depends on them runs.

      ○ Code Splitting - Bundlers can split your code into multiple bundles that can be loaded on demand, rather than loading the entire application at once. This technique, known as code splitting, helps to improve the initial load time of your application.

      ○ Minification - Bundlers often include tools to minify your code, which means removing unnecessary characters (like whitespace, comments, and new lines) without changing its functionality. Minified code is smaller in size and loads faster.

      ○ Transpiling - Many bundlers can transform modern JavaScript (ES6+) and other languages (like TypeScript) into a version of JavaScript that is compatible with older browsers. This process is called transpiling.

      ○ Asset Management - Bundlers can handle various types of assets, including stylesheets (CSS/SCSS), images, fonts, and other files, often optimizing and converting them to formats that are more efficient for the web.

  [04] Parcel

    • A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser. Bundler that we will be using is Parcel.
    • Parcel is a zero config bundler i.e. We do not need to create a lot of configs to use parcel.
    
    • Advantages of using parcel - https://parceljs.org/
      ○ Super-fast build algorithm using HMR (Hot Module Replacement).
      ○ Manages the port number in which our build is running. (if we have multiple builds running)
      ○ Enables HTTPS on local development machine.
      ○ Caching while development. (uses consistent hashing algorithm for caching)
      ○ Optimizing app.
      ○ Bundling files.
      ○ Minifying & Compressing code.
      ○ Remove console logs. (only if we use the babel plugin transform-remove-console)
        https://babeljs.io/docs/babel-plugin-transform-remove-console/
      ○ Image optimization.
      ○ Performs consistent hashing, code splitting.
      ○ Differential bundling - compatibility with older browser versions. (by adding polyfills)
      ○ Tree shaking. (removing unwanted code)
      ○ Diagnostics and error handling.
      ○ Creating dev and production builds and running our build in local server.

  [05] Why we need package-lock.json ?

    • To know the exact version of packages that are installed in our app when it is deployed to production.
    • It locks the version of the packages that are installed. It also maintains a hash (integrity), which ensures that whatever version of the package is running on the local system is also running on the production server.
    • NOTE - Never keep package-lock.json file in .gitignore file.

      ○ Normal dependencies - Dependency used in production also.
      ○ Dev dependencies - Dependency required only for development phase.
      ○ If we do not want a package to be available in production and only in development, we use the -D or --save-dev flag while installing the package. -D or --save-dev means dev dependency.
      ○ E.g. npm i -D parcel

    • NOTE - npm flags are case sensitive.

  [06] Difference between caret ^ and tilde ~
      
    https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json
      
    "devDependencies": {
      "parcel": "^2.10.3"
    }
      
    • ^ means version should auto upgrade whenever a minor fix is available. e.g. 2.10.3 to < 2.11.0
    • ~ means version should auto upgrade whenever a major fix is available. e.g. 2.10.3 to < 3.0.0
    • If nothing is specified before the version then there will be no upgrade.

  [07] Transitive dependencies

    • When we are building a production ready application, we need to perform a lot of activities.
    e.g. bundling, minification, caching, optimization, HMR etc. And to do these, we need packages. 
    • These packages are in turn dependent on other packages and this is known as transitive dependency.
    • The package manager (bundler in this case) takes care of our transitive dependencies.

  [08] Node modules

    • It is a folder containing the code of all our dependencies and transitive dependencies.
    • It is a collection of dependencies and acts like a database for all our packages, code, files.

  [09] Why we do not put node modules on git ?

    • This is because node-modules is a large file and we do not want it to occupy the space in git.
    • Also the package-lock.json file has sufficient information to re-create node-modules because it keeps a track of all the dependencies.

  [10] Igniting/Running the app using parcel

    • npx command is used to execute a package.
    • For e.g. To run our app we can use the command : npx parcel index.html
    • Here index.html is the entry point to our app, which will be used to build the app and then it is hosted in http://localhost:1234.
    
  [11] Importing react and react-dom from node modules instead of using CDN.

    • Earlier we were using CDN links to import the react library (not a preferred way) but now since we have installed react and react-dom library, we can use it from node modules folder. 
    • In order to use it from node modules, we will have to use the import statements. Also the script tag containing the App.js will need to have an attribute called type="module" this is because it is no longer a script tag but a module.

  [12] HMR - Hot Module Replacement
    
    • Whenever we write some code in app.js file and we save it, browser automatically refreshes to reflect the latest changes. This is being done by parcel and the process is called HMR.
    • File watcher algorithm (written in C++) is used to detect the changes in the file.
        
    • .parcel-cache folder is automatically generated, which is used by parcel for HMR, minification of code etc. Add .parcel-cache in .gitignore file because anything that can be generated on server should be put in gitignore.
        
    • .dist folder is automatically created which holds the minified files required to run a production app.
    
    • run command npx parcel index.html, to create development build which runs on the server.
    • run command npx parcel build index.html, to create production build which runs on the server.

  [13] Installing packages

    To install any package we can install it from the npm website.
    For e.g. To remove the console logs, we will have to install a babel plugin transform-remove-console
      npm install babel-plugin-transform-remove-console --save-dev
      
    To enable this package we have multiple options, we will be using a babel config file here to enable this plugin. Create a configuration file called .babelrc in the project root directory and add below code.
      
    {
      "plugins": [
        ["transform-remove-console", { "exclude": ["error", "warn"] }]
      ]
    }

</details>

### Episode 03 - Laying the foundation - Basics of JSX

<details>
<summary>Notes</summary>

  [01] Scripts
  
    • npm - It is used for installing the dependencies/packages inside a project.
    • npx - It is used to execute a dependency/package.
    • We can assume that npx is equivalent to npm run.
    
    • Scripts are used to execute commands. e.g. To create dev & prod build, execute tests etc.
    • Create a script by adding scripts in package.json file.
    • To run the script use command : npm run script_name
    
    "scripts": {
        "start": "parcel index.html",
        "build": "parcel build index.html"
    },
    
  [02] JSX & Babel
  
    • JSX is HTML/XML like syntax which is used to create react elements.
    • JSX attributes are written in camelCase. e.g. className, tabIndex.
    • JSX spanning more than 1 line must be wrapped in parenthesis ().
    • JSX elements are objects, which gets transpiled into HTML elements (when we pass it to the render() method), that the browsers can understand. This is done by Babel.
  
    • Babel : takes JSX code converts it to React.createElement()
    • render() : converts the object that we get from React.createElement() to HTML elements.
  
    • Babel is a JS compiler. It converts the modern JS code into browser compatible JS.
      ○ Polyfill - It is a code that acts as a replacement for a newer version of the code.
      ○ Babel transpiler is used to create polyfills automatically.
      ○ We can use the browserlist package to ensure that our code is compatible with older generation of browsers.
  
    • Why do we need JSX ?
      ○ When we are creating an application, we need to create a HTML DOM structure. If we try to create this structure using React.createElement() then the code gets messy due to lots of nested functions. In order to fix this issue, we use JSX to create the DOM in a simpler way.
      ○ NOTE - JSX is not HTML inside JavaScript, it just looks like HTML.
  
    • Advantages of JSX -
      ○ Improves readability, maintainability and developer experience
      ○ Provides syntactic sugar over React.createElement()
      ○ Write less code without repeating.
      ○ JSX also prevents XSS attacks by sanitizing the JS data that we pass in it.
          
    • Cross-site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.
  
  [03] React components
  
    • Components are independent & reusable code that describe a part of the UI.
    
    • There are 2 types of components -
    Class based components - OLD way - Uses JS classes to create components.
    Functional components - NEW way - Uses JS functions to create components.
      ○ JS functions returning JSX or a React element or a composition of elements is called functional components.
      ○ It is a good practice to use PascalCase for naming components.
      ○ Component composition - Placing components inside component.
      ○ To have nested elements we can return a div containing the nested elements.
      ○ In order to render a react component, we have to use the Component name inside </> brackets.
      ○ If we want to write JS code inside JSX, then we need to use {} and write the JS code inside the parenthesis.

</details>

## Credits
List of contributors:
- [Saurabh Das](dsumansaurabh@gmail.com)