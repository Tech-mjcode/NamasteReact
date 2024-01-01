import { useContext } from "react";
import UserContext from "./UserContext";

const Header = () => {
  const user = useContext(UserContext);
  return (
    <div className="h-16 bg-slate-400 flex justify-between">
      <div className="flex items-center">
        <span>logo</span>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact us</li>
          <li className="p-3">{user.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
