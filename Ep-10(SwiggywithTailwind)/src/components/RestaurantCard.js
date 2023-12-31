import { IMG_CDN_URL } from "../utils/commondata";

// Restaurant card component
const RestaurantCard = (props) => {
  const cloudinaryImageId = props.rdata.cloudinaryImageId;
  const name = props.rdata.name;
  const cuisines = props.rdata.cuisines;
  const areaName = props.rdata.areaName;
  const sla = props.rdata.sla;
  const costForTwo = props.rdata.costForTwo;
  const avgRatingString = props.rdata.avgRatingString;

  return (
    <div className="card w-72 h-[400px] p-4 m-4 bg-slate-400 rounded-lg">
      <img
        className="h-60 w-64 flex justify-center rounded-md"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className=" my-2 font-bold">{name}</h3>
      <h5 className="text-sm">{cuisines.join(", ")}</h5>

      <span className="p-2">
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "red" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "green" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? "₹200 for two"}</h4>
      </span>
    </div>
  );
};

//high order component
//which takes a component and return a component

export const cardWithPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute rounded-md mx-2 px-2 py-1 text-white font-bold bg-slate-800">
          Promoted
        </label>
        {/* <RestaurantCard rdata={props.rdata} /> */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
