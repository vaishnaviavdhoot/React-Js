import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mocks/resListDataMock.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should render the all the cards in body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const allCards = screen.getAllByTestId("resCard");
  expect(allCards.length).toBe(20);
});

it("should render cards based on search text in the body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const button = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput)
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  fireEvent.click(button);
  // expect(button).toBeInTheDocument()

  // Screen should load burger cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});

it("should disply top rated restaurants in body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>,
    ),
  );
  const topRated = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRated);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
});
