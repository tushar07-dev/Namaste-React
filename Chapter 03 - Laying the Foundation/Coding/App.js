// ## Namaste React Course by Akshay Saini
// # Chapter 03 - Laying the Foundation

/*
 * This are the feature of Parcel
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

// Create Header element like navbar using createElement
/*
 * 
<div class="header">
<h1>Title</h1>
<ul>
<li>Home</li>
<li>About Us</li>
</ul>
 * 
 * 
 */
// const heading = ce(
//   "div",
//   {
//     className: "header",
//     key: "header",
//   },
//   [ce(
//     "h1",
//     {
//       key: "Title",
//     },
//   "Title"), ce(
//     "ul",
//     {
//       key: "ul",
//     },
//   [ce(
//     "li",
//     {
//       key: "Home",
//     },
//   "Home"),ce(
//     "li",
//     {
//       key: "About Us",
//     },
//   "About Us")])]
// )

// create header element using JSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)

// React element :
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

const link = (
  <a href="https://example.com" id="link" key="link">
    Click here
  </a>
);

// React Component :
// Functional component - is function that return JSX code is functional component. 
// Class component - old way of writing component

// Title component is functional component
// way1 with curly brace and without () for multi line with return
const Title = () => {
  return <h1 id="title" key="title">Namaste React</h1>
}
// way2 with curly bracy with () for multi line with return
const Title2 = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}
// way3- without {} with () without return 
const Title3 = () => (<h1 id="title" key="title">Namaste React</h1>)

// way3- without {} without ()  without return
const Title4 = () => <h1 id="title" key="title">Namaste React</h1>

// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
      {link} // adding React element inside React component
      {header} // adding React element inside React component
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// to render react element  inside root 
root.render(heading);

// to render react compoent inside root
root.render(<HeaderComponent/>);
