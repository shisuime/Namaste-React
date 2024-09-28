import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
const { act } = require("react");
import RestaurantMenu from "../RestaurantMenu.jsx";

import MOCK_DATA from "./mocks/resMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.jsx";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

test("should load restaurant menu component", async () => {
  // Mock the necessary fetch calls and rendering
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const titleElement = screen.getByText("Recommended(11)");
  expect(titleElement).toBeInTheDocument();
});
