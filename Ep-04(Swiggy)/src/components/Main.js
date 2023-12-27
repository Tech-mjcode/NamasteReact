import { useState, useEffect } from "react";
import apiData from "../utils/apidata";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const MainComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //useEffect
  useEffect(() => {
    // console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data =
      apiData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(data);
    setFilteredRestaurants(data);
  };

  // Filter the restaurant data according input type
  function filterData(searchText, restaurants) {
    const resFilterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
  }
  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      console.log(filteredData);
      if (filteredData.length == 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
        setFilteredRestaurants(restaurants);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

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
