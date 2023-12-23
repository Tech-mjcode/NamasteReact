const ResCard = (pros) => {
  // console.log(pros);
  const { data } = pros;
  const { name, cuisines, avgRating } = data.info;
  return (
    <div className="res-card">
      <img
        width="230px"
        height="200px"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.info.cloudinaryImageId
        }
      ></img>
      {/* <h2>{data.info.name}</h2> */}
      <h2>{name}</h2>
      <h3>200</h3>
      {/* <h4>{data.info.cuisines}</h4> */}
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating}</h4>
      <h5>33 min</h5>
    </div>
  );
};

export default ResCard;
