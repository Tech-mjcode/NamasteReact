import { useContext } from "react";
import UserContext from "./UserContext";

const Card = () => {
  const data = useContext(UserContext);
  return (
    <div className="mx-3">
      <div className="bg-slate-500 rounded-lg w-60 h-52">
        <h1>{data.loggedInUser}</h1>
      </div>
    </div>
  );
};
export default Card;
