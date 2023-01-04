const heading1 = React.createElement(
  "h1",
  null,
  "Namaste everyone from React!"
);
const heading2 = React.createElement("h1", null, "heading 2");
const heading3 = React.createElement("h1", null, "heading 3");
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2, heading3]
);
const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render([heading1, heading2, heading3]);
