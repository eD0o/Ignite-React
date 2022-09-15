# 0 - React Installation:

## Compilers and Bundlers

- Compilers: compiles files to older browsers understand newer codes -> Babel.
- Bundlers: bundles files from different files and extensions in just one -> Webpack.

> Recommended site to check more about resources and its accessibility: [https://caniuse.com/]

## create-react-app

### JavaScript

`npx create-react-app 'folderProjectName'` or `npx create-react-app .` _(can also be yarn)_ to use the current folder for the project.

Is also possible to use `npm install -g create-react-app` and then just `create-react-app .` to decrease the loading time.

Babel and/or Webpack are always required to develop React, but using npx create-react-app everything is already settled.

However, to manually configure React.js to your index.html, is possible import the scripts thus:

```html
<script
  src="https://unpkg.com/react@16/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
  crossorigin
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

### TypeScript

`yarn create react-app folderProjectName --template typescript'` _(can also be npx)_ to do the same as the JavaScript example above but for TypeScript structure.

## Vite

- Use by standard ESM (EcmaScript Modules), no bundling required, and also, it has an automatic compiling process.
- `npm create vite@latest` or `yarn create vite`
- The only problem is when you need to use libraries that depend too much on Webpack, but for most several cases, Vite is more recommended in general.

# 1 - Fundamentals

## 1.1 - Components

- index.html will only receive inside the body tag the root div and script module of the .jsx/.tsx that has its render method
- Hugely used to fragment an application in React, in order to be **easier to maintain, reuse and scale**.
- A component in React is a function that returns HTML (or JSX = JavaScript + XML (a kind of HTML)).
  > Thus, all components must have an .jsx or .tsx extension.
- Mandatorily, the return method needs a father or fragment element involving others.

  It can be any of these examples:

```javascript
return (
  <>
    <p>Hello World</p>
    <p>How you doin'</p>
  </>
);
```

```javascript
return (
  <React.Fragment>
    <ComponentA />
    <ComponentB />
    <ComponentC />
  </React.Fragment>
);
```

```javascript
return (
  <div className="post-container">
    <Post />
    <Comment />
  </div>
);
```
