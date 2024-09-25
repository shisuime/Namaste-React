import { render, screen } from "@testing-library/react";
import React from "react";
import RestrauntCard from "../RestrauntCard";
import { withOpenLabel } from "../RestrauntCard";
import Mock_data from "./mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props", () => {
  render(<RestrauntCard resData={Mock_data} />);

  //query
  const nameData = screen.getByText("Pizza Hut");

  expect(nameData).toBeInTheDocument();
});
it("Should render RestaurantCard component with props", () => {
  const PromotedLabel = withOpenLabel(RestrauntCard);

  render(<PromotedLabel resData={Mock_data} />);

  //query
  const nameData = screen.getByText("open");

  expect(nameData).toBeInTheDocument();
});
