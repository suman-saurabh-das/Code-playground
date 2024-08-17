// The idea behind using react is to modify the DOM using javascript.
// DOM manipulation is a costly operation and libraries such as react try to optimize it.

// createElement() - used to create a react element, which is an object.
// It accepts 3 parameters -> tag name, tag attributes, children for the tag.
const heading = React.createElement("h1", { id: "heading" }, "Let's get started with React!");

// createRoot() - used to create a root, where all our React elements will get rendered.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render method converts the heading object into a HTML element and renders it on screen.
// root.render() method will only replace the contents of the DOM element with id="root"
root.render(heading);

// Nested structure using createElement --------------------------------------------------
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Let's get started with React!")
  )
);
root.render(parent);

// Nested sibling elements using createElement --------------------------------------------------
// Children attribute can accept an array of React.createElement()
const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement(
    "div",
    { id: "child2" },
    [
      heading,
      React.createElement(
        "img",
        { src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-206.png" },
        null
      ),
      React.createElement(
        "h2",
        null,
        "Docs at react.dev provide documentation for the latest version of React."
      ),
      React.createElement(
        "a",
        { href: "https://react.dev/versions" },
        "https://react.dev/versions"
      )
    ]
  )
);
root.render(parent2);