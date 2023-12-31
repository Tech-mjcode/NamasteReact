import { useState, useEffect } from "react";
import apiData from "../apidata";
const useMain = () => {
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
  return [filteredRestaurants, searchData, errorMessage, allRestaurants];
};

export default useMain;
