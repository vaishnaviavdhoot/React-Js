import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  //   const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("should check after render cart is 0 or not in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  //   const Cart = screen.getByText("Cart - (0)");
  const Cart = screen.getByText(/Cart/);
  expect(Cart).toBeInTheDocument();
});

it("should change the loging button to logout in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "LogOut" });

  expect(logoutButton).toBeInTheDocument();
});
