import { useParams } from "react-router-dom"; // import useParams for read `resId`
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import { IMG_CDN_URL, ITEM_IMG_CDN_URL } from "../utils/commondata";

import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = (props) => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  //make custom hooks useRestaurant it return and use array destructure
  const [restaurant, categories] = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(3);

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="my-5">
      <div className=" flex flex-wrap  justify-center text-black">
        <img
          className="h-40 rounded-lg"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className="mx-10">
          <h2 className="font-extrabold p-3">{restaurant?.name}</h2>
          <p className="font-semibold px-3">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="flex">
            <div
              className="p-3 text-black"
              style={
                restaurant?.avgRating < 4
                  ? { backgroundColor: "red" }
                  : restaurant?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "green" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="p-3">|</div>
            <div className="p-3">{restaurant?.sla?.slaString}</div>
            <div className="p-3">|</div>
            <div className="p-3">{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      {/* //categories list */}
      <div className="my-5 flex flex-col items-center">
        {categories.map((c, index) => (
          <RestaurantCategory
            key={index}
            data={c.card.card}
            showItem={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
