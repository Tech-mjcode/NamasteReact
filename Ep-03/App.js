import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (
  <h1 id="if" className="head">
    Heading from JSX
  </h1>
);
//wrap this code inside () because there are multiple line

// funtional component

const C1 = () => {
  return (
    <div id="container-1">
      <h1>I am heading 1</h1>
      <h1>I am heading 2</h1>
    </div>
  );
};

const C2 = () => (
  <div id="container-2">
    <p>lorem.</p>
    <p>I am fdsfkljfsd 2</p>
  </div>
);

const MainComponent = () => (
  <div id="main">
    <C1 />
    <C2 />
  </div>
);

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<MainComponent />);
