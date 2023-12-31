/*

  <div id = "parent">
      <div id = "child1">
          <h1>I am h1 tag </h1>
          <h2>I am h2 tag </h2>
      </div>
      <div id = "child2">
          <h1>I am h1 tag </h1>
          <h2>I am h2 tag </h2>
      </div>
  </div>

*/
// const h1 = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react"
// );

// const myDiv = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("h1", {}, "I am h1 tag")
//   )
// );

// const myDiv = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am h2 tag"),
//   ])
// );

const myDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myDiv);
