import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { RestaurantCard } from "../RestaurantCard";
import { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import { Header } from "../Header";
import { Cart } from "../Cart";

it("should have the data in the Restaurant component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantCard restaurantData={MOCK_DATA} />
      </Provider>
    </BrowserRouter>,
  );
  const resName = screen.getByText("Pizza Hut");
  expect(resName).toBeInTheDocument();
});

it("should have the top rated label on the restro card in the Restaurant component", () => {
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <PromotedRestaurantCard restaurantData={MOCK_DATA} />
      </Provider>
    </BrowserRouter>,
  );
  const topRatedlabel = screen.getByText("Top Rated");
  expect(topRatedlabel).toBeInTheDocument();
});

it("should add the restaurants in the cart after clicking add item button on the restro card in the Restaurant component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantCard restaurantData={MOCK_DATA} />
        <RestaurantCard restaurantData={MOCK_DATA} />
        <Cart />
      </Provider>
    </BrowserRouter>,
  );
  const addButton = screen.getAllByRole("button", { name: "add item" });
  fireEvent.click(addButton[0]);
  expect(screen.getByText("Cart - (1)")).toBeInTheDocument();
  fireEvent.click(addButton[1]);
  expect(screen.getByText("Cart - (2)")).toBeInTheDocument();
  const cards = screen.getAllByTestId("foodItems").length;
  expect(cards).toBe(2);
  const clearButton = screen.getByRole("button", { name: "Clear All" });
  fireEvent.click(clearButton);
  expect(
    screen.getByText(
      "Your cart is currently empty. Add some delicious items from our menu!",
    ),
  ).toBeInTheDocument();
});
