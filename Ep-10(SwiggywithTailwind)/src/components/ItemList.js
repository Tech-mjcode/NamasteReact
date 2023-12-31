import { IMG_CDN_URL } from "../utils/commondata";

const ItemList = (props) => {
  const itemsList = props.items;
  return (
    <div>
      {itemsList.map((item) => (
        <div
          key={item.card.info.id}
          className="my-3 border-b-2 border-gray-600"
        >
          <div className="flex justify-between">
            <div className="py-2">
              <h3 className="font-bold">{item.card.info.name}</h3>
              <span className="py-2">
                {" "}
                &#8377; {item.card.info.price / 100}
              </span>
            </div>

            <div className="px-3 flex flex-col">
              <img
                alt="no image"
                src={IMG_CDN_URL + item.card.info.imageId}
                className=" w-24 h-20 rounded-lg"
              />
              <button className="px-2 my-2 bg-slate-500 rounded-lg shadow-lg shadow-stone-200">
                add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
