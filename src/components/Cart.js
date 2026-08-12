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
     <div className="m-2 p-2">
      <h1 className="flex justify-center text-4xl font-bold mb-2">Shopping Cart</h1>
      <p>
        Your cart is currently empty. Add some delicious items from our menu!
      </p>
    </div>
  );
};
