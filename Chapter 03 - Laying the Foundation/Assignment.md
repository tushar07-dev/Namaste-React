## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation


## Topics
- `JSX`
- `React.createElement` vs `JSX`
- `Benefits of JSX`
- `Behind the Scenes of JSX`
- `Babel` & `parcel` role in JSX
- `Components`
- `Functional Components`
- `Composing Components` 

<!-- NOTES -->
# React.createElement => is Object => while rendering it created to HTMLElement(redner);
    
    this is core react syntax which is complicated to understand:
    const heading = React.createElement("h1", {id: "heading"}, "Namaste React");
    but for long nested code it is to complicated & clumbsy to resolve this FB developers created JSX which is JavaScript syntax.

    we can write React without JSX also both are seperate JSX only help to developers to make it easy.

<!-- NOTES -->

## Theory Assignment:
- What is `JSX`?
JSX is syntax which is not HTML, it is like HTML or XML in js, this is JSX;
const heading = <h1 id="heading">Name</h1>
but this JSX is not understand to JS engine as it is not pure JS Ecma script.

# JSX code => babel transpile it to =>  convert to React.createElement => is Object => while rendering it created to HTMLElement(redner);

- Superpowers of `JSX`.
- writing javascript inside 
Jsx code  => Parcel using Babel, transpiled this code so react / JS engine can undestand => code go to JS engine Browser
- Role of type `attribute` in script tag? What `options can I use` there?
- `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.

JSX it is not HTML as attribute write in camalCase, use className istead of class,
//  This is JSX in single line
const heading = <h1 id="h1" key="h1"> This is JSX </h1>;

// This is JSX in multi-lines we mendatory wraped inside () so babel know where JSX is starting and ending.
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

# what is component composition ? 
we rendering two or more component one inside other is component compositions
e.g.
    <div>
        <Title/>
        <h1>Namaste React Functional component</h1>
    </div>
## Coding Assignment:
- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")
    - Create the `same element using JSX`
    - Create a `functional component of the same with JSX`
    - `Pass attribute` into the tag in `JSX`
    - `Composition of Component` (Add a component inside another)
    - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- Create a `Header Component` from scratch using `Functional Component` with JSX
    - Add a `Logo on Left`
    - Add a `search bar in middle`
    - Add `User icon on right`
    - Add `CSS to make it look nice`


## How JSX handle cross-site scripting (XSS) ?
cross-site scripting (XSS) is typically occur when untrusted data is rendered directly within JSX without proper sanitization
// Assuming userInput contains untrusted data
const userInput = '<script>alert("XSS attack!")</script>';

const App = () => {
  // Rendering userInput directly within JSX
  return (
    <div>
      {userInput}
    </div>
  );
}

To prevent XSS attacks in JSX, always sanitize user input before rendering it. You can use libraries like sanitize-html or dompurify to sanitize user input and prevent script execution. Here's how you could sanitize userInput using dompurify:

import DOMPurify from 'dompurify';
// Assuming userInput contains untrusted data
const userInput = '<script>alert("XSS attack!")</script>';

const App = () => {
  // Sanitizing userInput before rendering
  const sanitizedInput = DOMPurify.sanitize(userInput);

  return (
    <div>
      {sanitizedInput}
    </div>
  );
}

## References:
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type) 
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)

