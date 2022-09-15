# 0 - Introduction:
## Compilers and Bundlers
- Compilers: compiles files to older browsers understand newer codes -> Babel.
- Bundlers: bundles files from different files and extensions in just one -> Webpack.

> Recommended site to check more about resources and its accessibility: [https://caniuse.com/]
## create-react-app 

### JavaScript

```npx create-react-app 'folderProjectName'``` or ```npx create-react-app .``` *(can also be yarn)* to use the current folder for the project.

Is also possible to use ```npm install -g create-react-app``` and then just ```create-react-app .``` to decrease the loading time.

Babel and/or Webpack are always required to develop React, but using npx create-react-app everything is already settled.

However, to manually configure React.js to your index.html, is possible import the scripts thus:

```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
### TypeScript

```yarn create react-app folderProjectName --template typescript'``` *(can also be npx)* to do the same as the JavaScript example above but for TypeScript structure.

## Vite
- Use by standard ESM (EcmaScript Modules), no bundling required, and also, it has an automatic compiling process.
# 1 - 
