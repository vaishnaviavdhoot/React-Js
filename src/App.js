import React,{ lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Cart } from "./components/Cart";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";

/***
 * Chunking
 * code splittinf
 * Dynamic Bundling
 * lazy loading
 * on Demand loading
 * dynamic import 
 */

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  // Custom Hook
    
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
       {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <AboutUs />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/grocery",
          element:( <Suspense fallback={<h1>Loading ....</h1>}> <Grocery /></Suspense> )
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />
        }
          ],
          errorElement: <Error />
        },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
