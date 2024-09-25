import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Headercomponent from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headercomponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByText("Log In");

  expect(loginButton).toBeInTheDocument();
});
test("Should render Header with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headercomponent />
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText(/Cart/);
  //   const loginButton = screen.getByText("Log In");

  expect(cartItem).toBeInTheDocument();
});
test("Should render Header with logout changed from login on Clock", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Headercomponent />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  fireEvent.click(loginButton);
  const logout = screen.getByRole("button", { name: "Log Out" });

  expect(logout).toBeInTheDocument();
});
