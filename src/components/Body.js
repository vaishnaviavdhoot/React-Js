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
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!!! Please check your Internet Connection.
      </h1>
    );
  }
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-center items-center gap-2 m-4">
        <input
          type="text"
          className=" border border-solid border-black"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            if (e.target.value === "") {
              setData(allRestaurants);
            }
            setSearchText(e.target.value);
          }}
        />
        <button className="px-4 py-1 bg-green-100 m-2 rounded-lg" onClick={handleSearchClick}>
          Search
        </button>
        <button className="px-4 py-1 bg-green-100 m-2 rounded-lg" onClick={handleClearSearch}>
          Clear Search
        </button>
        
      </div>
      <div className="flex justify-center items-center">
        <button className="px-4  py-1 bg-green-100 m-2 rounded-lg" onClick={handleTopRatedClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center">
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
