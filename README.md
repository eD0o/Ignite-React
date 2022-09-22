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

- Uses by default ESM (EcmaScript Modules), no requires bundling and has an automatic compiling process.
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

## 1.2 - Properties

The main purpose of props in React is to provide the following component functionality:

- Pass custom data/information to your React component(s).
- Trigger state changes

We can say that props are the input parameters of a component.

Example:

```javascript
function Welcome(props) {
  return (
    <>
      {props.name.map((item) => {
        <p>Hello, {name}</p>;
      })}
    </>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Eduardo" />
      <Welcome name="Arthur" />
      <Welcome name="John" />
    </div>
  );
}
```

- `.map()` is usually a better choice than `.forEach()` to iterate data, precisely to be able to return info or other components as response.

> [Example 1 using props with desestructuring](https://github.com/eD0o/Ignite-React/blob/project1/3-1and2_iterating-on-jsx/src/components/Post/Post.jsx) > [Example 2 using props with desestructuring](https://github.com/eD0o/Ignite-React/blob/project1/3-3_useState/src/components/Post/Post.jsx)

# 2 - Starting and Structuring Project

The first project of the course will be the **Ignite Feed**, that is a micro platform of Post and Comments.

![](https://i.imgur.com/EpTVGiP.png)

> [Link of Figma](https://www.figma.com/community/file/1113573231685349036)

## 2.1 - CSS Modules

Useful for modular and reusable CSS, also:

- Avoid conflicts.
- Explicit dependencies.
- No global scope.

To use it, just import the file named with the structure as `Style.module.css` and use the syntax below with the name of the class as wished:

```javascript
import styles from "./Header.module.css";

import igniteLogo from "../../assets/ignite_logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
```

For local class names camelCase naming is recommended, but not enforced.

> This is recommended because the common alternative, kebab-casing may cause unexpected behavior when trying to access `style.class-name` as a dot notation. You can still work around kebab-case with bracket notation (eg. `style['class-name']`) but `style.className` is cleaner.

> If possible, always use Sass, Sass has features that don't exist in CSS yet like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS.

# 3 - React Principles

## 3.1 - Hook: useState

The React useState _Hook_ allows us to track state in a function component.
State generally refers to data or properties in variables that need to be tracking in an application.

We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:
1 - The current state.
2 - A function that updates the state.

```javascript
import React, { useState } from "react";

function Example() {
  //declaring the useState with its structure and a default/initial value
  const [count, setCount] = useState(0);

  //function to manage both click event and the state
  const handleClick = () =>{
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```