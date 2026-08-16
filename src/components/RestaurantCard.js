import { CDN_URL } from "../utils/constants.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

export const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const dispatch = useDispatch();
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating } =
    restaurantData?.card?.card?.info || restaurantData?.info;

  const handleAddItem = (name) => {
    dispatch(addItem(name));
  };

  return (
    <div data-testid="resCard" className="m-2 p-2 w-[250px] h-[500px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{restaurantData?.info.sla?.deliveryTime} mins</h4>
      <button
        className="p-2 bg-green-100 rounded-lg"
        onClick={() => handleAddItem(restaurantData)}
      >
        add item
      </button>
      <h4 className="font-bold">User: {loggedInUser}</h4>
    </div>
  );
};

// example of higher order component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    console.log("PROMOTED COMPONENT RENDERED");
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg z-10">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
