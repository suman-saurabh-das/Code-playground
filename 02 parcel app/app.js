import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  React.createElement() -> Creates an object and when we render this object in the DOM,
  it gets converted into an HTML element.
  ReactDOM.createRoot() -> Creates a root element, inside which our react code will render.
  Anything inside the root will be replaced by react.createElement()
*/

// React element created using createElement() --------------------------------------------------

const heading = React.createElement(
  "h1",
  { id: "main-heading" },
  "React App created using parcel 📦"
);
console.log(heading);

// React element created using JSX

// JSX -> converted into React.createElement() : Object -> render() : HTML element
const jsxHeading = <p>JSX - is JavaScript syntax which is used to create React elements. JSX is not HTML inside JavaScript</p>
console.log(jsxHeading);

const container = <div>
  {heading}
  {jsxHeading}
</div>

// Rendering a react element
root.render(container);

// React functional components --------------------------------------------------

const HeadingComponent = () => {
  return <h1 id="main-heading">React App created using parcel 📦</h1>
}

const ParagraphComponent1 = () => (
  <p>
    <strong>Functional component</strong> - JS functions returning JSX or a React element or a composition of elements is called functional components.
  </p>
);

const namingConvention = <p>It is a good practice to use PascalCase for naming components.</p>;

const jsInsideJSX = "If we want to write JS code inside JSX, then we need to use {} and write the JS code inside the parenthesis.";

// Component composition

const Container = () => {
  return <div id="container">
    <HeadingComponent />
    <ParagraphComponent1 />
    {namingConvention}
    <p>{jsInsideJSX}</p>
    <p>e.g. Sum of 10 and 20 is {10 + 20}</p>
  </div>
}

// Rendering a component
root.render(<Container />);