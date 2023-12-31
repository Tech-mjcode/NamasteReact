import { useEffect, useState } from "react";

import all_menu from "../menudata/all_menu";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../commondata";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      //   const json = await res.json();

      //data from my own file
      const singleResturantObject = all_menu.filter((i) => {
        return i.data?.cards[0].card?.card?.info?.id === resId;
      });

      // console.log("Res data", resData[0]?.data.cards[0].card.card.info.name);

      const restaurantData =
        singleResturantObject[0].data.cards[0].card.card.info;

      setRestaurant(restaurantData);

      //   Set categories

      const cat =
        singleResturantObject[0].data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (cards) => {
            return cards?.card?.card?.["@type"] === MENU_ITEM_TYPE_KEY;
          }
        );
      setCategories(cat);
    } catch (error) {
      setCategories([]);
      setRestaurant({});
      console.log(error);
    }
  };
  return [restaurant, categories];
};

export default useRestaurantMenu;
