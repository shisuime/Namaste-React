import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    key: "1",
  },
  "heading1"
);
const heading2 = React.createElement(
  "h2",
  {
    key: "2",
  },
  "heading 2"
);
const heading3 = React.createElement(
  "h3",
  {
    key: "3",
  },
  "heading 3"
);
const container = React.createElement(
  "div",
  {
    className: "title",
  },
  [heading1, heading2, heading3]
);
const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(container);
