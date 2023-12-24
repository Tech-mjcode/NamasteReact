import { useState } from "react";
import { LOGO_URL } from "../utils/urlList";
import { Link } from "react-router-dom";
const NavCom = () => {
  console.log("Header render");
  const [value, setValue] = useState("Login");
  return (
    <div className="nav">
      <div className="logo-container">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact-us"}>Contact</Link>
          </li>

          <li>
            <button
              className="login-btn"
              onClick={() => {
                value === "Login" ? setValue("Logout") : setValue("Login");
              }}
            >
              {value}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavCom;
