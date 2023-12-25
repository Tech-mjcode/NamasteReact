import { IMG_CDN_URL } from "../utils/commondata";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (props) => {
  const cloudinaryImageId = props.rdata.cloudinaryImageId;
  const name = props.rdata.name;
  const cuisines = props.rdata.cuisines;
  const areaName = props.rdata.areaName;
  const sla = props.rdata.sla;
  const costForTwo = props.rdata.costForTwo;
  const avgRatingString = props.rdata.avgRatingString;

  return (
    <div className="card">
      <img height="250px" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
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

export default RestaurantCard;
