import { useEffect } from "react";

export const RestaurantMenu = () => {
    const fetchMenu = async () => {
        try {
            const response = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9985859&lng=77.59202060000001&restaurantId=10591&catalog_qa=undefined&submitAction=ENTER",
    {
        credentials: "include",
    }
);

console.log("Response:", response);

const jsonData = await response.json();

console.log("Restaurant Menu Data:", jsonData);
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div>
            <h1>Restaurant Menu</h1>
            <p>
                Explore our diverse menu filled with delicious dishes
                crafted by our talented chefs.
            </p>
        </div>
    );
};