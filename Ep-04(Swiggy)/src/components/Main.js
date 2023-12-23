import dataList from "../utils/data";
import ResCard from "./ResCard";
import { useState } from "react";

const MainComponent = () => {
  //hooks
  //pass my dataList to ustState
  const [data, setData] = useState(dataList);
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
