import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";


export const Body = () => {
    const [data, setData] = useState(restaurantData);
    const handleTopRatedClick = () => {
        const filteredList = restaurantData?.data?.cards?.filter(
            (card) => card?.card?.card?.info?.avgRating > 4.5
        );
        setData({
    ...restaurantData,
    data: {
        ...restaurantData.data,
        cards: filteredList,
    },
});
        console.log(filteredList);
    }
    console.log('data:', data);
    
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants" />
        <button>Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {data?.data?.cards?.map((card) => (
          <RestaurantCard
            key={card?.card?.card?.info?.id}
            restaurantData={card}
          />
        ))}
      </div>
    </div>
  );
};