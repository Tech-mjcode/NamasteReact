import React from "react";
import ReactDOM from "react-dom/client";

import NavCom from "./components/Nav";
import SearchCom from "./components/Search";
import Main from "./components/Main";

const AppCom = () => {
  return (
    <div className="main">
      <NavCom />
      <SearchCom />
      <Main />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppCom />);
