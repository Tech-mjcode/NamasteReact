import dataList from "../utils/data";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import apiData from "../utils/apidata";
import ShimmerUi from "./ShimmerUi";
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
    // const jsonData = await res.json();
    // console.log(jsonData);
    // update data state variable
    const data =
      apiData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setData(data);
    setfilterData(data);
  };

  //conditional rendering
  if (filterData.length == 0) {
    return <ShimmerUi />;
  }
  return (
    <div className="main">
      <div className="child-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            // console.log(e.target.value);
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            if (searchText.length == 0) {
              setfilterData(data);
            } else {
              const filterData = data.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setfilterData(filterData);
            }
          }}
        >
          Search
        </button>
        <div className="filter">
          <button
            onClick={() => {
              const filterData = data.filter((r) => r.info.avgRating >= 4.5);
              setfilterData(filterData);
            }}
          >
            Only 4.5 Star above resturant
          </button>
        </div>
      </div>

      <div className="res-container">
        {/* <ResCard /> */}
        {/* <ResCard data={rdata} /> */}

        {filterData.map((r) => {
          return <ResCard data={r} key={r.info.id} />;
        })}
      </div>
    </div>
  );
};

export default MainComponent;
