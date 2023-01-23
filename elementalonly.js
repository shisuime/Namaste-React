import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1 id="1">heading 1</h1>;
const heading2 = <h2 id="2">heading 2</h2>;
const heading3 = <h3 id="3">heading 3</h3>;
const header = <div className="title">{[heading1, heading2, heading3]}</div>; //element

const doc = document.getElementById("root");
const root = ReactDOM.createRoot(doc);
root.render(header);
