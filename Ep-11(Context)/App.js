import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Search from "./Search";
import Card from "./Card";
import UserContext from "./UserContext";
const App = () => {
  const [user, setUser] = useState("Manash");
  return (
    <div>
      <UserContext.Provider
        value={{ loggedInUser: user, sex: "male", setUser: setUser }}
      >
        <Header />
        <Search />
        <div className="flex">
          <Card />
          <Card />
        </div>
      </UserContext.Provider>

      <div className="flex">
        <Card />
        <Card />
      </div>

      <UserContext.Provider value={{ loggedInUser: "Elon" }}>
        <div className="flex">
          <Card />
          <Card />
        </div>
      </UserContext.Provider>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
