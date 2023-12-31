import { useState } from "react";
import { LOGO_URL } from "../utils/urlList";
import { Link } from "react-router-dom";
import useInternet from "../utils/hooks/useInternet";

const Title = () => (
  <a href="/">
    <img
      className="w-20 h-15"
      src={LOGO_URL}
      alt="Foodie logo"
      title="Foodie Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  // const navigate = useNavigate();
  const onlineStatus = useInternet();
  if (onlineStatus == false) {
    alert("You are offline");
  }
  return (
    <div className=" h-16 flex justify-between bg-slate-600 items-center text-yellow-100">
      <Title />
      <div className="nav-items">
        <ul className="flex">
          <li className=" px-3 py-1 hover:bg-slate-700">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-3 py-1 hover:bg-slate-700">
            <Link to="/about">About</Link>
          </li>

          <li className=" px-3  py-1 hover:bg-slate-700">
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className=" px-3  py-1 hover:bg-slate-700">
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </li>
          <li className=" px-3  py-1 hover:bg-slate-700">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
          <li className="px-3">{onlineStatus ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
