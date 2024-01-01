import { useContext } from "react";
import UserContext from "./UserContext";

const Search = () => {
  const user = useContext(UserContext);
  return (
    <div className="flex justify-center my-2">
      <div>
        <input
          className="bg-blue-400"
          onChange={(e) => {
            console.log(user);
            const { setUser } = user;
            setUser(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;
