import dataList from "../utils/data";
import ResCard from "./ResCard";

const MainComponent = () => {
  return (
    <div className="res-container">
      {/* <ResCard /> */}
      {/* <ResCard data={rdata} /> */}

      {dataList.map((r) => {
        return <ResCard data={r} key={r.info.id} />;
      })}
    </div>
  );
};

export default MainComponent;
