import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => <h1 id="1">heading 1</h1>;
const Heading2 = () => <h2 id="2">heading 2</h2>;
const Heading3 = () => <h3 id="3">heading 3</h3>;

const Header = () => {
  return (
    <div className="title">
      <Heading1 />
      <Heading2 />
      <Heading3 />
    </div>
  );
};

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(<Header />);
