import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./Itemlist";

export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  // Custom Hook
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!!! Please check your Internet Connection.
      </h1>
    );
  }

  const handleClearAll = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-2 p-2">
      <h1 className="flex justify-center text-4xl font-bold mb-2">
        Shopping Cart
      </h1>
      <div className="flex justify-center items-center">
        <button
          className="px-4  py-1 bg-green-100 m-2 rounded-lg"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>
          Your cart is currently empty. Add some delicious items from our menu!
        </p>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};
