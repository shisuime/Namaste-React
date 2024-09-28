import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import "@testing-library/jest-dom";
import React from "react";
import mock from "./mocks/mock.json";
import { MyProvider } from "../Context";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock);
    },
  });
});

test("should render body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <MyProvider>
          <Body />
        </MyProvider>
      </BrowserRouter>
    )
  );
  const cards1 = screen.getAllByTestId("resCard");
  expect(cards1.length).toBe(20);
  const searchbtn = screen.getByRole("button", { name: "search" });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchbtn);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});
