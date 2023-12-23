import React from "react";
import ReactDOM from "react-dom/client";

import NavCom from "./components/Nav";
import SearchCom from "./components/Search";
import Main from "./components/Main";
import Test from "./components/Test";
const AppCom = () => {
  return (
    <div className="main">
      <NavCom />
      <Main />
      {/* <Test /> */}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppCom />);
