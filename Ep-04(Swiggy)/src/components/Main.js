import dataList from "../utils/data";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const MainComponent = () => {
  //hooks
  //pass my dataList to useState
  // const [data, setData] = useState(dataList);
  const [data, setData] = useState([]);

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://randomuser.me/api/");

    // const data = await res.json();
    // update data state variable
    console.log(dataList);
    setData(dataList);
  };

  //conditional rendering
  if (data.length == 0) {
    return (
      <div className="shimmer-container">
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
        <div className="shimmer"></div>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="filter">
        <button
          onClick={() => {
            const filterData = data.filter((r) => r.info.avgRating >= 4);
            setData(filterData);
          }}
        >
          Only 5 Star resturant
        </button>
      </div>
      <div className="res-container">
        {/* <ResCard /> */}
        {/* <ResCard data={rdata} /> */}

        {data.map((r) => {
          return <ResCard data={r} key={r.info.id} />;
        })}
      </div>
    </div>
  );
};

export default MainComponent;
