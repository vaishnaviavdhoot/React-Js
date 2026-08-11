import { useEffect, useState } from "react";
import { SWIGGY_URL } from "./constants";

// Custom Hook
export const useRestaurantData = () => {
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SWIGGY_URL);

        const jsonData = await response.json();

        const restroData =
          jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        setRestaurantData(restroData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return restaurantData;
};
