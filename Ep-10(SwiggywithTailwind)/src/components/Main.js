import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, { cardWithPromoted } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useMain from "../utils/hooks/useMain";
const MainComponent = () => {
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurants, searchData, errorMessage, allRestaurants] =
    useMain();

  const PromotedCard = cardWithPromoted(RestaurantCard);
  //conditional rendering
  if (filteredRestaurants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="main">
      <div className="my-3 flex justify-center">
        <input
          type="text"
          className="px-2 w-64 bg-slate-400 rounded-sm text-yellow-100"
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="mx-3 px-5 bg-slate-400 rounded-sm"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      <div className="my-4 flex flex-wrap mx-3 justify-center">
        {filteredRestaurants.map((r) => {
          return (
            <Link key={r.info.id} to={"/restaurant/" + r.info.id}>
              {r.info.promoted ? (
                <PromotedCard rdata={r.info} />
              ) : (
                <RestaurantCard rdata={r.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainComponent;
