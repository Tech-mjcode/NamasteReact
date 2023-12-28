import React from "react";
import ReactDOM from "react-dom/client";
import HeaderClass from "./src/HeaderClass";

const App = () => {
  return (
    <div className="App">
      <HeaderClass />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
