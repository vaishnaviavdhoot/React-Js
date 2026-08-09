import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const dummyData = restaurantData?.data?.cards;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9985859&lng=77.59202060000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        );
        const jsonData = await response.json();
        const restroData =
          jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setData(restroData);
        setAllRestaurants(restroData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
