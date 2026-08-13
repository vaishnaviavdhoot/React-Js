import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(removeItem(index));
  };
  console.log("11111", items);
  return (
    <div>
      {items.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-bold">
              <span>{item.info.name}</span>
            </div>
            <div className="py-2">
              <span>{item.info.areaName}</span>
            </div>
            <div className="py-2">
              <span>{item.info.availability.nextCloseTime}</span>
            </div>
            <div className="py-2">
              <span>{item.info.avgRating}</span>
            </div>
            <p className="text-xs">{item.info.cuisines.join(",")}</p>
            <button
              className="mt-4 bg-red-200 px-2 py-1 rounded"
              onClick={() => handleDelete(index)}
            >
              Remove Item
            </button>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute"></div>
            <img
              src={CDN_URL + item.info.cloudinaryImageId}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
