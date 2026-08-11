import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { Shimmer } from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { useRestaurantData } from "../utils/useRestaurantData";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {
  // Custom Hooks
  const onlineStatus = useOnlineStatus();
  const resData = useRestaurantData();

  const dummyData = restaurantData?.data?.cards;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    setData(resData);
    setAllRestaurants(resData);
  }, [resData]);

  const handleTopRatedClick = () => {
    const filteredList = data.filter((card) => card?.info?.avgRating > 4.5);
    setData(filteredList);
  };

  const handleSearchClick = () => {
    const filteredList = allRestaurants.filter((card) =>
      card?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
    );
    setData(filteredList);
  };

  const handleClearSearch = () => {
    setSearchText("");
    setData(allRestaurants);
  };
        if (onlineStatus === false){
          return(
            <h1>Looks like you're offline!!! Please check your Internet Connection.</h1>
          )
        }
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            if (e.target.value === "") {
              setData(allRestaurants);
            }
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>
        <button className="clear-search-btn" onClick={handleClearSearch}>
          Clear Search
        </button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleTopRatedClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {data.map((card) => (
          <RestaurantCard
            key={card?.card?.card?.info?.id || card?.info?.id}
            restaurantData={card}
          />
        ))}
      </div>
    </div>
  );
};
