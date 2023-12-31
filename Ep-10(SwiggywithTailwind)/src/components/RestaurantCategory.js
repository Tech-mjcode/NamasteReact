import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data } = props;
  const { showItem } = props;
  const { setShowIndex } = props;
  return (
    <div className="bg-gray-200 rounded-md w-6/12 py-2 px-4 my-3 shadow-md shadow-slate-700">
      <div
        className="flex justify-between hover:cursor-pointer"
        onClick={() => {
          setShowIndex();
        }}
      >
        <span>
          {data.title} ({data.itemCards.length}){" "}
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
