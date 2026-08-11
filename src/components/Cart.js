import { useOnlineStatus } from "../utils/useOnlineStatus";
export const Cart = () => {
  // Custom Hook
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!!! Please check your Internet Connection.
      </h1>
    );
  }
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <p>
        Your cart is currently empty. Add some delicious items from our menu!
      </p>
    </div>
  );
};
