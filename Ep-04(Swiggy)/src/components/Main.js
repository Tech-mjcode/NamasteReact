import { useState, useEffect } from "react";
import apiData from "../utils/apidata";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const MainComponent = () => {
  //hooks
  //pass my dataList to useState
  // const [data, setData] = useState(dataList);
  const [data, setData] = useState([]);
  const [filterData, setfilterData] = useState([]);

  const [searchText, setSearchText] = useState("");

  //useEffect
  useEffect(() => {
    console.log("use effect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
    );
    // // const jsonData = await res.json();
    // console.log(jsonData);
    // update data state variable
    // console.log(res);

    const data =
      apiData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setData(data);
    setfilterData(data);
  };

  //conditional rendering
  if (filterData.length == 0) {
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
      <div className="restaurant-list">
        {/* <ResCard /> */}
        {/* <ResCard data={rdata} /> */}

        {filterData.map((r) => {
          // return <ResCard data={r} key={r.info.id} />;
          return <RestaurantCard rdata={r.info} key={r.info.id} />;
        })}
      </div>
    </div>
  );
};

export default MainComponent;
