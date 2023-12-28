import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useMain from "../utils/hooks/useMain";
const MainComponent = () => {
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurants, searchData, errorMessage, allRestaurants] =
    useMain();

  //conditional rendering
  if (filteredRestaurants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="main">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      <div className="restaurant-list">
        {filteredRestaurants.map((r) => {
          return (
            <Link key={r.info.id} to={"/restaurant/" + r.info.id}>
              <RestaurantCard rdata={r.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainComponent;
