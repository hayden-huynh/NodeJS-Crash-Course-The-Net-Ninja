# npm (NodeJS Package Manager)

- `npm init`: Create the `package.json` file inside the current directory to manage the dependencies for the current project
  
- Installing a package global with `npm install -g <package-name>`. Globally installed package can be used for all projects across your system
  
- Installing a package locally to the current project only with `npm install <package-name>`
  
- `npm install` will go ahead and install all packages listed under dependencies in package.json if they are not yet installed

# View Engines

- To create ***dynamic*** HTML views that can change according to different data, for example, from a database

- Basically, View Engine like EJS (used in this crash course) is for executing server-side JavaScript code _inside HTML files_ to render HTML elements based on particular data

- The act of using a View Engine on the server to form dynamic dynamic HTML templates is called server-side rendering

# Middleware

- In Express, they are the `app.use(...)` handlers that will be triggered by any kinds of request

- Middleware executes between request and response i.e. after receiving a request and before issuing a response

- Middleware handlers will be triggered in the order of top to bottom until a response is sent back. Middleware handlers after that reponse will be ignored
