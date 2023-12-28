import { useEffect, useState } from "react";

import all_menu from "../menudata/all_menu";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "../commondata";

const useRestaurantMenu = (resId) => {
  console.log("menu hook called");
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    console.log("use effect called");
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);
  const getRestaurantInfo = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      //   const json = await res.json();

      //data from my own file
      let resData = all_menu.filter((i) => {
        return i.data?.cards[0].card?.card?.info?.id === resId;
      });

      // Set restaurant data
      const restaurantData =
        resData[0]?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;

      setRestaurant(restaurantData);

      //   Set menu item data
      const menuItemsData =
        resData[0]?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  };
  return [restaurant, menuItems];
};

export default useRestaurantMenu;
