import { CDN_URL } from "../utils/constants.js";
export const RestaurantCard = (props) => {
  console.log(props);
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } =
    restaurantData?.card?.card?.info;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#DBE2E9" }}>
      <img
        className="restaurant-logo"
        src={ CDN_URL + cloudinaryImageId }
        alt="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{restaurantData?.card?.card?.info.sla?.deliveryTime} mins</h4>
    </div>
  );
};